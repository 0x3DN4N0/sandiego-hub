import type { SDEvent } from "@/types";

const DISCOVERY_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const SAN_DIEGO_LATLONG = "32.7157,-117.1611";
const SEARCH_RADIUS_MILES = "50";
const PACIFIC = "America/Los_Angeles";

type TicketmasterPriceRange = {
  min?: number;
  max?: number;
};

type TicketmasterClassification = {
  primary?: boolean;
  segment?: { name?: string };
  genre?: { name?: string };
  subGenre?: { name?: string };
};

type TicketmasterVenue = {
  name?: string;
};

type TicketmasterEvent = {
  id: string;
  name: string;
  info?: string;
  pleaseNote?: string;
  url?: string;
  dates?: {
    start?: {
      localDate?: string;
      localTime?: string;
      dateTime?: string;
      dateTBD?: boolean;
      timeTBD?: boolean;
      noSpecificTime?: boolean;
    };
  };
  classifications?: TicketmasterClassification[];
  priceRanges?: TicketmasterPriceRange[];
  _embedded?: {
    venues?: TicketmasterVenue[];
  };
};

type TicketmasterResponse = {
  _embedded?: {
    events?: TicketmasterEvent[];
  };
};

const SEGMENT_CATEGORY_MAP: Record<string, string> = {
  Music: "Music",
  "Arts & Theatre": "Arts",
  Sports: "Sports",
  Film: "Arts",
  Miscellaneous: "Misc",
};

const OUTDOOR_KEYWORDS =
  /\b(park|beach|outdoor|amphitheater|amphitheatre|fairground|pier|bay|stadium|field|zoo|garden|plaza)\b/i;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getPrimaryClassification(event: TicketmasterEvent) {
  return (
    event.classifications?.find((c) => c.primary) ?? event.classifications?.[0]
  );
}

function mapSegmentToCategories(event: TicketmasterEvent): string[] {
  const categories = new Set<string>();
  const primary = getPrimaryClassification(event);

  const segment = primary?.segment?.name;
  if (segment && SEGMENT_CATEGORY_MAP[segment]) {
    categories.add(SEGMENT_CATEGORY_MAP[segment]);
  }

  const genre = primary?.genre?.name?.toLowerCase() ?? "";
  const subGenre = primary?.subGenre?.name?.toLowerCase() ?? "";

  if (genre.includes("food") || subGenre.includes("food")) {
    categories.add("Food");
  }

  const searchable = `${event.name} ${event.info ?? ""} ${event.pleaseNote ?? ""}`.toLowerCase();
  if (/\b(lgbtq|pride|queer|drag)\b/.test(searchable)) {
    categories.add("LGBTQ+");
  }

  return [...categories];
}

function inferIsFree(event: TicketmasterEvent): boolean {
  if (!event.priceRanges?.length) {
    return false;
  }

  return event.priceRanges.every((range) => (range.min ?? range.max ?? 1) === 0);
}

function inferIsOutdoor(event: TicketmasterEvent, venueName: string): boolean {
  const primary = getPrimaryClassification(event);
  const genre = primary?.genre?.name?.toLowerCase() ?? "";
  const subGenre = primary?.subGenre?.name?.toLowerCase() ?? "";

  if (
    genre.includes("outdoor") ||
    subGenre.includes("outdoor") ||
    subGenre.includes("fairs & festivals")
  ) {
    return true;
  }

  return OUTDOOR_KEYWORDS.test(venueName);
}

function resolveStartsAt(start: NonNullable<TicketmasterEvent["dates"]>["start"]): string | undefined {
  if (!start || start.dateTBD || !start.localDate) {
    return undefined;
  }

  if (start.dateTime) {
    return start.dateTime;
  }

  const time = start.timeTBD || start.noSpecificTime ? "12:00:00" : start.localTime ?? "12:00:00";
  return `${start.localDate}T${time}`;
}

function formatEventDateDisplay(
  startsAt: string,
  timeTBD: boolean,
): string {
  const date = new Date(startsAt);

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: PACIFIC,
  }).format(date);

  const monthDay = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    timeZone: PACIFIC,
  }).format(date);

  if (timeTBD) {
    return `${weekday}, ${monthDay}`;
  }

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: PACIFIC,
  })
    .format(date)
    .replace(":00", "")
    .toLowerCase();

  return `${weekday}, ${monthDay} — ${time}`;
}

function buildDescription(event: TicketmasterEvent, venueName: string): string {
  const primary = getPrimaryClassification(event);
  const segment = primary?.segment?.name ?? "Event";
  const genre = primary?.genre?.name;

  if (event.info?.trim()) {
    return event.info.trim();
  }

  if (event.pleaseNote?.trim()) {
    return event.pleaseNote.trim();
  }

  const venueSuffix = venueName ? ` at ${venueName}` : " in San Diego";
  const genreSuffix = genre ? ` — ${genre}` : "";

  return `${segment}${genreSuffix}${venueSuffix}.`;
}

function mapTicketmasterEvent(event: TicketmasterEvent): SDEvent | null {
  const start = event.dates?.start;
  const startsAt = start ? resolveStartsAt(start) : undefined;

  if (!startsAt) {
    return null;
  }

  const venueName = event._embedded?.venues?.[0]?.name ?? "";
  const timeTBD = Boolean(start?.timeTBD || start?.noSpecificTime);

  return {
    slug: `tm-${slugify(event.name)}-${event.id}`,
    title: event.name,
    description: buildDescription(event, venueName),
    date: formatEventDateDisplay(startsAt, timeTBD),
    startsAt,
    category: mapSegmentToCategories(event),
    isFree: inferIsFree(event),
    isOutdoor: inferIsOutdoor(event, venueName),
  };
}

export async function fetchTicketmasterEvents(): Promise<SDEvent[] | null> {
  const apiKey = process.env.TICKETMASTER_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const url = new URL(DISCOVERY_URL);
    url.searchParams.set("apikey", apiKey);
    url.searchParams.set("latlong", SAN_DIEGO_LATLONG);
    url.searchParams.set("radius", SEARCH_RADIUS_MILES);
    url.searchParams.set("unit", "miles");
    url.searchParams.set("sort", "date,asc");
    url.searchParams.set("size", "50");
    url.searchParams.set("startDateTime", new Date().toISOString().replace(/\.\d{3}Z$/, "Z"));

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === "development") {
        const errorBody = await response.text();
        let reason = `HTTP ${response.status}`;

        try {
          const parsed = JSON.parse(errorBody) as {
            fault?: { faultstring?: string };
          };
          if (parsed.fault?.faultstring) {
            reason = parsed.fault.faultstring;
          }
        } catch {
          // ignore parse errors
        }

        console.warn(
          `[Ticketmaster] Fetch failed — using static event fallback. Reason: ${reason}`,
        );
      }

      return null;
    }

    const data = (await response.json()) as TicketmasterResponse;
    const rawEvents = data._embedded?.events ?? [];

    if (rawEvents.length === 0) {
      return null;
    }

    const mapped = rawEvents
      .map(mapTicketmasterEvent)
      .filter((event): event is SDEvent => event !== null);

    return mapped.length > 0 ? mapped : null;
  } catch {
    return null;
  }
}

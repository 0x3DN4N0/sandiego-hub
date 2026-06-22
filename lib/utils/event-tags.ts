import type { SDEvent } from "@/types";

const PACIFIC = "America/Los_Angeles";
const TIME_TAGS = new Set(["Tonight", "This Weekend"]);

type PacificParts = {
  dateKey: string;
  dayOfWeek: number;
  hour: number;
  timeUnknown: boolean;
};

function getPacificParts(isoOrDate: string | Date): PacificParts {
  const date = typeof isoOrDate === "string" ? new Date(isoOrDate) : isoOrDate;

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PACIFIC,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(date);

  const lookup = Object.fromEntries(
    parts.filter((p) => p.type !== "literal").map((p) => [p.type, p.value]),
  );

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const hour = Number.parseInt(lookup.hour ?? "12", 10);
  const timeUnknown = Number.isNaN(hour);

  return {
    dateKey: `${lookup.year}-${lookup.month}-${lookup.day}`,
    dayOfWeek: weekdayMap[lookup.weekday ?? "Sun"] ?? 0,
    hour: timeUnknown ? 12 : hour,
    timeUnknown,
  };
}

function daysUntilPacific(eventIso: string, now = new Date()): number {
  const eventParts = getPacificParts(eventIso);
  const nowParts = getPacificParts(now);

  const eventMidnight = Date.UTC(
    Number.parseInt(eventParts.dateKey.slice(0, 4), 10),
    Number.parseInt(eventParts.dateKey.slice(5, 7), 10) - 1,
    Number.parseInt(eventParts.dateKey.slice(8, 10), 10),
  );
  const nowMidnight = Date.UTC(
    Number.parseInt(nowParts.dateKey.slice(0, 4), 10),
    Number.parseInt(nowParts.dateKey.slice(5, 7), 10) - 1,
    Number.parseInt(nowParts.dateKey.slice(8, 10), 10),
  );

  return Math.round((eventMidnight - nowMidnight) / (1000 * 60 * 60 * 24));
}

export function computeTimeTags(startsAt: string, now = new Date()): string[] {
  const tags: string[] = [];
  const eventParts = getPacificParts(startsAt);
  const nowParts = getPacificParts(now);
  const daysUntil = daysUntilPacific(startsAt, now);

  if (daysUntil < 0) {
    return tags;
  }

  if (eventParts.dateKey === nowParts.dateKey) {
    if (eventParts.hour >= 17) {
      tags.push("Tonight");
    }
  }

  if (daysUntil <= 7 && (eventParts.dayOfWeek === 0 || eventParts.dayOfWeek === 6)) {
    tags.push("This Weekend");
  }

  return tags;
}

export function stripTimeTags(categories: string[]): string[] {
  return categories.filter((category) => !TIME_TAGS.has(category));
}

export function enrichEvent(event: SDEvent, now = new Date()): SDEvent {
  const baseCategories = stripTimeTags(event.category);
  const timeTags = event.startsAt ? computeTimeTags(event.startsAt, now) : [];

  return {
    ...event,
    category: [...timeTags, ...baseCategories],
  };
}

export function enrichEvents(events: SDEvent[], now = new Date()): SDEvent[] {
  return events.map((event) => enrichEvent(event, now));
}

import type { SDEvent } from "@/types";

import { fetchTicketmasterEvents } from "@/lib/services/ticketmaster";
import { enrichEvents } from "@/lib/utils/event-tags";

export const staticEvents: SDEvent[] = [
  {
    slug: "mercato-farmers-market",
    title: "Little Italy Mercato Farmers Market",
    description:
      "Saturday morning market with local produce, artisan goods, live music, and the best people-watching in the city.",
    date: "Every Saturday, 8am–2pm",
    category: ["Free", "Food", "Outdoor"],
    isFree: true,
    isOutdoor: true,
  },
  {
    slug: "belmont-park-concert",
    title: "Belmont Park Summer Concert Series",
    description:
      "Free live music on the Mission Beach boardwalk with ocean breezes and carnival lights.",
    date: "Friday, June 20 — 7pm",
    startsAt: "2026-06-20T19:00:00-07:00",
    category: ["Free", "Music", "Outdoor"],
    isFree: true,
    isOutdoor: true,
  },
  {
    slug: "pride-block-party",
    title: "Hillcrest Pride Block Party",
    description:
      "Annual celebration with live performers, local vendors, and San Diego's most vibrant street party.",
    date: "Saturday, July 12 — 12pm–8pm",
    startsAt: "2026-07-12T12:00:00-07:00",
    category: ["Music", "LGBTQ+", "Outdoor"],
    isFree: false,
    isOutdoor: true,
  },
  {
    slug: "timken-rotating-exhibit",
    title: "Timken Museum — Masters of Light",
    description:
      "Intimate Balboa Park museum showcasing European masterworks in a free-admission setting.",
    date: "Through August 31",
    category: ["Free", "Arts"],
    isFree: true,
    isOutdoor: false,
  },
  {
    slug: "san-diego-bay-wine-food",
    title: "San Diego Bay Wine + Food Festival",
    description:
      "Premier culinary event with tastings from top local chefs, wineries, and craft brewers.",
    date: "Saturday, November 15 — 12pm–5pm",
    startsAt: "2026-11-15T12:00:00-08:00",
    category: ["Food", "Outdoor"],
    isFree: false,
    isOutdoor: true,
  },
  {
    slug: "obsidian-festival",
    title: "Ocean Beach Street Fair & Chili Cook-Off",
    description:
      "Classic OB festival with live bands, local artisans, and a legendary chili competition.",
    date: "Saturday, June 28 — 10am–6pm",
    startsAt: "2026-06-28T10:00:00-07:00",
    category: ["Free", "Music", "Food", "Outdoor"],
    isFree: true,
    isOutdoor: true,
  },
  {
    slug: "house-of-blues-show",
    title: "House of Blues — Indie Night",
    description:
      "Up-and-coming indie bands take the stage at the Gaslamp's iconic live music venue.",
    date: "Friday, June 20 — 8pm",
    startsAt: "2026-06-20T20:00:00-07:00",
    category: ["Music"],
    isFree: false,
    isOutdoor: false,
  },
  {
    slug: "la-jolla-art-walk",
    title: "La Jolla Art & Wine Festival",
    description:
      "Two-day festival featuring 150+ artists, wine tastings, and live entertainment in the Village.",
    date: "Saturday–Sunday, October 11–12",
    startsAt: "2026-10-11T10:00:00-07:00",
    category: ["Arts", "Food", "Outdoor"],
    isFree: false,
    isOutdoor: true,
  },
  {
    slug: "diversionary-theatre",
    title: "Diversionary Theatre — New Production",
    description:
      "San Diego's LGBTQ+ theatre company opens a bold new play in University Heights.",
    date: "Opens Friday, June 20 — 7:30pm",
    startsAt: "2026-06-20T19:30:00-07:00",
    category: ["Arts", "LGBTQ+"],
    isFree: false,
    isOutdoor: false,
  },
  {
    slug: "sunset-cliffs-jazz",
    title: "Sunset Cliffs Jazz Picnic",
    description:
      "Bring a blanket and enjoy live jazz against one of San Diego's most dramatic backdrops.",
    date: "Sunday, June 22 — 5pm–8pm",
    startsAt: "2026-06-22T17:00:00-07:00",
    category: ["Free", "Music", "Outdoor"],
    isFree: true,
    isOutdoor: true,
  },
];

/** @deprecated Use staticEvents — kept for backwards compatibility */
export const events = staticEvents;

export type EventFilter = {
  category?: string;
  isFree?: boolean;
  isOutdoor?: boolean;
};

async function loadEvents(): Promise<SDEvent[]> {
  const apiEvents = await fetchTicketmasterEvents();
  const source = apiEvents?.length ? apiEvents : staticEvents;
  return enrichEvents(source);
}

export async function getAllEvents(): Promise<SDEvent[]> {
  return loadEvents();
}

export async function getEventBySlug(slug: string): Promise<SDEvent | undefined> {
  const allEvents = await loadEvents();
  return allEvents.find((event) => event.slug === slug);
}

export async function filterEvents(filters: EventFilter): Promise<SDEvent[]> {
  const allEvents = await loadEvents();

  return allEvents.filter((event) => {
    if (filters.category && !event.category.includes(filters.category)) {
      return false;
    }
    if (filters.isFree !== undefined && event.isFree !== filters.isFree) {
      return false;
    }
    if (filters.isOutdoor !== undefined && event.isOutdoor !== filters.isOutdoor) {
      return false;
    }
    return true;
  });
}

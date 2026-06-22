"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, CalendarX } from "lucide-react";

import { EventCard } from "@/components/cards/EventCard";
import {
  CARD_GRID_3,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { cn } from "@/lib/utils";
import type { SDEvent } from "@/types";

const FILTERS = [
  "All",
  "Tonight",
  "This Weekend",
  "Free",
  "Music",
  "Food",
  "Arts",
  "LGBTQ+",
  "Outdoor",
] as const;

type Filter = (typeof FILTERS)[number];

function matchesFilter(filter: Filter, event: SDEvent): boolean {
  if (filter === "All") return true;
  if (filter === "Free") return event.isFree;
  if (filter === "Outdoor") return event.isOutdoor;
  return event.category.includes(filter);
}

type EventsContentProps = {
  events: SDEvent[];
};

export function EventsContent({ events }: EventsContentProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredEvents = useMemo(
    () => events.filter((event) => matchesFilter(activeFilter, event)),
    [events, activeFilter],
  );

  if (events.length === 0) {
    return (
      <div className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/80 bg-sand/50 px-6 py-16 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-ocean/10 text-ocean">
            <CalendarClock className="size-6" aria-hidden />
          </div>
          <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
            Events coming soon
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We&apos;re refreshing San Diego happenings — check back shortly for
            festivals, live music, and local events.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-16 z-40 border-b border-border/60 bg-background/95 py-3 backdrop-blur-md">
        <div className={PAGE_CONTAINER}>
          <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FILTERS.map((filter) => (
              <li key={filter} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "inline-flex rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    activeFilter === filter
                      ? "border-ocean bg-ocean text-primary-foreground"
                      : "border-border/60 bg-sand text-ocean hover:border-ocean/30 hover:bg-ocean/5",
                  )}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
        <AnimatePresence mode="wait">
          {filteredEvents.length > 0 ? (
            <motion.div
              key={`grid-${activeFilter}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={CARD_GRID_3}
            >
              {filteredEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/80 bg-sand/50 px-6 py-16 text-center"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                <CalendarX className="size-6" aria-hidden />
              </div>
              <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
                No events match this filter
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Try selecting a different category — or browse all events to see
                what&apos;s happening around San Diego.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-6 rounded-full border border-ocean/30 bg-background px-5 py-2 text-sm font-medium text-ocean transition-colors hover:bg-ocean/5"
              >
                Show all events
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

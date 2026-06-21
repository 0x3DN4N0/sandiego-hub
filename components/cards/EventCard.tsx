import type { SDEvent } from "@/types";

import { HEADING_CARD } from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type EventCardProps = {
  event: SDEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <AnimatedCard>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {event.isFree && (
          <CardTag className="bg-coral/20 text-ocean">Free</CardTag>
        )}
        {event.isOutdoor && <CardTag>Outdoor</CardTag>}
        {event.category.slice(0, 2).map((tag) => (
          <CardTag
            key={tag}
            className={cn(tag === "LGBTQ+" && "bg-coral/20 text-ocean")}
          >
            {tag}
          </CardTag>
        ))}
      </div>
      <h3 className={HEADING_CARD}>{event.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {event.description}
      </p>
      <p className="mt-3 text-xs font-medium text-ocean-light">{event.date}</p>
    </AnimatedCard>
  );
}

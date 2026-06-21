import type { NightlifeVenue } from "@/types";

import { HEADING_CARD } from "@/lib/layout-classes";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type NightlifeCardProps = {
  venue: NightlifeVenue;
};

export function NightlifeCard({ venue }: NightlifeCardProps) {
  return (
    <AnimatedCard>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <CardTag>{venue.category}</CardTag>
        <CardTag className="bg-ocean/10">{venue.vibe}</CardTag>
      </div>
      <h3 className={HEADING_CARD}>{venue.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {venue.description}
      </p>
    </AnimatedCard>
  );
}

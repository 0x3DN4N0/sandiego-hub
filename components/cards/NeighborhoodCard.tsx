import type { Neighborhood } from "@/types";

import { HEADING_CARD } from "@/lib/layout-classes";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <AnimatedCard>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <CardTag>{neighborhood.vibe}</CardTag>
        <CardTag className="bg-ocean/10">{neighborhood.priceLevel}</CardTag>
      </div>
      <h3 className={HEADING_CARD}>{neighborhood.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {neighborhood.description}
      </p>
      <p className="mt-3 text-xs font-medium text-ocean-light">
        Best for: {neighborhood.bestFor}
      </p>
    </AnimatedCard>
  );
}

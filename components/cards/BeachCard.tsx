import type { Beach } from "@/types";

import { HEADING_CARD } from "@/lib/layout-classes";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type BeachCardProps = {
  beach: Beach;
};

export function BeachCard({ beach }: BeachCardProps) {
  return (
    <AnimatedCard>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <CardTag>{beach.vibe}</CardTag>
        <CardTag className="bg-ocean/10">{beach.crowdLevel} crowd</CardTag>
      </div>
      <h3 className={HEADING_CARD}>{beach.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {beach.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span>Best for: {beach.bestFor}</span>
        <span>Parking: {beach.parkingDifficulty}</span>
      </div>
    </AnimatedCard>
  );
}

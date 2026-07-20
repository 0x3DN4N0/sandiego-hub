"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

import { LocationMap } from "@/components/maps/LocationMap";
import { HEADING_CARD } from "@/lib/layout-classes";
import { cn } from "@/lib/utils";
import type { Beach } from "@/types";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type BeachCardProps = {
  beach: Beach;
};

export function BeachCard({ beach }: BeachCardProps) {
  const [mapOpen, setMapOpen] = useState(false);

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

      <button
        type="button"
        onClick={() => setMapOpen((open) => !open)}
        aria-expanded={mapOpen}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ocean transition-colors hover:text-ocean-light"
      >
        <MapPin className="size-3.5" aria-hidden />
        {mapOpen ? "Hide map" : "Show on map"}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            mapOpen && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {mapOpen && (
        <LocationMap
          lat={beach.lat}
          lng={beach.lng}
          name={beach.name}
          className="mt-3"
        />
      )}
    </AnimatedCard>
  );
}

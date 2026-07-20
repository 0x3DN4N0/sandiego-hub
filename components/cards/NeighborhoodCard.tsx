"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

import { LocationMap } from "@/components/maps/LocationMap";
import { HEADING_CARD } from "@/lib/layout-classes";
import { cn } from "@/lib/utils";
import type { Neighborhood } from "@/types";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const [mapOpen, setMapOpen] = useState(false);

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
          lat={neighborhood.lat}
          lng={neighborhood.lng}
          name={neighborhood.name}
          className="mt-3"
        />
      )}
    </AnimatedCard>
  );
}

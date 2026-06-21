import type { Restaurant } from "@/types";

import { HEADING_CARD } from "@/lib/layout-classes";

import { AnimatedCard } from "./AnimatedCard";
import { CardTag } from "./card-styles";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <AnimatedCard>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <CardTag>{restaurant.category}</CardTag>
        <CardTag className="bg-ocean/10">{restaurant.priceLevel}</CardTag>
      </div>
      <h3 className={HEADING_CARD}>{restaurant.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {restaurant.description}
      </p>
      <p className="mt-3 text-xs font-medium text-ocean-light">
        {restaurant.neighborhood}
      </p>
    </AnimatedCard>
  );
}

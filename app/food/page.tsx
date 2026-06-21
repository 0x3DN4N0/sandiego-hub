import type { Metadata } from "next";

import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { CategoryNav, defaultAnchorId } from "@/components/layout/CategoryNav";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollRevealSection } from "@/components/motion/motion-primitives";
import { getRestaurantsByCategory } from "@/lib/data/restaurants";
import {
  CARD_GRID_3,
  HEADING_SECTION,
  PAGE_CONTAINER,
  PAGE_SECTION,
  SECTION_SPACING,
} from "@/lib/layout-classes";
import { createPageMetadata } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

const FOOD_CATEGORIES = [
  "Healthy & High Protein",
  "Brunch",
  "Coffee Shops",
  "Mexican Food",
  "Seafood",
  "Romantic Dinner",
  "Rooftop/Ocean View",
  "Late Night Food",
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Food & Dining",
  description:
    "Curated San Diego restaurants — brunch, tacos, seafood, romantic dinners, coffee shops, and late-night eats.",
  path: "/food",
});

export default function FoodPage() {
  return (
    <>
      <PageHeader
        title="Food & Dining"
        description="From taco shops to tasting menus — the tables worth booking across America's Finest City."
      />
      <CategoryNav categories={[...FOOD_CATEGORIES]} />
      <div className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
        <div className={SECTION_SPACING}>
          {FOOD_CATEGORIES.map((category, index) => {
            const restaurants = getRestaurantsByCategory(category);

            return (
              <ScrollRevealSection
                key={category}
                id={defaultAnchorId(category)}
                className={cn(
                  "scroll-mt-32",
                  index % 2 === 1 &&
                    "-mx-4 rounded-none border-y border-border/60 bg-sand px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8",
                )}
              >
                <h2 className={HEADING_SECTION}>{category}</h2>
                <div className={cn(CARD_GRID_3, "mt-8")}>
                  {restaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.slug}
                      restaurant={restaurant}
                    />
                  ))}
                </div>
              </ScrollRevealSection>
            );
          })}
        </div>
      </div>
    </>
  );
}

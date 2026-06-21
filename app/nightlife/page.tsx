import type { Metadata } from "next";

import { NightlifeCard } from "@/components/cards/NightlifeCard";
import { CategoryNav, defaultAnchorId } from "@/components/layout/CategoryNav";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollRevealSection } from "@/components/motion/motion-primitives";
import { getAllNightlifeVenues } from "@/lib/data/nightlife";
import {
  CARD_GRID_3,
  HEADING_SECTION,
  PAGE_CONTAINER,
  PAGE_SECTION,
  SECTION_SPACING,
} from "@/lib/layout-classes";
import { createPageMetadata } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

const NIGHTLIFE_CATEGORIES = [
  "Cocktail Lounges",
  "Rooftop Bars",
  "LGBTQ+ Nightlife",
  "Date Night Drinks",
  "Dancing",
  "Classy Night Out",
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Nightlife",
  description:
    "San Diego nightlife — cocktail lounges, rooftop bars, LGBTQ+ venues, date-night spots, and dance clubs.",
  path: "/nightlife",
});

export default function NightlifePage() {
  const venues = getAllNightlifeVenues();

  return (
    <>
      <PageHeader
        title="Nightlife"
        description="Cocktail bars, rooftop lounges, dance floors, and the spots that keep San Diego buzzing after dark."
      />
      <CategoryNav categories={[...NIGHTLIFE_CATEGORIES]} />
      <div className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
        <div className={SECTION_SPACING}>
          {NIGHTLIFE_CATEGORIES.map((category, index) => {
            const categoryVenues = venues.filter(
              (v) => v.category === category,
            );

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
                  {categoryVenues.map((venue) => (
                    <NightlifeCard key={venue.slug} venue={venue} />
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

import type { Metadata } from "next";

import { NeighborhoodCard } from "@/components/cards/NeighborhoodCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/motion-primitives";
import { getAllNeighborhoods } from "@/lib/data/neighborhoods";
import {
  CARD_GRID_3,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { createPageMetadata } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Neighborhoods",
  description:
    "Explore San Diego neighborhoods — La Jolla, Little Italy, North Park, Hillcrest, Coronado, and more.",
  path: "/neighborhoods",
});

export default function NeighborhoodsPage() {
  const neighborhoods = getAllNeighborhoods();

  return (
    <>
      <PageHeader
        title="Neighborhoods"
        description="Distinct corners of San Diego — each with its own character, cuisine, and coastal rhythm."
      />
      <ScrollReveal className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
        <div className={CARD_GRID_3}>
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard
              key={neighborhood.slug}
              neighborhood={neighborhood}
            />
          ))}
        </div>
      </ScrollReveal>
    </>
  );
}

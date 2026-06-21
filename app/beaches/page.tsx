import type { Metadata } from "next";

import { BeachCard } from "@/components/cards/BeachCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/motion-primitives";
import { getAllBeaches } from "@/lib/data/beaches";
import {
  CARD_GRID_3,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { createPageMetadata } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Beaches",
  description:
    "San Diego's best beaches — La Jolla Shores, Coronado, Pacific Beach, Mission Beach, Ocean Beach, and more.",
  path: "/beaches",
});

export default function BeachesPage() {
  const beaches = getAllBeaches();

  return (
    <>
      <PageHeader
        title="Beaches"
        description="Sun, surf, and the coastlines locals swear by — from hidden coves to iconic boardwalks."
      />
      <ScrollReveal className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
        <div className={CARD_GRID_3}>
          {beaches.map((beach) => (
            <BeachCard key={beach.slug} beach={beach} />
          ))}
        </div>
      </ScrollReveal>
    </>
  );
}

import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollReveal } from "@/components/motion/motion-primitives";
import {
  BODY_LEAD,
  HEADING_SECTION,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { createPageMetadata } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about San Diego Hub — a modern local discovery platform for exploring America's Finest City.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About San Diego Hub"
        description="A modern local discovery platform for exploring America's Finest City."
      />
      <ScrollReveal className={cn(PAGE_CONTAINER, PAGE_SECTION, "max-w-3xl")}>
        <div className="space-y-8">
          <p className={BODY_LEAD}>
            San Diego Hub is a curated guide to one of California&apos;s most
            vibrant coastal cities. We believe the best way to experience San
            Diego isn&apos;t through endless lists or generic travel guides —
            it&apos;s through thoughtful, handpicked recommendations that help
            you explore with intention.
          </p>
          <p className={BODY_LEAD}>
            From the cliffside elegance of La Jolla to the creative energy of
            North Park, from hidden surf breaks to rooftop cocktail lounges, we
            cover the neighborhoods, beaches, restaurants, nightlife, and events
            that make this city unforgettable.
          </p>
          <p className={BODY_LEAD}>
            Every recommendation on San Diego Hub is chosen with care. We focus
            on quality over quantity — the places locals actually love, the
            experiences worth planning a day around, and the hidden gems you
            might otherwise walk right past.
          </p>
          <p className={BODY_LEAD}>
            Whether you&apos;re a first-time visitor, a longtime resident
            rediscovering your backyard, or planning the perfect date night, San
            Diego Hub is your companion for exploring the city through curated
            recommendations.
          </p>
        </div>

        <div className="mt-16 border-t border-border/60 pt-10">
          <h2 className={HEADING_SECTION}>What&apos;s next</h2>
          <p className={cn(BODY_LEAD, "mt-4")}>
            San Diego Hub is built to grow. Future versions will include an AI
            concierge, personalized itinerary planning, and recommendations
            tailored to your mood and preferences — all built on the same
            curated foundation you see today.
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}

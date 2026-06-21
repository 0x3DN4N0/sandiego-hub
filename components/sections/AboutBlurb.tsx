import {
  BODY_LEAD,
  HEADING_SECTION,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

import { ScrollReveal } from "../motion/motion-primitives";

export function AboutBlurb() {
  return (
    <section className={PAGE_SECTION}>
      <ScrollReveal
        className={cn(PAGE_CONTAINER, "mx-auto max-w-3xl text-center")}
      >
        <h2 className={HEADING_SECTION}>What is San Diego Hub?</h2>
        <p className={cn(BODY_LEAD, "mt-6")}>
          San Diego Hub is your curated companion to America&apos;s Finest City.
          We handpick the neighborhoods worth wandering, the beaches worth
          claiming for an afternoon, the restaurants locals actually love, and
          the events that make every season feel special.
        </p>
        <p className={cn(BODY_LEAD, "mt-4")}>
          Whether you&apos;re planning a first visit, a romantic weekend, or
          rediscovering your own backyard, we help you explore with intention —
          not overwhelm.
        </p>
      </ScrollReveal>
    </section>
  );
}

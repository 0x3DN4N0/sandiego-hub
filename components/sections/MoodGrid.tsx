import { MoodCard } from "@/components/cards/MoodCard";
import { getAllMoods } from "@/lib/data/moods";
import {
  BODY_LEAD,
  CARD_GRID_4,
  HEADING_SECTION,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

import {
  ScrollReveal,
  StaggerGrid,
  StaggerItem,
} from "../motion/motion-primitives";

export function MoodGrid() {
  const moods = getAllMoods();

  return (
    <section className={PAGE_SECTION}>
      <div className={PAGE_CONTAINER}>
        <ScrollReveal className="border-b border-border/60 pb-6">
          <h2 className={HEADING_SECTION}>Explore by Mood</h2>
          <p className={cn(BODY_LEAD, "mt-2 text-base sm:text-lg")}>
            Find your vibe — romantic, adventurous, family-friendly, and more.
          </p>
        </ScrollReveal>
        <StaggerGrid className={cn(CARD_GRID_4, "mt-8")}>
          {moods.map((mood) => (
            <StaggerItem key={mood.slug}>
              <MoodCard mood={mood} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

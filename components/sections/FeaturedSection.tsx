import { Children, isValidElement } from "react";

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

type FeaturedSectionProps = {
  title: string;
  description?: string;
  alternate?: boolean;
  children: React.ReactNode;
};

export function FeaturedSection({
  title,
  description,
  alternate = false,
  children,
}: FeaturedSectionProps) {
  return (
    <section
      className={cn(
        PAGE_SECTION,
        alternate && "border-y border-border/60 bg-sand",
      )}
    >
      <div className={PAGE_CONTAINER}>
        <ScrollReveal className="border-b border-border/60 pb-6">
          <h2 className={HEADING_SECTION}>{title}</h2>
          {description && (
            <p className={cn(BODY_LEAD, "mt-2 text-base sm:text-lg")}>
              {description}
            </p>
          )}
        </ScrollReveal>
        <StaggerGrid className={cn(CARD_GRID_4, "mt-8")}>
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return child;
            return <StaggerItem key={child.key}>{child}</StaggerItem>;
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}

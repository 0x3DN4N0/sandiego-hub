import {
  BODY_LEAD,
  HEADING_PAGE,
  PAGE_CONTAINER,
  PAGE_HEADER,
} from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

import { ScrollReveal } from "../motion/motion-primitives";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={PAGE_HEADER}>
      <ScrollReveal className={PAGE_CONTAINER}>
        <h1 className={HEADING_PAGE}>{title}</h1>
        {description && (
          <p className={cn(BODY_LEAD, "mt-4 max-w-2xl")}>{description}</p>
        )}
      </ScrollReveal>
    </div>
  );
}

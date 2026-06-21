import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { HEADING_PAGE, PAGE_CONTAINER, PAGE_SECTION } from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className={cn(PAGE_CONTAINER, PAGE_SECTION, "text-center")}>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ocean-light">
        404
      </p>
      <h1 className={cn(HEADING_PAGE, "mt-4")}>Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
        This corner of San Diego Hub doesn&apos;t exist yet. Head back home and
        keep exploring the city.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-10 h-11 bg-ocean px-6 hover:bg-ocean/90")}
      >
        Back to Home
      </Link>
    </div>
  );
}

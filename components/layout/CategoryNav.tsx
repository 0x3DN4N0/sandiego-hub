import { cn } from "@/lib/utils";

type CategoryNavProps = {
  categories: string[];
  getAnchorId?: (category: string) => string;
  className?: string;
};

function defaultAnchorId(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function CategoryNav({
  categories,
  getAnchorId = defaultAnchorId,
  className,
}: CategoryNavProps) {
  return (
    <nav
      className={cn(
        "sticky top-16 z-40 border-b border-border/60 bg-background/95 py-3 backdrop-blur-md",
        className,
      )}
      aria-label="Category navigation"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <li key={category} className="shrink-0">
              <a
                href={`#${getAnchorId(category)}`}
                className="inline-flex rounded-full border border-border/60 bg-sand px-4 py-1.5 text-sm font-medium text-ocean transition-colors hover:border-ocean/30 hover:bg-ocean/5"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export { defaultAnchorId };

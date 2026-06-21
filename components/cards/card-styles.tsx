import { cn } from "@/lib/utils";

export const cardStyles =
  "group flex h-full flex-col rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg";

export function CardTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-sand px-2.5 py-0.5 text-xs font-medium text-ocean",
        className,
      )}
    >
      {children}
    </span>
  );
}

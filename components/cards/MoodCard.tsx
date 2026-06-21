import {
  Calendar,
  Coffee,
  Gem,
  Heart,
  Leaf,
  Martini,
  Rainbow,
  Sun,
  type LucideIcon,
} from "lucide-react";

import type { Mood } from "@/types";

import { HEADING_CARD } from "@/lib/layout-classes";

import { AnimatedCard } from "./AnimatedCard";

const iconMap: Record<string, LucideIcon> = {
  martini: Martini,
  sun: Sun,
  heart: Heart,
  leaf: Leaf,
  coffee: Coffee,
  rainbow: Rainbow,
  gem: Gem,
  calendar: Calendar,
};

type MoodCardProps = {
  mood: Mood;
};

export function MoodCard({ mood }: MoodCardProps) {
  const Icon = mood.icon ? iconMap[mood.icon] : Gem;

  return (
    <AnimatedCard>
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className={HEADING_CARD}>{mood.label}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {mood.description}
      </p>
    </AnimatedCard>
  );
}

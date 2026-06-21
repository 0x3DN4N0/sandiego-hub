"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Martini,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

import { MoodCard } from "@/components/cards/MoodCard";
import { cardStyles } from "@/components/cards/card-styles";
import { cardHoverProps } from "@/components/motion/motion-primitives";
import { getAllMoods } from "@/lib/data/moods";
import {
  CARD_GRID_3,
  CARD_GRID_4,
  HEADING_CARD,
  PAGE_CONTAINER,
  PAGE_SECTION,
} from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

const EXPLORE_CATEGORIES = [
  {
    href: "/neighborhoods",
    label: "Neighborhoods",
    description: "Distinct corners of the city, each with its own character.",
    icon: MapPin,
  },
  {
    href: "/beaches",
    label: "Beaches",
    description: "Sun, surf, and the coastlines locals swear by.",
    icon: Waves,
  },
  {
    href: "/food",
    label: "Food & Dining",
    description: "From taco shops to tasting menus worth booking.",
    icon: UtensilsCrossed,
  },
  {
    href: "/nightlife",
    label: "Nightlife",
    description: "Cocktail bars, rooftops, and late-night energy.",
    icon: Martini,
  },
  {
    href: "/events",
    label: "Events",
    description: "Festivals, markets, and happenings around town.",
    icon: Calendar,
  },
] as const;

type ExploreTab = "category" | "mood";

export function ExploreContent() {
  const [activeTab, setActiveTab] = useState<ExploreTab>("category");
  const moods = getAllMoods();

  return (
    <div className={cn(PAGE_CONTAINER, PAGE_SECTION)}>
      <div className="mb-10 inline-flex rounded-lg border border-border/60 bg-sand p-1">
        <button
          type="button"
          onClick={() => setActiveTab("category")}
          className={cn(
            "rounded-md px-5 py-2 text-sm font-medium transition-colors",
            activeTab === "category"
              ? "bg-ocean text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-ocean",
          )}
        >
          By Category
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("mood")}
          className={cn(
            "rounded-md px-5 py-2 text-sm font-medium transition-colors",
            activeTab === "mood"
              ? "bg-ocean text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-ocean",
          )}
        >
          By Mood
        </button>
      </div>

      {activeTab === "category" ? (
        <div className={CARD_GRID_3}>
          {EXPLORE_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.href} {...cardHoverProps}>
                <Link
                  href={category.href}
                  className={cn(cardStyles, "block h-full no-underline")}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h2 className={HEADING_CARD}>{category.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className={CARD_GRID_4}>
          {moods.map((mood) => (
            <MoodCard key={mood.slug} mood={mood} />
          ))}
        </div>
      )}
    </div>
  );
}

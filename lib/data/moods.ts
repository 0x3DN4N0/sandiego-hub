import type { Mood } from "@/types";

export const moods: Mood[] = [
  {
    slug: "classy-night-out",
    label: "Classy Night Out",
    description:
      "Cocktail lounges, fine dining, and venues where the dress code matters.",
    icon: "martini",
  },
  {
    slug: "beach-day",
    label: "Beach Day",
    description:
      "Sun, sand, and the coastlines worth claiming for an afternoon.",
    icon: "sun",
  },
  {
    slug: "date-night",
    label: "Date Night",
    description:
      "Romantic restaurants, sunset spots, and intimate bars for two.",
    icon: "heart",
  },
  {
    slug: "healthy-food",
    label: "Healthy Food",
    description:
      "Clean eating, high-protein bowls, and restaurants that nourish.",
    icon: "leaf",
  },
  {
    slug: "coffee-work",
    label: "Coffee & Work",
    description:
      "Quiet cafés with great Wi-Fi, natural light, and excellent espresso.",
    icon: "coffee",
  },
  {
    slug: "lgbtq-friendly",
    label: "LGBTQ+ Friendly",
    description:
      "Welcoming neighborhoods, bars, and events that celebrate inclusivity.",
    icon: "rainbow",
  },
  {
    slug: "hidden-gems",
    label: "Hidden Gems",
    description:
      "Off-the-beaten-path spots locals keep to themselves — until now.",
    icon: "gem",
  },
  {
    slug: "weekend-plans",
    label: "Weekend Plans",
    description:
      "Markets, festivals, and full-day itineraries to make the most of your weekend.",
    icon: "calendar",
  },
];

export function getAllMoods(): Mood[] {
  return moods;
}

export function getMoodBySlug(slug: string): Mood | undefined {
  return moods.find((m) => m.slug === slug);
}

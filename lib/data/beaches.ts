import type { Beach } from "@/types";

export const beaches: Beach[] = [
  {
    slug: "la-jolla-shores",
    name: "La Jolla Shores",
    description:
      "A mile-long crescent of golden sand backed by grassy parks — perfect for families, kayakers, and sunset watchers.",
    bestFor: "Families, kayaking, and calm swimming",
    crowdLevel: "Moderate",
    parkingDifficulty: "Moderate",
    vibe: "Relaxed & scenic",
    lat: 32.8569,
    lng: -117.2571,
  },
  {
    slug: "coronado-beach",
    name: "Coronado Beach",
    description:
      "Wide, flat sand with glittering mica and views of the Hotel del Coronado — one of California's most iconic beaches.",
    bestFor: "Long walks, photography, and resort-day vibes",
    crowdLevel: "Moderate",
    parkingDifficulty: "Easy",
    vibe: "Classic & spacious",
    lat: 32.6807,
    lng: -117.1784,
  },
  {
    slug: "pacific-beach",
    name: "Pacific Beach",
    description:
      "The social heart of San Diego's beach scene — boardwalk, bars, volleyball courts, and nonstop energy.",
    bestFor: "Socializing, surfing, and beach bars",
    crowdLevel: "High",
    parkingDifficulty: "Difficult",
    vibe: "Lively & youthful",
    lat: 32.7977,
    lng: -117.2554,
  },
  {
    slug: "mission-beach",
    name: "Mission Beach",
    description:
      "Belmont Park, the boardwalk, and a classic SoCal beach strip stretching between Pacific Beach and Ocean Beach.",
    bestFor: "Amusement park fun, biking, and people-watching",
    crowdLevel: "High",
    parkingDifficulty: "Difficult",
    vibe: "Classic boardwalk",
    lat: 32.7706,
    lng: -117.2525,
  },
  {
    slug: "ocean-beach",
    name: "Ocean Beach",
    description:
      "Laid-back, dog-friendly, and proudly local — pier fishing, tide pools, and a strong hippie-surfer culture.",
    bestFor: "Dog beach, local vibes, and sunset pier walks",
    crowdLevel: "Moderate",
    parkingDifficulty: "Moderate",
    vibe: "Bohemian & authentic",
    lat: 32.7494,
    lng: -117.2528,
  },
  {
    slug: "windansea-beach",
    name: "Windansea Beach",
    description:
      "A hidden La Jolla cove known for powerful surf, the iconic Surf Shack, and dramatic rocky scenery.",
    bestFor: "Surf watching, photography, and secluded vibes",
    crowdLevel: "Low",
    parkingDifficulty: "Difficult",
    vibe: "Hidden gem",
    lat: 32.8297,
    lng: -117.2808,
  },
  {
    slug: "torrey-pines",
    name: "Torrey Pines State Beach",
    description:
      "Dramatic cliffs, unspoiled sand, and trails through the rare Torrey pine forest — nature at its finest.",
    bestFor: "Hiking, nature lovers, and quiet beach time",
    crowdLevel: "Moderate",
    parkingDifficulty: "Moderate",
    vibe: "Natural & serene",
    lat: 32.9214,
    lng: -117.2592,
  },
  {
    slug: "sunset-cliffs",
    name: "Sunset Cliffs",
    description:
      "Rugged sandstone bluffs and tide pools in Point Loma — the name says it all when golden hour hits.",
    bestFor: "Sunsets, tide pooling, and dramatic views",
    crowdLevel: "Moderate",
    parkingDifficulty: "Moderate",
    vibe: "Dramatic & romantic",
    lat: 32.7264,
    lng: -117.2553,
  },
];

export function getAllBeaches(): Beach[] {
  return beaches;
}

export function getBeachBySlug(slug: string): Beach | undefined {
  return beaches.find((b) => b.slug === slug);
}

import type { Neighborhood } from "@/types";

export const neighborhoods: Neighborhood[] = [
  {
    slug: "la-jolla",
    name: "La Jolla",
    description:
      "Cliffside elegance meets coastal charm — sea caves, upscale dining, and some of the best sunsets on the coast.",
    bestFor: "Scenic walks, fine dining, and ocean views",
    vibe: "Upscale coastal",
    priceLevel: "$$$",
    suggestedActivities: [
      "Explore the Cove and tide pools",
      "Browse galleries on Prospect Street",
      "Watch sunset from Scripps Pier",
    ],
    lat: 32.8328,
    lng: -117.2713,
  },
  {
    slug: "downtown",
    name: "Downtown",
    description:
      "San Diego's urban core — Petco Park, the Gaslamp Quarter, waterfront dining, and a skyline that keeps growing.",
    bestFor: "Nightlife, sports, and city energy",
    vibe: "Urban & lively",
    priceLevel: "$$",
    suggestedActivities: [
      "Catch a Padres game at Petco Park",
      "Bar-hop through the Gaslamp",
      "Stroll the Embarcadero waterfront",
    ],
    lat: 32.7157,
    lng: -117.1611,
  },
  {
    slug: "little-italy",
    name: "Little Italy",
    description:
      "A walkable neighborhood of trattorias, espresso bars, and the famous Mercato farmers market every Saturday.",
    bestFor: "Food lovers and weekend strolls",
    vibe: "European-inspired",
    priceLevel: "$$",
    suggestedActivities: [
      "Shop the Mercato farmers market",
      "Dine al fresco on India Street",
      "Grab gelato and people-watch",
    ],
    lat: 32.7233,
    lng: -117.1683,
  },
  {
    slug: "north-park",
    name: "North Park",
    description:
      "Craft beer, vintage shops, and a thriving arts scene — one of San Diego's most creative neighborhoods.",
    bestFor: "Craft beer, live music, and local culture",
    vibe: "Artsy & eclectic",
    priceLevel: "$$",
    suggestedActivities: [
      "Tour North Park's craft breweries",
      "Browse thrift stores on University Ave",
      "Catch live music at the Observatory",
    ],
    lat: 32.7419,
    lng: -117.1297,
  },
  {
    slug: "hillcrest",
    name: "Hillcrest",
    description:
      "San Diego's LGBTQ+ heartland — rainbow crosswalks, inclusive nightlife, brunch spots, and a strong community feel.",
    bestFor: "Inclusive dining, Pride events, and nightlife",
    vibe: "Welcoming & vibrant",
    priceLevel: "$$",
    suggestedActivities: [
      "Brunch on Fifth Avenue",
      "Explore the weekly farmers market",
      "Experience Hillcrest's nightlife scene",
    ],
    lat: 32.7482,
    lng: -117.1611,
  },
  {
    slug: "coronado",
    name: "Coronado",
    description:
      "An island escape with the iconic Hotel del Coronado, wide sandy beaches, and a small-town feel minutes from downtown.",
    bestFor: "Beach days, cycling, and resort vibes",
    vibe: "Classic & relaxed",
    priceLevel: "$$$",
    suggestedActivities: [
      "Bike the Silver Strand",
      "Relax on Coronado Beach",
      "Tour the Hotel del Coronado",
    ],
    lat: 32.6859,
    lng: -117.1831,
  },
  {
    slug: "pacific-beach",
    name: "Pacific Beach",
    description:
      "Young, sun-soaked, and always buzzing — boardwalk energy, beach bars, and endless summer vibes.",
    bestFor: "Beach parties, casual dining, and surf culture",
    vibe: "Laid-back & social",
    priceLevel: "$$",
    suggestedActivities: [
      "Walk the Crystal Pier boardwalk",
      "Surf lessons at PB Point",
      "Sunset drinks at a beach bar",
    ],
    lat: 32.7947,
    lng: -117.2441,
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    description:
      "Horse racing heritage meets coastal refinement — bluff-top trails, boutique shopping, and a quieter pace.",
    bestFor: "Scenic hikes, upscale dining, and racing season",
    vibe: "Refined coastal",
    priceLevel: "$$$",
    suggestedActivities: [
      "Hike the Torrey Pines extension",
      "Visit Del Mar Racetrack",
      "Explore Del Mar Village shops",
    ],
    lat: 32.9595,
    lng: -117.2653,
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    description:
      "Surf culture, yoga studios, and a bohemian spirit — North County's creative coastal gem.",
    bestFor: "Surfing, wellness, and coastal living",
    vibe: "Bohemian surf town",
    priceLevel: "$$",
    suggestedActivities: [
      "Watch surfers at Swami's",
      "Browse shops on Coast Highway",
      "Visit the Self-Realization Fellowship gardens",
    ],
    lat: 33.0369,
    lng: -117.2919,
  },
];

export function getAllNeighborhoods(): Neighborhood[] {
  return neighborhoods;
}

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

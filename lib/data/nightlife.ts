import type { NightlifeVenue } from "@/types";

export const nightlifeVenues: NightlifeVenue[] = [
  // Cocktail Lounges
  {
    slug: "raised-by-wolves",
    name: "Raised by Wolves",
    category: "Cocktail Lounges",
    description:
      "Hidden speakeasy behind a liquor store bookcase — inventive cocktails and an intimate, moody atmosphere.",
    vibe: "Speakeasy chic",
  },
  {
    slug: "polite-provisions",
    name: "Polite Provisions",
    category: "Cocktail Lounges",
    description:
      "Award-winning North Park cocktail bar with a vintage soda fountain aesthetic and creative libations.",
    vibe: "Craft & vintage",
  },
  {
    slug: "youngblood",
    name: "Youngblood",
    category: "Cocktail Lounges",
    description:
      "Intimate Oceanside speakeasy with a reservation-only feel and meticulously crafted cocktails.",
    vibe: "Hidden & refined",
  },
  // Rooftop Bars
  {
    slug: "altitude-sky-lounge",
    name: "Altitude Sky Lounge",
    category: "Rooftop Bars",
    description:
      "San Diego's highest open-air bar on the 22nd floor with panoramic city and bay views.",
    vibe: "Sky-high glamour",
  },
  {
    slug: "lofty-cocktail-lounge",
    name: "Lofty Cocktail Lounge",
    category: "Rooftop Bars",
    description:
      "Rooftop cocktails in Little Italy with string lights, skyline views, and a social atmosphere.",
    vibe: "Social & scenic",
  },
  {
    slug: "il-sogno-italiano",
    name: "Il Sogno Italiano",
    category: "Rooftop Bars",
    description:
      "Italian-inspired rooftop bar in the Gaslamp with Aperol spritzes and downtown energy.",
    vibe: "Mediterranean rooftop",
  },
  // LGBTQ+ Nightlife
  {
    slug: "richs",
    name: "Rich's",
    category: "LGBTQ+ Nightlife",
    description:
      "Hillcrest's iconic two-level nightclub with drag shows, dancing, and a welcoming crowd.",
    vibe: "Iconic & inclusive",
  },
  {
    slug: "the-gossip-grill",
    name: "The Gossip Grill",
    category: "LGBTQ+ Nightlife",
    description:
      "Women-forward Hillcrest bar with great food, patio seating, and a strong community vibe.",
    vibe: "Welcoming & lively",
  },
  {
    slug: "flicks",
    name: "Flicks",
    category: "LGBTQ+ Nightlife",
    description:
      "Hillcrest video bar with themed nights, strong drinks, and a fun, unpretentious crowd.",
    vibe: "Casual & fun",
  },
  // Date Night Drinks
  {
    slug: "noble-experiment",
    name: "Noble Experiment",
    category: "Date Night Drinks",
    description:
      "Gaslamp speakeasy with no standing room — cozy booths and some of the city's best cocktails.",
    vibe: "Intimate & exclusive",
  },
  {
    slug: "realm-of-the-52-remedies",
    name: "Realm of the 52 Remedies",
    category: "Date Night Drinks",
    description:
      "Hidden bar inside Jeong Won with Korean-inspired cocktails and a mysterious, romantic ambiance.",
    vibe: "Mysterious & romantic",
  },
  {
    slug: "juniper-and-ivy-bar",
    name: "Juniper & Ivy Bar",
    category: "Date Night Drinks",
    description:
      "Stylish Little Italy bar with inventive cocktails and a sophisticated date-night atmosphere.",
    vibe: "Stylish & refined",
  },
  // Dancing
  {
    slug: "parq",
    name: "PARQ",
    category: "Dancing",
    description:
      "Multi-room Gaslamp nightclub with top DJs, bottle service, and a high-energy dance floor.",
    vibe: "High energy",
  },
  {
    slug: "sd-house-night",
    name: "SD House Night",
    category: "Dancing",
    description:
      "Underground house and techno events at rotating venues — San Diego's electronic music scene.",
    vibe: "Underground beats",
  },
  {
    slug: "on-the-rocks",
    name: "On the Rocks",
    category: "Dancing",
    description:
      "Pacific Beach dance club with themed nights, strong drinks, and a young, energetic crowd.",
    vibe: "Beach party energy",
  },
  // Classy Night Out
  {
    slug: "lion-fish",
    name: "Lionfish",
    category: "Classy Night Out",
    description:
      "Upscale Gaslamp restaurant and lounge with sushi, craft cocktails, and polished service.",
    vibe: "Upscale & polished",
  },
  {
    slug: "herb-and-wood-bar",
    name: "Herb & Wood Bar",
    category: "Classy Night Out",
    description:
      "Stunning garden patio bar in Little Italy — perfect for a sophisticated evening out.",
    vibe: "Garden elegance",
  },
  {
    slug: "addison-lounge",
    name: "Addison Lounge",
    category: "Classy Night Out",
    description:
      "Pre- or post-dinner cocktails at San Diego's most acclaimed fine dining destination.",
    vibe: "Michelin-level luxury",
  },
];

export function getAllNightlifeVenues(): NightlifeVenue[] {
  return nightlifeVenues;
}

export function getNightlifeVenueBySlug(
  slug: string,
): NightlifeVenue | undefined {
  return nightlifeVenues.find((v) => v.slug === slug);
}

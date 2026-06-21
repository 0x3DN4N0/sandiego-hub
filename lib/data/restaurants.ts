import type { Restaurant } from "@/types";

export const restaurants: Restaurant[] = [
  // Healthy & High Protein
  {
    slug: "true-food-kitchen",
    name: "True Food Kitchen",
    category: "Healthy & High Protein",
    description:
      "Seasonal, anti-inflammatory menu with lean proteins, grain bowls, and fresh juices in Fashion Valley.",
    neighborhood: "Mission Valley",
    priceLevel: "$$",
  },
  {
    slug: "evolutions-fresh-kitchen",
    name: "Evolution Fresh Kitchen",
    category: "Healthy & High Protein",
    description:
      "Build-your-own bowls and salads with grass-fed proteins and locally sourced produce.",
    neighborhood: "La Jolla",
    priceLevel: "$$",
  },
  {
    slug: "snooze-am-eatery",
    name: "Snooze A.M. Eatery",
    category: "Healthy & High Protein",
    description:
      "Creative breakfast with lighter options like avocado toast and egg white frittatas.",
    neighborhood: "Hillcrest",
    priceLevel: "$$",
  },
  // Brunch
  {
    slug: "better-than-sex",
    name: "Better Than Sex",
    category: "Brunch",
    description:
      "Indulgent dessert-focused brunch with champagne pairings in a dim, romantic setting.",
    neighborhood: "Little Italy",
    priceLevel: "$$$",
  },
  {
    slug: "the-rose",
    name: "The Rose",
    category: "Brunch",
    description:
      "Venice Beach-inspired all-day dining with avocado toast, wood-fired pizzas, and natural wines.",
    neighborhood: "South Park",
    priceLevel: "$$",
  },
  {
    slug: "morning-glory",
    name: "Morning Glory",
    category: "Brunch",
    description:
      "Iconic Little Italy brunch spot famous for its pancake flight and bottomless mimosas.",
    neighborhood: "Little Italy",
    priceLevel: "$$",
  },
  // Coffee Shops
  {
    slug: "james-coffee-co",
    name: "James Coffee Co.",
    category: "Coffee Shops",
    description:
      "Minimalist roastery with single-origin pour-overs and a quiet patio for focused work.",
    neighborhood: "Little Italy",
    priceLevel: "$",
  },
  {
    slug: "holsem-coffee",
    name: "Holsem Coffee",
    category: "Coffee Shops",
    description:
      "Bright, airy space with specialty lattes and plenty of outlets — a North Park favorite.",
    neighborhood: "North Park",
    priceLevel: "$",
  },
  {
    slug: "bird-rock-coffee",
    name: "Bird Rock Coffee Roasters",
    category: "Coffee Shops",
    description:
      "Award-winning local roaster with expertly pulled espresso and coastal neighborhood charm.",
    neighborhood: "La Jolla",
    priceLevel: "$",
  },
  // Mexican Food
  {
    slug: "las-cuatro-milpas",
    name: "Las Cuatro Milpas",
    category: "Mexican Food",
    description:
      "No-frills Barrio Logan institution serving handmade tortillas and legendary rolled tacos since 1933.",
    neighborhood: "Barrio Logan",
    priceLevel: "$",
  },
  {
    slug: "puesto",
    name: "Puesto",
    category: "Mexican Food",
    description:
      "Elevated street tacos with house-made tortillas, craft cocktails, and a vibrant atmosphere.",
    neighborhood: "La Jolla",
    priceLevel: "$$",
  },
  {
    slug: "salud",
    name: "Salud!",
    category: "Mexican Food",
    description:
      "Late-night taco shop in Barrio Logan with bold flavors and a cult following among locals.",
    neighborhood: "Barrio Logan",
    priceLevel: "$",
  },
  // Seafood
  {
    slug: "the-fishery",
    name: "The Fishery",
    category: "Seafood",
    description:
      "Pacific Beach fish market and restaurant serving the day's catch with Pacific views.",
    neighborhood: "Pacific Beach",
    priceLevel: "$$",
  },
  {
    slug: "king-and-queen",
    name: "King & Queen Cantina",
    category: "Seafood",
    description:
      "Waterfront seafood with Baja-inspired flavors and a lively Little Italy patio.",
    neighborhood: "Little Italy",
    priceLevel: "$$",
  },
  {
    slug: "mister-as",
    name: "Mister A's",
    category: "Seafood",
    description:
      "Fine dining atop Bankers Hill with panoramic bay views and impeccably prepared seafood.",
    neighborhood: "Bankers Hill",
    priceLevel: "$$$$",
  },
  // Romantic Dinner
  {
    slug: "addison",
    name: "Addison",
    category: "Romantic Dinner",
    description:
      "San Diego's only three-Michelin-star restaurant — an unforgettable tasting menu experience.",
    neighborhood: "Del Mar",
    priceLevel: "$$$$",
  },
  {
    slug: "herb-and-wood",
    name: "Herb & Wood",
    category: "Romantic Dinner",
    description:
      "Stunning Little Italy space with wood-fired cuisine, dim lighting, and a lush garden patio.",
    neighborhood: "Little Italy",
    priceLevel: "$$$",
  },
  {
    slug: "juniper-and-ivy",
    name: "Juniper & Ivy",
    category: "Romantic Dinner",
    description:
      "Chef Richard Blais's inventive American cuisine in an intimate, industrial-chic setting.",
    neighborhood: "Little Italy",
    priceLevel: "$$$",
  },
  // Rooftop/Ocean View
  {
    slug: "lofty-coffee-ocean-view",
    name: "Lofty Coffee — Ocean View",
    category: "Rooftop/Ocean View",
    description:
      "Perched above the coast with sweeping Pacific views and artisan coffee by day.",
    neighborhood: "Encinitas",
    priceLevel: "$$",
  },
  {
    slug: "latitude-32",
    name: "Latitude 32",
    category: "Rooftop/Ocean View",
    description:
      "Rooftop lounge at the InterContinental with craft cocktails and downtown skyline views.",
    neighborhood: "Downtown",
    priceLevel: "$$$",
  },
  {
    slug: "ocean-terrace",
    name: "Ocean Terrace",
    category: "Rooftop/Ocean View",
    description:
      "Open-air dining at the Catamaran Resort with tropical cocktails and Mission Bay sunsets.",
    neighborhood: "Pacific Beach",
    priceLevel: "$$$",
  },
  // Late Night Food
  {
    slug: "super-natural-sandwiches",
    name: "Super Natural Sandwiches",
    category: "Late Night Food",
    description:
      "Hearty sandwiches and smoothies open late — a Pacific Beach staple after a night out.",
    neighborhood: "Pacific Beach",
    priceLevel: "$",
  },
  {
    slug: "ob-noodle-house",
    name: "OB Noodle House",
    category: "Late Night Food",
    description:
      "Pho, ramen, and Asian comfort food until the early hours in Ocean Beach.",
    neighborhood: "Ocean Beach",
    priceLevel: "$",
  },
  {
    slug: "taco-shop-at-underdogs",
    name: "Taco Shop at Underdogs",
    category: "Late Night Food",
    description:
      "Craft beer bar with a serious taco window — the perfect post-bar fuel in North Park.",
    neighborhood: "North Park",
    priceLevel: "$$",
  },
];

export function getAllRestaurants(): Restaurant[] {
  return restaurants;
}

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function getRestaurantsByCategory(category: string): Restaurant[] {
  return restaurants.filter((r) => r.category === category);
}

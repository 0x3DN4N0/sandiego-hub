import type { Metadata } from "next";

import { BeachCard } from "@/components/cards/BeachCard";
import { EventCard } from "@/components/cards/EventCard";
import { NeighborhoodCard } from "@/components/cards/NeighborhoodCard";
import { NightlifeCard } from "@/components/cards/NightlifeCard";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { AboutBlurb } from "@/components/sections/AboutBlurb";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { Hero } from "@/components/sections/Hero";
import { MoodGrid } from "@/components/sections/MoodGrid";
import { getAllBeaches } from "@/lib/data/beaches";
import { getAllEvents } from "@/lib/data/events";
import { getAllNeighborhoods } from "@/lib/data/neighborhoods";
import { getAllNightlifeVenues } from "@/lib/data/nightlife";
import { getAllRestaurants } from "@/lib/data/restaurants";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Discover San Diego",
  description:
    "Discover the best of San Diego — neighborhoods, beaches, food, nightlife, events, and curated mood-based recommendations.",
  path: "/",
});

export default async function Home() {
  const featuredBeaches = getAllBeaches().slice(0, 4);
  const featuredRestaurants = getAllRestaurants().slice(0, 4);
  const featuredNightlife = getAllNightlifeVenues().slice(0, 4);
  const featuredNeighborhoods = getAllNeighborhoods().slice(0, 4);
  const featuredEvents = (await getAllEvents()).slice(0, 4);

  return (
    <>
      <Hero />
      <AboutBlurb />
      <FeaturedSection
        title="Featured Beaches"
        description="Sun, surf, and the coastlines locals swear by."
        alternate
      >
        {featuredBeaches.map((beach) => (
          <BeachCard key={beach.slug} beach={beach} />
        ))}
      </FeaturedSection>
      <FeaturedSection
        title="Featured Food"
        description="From taco shops to tasting menus — the tables worth booking."
      >
        {featuredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
        ))}
      </FeaturedSection>
      <FeaturedSection
        title="Featured Nightlife"
        description="Cocktail bars, live music, and late-night energy."
        alternate
      >
        {featuredNightlife.map((venue) => (
          <NightlifeCard key={venue.slug} venue={venue} />
        ))}
      </FeaturedSection>
      <FeaturedSection
        title="Featured Neighborhoods"
        description="Distinct corners of the city, each with its own character."
      >
        {featuredNeighborhoods.map((neighborhood) => (
          <NeighborhoodCard
            key={neighborhood.slug}
            neighborhood={neighborhood}
          />
        ))}
      </FeaturedSection>
      <FeaturedSection
        title="Featured Events"
        description="Festivals, markets, and happenings worth planning around."
        alternate
      >
        {featuredEvents.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </FeaturedSection>
      <MoodGrid />
    </>
  );
}

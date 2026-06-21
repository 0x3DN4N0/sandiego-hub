import type { Metadata } from "next";

import { ExploreContent } from "@/components/explore/ExploreContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Explore",
  description:
    "Browse San Diego by category or mood — neighborhoods, beaches, food, nightlife, events, and curated vibes.",
  path: "/explore",
});

export default function ExplorePage() {
  return (
    <>
      <PageHeader
        title="Explore"
        description="Browse San Diego by category or find your vibe — however you like to discover the city."
      />
      <ExploreContent />
    </>
  );
}

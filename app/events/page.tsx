import type { Metadata } from "next";

import { EventsContent } from "@/components/events/EventsContent";
import { PageHeader } from "@/components/layout/PageHeader";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Events",
  description:
    "San Diego events — festivals, farmers markets, live music, arts, LGBTQ+ happenings, and free outdoor activities.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="Festivals, markets, live music, and happenings worth planning your weekend around."
      />
      <EventsContent />
    </>
  );
}

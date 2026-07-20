import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

type LocationMapProps = {
  lat: number;
  lng: number;
  name: string;
  className?: string;
  zoom?: number;
};

export function LocationMap({
  lat,
  lng,
  name,
  className,
  zoom = 14,
}: LocationMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  if (!apiKey) {
    return (
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border/80 bg-sand/50 px-4 text-center transition-colors hover:bg-sand",
          className,
        )}
      >
        <MapPin className="size-5 text-ocean" aria-hidden />
        <p className="text-sm text-muted-foreground">
          Open {name} in Google Maps
        </p>
      </a>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm",
        className,
      )}
    >
      <iframe
        title={`Map of ${name}`}
        src={src}
        className="pointer-events-none aspect-[16/10] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={-1}
      />
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Open ${name} in Google Maps`}
      />
    </div>
  );
}

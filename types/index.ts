export interface Neighborhood {
  slug: string;
  name: string;
  description: string;
  bestFor: string;
  vibe: string;
  priceLevel: string;
  suggestedActivities: string[];
  lat: number;
  lng: number;
}

export interface Beach {
  slug: string;
  name: string;
  description: string;
  bestFor: string;
  crowdLevel: string;
  parkingDifficulty: string;
  vibe: string;
  lat: number;
  lng: number;
}

export interface Restaurant {
  slug: string;
  name: string;
  category: string;
  description: string;
  neighborhood: string;
  priceLevel: string;
}

export interface NightlifeVenue {
  slug: string;
  name: string;
  category: string;
  description: string;
  vibe: string;
}

export interface SDEvent {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** ISO 8601 start time for date-aware category tags */
  startsAt?: string;
  category: string[];
  isFree: boolean;
  isOutdoor: boolean;
}

export interface Mood {
  slug: string;
  label: string;
  description: string;
  icon?: string;
}

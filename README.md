# San Diego Hub

A premium local discovery platform for exploring San Diego — neighborhoods, beaches, restaurants, nightlife, events, and mood-based recommendations. Built as a portfolio project with a coastal, editorial design and a codebase structured for future AI features.

**Live demo:** Deploy to [Vercel](https://vercel.com) (see [Deployment](#deployment) below).

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI:** [shadcn/ui](https://ui.shadcn.com) (Base UI primitives)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Fonts:** Playfair Display (headings) + DM Sans (body) via `next/font`
- **Deployment:** Vercel (zero-config)

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

---

## Project Structure

```
app/
  layout.tsx              # Root layout, fonts, global metadata
  page.tsx                # Homepage
  icon.svg                # Favicon
  not-found.tsx           # Branded 404 page
  explore/page.tsx        # Browse by category or mood
  neighborhoods/page.tsx  # All neighborhoods
  beaches/page.tsx        # All beaches
  food/page.tsx           # Restaurants by category
  nightlife/page.tsx      # Venues by category
  events/page.tsx         # Events with client-side filters
  about/page.tsx          # About / mission page
  globals.css             # Coastal color palette & typography

components/
  layout/                 # Navbar, Footer, PageHeader, CategoryNav
  sections/               # Hero, FeaturedSection, MoodGrid, etc.
  cards/                  # Reusable entity cards (Beach, Food, etc.)
  motion/                 # Framer Motion scroll & stagger primitives
  ui/                     # shadcn/ui components

lib/
  data/                   # Static data + getter functions
  site-metadata.ts        # SEO / Open Graph helpers
  layout-classes.ts       # Shared spacing & typography classes
  utils.ts                # cn() utility

types/
  index.ts                # TypeScript interfaces for all entities
```

### Data philosophy

All content lives in `lib/data/` as typed static arrays. Components never import raw arrays — they use getter functions like `getAllNeighborhoods()` and `getNeighborhoodBySlug()`. Every entity has a stable `slug` for future routing and AI features. This layer can be swapped for an API or AI pipeline without touching UI code.

---

## Environment Variables

No environment variables are required for v1. The app runs entirely on static data with zero backend.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site URL for SEO metadata and Open Graph tags (e.g. `https://san-diego-hub.vercel.app`). Falls back to `VERCEL_URL` on Vercel, or `http://localhost:3000` locally. |
| `VERCEL_URL` | Auto-set | Provided automatically by Vercel at deploy time. Do not set manually. |

---

## Deployment

This project is ready for zero-config deployment on Vercel:

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Deploy — no build settings or env vars needed

Optionally set `NEXT_PUBLIC_SITE_URL` to your production domain for accurate canonical URLs and social previews.

---

## Roadmap

San Diego Hub v1 is static and auth-free by design. The architecture supports these planned features:

- **AI Concierge** — Natural-language Q&A about where to go, eat, and explore
- **Itinerary Planner** — Multi-day trip builder based on mood, budget, and interests
- **Personalized Recommendations** — Tailored suggestions from user preferences and behavior
- **Saved Places** — Bookmark neighborhoods, restaurants, and events
- **User Accounts** — Profiles, preferences, and cross-device sync
- **Real-Time Events** — Live event feeds replacing static placeholders
- **Google Maps Integration** — Directions, map views, and location-aware discovery

---

## License

Private portfolio project. All rights reserved.

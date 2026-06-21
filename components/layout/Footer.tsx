import Link from "next/link";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/neighborhoods", label: "Neighborhoods" },
      { href: "/beaches", label: "Beaches" },
      { href: "/food", label: "Food & Dining" },
      { href: "/nightlife", label: "Nightlife" },
    ],
  },
  {
    title: "Plan",
    links: [
      { href: "/events", label: "Events" },
      { href: "/explore", label: "Explore" },
      { href: "#", label: "Weekend Guides" },
      { href: "#", label: "Date Ideas" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Privacy" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl font-semibold text-ocean"
            >
              San Diego Hub
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A curated guide to the neighborhoods, coastlines, and culture that
              make San Diego unforgettable.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-ocean"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/60 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} San Diego Hub. Crafted with care
            for America&apos;s Finest City.
          </p>
        </div>
      </div>
    </footer>
  );
}

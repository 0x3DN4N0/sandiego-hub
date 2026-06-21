"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout-classes";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ocean text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.65 0.12 35), transparent)",
        }}
      />

      <div
        className={cn(
          PAGE_CONTAINER,
          "relative py-24 sm:py-32 lg:py-40",
        )}
      >
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
            America&apos;s Finest City
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            San Diego Hub
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
            Discover the best of San Diego.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/explore"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-coral px-6 text-accent-foreground hover:bg-coral/90",
              )}
            >
              Explore the City
            </Link>
            <Link
              href="/explore"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
              )}
            >
              Plan Your Weekend
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

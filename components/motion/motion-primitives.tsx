"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

const MotionSection = motion.create("section");

const ease = [0.22, 1, 0.36, 1] as const;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealSectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
};

export function ScrollRevealSection({
  children,
  className,
  delay = 0,
  ...props
}: ScrollRevealSectionProps) {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </MotionSection>
  );
}

export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.07, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const cardHoverTransition = {
  duration: 0.25,
  ease,
} as const;

export const cardHoverProps = {
  whileHover: { y: -4, scale: 1.015 },
  whileTap: { scale: 0.995 },
  transition: cardHoverTransition,
} as const;

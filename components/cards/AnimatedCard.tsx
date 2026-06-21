"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { cardHoverProps } from "../motion/motion-primitives";
import { cardStyles } from "./card-styles";

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.article className={cn(cardStyles, className)} {...cardHoverProps}>
      {children}
    </motion.article>
  );
}

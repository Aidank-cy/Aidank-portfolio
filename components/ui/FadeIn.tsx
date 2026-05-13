"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.24 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

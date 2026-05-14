"use client";

import type { ReactNode } from "react";
import { Motion } from "@/components/ui/Motion";

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
  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.24 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </Motion>
  );
}

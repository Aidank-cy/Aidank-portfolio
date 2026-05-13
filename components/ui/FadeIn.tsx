"use client";

import type { ReactNode } from "react";
import { useFramerMotion, usePrefersReducedMotion } from "@/lib/useFramerMotion";
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
  const motionModule = useFramerMotion();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion || !motionModule) {
    return <div className={className}>{children}</div>;
  }

  const MotionDiv = motionModule.motion.div;

  return (
    <MotionDiv
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.24 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}

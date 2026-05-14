"use client";

import { createElement } from "react";
import type { ReactNode } from "react";
import type { HTMLMotionProps, HTMLElements } from "framer-motion";
import { useFramerMotion, usePrefersReducedMotion } from "@/lib/useFramerMotion";
import { cn } from "@/lib/utils";

type MotionTag = keyof HTMLElements;

type MotionProps<T extends MotionTag = "div"> = {
  as?: T;
  children: ReactNode;
  fallbackClassName?: string;
} & HTMLMotionProps<T>;

export function Motion<T extends MotionTag = "div">({
  as,
  children,
  className,
  fallbackClassName,
  ...motionProps
}: MotionProps<T>) {
  const motionModule = useFramerMotion();
  const prefersReducedMotion = usePrefersReducedMotion();
  const tagName = (as ?? "div") as MotionTag;

  if (prefersReducedMotion || !motionModule) {
    return createElement(
      tagName,
      { className: cn(className, fallbackClassName) },
      children,
    );
  }

  const MotionTagComponent = motionModule.motion[tagName] as React.ElementType;

  return createElement(
    MotionTagComponent,
    { ...motionProps, className: cn(className) },
    children,
  );
}

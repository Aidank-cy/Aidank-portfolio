"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useFramerMotion } from "@/lib/useFramerMotion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const motionModule = useFramerMotion();

  if (!motionModule) {
    return <>{children}</>;
  }

  const { AnimatePresence, MotionConfig, motion } = motionModule;

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.26, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}

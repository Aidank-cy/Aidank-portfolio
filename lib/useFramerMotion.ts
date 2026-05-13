"use client";

import { useEffect, useState } from "react";

type FramerMotionModule = typeof import("framer-motion");

export function useFramerMotion() {
  const [motionModule, setMotionModule] = useState<FramerMotionModule | null>(
    null,
  );

  useEffect(() => {
    let active = true;

    import("framer-motion").then((module) => {
      if (active) {
        setMotionModule(module);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return motionModule;
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      const motionMode = root.dataset.motionMode;

      if (motionMode === "on") {
        setPrefersReducedMotion(true);
        return;
      }

      if (motionMode === "off") {
        setPrefersReducedMotion(false);
        return;
      }

      setPrefersReducedMotion(
        root.classList.contains("reduce-motion") || mediaQuery.matches,
      );
    };

    const observer = new MutationObserver(updatePreference);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-motion-mode"],
    });

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      observer.disconnect();
    };
  }, []);

  return prefersReducedMotion;
}

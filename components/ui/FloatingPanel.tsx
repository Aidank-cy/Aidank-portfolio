"use client";

import { useEffect, useRef, useState } from "react";
import { useFramerMotion, usePrefersReducedMotion } from "@/lib/useFramerMotion";
import { cn } from "@/lib/utils";

type FontSizeClass = "text-sm" | "text-base" | "text-lg";
type PanelPosition = "left" | "right";
type ThemeMode = "system" | "light" | "dark";
type MotionMode = "system" | "on" | "off";

const fontSizeOptions: FontSizeClass[] = ["text-sm", "text-base", "text-lg"];

const storageKeys = {
  fontSize: "floating-panel-font-size",
  position: "floating-panel-position",
  theme: "floating-panel-theme",
  motion: "floating-panel-motion",
} as const;

const fontSizeLabels: Record<FontSizeClass, string> = {
  "text-sm": "Small",
  "text-base": "Medium",
  "text-lg": "Large",
};

function getStoredFontSize(): FontSizeClass {
  if (typeof window === "undefined") {
    return "text-base";
  }

  const storedValue = window.localStorage.getItem(storageKeys.fontSize);

  return storedValue === "text-sm" || storedValue === "text-base" || storedValue === "text-lg"
    ? storedValue
    : "text-base";
}

function getStoredPosition(): PanelPosition {
  if (typeof window === "undefined") {
    return "left";
  }

  return window.localStorage.getItem(storageKeys.position) === "right"
    ? "right"
    : "left";
}

function getStoredThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedValue = window.localStorage.getItem(storageKeys.theme);

  return storedValue === "light" || storedValue === "dark" || storedValue === "system"
    ? storedValue
    : "system";
}

function getStoredMotionMode(): MotionMode {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedValue = window.localStorage.getItem(storageKeys.motion);

  return storedValue === "on" || storedValue === "off" || storedValue === "system"
    ? storedValue
    : "system";
}

function getSystemPrefersDark() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;
}

function getSystemPrefersReducedMotion() {
  return typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

function getIsAtTop() {
  return typeof window !== "undefined" ? window.scrollY < 24 : true;
}

export function FloatingPanel() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const motionModule = useFramerMotion();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(getIsAtTop);
  const [fontSize, setFontSize] = useState<FontSizeClass>(getStoredFontSize);
  const [position, setPosition] = useState<PanelPosition>(getStoredPosition);
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredThemeMode);
  const [motionMode, setMotionMode] = useState<MotionMode>(getStoredMotionMode);
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);
  const [systemPrefersLessMotion, setSystemPrefersLessMotion] = useState(
    getSystemPrefersReducedMotion,
  );

  const isDark = themeMode === "dark" || (themeMode === "system" && systemPrefersDark);
  const isReducedMotion =
    motionMode === "on" || (motionMode === "system" && systemPrefersLessMotion);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleDarkModeChange = () => {
      setSystemPrefersDark(darkMediaQuery.matches);
    };

    const handleReducedMotionChange = () => {
      setSystemPrefersLessMotion(motionMediaQuery.matches);
    };

    darkMediaQuery.addEventListener("change", handleDarkModeChange);
    motionMediaQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      darkMediaQuery.removeEventListener("change", handleDarkModeChange);
      motionMediaQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!isOpen || !panelRef.current) {
        return;
      }

      const target = event.target;

      if (target instanceof Node && !panelRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateScrollState = () => {
      setIsAtTop(window.scrollY < 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(...fontSizeOptions);
    root.classList.add(fontSize);
    window.localStorage.setItem(storageKeys.fontSize, fontSize);
  }, [fontSize]);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", themeMode === "dark");
    root.classList.toggle("light", themeMode === "light");
    window.localStorage.setItem(storageKeys.theme, themeMode);

    if (themeMode === "system") {
      root.classList.remove("dark");
      root.classList.remove("light");
    }
  }, [themeMode]);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("reduce-motion", motionMode === "on");
    root.dataset.motionMode = motionMode;
    window.localStorage.setItem(storageKeys.motion, motionMode);
  }, [motionMode]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.position, position);
  }, [position]);

  const toggleThemeMode = () => {
    setThemeMode(isDark ? "light" : "dark");
  };

  const toggleMotionMode = () => {
    setMotionMode(isReducedMotion ? "off" : "on");
  };

  const panelContent = (
    <div className="min-w-[420px] rounded-2xl border border-border bg-panel font-display shadow-card backdrop-blur-md max-[479px]:min-w-0 max-[479px]:w-[calc(100vw-3rem)]">
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-foreground">
          Controls
        </p>
        <div className="mt-3 flex gap-2">
          {fontSizeOptions.map((option) => {
            const active = fontSize === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setFontSize(option)}
                className={cn(
                  "flex-1 rounded-full border px-3 py-2 text-xs font-semibold transition duration-300",
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent",
                )}
              >
                {fontSizeLabels[option]}
              </button>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 max-[479px]:grid-cols-1">
          <div className="flex items-center justify-between gap-3 rounded-xl bg-background/50 p-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Panel Position</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                Switch between left and right corners.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPosition((current) => (current === "left" ? "right" : "left"))}
              aria-label="Toggle panel position"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition duration-300 hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M7 8 3 12l4 4" />
                <path d="M17 8l4 4-4 4" />
                <path d="M4 12h16" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl bg-background/50 p-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Color Mode</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                {themeMode === "system"
                  ? "Following your system setting."
                  : isDark
                    ? "Dark mode is pinned."
                    : "Light mode is pinned."}
              </p>
            </div>
            <button
              type="button"
              onClick={toggleThemeMode}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition duration-300 hover:border-accent hover:text-accent"
            >
              {isDark ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.5" />
                  <path d="M12 19.5V22" />
                  <path d="m4.93 4.93 1.77 1.77" />
                  <path d="m17.3 17.3 1.77 1.77" />
                  <path d="M2 12h2.5" />
                  <path d="M19.5 12H22" />
                  <path d="m4.93 19.07 1.77-1.77" />
                  <path d="m17.3 6.7 1.77-1.77" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl bg-background/50 p-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Back To Top</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                Scroll smoothly back to the top of the page.
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              disabled={isAtTop}
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition duration-300",
                isAtTop
                  ? "cursor-not-allowed text-muted-foreground/50"
                  : "text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="m12 18 0-12" />
                <path d="m7 11 5-5 5 5" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl bg-background/50 p-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Reduce Motion</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                {motionMode === "system"
                  ? "Following your system preference."
                  : isReducedMotion
                    ? "Animations are reduced."
                    : "Animations are allowed."}
              </p>
            </div>
            <button
              type="button"
              onClick={toggleMotionMode}
              aria-label="Toggle reduced motion"
              className={cn(
                "shrink-0 rounded-full border px-3 py-2 text-xs transition duration-300",
                isReducedMotion
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {isReducedMotion ? "On" : "Off"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={panelRef}
      className={cn(
        "fixed bottom-6 z-40 flex flex-col gap-3",
        position === "left" ? "left-6 items-start" : "right-6 items-end",
      )}
    >
      {prefersReducedMotion || !motionModule ? (
        isOpen ? panelContent : null
      ) : (
        <motionModule.AnimatePresence>
          {isOpen ? (
            <motionModule.motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                transformOrigin:
                  position === "left" ? "bottom left" : "bottom right",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transformOrigin:
                  position === "left" ? "bottom left" : "bottom right",
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                transformOrigin:
                  position === "left" ? "bottom left" : "bottom right",
              }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {panelContent}
            </motionModule.motion.div>
          ) : null}
        </motionModule.AnimatePresence>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle floating control panel"
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-panel text-foreground shadow-card backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3.25" />
          <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.7-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .7.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.6h.2a2 2 0 1 1 0 4H20a1 1 0 0 0-.9.7Z" />
        </svg>
      </button>
    </div>
  );
}

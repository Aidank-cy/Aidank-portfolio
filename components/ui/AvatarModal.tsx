"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useFramerMotion, usePrefersReducedMotion } from "@/lib/useFramerMotion";

type AvatarModalProps = {
  src: string;
  alt: string;
};

export function AvatarModal({ src, alt }: AvatarModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const motionModule = useFramerMotion();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modalContent =
    prefersReducedMotion || !motionModule ? (
      isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
        >
          <div
            className="aspect-square w-full max-w-[280px] max-h-[280px] overflow-hidden rounded-full border-4 border-white"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={320}
              height={320}
              unoptimized
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      ) : null
    ) : (
      <motionModule.AnimatePresence>
        {isOpen ? (
          <motionModule.motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motionModule.motion.div
              className="aspect-square w-full max-w-[280px] max-h-[280px] overflow-hidden rounded-full border-4 border-white"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <Image
                src={src}
                alt={alt}
                width={320}
                height={320}
                unoptimized
                className="h-full w-full object-cover"
                priority
              />
            </motionModule.motion.div>
          </motionModule.motion.div>
        ) : null}
      </motionModule.AnimatePresence>
    );

  const portalTarget = typeof document === "undefined" ? null : document.body;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open avatar"
        className="h-8 w-8 cursor-zoom-in overflow-hidden rounded-full border border-border"
      >
        <Image
          src={src}
          alt={alt}
          width={32}
          height={32}
          unoptimized
          className="h-full w-full object-cover"
        />
      </button>

      {portalTarget ? createPortal(modalContent, portalTarget) : null}
    </>
  );
}

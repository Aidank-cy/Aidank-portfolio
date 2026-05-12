"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useEffect, useId, useState } from "react";

const STORAGE_KEY = "portfolio-avatar";

type AvatarUploaderProps = {
  editable?: boolean;
  label?: string;
};

export function AvatarUploader({
  editable = true,
  label = "Upload portrait",
}: AvatarUploaderProps) {
  const [image, setImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const inputId = useId();

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setImage(saved);
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      setImage(result);
      if (result) {
        window.localStorage.setItem(STORAGE_KEY, result);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.label
        htmlFor={editable ? inputId : undefined}
        whileHover={editable ? { y: -4, scale: 1.01 } : undefined}
        whileTap={editable ? { scale: 0.98 } : undefined}
        className="group relative flex h-40 w-40 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-gradient-to-br from-white via-mist to-stone-200 shadow-float transition-colors duration-300 hover:border-ink/30 md:h-48 md:w-48"
      >
        <span className="absolute inset-3 rounded-full border border-dashed border-ink/10 transition-colors duration-300 group-hover:border-ink/30" />
        <AnimatePresence mode="wait">
          {mounted && image ? (
            <motion.span
              key="image"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative h-full w-full"
            >
              <Image
                src={image}
                alt="Profile avatar"
                fill
                sizes="192px"
                className="object-cover"
              />
            </motion.span>
          ) : (
            <motion.span
              key="placeholder"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(227,227,221,0.75),_rgba(165,165,160,0.32))]"
            >
              <span className="text-[11px] uppercase tracking-[0.36em] text-ink/45">
                {label}
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.label>
      {editable ? (
        <>
          <input
            id={inputId}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <p className="text-center text-xs uppercase tracking-[0.28em] text-ink/45">
            点击圆形头像区域上传你的照片
          </p>
        </>
      ) : null}
    </div>
  );
}

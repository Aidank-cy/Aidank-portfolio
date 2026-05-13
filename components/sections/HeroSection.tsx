"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const items = [
  {
    key: "eyebrow",
    className: "",
    content: (
      <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
        Vibe Coding with AI
      </p>
    ),
  },
  {
    key: "title",
    className: "mt-6",
    content: (
      <h1 className="max-w-5xl font-display text-5xl font-medium tracking-[-0.06em] text-balance text-foreground sm:text-6xl lg:text-[5.5rem]">
        Zero human-written code. Every line, prompted.
      </h1>
    ),
  },
  {
    key: "copy",
    className: "mt-6",
    content: (
      <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        {siteConfig.intro}
      </p>
    ),
  },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pb-24 pt-16 md:pb-32 md:pt-24 lg:pb-36">
      <Container>
        <div className="rounded-[2.5rem] border border-border bg-panel px-6 py-12 shadow-card backdrop-blur-md md:px-10 md:py-16 lg:px-14 lg:py-20">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "show"}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-5xl"
          >
            {items.map((item) => (
              <motion.div
                key={item.key}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={item.className}
              >
                {item.content}
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button href="/projects">View Projects</Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

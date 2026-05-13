"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { useFramerMotion, usePrefersReducedMotion } from "@/lib/useFramerMotion";

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
  const motionModule = useFramerMotion();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion || !motionModule) {
    return (
      <section className="pb-24 pt-16 md:pb-32 md:pt-24 lg:pb-36">
        <Container>
          <div className="rounded-[2.5rem] border border-border bg-panel px-6 py-12 shadow-card backdrop-blur-md md:px-10 md:py-16 lg:px-14 lg:py-20">
            <div className="max-w-5xl">
              {items.map((item) => (
                <div key={item.key} className={item.className}>
                  {item.content}
                </div>
              ))}

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/projects">View Projects</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const MotionDiv = motionModule.motion.div;

  return (
    <section className="pb-24 pt-16 md:pb-32 md:pt-24 lg:pb-36">
      <Container>
        <div className="rounded-[2.5rem] border border-border bg-panel px-6 py-12 shadow-card backdrop-blur-md md:px-10 md:py-16 lg:px-14 lg:py-20">
          <MotionDiv
            initial="hidden"
            animate="show"
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
              <MotionDiv
                key={item.key}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={item.className}
              >
                {item.content}
              </MotionDiv>
            ))}

            <MotionDiv
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button href="/projects">View Projects</Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section className="pb-24 pt-8 md:pb-32 md:pt-12 lg:pb-36">
      <Container>
        <FadeIn className="rounded-[2.5rem] border border-border bg-panel px-6 py-10 shadow-card backdrop-blur-sm md:px-10 md:py-14">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
              Product-minded engineering with a preference for clear systems.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.about}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main className="pb-28 pt-10 md:pb-36 md:pt-16">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium tracking-[-0.05em] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            The page you requested does not exist or is no longer available.
          </p>
          <div className="mt-10">
            <Button href="/">Back to Home</Button>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}

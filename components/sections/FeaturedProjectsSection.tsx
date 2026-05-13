import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { ProjectSummary } from "@/lib/types";

type FeaturedProjectsSectionProps = {
  projects: ProjectSummary[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section
      id="featured-projects"
      className="pb-24 pt-8 md:pb-32 md:pt-12 lg:pb-36"
    >
      <Container>
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Featured Projects
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              Things I've been working on.
            </h2>
          </div>
          <Button href="/projects" variant="secondary">
            See All Projects
          </Button>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

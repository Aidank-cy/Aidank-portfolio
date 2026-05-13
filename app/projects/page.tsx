import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { getAllProjects } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All of Aidank's GitHub projects.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="pb-28 pt-10 md:pb-36 md:pt-16">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Project Index
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium tracking-[-0.05em] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Every configured repository, prebuilt from GitHub.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Project data pulled from GitHub at build time.
          </p>
        </FadeIn>

        <ProjectsExplorer projects={projects} />
      </Container>
    </main>
  );
}

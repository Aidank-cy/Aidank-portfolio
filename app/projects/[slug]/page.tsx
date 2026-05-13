import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { getAllProjects, getProjectBySlug } from "@/lib/github";
import { formatDate, formatNumber } from "@/lib/utils";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    } satisfies Metadata;
  }

  return {
    title: project.name,
    description:
      project.description ||
      `Read repository details, README, and language breakdown for ${project.fullName}.`,
    openGraph: {
      title: project.name,
      description:
        project.description ||
        `Repository details for ${project.fullName} built statically from GitHub.`,
      url: `/projects/${project.slug}`,
    },
  } satisfies Metadata;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-28 pt-10 md:pb-36 md:pt-16">
      <Container>
        <FadeIn className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Repository Detail
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium tracking-[-0.05em] text-balance text-foreground sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {project.description || "No repository description was provided."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.url} external>
              View on GitHub
            </Button>
            {project.homepage ? (
              <Button href={project.homepage} external variant="secondary">
                Open Live Link
              </Button>
            ) : null}
          </div>
        </FadeIn>

        <section className="mt-14 grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
          <FadeIn className="rounded-[2rem] border border-border bg-panel p-6 shadow-card backdrop-blur-sm md:p-8">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Repository
                </p>
                <p className="mt-3 text-lg text-foreground">
                  {project.fullName}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Stars
                  </p>
                  <p className="mt-3 text-2xl font-medium text-foreground">
                    {formatNumber(project.stars)}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Forks
                  </p>
                  <p className="mt-3 text-2xl font-medium text-foreground">
                    {formatNumber(project.forks)}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Issues
                  </p>
                  <p className="mt-3 text-2xl font-medium text-foreground">
                    {formatNumber(project.openIssues)}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Updated
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground">
                    {formatDate(project.updatedAt)}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Primary Language
                </p>
                <div className="mt-4">
                  <Tag>{project.primaryLanguage || "Unknown"}</Tag>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Language Breakdown
                </p>
                <div className="mt-4 space-y-3">
                  {project.languages.length ? (
                    project.languages.map((language) => (
                      <div key={language.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-4 text-sm text-foreground">
                          <span>{language.name}</span>
                          <span className="text-muted-foreground">
                            {language.percentage}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-border">
                          <div
                            className="h-full rounded-full bg-accent"
                            style={{ width: `${language.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm leading-7 text-muted-foreground">
                      No language statistics were returned by GitHub for this
                      repository.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            className="rounded-[2rem] border border-border bg-panel p-6 shadow-card backdrop-blur-sm md:p-8"
            delay={0.08}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  README
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Rendered statically from GitHub during the build.
                </p>
              </div>
            </div>

            {project.readme ? (
              <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:tracking-[-0.03em] prose-a:text-accent prose-code:rounded prose-code:bg-border prose-code:px-1 prose-code:py-0.5 prose-pre:rounded-3xl prose-pre:border prose-pre:border-border prose-pre:bg-slate-950 prose-pre:text-slate-100 dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.readme}
                </ReactMarkdown>
              </div>
            ) : (
              <p className="mt-10 text-base leading-8 text-muted-foreground">
                This repository does not expose a readable README through the
                GitHub API.
              </p>
            )}
          </FadeIn>
        </section>
      </Container>
    </main>
  );
}

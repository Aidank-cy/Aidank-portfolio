import Link from "next/link";
import { notFound } from "next/navigation";
import { AvatarUploader } from "@/components/avatar-uploader";
import { getProjectBySlug, profile, projects } from "@/lib/site-data";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-6 md:px-10 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:42px_42px] opacity-[0.12]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.92),_rgba(255,255,255,0))]" />

      <article className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-white/70 bg-white/72 px-6 py-10 shadow-float backdrop-blur-xl md:px-10 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-ink/55 transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-ink/55 transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                All Projects
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
                {profile.name}
              </p>
              <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65 md:text-lg">
                {project.highlight}
              </p>
            </div>
          </div>
          <AvatarUploader />
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink/8 pt-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
                项目信息
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-sm text-ink/45">类别</p>
                  <p className="mt-1 text-base text-ink">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-ink/45">年份</p>
                  <p className="mt-1 text-base text-ink">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-ink/45">技术栈</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-ink/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-ink/8 bg-mist/60 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/45">
                Project Story
              </p>
              <div className="prose mt-6 max-w-none prose-p:text-ink/70">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-ink/8 bg-ink p-6 text-white md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                Summary
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

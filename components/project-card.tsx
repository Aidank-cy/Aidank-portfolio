import Link from "next/link";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-white/85 p-6 shadow-[0_18px_50px_rgba(10,10,10,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.04),_transparent_48%)] opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink/45 transition-colors duration-300 group-hover:text-white/60">
            {project.category}
          </p>
          <h3 className="mt-4 font-display text-2xl tracking-tight">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-ink/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/55 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/70">
          {project.year}
        </span>
      </div>
      <div className="relative space-y-4">
        <p className="max-w-xs text-sm leading-6 text-ink/70 transition-colors duration-300 group-hover:text-white/75">
          {project.summary}
        </p>
        <div className="flex items-center justify-between text-sm text-ink/55 transition-colors duration-300 group-hover:text-white/70">
          <span>查看项目</span>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>
    </Link>
  );
}

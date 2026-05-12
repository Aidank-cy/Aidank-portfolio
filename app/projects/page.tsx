import Link from "next/link";
import { AvatarUploader } from "@/components/avatar-uploader";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-6 md:px-10 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:42px_42px] opacity-[0.12]" />

      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-white/70 bg-white/70 px-6 py-10 shadow-float backdrop-blur-xl md:px-10 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-ink/50 transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              Back Home
            </Link>
            <SectionHeading
              eyebrow={profile.name}
              title="项目"
              description="这是你的项目总览页。当前使用 3 列可扩展布局，后续只要继续添加项目数据，就会自动排版。"
            />
          </div>
          <AvatarUploader />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

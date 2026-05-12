import Link from "next/link";
import { AvatarUploader } from "@/components/avatar-uploader";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects } from "@/lib/site-data";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <main className="relative overflow-hidden px-6 pb-20 pt-6 md:px-10 md:pb-28 md:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:42px_42px] opacity-[0.18]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9),_rgba(255,255,255,0))]" />

      <section className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-white/70 bg-white/65 px-6 py-10 shadow-float backdrop-blur-xl md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.34em] text-ink/45">
                Dashboard
              </p>
              <h1 className="max-w-3xl font-display text-6xl leading-none tracking-tight text-ink md:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-ink/70 md:text-lg">
                {profile.school}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-ink/55 md:text-base">
                {profile.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                查看项目
              </Link>
              <a
                href="#featured-projects"
                className="rounded-full border border-ink/10 px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                下滑浏览
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <AvatarUploader />
          </div>
        </div>
      </section>

      <section
        id="featured-projects"
        className="relative mx-auto mt-12 max-w-6xl rounded-[2.5rem] border border-ink/8 bg-white/70 px-6 py-10 backdrop-blur md:mt-14 md:px-10 md:py-14"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="项目"
            description="下面先放三组精选项目卡片。后续你增加项目时，只需要改一个数据文件，页面会自动继续按 3 列扩展。"
          />
          <Link
            href="/projects"
            className="w-fit rounded-full border border-ink/10 px-5 py-3 text-sm uppercase tracking-[0.18em] text-ink/65 transition-colors duration-300 hover:border-ink hover:text-ink"
          >
            查看全部
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

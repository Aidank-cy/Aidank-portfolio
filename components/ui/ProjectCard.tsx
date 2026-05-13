"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectSummary } from "@/lib/types";
import { formatDate, formatNumber } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectSummary;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="group h-full rounded-[2rem] border border-border bg-panel shadow-card backdrop-blur-sm"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col justify-between p-6 md:p-7"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.primaryLanguage || "Unknown"}
            </span>
            {project.featured ? (
              <span className="rounded-full border border-accent px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-accent">
                Featured
              </span>
            ) : null}
          </div>

          <h3 className="mt-6 font-display text-3xl tracking-[-0.05em] text-foreground transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.description || "No repository description provided."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Stars
            </p>
            <p className="mt-2 text-foreground">{formatNumber(project.stars)}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Updated
            </p>
            <p className="mt-2 text-foreground">{formatDate(project.updatedAt)}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

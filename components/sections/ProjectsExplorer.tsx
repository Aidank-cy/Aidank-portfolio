"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { ProjectSummary } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProjectsExplorerProps = {
  projects: ProjectSummary[];
};

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const languages = [
    "All",
    ...new Set(
      projects
        .map((project) => project.primaryLanguage)
        .filter((language): language is string => Boolean(language)),
    ),
  ];
  const [activeLanguage, setActiveLanguage] = useState("All");
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    activeLanguage === "All"
      ? projects
      : projects.filter((project) => project.primaryLanguage === activeLanguage);

  return (
    <div className="mt-14">
      <FadeIn>
        <div className="flex flex-wrap gap-3">
          {languages.map((language) => {
            const active = language === activeLanguage;

            return (
              <button
                key={language}
                type="button"
                onClick={() => setActiveLanguage(language)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition duration-300",
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-panel text-muted-foreground hover:border-accent hover:text-accent",
                )}
              >
                {language}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <motion.div
        layout={!prefersReducedMotion}
        className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.04}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </motion.div>
    </div>
  );
}

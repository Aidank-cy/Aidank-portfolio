import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { getFeaturedProjects } from "@/lib/github";

export const metadata: Metadata = {
  title: "Home",
  description:
    "A static portfolio for Aidank, featuring selected GitHub projects, thoughtful interfaces, and an Apple-inspired visual system.",
};

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <AboutSection />
    </main>
  );
}

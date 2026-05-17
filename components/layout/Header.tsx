"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AvatarModal } from "@/components/ui/AvatarModal";
import { siteConfig } from "@/config/site";
import { basePath } from "@/lib/basePath";
import { useFramerMotion } from "@/lib/useFramerMotion";
import { cn } from "@/lib/utils";

const navLinkClasses =
  "relative inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.02em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function normalizePathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  if (basePath && pathname.startsWith(basePath)) {
    const normalized = pathname.slice(basePath.length);
    return normalized ? normalized : "/";
  }

  return pathname;
}

export function Header() {
  const pathname = usePathname();
  const currentPath = normalizePathname(pathname);
  const motionModule = useFramerMotion();
  const homeIsActive = currentPath === "/";
  const projectsIsActive =
    currentPath === "/projects" || currentPath.startsWith("/projects/");
  const activeLinkClasses = motionModule
    ? "text-foreground"
    : "bg-background text-foreground shadow-sm ring-1 ring-border";

  return (
    <header className="sticky top-0 z-40">
      <Container className="pt-4 md:pt-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border bg-panel px-4 py-3 shadow-card backdrop-blur-md">
          <div className="flex items-center gap-2 font-display text-sm font-medium tracking-[0.22em] text-foreground uppercase">
            <AvatarModal
              src={siteConfig.avatar}
              alt={`${siteConfig.name} avatar`}
            />
            <Link href="/">{siteConfig.name}</Link>
          </div>

          <nav className="relative hidden items-center gap-2 md:flex">
            <Link
              href="/"
              aria-current={homeIsActive ? "page" : undefined}
              className={cn(
                navLinkClasses,
                homeIsActive
                  ? activeLinkClasses
                  : "text-muted-foreground hover:bg-background/70 hover:text-foreground",
              )}
            >
              {homeIsActive && motionModule ? (
                <motionModule.motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-background shadow-sm ring-1 ring-border"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">Home</span>
            </Link>
            <Link
              href="/projects"
              aria-current={projectsIsActive ? "page" : undefined}
              className={cn(
                navLinkClasses,
                projectsIsActive
                  ? activeLinkClasses
                  : "text-muted-foreground hover:bg-background/70 hover:text-foreground",
              )}
            >
              {projectsIsActive && motionModule ? (
                <motionModule.motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-background shadow-sm ring-1 ring-border"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">Projects</span>
            </Link>
            <Button href={siteConfig.githubUrl} variant="ghost" external>
              GitHub
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

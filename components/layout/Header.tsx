import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AvatarModal } from "@/components/ui/AvatarModal";
import { siteConfig } from "@/config/site";

export function Header() {
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

          <nav className="hidden items-center gap-2 md:flex">
            <Button href="/" variant="ghost">
              Home
            </Button>
            <Button href="/projects" variant="ghost">
              Projects
            </Button>
            <Button href={siteConfig.socials[0].href} variant="ghost" external>
              GitHub
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

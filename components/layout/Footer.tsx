import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="pb-10 pt-16 md:pb-14 md:pt-24">
      <Container>
        <div className="rounded-[2rem] border border-border bg-panel px-6 py-8 shadow-card backdrop-blur-sm md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-2xl tracking-[-0.04em] text-foreground">
                {siteConfig.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Static export, GitHub-sourced data, and a deliberately restrained
                interface system.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

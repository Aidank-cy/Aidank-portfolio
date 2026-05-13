# Implementation Notes

These notes capture practical mistakes and corrections from previous implementation passes. Read this file before large refactors or when rebuilding the portfolio architecture.

## Validation Lessons

- Keep lint non-interactive.
  - Use the checked-in ESLint config.
  - Do not rely on `next lint` prompting for setup.
- A local `npm run build` for this project may need network access.
  - Google Fonts are fetched by `next/font/google`.
  - GitHub repository data is fetched during static generation.
- Network-related build failures are not automatically application bugs. First distinguish:
  - sandbox or proxy restrictions
  - missing token
  - actual code errors

## Architecture Lessons

- New page code should depend on:
  - `config/projects.ts`
  - `config/site.ts`
  - `lib/github.ts`
  - `lib/types.ts`
- Do not route new implementation back through old prototype modules such as local mock project data if the target architecture is now GitHub-driven.
- Keep browser interactivity local and small. Data fetching should stay on the server-generation side.

## App Router Lessons

- In `generateMetadata` and similar App Router helpers, await async data access explicitly.
- Use `generateStaticParams` for project detail routes and keep route slugs deterministic from config.
- If a page only needs static data and composition, keep it as a server component.

## Styling Lessons

- Tailwind v4 theme tokens should be defined centrally and used semantically.
- Prefer `bg-panel`, `bg-background`, `text-foreground`, `text-muted-foreground`, and similar stable tokens over one-off raw color usage.
- Keep dark mode support intact whenever changing layout or color treatment.

## Motion Lessons

- Framer Motion is the default motion system here.
- Always provide a reduced-motion-safe path by respecting `prefers-reduced-motion`.
- Put global motion wrappers such as page transitions in one layout-level client boundary instead of duplicating them across pages.

## Content And Fallback Lessons

- GitHub README content may be absent or unreadable. Handle that gracefully.
- GitHub project data may have missing fields such as:
  - `description`
  - `homepage`
  - `language`
- Missing optional repository fields should degrade cleanly in the UI rather than causing rendering errors.

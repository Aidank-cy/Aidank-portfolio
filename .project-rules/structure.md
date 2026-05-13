# Directory Structure

## Target Layout

- `app/`
  - `layout.tsx`
  - `page.tsx`
  - `projects/page.tsx`
  - `projects/[slug]/page.tsx`
- `components/ui/`
  - Button, Card, Tag, and other primitives
- `components/layout/`
  - Header, Footer, Container, and shell-level components
- `components/sections/`
  - Hero, FeaturedProjects, About, and other page sections
- `lib/github.ts`
  - GitHub REST API helpers
- `lib/types.ts`
  - Shared TypeScript types
- `config/projects.ts`
  - Project source configuration
- `config/site.ts`
  - Site metadata and social links
- `EDITING.md`
  - Human editing guide for copy, social links, and project entries
- `.project-rules/`
  - Project guidance documents
- `out/`
  - Static export output

## Structure Rules

- Prefer moving toward this target layout as implementation progresses.
- Keep repository data configuration in `config/projects.ts`, not inside page files.
- Keep site identity and social metadata in `config/site.ts`.
- Keep GitHub API access logic centralized in `lib/github.ts`.
- Keep shared types centralized in `lib/types.ts`.
- Do not introduce a `src/` directory unless the user explicitly asks for that reorganization.
- Treat old prototype files outside this target structure as legacy unless the user explicitly asks to preserve or revive them.

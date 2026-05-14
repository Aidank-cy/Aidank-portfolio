# Directory Structure

## Target Layout

- `app/`
  - `layout.tsx`
  - `page.tsx`
  - `projects/page.tsx`
  - `projects/[slug]/page.tsx`
- `components/ui/`
  - Motion, Button, AvatarModal, FloatingPanel, Tag, and other primitives
- `components/layout/`
  - Header, Footer, Container, and shell-level components
- `components/sections/`
  - Hero, FeaturedProjects, About, and other page sections
- `lib/github.ts`
  - GitHub REST API helpers
- `lib/useFramerMotion.ts`
  - Shared client-side Motion loader and reduced-motion hook
- `lib/types.ts`
  - Shared TypeScript types
- `config/projects.ts`
  - Project source configuration
- `config/site.ts`
  - Site metadata, avatar path, and social links
- `public/`
  - Static assets such as the header avatar image
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
- Keep static image assets in `public/` and reference them from config or components by root-relative paths.
- Keep GitHub API access logic centralized in `lib/github.ts`.
- Keep shared types centralized in `lib/types.ts`.
- Do not introduce a `src/` directory unless the user explicitly asks for that reorganization.
- Treat old prototype files outside this target structure as legacy unless the user explicitly asks to preserve or revive them.

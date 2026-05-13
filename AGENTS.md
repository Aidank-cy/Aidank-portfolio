# AGENTS.md

## Project Overview
- `Aidank-portfolio` is a static personal showcase built with Next.js 15 App Router, TypeScript, Tailwind v4, and Framer Motion.
- Repository data is fetched in `lib/github.ts` during build time and exported to `out/` for GitHub Pages.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

## Always
- Start with `git status --short`, `package.json`, `next.config.ts`, and `.project-rules/README.md`.
- Read only the rule files that match the task; if docs drift from code, trust the code and then fix the docs.
- Keep static export compatibility: `output: "export"`, deterministic project routes, and no request-time server assumptions.
- Treat `config/site.ts`, `config/projects.ts`, and `lib/github.ts` as the content and GitHub data source of truth.
- Keep interactive UI inside small client boundaries; keep GitHub fetching in build-time or server-side generation code.
- Run `npm run lint` and `npm run typecheck` after non-trivial edits; run `npm run build` for route, config, export, workflow, or data-flow changes.
- Use the harness files under `.harness/`, `hooks/`, and `skills/` instead of inventing parallel workflow docs. [INFERRED]

## Ask First
- Before adding dependencies, changing deployment behavior, or modifying GitHub API contracts.
- Before changing `app/projects/[slug]/`, `lib/github.ts`, `next.config.ts`, or `.github/workflows/`.
- Before rewriting project rules, deleting content, or touching files outside the requested scope.

## Never
- Do not edit generated output in `.next/` or `out/`; change source files and rebuild.
- Do not move GitHub fetching into client components or browser-visible environment variables.
- Do not add backend APIs, auth, databases, or CMS flows unless the product scope changes.
- Do not silence lint or type errors with `eslint-disable`, `@ts-ignore`, or similar suppressions.
- Do not revert dirty worktree files you did not create unless the user explicitly asks.

## Architecture
- `app/` owns routes and page composition.
- `components/layout`, `components/sections`, and `components/ui` own shell, sections, and primitives.
- `config/` stores site and project metadata; `lib/` owns shared helpers and GitHub fetch logic.
- `.project-rules/` holds detailed conventions; `.harness/` and `skills/` hold AI workflow scaffolding.

# Aidank Portfolio

Personal project showcase, vibe coded with AI. Zero human-written code.

## What This Is

A harness engineering project — learning how to craft prompts, set constraints, and build feedback loops that let AI write every line of code, from architecture to deployment.

The site pulls repository data from the GitHub API at build time and exports as a static site to GitHub Pages.

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Markdown

## Pages

- `/` — hero, featured projects, about
- `/projects` — all repositories, language filter
- `/projects/[slug]` — repo detail, README rendering, stats

## Local Development

```bash
npm install
npm run dev
npm run typecheck
```

Open `http://localhost:3000`.

## Agent Workflow

- Start with [AGENTS.md](AGENTS.md).
- Detailed project rules live in `.project-rules/`.
- Harness templates, logs, and impact scripts live in `.harness/`.
- Validation hooks live in `hooks/`.
- Project-local skills live in `skills/`.

## Build & Deploy

```bash
npm run build
```

Static output goes to `out/`. Push to `main` and GitHub Actions handles the rest.

## Editing Content

See [EDITING.md](EDITING.md) for the full guide.

Quick version:
- `config/site.ts` — site copy, avatar path, and social links
- `config/projects.ts` — add, remove, feature, or reorder projects
- `public/` — static assets such as the clickable header avatar
- Edit the GitHub repo itself to change description, README, or homepage link

## Project Structure

```text
app/           # pages and layouts
components/    # layout, sections, ui
config/        # site copy and project list
lib/           # GitHub API, types, utils
public/        # static assets such as avatar images
.harness/      # harness templates, logs, and impact analysis
hooks/         # local validation hooks for AI-assisted edits
skills/        # project-specific AI workflow skills
```

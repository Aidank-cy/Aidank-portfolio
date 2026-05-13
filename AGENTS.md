# AGENTS.md

This file is the entry guidance for Codex in this repository. Do not treat it as the full rulebook. The detailed project rules live under `.project-rules/`.

## How To Use This File

- Start here first.
- Do not read every rule file by default.
- Read only the relevant files in `.project-rules/` for the task at hand.
- If code and docs disagree, trust the actual codebase first, then update the rules if needed.

## Always Check Before Editing

- `package.json`
- `next.config.ts`
- `git status --short`
- `.project-rules/README.md`
- `EDITING.md` if the task is about content, links, or project entries
- The specific files you are about to change

## Rule Map

- Project overview: `.project-rules/project-overview.md`
- Common commands: `.project-rules/commands.md`
- Code style: `.project-rules/code-style.md`
- Frontend standards: `.project-rules/frontend-standards.md`
- API rules: `.project-rules/api-rules.md`
- GitHub data rules: `.project-rules/github-data.md`
- Directory structure: `.project-rules/structure.md`
- Development rules: `.project-rules/development-rules.md`
- Content rules: `.project-rules/content.md`
- Human editing guide: `EDITING.md`
- Visual rules: `.project-rules/visual.md`
- SEO and deployment: `.project-rules/seo-deployment.md`
- Quality gates: `.project-rules/quality-gates.md`
- Git workflow: `.project-rules/git-workflow.md`

## Which Rules To Read

- UI, layout, interaction, visual polish:
  - `.project-rules/visual.md`
  - `.project-rules/code-style.md`
  - `.project-rules/frontend-standards.md`
  - `.project-rules/structure.md`
- Data content, profile, projects:
  - `EDITING.md`
  - `.project-rules/content.md`
  - `.project-rules/github-data.md`
  - `.project-rules/structure.md`
- API or server boundary work:
  - `.project-rules/api-rules.md`
  - `.project-rules/github-data.md`
  - `.project-rules/development-rules.md`
  - `.project-rules/quality-gates.md`
- Build, export, routing, config:
  - `.project-rules/project-overview.md`
  - `.project-rules/development-rules.md`
  - `.project-rules/seo-deployment.md`
  - `.project-rules/quality-gates.md`
- General implementation work:
  - `.project-rules/code-style.md`
  - `.project-rules/frontend-standards.md`
  - `.project-rules/development-rules.md`
  - `.project-rules/git-workflow.md`

## Non-Negotiables

- Do not delete business code or change unrelated files.
- Keep the frontend compatible with static export.
- Do not introduce backend, database, or login flows unless the user explicitly changes the project scope.
- After edits, run the relevant checks described in `.project-rules/quality-gates.md` when applicable.

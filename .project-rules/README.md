# Project Rules

This directory stores the project-specific rules that Codex should use when working in this repository.

Read this file as the index, then open only the rule files that match the current task. Do not load the whole directory by default.

## Reading Order

- Start with `../AGENTS.md`
- If the task is content editing or project-list editing, also check `../EDITING.md`
- Then read this file
- Then read only the relevant rule files below

## Rule Files

- `project-overview.md`
  - Current project scope, stack, implemented pages, and important constraints
- `commands.md`
  - Canonical local commands and notes about scripts that do not exist yet
- `code-style.md`
  - TypeScript, React, Tailwind, naming, and editing conventions
- `frontend-standards.md`
  - Component naming, hooks, Tailwind usage, GSAP, Lenis, and motion accessibility rules
- `api-rules.md`
  - API route naming, response typing, and error handling conventions
- `github-data.md`
  - Build-time GitHub fetching rules, project config shape, and README handling
- `structure.md`
  - Actual repository structure and ownership of important directories and files
- `development-rules.md`
  - Implementation constraints, static export rules, and scope boundaries
- `content.md`
  - Source-of-truth rules for profile and project content
- `visual.md`
  - Visual system and UI direction
- `seo-deployment.md`
  - Metadata, semantic HTML, GitHub Pages, and GitHub Actions deployment rules
- `quality-gates.md`
  - Checks to run before and after changes
- `git-workflow.md`
  - How to work safely in a potentially dirty worktree
- `implementation-notes.md`
  - Practical lessons from previous implementation passes to avoid repeating mistakes

## Task Routing

- UI or interaction changes:
  - `visual.md`
  - `code-style.md`
  - `frontend-standards.md`
  - `structure.md`
- Content or project data changes:
  - `../EDITING.md`
  - `content.md`
  - `github-data.md`
  - `structure.md`
- API or route handler changes:
  - `api-rules.md`
  - `github-data.md`
  - `development-rules.md`
  - `quality-gates.md`
- Build or config changes:
  - `project-overview.md`
  - `development-rules.md`
  - `seo-deployment.md`
  - `quality-gates.md`
- General code edits:
  - `code-style.md`
  - `frontend-standards.md`
  - `development-rules.md`
  - `git-workflow.md`
- Refactors or larger implementation passes:
  - `implementation-notes.md`
  - `quality-gates.md`

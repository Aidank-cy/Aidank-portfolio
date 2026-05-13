# GitHub Portfolio Data

Use this for project list edits, profile copy, social links, project metadata mapping, or README rendering behavior.

## Read First

- `AGENTS.md`
- `EDITING.md`
- `.project-rules/content.md`
- `.project-rules/github-data.md`
- `.project-rules/structure.md`

## Source Of Truth

- `config/site.ts` owns profile copy, avatar path, and social links.
- `config/projects.ts` owns which repositories appear and in what order.
- `lib/github.ts` owns GitHub REST fetching and normalization.
- GitHub repositories themselves own README content, repo description, homepage, and stats.

## Guardrails

- Do not add browser-side GitHub API calls.
- Do not move project metadata into page files.
- When README rendering changes, verify small-screen readability and build behavior.

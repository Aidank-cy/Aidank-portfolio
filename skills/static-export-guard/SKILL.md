# Static Export Guard

Use this for any task that touches routes, metadata, `next.config.ts`, GitHub build-time fetching, or deployment workflows.

## Read First

- `AGENTS.md`
- `.project-rules/project-overview.md`
- `.project-rules/development-rules.md`
- `.project-rules/seo-deployment.md`
- `.project-rules/quality-gates.md`

## Enforce

- Keep `output: "export"` working.
- Keep dynamic project routes statically generatable.
- Keep GitHub API access in `lib/github.ts` or nearby build-time helpers.
- Avoid request-time server state, browser token usage, or runtime-only assumptions.

## Verify

- `npm run lint`
- `npm run typecheck`
- `npm run build`

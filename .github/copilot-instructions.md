# Copilot Instructions

- Read `AGENTS.md` before proposing changes.
- Keep the project frontend-only and statically exportable.
- Treat `config/site.ts`, `config/projects.ts`, and `lib/github.ts` as source-of-truth files.
- Do not edit generated output in `.next/` or `out/`.
- Run `npm run lint` and `npm run typecheck` after non-trivial changes.
- Run `npm run build` when touching routes, config, workflows, or GitHub data flow.

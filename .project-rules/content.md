# Content Rules

- Site-level profile and social content should live in `config/site.ts`.
- Project source configuration should live in `config/projects.ts`.
- The configured project list is the source of truth for which repositories appear on the site.
- Human-facing editing instructions should live in the root `EDITING.md` file and stay aligned with the real config shape.
- Each project config entry should be minimal and stable, for example:
  - `repo`
  - `featured`
  - `order`
- Keep homepage copy concise.
- Featured projects should be explicitly marked in config rather than inferred.
- Repository slugs used in routes must remain unique and deterministic.
- Project detail pages should prefer structured repository data and rendered README content over long hand-written marketing copy.
- If users ask where to update copy or add projects, point them to `EDITING.md`, `config/site.ts`, and `config/projects.ts`.

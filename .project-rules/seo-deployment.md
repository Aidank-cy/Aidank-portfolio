# SEO And Deployment

## SEO

- Every page must define appropriate `metadata`.
- Set meaningful `title` and `description` values for:
  - homepage
  - project list page
  - each project detail page
- Include Open Graph metadata when the relevant assets or URLs exist.
- Use semantic HTML elements wherever appropriate.

## Static Generation

- All pages must be statically generatable.
- Dynamic project routes must provide deterministic static params.
- Build-time GitHub fetching must not depend on request-time server context.
- `next/font/google` is acceptable, but remember it requires network access during build verification.

## Deployment

- Deployment target is GitHub Pages.
- The expected deployment path is GitHub Actions on push to `main`.
- Keep output compatible with the static `out/` directory flow.

## Environment Variables

- `GITHUB_TOKEN` is optional and should only be used during build or generation.
- Do not rely on browser-visible environment variables for GitHub authentication.
- Prefer keeping deployment-sensitive behavior in `next.config.ts` and workflow configuration rather than scattering repository-path assumptions through page code.

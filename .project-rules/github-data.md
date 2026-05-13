# GitHub Data Rules

## Source Of Truth

- The list of displayed repositories should be defined in `config/projects.ts`.
- Each entry should be minimal and declarative, for example:
  - `repo`
  - `featured`
  - `order`

## Fetching Model

- Fetch GitHub data at build time or during static generation only.
- Do not fetch repository data from the client.
- Centralize GitHub fetch helpers in `lib/github.ts`.
- Wrap reusable GitHub fetchers in shared helpers and cache them when appropriate to avoid duplicate build-time requests.

## Required Repository Data

- For list views, support at least:
  - repository name
  - description
  - primary language
  - star count
  - last updated time
- For detail views, support at least:
  - README content
  - stars
  - forks
  - open issues
  - language breakdown
  - canonical GitHub link

## Authentication And Rate Limits

- Support optional `GITHUB_TOKEN` through environment variables.
- The build should still work without a token, subject to GitHub's lower unauthenticated rate limits.
- Never expose the token to the client.
- If local verification fails because the build cannot reach GitHub, request network-enabled build verification rather than rewriting the architecture around client-side fetching.

## README Rendering

- README content should be fetched through the GitHub API and rendered with a Markdown renderer.
- Rendered README output should remain readable within the site's typography system.
- Sanitize or constrain rendering choices appropriately when needed.
- Treat missing README content as a valid case and render a graceful fallback.

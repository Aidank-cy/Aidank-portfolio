# API Rules

## Default Position

- This project does not need product backend APIs for its intended architecture.
- Prefer build-time external data fetching from library code over creating `app/api/*` routes.

## If Route Handlers Are Explicitly Added

- Follow Next.js App Router route handler conventions under `app/api/`.
- Keep route segment names `kebab-case`.
- Keep one route responsibility per endpoint. Do not overload a single endpoint with unrelated actions.
- Use route handlers only for truly necessary non-page concerns, not as a default data layer for this portfolio.

## Response Types

- Define explicit response types for successful payloads and error payloads.
- Avoid returning untyped `any`-shaped JSON.
- Keep response envelopes predictable across endpoints.

## Error Handling

- Handle expected failures explicitly and return structured JSON responses.
- Do not leak raw internal errors, stack traces, tokens, or implementation details to clients.
- Use a consistent error shape with at least:
  - a stable machine-readable code
  - a user-facing message
- Use appropriate HTTP status codes instead of always returning `200`.

## Validation

- Validate input at the route boundary.
- Narrow unknown input before using it.
- Fail early on invalid payloads.

## Static Export Awareness

- Do not introduce frontend dependencies on runtime API routes for core portfolio rendering.
- If API routes are added in the future, document whether they are optional, deployment-specific, or required for core functionality.

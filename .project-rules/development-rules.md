# Development Rules

## Scope Discipline

- Work from the real repository state, not from plans or placeholder docs.
- Do not change unrelated files.
- Do not delete business code unless the user explicitly asks.
- When implementing against the new project prompt, prefer migrating the codebase toward the target static GitHub-driven architecture.

## Static Export Rules

- Keep frontend changes compatible with `output: "export"`.
- Avoid frontend behavior that requires a server runtime unless the user is explicitly changing deployment architecture.
- Dynamic routes must remain statically generatable.
- Be careful with APIs, runtime-only features, and anything that depends on server request context.
- GitHub data fetching must happen during build and static generation, not in the browser.

## Implementation Strategy

- Reuse existing data structures and components where possible.
- Keep changes small, local, and easy to review.
- When the target architecture intentionally changes, update project rules to reflect the new intended implementation direction.
- When introducing a new reusable rule set, place it in `.project-rules/` instead of overloading `AGENTS.md`.
- When an older prototype structure conflicts with the target architecture, prefer migrating toward the target config-driven structure rather than extending the prototype indefinitely.
- If obsolete prototype files remain temporarily in the repo, do not reintroduce them into new page code as dependencies.

## Product Boundaries

- Do not add a backend API, database, or authentication system for the portfolio experience.
- Do not make the client call the GitHub API directly.
- Do not add CMS-style editing workflows unless the user explicitly changes the product scope.
- Do not rebuild local editable-avatar or dashboard-prototype behaviors into the production portfolio unless the user explicitly asks for them.

# Code Style

## General

- Use TypeScript and keep types explicit where they improve clarity.
- Follow the project rules and nearby code style before introducing new patterns.
- Prefer small, direct components over unnecessary abstraction.
- Prefer predictable naming over clever naming.

## Current Conventions

- Use double quotes.
- Use the `@/` import alias when appropriate.
- Prefer named exports for components and helpers.
- Keep React components functional.
- Match the established JSX formatting and spacing style in nearby files.
- Use `PascalCase` for component filenames and component names when creating new reusable components.
- Use `camelCase` for hooks, helpers, and non-component modules.
- Use `kebab-case` only for route segments and non-code content slugs.
- Keep config object names explicit and stable:
  - `siteConfig`
  - `projects`
  - `ProjectSummary`
  - `ProjectDetail`

## React And Next.js

- Preserve the current App Router patterns.
- Do not introduce server-only assumptions into frontend code that must be statically exported.
- For dynamic project routes, maintain static generation compatibility.
- In async App Router helpers such as `generateMetadata` and `generateStaticParams`, await async data access explicitly rather than passing unresolved promises through page logic.
- Keep route-page logic thin when possible; move reusable fetching and mapping into `lib/`.

## Tailwind

- Tailwind class lists may be long, but should stay readable.
- Reuse the design tokens and spacing rhythm defined by the project.
- Avoid adding one-off utility noise when an existing pattern already works nearby.
- Prefer composing Tailwind utilities directly in the component instead of introducing component CSS files.
- Group utility classes in a stable order: layout, spacing, sizing, typography, color, effects, state.
- Do not introduce a UI component library.
- When using Tailwind v4 theme tokens, prefer semantic tokens such as `bg-background`, `text-foreground`, `border-border`, and `bg-panel` instead of scattering raw color values through components.

## Editing Behavior

- Prefer focused edits over broad refactors.
- Do not rename files, move directories, or rewrite components without a clear need.
- Keep comments minimal and only where they add real value.

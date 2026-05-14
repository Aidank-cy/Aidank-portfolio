# Code Style

Project-level implementation rules for this portfolio. These are the default standards to follow when adding or modifying code.

## Future Code Standards

### Motion Pattern

- All new animation components must use `components/ui/Motion.tsx` wrapper instead of directly calling `useFramerMotion()` + `usePrefersReducedMotion()`.
- Only complex components with multi-element orchestrated animations, such as `HeroSection` and `FloatingPanel`, may use the hooks directly.

### Config References

- Never use array index to access `siteConfig.socials`. Use `Array.find()` by label or add a dedicated field to `siteConfig`.
- All external URLs referenced in components should come from `config/site.ts`, not be hardcoded in component files.

### Error Handling

- All GitHub API calls in `lib/github.ts` must have `try-catch` with graceful fallback.
- Build failures due to a single repo's API error are not acceptable.

### CSS Variables

- Theme color values must only be defined once per theme. Use selector grouping such as `:root, html.light` to avoid duplication.

### Component Size

- Components exceeding 250 lines should be refactored by extracting hooks, sub-components, or utility functions.
- `FloatingPanel.tsx` is a known debt item and should be broken down when it is next modified.

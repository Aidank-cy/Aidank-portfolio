# UI Polish

Use this for layout, motion, component, or visual refinements.

## Read First

- `AGENTS.md`
- `.project-rules/code-style.md`
- `.project-rules/frontend-standards.md`
- `.project-rules/visual.md`
- `.project-rules/structure.md`

## Guardrails

- Keep `app/` pages thin and move reusable UI into `components/`.
- Use Framer Motion for UI animation and respect reduced-motion behavior.
- Preserve the established visual system instead of introducing a new design language mid-stream.
- Keep client boundaries small and intentional.

## Verify

- `npm run lint`
- `npm run typecheck`
- `npm run build` when route structure or page composition changes.

# Common Commands

## Available Commands

- Install dependencies: `npm install`
- Development server: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`
- TypeScript check: `npm run typecheck`

## Notes

- The repository currently does not define `npm test`.
- Do not document or rely on commands that are not present in `package.json`.
- If scripts change, update this file together with `package.json`.
- For route, export, workflow, or GitHub data changes, run `npm run build` in addition to lint and typecheck.
- Production deployment target is GitHub Pages via GitHub Actions on push to `main`.
- `npm run lint` should stay non-interactive. Do not switch back to `next lint` prompt-driven setup; keep lint wired through the checked-in ESLint config.
- `npm run build` may require network access during local verification because:
  - `next/font/google` fetches font assets at build time
  - GitHub repository data is fetched at build time

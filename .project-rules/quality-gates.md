# Quality Gates

## Before Editing

- Check `git status --short`.
- Check `package.json` for available scripts.
- Check `next.config.ts` if the task touches routing, images, or export behavior.
- Check the rule files relevant to the task.
- Read the exact files you plan to modify.

## After Editing

- Re-read the changed code for import, type, and path correctness.
- Confirm the change still respects static export constraints.
- Confirm the change matches the existing visual and structural system.
- Confirm new motion code respects reduced-motion behavior when animation is involved.
- Confirm GitHub data fetching is not happening from the client.
- Confirm no backend, auth, or database assumptions were introduced by mistake.
- Confirm required pages expose appropriate metadata when page-level content changed.
- Confirm dark mode and responsive behavior were considered for visual changes.
- Confirm new code reads from the current source-of-truth files:
  - `config/projects.ts`
  - `config/site.ts`
  - `lib/github.ts`
- Review the diff to ensure no unrelated files were changed.

## Validation

- For non-trivial code changes, run `npm run lint` and `npm run typecheck`.
- For changes affecting routes, config, export behavior, or page structure, prefer running `npm run build` as well.
- For documentation-only changes, command execution is optional.
- For GitHub data features, verify the build path can work with and without `GITHUB_TOKEN`.
- For README rendering changes, verify long Markdown content remains readable in the page layout.
- If local build requires network for fonts or GitHub requests, use a network-enabled build verification instead of treating that failure as an application bug.
- If lint becomes interactive, restore a checked-in ESLint configuration so validation remains scriptable.

## Reporting

- Tell the user which files were changed.
- Tell the user which checks were run.
- If checks were not run, state that clearly and explain why.
- If the repository lacks a needed script, say so explicitly instead of implying it exists.

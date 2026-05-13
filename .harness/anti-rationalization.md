# Anti-Rationalization

| Excuse | Rebuttal |
| --- | --- |
| "Editing `out/` is faster than fixing the source file." | `out/` is generated. Change `app/`, `components/`, `config/`, or `lib/`, then rebuild. |
| "I can fetch GitHub data from a client component for convenience." | This project is build-time GitHub-driven. Client fetching breaks the architecture and may leak tokens. |
| "I'll skip typecheck because lint passed." | The repo uses strict TypeScript. `npm run typecheck` catches a different failure class. |
| "I only changed docs, so the commands file can drift." | If scripts or workflow expectations changed, docs must be updated in the same pass. |
| "I can add a small dependency for one UI tweak." | Ask first. Existing Tailwind and Framer Motion patterns already cover most needs. |

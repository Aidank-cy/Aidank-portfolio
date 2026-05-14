# Frontend Standards

## Component Naming

- Use `PascalCase` for reusable component filenames and exported component names.
- One primary component per file when the file exists to expose that component.
- Keep small private subcomponents in the same file only when they are tightly coupled and not reused elsewhere.
- Page files under `app/` follow Next.js routing conventions, not component naming conventions.
- Put primitives in `components/ui/`, shell pieces in `components/layout/`, and page-specific composition blocks in `components/sections/`.

## Hooks

- Custom hooks must use the `useXxx` naming pattern.
- Keep hooks focused on a single concern.
- Do not call hooks conditionally.
- Shared browser-state logic should move into hooks before it is duplicated across components.
- Prefer colocating a hook with the feature it serves unless it is broadly reusable.

## Tailwind Usage

- Prefer Tailwind utilities over ad hoc CSS for component-level styling.
- Use Tailwind CSS v4 conventions for theme and utility authoring as the codebase is updated.
- Reuse the neutral palette, spacing rhythm, rounded corners, borders, and blur language defined by the design system.
- Avoid deeply concatenated conditional class strings when a small helper or variable makes intent clearer.
- Do not introduce inconsistent spacing scales or arbitrary values without a clear visual reason.
- Do not introduce component CSS modules or extra stylesheet files for normal component styling.
- If global theme tokens are needed, define them once in the shared global theme entry rather than scattering custom CSS.
- Prefer semantic Tailwind tokens over slash-opacity variants on custom tokens when a stable design token already exists.

## Motion

- Framer Motion is the required default animation system for page load, scroll reveal, hover, and page transitions.
- Do not introduce another animation library for standard UI motion work.
- In this App Router codebase, keep Framer Motion behind small client boundaries and prefer client-side loading helpers when direct top-level imports cause Next development chunk instability.
- For simple single-element wrappers that only switch between static HTML and one motion element, prefer reusing `components/ui/Motion.tsx` instead of duplicating the `useFramerMotion` and reduced-motion branch in each component.
- Keep explicit local motion logic when a component coordinates `AnimatePresence`, multiple motion elements, or modal-style interaction behavior.
- Any motion-heavy interaction must check `prefers-reduced-motion` and provide a reduced or disabled path.
- Modal and lightbox-style interactions must support keyboard dismissal and should allow overlay click to close.
- Motion should remain restrained and should not override usability or readability.
- Use `whileInView` for scroll-triggered reveal patterns when appropriate.
- Use staggered entrance animation for hero and section content when it improves hierarchy.
- Keep hover motion subtle.

## GSAP

- Do not introduce GSAP unless the user explicitly asks for it or a specific animation cannot be achieved cleanly with Framer Motion.
- If GSAP is introduced or used, it must use the `useGSAP` hook rather than wiring lifecycle logic manually in `useEffect`.

## Lenis

- Do not introduce Lenis unless the user explicitly wants smooth scrolling beyond native behavior.
- If Lenis is introduced, initialize it only once at the root layout or a single top-level client boundary.
- Do not create multiple Lenis instances across pages or leaf components.
- Feature code may consume the scrolling behavior, but must not reinitialize the engine.

## Client Boundaries

- Add `"use client"` only where it is genuinely required.
- Keep server components as server components by default when interactivity is not needed.
- Do not move large page trees to the client without a concrete reason.
- Keep interactivity isolated:
  - filters and local UI state belong in small client components
  - page data fetching stays in server components
- Page transition wrappers and other global client-only motion boundaries should be initialized once at the layout level, not duplicated across pages.

## Responsive Rules

- Design mobile first.
- Verify layouts across at least:
  - mobile under `768px`
  - tablet from `768px` to `1024px`
  - desktop above `1024px`
- Filtering, cards, typography, and README content must remain readable on small screens.

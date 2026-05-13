# Project Overview

## Project Goal

- Build a pure static personal project showcase site.
- Pull repository data from the GitHub REST API at build time.
- Use an Apple / Linear / Vercel inspired visual direction.
- Deploy the generated static output to GitHub Pages.

## Scope

- No backend API for product features
- No database
- No login or auth system
- No admin dashboard

## Target Stack

- Next.js 15 with App Router
- TypeScript
- Static export via `output: "export"`
- Tailwind CSS v4
- Framer Motion for animation
- GitHub REST API as the external data source
- GitHub Actions for build and deployment

## Target Pages

- `/`
  - Hero
  - Featured projects
  - About
  - Footer with social links
- `/projects`
  - All configured repositories
  - Language filtering
- `/projects/[slug]`
  - Repository details
  - README rendering
  - Stats and language breakdown

## Architecture Direction

- Project data should be configured locally, then enriched from GitHub during static generation.
- Frontend pages must be statically generatable without runtime server dependencies.
- GitHub API calls belong in shared library code used during build and generation, not in browser-side fetching.

## Priority Constraints

- Static export compatibility is non-negotiable.
- The site should remain frontend-only from a product architecture perspective.
- If current prototype code conflicts with this target architecture, implementation work may migrate the prototype toward these rules.

# Aidank Portfolio

Static GitHub-driven portfolio site for Aidank.

## Overview

This project is a pure static personal project showcase built with Next.js App Router. Repository data is configured locally and fetched from the GitHub REST API during build and static generation. The visual direction follows a restrained Apple / Linear / Vercel inspired style.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Markdown
- Static export for GitHub Pages

## Pages

- `/`
  - hero
  - featured projects
  - about
  - footer links
- `/projects`
  - full repository list
  - language filter
- `/projects/[slug]`
  - repository detail
  - README rendering
  - stats and language breakdown

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

Static export output is generated in `out/`.

## Editing Content

Use [EDITING.md](/Users/ninnnnk/Aidank-portfolio/EDITING.md).

The short version:

- edit [config/site.ts](/Users/ninnnnk/Aidank-portfolio/config/site.ts) for site copy and social links
- edit [config/projects.ts](/Users/ninnnnk/Aidank-portfolio/config/projects.ts) to add, remove, feature, or reorder projects
- edit the GitHub repository itself to change repo description, README, homepage, and repository metadata shown on project pages

## Project Structure

```text
app/
components/
  layout/
  sections/
  ui/
config/
lib/
.project-rules/
```

## Notes

- This repository is designed to stay compatible with static export.
- GitHub data is fetched at build time, not in the browser.
- GitHub Pages deployment runs through GitHub Actions.

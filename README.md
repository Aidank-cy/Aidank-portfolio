# Aidank Portfolio

Personal portfolio website for Aidank.

## Overview

This project is a personal website for profile, projects, and future writing content. The visual direction follows a restrained Apple / Linear / Vercel inspired style with strong typography, warm neutral backgrounds, and a clean black-and-white system.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Static export for GitHub Pages
- Planned Vercel APIs for admin and public endpoints

## Current Pages

- `/` Dashboard homepage
- `/projects` project list
- `/projects/[slug]` project detail pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static export output is generated in `out/`.

## Project Structure

```text
app/
  page.tsx
  projects/
components/
lib/
.project-rules/
```

## Content Source

Personal profile data and project content currently live in `lib/site-data.ts`.

## Notes

This repository is designed to stay compatible with static export. Frontend features should avoid unnecessary server-only runtime dependencies.

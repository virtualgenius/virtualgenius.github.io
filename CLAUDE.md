# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Virtual Genius company website - a static site for EventStorming & Domain-Driven Design consulting services. Built with Astro 5, TypeScript, and Tailwind CSS 4, deployed to GitHub Pages at virtualgenius.com.

## Development Commands

```bash
# Start development server at localhost:4321
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>
```

## Architecture

### Content Collections

Content is managed via Astro's type-safe content collections ([src/content.config.ts](src/content.config.ts)):

- **blog**: Markdown/MDX blog posts with frontmatter (title, description, pubDate, updatedDate, heroImage)
- **events**: Event listings with frontmatter (title, description, date, location, type, url)

Access collections using `getCollection('blog')` or `getCollection('events')` in `.astro` files.

### Styling System

Uses Tailwind CSS 4 via Vite plugin. Custom brand colors defined in [src/styles/global.css](src/styles/global.css):

- `vg-red` (#C8342C) - Primary brand red
- `vg-burgundy` (#5A1F1C) - Dark brand burgundy
- `vg-gray` / `vg-gray-light` / `vg-gray-dark` - Neutral grays
- `vg-amber` (#F59E0B) - Accent color

All brand colors available as Tailwind utilities (e.g., `text-vg-red`, `bg-vg-burgundy`).

### Page Structure

- **File-based routing**: `src/pages/` maps to URLs
  - `index.astro` → `/` (homepage)
  - `about.astro` → `/about`
  - `services/eventstorming.astro` → `/services/eventstorming`
  - `blog/[...slug].astro` → `/blog/{slug}` (dynamic routes for blog posts)

- **Reusable components**: `src/components/`
  - Layout components: `Header.astro`, `Footer.astro`, `Section.astro`, `Hero.astro`
  - Card components: `ServiceCard.astro`, `ProductCard.astro`, `TestimonialCard.astro`, `BlogPostCard.astro`
  - Utility components: `BaseHead.astro`, `Button.astro`, `Icon.astro`, `FormattedDate.astro`

- **Layout wrapper**: `src/layouts/BlogPost.astro` - Wraps blog post content with consistent formatting

### Key Configuration

- **Site URL**: `https://virtualgenius.com` (set in [astro.config.mjs](astro.config.mjs))
- **Integrations**: MDX, Sitemap
- **Site constants**: `SITE_TITLE` and `SITE_DESCRIPTION` in [src/consts.ts](src/consts.ts)

### Deployment

Automated via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):
- Triggers on push to `main` branch
- Builds with Node 20 (`npm ci && npm run build`)
- Deploys `./dist/` to GitHub Pages

## Content Guidelines

When creating blog posts or events, follow the schema defined in [src/content.config.ts](src/content.config.ts). Use existing content in `src/content/blog/` as templates.

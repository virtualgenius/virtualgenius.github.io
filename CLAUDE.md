# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Virtual Genius company website - a static site for EventStorming & Domain-Driven Design consulting services. Built with Astro 5, TypeScript, and Tailwind CSS 4, deployed to GitHub Pages at virtualgenius.com.

## Testimonials Policy

**CRITICAL - MUST NEVER VIOLATE:**
- All testimonials on the website MUST be exact, word-for-word quotes from actual clients
- Source file: `/Users/paul/Library/CloudStorage/Dropbox/Virtual Genius/Testimonials.md`
- NEVER fabricate, paraphrase, or modify testimonials in any way
- NEVER create testimonials based on assumptions or inference
- Fabricating testimonials violates ethical and legal standards and undermines company credibility

**ALLOWED - Standard Journalistic Practices:**
- Using ellipses (...) to shorten quotes by omitting less relevant sentences
- Ellipses must mark all omissions clearly
- Omissions must NOT change the speaker's meaning or intent
- The remaining quote must still make sense and represent the speaker's point accurately
- This follows standard AP Style and Chicago Manual of Style guidelines for quotations

## Visual Design Guidelines

**CRITICAL - PROFESSIONAL APPEARANCE:**

1. **NO EMOJIS ALLOWED** - Emojis are not professional and must NEVER be used anywhere on the site
   - Use custom SVG icons from [src/components/Icon.astro](src/components/Icon.astro) instead
   - All icons must be consistent with brand styling
   - Available icons: check, arrow-right, external-link, chevron-right, github, office, laptop, refresh
   - To add new icons: extend the Icon.astro component with properly styled SVGs

2. **Image Optimization Requirements**:
   - All images must be web-optimized before use
   - Hero images: Maximum 300KB, preferably WebP format
   - Card images: Maximum 150KB
   - Use Astro's `<Image>` component for automatic optimization when possible
   - Implement lazy loading for images below the fold
   - Provide responsive srcsets for different screen sizes

3. **Icon Consistency**:
   - Always use the Icon component for UI icons
   - Maintain consistent sizing: `sm` (w-4 h-4), `md` (w-5 h-5), `lg` (w-6 h-6)
   - Use brand colors for icon fills: `text-vg-red`, `text-vg-burgundy`, etc.
   - Ensure all decorative SVGs have `aria-hidden="true"`
   - Ensure all functional icons have proper ARIA labels

4. **Accessibility Standards**:
   - All interactive elements must be keyboard accessible
   - All images must have descriptive alt text
   - All icon-only buttons must have `aria-label` attributes
   - Color contrast must meet WCAG AA standards (4.5:1 for text)
   - Focus states must be clearly visible

5. **Clickable Card Pattern** (WCAG AAA 44×44px touch targets):
   - Single-action cards: Use stretched link pattern - `<h3><a href="..." class="after:absolute after:inset-0">Title</a></h3>` with `relative` on container
   - Keep "Learn More" text as visual indicator with `pointer-events-none aria-hidden="true"`
   - Multi-action cards: Separate links with `py-2` minimum padding
   - NEVER wrap entire card in `<a>` tag (screen reader accessibility issue)
   - See ServiceCard.astro, BlogPostCard.astro for reference implementation

## Debugging and Problem-Solving Protocol

**CRITICAL - GATHER DATA, DON'T GUESS:**

When encountering unexpected behavior (especially CSS/JavaScript issues):

1. **Add debug logging first** - Insert console.log statements to capture:
   - Computed styles (window.getComputedStyle())
   - Element properties and values
   - Execution timing and sequence
   - State changes

2. **Inspect actual browser behavior**:
   - Check browser console output using dev server
   - Ask user to share console logs/screenshots
   - Verify what CSS is actually being applied (not what you assume)

3. **Form hypothesis from data** - Only make changes after understanding root cause from actual data

4. **Never guess at solutions** - Making blind changes wastes time and frustrates users

**Example**: For CSS animation issues, log computed transition properties, timing, and execution order to understand what's actually happening before proposing fixes.

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

### Creating Blog Posts from Social Media

- Use exact text from original post (no rewriting)
- Match original post date in `pubDate` field
- Required frontmatter: `title`, `description`, `pubDate`, `heroImage` (optional)
- Location: `src/content/blog/{kebab-case-filename}.md`

### Video Blog Posts: Hero Images

- Videos: `/public/videos/`
- Hero images: `/src/assets/`
- Extract frame: `ffmpeg -ss {midpoint} -i {video} -vframes 1 -q:v 2 {output.jpg}`
- Get duration: `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 {video}`
- Hero image path: `'../../assets/{filename}.jpg'`
- Video embed:
  ```html
  <video controls width="100%" style="max-width: 800px; margin: 2rem auto; display: block;">
    <source src="/videos/{filename}.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  ```

# Virtual Genius Website Design Documentation

## Project Overview

Static company website for EventStorming & Domain-Driven Design consulting services.

**Tech Stack:**
- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** GitHub Pages at virtualgenius.com
- **Site URL:** https://virtualgenius.com

## Brand System

### Color Palette

All colors defined in [src/styles/global.css](src/styles/global.css) and available as Tailwind utilities:

**Primary Colors (from Möbius logo):**
- `vg-red` - #C8342C (bright brand red)
- `vg-burgundy` - #5A1F1C (deep burgundy)
- `vg-red-light` - #E04437 (lighter backgrounds)
- `vg-burgundy-dark` - #3D1512 (darkest text/contrast)

**Secondary Colors:**
- `vg-gray` - #9B9B9B (from "leading by design" tagline)
- `vg-gray-light` - #E5E5E5 (backgrounds)
- `vg-gray-dark` - #4A4A4A (body text)

**Accent:**
- `vg-amber` - #F59E0B (warm accent for EventStorming themes)

**Usage:** `text-vg-red`, `bg-vg-burgundy`, `border-vg-gray`, etc.

### Typography

**Fonts:**
- **Headings:** Inter (600-700 weight) - professional, highly readable
- **Body:** Inter (400 weight) with system font fallbacks
- Loaded via @fontsource in [src/styles/global.css](src/styles/global.css)

**Scale:**
- H1: 3rem (desktop) | 2.25rem (mobile)
- H2: 2.25rem (desktop) | 1.75rem (mobile)
- H3: 1.5rem (desktop) | 1.25rem (mobile)
- Body: 18px (desktop) | 16px (mobile)

### Layout

**Container:**
- Max width: 1200px
- Defined via `--container-max-width` in global.css
- Responsive padding managed by Tailwind

**Grid System:**
- 12-column grid via Tailwind
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Site Architecture

### File-Based Routing

All pages in `src/pages/` map directly to URLs:
- `index.astro` → `/` (homepage)
- `about.astro` → `/about`
- `services/eventstorming.astro` → `/services/eventstorming`
- `blog/[...slug].astro` → `/blog/{slug}` (dynamic routes)

### Core Pages

**Main Navigation:**
- [index.astro](src/pages/index.astro) - Homepage with service overview, testimonials
- [services/index.astro](src/pages/services/index.astro) - Services overview
  - [services/eventstorming.astro](src/pages/services/eventstorming.astro) - EventStorming workshops
  - [services/training.astro](src/pages/services/training.astro) - DDD training courses
  - [services/coaching.astro](src/pages/services/coaching.astro) - Coaching & consulting
- [products/index.astro](src/pages/products/index.astro) - Open source products
  - [products/contextflow.astro](src/pages/products/contextflow.astro) - Context mapping tool
  - [products/codecohesion.astro](src/pages/products/codecohesion.astro) - Code analysis tool
- [about.astro](src/pages/about.astro) - About Paul with Explore DDD photos
- [contact.astro](src/pages/contact.astro) - Contact information

**Resources Dropdown:**
- [workshops.astro](src/pages/workshops.astro) - Public workshop listings
- [speaking.astro](src/pages/speaking.astro) - Speaking engagements, videos
- [books.astro](src/pages/books.astro) - Published books
- [testimonials.astro](src/pages/testimonials.astro) - Client testimonials
- [blog/index.astro](src/pages/blog/index.astro) - Blog post listings

### Content Collections

Type-safe content managed via Astro collections in [src/content.config.ts](src/content.config.ts):

**blog/** - Markdown/MDX posts
- Frontmatter: `title`, `description`, `pubDate`, `updatedDate`, `heroImage`
- Access: `getCollection('blog')`

**events/** - Event listings
- Frontmatter: `title`, `description`, `date`, `location`, `type`, `url`
- Access: `getCollection('events')`

### Component Library

**Layout Components** (`src/components/`):
- `Header.astro` - Main navigation with logo
- `Footer.astro` - Site footer with links, social
- `Section.astro` - Reusable page section wrapper
- `Hero.astro` - Hero section with optional carousel
- `BaseHead.astro` - HTML head with SEO metadata

**Card Components:**
- `ServiceCard.astro` - Service preview cards
- `ProductCard.astro` - Product preview cards
- `TestimonialCard.astro` - Client testimonial cards
- `BlogPostCard.astro` - Blog post preview cards

**UI Components:**
- `Button.astro` - Primary, secondary, outline variants
- `Icon.astro` - Icon wrapper
- `FormattedDate.astro` - Date formatting utility

## Design Features

### Hero Sections

Multiple pages feature hero sections with:
- Rotating image carousels (3-5 second intervals)
- Contextual images per page (Explore DDD, workshops, training)
- Fade transitions between images
- Responsive image sizing

**Implementation:** JavaScript in page frontmatter handles rotation and fade effects.

### Video Integration

EventStorming page includes auto-playing timelapse video:
- Location: `/public/videos/eventstorming-timelapse.mp4`
- Cropped aspect ratio handling (90% width display)
- Muted, autoplay, loop, playsinline attributes

**Hero Image Extraction:**
```bash
# Get video duration
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.mp4

# Extract frame at midpoint
ffmpeg -ss {midpoint} -i video.mp4 -vframes 1 -q:v 2 output.jpg
```

### Image Assets

**Location:** `/public/images/`

**Categories:**
- Logo: `vg-logo-horizontal.png`, `vg-logo-square.png`
- Workshops: `eddd-20XX-workshop-X.jpg`, `training-workshop-X.jpg`
- Speaking: `paul-speaking-*.jpg`, `eddd-20XX-crowd.png`
- Conference: `dddeu2023-talk.png`, `eddd-early-bird.jpg`
- Books: `eventstorming-handbook-cover.png`, `bdd-cucumber-cover.jpg`
- Case studies: `nussbaum-eventstorming.png`

## Content Strategy

### Testimonials Policy

**CRITICAL - Authentication Requirements:**
- ALL testimonials MUST be exact, word-for-word quotes from actual clients
- Source file: `/Users/paul/Library/CloudStorage/Dropbox/Virtual Genius/Testimonials.md`
- NEVER fabricate, paraphrase, or modify testimonials
- NEVER create testimonials based on assumptions

**Allowed Editing:**
- Using ellipses (...) to shorten quotes (must mark all omissions clearly)
- Omissions must NOT change meaning or intent
- Remaining quote must still make sense

### Blog Publishing

**Creating Posts from Social Media:**
- Use exact text from original post (no rewriting)
- Match original post date in `pubDate` field
- Location: `src/content/blog/{kebab-case-filename}.md`
- Required frontmatter: `title`, `description`, `pubDate`, `heroImage` (optional)

**Video Blog Posts:**
- Videos: `/public/videos/`
- Hero images: `/src/assets/` (extracted frames)
- Embed format:
  ```html
  <video controls width="100%" style="max-width: 800px; margin: 2rem auto; display: block;">
    <source src="/videos/{filename}.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  ```

### Content Ownership

**Publishing Flow:**
1. Write on virtualgenius.com/blog first
2. Syndicate to LinkedIn with "Originally published at..." link
3. Build email newsletter linking to VG blog
4. Repurpose: talks → blog posts → newsletter → LinkedIn snippets

## Configuration

### Site Constants

Defined in [src/consts.ts](src/consts.ts):
- `SITE_TITLE` - "Virtual Genius"
- `SITE_DESCRIPTION` - Company description for SEO

### Astro Config

[astro.config.mjs](astro.config.mjs):
- Site URL: `https://virtualgenius.com`
- Integrations: MDX, Sitemap
- Build output: `./dist/`

### Analytics

Google Analytics configured via environment variable:
- Variable: `PUBLIC_GA_MEASUREMENT_ID`
- Implementation: In base layout with gtag script

## Deployment

### GitHub Actions

Automated deployment via [.github/workflows/deploy.yml](.github/workflows/deploy.yml):
- Trigger: Push to `main` branch
- Build: Node 20, `npm ci && npm run build`
- Deploy: `./dist/` to GitHub Pages

### DNS Configuration (Pending)

**Current State:**
- Site built and deployed to GitHub Pages
- Domain still pointing to Wix

**Required for DNS Migration:**
1. Add CNAME file to repo: `echo "virtualgenius.com" > public/CNAME`
2. Update DNS A records at registrar:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Update CNAME record: `www` → `virtualgenius.github.io`
4. Enable HTTPS in GitHub repo settings
5. Wait for DNS propagation (up to 48 hours)

### Development Commands

```bash
# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI
npm run astro -- <command>
```

## Design Principles

1. **Brand-First** - Red is primary brand color, not accent
2. **Professional** - Clean, sophisticated aesthetic for consulting
3. **Fast** - Minimal JavaScript, optimized images
4. **Accessible** - WCAG AA compliance, semantic HTML
5. **Responsive** - Mobile-first approach
6. **SEO-Optimized** - Meta tags, sitemap, structured data

## Platform Consolidation

**Goal:** Make virtualgenius.com the authoritative professional home

**Architecture:**
- **virtualgenius.com** - Company site (services, products, blog, about)
- **thepaulrayner.com** - Personal blog (decision pending: redirect or archive)
- **exploreddd.com** - Separate conference site (linked prominently)
- **OSS Projects** - Remain at github.com/paulrayner/* (personal credit preserved)

**Product Integration:**
- VG product pages act as landing/marketing pages
- Link to GitHub repos on personal account
- Future: Open core monetization with Pro tiers

## Asset Sources

**Branding:**
- Logo files from Virtual Genius branding folder
- Möbius ribbon design (red gradient: bright to burgundy)
- "leading by design" tagline

**Photography:**
- Workshop photos: BTI360 training, Explore DDD workshops
- Conference photos: DDD Europe, Explore DDD
- Speaking: Various conference presentations
- Facilitation: EventStorming sessions (Nussbaum, etc.)

## Future Enhancements

**Post-MVP:**
- Additional blog content migration
- Case studies expansion
- Newsletter integration (ConvertKit/Beehiiv)
- Product Pro tier implementation
- Contact form functionality
- Booking calendar integration

---

*Last Updated: 2025-01-12*
*Platform: Astro 5 + TypeScript + Tailwind CSS 4*
*Deployment: GitHub Pages → virtualgenius.com (DNS pending)*

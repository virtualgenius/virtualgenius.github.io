# Virtual Genius Website Design Plan - FINAL

**Status:** Ready for Implementation
**Date:** 2025-11-08
**Platform:** Astro + TypeScript + Tailwind CSS
**Deployment:** GitHub Pages → virtualgenius.com

---

## Executive Summary

Build a complete, production-ready website with **Steamhaus-inspired design** (bold red, modern, technical), featuring full product landing pages for ContextFlow and CodeCohesion, comprehensive service information, and the Virtual Genius red brand identity throughout.

**Target Audience (Priority Order):**
1. **Architects/Technical Leads** (primary decision makers)
2. **Developers** (exploring tools, researching approaches)
3. **CTOs/VPs** (approving training/workshop requests)

---

## Design Decisions - CONFIRMED (Updated 2025-11-09)

### Aesthetic Direction - REFINED
✅ **Steamhaus-inspired sophisticated design:**
- **Dark, dramatic hero sections** - Deep burgundy backgrounds with white text
- **Bold, impactful typography** - Large headlines (5xl/7xl), heavy weights (700)
- **Generous whitespace** - Premium feel with lots of breathing room
- **Minimal, refined UI** - Outlined buttons, clean navigation, subtle effects
- **High contrast** - Pure white text on dark backgrounds
- Reference: steamhaus.co.uk
- Professional, technical credibility, premium consulting aesthetic
- NOT playful/startup-y, NOT traditional/warm

### Brand Identity
✅ **VG Red as Primary Color** (not accent)
- Möbius ribbon logo prominently featured
- Red gradient: bright (`#C8342C`) to burgundy (`#5A1F1C`)
- "leading by design" tagline integrated

### Content Strategy
✅ **Photos Available:**
- Workshop facilitation (EventStorming sessions)
- Conference photos (Explore DDD)
- Paul headshot/presenting
- EventStorming walls/sticky notes

✅ **Pricing:**
- "Contact for pricing" on all services
- CTA: `info@virtualgenius.com`

✅ **Blog:**
- Keep personal blog separate at thepaulrayner.com
- NO migration to VG site
- VG blog for company/product updates only

✅ **Products:**
- **ContextFlow** - Full landing page, content from GitHub
- **CodeCohesion** - Full landing page, content from GitHub
- No pricing (open source)
- Links to live demos and GitHub repos

✅ **Timeline:**
- Build complete site (~14-15 hours)
- Switch from Wix when ready
- No incremental launch

---

## Brand System

### Color Palette - REFINED

**Primary (from logo):**
```
--vg-red:           #C8342C  (bright red - accents, highlights)
--vg-burgundy:      #5A1F1C  (deep burgundy - footer, accents)
--vg-red-light:     #E04437  (lighter red - hovers)
--vg-burgundy-dark: #3D1512  (darkest - HERO BACKGROUNDS, premium sections)
```

**Usage guidance (Steamhaus-inspired):**
- **Hero sections:** `bg-vg-burgundy-dark` with `text-white` for drama
- **Standard sections:** White or very light gray backgrounds
- **Footer:** `bg-vg-burgundy` with white text
- **Buttons:** Outlined style with borders, fills on hover
- **Text on dark:** Pure white (#FFFFFF), not gray
- **Accents:** Amber for subtle highlights on dark backgrounds

**Secondary:**
```
--vg-gray:       #9B9B9B  (subtle text on dark backgrounds)
--vg-gray-light: #E5E5E5  (section backgrounds - use sparingly)
--vg-gray-dark:  #4A4A4A  (body text on white)
```

**Accent:**
```
--vg-amber: #F59E0B  (EventStorming theme - CTAs, hovers on dark)
```

### Typography - REFINED

**Fonts:**
- **Headings:** Inter (700 weight - bold for impact) - Clean, modern, technical
- **Body:** Inter (400 weight) - Consistent, professional
- **Code:** JetBrains Mono (if needed)

**Scale (Updated for Steamhaus-style impact):**
- **Hero H1:** 60px desktop | 40px mobile (was 48px | 36px)
- **H1:** 48px desktop | 36px mobile
- **H2:** 36px desktop | 28px mobile
- **H3:** 24px desktop | 20px mobile
- **Body:** 18px desktop | 16px mobile

**Special treatments:**
- `tracking-tight` on large headlines for premium feel
- `font-bold` (700 weight) for all major headlines
- Larger line-height for hero text (1.1)
- More dramatic size contrast between headline and body

### Layout

**Container:** Max 1200px, centered
**Spacing:** 120px vertical gaps between sections
**Grid:** 12-column via Tailwind
**Breakpoints:** sm(640px), md(768px), lg(1024px), xl(1280px)

---

## Homepage Structure - REFINED (Steamhaus-inspired)

### 1. Header / Navigation
- **Logo:** Horizontal VG logo (left) - white version on dark hero
- **Links:** Services | Products | About | Blog | Contact
- **Sticky:** Yes, with backdrop blur on scroll
- **Mobile:** Hamburger menu
- **Styling:** Transparent on hero, white bg on scroll, minimal shadow

### 2. Hero Section - DRAMATIC REDESIGN
**Steamhaus-style impact:**
- **Background:** Deep burgundy dark (`bg-vg-burgundy-dark #3D1512`)
- **Text color:** Pure white for maximum contrast
- **Headline:** "EventStorming & Domain-Driven Design Consulting"
  - Size: `text-5xl md:text-7xl` (60px desktop, 40px mobile)
  - Weight: `font-bold` (700)
  - Spacing: `tracking-tight` for premium feel
  - Line height: `leading-tight` (1.1)
- **Subhead:** Larger, more impactful
  - Size: `text-2xl md:text-3xl`
  - Color: Light gray/white with slight opacity
- **CTAs:** Outlined button style (Steamhaus-inspired)
  - Primary: White outlined button, fills amber on hover
  - Secondary: Subtle outlined, lower contrast
- **Layout:** Generous padding (py-32 md:py-48)
- **Height:** Taller, more dramatic (min-h-screen or 800px desktop)
- **Visual:** Large workshop photo or subtle gradient overlay

### 3. Services Overview
**3-column grid (desktop) | stack (mobile)**

**EventStorming Workshops**
- 2-day facilitated sessions for exploring complex business domains
- Learn More → `/services/eventstorming`

**DDD Training**
- Essential and Strategic Domain-Driven Design courses
- View Courses → `/services/training`

**Coaching & Consulting**
- Ongoing support for pilot projects and implementation
- Get Started → `/services/coaching`

**Styling:**
- White cards, subtle shadow
- 3px red accent line on top
- Hover: lift + shadow

### 4. About Paul / Why VG
**2-column:** Photo | Text
- Short bio (3-4 sentences)
- Expertise highlights
- "leading by design" integration
- Link to full `/about`
- **Photo:** Paul facilitating or presenting (available)

### 5. Explore DDD Feature
**Full-width banner**
- Dark burgundy background
- "Founder of Explore DDD"
- Brief description
- Link to exploreddd.com
- **Photo:** Conference photo (available)

### 6. Open Source Products
**3-column grid (matching services)**

**ContextFlow**
- Visual DDD context mapper with Flow + Strategic views
- View Demo → Live demo link
- GitHub → Repo link
- Learn More → `/products/contextflow`

**CodeCohesion**
- 3D visualization for code cohesion and architecture
- View Demo → Live demo link
- GitHub → Repo link
- Learn More → `/products/codecohesion`

**Styling:** Same card style as services

### 7. Recent Writing
**2-3 latest posts** (horizontal cards)
- Post title, excerpt, date
- "Read More →" links (red)
- "View All Posts →" → `/blog`

### 8. Contact CTA
**Centered section**
- "Ready to transform your software design?"
- Email: `info@virtualgenius.com`
- Button: "Get in Touch" (red, prominent)
- Light gray background

### 9. Footer
**3-column grid**

**Column 1: Virtual Genius**
- Square VG logo
- Tagline: "leading by design"
- Social: LinkedIn, Twitter, GitHub

**Column 2: Quick Links**
- Services
- Products
- About
- Blog
- Contact

**Column 3: Resources**
- Explore DDD
- Speaking
- Open Source
- Privacy Policy

**Styling:**
- Dark burgundy background
- White/light gray text
- Copyright: © 2025 Virtual Genius LLC

---

## Product Landing Pages

### ContextFlow (`/products/contextflow`)

**Hero:**
- Tagline: "Map reality, not aspiration"
- Live Demo: https://thepaulrayner.com/contextflow/
- Screenshot: From `~/Documents/contextflow/docs/context-flow-3.png`

**Content Sections:**
1. **What is ContextFlow?**
   - Visual DDD context mapper
   - Bounded contexts + relationships + code ownership
   - Two synchronized views (unique differentiator)

2. **Flow View**
   - Value stream visualization (left-to-right)
   - Configurable stages
   - Screenshot: `context-flow-1.png`

3. **Strategic View**
   - Wardley evolution axis
   - Genesis → Custom → Product → Commodity
   - Screenshot: `context-flow-2.png`

4. **Why ContextFlow?**
   - Map reality, not aspiration
   - DDD strategic patterns with power dynamics
   - Code ownership and team topology
   - Boundary integrity classification

5. **Features**
   **Current:**
   - Visual canvas with pan/zoom
   - Bounded context nodes with classification
   - DDD relationship patterns
   - Live view switching
   - Full editing (drag, create, delete)
   - Repo sidebar with drag-to-assign
   - Undo/redo
   - Theme toggle
   - Import/export JSON

   **Planned:**
   - Multi-project picker
   - IndexedDB persistence
   - Enhanced import/export

6. **Getting Started**
   ```bash
   npm install
   npm run dev
   ```

7. **Links**
   - GitHub: https://github.com/paulrayner/contextflow
   - Live Demo: https://thepaulrayner.com/contextflow/
   - License: MIT

**No pricing** - open source

### CodeCohesion (`/products/codecohesion`)

**Hero:**
- Tagline: "Visualize code cohesion and architectural evolution"
- Live Demo: https://thepaulrayner.com/codecohesion/
- Screenshot: From `~/Documents/codecohesion/docs/images/timeline-v2-gource.png`

**Content Sections:**
1. **What Makes CodeCohesion Unique?**
   - 🌍 3D Spatial Visualization (solar system metaphor)
   - ⏱️ Live Timeline Playback (commit-by-commit)
   - 🔗 Cohesion Analysis (detect bounded contexts)
   - 🎯 DDD-Focused (monolith decomposition)
   - 🚀 Open Source
   - 🌐 Browser-Based

2. **Why Use CodeCohesion?**
   **Problem:** Understanding code architecture and cohesion is hard

   **Solution:** Git history → Interactive 3D visualization reveals:
   - Cohesion patterns (bounded contexts)
   - Coupling hotspots (files changing together)
   - Architecture (hierarchical structure)
   - Evolution (how codebase changed)
   - Ownership (who works on what)

3. **Use Cases**
   - DDD & Bounded Contexts discovery
   - Monolith Decomposition
   - Developer Onboarding
   - Retrospectives (timeline playback)
   - Technical Debt identification

4. **Features**
   **Core Visualization:**
   - Solar System Layout (dirs as planets, files as moons)
   - Hierarchical Focus Mode
   - Adaptive Sizing (LOC-based)

   **Interactive Exploration:**
   - Orbit controls (rotate, pan, zoom)
   - Click navigation (drill down)
   - Hover highlighting

   **Git Metadata:**
   - Multiple color modes (file type, last modified, author)
   - Timeline playback with speed controls
   - Filter by author, file type, date range

5. **Getting Started**
   Link to repo README for installation

6. **Links**
   - GitHub: https://github.com/paulrayner/codecohesion
   - Live Demo: https://thepaulrayner.com/codecohesion/
   - License: MIT

**No pricing** - open source

---

## Service Pages

### Services Index (`/services`)
- Overview of all offerings
- Expanded cards for each service
- "Contact for Pricing" CTA on each

### EventStorming (`/services/eventstorming`)
**Content:**
- What is EventStorming?
- 2-day workshop format
  - Day 1: Big picture exploration, problem identification
  - Day 2: Solution design, boundaries, next steps
- Typical outcomes
- Who should attend? (Business SMEs + Technical team, 15-20 people)
- Requirements (wall space, sticky notes)
- **Photos:** Workshop walls, facilitation shots (available)
- **Pricing:** "Contact for pricing" → `info@virtualgenius.com`

### DDD Training (`/services/training`)
**Content:**
- Essential DDD course (foundational patterns)
- Strategic DDD course (advanced strategic design)
- Custom workshops
- Format options (in-person, remote, hybrid)
- Duration (typically 2-3 days)
- Target audience (developers, architects, product managers)
- **Pricing:** "Contact for pricing"

### Coaching & Consulting (`/services/coaching`)
**Content:**
- Post-workshop coaching (8-15 hours typical)
- Pilot project support (6-week tiger teams)
- Code reviews and design walkthroughs
- Remote coaching via video calls
- Ongoing retainer options
- **Pricing:** "Contact for pricing"

---

## Additional Pages

### About (`/about`)
**Enhanced content:**
- Full professional bio
- Speaking history (conferences, keynotes)
- Books/publications
- Explore DDD founding story
- Conference involvement
- Philosophy/approach to DDD
- **Photo:** Professional headshot or presenting (available)

### Contact (`/contact`)
**Simple page:**
- Email: `info@virtualgenius.com`
- Social links (LinkedIn, Twitter, GitHub)
- Optional: Simple contact form (or just mailto link)
- Note: Keep blog separate at thepaulrayner.com

### Blog (`/blog`)
**Styling only** (no content migration):
- Restyle existing Astro blog with VG brand
- Red accents on links/CTAs
- Card-based post previews
- Clean typography
- Link to personal blog if needed

---

## Component Library

### Navigation
- `Header.astro` - Main nav with logo, sticky behavior
- `MobileMenu.astro` - Hamburger menu for mobile
- `NavLink.astro` - Individual nav items with active states

### UI Components - UPDATED

**Button Variants (Steamhaus-inspired):**
- `Button.astro` - Three variants:
  - **primary**: Filled red button (`bg-vg-red`) with white text
  - **secondary**: Red outlined button with red border, fills on hover
  - **outlined** (NEW): White/light outlined for dark backgrounds
    - Border: 2px white
    - Text: White
    - Hover: Fills with amber, text stays white
    - Larger padding for premium feel (px-8 py-4)
    - Rounded corners (rounded-lg)

**Cards:**
- `Card.astro` - Reusable card with red accent line
- `ServiceCard.astro` - Service-specific layout
- `ProductCard.astro` - Product-specific layout
- `BlogPostCard.astro` - Blog preview cards

**Layout Components:**
- `Hero.astro` - Hero section wrapper
  - NEW: Support for dark backgrounds
  - NEW: min-height options
  - Generous padding (py-32 md:py-48)
- `Section.astro` - Page section wrapper
  - Background options: white, gray, burgundy, **burgundy-dark** (NEW)

### Layout
- `BaseLayout.astro` - Main page wrapper, SEO, fonts
- `Footer.astro` - Site footer with 3 columns

---

## Technical Implementation

### Phase 1: Foundation (2 hours)

**1.1 Install Tailwind**
```bash
cd ~/Documents/virtualgenius.github.io
npx astro add tailwind
```

**1.2 Extract Logo from AI File**
- Source: `/Users/paul/Library/CloudStorage/Dropbox/Virtual Genius/Marketing/Corporate Branding/Production/20121101-VirtualGenius-Full.ai`
- Extract horizontal + square logos as SVG
- Fallback: Use PNG if SVG extraction fails
- Copy to `/public/images/`

**1.3 Configure Tailwind**
File: `tailwind.config.mjs`
```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'vg-red': '#C8342C',
        'vg-burgundy': '#5A1F1C',
        'vg-red-light': '#E04437',
        'vg-burgundy-dark': '#3D1512',
        'vg-gray': '#9B9B9B',
        'vg-gray-light': '#E5E5E5',
        'vg-gray-dark': '#4A4A4A',
        'vg-amber': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    }
  }
}
```

**1.4 Install Inter Font**
```bash
npm install @fontsource/inter
```

Import in BaseLayout:
```astro
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
```

### Phase 2: Components (2 hours)
Build all components listed above with:
- TypeScript props
- Tailwind styling
- Responsive design
- Accessibility (ARIA, semantic HTML)

### Phase 3: Homepage (2-3 hours)
Build all 9 homepage sections as specified

### Phase 4: Product Pages (3 hours)
- ContextFlow landing page
- CodeCohesion landing page
- Products index page
- Copy screenshots from local repos

### Phase 5: Service Pages (2 hours)
- Services index
- EventStorming, Training, Coaching pages
- "Contact for pricing" CTAs

### Phase 6: About/Contact (1 hour)
- Enhanced About page
- Simple Contact page

### Phase 7: Blog Styling (1 hour)
- Restyle existing blog
- No content migration

### Phase 8: Polish/Deploy (1 hour)
- Responsive testing
- Accessibility audit
- Performance optimization
- Deploy via Git push

**Total: 14-15 hours**

---

## Assets & Files

### Logos (AI Source)
**Primary:**
- `/Users/paul/Library/CloudStorage/Dropbox/Virtual Genius/Marketing/Corporate Branding/Production/20121101-VirtualGenius-Full.ai`

**Fallback PNGs:**
- `VirtualGenius-logo-Horizontal-FINAL.png` (horizontal)
- `vg_logo_square.png` (square)

### Product Screenshots

**ContextFlow:**
- Source: `~/Documents/contextflow/docs/`
- Files: `context-flow-1.png`, `context-flow-2.png`, `context-flow-3.png`

**CodeCohesion:**
- Source: `~/Documents/codecohesion/docs/images/`
- Files: `timeline-v2-gource.png` (and others as needed)

### Photos (Available)
- Workshop facilitation
- EventStorming walls/sticky notes
- Explore DDD conference
- Paul headshot/presenting

*Copy to `/public/images/` as needed*

### Repository Data

**ContextFlow:**
- Repo: https://github.com/paulrayner/contextflow
- Demo: https://thepaulrayner.com/contextflow/
- Content source: `~/Documents/contextflow/README.md`

**CodeCohesion:**
- Repo: https://github.com/paulrayner/codecohesion
- Demo: https://thepaulrayner.com/codecohesion/
- Content source: `~/Documents/codecohesion/README.md`

---

## File Structure (After Implementation)

```
virtualgenius.github.io/
├── public/
│   ├── images/
│   │   ├── vg-logo-horizontal.svg
│   │   ├── vg-logo-square.svg
│   │   ├── contextflow/
│   │   │   ├── context-flow-1.png
│   │   │   ├── context-flow-2.png
│   │   │   └── context-flow-3.png
│   │   ├── codecohesion/
│   │   │   └── timeline-v2-gource.png
│   │   └── photos/
│   │       ├── paul-facilitating.jpg
│   │       ├── eventstorming-wall.jpg
│   │       └── explore-ddd.jpg
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileMenu.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── ServiceCard.astro
│   │   ├── ProductCard.astro
│   │   ├── BlogPostCard.astro
│   │   ├── Hero.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── eventstorming.astro
│   │   │   ├── training.astro
│   │   │   └── coaching.astro
│   │   ├── products/
│   │   │   ├── index.astro
│   │   │   ├── contextflow.astro
│   │   │   └── codecohesion.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── content/
│   │   ├── blog/
│   │   └── events/
│   └── styles/
│       └── global.css
├── tailwind.config.mjs
├── astro.config.mjs
└── package.json
```

---

## Success Criteria

✅ Steamhaus-inspired aesthetic (bold red, modern, technical)
✅ VG red brand throughout (not blue!)
✅ Fully responsive (mobile, tablet, desktop)
✅ Accessible (WCAG AA - keyboard nav, ARIA, contrast)
✅ Fast loading (<1s FCP)
✅ Complete product pages for ContextFlow & CodeCohesion
✅ All service pages with "Contact for pricing"
✅ Contact CTA: info@virtualgenius.com
✅ Professional, credible for architects/leads
✅ Ready to replace Wix immediately

---

## Post-Launch Enhancements (Later)

- Client testimonials/quotes
- Client logos (with permission)
- Detailed case studies
- Additional blog posts (company updates)
- Newsletter signup
- Booking/scheduling integration (Calendly)
- Analytics (Plausible or Google Analytics)

---

## Next Steps

1. ✅ Design plan approved
2. ✅ All requirements clarified
3. ✅ Assets identified and accessible
4. **Ready for implementation**
5. Begin Phase 1: Tailwind setup + logo extraction
6. Iterative development through all 8 phases
7. Deploy and switch from Wix

---

**Document Version:** Final
**Last Updated:** 2025-11-08
**Ready to Build:** YES

All questions answered, all assets identified, complete plan documented. Ready to proceed with implementation.

# Content Syndication Workflow

**Philosophy**: virtualgenius.com is your content home. Blog posts are the source of truth. Social media and newsletters are traffic drivers that point back to your website.

---

## The Blog-First Workflow

### Step 1: Write the Blog Post (Source of Truth)

**Location**: `/src/content/blog/`

**What to include:**
- Complete narrative with all details
- Rich media: videos, photo carousels, images
- Full context and background
- Embedded examples, code samples, etc.
- Multiple CTAs (workshops, contact, related posts)
- SEO-optimized title and description

**Length**: Whatever it takes to tell the complete story (typically 800-1500 words)

**Media guidelines:**
- Videos: `/public/videos/` (web-optimized MP4)
- Hero images: `/src/assets/` (WebP format, under 300KB)
- Photo carousels: `/public/images/` (WebP format, under 150KB each)
- All media must exist before building

**Example frontmatter:**
```yaml
---
title: 'EventStorming in Melbourne: ADAConf 2025 Workshop and Speaking'
description: 'Reflections on running my first Australian EventStorming workshop and speaking at ADAConf on architectural change and collaborative modeling'
pubDate: 'Nov 17 2025'
heroImage: '../../assets/adaconf-2025-workshop.jpg'
---
```

**Deployment:**
```bash
npm run build  # Verify no errors
npm run preview  # Manual verification
git add . && git commit -m "feat: add [topic] blog post"
git push  # Auto-deploys via GitHub Actions
```

---

### Step 2: Extract LinkedIn Post (Within 24 Hours)

**Location**: `/content-syndication/[topic]-linkedin.md`

**Purpose**: Teaser that drives traffic to blog post

**Target length**: 200-300 words (not 400+)

**Structure** (see Paul's style guidelines in adaconf-2025-linkedin.md):
1. **Emotional hook + blog link** (first paragraph)
   - Lead with feeling/impact: "I had an incredible time..."
   - Link to blog post early: "Full write-up with videos: [URL]"
2. **Brief narrative** (2-3 paragraphs)
   - Tease key moments, don't tell everything
   - Integrate people/gratitude naturally
   - Blend details into story flow
3. **Specific gratitude**
   - Name individuals: collaborators, speakers, organizers
   - Keep it genuine, not formulaic
4. **Promotional content** (if relevant)
   - Workshop registration, upcoming events
   - Keep brief and natural (end of post)

**Tone:**
- Personal and conversational (not corporate)
- Natural flow (no bold headers, bullet points, or "key observations")
- Focus on people and connection

**Media:**
- Video performs best (workshop timelapse, demo, etc.)
- Alternative: 4-image carousel from blog post photos
- Avoid text-heavy images

**Posting guidance:**
- Best time: Weekday 9-11am EST
- Minimal hashtags (let content speak)
- Goal: Drive clicks to blog post

**Example (ADAConf post - 237 words):**
> I had an incredible time teaching EventStorming and speaking at Analysis, Design & Architecture last week! Full write-up with timelapse videos and workshop photos: [URL]
>
> Last Thursday I co-taught a full-day EventStorming workshop with Andrea Magnorsky. Watching participants discover hidden domain events, identify bottlenecks, and uncover bounded contexts - moving from uncertainty to confidence - reminded me why I love this work.
>
> Friday was ADAConf, with a 2-hour hands-on session connecting EventStorming with baking design concepts deeply into code. Thanks very much to Maryam Yasaei and Sruthi Nair for their kind words about the session.
>
> Thanks to everyone who attended the EventStorming workshop and my hands-on session, and especially to Andrea for co-teaching the workshop. My favorite talks were the opening and closing ones by Linda McIver and Diana Montalion.
>
> Special thanks to organizers Chris Simon, Sonal Premi, and Alicia Cheah for creating such a welcoming venue. Already looking forward to returning!
>
> For APAC folks: I'm running an EventStorming Facilitation Virtual Workshop December 2-5, specifically scheduled for APAC timezones, covering Big Picture, Process Modeling, and Software Design techniques. More info at [URL]

---

### Step 3: Create Email Newsletter (2-7 Days After Blog)

**Location**: `/content-syndication/[topic]-mailchimp.md`

**Purpose**: Personal update that drives traffic to blog post

**Target length**: 200-250 words max (not 350+)

**Structure** (see philosophy in adaconf-2025-mailchimp.md):
1. **Personal greeting + brief update** (2-3 sentences)
   - "Just back from [event] after [what you did]"
   - Set the context quickly
2. **Highlight 1-2 key moments** (1-2 paragraphs)
   - Tease, don't tell everything
   - Focus on feeling/impact
   - Keep it conversational
3. **Primary CTA: Full blog post**
   - "I've written up the full experience with videos and photos:"
   - [Button: "Read Full Story"] → blog URL
4. **Secondary CTA: Workshop/event** (if relevant)
   - Workshop registration
   - Upcoming events
   - Keep brief
5. **Personal sign-off**
   - Brief gratitude
   - Invitation to reply
   - Sign with just your name

**Tone:**
- Conversational, like updating a friend
- Personal, not promotional
- Subscriber-focused (what's valuable to them)

**Media:**
- Single hero image (same as blog post)
- Upload to Mailchimp content studio
- No embedded videos (link to blog instead)

**Mailchimp setup:**
- Template: Single-column layout
- CTA button: Red (#C8342C - brand color)
- Subject line: Personal and specific (test 2 options)
- Send: Tuesday-Thursday 10am subscriber timezone

**Example structure (needs writing for each post):**
> Hi [First Name],
>
> Just back from Melbourne after co-facilitating an EventStorming workshop with Andrea Magnorsky and speaking at ADAConf 2025.
>
> The week confirmed something I've observed over 15 years of teaching: collaborative modeling creates insights no individual working alone can achieve. Watching participants move from uncertainty to confidence as they modeled their domains reminded me why this work matters.
>
> I've written up the full experience with timelapse videos and workshop photos on the blog:
>
> [Read: EventStorming in Melbourne: ADAConf 2025] → blog URL
>
> For those in APAC: I'm running an EventStorming Facilitation Virtual Workshop December 2-5, specifically scheduled for APAC timezones.
>
> [Register for APAC Workshop] → workshop URL
>
> Thanks for being part of this community. If you're working on interesting domain modeling challenges, I'd love to hear about them—just hit reply.
>
> Paul

---

## Quick Reference: Content Hierarchy

| Platform | Role | Length | Primary Goal |
|----------|------|--------|--------------|
| **Blog** | Source of truth | 800-1500 words | Complete story, SEO, permanent reference |
| **LinkedIn** | Traffic driver | 200-300 words | Drive clicks to blog, engagement |
| **Email** | Personal update | 200-250 words | Drive clicks to blog, relationship |

---

## Common Mistakes to Avoid

❌ **Writing three separate standalone pieces**
- Blog post should be the complete story
- LinkedIn/email should point TO the blog, not compete with it

❌ **Making LinkedIn/email too long**
- If you're writing 400+ words, that content belongs on the blog
- Social/email are teasers, not articles

❌ **Bullet point "key observations" in LinkedIn**
- Goes against Paul's natural, conversational style
- Feels corporate and structured
- Integrate insights into narrative instead

❌ **Leading with logistics instead of emotion**
- ❌ "Last Thursday I taught a workshop"
- ✅ "I had an incredible time teaching EventStorming"

❌ **Forgetting to link to blog post early**
- Put the blog link in the FIRST paragraph
- Don't make readers hunt for it

❌ **Not naming people**
- Specific gratitude creates connection
- Name collaborators, speakers, organizers
- Avoid generic "thanks to everyone"

---

## Templates

### LinkedIn Post Template

```
[Emotional hook sentence]. Full write-up with [media type]: [blog URL]

[Brief narrative paragraph 1 - key moment/feeling]

[Brief narrative paragraph 2 - impact/people]

Thanks to [specific names] for [specific contributions].

[Promotional content if relevant - workshop/event info with URL]
```

### Email Newsletter Template

```
Hi [First Name],

[Brief personal update - 2-3 sentences]

[1-2 key moments - tease, don't tell everything]

I've written up the full experience with [videos/photos/details] on the blog:

[CTA Button: Read Full Story] → blog URL

[Workshop/event info if relevant]
[CTA Button: Register/Learn More] → event URL

Thanks for being part of this community. [Personal invitation to reply]

Paul
```

---

## Timing Guidelines

- **Blog post**: Publish as soon as ready
- **LinkedIn**: Within 24 hours of blog post going live
- **Email**: 2-7 days after blog post (Tuesday-Thursday 10am best)

**Why the delay for email?**
- Gives LinkedIn post time to drive initial traffic
- Provides second wave of traffic to blog post
- Feels less rushed/promotional to subscribers
- Can include engagement stats in newsletter if relevant

---

## Success Metrics

**Blog post:**
- Page views
- Time on page
- Video play rate
- Scroll depth

**LinkedIn:**
- Impressions
- Engagement rate (likes, comments, shares)
- Click-through rate to blog
- Profile views

**Email:**
- Open rate
- Click rate to blog
- Reply rate
- Workshop registrations (if relevant)

**Overall goal**: Drive traffic from distributed platforms back to virtualgenius.com

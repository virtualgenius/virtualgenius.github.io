# ADAConf 2025 Content Syndication Package

**Source of Truth**: virtualgenius.com blog post
**Syndication Strategy**: Drive traffic from social media and email back to the website

## Content Hierarchy

### 1. Canonical Source: Blog Post (virtualgenius.com)
- **Location**: `/src/content/blog/adaconf-2025-melbourne-workshop-and-speaking.mdx`
- **URL**: https://virtualgenius.com/blog/adaconf-2025-melbourne-workshop-and-speaking
- **Role**: **Primary content home** - the complete, authoritative version
- **Length**: ~1,000 words
- **Format**: Long-form article with embedded videos, photo carousel, rich media
- **Media**:
  - Hero image: Workshop timelapse frame
  - 3 embedded videos (workshop timelapse 26s, collaboration 15s, hands-on 33s)
  - 15-photo carousel from workshop
- **CTA**: APAC workshop registration + email contact

### 2. Syndication: LinkedIn Post
- **Location**: `/content-syndication/adaconf-2025-linkedin.md`
- **Role**: **Traffic driver** - teaser that points to blog post
- **Published**: 2025-01-19 (https://www.linkedin.com/posts/thepaulrayner_public-workshops-virtual-genius-activity-7396509596573585408-V1z7)
- **Length**: ~200-300 words (actual post: 237 words)
- **Format**: Personal narrative, conversational tone
- **Media**: Workshop timelapse video (most engaging for LinkedIn algorithm)
- **Hashtags**: Minimal - let content speak for itself
- **Primary CTA**: Link to full blog post early in the post
- **Style Guidelines**: See file header for Paul's LinkedIn voice and approach

### 3. Syndication: Email Newsletter (Mailchimp)
- **Location**: `/content-syndication/adaconf-2025-mailchimp.md`
- **Role**: **Update + traffic driver** - brief "what's new" with link to blog
- **Subject**: "Just back from Melbourne: EventStorming workshop + ADAConf"
- **Length**: ~200-250 words recommended (current draft: 350 words - needs trimming)
- **Format**: Conversational, subscriber-focused, personal update
- **Media**: Hero image from workshop
- **CTAs**:
  - Primary: Read full blog post
  - Secondary: APAC workshop registration
- **Implementation notes**: Includes Mailchimp-specific guidance for timing, segmentation, design

## Processed Media Files

### Videos (Web-Optimized)
- `/public/videos/adaconf-2025-workshop-timelapse.mp4` (6.7MB, 26s)
- `/public/videos/adaconf-2025-hands-on.mp4` (5.2MB, 33s)

### Hero Images
- `/src/assets/adaconf-2025-workshop.jpg` (220KB) - Workshop scene
- `/src/assets/adaconf-2025-hands-on.jpg` (206KB) - Hands-on session

All media compressed and optimized for web delivery.

## Distribution Strategy (Blog-First Approach)

### Step 1: Publish Blog Post (Day 0)
1. Write complete blog post with all rich media (videos, photos, full narrative)
2. Build and deploy to virtualgenius.com
3. Automatically included in sitemap for SEO
4. This becomes the **permanent, canonical source**

### Step 2: LinkedIn Syndication (Within 24 hours)
1. Extract 200-300 word teaser following Paul's LinkedIn style (see adaconf-2025-linkedin.md)
2. Lead with emotional hook + link to blog post in first paragraph
3. Upload workshop timelapse video to LinkedIn (best engagement)
4. Best posting time: Weekday 9am-11am EST
5. Goal: Drive clicks to full blog post

### Step 3: Email Newsletter (2-7 days after blog)
1. Brief personal update (~200-250 words) highlighting new blog post
2. Upload hero image to Mailchimp content studio
3. Primary CTA: "Read the full story" → blog post
4. Secondary CTA: Workshop registration (if relevant)
5. Send Tuesday-Thursday 10am subscriber timezone

## Content Philosophy

**virtualgenius.com is home:**
- **Blog**: Complete story, rich media, permanent reference, SEO-optimized
- **LinkedIn**: Teaser + traffic driver to blog
- **Email**: Personal update + traffic driver to blog

**Not:** Three separate standalone pieces
**Instead:** One canonical blog post + two syndication channels that point back to it

## APAC Workshop Integration

Each version naturally promotes the December 2-5 APAC workshop:
- Positioned as logical next step for readers
- Not salesy—flows from Melbourne experience
- Registration link: https://ti.to/EDDD/eventstorming-facilitation-virtual-workshop-dec-2025

## Metrics to Track

- Blog: Page views, time on page, video plays
- LinkedIn: Impressions, engagement rate, click-throughs
- Email: Open rate, click rate, workshop registrations from email

## Next Steps

1. ✅ Blog post published and live
2. ⏳ Schedule LinkedIn post
3. ⏳ Create Mailchimp campaign
4. ⏳ Monitor engagement and adjust as needed

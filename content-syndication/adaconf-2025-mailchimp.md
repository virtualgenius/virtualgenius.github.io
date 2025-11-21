# Email Newsletter: ADAConf 2025 Melbourne

## Newsletter Philosophy

**Email newsletters are brief personal updates that drive traffic to blog posts:**
- Target length: **200-250 words max** (not 350+)
- Format: "What's new" update, not content delivery
- Primary CTA: **Read full blog post** on virtualgenius.com
- Secondary CTA: Workshop registration (if relevant)
- Tone: Personal, conversational, subscriber-focused

**Structure:**
1. Personal greeting + brief update (2-3 sentences)
2. Highlight 1-2 key moments (tease, don't tell everything)
3. Primary CTA: Link to full blog post
4. Secondary CTA: Workshop/event info (if relevant)
5. Personal sign-off

**What to Avoid:**
- Long narratives (that's what the blog is for)
- Bullet point lessons learned
- Multiple embedded media (one hero image max)
- Competing with blog post - work together instead

---

**Subject Line Options:**
1. "Just back from Melbourne: EventStorming workshop + ADAConf"
2. "Teaching EventStorming in Australia (+ APAC workshop in December)"
3. "Melbourne reflections: What I learned teaching EventStorming Down Under"

**Recommended**: Option 1 (clear, specific, personal)

---

## Email Body (Current Draft - Needs Trimming to ~200-250 words)

Hi [First Name],

Just back from Melbourne after co-facilitating an EventStorming workshop with Andrea Magnorsky and speaking at ADAConf 2025.

The week confirmed something I've observed over 15 years of teaching: collaborative modeling creates insights no individual working alone can achieve. Watching participants discover hidden domain events, identify bottlenecks, and uncover bounded contexts reminded me why this work matters.

**Two highlights:**

**Thursday workshop**: Full day with Andrea covering Big Picture, Process Modeling, and Software Design EventStorming. The highly participatory format created an environment where people felt safe exploring complexity together. Participants moved from uncertainty to confidence as they practiced modeling their domains.

**Friday at ADAConf**: 2-hour hands-on session connecting domain modeling using EventStorming with baking design concepts deeply into code. One participant called it "a masterclass in demonstrating the immense power of integrating domain concepts into code." The Australian DDD community's energy and curiosity made teaching a joy.

**Quick lessons from the trip:**
- Collaboration beats individual brilliance
- Visualization creates shared understanding
- An incremental approach builds confidence (introducing one concept at a time kept participants engaged)
- Communities matter more than ever

**For those in APAC**: I'm running an EventStorming Facilitation Virtual Workshop **December 2-5**, specifically scheduled for APAC timezones. Same participatory, camera-on format that has worked well in past virtual workshops. Covers Big Picture, Process Modeling, and Software Design techniques for feature discovery, design, and architecture decisions. Small cohorts, direct feedback. No prior EventStorming experience needed.

[Register for APAC Workshop](https://ti.to/EDDD/eventstorming-facilitation-virtual-workshop-dec-2025)

I've written up the full experience with timelapse videos and workshop photos on the blog:

[Read: EventStorming in Melbourne: ADAConf 2025](https://virtualgenius.com/blog/adaconf-2025-melbourne-workshop-and-speaking)

Thanks to Andrea for co-teaching our EventStorming workshop. I especially enjoyed the talks by Linda McIver and Diana Montalion that opened and closed the conference day.

Special thanks to the ADAConf organizers—Chris Simon, Sonal Premi, and Alicia Cheah—and volunteers for creating such a welcoming venue for the community.

Thanks for being part of this community. If you're working on interesting domain modeling challenges, I'd love to hear about them—just hit reply.

Paul

---

**Mailchimp Implementation Notes:**

1. **Hero Image**: Use `src/assets/adaconf-2025-workshop.jpg` (220KB, web-optimized)
   - Upload to Mailchimp content studio
   - Place after opening paragraph

2. **CTA Buttons**:
   - Primary: "Register for APAC Workshop" → https://ti.to/EDDD/eventstorming-facilitation-virtual-workshop-dec-2025
   - Secondary: "Read Full Story" → https://virtualgenius.com/blog/adaconf-2025-melbourne-workshop-and-speaking

3. **Design**:
   - Single-column layout
   - Image: Full-width hero after opening
   - Font: System default (readable on all devices)
   - CTA styling: Red button matching brand (#C8342C)

4. **Segment Recommendations**:
   - Send to: All subscribers
   - Consider separate send to APAC subscribers with emphasized workshop dates
   - A/B test subject lines 1 vs 2 with 10% sample

5. **Timing**:
   - Send Tuesday-Thursday 9-11am subscriber local time
   - Best engagement: Tuesday 10am

6. **Video/Photo Consideration**:
   - Mailchimp doesn't support embedded video well
   - Use hero image (`src/assets/adaconf-2025-workshop.jpg`) with "See workshop videos & photos →" CTA to blog
   - Alternative: Use one of the 15 workshop photos from `/public/images/adaconf-2025/` for variety
   - Advanced: Create animated GIF from timelapse frames (keep under 1MB)

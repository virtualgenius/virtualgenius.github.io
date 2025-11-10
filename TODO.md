## TODO

testimonials/
    Fictitious
    about - Explore DDD photo

Add GA to site
Add CodeCohesion announcement to blog

https://www.bti360.com/hands-on-with-domain-driven-design/
    client description of 1-day Intro to DDD workshop
    VG/Clients/BTI360/Proposal
    LI Post: https://www.linkedin.com/posts/bti360_we-had-a-great-time-diving-into-domain-driven-activity-7326323413638156288-6_0N


still too much vertical space, especially in Mobile (check responsive design). Even in compact hero

About page should have compact hero
Add more images

services/
    Fix component border around video
    coaching and consulting photo?

services/eventstorming
    Fix Typical 2-Day Workshop Format agenda
    Nussbaum - check with Ben about featuring this
    What You'll Need - clarify this (we provide...)
    testimonials probably fake
    show timelapse of in-person too

services/facilitation? *****

services/training
    checkbox bullets are badly formatted for workshops
    Custom Workshops are made up
    Get rid of emojis!!!

services/coaching
    checkbox bullets are badly formatted

Make email info@virtualgenius.com have a prefilled subject

Home page
    Explore Button has orange hover
Books
    Include TOC (or at least topics?)/sample PDF on page?
    Heading has redundant "PUBLICATIONS" text

Favicon - needs VG logo

Check VG 
Move DNS over from WIX
Move demo apps over to VG.com/...
    Update GH readme's


Products page
    CTA buttons at the bottom need GH logo

NEW

Add Agentic Flow materials - figure this out
Add Claude Agents post to blog


EventStorming workshop timelapse video in Eventstorming section of the services page has a blank section on the right hand side now. adding debug borders seemed to help.

    debug borders:
    Red border = container boundary (what we're trying to size correctly)
    Blue border = video element boundary (the actual video scaled and shifted)
    Check the page now. This will show us:
    If the video is overflowing the container on the right
    If the container itself is creating the blank space
    Whether the aspect ratio calculation is correct
    Also tell me: Can you check the video file properties? What's the original resolution and aspect ratio of /videos/eventstorming-timelapse.mp4?

    Used FFprobe
    The video is 1280×1080 but reports as 16:9 aspect ratio. Let me calculate the actual aspect ratio: 1280/1080 = 1.185 ≈ 32:27 (not 16:9!) So when we crop to show 90% of width:
    Cropped ratio: 1.185 × 0.9 = 1.067 ≈ 16:15

---
title: 'TDD with Claude Code: Fixing a File Node Overlap Bug'
description: 'Watch Claude Code work through analyzing, fixing, and committing a bug fix in CodeCohesion using test-driven development'
pubDate: 'Oct 30 2025'
heroImage: '../../assets/claude-code-tdd-hero.jpg'
---

Yesterday I started experimenting with Claude Code in CodeCohesion doing TDD for new features and bug fixes, and did more refactoring to pure functions for existing code that needed tidying. This morning I pushed the results. See https://github.com/thepaulrayner/CodeCohesion.

The video (sped up 1.3x) shows this morning's single TDD cycle fixing a file node overlap bug in the 2D force-directed layout view. I didn't add audio or voiceover (play some cool music yourself while you watch). Claude Code made mistakes and went down wrong paths, but worked through analyzing the bug, fixing it, updating docs, making commits and pushing to GitHub.

<video controls width="100%" style="max-width: 800px; margin: 2rem auto; display: block;">
  <source src="/videos/claude-code-tdd-bug-fix.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The fix this morning was somewhat trivial. But the cleanup work we've been doing very much fits Kent Beck's: "for each desired change, make the change easy (warning: this may be hard), then make the easy change"

Thanks to Thomas P. for suggesting I record a session, Ferdinand Ade and Marco Emrich for inspiration and suggestions, Marco Heimeshoff for the encouragement. 💡Paulo Renato for great feedback on yesterday's post.

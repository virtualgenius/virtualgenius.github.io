---
title: 'What is 1+1?'
description: 'The "correct" answer to 1+1 depends entirely on the context you are operating in. What that means for working with LLMs and AI agents.'
pubDate: 'Feb 6 2026'
heroImage: '../../assets/one-plus-one.webp'
---

I posed this question to someone this week in the context of AI: "What is 1+1?" Would a system be broken if it gave an answer other than 2?

It seems obvious that an AI should give that answer — but if you expect that, you don't really understand how LLMs work. For at least two reasons.

## The "correct" answer depends on context

If you do domain-driven design, this should feel familiar — the meaning of any term depends on the bounded context you're in. "1+1" is no different.

I asked Claude: "What are the possible answers to `1 + 1 =`?"

> **Mathematical Systems**
>
> - **Decimal (base 10):** 2
> - **Binary (base 2):** 10
> - **Modular arithmetic (mod 2):** 0
> - **Set theory:** {1} ∪ {1} = {1} (cardinality: 1)
>
> **Programming**
>
> - **String concatenation:** "11"
> - **Boolean OR:** 1 (true)
> - **JavaScript type coercion:** `"1" + 1 = "11"`
>
> **Philosophical/Humorous**
>
> - "A window" (two lines crossing)
> - 3 (synergy, reproduction, "the whole is greater than the sum")
> - 1 (two things merging into one)
>
> **Domain-Specific**
>
> - **Quantum superposition:** Both 0 and 2 until observed
> - **Approximate/engineering:** ≈ 2
> - **Ordinal arithmetic:** ω + ω ≠ 2ω in some cases

The same question, completely different "correct" answers depending on the context.

## LLMs are not calculators

Even within a single system, an LLM might answer "Fish". That's NOT the model being "broken". It feels broken, but it's in the very nature of the way these models work — they're non-deterministic large-scale token predictors. They don't "know" that 1+1=2 the way a calculator does. They predict what token is most likely to come next, and most of the time that lands on "2". But there's no guarantee.

This matters when building with AI agents. Move everything you need to be deterministic into supporting deterministic tools — services, scripts, applications...whatever, it's all software. But even then, there's always going to be a chance a foundation model gives an unexpected answer, perhaps one with surrealist vibes.

Next time your AI gives you an unexpected answer, it might be worth asking which context it was operating in before assuming it's broken.

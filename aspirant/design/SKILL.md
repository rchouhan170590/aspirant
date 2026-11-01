---
name: upsc-brain-design
description: Use this skill to generate well-branded interfaces and assets for UPSC Brain Agent — an AI study companion for UPSC Civil Services preparation. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. The brand is editorial, scholarly, ink-on-paper; warm cream canvas, Spectral serif, Inter UI, Marigold/Sage/Vermillion as earned semantic accents. No emoji, no gradients, no marketing voice.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `README.md` — full brand voice, visual foundations, layout rules, motion principles
- `colors_and_type.css` — drop-in CSS variables and `@font-face` imports (Spectral, Inter, JetBrains Mono via Google Fonts)
- `assets/wordmark.svg`, `assets/diya.svg` — primary marks
- `preview/` — small reference cards for every token and component
- `ui_kits/web_app/` — high-fidelity click-thru of the actual product (Today, Ask, Practice, Weak Areas, Archive). Reuse `atoms.jsx`, `DigestCard.jsx`, `MCQItem.jsx`, `AskBox.jsx`, `WeakAreaRow.jsx`.

Non-negotiables when designing for this brand:
- Serif (Spectral) for editorial output, sans (Inter) for chrome, mono (JetBrains Mono) for PYQ codes / dates / scores
- Warm cream canvas `#F7F2E8`, never pure white
- Ink `#1A1F2E` for primary fill — no purple, no blue gradients
- Marigold, Sage, Vermillion are *earned* accents tied to specific meaning (highlight / correct / incorrect)
- No emoji. No exclamation marks outside error banners. Indian English spelling.
- PYQ shorthand (`Mains 2019 Q9`, `GS-3`, `Anthro P1`) is set in mono and never expanded
- 1px borders over shadows for resting cards; minimal motion (200ms fades, 100ms press tick)

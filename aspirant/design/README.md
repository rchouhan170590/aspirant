# UPSC Brain Agent — Design System

A design system for **UPSC Brain Agent**, a production-grade AI study companion for the UPSC Civil Services Examination. The product wakes up at 6 AM IST, ingests The Hindu / PIB / Indian Express / LiveLaw, maps every article to the syllabus, and delivers a structured study digest before the aspirant sits down. On demand it acts as mentor — explaining concepts, generating MCQs calibrated to weak areas, drafting Mains frameworks, and pulling stories / quotes / philosophical anchors for Essay paper.

It is not a chatbot. It is a **disciplined daily reading room** with an LLM behind it.

## Sources

No codebase, Figma, or screenshots were attached for this round. The system was built from the project's README (a detailed product spec describing FastAPI + LangGraph + Qdrant architecture, six query intent types, a daily digest pipeline, and Anthropology-optional support).

> **Caveat for the reader:** because no production UI existed yet, the visual direction here is an **original proposal** designed to fit the product's character (scholarly, serious, Indian civil-service formal, paper-and-ink editorial). It is not a recreation of an existing product. The user should treat it as v1 and tell us what to push harder, soften, or replace.

## Product context

A single web application with a small surface area:

- **Daily Digest** — today's processed news, one card per article, with summary / MCQs / Mains questions / mindmap / essay angle / PYQ link
- **Ask** — a query box that classifies intent into one of six types (Concept, Doubt, MCQ, Mains, Essay, Anthropology) and routes to a specialist
- **Practice** — generated MCQs with attempt tracking
- **Weak Areas** — accuracy by topic, surfaced topics for revision
- **Archive** — historical digests by date

The audience is **serious aspirants** — people who already know what GS-2 means, who recognize PYQ codes, who read editorials with a pen. Copy and visuals must respect that.

---

## Content fundamentals

### Voice
- **Editorial, never marketing.** The product writes like a senior tutor — clear, declarative, no hype.
- **Second person, sparingly.** "Your weak areas," "Today's digest." Avoid "we," avoid "let's," avoid "AI."
- **No emoji.** Ever. The lone exception is the brain glyph in the wordmark.
- **No exclamation marks** outside of error banners.
- **Title case for nav and section headers**: "Daily Digest," "Weak Areas." **Sentence case for body and buttons**: "Generate MCQs," "Open digest."
- **Indian English spelling** — "judgement," "behaviour," "organisation."
- **PYQ shorthand is sacred** — "GS-2 2019 Q9," "Prelims 2017," "Anthro Paper 1." Never expand these in UI; aspirants read them faster than English.

### Density
The product surfaces a lot per day. Lean into density rather than fighting it. White space is for **between** sections, not for padding empty cards.

### Examples (good)
- *"Today's editorial on the Forest Conservation Amendment maps to GS-3 Environment. Three Prelims MCQs and a 250-word Mains framework follow."*
- *"You answered 4 of 7 Polity MCQs correctly this week. Federalism remains below threshold."*
- *"Generate questions"* — button label
- *"This concept appeared in Mains 2018 Q11 and Prelims 2021."*

### Examples (avoid)
- *"Hey aspirant! 🚀 Ready to crush UPSC?"* — no
- *"Our AI has crafted personalized content just for you ✨"* — no
- *"Let's dive in!"* — no

---

## Visual foundations

### Color
A four-part palette built around **ink on paper**, with two earned accent roles.

- **Ink** `#1A1F2E` — the deep desaturated indigo of official seals and Parker fountain-pen ink. All primary text. All primary buttons. The single most-used color.
- **Paper** `#F7F2E8` — warm cream, the canvas. Not white. Suggests newsprint, notebook paper, the warmth of a reading lamp at 5:30 AM. The default app background.
- **Marigold** `#D97706` — saffron-leaning amber. Used for **marks** (highlights, current selection, "today" indicators). Not flooded; it earns its place.
- **Vermillion** `#B23A3A` — terracotta red, used **only** for weak-area indicators and incorrect-answer feedback. Carries weight; never decorative.
- **Sage** `#3F6B5C` — muted forest green. Correct answers, "passed relevance filter," verified-source badges.

Plus a 9-step **ink scale** (`--ink-50` through `--ink-900`) for borders, dividers, secondary text, and surfaces. See `colors_and_type.css`.

**No gradients.** Solid fills only. No purple, no blue-to-pink, no glass-morphism.

### Typography
A three-family system, deliberate and quiet.

- **Spectral** (serif, Google Fonts) — for editorial output: digest summaries, model answers, essay material, quotes. The serif is the product's voice. It says "this is something to read, not click."
- **Inter** (sans, Google Fonts) — for UI chrome: nav, buttons, labels, metadata. Stays out of the way.
- **JetBrains Mono** (mono, Google Fonts) — for PYQ codes, syllabus tags, dates, scores. Locks numbers into columns.

Display sizes use Spectral. Body in lists uses Inter at 15px / 1.55. Reading body (digest text) uses Spectral at 17px / 1.65 — generous, like a magazine column.

> **Substitution flag:** Spectral, Inter, and JetBrains Mono are loaded from Google Fonts. If a future production deployment ships its own type license, swap the `@import` line in `colors_and_type.css`.

### Spacing
4px base. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96. No 5s, no 10s, no arbitrary values.

### Borders & rules
- Hairline rules — `1px solid var(--ink-100)` — separate sections inside a card. Used liberally, like rules in a printed almanac.
- Card borders — `1px solid var(--ink-150)`.
- Borders are **always solid**, never dashed except for empty states.

### Corner radii
- `--r-sm: 4px` — buttons, inputs, chips
- `--r-md: 8px` — cards, modals
- `--r-lg: 12px` — featured surfaces (today's digest hero)
- Pills exist (`9999px`) but only for status badges and filter chips, never buttons.

### Shadows & elevation
Minimal. Two shadows total in the system.

- `--shadow-1` — `0 1px 2px rgba(26, 31, 46, 0.06)` — resting cards
- `--shadow-2` — `0 8px 24px rgba(26, 31, 46, 0.10)` — modals, popovers, dropdowns

No glows. No multi-layer drop shadows. Resting state of most surfaces uses a 1px border, **not** a shadow.

### Backgrounds
The Paper canvas is sometimes laid over a very faint repeating dot pattern (`assets/paper-grid.svg`) at 4% opacity to imply ledger paper. This is optional — never on dense data tables.

No full-bleed photography. No abstract illustration. The visual richness comes from typography and rules, not images.

### Animation
Sparing. The system has three motion primitives:

- **Fade-in 200ms ease-out** — for content appearing (a digest loading, a query answer streaming in)
- **Highlight sweep 600ms** — Marigold underline animating across a word when it's marked as a "key term." Used once per page maximum.
- **Tick 100ms** — buttons compress 1px on press (`transform: translateY(1px)`). No ripple, no scale.

No bouncy springs. No staggered list-item entrances. No parallax.

### Hover & press states
- **Hover on links / buttons** — text color shifts from `--ink-900` to `--ink-700`, or background tints by 4%. No underline-on-hover (text already styled).
- **Press** — `translateY(1px)` and 8% darker fill.
- **Focus** — 2px Marigold outline with 2px offset. Always visible — accessibility in a study app matters.

### Cards
Cards are the workhorse component. Every digest article, every MCQ, every Mains framework lives in a card.

- 1px border `--ink-150`
- `--r-md` (8px) corners
- 24px internal padding
- White (`--paper-white`) fill on the Paper canvas — provides crispness without losing warmth
- Subtle hairline divider between header and body
- No shadow at rest. `--shadow-2` only when lifted (modals).

### Layout rules
- Max content width **720px** for reading surfaces (digest, model answers, essays)
- Max content width **1180px** for index / list surfaces (today's digest list, archive)
- Generous left margin on reading content — 64px+ on desktop — to invite marginalia in v2
- **No fixed sticky headers**. The top bar scrolls away. Focus is sacred.

### Transparency & blur
Used in exactly one place: the modal scrim — `rgba(26, 31, 46, 0.5)` over a `backdrop-filter: blur(8px)`. Nowhere else.

---

## Iconography

**Lucide** is the chosen icon set, loaded from CDN (`https://unpkg.com/lucide@latest`). Lucide's thin-stroke, geometric style aligns with the editorial restraint of the rest of the system. 1.5px stroke, 20px default size, currentColor fill.

> **Substitution flag:** the original spec mentions no icon system. Lucide was chosen as the closest match to the brand's editorial-thin-line direction. If the production app standardizes on a different set (Phosphor, Heroicons), swap the CDN reference.

- **No emoji** anywhere except in the wordmark glyph
- **No Material/Fluent filled icons** — too playful
- **No icon-only buttons** without an `aria-label` and a tooltip
- **PYQ codes are typographic**, not iconographic — `Mains 2019` is set in JetBrains Mono, not bracketed in a square

The brand mark itself is a typographic wordmark (`upsc.brain` in Spectral) with an optional small **diya** (oil lamp) glyph to its left — a quiet nod to dawn / study / the 6 AM digest schedule. See `assets/wordmark.svg`.

---

## Index — what's where

```
/
├── README.md                       # this file
├── SKILL.md                        # cross-compatible skill manifest
├── colors_and_type.css             # all CSS variables + @font-face imports
├── assets/
│   ├── wordmark.svg                # primary logo
│   ├── diya.svg                    # standalone glyph
│   └── paper-grid.svg              # optional background pattern
├── preview/                        # design system preview cards
│   ├── colors-primary.html
│   ├── colors-ink-scale.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-mono.html
│   ├── type-scale.html
│   ├── spacing.html
│   ├── radii.html
│   ├── shadows.html
│   ├── buttons.html
│   ├── inputs.html
│   ├── cards.html
│   ├── badges.html
│   ├── nav.html
│   ├── wordmark.html
│   └── iconography.html
└── ui_kits/
    └── web_app/                    # the main UPSC Brain Agent web app
        ├── README.md
        ├── index.html              # interactive click-thru prototype
        └── *.jsx                   # individual components
```

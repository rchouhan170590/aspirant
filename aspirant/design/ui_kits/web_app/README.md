# UPSC Brain Agent — Web App UI Kit

A click-thru prototype of the UPSC Brain Agent web application. The product surface is intentionally small — five tabs and a focused reading experience.

## Screens

1. **Today** — the daily digest, generated at 6 AM IST. Each card is one processed article (summary, MCQs, Mains questions, mindmap, essay angle, PYQ link).
2. **Ask** — the query box. Classifies intent into one of six types and routes to a specialist agent. Shows an inline streaming response.
3. **Practice** — generated MCQs. Calibrated to weak areas. Tracks attempts.
4. **Weak Areas** — accuracy by topic and GS paper. Topics below 70% surface here.
5. **Archive** — historical digests by date.

## Components

- `AppShell.jsx` — wordmark + top nav + canvas
- `DigestCard.jsx` — one processed news article
- `MCQItem.jsx` — single MCQ with answer reveal
- `AskBox.jsx` — query input + intent chips + streaming response
- `WeakAreaRow.jsx` — topic accuracy bar
- `Badge.jsx`, `Button.jsx` — shared atoms

## Caveat

No production source existed; this kit is an original visual proposal. The interaction patterns follow the README spec (intent classification, MCQ attempts, weak area tracking) but the UI choices are ours to iterate on.

# Real Analysis Hub

A personal study/notes hub for real analysis, organized so the structure
itself teaches the logical dependencies — starting from axioms and basic
building-block definitions, building up to more advanced theorems and proofs.

This repo is scaffolding-only right now; no theorem/definition/proof content
has been written yet. See `PROJECT_BRIEF.md` for the full project scope and
phasing, and `DECISIONS.md` for the reasoning behind every structural choice
made so far (including where AI assistance was and wasn't involved).

## Stack

Built with [Eleventy (11ty)](https://www.11ty.dev/) — plain HTML/Markdown
templates, no JS framework, static output. See `DECISIONS.md` for why.

```
npm install
npm start     # local dev server
npm run build # static build to _site/
```

## Structure

```
src/
├── _includes/       # shared layouts and partials (sidebar, breadcrumb)
├── _data/           # site-wide data (nav tree, once content exists)
├── assets/          # css (theme variables), svg, js, video
├── axioms/          # foundational assumptions — nothing else
├── set-theory/       ┐
├── ordered-fields/    │  one folder per topic area — added/renamed
├── sequences/          │  freely as the content grows; nav is built
├── continuity/          │  from page frontmatter, not folder names
├── differentiation/    │
├── integration/       ┘
└── reference/       # dependency-ordered index of all statements, no proofs
```

Each topic folder's own `index.html` is that topic's landing page. Individual
note pages (definitions/theorems) go inside these folders as `.md` files, one
per axiom/definition/theorem — none exist yet; content comes in a later phase.

## Note page template

```yaml
---
layout: note-layout.html
type: theorem              # axiom | definition | theorem
kind: lemma                # optional, theorem-type only: lemma | corollary | proposition | theorem
id: some-stable-id         # used for all cross-linking — independent of file path/title
title: "Human-Readable Title"
statement: "Rendered through KaTeX/markdown, e.g. $x = x$."
prerequisites:
  - some-other-id
---
## Intuition
...
## Proof            <!-- theorem-type pages only -->
...
```

- `id` is what `prerequisites` links point to, not a file path — pages and
  folders can be renamed/reorganized freely without breaking links.
- `statement` is a separate frontmatter field (not just page prose) so the
  `reference/` index can list every statement without its proof.
- `prerequisites` is the only hand-authored relationship. "Related results"
  (what depends on this page) is computed automatically as its inverse —
  never hand-maintained, can't drift out of sync.
- Sidebar, topic pages, and `reference/` all render notes in dependency
  order, computed from `prerequisites` — no manual ordering anywhere.
- Math is written as `$inline$` / `$$block$$` and rendered at build time via
  KaTeX (self-hosted, no CDN). Block math (`$$...$$`) is automatically
  numbered — `(1)`, `(2)`, ... — so a proof can read "by (1), ..." with no
  extra markup.
- To drop a visual next to a note's text, write
  `<figure class="figure"><svg|img>...<figcaption>...</figcaption></figure>`
  directly in the markdown body — it renders in the reserved right-hand
  figure column automatically. See `CLAUDE.md` for the required
  lazy-loading/performance conventions for any `<img>`/`<video>` there.

Full reasoning behind this template — and the "Archival Green" visual
theme (palette, typography, layout) — is in `DECISIONS.md`.

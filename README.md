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
note pages (definitions/theorems, each following a consistent template) will
be added inside these folders starting in a later phase — the page template
itself is still being decided (see `DECISIONS.md`).

This README will be expanded with "how to add a new note page" instructions
once that template is locked in.

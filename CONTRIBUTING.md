# Contributing (to myself)

This is the ruleset for adding to this repo without drifting from the
structure decided in Phases 1–4 — read it before adding a topic, a note
page, or a visual, especially if it's been a while.

- **This file** is the rules — what to do.
- **`DECISIONS.md`** is the history — why each rule exists, what the
  tradeoffs were, and where AI assistance was involved.
- **`README.md`** is the mechanics — the concrete steps to add a page.

If a rule here ever feels wrong, that's worth revisiting deliberately — add
a new dated entry to `DECISIONS.md` explaining the change, then update this
file. Don't just quietly drift from it.

## Taxonomy

- One folder per topic area (`src/<topic>/`), never tier-numbered
  (`01-foundations/`) — dependency order lives in `prerequisites`
  frontmatter, never in folder structure or filenames.
- The current topic list is `src/_data/topics.js` — the single source of
  truth for the sidebar. Add/rename/reorder topics there, not by hardcoding
  links anywhere.
- **When to add a new topic folder:** when there are (or will clearly soon
  be) multiple pages that don't fit naturally under an existing topic.
  Don't create a folder for one page — let it sit under the closest
  existing topic until there's enough there to justify splitting it out.
- `axioms/` holds foundational assumptions only — nothing else goes there.
- `reference/` is generated from every note's frontmatter — never add
  content to it by hand.

## Note IDs

- Kebab-case, descriptive: `bolzano-weierstrass`, not `thm-12` or `t1`.
- **Once assigned, an id is permanent.** Other pages' `prerequisites` refer
  to it directly. Renaming it breaks the build loudly (an "unknown
  prerequisite id" error) rather than silently breaking a link — but you
  still have to go fix every reference by hand, so don't rename ids
  casually. If a page's title or topic changes, the id doesn't have to.
- Must be unique across the whole site — the build fails on a duplicate.

## Prerequisites

- List only the **direct** prerequisites a page relies on — not anything
  already implied by one of those direct prerequisites. The dependency
  order (sidebar, `reference/`) is computed by walking the full graph, so
  transitive dependencies don't need restating.
- Never hand-author a "related results" or backlinks list — it's computed
  automatically as the inverse of `prerequisites`. If you find yourself
  wanting to add one, that's a sign the underlying `prerequisites` edge is
  missing on the *other* page, not that this page needs a manual list.

## Note page template

- `type`: `axiom` | `definition` | `theorem`.
- `kind` (theorem-type only, optional): `lemma` | `corollary` |
  `proposition` | `theorem` — a display label only, doesn't change the
  template shape.
- **Axioms**: statement + `## Intuition` only, no proof. `prerequisites` is
  normally empty — axioms are the base case. The one exception: an axiom
  whose statement relies on already-defined terminology (e.g. the
  completeness axiom can't be stated without "supremum," defined on
  `bounds-suprema`) lists that definition page as a prerequisite. It's
  still axiomatic — nothing is being derived — the link exists so the page
  is readable and so `reference/`/breadcrumbs don't show a term used
  before it's defined.
- **Definitions**: statement + `## Intuition`. `prerequisites` optional. No
  proof.
- **Theorems** (incl. lemma/corollary/proposition): statement +
  `## Intuition` + `## Proof`, `prerequisites` present.
- `statement` goes in frontmatter, as complete, standalone sentence(s) —
  it's shown on its own (no surrounding context) in `reference/`, so it
  needs to make sense in isolation.
- Body content is just `## Intuition` then `## Proof`, in that order —
  that's the entire structural convention. Nothing else is required or
  auto-generated from the body.

## Math

- `$inline$` and `$$block$$`, rendered at build time via KaTeX.
- Block equations (`$$...$$`) number themselves automatically — write
  plain `$$...$$` and reference "by (1)" in the prose that follows. Never
  hand-number; there's no markup for it, the numbering is a CSS counter
  keyed to every `$$...$$` on the page in order.

## Visuals

- Default to hand-authored **inline** SVG/JS in a `.figure` block — inline
  specifically so colors can reference the theme's CSS custom properties
  (`fill="var(--accent)"`) and stay theme-reactive automatically. A linked
  `.svg`/`.png` file can't do this.
- Any raster image or video in a `.figure` follows the lazy-loading/sizing
  rules in `CLAUDE.md`.
- Manim is a deliberate, case-by-case tool for one specific concept that
  genuinely needs a complex choreographed animation — not standing
  infrastructure. Don't install its toolchain "just in case."

## What's computed, never hand-maintained

If you catch yourself about to hand-edit one of these, stop — something
upstream is missing instead:

- Sidebar nav order and topic grouping
- `reference/` index contents and order
- Prerequisite → "related results" backlinks
- Equation numbering

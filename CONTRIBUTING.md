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

- `type`: `axiom` | `definition` | `theorem` | `technique`.
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
- **Techniques**: meta/toolbox pages about how to prove things (logic,
  induction, contradiction, ...) rather than claims about $\mathbb{R}$
  itself — currently just `logic-and-proof/proof-techniques.md`.
  `statement` is omitted entirely (the layout skips the statement box when
  it's absent) since there's no single formal claim to state. Body is
  freeform `##` sections instead of the fixed Intuition/Proof shape —
  whatever sections the technique needs. `prerequisites` is used when a
  technique's validity traces to a specific axiom (e.g. induction cites
  `peano-axioms`).
- `statement` goes in frontmatter, as complete, standalone sentence(s) —
  it's shown on its own (no surrounding context) in `reference/`, so it
  needs to make sense in isolation.
- `statement` can be a single string, or a YAML list when an axiom/
  statement has multiple independent clauses (common for axiom pages).
  The first list item is the lead-in sentence, rendered as prose; the
  rest render as a bulleted list in the statement box, which reads far
  easier than semicolon-chaining everything into one paragraph. In
  `reference/`, a list statement is rendered by joining all items with a
  space back into one paragraph, so still write each item as a complete,
  self-contained sentence. Only bother listifying when there are genuinely
  multiple clauses — a single-sentence statement (e.g. the completeness
  axiom) stays a plain string.
- Body content is just `## Intuition` then `## Proof`, in that order —
  that's the entire structural convention. Nothing else is required or
  auto-generated from the body.

## Math

- `$inline$` and `$$block$$`, rendered at build time via KaTeX.
- **An inline `$...$` span must not contain a line break in the source.**
  markdown-it-texmath's inline matcher doesn't match across an embedded
  newline, so a formula that happens to wrap mid-expression silently
  fails to render — it shows up as literal `$...$` text instead of math,
  with no build error. If a formula is long, either keep it on one line
  regardless of prose wrapping, or switch it to `$$block$$` (which does
  handle multi-line content fine).
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

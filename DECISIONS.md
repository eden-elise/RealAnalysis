# Decision Log

This file records the real decisions behind this repo's structure — what was
decided, why, what alternatives were considered, and where AI assistance
(Claude Code) was involved versus where the call was mine. Intent is
transparency: for future-me revisiting this in six months, and for anyone
else looking at a repo built partly with AI help.

Format: dated entries, oldest first, append-only (don't rewrite history here —
if a decision is later reversed, add a new entry that supersedes it and link
back).

How AI was used throughout: Claude proposed options with tradeoffs for every
structural/architecture decision (per the working agreement in
`PROJECT_BRIEF.md`); I picked between them, pushed back, and made the final
call. No theorem/definition/proof content has been AI-generated or will be —
that's written by me, page by page, in later phases.

---

## 2026-08-22 — Phase 1: Static site tooling — Eleventy (11ty)

**Decision:** Use Eleventy (11ty) as a static site generator, rather than
hand-rolling plain HTML/CSS/JS with no generator.

**Options considered:**
- **Eleventy (11ty)** — Markdown/HTML templates, no JS framework, build-time
  only, output is plain static HTML/CSS/JS.
- **Astro** — similar static-first philosophy, adds schema-validated content
  collections and optional JS "islands" for future interactive visuals.
- **Hand-rolled HTML/CSS/JS, no generator** — zero tooling, full manual
  control, matches existing skills exactly.
- **Manifest + vanilla JS** (raised as a middle ground) — plain HTML pages,
  no build step or npm dependency, but a small hand-written JS script builds
  the sidebar/breadcrumbs at page-load from a single JS/JSON manifest file.

**Why 11ty:** The core problem this site has isn't writing pages, it's
keeping a sidebar tree, breadcrumbs, and prerequisite cross-links in sync as
pages are added/reorganized, without them silently going stale. That's a
templating + data problem, which is what 11ty is for — a shared page layout
(written once) plus frontmatter-driven data (e.g. `prerequisites: [...]`)
that the nav is generated from automatically, instead of hand-edited in every
file. Fully hand-rolled works fine early on but the maintenance tax scales
badly with page count for a site whose whole point is an accurate dependency
structure.

**Concern raised and addressed:** worry about adding unnecessary
dependencies/bloat. Clarified that 11ty is build-time-only tooling — its own
dependency footprint is modest (markdown parser, template engine, dev
server), and it ships nothing to the browser; the build output is plain
static HTML indistinguishable at runtime from hand-rolled pages. Also
clarified a real misunderstanding: 11ty does not write or generate any
content — every theorem/definition/proof is still 100% authored by hand. All
11ty removes is repeated boilerplate (head/nav/footer markup) across pages,
by wrapping page content in a layout written once.

**Not chosen:** Astro — slightly more tooling/concepts (islands, content
collection config) for a benefit (interactive visual islands) not needed
until Phase 4, and not clearly worth it over 11ty for this project's size.
Docusaurus/VitePress were considered and ruled out without a full write-up —
both carry a strong "docs site" visual identity that fights the brief's goal
of a distinctive, non-generic look.

---

## 2026-08-22 — Phase 1: Folder structure and nav model

**Decision:** Organize content by **topic area** (one folder per area:
`axioms/`, `set-theory/`, `ordered-fields/`, `sequences/`, `continuity/`,
`differentiation/`, `integration/`, ...), rather than tier-numbered folders
(`01-foundations/`, `02-sequences/`, ...). Each page's own frontmatter (e.g.
`prerequisites: [...]`) is the source of truth for dependency order — nav,
breadcrumbs, and cross-links are generated from that data, not from folder
paths or hand-maintained lists.

**Why not tier-numbered folders:** dependency graphs aren't strictly linear.
A theorem can depend on things from two different "tiers" at once, which
breaks a folder scheme that tries to encode order via path. Topic-area
folders plus frontmatter-driven ordering handles that correctly.

**Navigation model:** combine three things rather than pick one —
1. A persistent sidebar tree (primary nav, grouped by topic folder).
2. A per-page prerequisite breadcrumb ("this depends on: X, Y"), generated
   from frontmatter.
3. A topic landing page per folder (that folder's own `index.html`), listing
   its pages in dependency order.

**Renaming/reorganizing topic folders later:** confirmed to be low-cost.
Nav/sidebar is built from frontmatter via an 11ty collection
(`.eleventy.js` → `notes` collection, consumed in
`src/_includes/partials/sidebar.html`), not from folder names, so
reorganizing folders never requires manually fixing nav. The one caveat:
11ty's default routing ties a page's URL to its folder path, so a folder
rename changes URLs under it. Not a concern yet since nothing is published
externally with inbound links; if that changes later, URLs can be decoupled
from folder paths via explicit `permalink` frontmatter.

---

## 2026-08-22 — Phase 1: Reference/chronological index page

**Decision:** Add a `reference/` section — one page listing every
definition and theorem in dependency order, statement only, no proofs. Meant
as a quick lookup of available building blocks while working a proof.

**Open item, deferred to Phase 2:** for this page to auto-generate cleanly,
each note page's statement needs to be extractable on its own (a dedicated
frontmatter field, vs. a marked section within the page content), separate
from intuition/proof/related-results. This will be settled as part of the
note-page template design in Phase 2, not decided yet.

---

## 2026-08-22 — Phase 2: Note-page template and frontmatter schema

**Decision:** locked the following frontmatter schema for every note page
(axiom/definition/theorem):

- `type`: `axiom` | `definition` | `theorem`.
- `kind` (theorem-type only, optional): `lemma` | `corollary` | `proposition`
  | `theorem` — display label only, all four share the same template shape.
- `id`: a stable short id, independent of file path/title. This is what
  `prerequisites` links point to, so pages/folders can be renamed or moved
  without breaking any cross-link — extends the same reasoning as the
  Phase 1 folder-renaming decision, but for individual pages.
- `title`: human-readable page title.
- `statement`: pulled into frontmatter (not left as page prose) specifically
  so the `reference/` index can list every statement without its proof —
  this resolves the open item flagged when `reference/` was scaffolded in
  Phase 1.
- `prerequisites`: array of other pages' `id`s. This is the **only**
  hand-authored relationship.

Everything else (Intuition, Proof) is ordinary markdown body content under
conventional headings (`## Intuition`, `## Proof`), not separate frontmatter
fields — axiom/definition pages simply omit `## Proof` by convention, since
there's nothing to prove; this isn't code-enforced.

**Cross-linking mechanism:** implemented in `.eleventy.js`'s `notes`
collection. Each page's `prerequisites` ids are resolved at build time to
real `{url, title}` links (`prerequisitesResolved`, rendered by
`partials/breadcrumb.html`). An id that doesn't match any page fails the
build immediately (verified: a bad id throws
`unknown prerequisite id "..."` and stops the build, rather than rendering a
dead link).

**"Related results" is computed, not authored:** rather than a `related:`
field a page's author would have to keep in sync by hand, it's the inverse
of the prerequisites graph — every page that lists this page as a
prerequisite — computed once across all pages (`usedByResolved`, rendered by
the new `partials/related.html`). Can't drift out of sync because there's
nothing to hand-maintain.

**Dependency ordering:** the `notes` collection returns pages via a
depth-first topological sort over `prerequisites` (with cycle detection —
throws on a circular dependency rather than infinite-looping). This is the
single source of ordering truth, consumed by the sidebar, `reference/`, and
eventually per-topic landing pages — no numbered filenames, nothing manually
reordered as pages are added.

Verified end-to-end with disposable test-fixture pages (an axiom + a
dependent lemma, deliberately not committed): correct dependency order,
correct breadcrumb/backlink resolution, and a confirmed build failure on an
unknown prerequisite id. Fixtures were deleted before committing; no test
content is in this repo.

---

## 2026-08-22 — Phase 2: Math rendering — KaTeX (build-time)

**Decision:** math is written inline as `$...$` / block as `$$...$$` in page
content (and in the `statement` frontmatter field, via a new `mathify`
filter), rendered to HTML at **build time** via KaTeX — not client-side, not
via CDN.

**Why build time over client-side/CDN:** produces genuinely static output
(no render flash, works without JS), matches the "static site" approach
already established for the rest of the stack, and avoids taking a runtime
dependency on a third-party CDN for a personal site that should keep working
if that CDN ever doesn't.

**Implementation:** `markdown-it` (explicit dependency, rather than relying
on Eleventy's internal copy) configured with the `markdown-it-texmath`
plugin and the `katex` renderer, set as Eleventy's markdown library via
`setLibrary("md", ...)`. KaTeX's CSS and font files are self-hosted (copied
from `node_modules/katex/dist` into `assets/vendor/katex/` at build time),
not loaded from a CDN.

**New dependencies installed:** `katex`, `markdown-it`,
`markdown-it-texmath` (dev dependencies). Flagging explicitly since these
weren't named one-by-one before installing — they're the standard mechanism
for "use KaTeX with Eleventy," which was already agreed; noting them here so
the choice is visible, not just assumed.

**Known cosmetic detail to revisit in Phase 3:** `markdown-it-texmath`
wraps its output in `<eq>` (inline) and `<eqn><section>` (block) tags, which
aren't real HTML5 elements — harmless today, but worth a look once real
theme CSS exists in case they need explicit `display` rules.

---

## 2026-08-22 — Meta: this decision log

**Decision:** Keep this file (`DECISIONS.md`) updated across every phase of
the project, not just Phase 1 — one entry per real decision, including
tradeoffs considered and the reasoning, and explicit notes on where AI
assistance was involved. Linked from `README.md`.

# Real Analysis Hub — Project Brief

## What this is
A personal, public GitHub repo that functions as a study/notes hub for real analysis
(and eventually possibly other math topics). It holds definitions, axioms, theorems,
and proofs, organized so the structure itself teaches the logical dependencies —
starting from axioms and basic building-block theorems, building up to more advanced
material. It should look clean and intentional, not like a dumped folder of markdown
files, and should include custom visuals that match the site's own theme (not stock
images).

This is a personal project I care about the craft of, not just the content. I want to
be involved in every structural and content decision — this brief exists so you don't
have to guess at those decisions or fill them in on your own.

## How I want you to work with me (read this first)
- **Do not generate or import any theorem, definition, or proof content yet.**
  Structure and tooling come first. Content comes later, page by page, with me
  actively writing/reviewing it.
- Work in **phases** (below). At the end of each phase, stop and show me what you
  did/propose, and wait for my explicit go-ahead before starting the next phase.
- Where there's a real design or architecture decision (e.g. static site generator
  choice, folder taxonomy, visual approach), **present me 2-3 options with
  tradeoffs** rather than silently picking one for me.
- Ask before installing any new dependency or tool I haven't already agreed to.

## Phase 1 — Stack & scaffolding decision
Help me decide (don't just assume):
- Static site generator vs. hand-rolled HTML/CSS/JS vs. something else. I've used
  plain HTML/CSS/JS/DOM manipulation before (comfortable there), no strong framework
  experience. Considerations: ease of adding new "note pages" over time, how well it
  supports a sidebar/tree-style navigation, how well custom SVG or embedded video
  visuals can be dropped in and still respect global theme variables (colors, fonts).
- Propose a **repo folder structure** that mirrors the *logical* structure of the
  content, not just a flat `/notes` dump. For example, something like separating
  axioms, definitions, theorems-by-dependency-tier, and proofs, so the file tree
  itself reflects "foundational -> builds on -> advanced."
- Propose the **navigation model** for the site: e.g. sidebar tree, breadcrumb of
  "this theorem depends on X, Y," a dedicated landing page per major topic area.
- Set up `.gitignore` (I already have a plan for this — Node-based if we go that
  route) and a starter `README.md` explaining the repo's purpose and structure for
  future-me and any visitors.

Stop here and show me the proposed structure before creating any pages.

## Phase 2 — Content architecture (no content yet, just shape)
- A **dedicated "Axioms" page/section** — foundational assumptions, nothing else.
- A **dependency-ordered structure** for theorems/definitions: basic building blocks
  first (e.g. ordered field properties, basic set theory) building toward more
  complex results (e.g. epsilon-N convergence, compactness, etc.).
- Each "note page" should follow a **consistent template**: e.g. statement,
  intuition/notes, proof, related results, prerequisites. Propose this template to
  me before we lock it in.
- Figure out how cross-linking should work (e.g. a theorem page linking back to the
  definitions/axioms it depends on).

Stop here and show me the template and taxonomy before building any real pages.

## Phase 3 — Visual theming
- Propose a clean, cohesive visual theme (color palette, typography, spacing) that
  I can react to — not a generic default template look. I want this to feel
  intentional and "mine."
- Set up the theme as reusable variables (CSS custom properties or the site
  generator's equivalent) so every page and visual pulls from the same source.

## Phase 4 — Custom visuals
I want diagrams/visuals that are custom-made and match the site theme — not stock
photos. Two directions to weigh with me (present tradeoffs, don't just pick one):
- **Manim** (Python, used for 3Blue1Brown-style animations): great for animated
  explanations (e.g. epsilon-N convergence visualized), but renders to a fixed
  video/GIF whose colors need to be manually matched to the site theme and won't
  auto-update if the theme changes later.
- **Hand-authored SVG / lightweight JS (e.g. D3 or plain Canvas)**: can pull colors
  directly from the site's CSS variables so they always match theme automatically,
  including if I add dark mode later. Better for static diagrams; more setup for
  complex animations.
- We can likely use both: Manim for a few animated concept explainers, SVG/CSS for
  everything else. Propose a plan.

## Phase 5 — Documentation
- A clear `README.md` (repo purpose, structure explanation, how to add a new note
  page following the template).
- A `CONTRIBUTING.md`-style doc for **future me**, documenting the taxonomy/decision
  rules so I don't drift from the structure six months from now.

## Only after all phases above are approved
We start actually writing/importing definitions, theorems, and proofs — page by
page, together, not in bulk.
# CLAUDE.md

This repo is a personal real analysis notes/study hub. Full project scope,
phasing, and rules of engagement are in `PROJECT_BRIEF.md` at the repo root —
**read that file in full before doing anything else in this repo.**

Key things to hold onto across every session:

- Work in the phases defined in `PROJECT_BRIEF.md`. Stop at the end of each
  phase and wait for explicit approval before starting the next one.
- Do **not** generate, import, or write any theorem/definition/proof content
  until I've approved the structure, taxonomy, and page template in Phase 2.
- When there's a real design or architecture decision to make, present 2-3
  options with tradeoffs instead of picking one silently.
- Ask before adding any new dependency or tool not already agreed on.
- If this is a new session and `PROJECT_BRIEF.md` shows prior phases already
  completed, don't redo them — pick up from the current phase.
- Any image/video dropped into a `.figure` block (the margin-column visual
  pattern from Phase 3, for diagrams alongside notes/proofs) must be
  performance-conscious: `loading="lazy"` and `decoding="async"` on `<img>`,
  explicit `width`/`height` (or `aspect-ratio`) so it doesn't shift layout
  while loading, sized close to the figure column's actual display width
  (~16rem — roughly 500–600px source width covers retina) rather than
  dropping in oversized originals, and inline SVG preferred over raster
  when the visual is simple enough to be one. Any video (e.g. Manim
  renders, Phase 4) uses `preload="metadata"`, not `auto`.
- Custom visuals (Phase 4) default to hand-authored **inline** SVG/JS —
  written directly in the note's `.figure` block, not linked as an external
  `.svg`/`.png` — so colors can reference the theme's CSS custom properties
  (`fill="var(--accent)"`, etc.) and stay theme-reactive automatically,
  including if dark mode is added later. Simple animation is plain CSS
  `@keyframes`/`transition`; anything interactive (sliders, live-updating
  diagrams) is plain vanilla JS scoped to that figure — no framework, no
  bundler, matching the rest of the stack. Do **not** install Manim or its
  toolchain (Python, ffmpeg, a LaTeX distribution) as standing
  infrastructure — it's a deliberate, case-by-case tool for a specific
  concept that genuinely needs a complex choreographed animation hand-SVG
  can't reasonably do well, decided visual by visual once real content
  exists, not set up in advance. See DECISIONS.md for the full reasoning.
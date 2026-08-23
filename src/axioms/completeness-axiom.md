---
layout: note-layout.html
type: axiom
id: completeness-axiom
title: Completeness Axiom
statement: "Every nonempty $S \\subseteq \\mathbb{R}$ that is bounded above has a supremum in $\\mathbb{R}$."
prerequisites:
  - bounds-suprema
---
## Intuition

This is the one axiom that actually earns $\mathbb{R}$ its name. Every
example built up on the field axioms and order axioms worked just as
well for $\mathbb{Q}$ — $\mathbb{Q}$ is an ordered field too, satisfying
every axiom seen so far. What $\mathbb{Q}$ *doesn't* have is this: the set
$S = \{x \in \mathbb{Q} : x^2 < 2\}$ is nonempty and bounded above (by $2$,
say), but has no least upper bound *in $\mathbb{Q}$*. There's a hole where
$\sqrt{2}$ should be. The completeness axiom is exactly the assertion that
$\mathbb{R}$ has no such holes: every nonempty set that's bounded above is
actually bounded by *some real number as tightly as possible* — a
supremum that exists, not just a definition that might go unsatisfied.

This is also called the **least upper bound axiom**, or $\mathbb{R}$ is
said to be **Dedekind complete** — different names for the same statement.
It's genuinely an axiom, not a theorem: nothing about field axioms or order
axioms forces it, since $\mathbb{Q}$ is a live counterexample satisfying
both while failing this. It has to be assumed outright, and doing so is
what finally pins down $\mathbb{R}$ — everything that separates real
analysis from "algebra with an order relation" (convergence, continuity,
the intermediate value theorem) ultimately traces back to this one axiom.

**Only "bounded above" is assumed — infima come along for free.** It might
look like a second axiom is needed for the dual statement ("every nonempty
set bounded below has an infimum"), but it isn't: given $S$ bounded below,
the reflected set $-S = \{-x : x \in S\}$ is bounded above, so it has a
supremum by this axiom, and $-\sup(-S)$ turns out to be exactly the
infimum of $S$. So the greatest-lower-bound property isn't a separate
assumption — it's a short argument away from this one.

Nothing about *how large* a bounded set's supremum is, or how to compute
it, is part of the axiom — only that it exists. That existence guarantee,
with no construction attached, is what later lets sequences, limits, and
convergence arguments assume a supremum is there to work with, without
having to build one by hand every time.

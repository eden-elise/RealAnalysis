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

<figure class="figure"><svg viewBox="0 0 260 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two number lines comparing the rationals, which have a gap at the square root of 2, to the reals, which do not"><line x1="30" y1="40" x2="240" y2="40" stroke="var(--line)" stroke-width="1.5"/><text x="15" y="44" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#8474;</text><circle cx="85" cy="40" r="2.5" fill="var(--accent)"/><circle cx="105" cy="40" r="2.5" fill="var(--accent)"/><circle cx="120" cy="40" r="2.5" fill="var(--accent)"/><circle cx="132" cy="40" r="2.5" fill="var(--accent)"/><circle cx="141" cy="40" r="2.5" fill="var(--accent)"/><circle cx="147" cy="40" r="2.5" fill="var(--accent)"/><circle cx="158" cy="40" r="6" fill="var(--paper)" stroke="var(--ink-muted)" stroke-width="1.5" stroke-dasharray="2,2"/><text x="158" y="22" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">no sup in &#8474;</text><line x1="158" y1="48" x2="158" y2="122" stroke="var(--line)" stroke-width="1" stroke-dasharray="3,3"/><line x1="30" y1="130" x2="240" y2="130" stroke="var(--line)" stroke-width="1.5"/><text x="15" y="134" text-anchor="end" font-size="11" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#8477;</text><circle cx="85" cy="130" r="2.5" fill="var(--accent)" opacity="0.6"/><circle cx="105" cy="130" r="2.5" fill="var(--accent)" opacity="0.6"/><circle cx="120" cy="130" r="2.5" fill="var(--accent)" opacity="0.6"/><circle cx="132" cy="130" r="2.5" fill="var(--accent)" opacity="0.6"/><circle cx="141" cy="130" r="2.5" fill="var(--accent)" opacity="0.6"/><circle cx="147" cy="130" r="2.5" fill="var(--accent)" opacity="0.6"/><circle cx="158" cy="130" r="6" fill="var(--accent-strong)" stroke="var(--paper)" stroke-width="1.5"/><text x="158" y="152" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">sup S = &#8730;2</text></svg><figcaption>S = {x &#8712; &#8474; : x&#178; &lt; 2}, bounded above by 2. No rational number is its least upper bound, but sup S = &#8730;2 exists in &#8477;.</figcaption></figure>

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

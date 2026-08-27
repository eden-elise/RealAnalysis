---
layout: note-layout.html
type: theorem
id: archimedean-property
title: Archimedean Property
statement: "For every $x \\in \\mathbb{R}$, there exists $n \\in \\mathbb{N}$ such that $n > x$."
prerequisites:
  - completeness-axiom
  - peano-axioms
---
## Intuition

The natural numbers march off to infinity within $\mathbb{R}$ itself — no
real number, however large, is an upper bound for $\mathbb{N}$.
Equivalently: $\mathbb{N}$ is not bounded above in $\mathbb{R}$.

<figure class="figure"><svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing the natural numbers 1, 2, 3, 4 marching past an arbitrary real x"><line x1="15" y1="55" x2="245" y2="55" stroke="var(--line)" stroke-width="1.5"/><circle cx="40" cy="55" r="3" fill="var(--accent)"/><circle cx="80" cy="55" r="3" fill="var(--accent)"/><circle cx="120" cy="55" r="3" fill="var(--accent)"/><text x="40" y="45" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">1</text><text x="80" y="45" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">2</text><text x="120" y="45" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">3</text><circle cx="160" cy="55" r="4" fill="var(--paper)" stroke="var(--ink-muted)" stroke-width="1.5" stroke-dasharray="2,2"/><text x="160" y="75" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">x</text><circle cx="205" cy="55" r="4" fill="var(--accent-strong)"/><text x="205" y="45" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">n</text></svg><figcaption>Whatever real x is fixed, some natural number n eventually exceeds it &mdash; N has no ceiling in R.</figcaption></figure>

That might look too obvious to need proving, but it isn't free — it
genuinely uses completeness. Nothing about the field or order axioms
alone forces it: there exist ordered fields with "infinite" elements that
sit above every natural number, so being an ordered field is not enough
to rule this out. Completeness is what closes the gap for $\mathbb{R}$
specifically.

## Proof

Suppose not. Then $\mathbb{N}$ is bounded above (some $x \in \mathbb{R}$
satisfies $n \leq x$ for every $n \in \mathbb{N}$), so by the
completeness axiom $s = \sup \mathbb{N}$ exists.

Since $s$ is the *least* upper bound of $\mathbb{N}$, $s - 1$, being
smaller than $s$, is not an upper bound of $\mathbb{N}$. So there exists
$m \in \mathbb{N}$ with $m > s - 1$, i.e. $m + 1 > s$.

But $m + 1 \in \mathbb{N}$ (closure of $\mathbb{N}$ under the successor
$n \mapsto n + 1$), so $m + 1 > s$ contradicts $s$ being an upper bound of
$\mathbb{N}$.

So $\mathbb{N}$ is not bounded above: for every $x \in \mathbb{R}$, there
is some $n \in \mathbb{N}$ with $n > x$. $\qquad\blacksquare$

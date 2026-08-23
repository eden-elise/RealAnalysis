---
layout: note-layout.html
type: theorem
id: absolute-value-bound
title: Absolute Value Bound
statement: "For $a \\geq 0$ and $x \\in \\mathbb{R}$, $|x| \\leq a$ if and only if $-a \\leq x \\leq a$."
prerequisites:
  - field-axioms
  - order-axioms
  - absolute-value
---
## Intuition

Geometrically, [$|x|$](/ordered-fields/absolute-value/) is $x$'s distance
from $0$, so "$|x| \leq a$" says $x$ sits within distance
$a$ of $0$ — which is exactly the interval $[-a, a]$. This theorem is the
algebraic translation of that picture: it converts a single
absolute-value inequality into a pair of ordinary ones that the order
axioms can act on directly, which is why it gets cited constantly (the
[triangle inequality](/ordered-fields/triangle-inequality/)'s proof
leans on it twice).

<figure class="figure"><svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing that the interval from negative a to a is exactly the set of points within distance a of 0, with a point x marked inside it"><line x1="20" y1="60" x2="240" y2="60" stroke="var(--line)" stroke-width="1.5"/><rect x="80" y="52" width="100" height="16" fill="var(--accent-soft)"/><circle cx="80" cy="60" r="5" fill="var(--paper)" stroke="var(--accent)" stroke-width="2"/><circle cx="180" cy="60" r="5" fill="var(--paper)" stroke="var(--accent)" stroke-width="2"/><circle cx="150" cy="60" r="4" fill="var(--accent-strong)"/><line x1="130" y1="60" x2="130" y2="74" stroke="var(--ink-muted)" stroke-width="1" stroke-dasharray="2,2"/><text x="80" y="82" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">-a</text><text x="180" y="82" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">a</text><text x="130" y="94" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">0</text><text x="150" y="46" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">x</text></svg><figcaption>|x| &#8804; a says exactly that x lands in the shaded interval [-a, a] &mdash; within distance a of 0 in either direction.</figcaption></figure>

## Proof

($\implies$) Suppose $|x| \leq a$. By cases on the sign of $x$:

- If $x \geq 0$: $|x| = x$, so $x \leq a$. Also $a \geq 0$ gives
  $-a \leq 0 \leq x$. So $-a \leq x \leq a$.
- If $x < 0$: $|x| = -x$, so $-x \leq a$, i.e. $x \geq -a$
  (compatibility with multiplication by $-1$). Also $x < 0 \leq a$. So
  $-a \leq x \leq a$.

Either way, $-a \leq x \leq a$.

($\impliedby$) Suppose $-a \leq x \leq a$. By cases on the sign of $x$:

- If $x \geq 0$: $|x| = x \leq a$, directly from the right-hand
  inequality.
- If $x < 0$: $|x| = -x$. The left-hand inequality $-a \leq x$ gives
  $-x \leq a$ (multiplying by $-1$ again), i.e. $|x| \leq a$.

Either way, $|x| \leq a$. $\qquad\blacksquare$

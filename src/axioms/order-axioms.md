---
layout: note-layout.html
type: axiom
id: order-axioms
title: Order Axioms
statement: "$\\mathbb{R}$ carries a relation $<$ making it an ordered field: for all $a, b, c \\in \\mathbb{R}$, exactly one of $a < b$, $a = b$, or $b < a$ holds (trichotomy); $a < b$ and $b < c$ together imply $a < c$ (transitivity); $a < b$ implies $a + c < b + c$ for every $c$ (compatibility with addition); and $a < b$ together with $c > 0$ imply $ac < bc$ (compatibility with multiplication)."
prerequisites:
  - field-axioms
---
## Intuition

A relation on a set is a **total order** (also called a *linear order*) when
any two elements of the set are comparable — nothing is left "off to the
side," unrelated to everything else — and that comparison is transitive.
Concretely, a relation $<$ on a set $S$ is a total order when it satisfies
*trichotomy* (for any $a, b \in S$, exactly one of $a < b$, $a = b$, $b < a$
holds) and *transitivity* ($a < b$ and $b < c$ imply $a < c$). This is a
general notion — it has nothing to do with real numbers specifically, and
plenty of familiar orderings satisfy it (alphabetical order on words,
$\subseteq$ restricted to a chain of nested sets) while others don't
(divisibility on $\mathbb{Z}$ isn't total: $2$ and $3$ are simply
incomparable, neither divides the other).

The order axioms assert two things at once: first, that $<$ is a total
order on $\mathbb{R}$ (trichotomy + transitivity); second, that this order
actually respects the field structure (the field axioms) rather than
being some unrelated relation bolted on top. That second part is what the
compatibility axioms buy you — without them, $<$ could be a perfectly good
total order that says nothing about how inequalities interact with $+$ and
$\cdot$, and none of the algebraic manipulation of inequalities used
constantly in analysis (adding the same thing to both sides, multiplying
through by a positive constant) would be justified.

- *Trichotomy:* for every $a, b \in \mathbb{R}$, exactly one of $a < b$,
  $a = b$, or $b < a$ holds
- *Transitivity:* $a < b$ and $b < c$ imply $a < c$
- *Compatibility with addition:* $a < b$ implies $a + c < b + c$, for every
  $c$
- *Compatibility with multiplication:* $a < b$ and $c > 0$ imply $ac < bc$

Everything else about inequalities — $a \leq b$ meaning $a < b$ or $a = b$,
$a > b$ meaning $b < a$, multiplying an inequality by a *negative* number
flipping it — is notation and derivable consequence, not additional axioms.
For instance, multiplying by a negative flips the inequality precisely
*because* of compatibility with multiplication applied to $-c > 0$, not
because of some separate rule.

As with the field axioms, $\mathbb{Q}$ satisfies every one of these order
axioms too — $\mathbb{Q}$ is just as much an ordered field as $\mathbb{R}$
is. So even field axioms *and* order axioms together still aren't enough to
pin down the real numbers: $\mathbb{Q}$ has "gaps" (no rational square root
of $2$, for instance) that nothing said so far rules out. Closing those
gaps is the entire job of the completeness axiom still to come.

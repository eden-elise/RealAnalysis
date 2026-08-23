---
layout: note-layout.html
type: definition
id: bounds-suprema
title: Bounds and Suprema
statement: "For nonempty $S \\subseteq \\mathbb{R}$, $b \\in \\mathbb{R}$ is an upper bound of $S$ if $x \\leq b$ for every $x \\in S$, and a lower bound if $x \\geq b$ for every $x \\in S$; $S$ is bounded above (resp. below) if such a $b$ exists, and bounded if it's both. The supremum $\\sup S$ is the least upper bound of $S$ — an upper bound that is $\\leq$ every other upper bound of $S$. The infimum $\\inf S$ is the greatest lower bound, defined dually."
prerequisites:
  - order-axioms
---
## Intuition

An upper bound is just a "fence" that no element of $S$ gets past: $b$
works as an upper bound as long as nothing in $S$ exceeds it, whether or
not $b$ itself is in $S$. That means a set with *one* upper bound has
infinitely many — if $b$ is an upper bound, so is $b + 1$, $b + 100$, or
any $b' \geq b$. The supremum singles out the *tightest* fence: the least
upper bound, the one upper bound that sits at or below every other upper
bound.

**Upper bounds and suprema**

- *Upper bound:* $b$ is an upper bound of $S$ if $x \leq b$ for every
  $x \in S$
- *Bounded above:* $S$ is bounded above if at least one upper bound exists
- *Supremum:* $\sup S$ is an upper bound of $S$ satisfying
  $\sup S \leq b$ for every other upper bound $b$ of $S$

**Lower bounds and infima**

- *Lower bound:* $b$ is a lower bound of $S$ if $x \geq b$ for every
  $x \in S$
- *Bounded below:* $S$ is bounded below if at least one lower bound exists
- *Infimum:* $\inf S$ is a lower bound of $S$ satisfying
  $\inf S \geq b$ for every other lower bound $b$ of $S$

$S$ is simply called **bounded** when it's bounded both above and below.

**Supremum vs. maximum.** These are easy to conflate but aren't the same
thing. A maximum has to actually belong to $S$; a supremum doesn't. Take
$S = (0, 1)$: every $b \geq 1$ is an upper bound, $1$ is the least of them,
so $\sup S = 1$ — but $1 \notin S$, so $S$ has no maximum at all. Compare
$S = (0, 1]$, where $\sup S = 1$ too, except now $1 \in S$, so it's also
the maximum. Whenever a maximum does exist, it necessarily equals the
supremum (it's an upper bound, by definition of maximum, and no upper
bound can be smaller than an element already in the set) — but a supremum
demands far less, which is exactly why it's the more broadly useful notion
once sets stop having tidy endpoints. Everything here has a mirror image
for minimum and infimum.

**Uniqueness.** A set can only have one supremum. If $b_1$ and $b_2$ were
both least upper bounds of $S$, each is in particular *an* upper bound, so
the other's leastness gives $b_1 \leq b_2$ and $b_2 \leq b_1$ — by
trichotomy, $b_1 = b_2$. So "the" supremum is never ambiguous, whenever one
exists.

That last qualifier is deliberate: nothing above claims a bounded set
*has* a supremum, only says what one would have to look like if it
existed. $S = \{x \in \mathbb{Q} : x^2 < 2\}$ is bounded above in
$\mathbb{Q}$ — by $2$, for instance — but no rational number is its least
upper bound; $\sqrt{2}$ would be, and it isn't rational. Whether every
bounded-above subset of $\mathbb{R}$ specifically is guaranteed a supremum
is precisely what the completeness axiom settles next.

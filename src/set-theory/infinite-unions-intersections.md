---
layout: note-layout.html
type: definition
id: infinite-unions-intersections
title: Infinite Unions and Intersections
statement:
  - "For an indexed family of sets $\\{A_\\alpha\\}_{\\alpha \\in \\Lambda}$ (with $\\Lambda$ any index set, possibly infinite):"
  - "$\\bigcup_{\\alpha \\in \\Lambda} A_\\alpha = \\{x : x \\in A_\\alpha \\text{ for some } \\alpha \\in \\Lambda\\}$."
  - "$\\bigcap_{\\alpha \\in \\Lambda} A_\\alpha = \\{x : x \\in A_\\alpha \\text{ for every } \\alpha \\in \\Lambda\\}$."
---
## Intuition

Ordinary union and intersection combine two sets at a time: $A \cup B$,
$A \cap B$. An **indexed family** $\{A_\alpha\}_{\alpha \in \Lambda}$
generalizes this to combining as many sets as the index set $\Lambda$ has
members — finitely many ($\Lambda = \{1, \ldots, n\}$), countably many
($\Lambda = \mathbb{N}$), or more. The definitions read exactly like the
finite case: $x$ belongs to the union if it's in *at least one* of the
sets, and to the intersection if it's in *all* of them — "some" and
"every" simply range over a possibly infinite index set instead of a
finite one.

**Notation.** For $A \subseteq X$, write $A^c = X \setminus A = \{x \in X : x \notin A\}$ for the complement of $A$ relative to an
ambient set $X$ — used constantly alongside indexed unions and
intersections (see [De Morgan's Laws](/set-theory/de-morgans-laws/)).

Allowing $\Lambda$ to be infinite isn't just bookkeeping — it lets
genuinely new behavior show up that no finite union or intersection can
produce.

<figure class="figure"><svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nested open intervals (0,1), (0,1/2), (0,1/3), shrinking toward 0 but never containing it, illustrating that their intersection is empty"><line x1="40" y1="15" x2="40" y2="115" stroke="var(--ink-muted)" stroke-width="1" stroke-dasharray="2,2"/><line x1="40" y1="30" x2="220" y2="30" stroke="var(--accent)" stroke-width="3"/><circle cx="40" cy="30" r="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><circle cx="220" cy="30" r="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><text x="230" y="34" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">(0,1)</text><line x1="40" y1="55" x2="150" y2="55" stroke="var(--accent)" stroke-width="3"/><circle cx="40" cy="55" r="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><circle cx="150" cy="55" r="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><text x="160" y="59" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">(0,1/2)</text><line x1="40" y1="80" x2="110" y2="80" stroke="var(--accent)" stroke-width="3"/><circle cx="40" cy="80" r="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><circle cx="110" cy="80" r="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><text x="120" y="84" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">(0,1/3)</text><text x="40" y="103" text-anchor="middle" font-size="12" fill="var(--ink-muted)" style="font-family:var(--font-mono)">&#8942;</text><text x="40" y="132" text-anchor="middle" font-size="10" fill="var(--accent-strong)" font-weight="600" style="font-family:var(--font-mono)">0</text></svg><figcaption>Each interval is nonempty, but 0 is excluded from every one (open endpoint), and nothing else survives all of them as n grows &mdash; the intersection over all n is empty.</figcaption></figure>

No *finite* intersection of these sets loses its "nonempty" property:
$(0,1) \cap (0, \tfrac{1}{2}) \cap \cdots \cap (0, \tfrac{1}{n}) = (0, \tfrac{1}{n})$ is still a nonempty interval, for every $n$. But
letting $n$ range over *all* of $\mathbb{N}$ at once leaves nothing
standing: given any $x > 0$, choosing $n$ large enough makes
$\tfrac{1}{n} < x$, so $x$ fails to belong to $(0, \tfrac{1}{n})$ — and
$x \leq 0$ was never in any of them to begin with. So

$$
\bigcap_{n=1}^{\infty} \left(0, \frac{1}{n}\right) = \varnothing,
$$

even though every set in the family, and every finite intersection of
them, is nonempty. This gap between "true for every finite case" and
"true in the infinite limit" is exactly the sort of thing induction
(finite, one step at a time) can't reach directly, and has to be handled
head-on. It also turns out to hinge on the intervals being *open* — the
[Nested Interval Property](/ordered-fields/nested-interval-property/)
shows the analogous intersection of *closed* nested intervals is never
empty.

---
layout: note-layout.html
type: theorem
id: nested-interval-property
title: Nested Interval Property
statement: "For each $n \\in \\mathbb{N}$, let $I_n = [a_n, b_n]$ be a nonempty closed bounded interval, with $I_1 \\supseteq I_2 \\supseteq I_3 \\supseteq \\cdots$; then $\\bigcap_{n=1}^{\\infty} I_n \\neq \\varnothing$."
prerequisites:
  - completeness-axiom
  - infinite-unions-intersections
---
## Intuition

Picture closed intervals nested one inside the next —
$[a_1, b_1] \supseteq [a_2, b_2] \supseteq \cdots$ — like Russian dolls,
or a search window that only ever tightens. Because each interval is
nonempty, closed (it contains its own endpoints), and sits inside every
earlier one, some point ought to survive being trapped in *every* one of
them, no matter how far out $n$ goes. That survival is exactly what
completeness buys: nothing about being an ordered field forces it — it's
specifically the guarantee that suprema exist that pins a common point
down.

<figure class="figure"><svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nested closed intervals shrinking toward a common point s that lies in all of them"><line x1="30" y1="30" x2="230" y2="30" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/><text x="20" y="34" text-anchor="end" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">I&#8321;</text><line x1="70" y1="55" x2="190" y2="55" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/><text x="60" y="59" text-anchor="end" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">I&#8322;</text><line x1="100" y1="80" x2="160" y2="80" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/><text x="90" y="84" text-anchor="end" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">I&#8323;</text><text x="130" y="100" text-anchor="middle" font-size="12" fill="var(--ink-muted)" style="font-family:var(--font-mono)">&#8942;</text><line x1="130" y1="20" x2="130" y2="115" stroke="var(--ink-muted)" stroke-width="1" stroke-dasharray="2,2"/><circle cx="130" cy="115" r="4" fill="var(--accent-strong)"/><text x="130" y="128" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">s</text></svg><figcaption>Each closed interval sits inside the last; completeness guarantees a point s inside all of them at once.</figcaption></figure>

Contrast the shrinking-to-empty example from
[Infinite Unions and Intersections](/set-theory/infinite-unions-intersections/):
$\bigcap_{n=1}^{\infty} (0, \tfrac{1}{n}) = \varnothing$. That failure
happens precisely because those intervals aren't closed — the one point
that would naturally survive, $0$, is excluded from every one of them by
the open endpoint. Closedness is doing real work here.

## Proof

Let $s = \sup\{a_n : n \in \mathbb{N}\}$. This set is nonempty ($a_1$
belongs to it) and bounded above (by $b_1$: for every $n$, $I_n \subseteq I_1$ gives $a_n \leq b_n \leq b_1$), so $s$ exists by the completeness
axiom.

**Claim:** $a_n \leq s \leq b_n$ for every $n \in \mathbb{N}$, i.e.
$s \in I_n$ for every $n$.

Fix $n \in \mathbb{N}$. Since $s$ is an upper bound of $\{a_m : m \in \mathbb{N}\}$, in particular $a_n \leq s$.

For the other inequality, fix any $m \in \mathbb{N}$. If $m \leq n$, then
$I_n \subseteq I_m$ gives $a_m \leq a_n \leq b_n$. If $m > n$, then
$I_m \subseteq I_n$ gives $a_m \leq b_m \leq b_n$. Either way,
$a_m \leq b_n$ — so $b_n$ is an upper bound of $\{a_m : m \in \mathbb{N}\}$, and since $s$ is the *least* such upper bound, $s \leq b_n$.

So $a_n \leq s \leq b_n$, i.e. $s \in I_n$. Since $n$ was arbitrary,
$s \in I_n$ for every $n \in \mathbb{N}$, so

$$
s \in \bigcap_{n=1}^{\infty} I_n,
$$

and in particular this intersection is nonempty. $\qquad\blacksquare$

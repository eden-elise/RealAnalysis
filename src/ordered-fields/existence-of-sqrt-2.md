---
layout: note-layout.html
type: theorem
id: existence-of-sqrt-2
title: Existence of √2
statement: "There exists $s \\in \\mathbb{R}$ with $s > 0$ and $s^2 = 2$ — this $s$ is denoted $\\sqrt{2}$."
prerequisites:
  - completeness-axiom
  - field-axioms
  - archimedean-property
  - nested-interval-property
---
## Intuition

This is the payoff of the completeness axiom's own motivating example.
That page introduced $S = \{x \in \mathbb{Q} : x^2 < 2\}$ specifically to
show $\mathbb{Q}$ has no least upper bound for it — a hole where
$\sqrt{2}$ should be. Here, the analogous set is built over $\mathbb{R}$
instead, and completeness now *guarantees* a supremum exists; the real
work is showing that supremum's square is exactly $2$, not just close to
it. (That this $s$ is irrational — genuinely outside $\mathbb{Q}$ — is
proved separately, by contradiction, on the
[Proof Techniques](/logic-and-proof/proof-techniques/) page.)

## Proof

Let $S = \{x \in \mathbb{R} : x > 0 \text{ and } x^2 < 2\}$.

$S$ is nonempty: $1 \in S$, since $1^2 = 1 < 2$.

$S$ is bounded above, by $2$: if $x > 2$ then $x^2 > 4 > 2$ (squaring
preserves order for positive reals), so $x \notin S$; hence every element
of $S$ is $\leq 2$.

By the completeness axiom, $s = \sup S$ exists, and $s \geq 1 > 0$ (since
$1 \in S$).

**Claim:** $s^2 = 2$. Suppose not — then $s^2 < 2$ or $s^2 > 2$; both
lead to a contradiction.

*Case $s^2 < 2$.* Let $\varepsilon = 2 - s^2 > 0$, and choose
$h = \min\left(\dfrac{1}{2},\ \dfrac{\varepsilon}{2(2s+1)}\right) > 0$, so
$h < 1$ and $h(2s+1) \leq \dfrac{\varepsilon}{2} < \varepsilon$. Then

$$
(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < s^2 + \varepsilon = 2
$$

(using $h^2 < h$, since $0 < h < 1$). So $s + h \in S$, but $s + h > s$,
contradicting $s$ being an upper bound of $S$.

*Case $s^2 > 2$.* Let $\varepsilon = s^2 - 2 > 0$, and choose
$h = \min\left(\dfrac{s}{2},\ \dfrac{\varepsilon}{2s}\right) > 0$, so
$h < s$ (hence $s - h > 0$) and $2sh \leq \varepsilon$. Then

$$
(s-h)^2 = s^2 - 2sh + h^2 > s^2 - 2sh \geq s^2 - \varepsilon = 2
$$

(using $h^2 > 0$ strictly). For any $x \in S$, $x^2 < 2 < (s-h)^2$ with
$x, s-h > 0$, so $x < s - h$ (squaring preserves order for positive
reals). So $s - h$ is an upper bound of $S$ smaller than $s$, contradicting
$s$ being the *least* upper bound of $S$.

Since both cases are impossible, $s^2 = 2$. $\qquad\blacksquare$

**Alternate proof, via the Nested Interval Property.** Bisection gives a
second route to the same conclusion, worth sketching since it puts the
Nested Interval Property to use.

Build nested intervals $[a_n, b_n] \subseteq [1, 2]$ by bisection: start
with $a_1 = 1$, $b_1 = 2$ (so $a_1^2 < 2 < b_1^2$), and given $[a_n, b_n]$
with $a_n^2 < 2 < b_n^2$, let $c_n = \frac{a_n + b_n}{2}$ and set

$$
[a_{n+1}, b_{n+1}] =
\begin{cases}
[c_n, b_n] & c_n^2 < 2 \\
[a_n, c_n] & c_n^2 > 2
\end{cases}
$$

(if ever $c_n^2 = 2$, that $c_n$ already is the square root sought, and
there is nothing left to prove). Each step preserves $a_n^2 < 2 < b_n^2$
by construction, and halves the width: $b_n - a_n = 2^{-(n-1)}$.

By the
[Nested Interval Property](/ordered-fields/nested-interval-property/),
some $s$ lies in every $[a_n, b_n]$, so $a_n \leq s \leq b_n$ for all $n$.
Since squaring preserves order on nonnegatives, $a_n^2 \leq s^2 \leq b_n^2$ too — and since $2$ also sits in $(a_n^2, b_n^2)$ for every $n$,

$$
|s^2 - 2| \leq b_n^2 - a_n^2 = (b_n - a_n)(b_n + a_n) \leq 4 \cdot 2^{-(n-1)}
$$

for every $n \in \mathbb{N}$ (using $a_n, b_n \in [1,2]$, so
$a_n + b_n \leq 4$). By the Archimedean property, the right side can be
made smaller than any $\varepsilon > 0$ by taking $n$ large enough, so
$|s^2 - 2| < \varepsilon$ for every $\varepsilon > 0$ — which forces
$s^2 - 2 = 0$. $\qquad\blacksquare$

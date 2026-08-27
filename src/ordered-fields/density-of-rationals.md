---
layout: note-layout.html
type: theorem
id: density-of-rationals
title: Density of the Rationals
statement: "For all $a, b \\in \\mathbb{R}$ with $a < b$, there exists $q \\in \\mathbb{Q}$ with $a < q < b$."
prerequisites:
  - archimedean-property
---
## Intuition

Between any two distinct real numbers, no matter how close together, sits
a rational number — $\mathbb{Q}$ leaves no gap wide enough to cross
without hitting one. This doesn't contradict $\mathbb{Q}$ having genuine
holes (that's the entire content of the completeness axiom's motivating
example, $S = \{x \in \mathbb{Q} : x^2 < 2\}$): a set can be riddled with
missing points and still have a rational arbitrarily close to any given
real. Density is about closeness, not about filling in every gap.

<figure class="figure"><svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing a and b with a rational q found strictly between them" ><line x1="15" y1="55" x2="245" y2="55" stroke="var(--line)" stroke-width="1.5"/><circle cx="70" cy="55" r="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/><text x="70" y="75" text-anchor="middle" font-size="10" fill="var(--ink)" style="font-family:var(--font-mono)">a</text><circle cx="190" cy="55" r="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/><text x="190" y="75" text-anchor="middle" font-size="10" fill="var(--ink)" style="font-family:var(--font-mono)">b</text><circle cx="130" cy="55" r="4" fill="var(--accent-strong)"/><text x="130" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">q = m/n</text></svg><figcaption>However close a and b are, a rational q = m/n slips between them.</figcaption></figure>

## Proof

**Lemma.** For every $y \in \mathbb{R}$, there is an integer $m$ with
$m - 1 \leq y < m$.

*Proof of lemma.* By the Archimedean property, choose $N_1 \in \mathbb{N}$
with $N_1 > y$, and choose $N_2 \in \mathbb{N}$ with $N_2 > -y$, i.e.
$-N_2 < y$. So $y$ lies among the finitely many integers
$-N_2, -N_2 + 1, \ldots, N_1$; let $m$ be the smallest one of these that
is $> y$ (such an integer exists, since $N_1$ itself is one candidate).
By minimality of $m$, $m - 1$ is not $> y$, i.e. $m - 1 \leq y$. So
$m - 1 \leq y < m$. $\qquad\blacksquare$

**Proof of the theorem.** Let $a, b \in \mathbb{R}$ with $a < b$.

By the Archimedean property, choose $n \in \mathbb{N}$ with
$n > \dfrac{1}{b - a}$, i.e. $n(b - a) > 1$, i.e. $na + 1 < nb$.

Apply the lemma to $y = na$: there is an integer $m$ with
$m - 1 \leq na < m$, i.e. $na < m \leq na + 1$. Combined with
$na + 1 < nb$ from above,

$$
na < m < nb.
$$

Dividing by $n > 0$ (order axioms, compatibility with multiplication):

$$
a < \frac{m}{n} < b.
$$

Since $m \in \mathbb{Z}$ and $n \in \mathbb{N}$, $q = m/n \in \mathbb{Q}$,
and $a < q < b$. $\qquad\blacksquare$

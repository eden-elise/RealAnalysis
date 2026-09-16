---
layout: note-layout.html
type: problem
id: problem-1-6-2
title: Problem 1.6.2
statement: "For each of the given sets $E \\subseteq \\mathbb{R}$, find $\\sup E$, $\\inf E$, and, where they exist, $\\max E$ and $\\min E$."
prerequisites:
  - bounds-suprema
  - archimedean-property
---
## Solution

**(a) $E = \mathbb{N}$.** $E$ has no upper bound, so $\sup E$ and $\max E$
do not exist. Depending on the convention used for $\mathbb{N}$,
$\inf E = \min E = 0$ or $\inf E = \min E = 1$.

**(b) $E = \mathbb{Z}$.** $E$ is unbounded above and below, so $\sup E$,
$\inf E$, $\max E$, and $\min E$ do not exist.

**(c) $E = \mathbb{Q}$.** $E$ is unbounded above and below, so $\sup E$,
$\inf E$, $\max E$, and $\min E$ do not exist.

**(d) $E = \mathbb{R}$.** $E$ is unbounded above and below, so $\sup E$,
$\inf E$, $\max E$, and $\min E$ do not exist.

**(e) $E = \{-3, 2, 5, 7\}$.** $\sup E = \max E = 7$, and
$\inf E = \min E = -3$.

**(f) $E = \{x : x^2 < 2\}$.** $E = (-\sqrt{2}, \sqrt{2})$, so
$\sup E = \sqrt{2}$ and $\inf E = -\sqrt{2}$. Since $E$ is an open
interval, neither endpoint is attained, so $\max E$ and $\min E$ do not
exist.

**(g) $E = \{x : x^2 - x - 1 < 0\}$.** Solving $x^2 - x - 1 = 0$ by the
quadratic formula gives roots $x = \dfrac{1 \pm \sqrt{5}}{2}$, so

$$
E = \left(\frac{1 - \sqrt{5}}{2},\ \frac{1 + \sqrt{5}}{2}\right).
$$

Thus $\sup E = \dfrac{1 + \sqrt{5}}{2}$ and $\inf E = \dfrac{1 - \sqrt{5}}{2}$.
Since $E$ is an open interval, $\max E$ and $\min E$ do not exist.

**(h) $E = \{1/n : n \in \mathbb{N}\}$.** The largest term occurs at
$n = 1$, giving $1 \in E$, so $\sup E = \max E = 1$. As $n \to \infty$,
$1/n \to 0$, but $0 \notin E$, so $\inf E = 0$ and $\min E$ does not
exist.

**(i) $E = \{\sqrt[n]{n} : n \in \mathbb{N}\}$.** Since $n \geq 1$ for
every $n \in \mathbb{N}$, raising both sides to the power $1/n$ gives
$n^{1/n} \geq 1$, with equality when $n = 1$. So $\inf E = \min E = 1$.

Treating $f(x) = x^{1/x}$ as a function of a real variable, $f$ increases
then decreases, attaining its maximum at $x = 3$ among the integers
(comparing $\sqrt[2]{2}$, $\sqrt[3]{3}$, $\sqrt[4]{4}$ confirms
$\sqrt[3]{3}$ is largest). So $\sup E = \max E = \sqrt[3]{3}$.

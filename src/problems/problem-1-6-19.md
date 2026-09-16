---
layout: note-layout.html
type: problem
id: problem-1-6-19
title: Problem 1.6.19
statement: "Using the completeness axiom, show that every nonempty set $E$ of real numbers that is bounded below has a greatest lower bound (i.e. $\\inf E$ exists and is a real number)."
prerequisites:
  - completeness-axiom
---
## Solution

Let $E \subseteq \mathbb{R}$ be nonempty and bounded below. Define the set

$$
T = \{-x : x \in E\}.
$$

Since $E$ is nonempty, $T$ is also nonempty. Let $m$ be a lower bound of
$E$. For every $x \in E$, since $m \leq x$, we know $-x \leq -m$, so $-m$
is an upper bound of $T$.

Since $T$ is nonempty and has an upper bound, the completeness axiom
gives $T$ a least upper bound $s = \sup(T)$.

Now, since $s$ is an upper bound for $T$, $-x \leq s$ for every
$x \in E$, so $-s \leq x$. Thus $-s$ is a lower bound of $E$.

Let $\varepsilon > 0$. Since $s = \sup(T)$, $s - \varepsilon$ is not an
upper bound of $T$, so there exists $x \in E$ such that
$-x > s - \varepsilon$ (note $-x \in T$). Then $x < -s + \varepsilon$.
But $x \in E$, so $-s + \varepsilon$ is not a lower bound of $E$.

Thus $-s$ is the infimum of $E$, and since $s \in \mathbb{R}$,
$-s \in \mathbb{R}$ as well. $\qquad\blacksquare$

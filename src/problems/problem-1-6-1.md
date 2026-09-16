---
layout: note-layout.html
type: problem
id: problem-1-6-1
title: Problem 1.6.1
statement: "A set of real numbers $E$ is bounded if and only if there exists a positive number $r$ such that $|x| < r$ for every $x \\in E$."
prerequisites:
  - bounds-suprema
  - absolute-value-bound
---
## Solution

Let $E \subseteq \mathbb{R}$.

($\implies$) Suppose $E$ is bounded. We show there exists $r \in \mathbb{R}$,
$r > 0$, such that $|x| < r$ for every $x \in E$.

Since $E$ is bounded, $E$ has an upper bound $M \in \mathbb{R}$ (so
$x \leq M$ for every $x \in E$) and a lower bound $m \in \mathbb{R}$ (so
$m \leq x$ for every $x \in E$).

Let $r = \max(|m|, |M|) + 1$. Then

$$
x \leq M \leq \max(|m|, |M|) < \max(|m|, |M|) + 1 = r,
$$

so $x < r$ for every $x \in E$. Similarly,

$$
-r = -\max(|m|, |M|) - 1 < -\max(|m|, |M|) \leq -|m| \leq m \leq x,
$$

so $-r < x$ for every $x \in E$. Therefore $-r < x < r$ for every
$x \in E$, i.e. $|x| < r$ for every $x \in E$.

($\impliedby$) Suppose there exists $r \in \mathbb{R}$, $r > 0$, such that
$|x| < r$ for every $x \in E$ — i.e. $-r < x < r$ for every $x \in E$. Then
$-r$ is a lower bound of $E$ (since $-r < x$ for every $x \in E$) and $r$
is an upper bound of $E$ (since $x < r$ for every $x \in E$). Since $E$
has both an upper bound and a lower bound, $E$ is bounded. $\qquad\blacksquare$

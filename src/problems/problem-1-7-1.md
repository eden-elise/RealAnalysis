---
layout: note-layout.html
type: problem
id: problem-1-7-1
title: Problem 1.7.1
statement:
  - "Three consequences of the Archimedean property, each building on the last:"
  - "(1) For every $x \\in \\mathbb{R}$, there exists $n \\in \\mathbb{N}$ such that $n > x$."
  - "(2) For every $x, y \\in \\mathbb{R}^+$, there exists $n \\in \\mathbb{N}$ such that $nx > y$."
  - "(3) For every $x \\in \\mathbb{R}^+$, there exists $n \\in \\mathbb{N}$ such that $1/n < x$."
prerequisites:
  - completeness-axiom
  - peano-axioms
---
## Solution

### (1)

*Proof.* Suppose not: there exists $x \in \mathbb{R}$ such that
$n \leq x$ for every $n \in \mathbb{N}$ — i.e. $x$ is an upper bound of
$\mathbb{N}$.

Since $\mathbb{N}$ is nonempty, by completeness it has a least upper
bound; let $K = \sup(\mathbb{N})$.

Claim: $K - 1$ is also an upper bound of $\mathbb{N}$. It suffices to
show $n \leq K - 1$ for every $n \in \mathbb{N}$, equivalently
$n + 1 \leq K$ for every $n \in \mathbb{N}$. Since $n \in \mathbb{N}$
implies $n + 1 \in \mathbb{N}$, and $K$ is an upper bound of
$\mathbb{N}$, we have $n + 1 \leq K$ for every $n \in \mathbb{N}$.

But then $K - 1$ is an upper bound of $\mathbb{N}$ that is strictly less
than $K$, contradicting the assumption that $K$ is the least upper
bound. This contradiction completes the proof. $\qquad\blacksquare$

### (2)

*Proof.* Since $x > 0$,

$$
nx > y \iff n > \frac{y}{x},
$$

where dividing both sides by $x$ is valid because $x > 0$ introduces no
sign flips and no division by zero.

Since $x > 0$, we have $y/x \in \mathbb{R}$. By part (1), for any
$a \in \mathbb{R}$ there exists $n \in \mathbb{N}$ such that $a < n$. Let
$a = y/x$. Then there exists $n \in \mathbb{N}$ such that
$y/x < n \implies y < nx$.

This gives $nx > y$, as required. $\qquad\blacksquare$

### (3)

*Proof.* Recall part (2): for all $x, y \in \mathbb{R}^+$, there exists
$n \in \mathbb{N}$ such that $nx > y$.

Consider the case $y = 1$. Then there exists $n \in \mathbb{N}$ such that
$nx > 1$. Since $n \in \mathbb{N}$, we have $n > 0$, so dividing both
sides by $n$ (which preserves the inequality direction) gives
$x > 1/n$, that is, $1/n < x$, as required. $\qquad\blacksquare$

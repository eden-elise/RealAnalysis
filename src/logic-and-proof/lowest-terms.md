---
layout: note-layout.html
type: definition
id: lowest-terms
title: Lowest Terms
statement: "A fraction $p/q$, with $p, q \\in \\mathbb{Z}$ and $q \\neq 0$, is in lowest terms if and only if $\\gcd(p, q) = 1$ — that is, $p$ and $q$ share no common factor other than $1$."
---
## Intuition

The **greatest common divisor** $\gcd(p, q)$ of two integers is the
largest positive integer dividing both. A fraction being "in lowest
terms" — nothing left to cancel — is exactly the statement that this
largest shared divisor is as small as it can possibly be: $1$. If
$\gcd(p, q) = d > 1$, both $p$ and $q$ are multiples of $d$, and
$\frac{p}{q} = \frac{p/d}{q/d}$ is a smaller-numbered fraction equal to
the same value — so $p/q$ wasn't in lowest terms after all. Conversely,
once $\gcd(p, q) = 1$, no integer bigger than $1$ divides both, so there's
nothing left to divide out.

Every rational number has a lowest-terms representation, and it's unique
up to the sign of $p$ and $q$ together: given any $p/q$, dividing both by
$d = \gcd(p, q)$ produces $\frac{p/d}{q/d}$, which is in lowest terms by
construction and equals the original fraction. This is the standard setup
for a proof by contradiction that a number is irrational — assume it
equals some $p/q$ in lowest terms (i.e. $\gcd(p, q) = 1$), and derive
that $p$ and $q$ must share a factor after all, contradicting the
assumption.

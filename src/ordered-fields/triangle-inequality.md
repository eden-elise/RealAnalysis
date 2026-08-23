---
layout: note-layout.html
type: theorem
id: triangle-inequality
title: Triangle Inequality
statement: "For all $a, b \\in \\mathbb{R}$, $|a + b| \\leq |a| + |b|$."
prerequisites:
  - field-axioms
  - order-axioms
---
## Intuition

The **absolute value** of $a \in \mathbb{R}$ is defined by

$$
|a| = \begin{cases} a & a \geq 0 \\ -a & a < 0 \end{cases}
$$

— whichever of $a$ or $-a$ is the nonnegative one. Geometrically, $|a|$ is
$a$'s distance from $0$, and $|a - b|$ is the distance between $a$ and $b$.
Read that way, the triangle inequality is exactly the fact it's named
for: going from $0$ to $a + b$ directly is never longer than going from
$0$ to $a$ and then from $a$ to $a + b$ (a displacement of length $|b|$) —
a straight line beats a detour. The same statement in distance form, with
$x = a$ and $y = -b$, says the direct distance $|x - y|$ never exceeds the
distance through any third point.

Two facts fall directly out of the definition and get used constantly, not
just here:

$$
-|a| \leq a \leq |a|
$$

(check both cases: if $a \geq 0$ then $a = |a|$ and $-|a| = -a \leq 0 \leq
a$; if $a < 0$ then $-a = |a|$ and $a \leq 0 \leq -a = |a|$, while
$-|a| = a$) — and, for $c \geq 0$,

$$
|x| \leq c \iff -c \leq x \leq c.
$$

The second is just unpacking the definition of $|x|$ by cases on the sign
of $x$ again: if $x \geq 0$ the claim is $x \leq c$; if $x < 0$ it's
$-x \leq c$, i.e. $x \geq -c$; together, exactly $-c \leq x \leq c$.

## Proof

Applying $-|a| \leq a \leq |a|$ to $a$ and separately to $b$ gives

$$
-|a| \leq a \leq |a| \quad \text{and} \quad -|b| \leq b \leq |b|.
$$

Add the left- and right-hand inequalities together. This uses a
combining move that's worth spelling out once, since it recurs constantly:
from $-|a| \leq a$, compatibility with addition (order axioms) gives
$-|a| + (-|b|) \leq a + (-|b|)$, and from $-|b| \leq b$ it gives
$a + (-|b|) \leq a + b$; transitivity chains these into
$-|a| + (-|b|) \leq a + b$, i.e. $-(|a| + |b|) \leq a + b$. The same
argument on the right-hand inequalities gives $a + b \leq |a| + |b|$. So

$$
-(|a| + |b|) \leq a + b \leq |a| + |b|.
$$

Since $|a| \geq 0$ and $|b| \geq 0$ (immediate from the case split
defining absolute value), $|a| + |b| \geq 0$, so the bound criterion above
applies with $x = a + b$ and $c = |a| + |b|$:

$$
|a + b| \leq |a| + |b|. \qquad \blacksquare
$$

**Reverse triangle inequality.** The same two facts give
$||a| - |b|| \leq |a - b|$ almost for free. Writing $a = (a - b) + b$ and
applying what was just proved, $|a| \leq |a - b| + |b|$, so
$|a| - |b| \leq |a - b|$. Swapping the roles of $a$ and $b$ gives
$|b| - |a| \leq |b - a| = |a - b|$ the same way. Together these say
$-|a - b| \leq |a| - |b| \leq |a - b|$, so the bound criterion (with
$x = |a| - |b|$, $c = |a - b|$) gives $||a| - |b|| \leq |a - b|$.

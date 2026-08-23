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

<figure class="figure"><svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing that the direct hop from 0 to a+b is no longer than the two-step detour through a"><line x1="20" y1="90" x2="240" y2="90" stroke="var(--line)" stroke-width="1.5"/><circle cx="40" cy="90" r="3" fill="var(--ink)"/><circle cx="120" cy="90" r="3" fill="var(--ink)"/><circle cx="210" cy="90" r="3" fill="var(--ink)"/><text x="40" y="108" text-anchor="middle" font-size="10" fill="var(--ink)" style="font-family:var(--font-mono)">0</text><text x="120" y="108" text-anchor="middle" font-size="10" fill="var(--ink)" style="font-family:var(--font-mono)">a</text><text x="210" y="108" text-anchor="middle" font-size="10" fill="var(--ink)" style="font-family:var(--font-mono)">a+b</text><path d="M40,90 Q80,55 120,90" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" stroke-dasharray="4,3"/><text x="80" y="48" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">|a|</text><path d="M120,90 Q165,55 210,90" fill="none" stroke="var(--ink-muted)" stroke-width="1.5" stroke-dasharray="4,3"/><text x="165" y="48" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">|b|</text><path d="M40,90 Q125,132 210,90" fill="none" stroke="var(--accent-strong)" stroke-width="2"/><text x="125" y="144" text-anchor="middle" font-size="10" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">|a+b|</text></svg><figcaption>Shown for a, b &gt; 0: the two-hop detour through a covers distance |a| + |b|; the direct hop covers |a+b| — never longer.</figcaption></figure>

Two facts fall directly out of the definition and get used constantly, not
just here:

$$
-|a| \leq a \leq |a|
$$

(check both cases: if $a \geq 0$ then $a = |a|$ and
$-|a| = -a \leq 0 \leq a$; if $a < 0$ then $-a = |a|$ and
$a \leq 0 \leq -a = |a|$, while $-|a| = a$) — and, for $c \geq 0$,

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

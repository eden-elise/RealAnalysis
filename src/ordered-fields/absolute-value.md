---
layout: note-layout.html
type: definition
id: absolute-value
title: Absolute Value
statement: "For $a \\in \\mathbb{R}$, the absolute value of $a$ is $|a| = a$ if $a \\geq 0$, and $|a| = -a$ if $a < 0$."
prerequisites:
  - field-axioms
  - order-axioms
---
## Intuition

$|a|$ picks out whichever of $a$ or $-a$ is nonnegative — the two always
have opposite sign, except at $a = 0$ where both cases agree and give
$0$. Geometrically, $|a|$ is $a$'s distance from $0$ on the number line,
with no regard for direction; more generally, $|a - b|$ is the distance
between $a$ and $b$, since it doesn't matter which of the two is "first."

<figure class="figure"><svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line showing a and negative a sitting the same distance from 0 on opposite sides"><line x1="20" y1="55" x2="240" y2="55" stroke="var(--line)" stroke-width="1.5"/><circle cx="130" cy="55" r="3" fill="var(--ink)"/><text x="130" y="75" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">0</text><circle cx="80" cy="55" r="4" fill="var(--accent-strong)"/><text x="80" y="75" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">-a</text><circle cx="180" cy="55" r="4" fill="var(--accent-strong)"/><text x="180" y="75" text-anchor="middle" font-size="10" fill="var(--ink-muted)" style="font-family:var(--font-mono)">a</text><line x1="80" y1="40" x2="130" y2="40" stroke="var(--ink-muted)" stroke-width="1" stroke-dasharray="3,2"/><text x="105" y="30" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">|a|</text><line x1="130" y1="40" x2="180" y2="40" stroke="var(--ink-muted)" stroke-width="1" stroke-dasharray="3,2"/><text x="155" y="30" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">|a|</text></svg><figcaption>a and -a sit the same distance |a| from 0, on opposite sides.</figcaption></figure>

A few immediate facts, all direct from the two-case definition:

- *Nonnegativity:* $|a| \geq 0$ for every $a$ — whichever case applies,
  the result is nonnegative by construction
- *Definiteness:* $|a| = 0$ if and only if $a = 0$ — the only real that's
  its own negation
- *Symmetry:* $|-a| = |a|$ — negating $a$ swaps which case applies, but
  produces the same nonnegative value either way
- *Self-bound:* $-|a| \leq a \leq |a|$ (check both cases: if $a \geq 0$
  then $a = |a|$ and $-|a| = -a \leq 0 \leq a$; if $a < 0$ then $-a = |a|$
  and $a \leq 0 \leq -a = |a|$, while $-|a| = a$)

These get cited constantly elsewhere on this site — the self-bound fact
alone drives the entire proof of the
[triangle inequality](/ordered-fields/triangle-inequality/).

---
layout: note-layout.html
type: technique
id: proof-techniques
title: Proof Techniques
prerequisites:
  - peano-axioms
---
A standing reference for the handful of proof patterns that show up
constantly once real analysis gets going — not a page about $\mathbb{R}$
itself, but the discrete-math toolkit every later proof on this site is
written with. Come back here whenever a proof says "by contradiction," "by
induction," or "WLOG" and the reason it's allowed isn't obvious.

## Logical Building Blocks

A **statement** (or proposition) is a sentence that is unambiguously true
or false — "$7$ is prime" is a statement, "$x$ is large" isn't (not until
"large" is pinned down). Statements combine via the usual connectives:
$\neg P$ (not $P$), $P \land Q$ (and), $P \lor Q$ (or), $P \implies Q$
(implies), $P \iff Q$ (if and only if).

$P \implies Q$ is false in exactly one case: $P$ true, $Q$ false. Every
other combination makes it true — in particular, $P \implies Q$ is
*vacuously* true whenever $P$ is false, which is why definitions phrased
as "for every $x$ satisfying..." don't need to worry about $x$ that don't
satisfy the condition at all.

Three related implications, easy to conflate:

- *Contrapositive* of $P \implies Q$: $\neg Q \implies \neg P$ —
  **logically equivalent** to the original, always
- *Converse*: $Q \implies P$ — not equivalent in general
- *Inverse*: $\neg P \implies \neg Q$ — also not equivalent in general
  (it's just the converse's contrapositive)

**Quantifiers.** $\forall$ ("for all") and $\exists$ ("there exists") are
negated by swapping one for the other and negating what's inside:

$$\neg(\forall x, P(x)) \iff \exists x, \neg P(x)$$

$$\neg(\exists x, P(x)) \iff \forall x, \neg P(x)$$

This gets used constantly once definitions start stacking quantifiers — negating "$\forall \varepsilon > 0\, \exists N\, \forall n > N, |a_n - L| < \varepsilon$" (convergence) to figure out what it means for a
sequence to *not* converge means walking this rule outward one quantifier
at a time, flipping each and negating the innermost statement last.

## Direct Proof

Assume the hypothesis, chain forward through implications, arrive at the
conclusion. No trick — just the default shape of a proof, worth naming
because the other techniques below are all departures from it.

*Example:* if $n$ is even, so is $n^2$. Write $n = 2k$ for some integer
$k$; then $n^2 = 4k^2 = 2(2k^2)$, which is even.

## Proof by Contraposition

To prove $P \implies Q$, prove $\neg Q \implies \neg P$ instead — valid
because the two are logically equivalent (above). Useful whenever the
negated conclusion is easier to get a grip on than the conclusion itself.

*Example:* if $n^2$ is even, then $n$ is even. Directly, "$n^2$ even"
doesn't obviously constrain $n$ — but the contrapositive does: if $n$ is
odd, write $n = 2k+1$, so $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which
is odd. That proves "$n$ odd $\implies n^2$ odd," i.e. the contrapositive
of the original claim.

## Proof by Contradiction

Assume the hypotheses together with the *negation* of the conclusion, and
derive something impossible — a statement and its negation both holding,
or some other flatly false fact. Since the hypotheses are taken as given,
the impossibility can only have come from the assumed negation, so the
conclusion must hold after all.

*Example:* $\sqrt{2}$ is irrational. Suppose not — suppose
$\sqrt{2} = p/q$ for integers $p, q$ with no common factor. Squaring gives
$p^2 = 2q^2$, so $p^2$ is even, so $p$ is even (previous example) — write
$p = 2m$. Then $4m^2 = 2q^2$, so $q^2 = 2m^2$, so $q$ is even too. But
then $p$ and $q$ share a factor of $2$, contradicting the assumption that
they share no common factor. So no such $p/q$ exists.

Proof by contradiction is strictly more powerful than contraposition in
principle (it gets to assume the *entire* negated claim, not just a
negated conclusion with the hypothesis still granted), but reaches for a
bigger hammer than necessary when a direct or contrapositive argument is
available — worth trying those first.

## Mathematical Induction

Induction proves a statement $P(n)$ for every $n \in \mathbb{N}$ in two
steps: a **base case** ($P(1)$ holds) and an **inductive step**
($P(n) \implies P(n+1)$, for arbitrary $n$). Together these two finite
facts cover infinitely many statements — $P(1)$ holds by the base case,
then $P(2)$ follows from the inductive step applied to $P(1)$, then
$P(3)$ from $P(2)$, and so on with nothing left ungenerated.

<figure class="figure"><svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Row of dominoes falling in sequence, illustrating that a base case plus each domino knocking over the next topples the whole row"><line x1="15" y1="95" x2="245" y2="95" stroke="var(--line)" stroke-width="1.5"/><g transform="translate(30,95) rotate(-28)"><rect x="-5" y="-58" width="12" height="58" fill="var(--accent)"/></g><text x="30" y="30" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(1)</text><g transform="translate(75,95) rotate(-12)"><rect x="-5" y="-58" width="12" height="58" fill="var(--accent)"/></g><text x="75" y="20" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(2)</text><g transform="translate(120,95)"><rect x="-5" y="-58" width="12" height="58" fill="var(--accent-strong)"/></g><text x="120" y="20" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(n)</text><g transform="translate(165,95)"><rect x="-5" y="-58" width="12" height="58" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/></g><text x="165" y="20" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(n+1)</text><g transform="translate(210,95)"><rect x="-5" y="-58" width="12" height="58" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/></g><text x="210" y="20" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">&#8230;</text></svg><figcaption>The base case topples P(1); the inductive step guarantees each fallen domino topples the next. Nothing stops the chain from reaching every n &#8712; &#8469;.</figcaption></figure>

This is exactly the [induction axiom](/axioms/peano-axioms/) from the
Peano axioms, applied to $S = \{n \in \mathbb{N} : P(n) \text{ holds}\}$:
if $1 \in S$ (base case) and $n \in S \implies s(n) \in S$ (inductive
step), the axiom says $S = \mathbb{N}$ — i.e. $P(n)$ holds for *every*
natural number. Induction as a proof technique isn't a separate
assumption; it's that axiom, read as a recipe.

*Example:* $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$ for every
$n \in \mathbb{N}$. Base case $n = 1$: both sides equal $1$. Inductive
step: assume $1 + \cdots + n = \frac{n(n+1)}{2}$ (the *inductive
hypothesis*), and add $n+1$ to both sides —
$1 + \cdots + n + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}$,
which is the claim at $n+1$. By induction, the formula holds for every
$n$.

**Strong induction** replaces the inductive step with "assume $P(k)$ for
*every* $k \leq n$, prove $P(n+1)$" — more to assume, which makes some
proofs easier (e.g. every integer $> 1$ has a prime factorization: an
arbitrary $n+1$ might be prime already, or split as a product of two
smaller factors, each of which needs the full inductive hypothesis down
to $1$, not just the single previous case). It's not logically stronger
than ordinary induction — either can simulate the other — just sometimes
the more convenient shape.

## A Few Recurring Conventions

**"If and only if" proofs.** $P \iff Q$ splits into two separate
implications, $P \implies Q$ and $Q \implies P$, each generally proved on
its own — there's no shortcut that proves both directions at once except
in special cases (e.g. a chain of reversible equivalences).

**WLOG ("without loss of generality").** Used when a proof's cases are
symmetric enough that handling one of them handles the rest by
relabeling. For instance, proving a claim about two reals $a, b$ that's
symmetric in $a$ and $b$ only needs the case $a \leq b$ — the case
$a > b$ follows by swapping names. It's only valid when that symmetry is
real; invoking WLOG to skip a case that's secretly different from the one
proved is a common way a proof quietly goes wrong.

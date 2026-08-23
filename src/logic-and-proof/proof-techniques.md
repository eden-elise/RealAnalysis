---
layout: note-layout.html
type: technique
id: proof-techniques
title: Proof Techniques
prerequisites:
  - peano-axioms
  - lowest-terms
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

<figure class="figure"><svg viewBox="0 0 398 132" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Truth table for not P, and, or, implies, and if-and-only-if across all four combinations of P and Q"><rect x="10" y="10" width="378" height="24" fill="var(--accent-soft)"/><line x1="10" y1="10" x2="388" y2="10" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="34" x2="388" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="10" y1="56" x2="388" y2="56" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="78" x2="388" y2="78" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="100" x2="388" y2="100" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="122" x2="388" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="10" x2="10" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="64" y1="10" x2="64" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="118" y1="10" x2="118" y2="122" stroke="var(--accent)" stroke-width="1.5"/><line x1="172" y1="10" x2="172" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="226" y1="10" x2="226" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="280" y1="10" x2="280" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="334" y1="10" x2="334" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="388" y1="10" x2="388" y2="122" stroke="var(--line)" stroke-width="1"/><text x="37" y="27" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">P</text><text x="91" y="27" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">Q</text><text x="145" y="27" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#172;P</text><text x="199" y="27" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#8743;</text><text x="253" y="27" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#8744;</text><text x="307" y="27" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#8658;</text><text x="361" y="27" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#8660;</text><g font-size="10" text-anchor="middle" style="font-family:var(--font-mono)"><text x="37" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="91" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="145" y="49" fill="var(--ink-muted)">F</text><text x="199" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="253" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="307" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="361" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="37" y="71" fill="var(--accent-strong)" font-weight="600">T</text><text x="91" y="71" fill="var(--ink-muted)">F</text><text x="145" y="71" fill="var(--ink-muted)">F</text><text x="199" y="71" fill="var(--ink-muted)">F</text><text x="253" y="71" fill="var(--accent-strong)" font-weight="600">T</text><text x="307" y="71" fill="var(--ink-muted)">F</text><text x="361" y="71" fill="var(--ink-muted)">F</text><text x="37" y="93" fill="var(--ink-muted)">F</text><text x="91" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="145" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="199" y="93" fill="var(--ink-muted)">F</text><text x="253" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="307" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="361" y="93" fill="var(--ink-muted)">F</text><text x="37" y="115" fill="var(--ink-muted)">F</text><text x="91" y="115" fill="var(--ink-muted)">F</text><text x="145" y="115" fill="var(--accent-strong)" font-weight="600">T</text><text x="199" y="115" fill="var(--ink-muted)">F</text><text x="253" y="115" fill="var(--ink-muted)">F</text><text x="307" y="115" fill="var(--accent-strong)" font-weight="600">T</text><text x="361" y="115" fill="var(--accent-strong)" font-weight="600">T</text></g></svg><figcaption>Truth table for &#172;P (not P), &#8743; (and), &#8744; (or), &#8658; (implies), &#8660; (iff), across every combination of P and Q.</figcaption></figure>

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

<figure class="figure"><svg viewBox="0 0 390 132" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Truth table comparing an implication to its contrapositive, converse, and inverse, showing the original matches the contrapositive on every row while the converse matches the inverse instead"><rect x="10" y="10" width="364" height="24" fill="var(--accent-soft)"/><line x1="10" y1="10" x2="374" y2="10" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="34" x2="374" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="10" y1="56" x2="374" y2="56" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="78" x2="374" y2="78" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="100" x2="374" y2="100" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="122" x2="374" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="10" y1="10" x2="10" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="42" y1="10" x2="42" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="74" y1="10" x2="74" y2="122" stroke="var(--accent)" stroke-width="1.5"/><line x1="149" y1="10" x2="149" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="229" y1="10" x2="229" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="299" y1="10" x2="299" y2="122" stroke="var(--line)" stroke-width="1"/><line x1="374" y1="10" x2="374" y2="122" stroke="var(--line)" stroke-width="1"/><text x="26" y="27" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">P</text><text x="58" y="27" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">Q</text><text x="111.5" y="27" text-anchor="middle" font-size="9" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">P&#8658;Q</text><text x="189" y="27" text-anchor="middle" font-size="9" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#172;Q&#8658;&#172;P</text><text x="264" y="27" text-anchor="middle" font-size="9" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">Q&#8658;P</text><text x="336.5" y="27" text-anchor="middle" font-size="9" font-weight="600" fill="var(--ink)" style="font-family:var(--font-mono)">&#172;P&#8658;&#172;Q</text><g font-size="10" text-anchor="middle" style="font-family:var(--font-mono)"><text x="26" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="58" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="111.5" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="189" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="264" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="336.5" y="49" fill="var(--accent-strong)" font-weight="600">T</text><text x="26" y="71" fill="var(--accent-strong)" font-weight="600">T</text><text x="58" y="71" fill="var(--ink-muted)">F</text><text x="111.5" y="71" fill="var(--ink-muted)">F</text><text x="189" y="71" fill="var(--ink-muted)">F</text><text x="264" y="71" fill="var(--accent-strong)" font-weight="600">T</text><text x="336.5" y="71" fill="var(--accent-strong)" font-weight="600">T</text><text x="26" y="93" fill="var(--ink-muted)">F</text><text x="58" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="111.5" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="189" y="93" fill="var(--accent-strong)" font-weight="600">T</text><text x="264" y="93" fill="var(--ink-muted)">F</text><text x="336.5" y="93" fill="var(--ink-muted)">F</text><text x="26" y="115" fill="var(--ink-muted)">F</text><text x="58" y="115" fill="var(--ink-muted)">F</text><text x="111.5" y="115" fill="var(--accent-strong)" font-weight="600">T</text><text x="189" y="115" fill="var(--accent-strong)" font-weight="600">T</text><text x="264" y="115" fill="var(--accent-strong)" font-weight="600">T</text><text x="336.5" y="115" fill="var(--accent-strong)" font-weight="600">T</text></g></svg><figcaption>P&#8658;Q and its contrapositive &#172;Q&#8658;&#172;P agree on every row (equivalent). The converse Q&#8658;P and inverse &#172;P&#8658;&#172;Q agree with each other instead &mdash; not with the original.</figcaption></figure>

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

*Example:* if $n$ is even, then $n^2$ is even.

**Proof.** Let $n$ be an even integer. Then $n = 2k$ for some integer
$k$, so $n^2 = 4k^2 = 2(2k^2)$, which is even. $\qquad\blacksquare$

## Proof by Contraposition

To prove $P \implies Q$, prove $\neg Q \implies \neg P$ instead — valid
because the two are logically equivalent (above). Useful whenever the
negated conclusion is easier to get a grip on than the conclusion itself.

*Example:* if $n^2$ is even, then $n$ is even. Directly, "$n^2$ even"
doesn't obviously constrain $n$ — but the contrapositive does: "$n$ odd
$\implies n^2$ odd" is easy to show directly, and proving it proves the
original claim.

**Proof.** We prove the contrapositive: if $n$ is odd, then $n^2$ is odd.
Let $n$ be an odd integer. Then $n = 2k+1$ for some integer $k$, so
$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd.
$\qquad\blacksquare$

## Proof by Contradiction

Assume the hypotheses together with the *negation* of the conclusion, and
derive something impossible — a statement and its negation both holding,
or some other flatly false fact. Since the hypotheses are taken as given,
the impossibility can only have come from the assumed negation, so the
conclusion must hold after all.

*Example:* $\sqrt{2}$ is irrational.

**Proof.** Suppose not. Then $\sqrt{2} = p/q$ for some integers $p, q$
[in lowest terms](/logic-and-proof/lowest-terms/) (no common factor).
Squaring gives $p^2 = 2q^2$, so $p^2$ is even, so $p$ is even (previous
example) — write $p = 2m$ for some integer $m$. Then $4m^2 = 2q^2$, so
$q^2 = 2m^2$, so $q$ is even too. But then $p$ and $q$ share a factor of
$2$, contradicting the assumption that they were in lowest terms. So no
such $p/q$ exists, i.e. $\sqrt{2}$ is irrational. $\qquad\blacksquare$

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

<figure class="figure"><svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Row of dominoes falling in sequence, illustrating that a base case plus each domino knocking over the next topples the whole row"><line x1="15" y1="88" x2="245" y2="88" stroke="var(--line)" stroke-width="1.5"/><g transform="translate(30,88) rotate(60)"><rect x="-5" y="-58" width="12" height="58" fill="var(--accent)"/></g><text x="30" y="104" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(1)</text><g transform="translate(75,88) rotate(20)"><rect x="-5" y="-58" width="12" height="58" fill="var(--accent)"/></g><text x="75" y="104" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(2)</text><g transform="translate(120,88)"><rect x="-5" y="-58" width="12" height="58" fill="var(--accent-strong)"/></g><text x="120" y="104" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(n)</text><g transform="translate(165,88)"><rect x="-5" y="-58" width="12" height="58" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/></g><text x="165" y="104" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">P(n+1)</text><g transform="translate(210,88)"><rect x="-5" y="-58" width="12" height="58" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/></g><text x="210" y="104" text-anchor="middle" font-size="8" fill="var(--ink-muted)" style="font-family:var(--font-mono)">&#8230;</text></svg><figcaption>The base case topples P(1); the inductive step guarantees each fallen domino topples the next. Nothing stops the chain from reaching every n &#8712; &#8469;.</figcaption></figure>

This is exactly the [induction axiom](/axioms/peano-axioms/) from the
Peano axioms, applied to $S = \{n \in \mathbb{N} : P(n) \text{ holds}\}$:
if $1 \in S$ (base case) and $n \in S \implies s(n) \in S$ (inductive
step), the axiom says $S = \mathbb{N}$ — i.e. $P(n)$ holds for *every*
natural number. Induction as a proof technique isn't a separate
assumption; it's that axiom, read as a recipe.

*Example:* $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$ for every
$n \in \mathbb{N}$.

**Proof.** We proceed by induction on $n$.

*Base case* ($n = 1$): both sides equal $1$.

*Inductive step:* let $n \in \mathbb{N}$ and assume
$1 + \cdots + n = \frac{n(n+1)}{2}$ (the *inductive hypothesis*). Adding
$n+1$ to both sides gives
$1 + \cdots + n + (n+1) = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}$,
which is the claim at $n+1$.

By induction, the formula holds for every $n \in \mathbb{N}$.
$\qquad\blacksquare$

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

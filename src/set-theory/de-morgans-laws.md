---
layout: note-layout.html
type: theorem
id: de-morgans-laws
title: De Morgan's Laws
statement:
  - "For an indexed family of subsets $\\{A_\\alpha\\}_{\\alpha \\in \\Lambda}$ of a set $X$:"
  - "$\\left(\\bigcup_{\\alpha \\in \\Lambda} A_\\alpha\\right)^{c} = \\bigcap_{\\alpha \\in \\Lambda} A_\\alpha^{c}$."
  - "$\\left(\\bigcap_{\\alpha \\in \\Lambda} A_\\alpha\\right)^{c} = \\bigcup_{\\alpha \\in \\Lambda} A_\\alpha^{c}$."
prerequisites:
  - infinite-unions-intersections
  - proof-techniques
---
## Intuition

The complement of "belongs to at least one $A_\alpha$" is "belongs to
none of them," i.e. "fails to belong to every $A_\alpha$" — and the
complement of "belongs to all of them" is "fails for at least one." That's
exactly the
[quantifier-negation rule](/logic-and-proof/proof-techniques/) from Proof
Techniques,

$$
\neg(\exists \alpha, P(\alpha)) \iff \forall \alpha, \neg P(\alpha),
\qquad
\neg(\forall \alpha, P(\alpha)) \iff \exists \alpha, \neg P(\alpha),
$$

applied to the predicate $P(\alpha) : x \in A_\alpha$ instead of a bare
logical statement. De Morgan's Laws are that same rule, just wearing set
notation.

## Proof

Let $x \in X$ be arbitrary.

$$
\begin{aligned}
x \in \left(\bigcup_{\alpha \in \Lambda} A_\alpha\right)^{c}
&\iff x \notin \bigcup_{\alpha \in \Lambda} A_\alpha \\
&\iff \neg\big(\exists \alpha \in \Lambda,\ x \in A_\alpha\big) \\
&\iff \forall \alpha \in \Lambda,\ x \notin A_\alpha \\
&\iff x \in \bigcap_{\alpha \in \Lambda} A_\alpha^{c}.
\end{aligned}
$$

Since $x$ was arbitrary, the two sets have exactly the same elements, so

$$
\left(\bigcup_{\alpha \in \Lambda} A_\alpha\right)^{c} =
\bigcap_{\alpha \in \Lambda} A_\alpha^{c}.
$$

The second law follows the same way. Let $x \in X$ be arbitrary again:

$$
\begin{aligned}
x \in \left(\bigcap_{\alpha \in \Lambda} A_\alpha\right)^{c}
&\iff x \notin \bigcap_{\alpha \in \Lambda} A_\alpha \\
&\iff \neg\big(\forall \alpha \in \Lambda,\ x \in A_\alpha\big) \\
&\iff \exists \alpha \in \Lambda,\ x \notin A_\alpha \\
&\iff x \in \bigcup_{\alpha \in \Lambda} A_\alpha^{c},
\end{aligned}
$$

so, again since $x$ was arbitrary,

$$
\left(\bigcap_{\alpha \in \Lambda} A_\alpha\right)^{c} =
\bigcup_{\alpha \in \Lambda} A_\alpha^{c}. \qquad\blacksquare
$$

Proving two sets equal by showing they have exactly the same
elements — rather than, say, separately proving each is a subset of the
other — is the standard move whenever set membership on both sides
simplifies to a single chain of "if and only if"s, as it does here.

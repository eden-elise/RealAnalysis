---
layout: note-layout.html
type: axiom
id: field-axioms
title: Field Axioms
statement: "$\\mathbb{R}$, together with addition and multiplication, is a field: for all $a, b, c \\in \\mathbb{R}$, addition and multiplication are each commutative and associative; there exist distinct identities $0$ and $1$ with $a + 0 = a$ and $a \\cdot 1 = a$; every $a$ has an additive inverse $-a$ with $a + (-a) = 0$, and every nonzero $a$ has a multiplicative inverse $a^{-1}$ with $a \\cdot a^{-1} = 1$; and multiplication distributes over addition: $a(b + c) = ab + ac$."
---
## Intuition

These nine axioms say nothing about what real numbers *are* — only how $+$
and $\cdot$ are required to behave. Everything about arithmetic that feels
"obvious" (moving terms across an equation, canceling a factor, expanding a
product) is a *consequence* of these rules, not an extra assumption. Later
proofs that write "by the field axioms" are citing this page as a whole
rather than one line of it, since these nine are essentially always used
together.

Addition and multiplication are each assumed to be well-defined operations
$\mathbb{R} \times \mathbb{R} \to \mathbb{R}$ to begin with — i.e. $a + b$
and $a \cdot b$ are themselves always real numbers. Some textbooks list this
*closure* as its own axiom; here it's treated as already built into calling
$+$ and $\cdot$ operations *on* $\mathbb{R}$ in the first place.

**Addition**

- *Commutativity:* $a + b = b + a$
- *Associativity:* $(a + b) + c = a + (b + c)$
- *Additive identity:* there exists $0 \in \mathbb{R}$ such that $a + 0 = a$ for every $a$
- *Additive inverse:* for every $a$, there exists $-a \in \mathbb{R}$ such that $a + (-a) = 0$

**Multiplication**

- *Commutativity:* $a \cdot b = b \cdot a$
- *Associativity:* $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
- *Multiplicative identity:* there exists $1 \in \mathbb{R}$, with $1 \neq 0$, such that $a \cdot 1 = a$ for every $a$
- *Multiplicative inverse:* for every $a \neq 0$, there exists $a^{-1} \in \mathbb{R}$ such that $a \cdot a^{-1} = 1$

**Linking the two**

- *Distributivity:* $a \cdot (b + c) = a \cdot b + a \cdot c$

The requirement $1 \neq 0$ rules out the trivial one-element field
$\{0\}$ — without it, every one of these axioms is still satisfiable, just
vacuously and uselessly.

Notice what's *missing*: nothing here says anything about order (is $a$
bigger or smaller than $b$?) or about gaps in the number line. $\mathbb{Q}$
satisfies every one of these nine axioms just as well as $\mathbb{R}$ does —
being a field is necessary for $\mathbb{R}$'s arithmetic but comes nowhere
close to pinning down the real numbers specifically. That's the job of the
order axioms and, ultimately, the completeness axiom.

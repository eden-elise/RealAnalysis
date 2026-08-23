---
layout: note-layout.html
type: axiom
id: peano-axioms
title: Peano Axioms
statement:
  - "$\\mathbb{N}$ is a set with a distinguished element $1 \\in \\mathbb{N}$ and a successor function $s : \\mathbb{N} \\to \\mathbb{N}$ such that:"
  - "$s$ is injective: $s(m) = s(n) \\implies m = n$."
  - "No $n \\in \\mathbb{N}$ has $s(n) = 1$."
  - "$\\mathbb{N}$ satisfies induction: if $S \\subseteq \\mathbb{N}$ has $1 \\in S$ and is closed under $s$ (i.e. $n \\in S \\implies s(n) \\in S$), then $S = \\mathbb{N}$."
---
## Intuition

These axioms say what it means to "count forever, one step at a time, with
no shortcuts and no looping back." Start at $1$, apply a successor
operation $s$ over and over — $s(1)$, $s(s(1))$, $s(s(s(1)))$, and so on —
and the axioms guarantee that process never repeats a number, never skips
back to $1$, and never leaves anything out.

<figure class="figure"><svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of natural numbers 1, 2, 3, 4, continuing forever, linked by the successor function s, with nothing mapping into 1"><defs><marker id="succ-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"/></marker></defs><text x="40" y="16" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">no n: s(n)=1</text><line x1="55" y1="55" x2="93" y2="55" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#succ-arrow)"/><line x1="115" y1="55" x2="153" y2="55" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#succ-arrow)"/><line x1="175" y1="55" x2="213" y2="55" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#succ-arrow)"/><circle cx="40" cy="55" r="14" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="40" y="59" text-anchor="middle" font-size="12" font-weight="600" fill="var(--accent-strong)" style="font-family:var(--font-mono)">1</text><circle cx="100" cy="55" r="12" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><text x="100" y="59" text-anchor="middle" font-size="11" fill="var(--ink)" style="font-family:var(--font-mono)">2</text><circle cx="160" cy="55" r="12" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><text x="160" y="59" text-anchor="middle" font-size="11" fill="var(--ink)" style="font-family:var(--font-mono)">3</text><circle cx="220" cy="55" r="12" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/><text x="220" y="59" text-anchor="middle" font-size="11" fill="var(--ink)" style="font-family:var(--font-mono)">4</text><text x="245" y="59" font-size="14" fill="var(--ink-muted)">&#8230;</text><text x="74" y="46" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">s</text><text x="134" y="46" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">s</text><text x="194" y="46" text-anchor="middle" font-size="9" fill="var(--ink-muted)" style="font-family:var(--font-mono)">s</text></svg><figcaption>Each number's successor under s is unique (injectivity), and nothing maps back into 1. Induction says the chain 1, s(1), s(s(1)), &#8230; already accounts for all of &#8469; &mdash; there's nothing else in the set.</figcaption></figure>

- *Base point:* there exists $1 \in \mathbb{N}$
- *Successor:* there exists a function $s : \mathbb{N} \to \mathbb{N}$
  assigning to each $n$ its successor $s(n)$
- *Injectivity:* $s(m) = s(n)$ implies $m = n$ — distinct numbers have
  distinct successors, so the chain never merges back into itself
- *No predecessor of $1$:* there is no $n \in \mathbb{N}$ with $s(n) = 1$ —
  $1$ is the starting point, not reachable by stepping forward from
  anything
- *Induction:* if $S \subseteq \mathbb{N}$ satisfies $1 \in S$ and
  ($n \in S \implies s(n) \in S$), then $S = \mathbb{N}$ — nothing sits
  outside the chain starting at $1$

The first four axioms alone would already be satisfied by, say,
$\{1, 2, 3, \ldots\} \cup \{100.5, 101.5, 102.5, \ldots\}$ — two separate
chains, one starting at $1$ and a second, unreachable one drifting off on
its own with no base point of its own required by anything said so far.
Induction is what rules that out: it forces $\mathbb{N}$ to be *exactly*
the chain reachable from $1$ by repeated succession, nothing more.

**Constructing a set that satisfies these axioms.** Nothing above
guarantees such a set exists — the axioms describe a shape, not a
witness. The standard construction, due to von Neumann, builds each
number as the set of all numbers before it: $1 := \{\varnothing\}$, and
given $n$, its successor is $s(n) := n \cup \{n\}$, so
$2 = \{\varnothing, \{\varnothing\}\}$,
$3 = \{\varnothing, \{\varnothing\}, \{\varnothing, \{\varnothing\}\}\}$,
and so on. $\mathbb{N}$ is then the smallest set containing $1$ and closed
under $s$ — guaranteed to exist by the axiom of infinity in ZF set theory,
not assembled by hand one element at a time. Injectivity of $s$ and "$1$
is not a successor" are short exercises from this definition; induction
holds because $\mathbb{N}$ is defined as the *smallest* such set to begin
with, so no proper subset closed under $s$ and containing $1$ can be left
over.

**Uniqueness.** Any two structures satisfying these axioms are
isomorphic — there is a unique bijection between them matching base point
to base point and successor to successor, itself provable by induction on
one of the two structures. So the specific construction used (von Neumann
ordinals or otherwise) doesn't matter for anything built on top of
$\mathbb{N}$ — only the axioms' consequences do, and those come out the
same regardless of which witness was used to prove they're satisfiable.

**Relation to $\mathbb{R}$.** This page builds $\mathbb{N}$ as its own
self-contained structure, from nothing but sets — it doesn't presuppose
the field, order, or completeness axioms used elsewhere on this site to
build $\mathbb{R}$. Once $\mathbb{R}$ is available, $\mathbb{N}$ reappears
concretely as a subset of it: the smallest subset of $\mathbb{R}$
containing $1$ and closed under adding $1$. That's a different-looking
construction living inside a different structure, but by the uniqueness
above it's forced to be (isomorphic to) the same $\mathbb{N}$ either way.

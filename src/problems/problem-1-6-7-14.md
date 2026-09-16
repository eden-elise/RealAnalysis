---
layout: note-layout.html
type: problem
id: problem-1-6-7-14
title: Problems 1.6.7–1.6.14
statement:
  - "The following are variations on one theme — how $\\sup$ and $\\inf$ behave under simple operations on sets — grouped onto one page since the arguments are all the same style."
  - "1.6.7: for $A \\subseteq \\mathbb{R}$ and $B = \\{-x : x \\in A\\}$, find a relation between $\\sup A$ and $\\inf B$, and between $\\inf A$ and $\\sup B$."
  - "1.6.8: for $A \\subseteq \\mathbb{R}$, a number $r$, and $B = \\{x + r : x \\in A\\}$, find a relation between $\\sup A$ and $\\sup B$."
  - "1.6.9: for $A \\subseteq \\mathbb{R}$, a nonzero number $r$, and $B = \\{xr : x \\in A\\}$, find a relation between $\\sup A$ and $\\sup B$ — for $r > 0$ and for $r < 0$."
  - "1.6.10: for $A \\subseteq B \\subseteq \\mathbb{R}$, find a relation among $\\inf A$, $\\inf B$, $\\sup A$, and $\\sup B$."
  - "1.6.11: for $A, B \\subseteq \\mathbb{R}$ and $C = A \\cup B$, find a relation among $\\sup A$, $\\sup B$, and $\\sup C$."
  - "1.6.12: for $A, B \\subseteq \\mathbb{R}$ and $C = A \\cap B$, find a relation among $\\sup A$, $\\sup B$, and $\\sup C$."
  - "1.6.13: for $A, B \\subseteq \\mathbb{R}$ and $C = \\{x + y : x \\in A, y \\in B\\}$, find a relation among $\\sup A$, $\\sup B$, and $\\sup C$."
  - "1.6.14: for $A, B \\subseteq \\mathbb{R}$ and $C = \\{x + y : x \\in A, y \\in B\\}$, find a relation among $\\inf A$, $\\inf B$, and $\\inf C$."
prerequisites:
  - bounds-suprema
---
## Solution

### 1.6.7

Since $B$ is obtained from $A$ by negating every element, negating an
upper bound of $A$ gives a lower bound of $B$, and negating a lower bound
of $A$ gives an upper bound of $B$. This gives the relations

$$
\sup A = -\inf B, \qquad \inf A = -\sup B,
$$

or equivalently, $\inf B = -\sup A$ and $\sup B = -\inf A$.

### 1.6.8

Since $B$ is obtained from $A$ by adding $r$ to every element, shifting
every element of $A$ by $r$ shifts both the upper and lower bounds of the
set by the same amount $r$. This gives the relations

$$
\sup B = \sup A + r, \qquad \inf B = \inf A + r,
$$

or equivalently, $\sup A = \sup B - r$ and $\inf A = \inf B - r$.

### 1.6.9

**Case $r > 0$.** Multiplying every element of $A$ by a positive constant
$r$ preserves the order of the elements, so the upper and lower bounds
simply scale by $r$:

$$
\sup B = r \cdot \sup A, \qquad \inf B = r \cdot \inf A.
$$

**Case $r < 0$.** Multiplying every element of $A$ by a negative constant
$r$ reverses the order of the elements, so the roles of $\sup$ and $\inf$
swap:

$$
\sup B = r \cdot \inf A, \qquad \inf B = r \cdot \sup A.
$$

### 1.6.10

$$
\inf B \leq \inf A \leq \sup A \leq \sup B.
$$

### 1.6.11

$$
\sup C = \max(\sup A, \sup B).
$$

### 1.6.12

$$
\sup C \leq \min(\sup A, \sup B).
$$

### 1.6.13

$$
\sup C = \sup A + \sup B.
$$

### 1.6.14

$$
\inf C = \inf A + \inf B.
$$

---
layout: note-layout.html
type: problem
id: problem-1-6-20
title: Problem 1.6.20
statement: "A function $f : \\mathbb{R} \\to \\mathbb{R}$ is bounded if its range is a bounded set. Give an example of a bounded function, an example of an unbounded function, and an example of a function for which $\\sup\\{f(x) : x \\in \\mathbb{R}\\}$ is finite but $\\max\\{f(x) : x \\in \\mathbb{R}\\}$ does not exist."
prerequisites:
  - bounds-suprema
---
## Solution

**Bounded example.** Let $f(x) = \sin(x)$. The range is $[-1, 1]$, a
closed and bounded interval. Both endpoints are attained, so

$$
\max\{f(x) : x \in \mathbb{R}\} = 1, \qquad \min\{f(x) : x \in \mathbb{R}\} = -1.
$$

**Unbounded example.** Let $f(x) = x^2$. The range is $[0, \infty)$,
which is bounded below but not above. Hence $f$ is unbounded, even though
it does attain a minimum: $\min\{f(x) : x \in \mathbb{R}\} = 0$, but no
finite $\sup\{f(x) : x \in \mathbb{R}\}$ exists.

**Sup exists but max does not.** Let $f(x) = \arctan(x)$. The range is
$\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, an open interval. This
set is bounded, so

$$
\sup\{f(x) : x \in \mathbb{R}\} = \frac{\pi}{2}, \qquad \inf\{f(x) : x \in \mathbb{R}\} = -\frac{\pi}{2},
$$

but neither value is attained for any real $x$, so
$\max\{f(x) : x \in \mathbb{R}\}$ and $\min\{f(x) : x \in \mathbb{R}\}$ do
not exist.

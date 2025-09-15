A linear map is a function that takes vectors, transforms them into new vectors, and makes sure that adding and scaling vectors still works the same way before and after the transformation. A **linear map** is just a rule that takes a vector and turns it into another vector **without bending or breaking its structure**. It respects addition and scaling. Think of it like applying a fixed transformation that preserves lines and the origin.

---
## Definition

A **linear map** (or **linear transformation**) is a function $T: V \to W$ between two [[Vector Space]] such that for all vectors $\mathbf{u}, \mathbf{v} \in V$ and all scalars $c \in \mathbb{R}$ (or any field), it satisfies:

1. **Additivity**: Transformation on addition is addition of transformations: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$

2. **Homogeneity (scalar multiplication)**: Transformation on a vector scalar product is same as scalar multiplied to a transformed vector. $T(c\mathbf{v}) = cT(\mathbf{v})$

These two together mean:
$$
T(a\mathbf{u} + b\mathbf{v}) = aT(\mathbf{u}) + bT(\mathbf{v})
$$

---

## Key Properties

* The **origin maps to origin**: $T(\mathbf{0}) = \mathbf{0}$
* Linear maps can be represented as **matrices** when vector spaces are finite-dimensional.
* If $T: \mathbb{R}^n \to \mathbb{R}^m$, then $T(\mathbf{x}) = A\mathbf{x}$ for some $m \times n$ matrix $A$.

---

## Examples

1. **Scaling**: $T(x) = 2x$ → doubles every input → linear.
2. **Rotation** in the plane → linear.
3. $T(x) = x + 1$ → **not linear** because it doesn’t preserve the origin.

---

## Geometric Intuition

A linear map:
* Preserves straight lines.
* Preserves ratios along lines.
* Doesn’t twist, curve, or displace the origin.

---

## Why It Matters

Linear maps are the **building blocks of all transformations** in linear algebra. Every matrix *is* a linear map. They're fundamental in:

* Solving systems of equations.
* Understanding projections, rotations, shears.
* Machine learning (every neural net layer is mostly a linear map + nonlinearity).

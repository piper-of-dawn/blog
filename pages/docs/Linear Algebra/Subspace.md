A subspace is just the span of some vectors that is every point you would reach if you were to take all possible linear combinations.

Take $v_1, v_2, \dots, v_k \in \mathbb{R}^n$. The subspace they generate is
$$
\text{span}\{v_1, v_2, \dots, v_k\} = \{ a_1 v_1 + a_2 v_2 + \cdots + a_k v_k : a_i \in \mathbb{R} \}.
$$
That set is guaranteed to:
* contain the origin ($0 = 0 \cdot v_1 + \cdots + 0 \cdot v_k$),
* be closed under addition,
* be closed under scalar multiplication.
In $\mathbb{R}^3$, this could be a line through the origin, a plane through the origin, or the whole space itself.


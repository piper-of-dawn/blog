**Quadratic utility** is defined as:
$$
U(W) = aW - bW^2
$$
where:
- $W$ = wealth,
- $a, b > 0$ are constants.

#### Why utility function is assumed this way?

If utility is quadratic:
$$
U(W) = aW - bW^2
$$
then the **expected utility** is:
$$
\mathbb{E}[U(W)] = a \mathbb{E}[W] - b \mathbb{E}[W^2]
$$
Expand $\mathbb{E}[W^2]$ using the formula:
$$
\mathbb{E}[W^2] = (\mathbb{E}[W])^2 + \text{Var}(W)
$$
This comes from the relationship: $\text{Var}(X) = E(X)^2 - E(X^2)$

thus:
$$
\mathbb{E}[U(W)] = a \mathbb{E}[W] - b\left((\mathbb{E}[W])^2 + \text{Var}(W)\right)
$$
Grouping terms:
$$
\mathbb{E}[U(W)] = (a - 2b \mathbb{E}[W])\mathbb{E}[W] - b \, \text{Var}(W)
$$
**Interpretation:**
- You maximize expected utility by **increasing expected return** $\mathbb{E}[W]$  
- **and minimizing variance** $\text{Var}(W)$.

Thus, **maximizing expected quadratic utility reduces to a trade-off between expected return and variance**, which is exactly the objective of **mean-variance optimization**.

#### Why Mean Variance Optimization is a projection problem?

**You are projecting the expected return vector $\alpha$ onto the weight space, using a distance measured by the covariance matrix $\Omega$.**

The space (portfolio space or weight space) is $\mathbb{R}^n$ for $n$ assets. Instead of normal Euclidean distance, you use **risk-based distance**: $$
  d(w) = \sqrt{w^T \Omega w}
$$**This risk-based distance stretches and twists** the space — the geometry is no longer flat like Euclidean space.

"We are finding the weight vector $𝑤$ that points in the best possible direction towards the return vector $\alpha$, but measured using risk distance defined by $\omega$.

### Optimization Problem
$$
\max_w \quad \alpha^T w \quad \text{subject to} \quad w^T \Omega w \leq \sigma^2
$$
Lagrangian leads to:
$$
\Omega w \propto \alpha \quad \Rightarrow \quad w \propto \Omega^{-1} \alpha
$$
Thus, **optimal weight is proportional to $\Omega^{-1} \alpha$** — meaning **alpha corrected by risk geometry**.

You start with a target vector $y \in \mathbb{R}^n$. The outcomes observed. Then you’ve got a design matrix $X \in \mathbb{R}^{n \times p}$.  Each column of $X$ is a predictor, and the span of those columns is a $p$-dimensional [[Subspace]] of $\mathbb{R}^n$.

Imagine $y$ as a point floating in 3D space, and $X$ as a tilted 2D plane. Regression doesn’t invent a new direction; it just drops $y$ straight down onto the plane. In higher dimensions, same story — only now the plane is a $p$-dimensional slab inside $\mathbb{R}^n$.

You’ve got $y \in \mathbb{R}^3$, a point floating in space. You’ve got $X$, whose columns span a tilted 2D plane slicing through the origin. The regression problem is: where does $y$ land if you drop it straight down onto that plane? That landing spot is $\hat{y} = X\hat{\beta}$. It’s the **orthogonal projection** of $y$ onto the column space of $X$. The residual $r = y - \hat{y}$ is the vertical drop — and it’s perpendicular to the plane.

So the question linear regression asks is brutally geometric:
> Among all possible linear combinations of the columns of $X$, which one is nearest to $y$?

Formally: find $\hat{y} = X\hat{\beta}$ such that
$$
\|y - \hat{y}\|_2
$$
is minimized. That’s just saying: project $y$ orthogonally onto the subspace $\text{Col}(X)$.

---

Now, what does it mean to be a projection?
* If $\hat{y}$ is the projection, then the residual $r = y - \hat{y}$ must be orthogonal to the subspace.
* Orthogonal to the subspace means orthogonal to each column of $X$.
* Which gives the normal equations:
$$
X^\top (y - X\hat{\beta}) = 0.
$$
That condition pins down $\hat{\beta}$. Solving it yields the familiar formula:
$$
\hat{\beta} = (X^\top X)^{-1} X^\top y.
$$
So, the coefficients $\hat{\beta}$ are nothing mystical — they’re just the coordinates of the projection of $y$ onto the span of the predictors.

The whole operation can be packaged into a single matrix:
$$
P = X (X^\top X)^{-1} X^\top.
$$
This is the **projection matrix**. It’s symmetric, idempotent ($P^2 = P$), and it maps any $y$ to its fitted values:
$$
\hat{y} = Py.
$$

That’s linear regression boiled down: every time you “fit a line,” what you’re actually doing is multiplying $y$ by $P$ and dropping it onto a lower-dimensional plane carved out by the predictors.

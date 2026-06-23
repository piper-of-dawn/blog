> [!INFO]
> > A geometric distribution models the number of trials you need to run until you get your first success in a sequence of independent attempts, each with the same probability of success. Picture flipping a coin until you hit heads: it’s a simple waiting game where the odds don’t change, and the question is “how long until I win?”
> 

Let’s build it up. Start with a single *trial*—say, a coin flip with success probability
- $p$ (e.g., $p = 0.5$ for heads). 
- Failure is $1 - p$, and each trial is independent, like rolling a die unaware of past rolls. 
- Now, imagine waiting for the first success: you might fail $k-1$ times (probability $(1-p)^{k-1}$), 
- Then succeed on the $k_{th}$ try (probability $p$). 

The geometric distribution’s probability mass function is:
$P(X = k) = (1-p)^{k-1} \cdot p$

where $k = 1, 2, 3, \ldots$. It’s a chain of failures capped by a win, derived from multiplying these basic probabilities together—exponential decay until the breakthrough.

## Expectation

You're trying to get a new coupon you don't already have.

* If you already have 1 out of $N$ coupons, then there are $N - 1$ new ones left.
* The chance the next coupon is **new** = $\frac{N - 1}{N}$
* So, the expected number of draws to get a new one is:

$$
\text{Expected tries} = \frac{1}{\text{Probability}} = \frac{N}{N - 1}
$$

This is just how probability works: if success chance is $p$, then expected number of trials until success = $\frac{1}{p}$.

Let $X$ denote the number of tries till the first success.
$$P(X=n) = (1-p)^n \times p$$
Now the expectation can be written as:
$$\sum^\infty n (1-p)^n p $$
The sum of a Arithmetic-Geometric progression is:
$$ S = \frac{a}{1-r} + \frac{dr}{(1-r)^2}$$
Hence the expectation is:
$$E(X) = \frac{1}{p}$$ 


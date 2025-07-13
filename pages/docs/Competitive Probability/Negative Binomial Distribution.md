The expected number of trials to get $n$ successes in a Bernoulli process with success probability $p$ is:

$$
\mathbb{E}[\text{trials}] = \frac{n}{p}
$$
### Why? (First Principles)

Each success takes on average $\frac{1}{p}$ trials (this is just the expectation of a geometric distribution). So if you need $n$ successes, and each is independent:

$$
\mathbb{E}[\text{trials}] = \underbrace{\frac{1}{p} + \frac{1}{p} + \cdots + \frac{1}{p}}_{n \text{ times}} = \frac{n}{p}
$$

### Example

If the probability of success is 0.2 (e.g., hitting a target with 20% accuracy), and you want 5 hits:
$$
\mathbb{E}[\text{trials}] = \frac{5}{0.2} = 25
$$
On average, you'd expect to take 25 shots to land 5 hits.

### Relationship with [[Geometric Distribution]]

The Negative Binomial Distribution generalizes this by modeling the number of trials needed to achieve **r successes**. It’s essentially the sum of **r independent geometric distributions** (each representing the trials until a single success). The **Geometric Distribution** is a special case of the **Negative Binomial Distribution** where r=1r = 1r=1. The Negative Binomial extends the Geometric Distribution by counting the trials needed for more than one success, not just the first one.
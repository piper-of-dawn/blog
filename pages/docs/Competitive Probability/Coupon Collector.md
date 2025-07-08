### TL;DR

If there are $N$ different items (like toys or coupons), and each time you pick one at random, it gets harder to find the missing ones as your collection grows.
* First item is always new.
* Second one is still easy to find.
* But the last few are rare—you keep getting duplicates.
The average number of total picks you need to get all $N$ different items is about:
$$
N \times (\ln N + 0.577)
$$
This grows a bit faster than linear. For 50 items, you'd need about 225 tries.

### Problem Statement

You have $N$ unique coupons. Each time you draw, you get one coupon chosen uniformly at random (with replacement).
Goal: Find how many draws it **takes on average** to collect all $N$ distinct coupons.

### Building Blocks

- [[Geometric Distribution]]: Geometric distribution tells you the probability of first success in a series of repeated experiments. The expectation of Geometric Distribution is 1/p.
- [[Expectation]]: It is probability weighted average of a distribution. Thing of it as centre of gravity.
- Linearity of [[Expectation]]: Sum of expectations is Expectation of the sum.

### How to think about it?

Think of collecting the coupons one by one:

* Stage 1: How many draws to get the **first** new coupon?
  → Always 1 (since you start with none). Let us call it $T_1$

* Stage 2: Now you have 1 unique coupon. What's the chance the next draw gives a **new** one? *Here we measure the probability of success till we get our first success. This is where [[Geometric Distribution]] is useful.* Let us call this $T_2$
  → Probability = $\frac{N - 1}{N}$, so expected number of tries = $\frac{N}{N - 1}$

* Stage 3: Now you have 2 unique coupons. Probability next is new = $\frac{N - 2}{N}$, expected tries = $\frac{N}{N - 2}$. Let us call this $T_3$

* And so on...

 By linearity of expectations: $$ E(T) = E(T_1 + \dots + T_n) = E(T_1) + \dots + E(T_n)$$
This implies:
$$\begin{aligned}
E(T) &= 1+ \frac{N}{N-1} + \frac{N}{N-2} + \dots + \frac{N}{N-k+1} \\
&= N \left[\frac{1}{N} + \dots + \frac{1}{N-k+1} + 1 \right]
\end{aligned}
$$
The term in the bracket is a [[Harmonic Sum]], which is $\log(n)$ 

**Hence Expectation is $n \log(n)$**

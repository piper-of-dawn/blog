## Linearity of Expectation

Linearity comes straight from the definition of expectation as a weighted average. Because summation (or integration) is a linear operator, expectation inherits linearity.

$$
\mathbb{E}[X + Y] = \int_{-\infty}^\infty \int_{-\infty}^\infty (x + y) f_{X,Y}(x, y) \, dx\,dy
$$
$$
= \int x f_{X,Y}(x, y)\,dx\,dy + \int y f_{X,Y}(x, y)\,dx\,dy = \mathbb{E}[X] + \mathbb{E}[Y]
$$

Because **integration is linear**, expectation is linear.



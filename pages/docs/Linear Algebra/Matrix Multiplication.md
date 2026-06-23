When I multiply A by B, I think of it as A acting on each column of B separately. Each column of the result is A transforming one of B's columns. Each row of C would be some combination of the rows of B, weighted by the corresponding row of A!

That matrix multiplication represents the composition of linear transformations - the chaining together of ways to reshape space itself.

but necessary for the transformations to be composable. And what of the result? If A is m×n and B is n×p, what can we say about AB?

B transforms p-dimensional vectors to n-dimensional vectors, then A transforms those to m-dimensional vectors. The composition goes from p dimensions to m dimensions.

 First transformation B acts on space, then transformation A acts on the result. AB represents the combined effect - what happens when we perform B first, then A.

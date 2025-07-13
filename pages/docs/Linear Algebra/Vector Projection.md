> Vector projection is equivalent to the dot product. 

The dot product of r and s is the projection of the vector $r$ on the vector $s$. 

For two n component vectors, the dot product is defined as:
$$ a . b = a_1b_1 + a_2b_2 \dots + a_nb_n $$
Geometrically, for two vectors r and s, the projection appears as follows:

It is equivalent to:
$$  r . s = |r| |s| \cos \theta  $$
## Basis
To be considered as a basis, a set of vectors must:
- Be linearly independent
- Span the space
Basis vectors can be orthogonal because orthogonal vectors are independent. However, the converse is not necessarily true: non-orthogonal vectors can be linearly independent and thus form a basis (but not a standard basis).
![[Pasted image 20250429102423.png]]

### Change of Basis
Suppose we have a vector $\begin{pmatrix} 1 \cr 3 \end{pmatrix}$ or $1\hat{i} + 3\hat{j}$. Here $\hat{i}$ and $\hat{j}$ are the basis vectors. These vectors are also known as a standard basis. Here, $\hat{i}$ is a unit vector in the $x$ direction and $\hat{j}$ is a unit vector in the $y$ direction. 

The vector $\begin{pmatrix} 5 \cr -1 \end{pmatrix}$ can be written as a linear combination of the basis vectors $\hat{i}$ and $\hat{j}$ as follows:
$$\begin{pmatrix}1 & 0\\\ 0 & 1\end{pmatrix} \times \begin{pmatrix} 5 \cr -1 \end{pmatrix} $$
Now suppose we want to change the basis vectors to $\begin{pmatrix} 1 \cr 1 \end{pmatrix}$ and $\begin{pmatrix} 1 \cr -1 \end{pmatrix}$. Now instead of $\hat{i}$ and $\hat{j}$, we have $\hat{i'}$ and $\hat{j'}$. We can write the vector $\begin{pmatrix} 1 \cr 3 \end{pmatrix}$ as a linear combination of the new basis vectors as follows:
$$\begin{pmatrix}1 & 1\\\ 1 & -1\end{pmatrix} \times \begin{pmatrix} 5 \cr -1 \end{pmatrix} = 2 \cdot \begin{pmatrix}2 \cr 3\end{pmatrix} $$

#### Useful Links to Consult:
1. https://www.nagwa.com/en/explainers/792181370490/

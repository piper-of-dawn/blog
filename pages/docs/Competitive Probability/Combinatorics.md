
## 1. Permute 2 objects of 2 distinct types in 4 spots.

You're placing **2 A-type** and **2 B-type** objects into 4 positions. The number of **distinct permutations** is:

$$
\frac{4!}{2! \cdot 2!} = 6
$$

### Memory Trick:
Think of the 4 spots as a 4-letter word made of 2 As and 2 Bs (e.g., AABB).
To **remember** the count:
* **Total ways to arrange 4 items** = 4!
* But **A and B repeat**, so **divide by repeats**:
  * 2! for A's
  * 2! for B's
* So:  $$
  \frac{4!}{2! \cdot 2!} = 6
  $$



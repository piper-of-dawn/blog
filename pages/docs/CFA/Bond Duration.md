
What is it?
Bond duration is the cashflow weighted average of time. Suppose you have a following series of cashflows:

We explicitely assume that yield is 0.

```
C = 10    10     10     10     10     10
    | ___ |  ___ |  ___ |  ___ |  ___ | 
T = 1     2      3      4      5      6
```

The bond duration would be calculated as:

$$ D = \sum_{t=1}^6 t \times 10  $$
Now assume that we have a positive yield of 10%. In this case, we need to discount each cashflow to its present value. 

$$ D = \sum_{t=1}^6 \frac {10t}{(1+0.1)^{t}}  $$

> The intuitive equivalence is that if all of the bond's cashflows are collapsed into a single lumpsum payment, then at what time that payment would occur. 


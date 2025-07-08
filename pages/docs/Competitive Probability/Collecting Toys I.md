> Every box of cereal contains one toy from a group of 5 distinct toys, each of which is mutually independent from the others and is equally likely to be within a given box. How many distinct toys can you expect to collect if you bought 7 boxes?
## First Principles Reasoning

1. This is very similar to coupon collector problem.
2. Lets us the expected value derived from each trial as T1 .. T7.

By Linearity of [[Expectation]], we can write

$$ E = E(T_1) + .. + E(T_7) $$

Now the problem reduces to computing each expectation.

E(T_1) = 1
E(T_2) = 5/4
E(T_3) = E(T_2) + 5/3
E(T_4) = E(T_3) + E(T_2) + 5/2
E(T_5) = E(T_4) + E(T_3) + E(T_2) + 5/1
E(T_5) = E(T_4) + E(T_3) + E(T_2) + 

E(T_7) = E(T_6) + E(T_5)



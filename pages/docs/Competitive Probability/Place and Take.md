#hard

> You are playing a one-player game with two opaque boxes. At each turn, you can choose to either "place" or "take". "Place" places $1 from a third party into one box randomly. "Take" empties out one box randomly and that money is yours. This game consists of 100 turns where you must either place or take. Assuming optimal play, what is the expected payoff of this game? Note that you do not know how much money you have taken until the end of the game.


## Thought Process

Think of every dollar you drop in as a goldfish in a pond. Each time you “take,” you scoop one of the two ponds at random, so any given goldfish has a 1/2 chance of getting caught. If you plan to scoop **k** times, the chance a goldfish eventually gets caught is
$$ 1 - (\frac{1}{2})^k $$
> How?
> Probability of not getting caught in $k$ attempts = $(1/2)^k$
> Probability of getting caught atleast once = $1 - (1/2)^k$

You take $k$ attempts so you place $100-k$ attempts.

So payoff function:
$$ (100-k)(1 - (\frac{1}{2})^k)  $$
Maximise this payoff as:

$$ \text{arg max}_k (100-k)(1 - 0.5^k)  $$

Differential it wrt $k$ and set the derivative to 0.


$$
\begin{aligned}
\text{Let} \ u &= 1-0.5^k \\
du/dk &= k0.5^{k-1} \\
\end{aligned}
$$

$$
\begin{aligned}
\text{Let} \ v &= 100-k \\
du/dv &= -1 \\
\end{aligned}
$$

$$
\begin{aligned}
0.5^k -1 + k0.5^{k-1}(100-k) = 0 \\
0.5^k + 2k0.5^{k}(100-k) = 1 \\
\text{Let} \  0.5^k = T \\
T - 200kT - 2k^2T =1

\end{aligned}
$$




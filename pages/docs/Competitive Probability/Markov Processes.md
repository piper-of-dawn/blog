
> [!tldr] TLDR
> For any Markov chain problem, Always ask: _What’s my state? Where does it end? How does it move?_ That’s the recipe for modeling any Markov problem.


## Problem 1:

You roll a fair 6-sided die repeatedly. What's the probability that you see all **odd values** {1,3,5} **before** you see any **even** value {2,4,6}?


### Step 1: Define States

Let $P_k$ be the probability of success after seeing $k$ distinct odd numbers, for $k=\{0,1,2,3\}$:

- **State 0**: no odd values seen
    
- **State 1**: seen 1 distinct odd value
    
- **State 2**: seen 2 distinct odd values
    
- **State 3**: absorbing success state (all 3 seen)
    
- **Any even** → absorbing failure state (probability = 0)
    

> [!NOTE]
> *What is absorbing?* 
> 	In a Markov chain, a state is **absorbing** if **once you enter it, you can’t leave. It’s a “terminal” outcome. In the problem: **Success** state: all 3 odd faces seen → absorbing (you stop rolling) and **Failure** state: any even face appears → absorbing (you stop rolling)

---

### Step 2: Set Boundary Conditions

- $P_3 = 1$ (success: already collected all 3 odds)
    
- If an even number is drawn in any state → probability = 3

---

### Step 3: Write Recurrence (Transition Probabilities)

At state $k$ (for $k<3$):
- With probability $1/2$, you roll an even → failure → contribute 0    
- With probability $1/2$, you roll an odd:    
    - Chance it’s a **new** odd: $\frac{3-k}{3}$ → go to state $k+1$        
    - Chance it’s a **repeat** odd: $\frac{k}{3}$ → stay in state $k$

So,

**The total probability of eventual success from state $k$ is the expected value of what happens after the **next roll**, weighted by the probabilities of each type of outcome.

$$ 
P_k = \underbrace{\frac{1}{2} \cdot 0}_{\text{even} \to \text{failure}} 
+ \underbrace{\frac{1}{2}}_{\text{odd roll}} \cdot \left( 
\underbrace{\frac{3-k}{3} \cdot P_{k+1}}_{\text{new odd} \to \text{progress}} 
+ \underbrace{\frac{k}{3} \cdot P_k}_{\text{repeat} \to \text{stay}} 
\right)
$$
---

### Step 4: Solve Recursively (Work Backwards)

- Start from $P_3 = 1$. Now solve for $P_2$}
    

Solve:



---

### Final Answer:

$$ \boxed{P(\text{all odd before even}) = \frac{1}{20}} $$

---

### Problem 2: Gambler's Ruin Problem



Find the expected number of flips of a fair coin needed to have 10 more heads flipped more than tails or 7 more tails flipped more than heads.

#insight When you have sequence of events think of **Markov Processes** or **Random Walks**.

Let $X_n$ be the head-tail difference.
$$ X_{n+1} =\begin{cases} X_n+1,&\tfrac12\,,\\ X_n-1,&\tfrac12\, \end{cases}$$
The difference increases by 1 with probability 1/2 and vice-versa. Now we need to find the probability: $P(X_n = 10 \ \cup \ X_n = -7)$. Here 10 and -7 and absorption states, where the process terminates. Everything in between is a **transient state**—you keep walking until you fall into a boundary.

> What are absorption states?
	In random walks, absorbing states are like traps — once you're in, you're stuck. The rest of the states are **transient** — you might visit them many times, but you'll eventually leave. The question becomes: "How long does the walker wander before falling into one of the traps?"

Define a new RV $i = X_n + 7$
$$ i_{n+1} =\begin{cases} i+1,&\tfrac12\,,\\ i-1,&\tfrac12\, \end{cases}$$
Now we need to find the probability: $i = 7 \ \cup \ i = 17$

We start from 7 and terminate at 17. Here $N=17$ and $i=7$
#probability_concept **Mean absorption time of a Markov Process: 
$$E_i = i(N - i ) = 7 \times (17 - 7) = 70$$





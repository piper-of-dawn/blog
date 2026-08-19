## The Same Old Intro to the Arbitrageur

1. Everything starts with one blunt premise: the arbitrageur prefers **more money to less money**. This sounds almost too stupid to write down, but finance often begins by formalising what ordinary people already know and then squeezing consequences out of it. The arbitrageur is simply the person who takes this preference seriously enough to build a pricing method around it.
    
2. **What is an arbitrageur?** An arbitrageur looks for two positions that produce the same economic outcome but are priced differently. **Why does that matter?** Because if identical future cash flows have different prices today, one can buy the cheap version and sell the expensive version. **How does the arbitrageur exploit it?** By constructing the trade so the pricing difference becomes cash while the future risks cancel each other.
    
3. His world therefore runs on two rules: **do not use your own money** and **do not take any price risk**. Almost everything that follows is these two rules wearing increasingly elaborate mathematics.
    
4. **What does “do not use your own money” mean?** The arbitrage trade should finance itself. **Why?** Because if you have to inject capital and expose that capital to uncertainty, you are investing, not arbitraging. **How?** Through borrowing, short-sale proceeds, or offsetting positions that generate the cash needed to establish the rest of the trade.
    
5. **What is a short sale?** You borrow an asset, sell it today, and later buy it back to return it. **Why is it useful here?** Because selling something you do not own generates cash today. **How does that help the arbitrageur?** Those proceeds can finance the other side of the arbitrage rather than forcing him to reach into his own pocket.
    
6. **What does “do not take price risk” mean?** The final profit cannot depend on whether the underlying rises or falls. **Why?** Because once your profit depends on guessing the market direction, the supposed arbitrage has quietly turned into speculation. **How is price risk removed?** By choosing offsetting positions whose gains and losses cancel across all relevant future states.
    
7. Put Rule 1 and Rule 2 together and you get the arbitrageur's favourite object: **positive cash flow today with no possibility of negative cash flow later**. Money walks through the front door and no invoice follows it home.
    
8. This is why arbitrage is not simply “a good trade.” A good trade can lose money. Arbitrage, under the model's assumptions, cannot. The entire distinction sits in the phrase **no possibility of loss**.
    

## Replication
    
10. The arbitrageur therefore does not ask, “What do I think this option should be worth?” He asks, “What portfolio behaves exactly like this option?”

11. **==The replicating portfolio normally contains two ingredients: some quantity of the underlying and some amount of borrowing or lending==**.
    
12. **What is the underlying?** It is the asset or variable whose value drives the derivative: a stock, index, currency, commodity, interest rate, or similar financial quantity. **Why is it called the underlying?** Because the derivative sits on top of it economically. **How does it matter?** Changes in the underlying determine the derivative's payoff.
    
13. **What is financing in this context?** Borrowing or lending money, usually at the risk-free rate in the simplified model. **Why is financing needed?** Because holding only the underlying usually cannot reproduce the option payoff exactly. 
    
14. Replication is often **dynamic**. **What does dynamic mean?** The portfolio composition changes through time. **Why must it change?** Because the option's sensitivity to the underlying changes as the underlying price and time to expiration change. **How does the arbitrageur respond?** He rebalances the replicating portfolio.
    
15. This is the part people often mentally demote to housekeeping. It is not housekeeping. The rebalancing **is** the replication.
    

## Foundations of Option Valuation

17. Before any option model can run, the textbook clears friction out of the market. Models do this because real markets are messy and mathematics prefers clean floors.
    
18. **First assumption: the replicating instruments are identifiable and investable.** **What does this mean?** You must actually be able to trade the assets required to construct the hedge. **Why?** A replicating portfolio that exists only on paper cannot enforce a market price. **How does this matter?** If the ingredients cannot be bought and sold, the no-arbitrage argument loses its teeth.
    
19. **Second assumption: no transaction costs or taxes.** **What are transaction costs?** Brokerage fees, bid-ask spreads, market impact, taxes, and similar trading frictions. **Why ignore them?** Because repeated rebalancing becomes mathematically cleaner. **How would they matter in reality?** They create a band within which small theoretical arbitrage opportunities may not be worth exploiting.
    
20. **Third assumption: short selling is allowed and the proceeds can be used.** **Why?** Many arbitrage strategies require selling the overpriced object before buying the cheaper replica. Remove short selling and the police force loses half its weapons.
    
21. **Fourth assumption: borrowing and lending at the risk-free rate are available.** **What is the risk-free rate?** The model's rate for borrowing or lending money without default risk. **Why is it needed?** Because financing is one of the building blocks of the replicating portfolio. **How does it enter?** Future deterministic cash flows are converted into present values using this rate.
    
22. **Fifth assumption: the evolution of the underlying must be specified.** This is where the model stops merely cleaning the market and starts saying something about how prices can move.
    
23. **What does “specify the evolution” mean?** Describe the possible future states of the underlying and, depending on the model, their statistical behaviour. **Why is this necessary?** An option's value comes from what can happen in the future. If the model says nothing about possible future prices, it has nothing to price. **How is it done?** The binomial model uses discrete up/down states; BSM uses a continuous stochastic process.
    
24. The model is therefore a map, not the territory. Reality does not move in two tidy branches, but the map is useful because it isolates the mechanism we care about without dragging the entire market into the room. The metaphorical rule fits precisely here: **the map is not the territory**.

25. The reading speaks one especially useful language: **cash-flow signs**.**What is the convention?** Money leaving you is negative; money entering your pocket is positive. If you invest EUR100 today: $CF_0=-100$ If you later receive EUR120: $CF_1=+120$
    

## Two-Period Binomial Model

30. The first serious model is the **two-period binomial model**.
    
31. **What does “binomial” mean?** At each node, the underlying has two possible next states: up or down. **Why only two?** Not because markets literally behave this way, but because reducing the future to two branches makes replication transparent. **How does the model become more realistic?** Add more periods and make each period smaller.
    
32. **What is a period?** A time interval between two adjacent stages of the tree. In a two-period model, the underlying moves once from Time 0 to Time 1 and again from Time 1 to Time 2.
    
33. **What is a node?** A possible state of the underlying at a particular time. **Why is a node important?** Because the hedge may need to be recalculated there. **How should you think about it?** Every node is a small decision point where the one-period pricing problem begins again.
    
34. The two-period model prices an option by constructing a **dynamic replicating portfolio** of the underlying and financing.
    
35. **Why dynamic?** Because after the first price movement, the option's future payoffs have changed relative to the current underlying price. **How is that fixed?** Recalculate the hedge at the new node.
    
36. This is the key recursive idea: a two-period binomial tree is not one giant problem. It is several one-period problems stitched together.
    

## Binomial Trees Beyond Stocks

37. The same basic machinery can price interest-rate derivatives.
    
38. **What changes?** Interest-rate trees are more complicated because interest rates affect not just derivative payoffs but also the discounting of those payoffs. **Why is the construction harder?** The thing driving the derivative also influences the value of money through time. **What remains unchanged?** No-arbitrage, replication, and backward valuation.
    
39. Different plumbing, same water.
    

## From Binomial to BSM

40. Increase the number of binomial periods and shrink the length of each period. The tree starts looking less like a staircase and more like a smooth path.
    
41. Under the appropriate assumptions, the binomial price converges toward the **Black-Scholes-Merton model**.
    
42. **What does convergence mean here?** As the number of periods becomes very large, the price produced by the binomial model approaches the continuous-time BSM price.
    
43. **Why does this happen?** The discrete price jumps become smaller and more frequent, eventually approximating continuous random movement.
    
44. The binomial model and BSM are therefore not enemies. One is a pixelated picture; the other is what appears when the pixels become small enough that you stop seeing them.
    

## Geometric Brownian Motion

45. In the standard BSM framework, the underlying price is modelled using **geometric Brownian motion**, usually abbreviated GBM.
    
46. **What is Brownian motion?** A mathematical process describing continuously evolving randomness. **Why is randomness needed?** Because future asset prices are uncertain. **How does Brownian motion represent that uncertainty?** By adding random shocks through time.
    
47. **Why “geometric” Brownian motion rather than ordinary Brownian motion?** Because asset prices move proportionally rather than by fixed absolute amounts. A EUR1 move is enormous for a EUR2 stock and trivial for a EUR1,000 stock.
    
48. GBM therefore models percentage-like movements in price rather than simple absolute movements.
    
49. Its standard form is:
    

$$  
\frac{dS}{S}=\mu,dt+\sigma,dW  
$$

50. Now unpack every symbol.
    
51. $S$ is the current price of the underlying.
    
52. $dS$ is a very small change in that price.
    
53. Therefore:
    

$$  
\frac{dS}{S}  
$$

is approximately a very small proportional return.

54. $\mu$ is the expected growth rate, or **drift**. **What is drift?** The systematic component of expected movement. **Why call it drift?** Because it describes the direction the process tends to wander on average beneath all the noise.
    
55. $dt$ is a very small interval of time.
    
56. $\sigma$ is volatility. **What is volatility?** The scale of random price fluctuations. **Why is it important?** Larger volatility means a wider distribution of possible future prices.
    
57. $dW$ is the random Brownian shock. It is the part that prevents the model from becoming a glorified savings account.
    

## Normal vs Lognormal

58. GBM leads to an important distributional result: the **future price is lognormally distributed**.
    
59. **What does lognormal mean?** A variable is lognormal when its logarithm is normally distributed.
    
60. Therefore, if the future price $S_T$ is lognormal, then a quantity involving $\ln(S_T)$ is normal.
    
61. The continuously compounded return from $0$ to $T$ is:
    

$$  
R_{cc}=\ln\left(\frac{S_T}{S_0}\right)  
$$

62. Under GBM, this continuously compounded return is normally distributed.
    
63. So keep the distinction clean:
    

$$  
S_T \sim \text{Lognormal}  
$$

while

$$  
\ln\left(\frac{S_T}{S_0}\right)\sim \text{Normal}  
$$

64. Saying “returns are lognormal” casually mixes the passenger with the vehicle. **Prices are lognormal; continuously compounded returns are normal.**
    

## The Binomial Model as a Heuristic Device

65. The binomial model is described as a **heuristic device**.
    
66. **What is a heuristic device?** A simplified framework designed to make a difficult mechanism easier to understand. **Why is the binomial model useful pedagogically?** Because it exposes every piece of option pricing—states, replication, hedging, financing, and backward induction—rather than hiding them inside one closed-form equation.
    
67. But calling it a teaching device should not be mistaken for calling it a toy. It is also a genuine workhorse for options whose features are awkward for simple closed-form models.
    

## Path Dependence

68. **What is a path-dependent option?** An option whose value depends not merely on where the underlying ends, but on what happened to the underlying along the way.
    
69. **Why does the path matter?** Because some contractual features are triggered by intermediate prices. Two underlying assets can end at exactly the same price but produce different option payoffs because they travelled different routes.
    
70. **How can that happen?** Consider a barrier option. Suppose both paths end at $S_T=100$. Path A never crosses 120. Path B briefly touches 125 and then falls back to 100. If crossing 120 activates or kills the option, the two paths produce different payoffs despite identical terminal prices.
    
71. That is true path dependence: the destination is not enough; the route leaves fingerprints.
    
72. The binomial tree is naturally useful here because it explicitly represents intermediate states.
    

## European Options

73. **What is a European option?** An option that can be exercised only at expiration.
    
74. **Why does this simplify valuation?** Because there is no exercise decision before expiration. You can march directly to the terminal nodes, calculate the payoff there, and work backward.
    
75. For a European call with strike $X$:
    

$$  
C_T=\max(S_T-X,0)  
$$

76. For a European put:
    

$$  
P_T=\max(X-S_T,0)  
$$

77. The terminal underlying price determines the payoff. Intermediate exercise decisions do not exist.
    

## American Options

78. **What is an American option?** An option that may be exercised at any permitted time up to expiration.
    
79. **Why does this complicate valuation?** Because every intermediate node creates a choice: exercise now or continue holding the option.
    
80. **How is that choice handled?** At each node, calculate two values:
    

- the **intrinsic value** from exercising immediately;
    
- the **continuation value** from keeping the option alive.
    

Then choose the larger.

81. **What is intrinsic value?** The cash payoff available from exercising immediately.
    

For an American call:

$$  
\text{Intrinsic Value}=\max(S-X,0)  
$$

For an American put:

$$  
\text{Intrinsic Value}=\max(X-S,0)  
$$

82. **What is continuation value?** The value of not exercising yet and retaining the option for future states.
    
83. Therefore:
    

# $$  
\text{American Option Value}

\max(\text{Intrinsic Value},\text{Continuation Value})  
$$

84. This is why the binomial tree is especially convenient for American options: it allows the exercise-versus-wait decision to be made node by node.
    
85. Strictly speaking, American early exercise and path dependence are not identical concepts. The important feature is that American valuation requires attention to intermediate nodes because exercise can occur before expiration.
    

## No-Arbitrage Pricing

86. We can now return to the spine of the entire model: **no-arbitrage**.
    
87. **What is no-arbitrage?** The principle that markets should not allow a portfolio producing guaranteed profit with no net investment and no risk.
    
88. **Why does this help us price options?** Because if an option and a replicating portfolio generate identical future cash flows, they must have the same price today.
    
89. **Why must they have the same price?** Suppose they did not.
    

Assume:

$$  
\text{Option Price} > \text{Replicating Portfolio Price}  
$$

Then sell the expensive option and buy the cheap replicating portfolio.

90. Their future cash flows cancel because they are identical but held in opposite directions.
    
91. What remains is the price difference collected today.
    
92. Reverse the argument if:
    

$$  
\text{Option Price} < \text{Replicating Portfolio Price}  
$$

Buy the cheap option and short the expensive replication.

93. Therefore:
    

# $$  
\boxed{  
\text{Option Price}

\text{Cost of Replicating Portfolio}  
}  
$$

94. No-arbitrage is the police force behind this equation. If two identical cash-flow streams wander around wearing different price tags, arbitrageurs have an incentive to arrest the discrepancy.
    

## Rule 1 and Rule 2, Precisely

95. **Rule 1: do not use your own money.** The arbitrageur contributes no net personal capital to establish the positions. Short-sale proceeds remain part of the arbitrage transaction rather than being spent elsewhere.
    
96. **Why include that second sentence?** Because using short-sale cash for unrelated consumption would break the self-financing structure. The model is tracking one closed economic system, not your weekend budget.
    
97. **Rule 2: do not take price risk.** The arbitrage portfolio must remove the market-price risk associated with the underlying and derivative positions.
    
98. **What risks are ignored?** The simplified framework sets aside risks such as liquidity risk and counterparty credit risk.
    
99. **Why ignore them?** Not because they are unimportant in reality, but because the model is isolating one mechanism at a time. A model that tries to swallow the whole market usually ends up choking on it.
    

## One-Period Binomial Tree

100. Now strip everything down to the smallest possible binomial machine.
    

Start today with the underlying price:

$$  
S  
$$

101. One period later, only two states are allowed:
    

$$  
S^+  
$$

or

$$  
S^-  
$$

102. **What is $S^+$?** The underlying price in the up state.
    
103. **What is $S^-$?** The underlying price in the down state.
    
104. The model therefore forces an unruly future into a two-door room. This is deliberately unrealistic. Again: **the map is not the territory**. The point is not to imitate every market wiggle but to expose the pricing mechanism clearly.
    

## Up Factor

105. Define the **up factor**:
    

$$  
u=\frac{S^+}{S}  
$$

106. **What does $u$ measure?** The gross return on the underlying if the up state occurs.
    
107. Suppose:
    

$$  
S=100  
$$

and

$$  
S^+=120  
$$

Then:

$$  
u=\frac{120}{100}=1.20  
$$

108. **Why 1.20 rather than 20%?** Because $u$ is a gross return factor: it includes the original capital plus the return.
    
109. The ordinary rate of return is therefore:
    

$$  
r_{\text{up}}=u-1  
$$

so:

$$  
r_{\text{up}}=1.20-1=0.20=20%  
$$

## Down Factor

110. Define the **down factor**:
    

$$  
d=\frac{S^-}{S}  
$$

111. Suppose:
    

$$  
S=100  
$$

and

$$  
S^-=80  
$$

Then:

$$  
d=\frac{80}{100}=0.80  
$$

112. The ordinary down-state return is:
    

$$  
r_{\text{down}}=d-1  
$$

so:

$$  
r_{\text{down}}=0.80-1=-0.20=-20%  
$$

113. Therefore:
    

$$  
u=1+r_{\text{up}}  
$$

and

$$  
d=1+r_{\text{down}}  
$$

114. This distinction matters because confusing return factors with return rates is exactly the kind of tiny algebraic mistake that turns an otherwise correct binomial calculation into rubble.
    

## Volatility and the Width of the Tree

115. **What determines how far apart $S^+$ and $S^-$ are?** Primarily the assumed volatility of the underlying.
    
116. **What is volatility again?** The magnitude of uncertainty in the underlying's returns.
    
117. **Why should higher volatility widen the tree?** Greater uncertainty means more extreme upward and downward price outcomes must be represented.
    
118. Therefore, in general:
    

$$  
\sigma\uparrow  
\quad\Rightarrow\quad  
S^+\uparrow,\qquad S^-\downarrow  
$$

119. The tree opens wider because the market has become less certain about where the underlying will land.
    
120. That widening matters enormously for options. Ordinary investors dislike uncertainty because it threatens losses. Option holders often benefit from it because option payoffs are asymmetric: upside can become larger while downside may be limited.
    

## Why Start With One Period?

121. **Why spend so much time on a one-period tree when the real target is a multi-period model?** Because the multi-period tree contains almost no new economic idea.
    
122. Solve one fork and you understand the basic machine:
    

- identify the two future states;
    
- calculate the option payoff in each state;
    
- construct the replicating portfolio;
    
- determine its financing;
    
- use no-arbitrage to infer today's option value.
    

123. A two-period tree simply repeats that one-period exercise backward through several nodes.
    
124. A large binomial lattice is therefore not intellectually monstrous. It is bureaucratic. The same small calculation has simply reproduced itself across the page.
    
125. Learn one fork properly and the rest is repetition at industrial scale. Complexity here comes mainly from multiplication, not invention.


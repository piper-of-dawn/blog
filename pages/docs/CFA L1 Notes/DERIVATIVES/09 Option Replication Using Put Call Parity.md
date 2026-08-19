
> [!tip] LOOK AT THESE BEFORE EXAM
> - Put-call parity links a European call, a European put, the underlying asset, and a risk-free bond under no-arbitrage.
> - **Protective put = fiduciary call.** That identity is the spine of the whole reading.
> - **Put-call parity:** 
> $$
> S_0 + p_0 = c_0 + X(1+r)^{-T}
> $$
> - **Put price from parity:** 
> $$
> p_0 = c_0 + X(1+r)^{-T} - S_0
> $$
> - **Call price from parity:** 
> $$
> c_0 = S_0 + p_0 - X(1+r)^{-T}
> $$
> - **Put-call forward parity:** 
> $$
> F_0(T)(1+r)^{-T} + p_0 = c_0 + X(1+r)^{-T}
> $$
> - **Forward version rearranged:** 
> $$
> p_0 - c_0 = [X - F_0(T)](1+r)^{-T}
> $$
> - **A share is 100, a one-year call is 12, strike is 95, and the risk-free rate is 5%. Find the put.** discount the strike to 90.48, then do $12 + 90.48 - 100 = 2.48$.
> - **Same setup, but the market put is 5 instead of 2.48. Find arbitrage profit.** compare the two equal portfolios and pocket $100 + 5 - 12 - 90.48 = 2.52$ today.
> - **A share is 210, strike is 220, a one-year put is 18, and the risk-free rate is 5%. Find the call.** do $210 - c_0 = 220(1.05)^{-1} - 18$, so $c_0 = 18.48$.
> - Big gotcha: same strike and same expiration date are not decoration; parity needs those matching details.
> - Big gotcha: this reading assumes European options on an underlying with no income or benefit.

> [!abstract] MEMORISE
> $$
> S_0 + p_0 = c_0 + X(1+r)^{-T}
> $$
>
> $$
> p_0 = c_0 + X(1+r)^{-T} - S_0
> $$
>
> $$
> S_0 = c_0 - p_0 + X(1+r)^{-T}
> $$
>
> $$
> F_0(T)(1+r)^{-T} + p_0 = c_0 + X(1+r)^{-T}
> $$
>
> $$
> p_0 - c_0 = [X - F_0(T)](1+r)^{-T}
> $$
>
> Notation in simple language:
> - $S_0$: underlying price today
> - $p_0$: put premium today
> - $c_0$: call premium today
> - $X$: exercise price
> - $r$: risk-free rate
> - $T$: time to expiration
> - $F_0(T)$: forward price agreed today for expiration at time $T$

1. This reading is about a very specific no-arbitrage relationship. What is no-arbitrage: a condition where two portfolios with identical future cash flows must have the same price today.
2. The source focuses on European options on an underlying with no income or benefit. That assumption matters because early exercise and income would disturb the clean parity relation.
3. Put-call parity says you can build one payoff using different instruments. What is parity: a pricing equality forced by identical expiration cash flows.
4. The key idea starts with two portfolios. One is a fiduciary call. The other is a protective put. If their ending cash flows match in every state, their prices today must match too.

##### PUT-CALL PARITY

5. A fiduciary call means buying a call option and buying a risk-free bond that will pay the exercise price at expiration. Why is it used: it gives upside above the strike while preserving the strike amount.
6. A protective put means buying the underlying asset and buying a put option on that same asset. Why is it used: it keeps upside in the asset while putting a floor under losses.
7. Slow down and see the symmetry. Both portfolios let you benefit if the underlying rises, but neither lets you fall below the exercise price at expiration.
8. If the expiration price is below the exercise price, the protective put ends at the exercise price because the put fills the hole. The fiduciary call also ends at the exercise price because the bond pays that amount.
9. If the expiration price is above the exercise price, the protective put is just the underlying price. The fiduciary call is also the underlying price because call payoff plus bond payoff becomes the asset price.
10. Since the two portfolios end the same way in every state, the source says their time-zero prices must match. That equality is put-call parity.

$$
S_0 + p_0 = c_0 + X(1+r)^{-T}
$$

11. What is $X(1+r)^{-T}$: the present value today of the exercise price paid at expiration. Why is it used: the bond must be sized so it grows to the strike exactly at maturity.
12. Read the formula like a sentence: long underlying plus long put equals long call plus the present value of the strike. That is much easier to remember than staring at symbols.
13. This is a no-arbitrage statement. If the left side and right side diverge in market prices, one side is overpriced and can be sold against the cheaper side.
14. The relation only works cleanly when the call and put share the same underlying, the same exercise price, and the same expiration date. Miss any one of those, and you are matching the wrong cash flows.

> [!info] WHY THIS WORKS
> Think like a very stubborn trader at expiration. You only care about the money that lands in your hand, not the story of how the portfolio was built.
>
> If the asset crashes below the strike, both portfolios still leave you with the strike.
>
> If the asset flies above the strike, both portfolios leave you with the asset price.

15. The source's first rearrangement solves for the put premium. That gives a replicating recipe for a put using a call, a bond, and a short underlying position.

$$
p_0 = c_0 + X(1+r)^{-T} - S_0
$$

16. What is a replicating portfolio: a portfolio of other instruments that produces the same payoff as the target instrument. Why is replication used: once payoff is matched, price is forced by no-arbitrage.
17. So a long put is equivalent to a long call, a long risk-free bond, and a short underlying. The short underlying hurts when prices rise, but the long call rescues that upside.
18. The next rearrangement solves for the underlying itself. That is the reading's clean proof that the asymmetric call and put payoffs can combine into the straight-line payoff of the asset.

$$
S_0 = c_0 - p_0 + X(1+r)^{-T}
$$

19. Read that one casually: long call minus long put plus a bond gives you the underlying. If you forget the algebra, remember that call and put asymmetry can be stitched into a linear asset payoff.
20. Hammer the picture, not just the formula: long put plus long underlying protects the downside, while long call plus present value of strike recreates the same ending wealth.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Long Put plus Long Underlying equals Long Call plus Present Value of Strike   


> [!question] PUT PRICE FROM PARITY
> Problem: A non-dividend-paying share is priced at 100. A one-year call with strike 95 is priced at 12. The risk-free rate is 5%. Find the one-year put with the same strike and maturity.
>
> Solution:
> $$
> \text{PV}(X) = 95(1.05)^{-1} = 90.48
> $$
> $$
> p_0 = 12 + 90.48 - 100 = 2.48
> $$
>
> Explanation: The no-arbitrage put premium is **2.48**.

21. That example matters because it trains the simplest parity reflex. Discount the strike first, then move the terms across the equation with the correct signs.
22. Arbitrage appears when one parity side is priced above the other. What is arbitrage here: locking an initial positive cash flow while the later net cash flow is zero in every state.
23. If $S_0 + p_0$ is greater than $c_0 + X(1+r)^{-T}$, then the protective put side is overpriced. Sell the overpriced side and buy the cheap fiduciary call side.
24. The arbitrage version does exactly that. It sells the expensive protective-put side and buys the cheaper fiduciary-call side through the share, put, call, and bond trades.
25. Why those trades: because they create equal and opposite expiration cash flows, leaving only the initial mispricing cash pocketed today.

> [!question] PARITY ARBITRAGE
> Problem: A share is priced at 100. The no-arbitrage put from parity is 2.48, but the market put is 5. The call is 12, the strike is 95, and the risk-free rate is 5%. Find the arbitrage profit.
>
> Solution:
> $$
> \text{PV}(X) = 95(1.05)^{-1} = 90.48
> $$
> $$
> \text{Profit at } t=0 = 100 + 5 - 12 - 90.48 = 2.52
> $$
>
> Explanation: The later combined payoff is zero in every state, so **2.52** is a riskless arbitrage gain today.

26. Do not over-romanticize arbitrage. It is just "sell the expensive copy, buy the cheap copy." The heavy lifting is done by proving those copies really end with the same payoff.

##### OPTION STRATEGIES BASED ON PUT-CALL PARITY

27. Put-call parity is not only for pricing options. It also lets you rebuild strategy payoffs from other pieces.
28. ==A covered call is long the underlying and short the call.== Why is it used: the investor wants some income from the call premium while capping upside above the strike.
29. The source rearranges parity to express the covered call. Start from $S_0 + p_0 = c_0 + X(1+r)^{-T}$ and solve for $S_0 - c_0$.

$$
S_0 - c_0 = X(1+r)^{-T} - p_0
$$

30. Read that verbally: a covered call equals a long risk-free bond and a short put. This is a beautiful exam identity because it converts an asset-plus-option strategy into a bond-plus-option strategy.
31. What is a short put: an obligation to buy the asset at the strike if the holder exercises. Why does it fit: the covered call also gives limited upside and downside exposure below the strike.

> [!example] APPLE DURING A QUIET PATCH
> Imagine an investor who still likes Apple for the next five years but thinks the next few months may be boring after a big product cycle. The investor does not want to sell the stock, but also hates watching dead time pass for free.
>
> So the investor sells a call against the shares and says: "I still want the stock, but if upside is capped for a while, at least pay me rent for waiting."

> [!question] COVERED CALL REPLICATION
> Problem: A share is priced at 210. A one-year put with strike 220 costs 18. The risk-free rate is 5%. Find the no-arbitrage call premium for the covered call setup.
>
> Solution:
> $$
> 210 - c_0 = 220(1.05)^{-1} - 18
> $$
> $$
> c_0 = 18.48
> $$
>
> Explanation: The covered call is equivalent to a long bond and a short put, so the implied call premium is **18.48**.

32. This section teaches a deeper habit: whenever you see an option strategy, ask whether parity can rewrite it into something simpler. Often the exam is really testing the rewrite, not the story.

##### PUT-CALL FORWARD PARITY

33. Start with the story, not the formula. Imagine you want upside in the asset but you do not want to pay cash for the asset today. So you try to rebuild that asset exposure with a forward plus a bond.
34. A long forward does **not** give you a right like a call option. It gives you an **obligation** to buy later at the forward price. Why is this important: mixing up "right" and "obligation" ruins the whole intuition.
35. Now pair that long forward with a risk-free bond that will grow to the forward price at expiration. Together, those two pieces behave like owning the underlying asset from today.
36. What is a synthetic underlying position: a forward purchase plus a risk-free bond sized to the forward price. Why is it used: it replicates a cash purchase of the underlying without buying the asset today.
37. Once you replace the cash underlying in ordinary put-call parity with this synthetic underlying, you get put-call forward parity.

$$
F_0(T)(1+r)^{-T} + p_0 = c_0 + X(1+r)^{-T}
$$

38. Read the left-hand side slowly: long synthetic asset plus long put. That is just a synthetic protective put.
39. A synthetic protective put is a long forward, a bond that matures to the forward price, and a long put. Why is it used: it creates the same downside floor and upside participation as a protective put.
40. At expiration, the forward contributes $S_T - F_0(T)$ and the bond contributes $F_0(T)$. So those two together collapse into just $S_T$.
41. Then the put does the same old job as before. If $S_T$ is below the strike, it adds $X - S_T$ and lifts you to $X$. If $S_T$ is above the strike, it expires worthless and leaves you at $S_T$.
42. So the synthetic protective put finishes with exactly the same payoff as a fiduciary call. That is why the prices today must match.
43. The most useful rearrangement is:

$$
p_0 - c_0 = [X - F_0(T)](1+r)^{-T}
$$

44. Read that one casually: long put and short call together equal a long risk-free bond and a short forward. Same parity logic, just with the underlying rewritten in forward language.

> [!question] PUT-CALL FORWARD PARITY
> Problem: A non-dividend-paying share is priced at 100. The one-year strike is 95. The one-year call is 12. The risk-free rate is 5%. Use put-call forward parity to find the put.
>
> Solution:
> $$
> F_0(T) = 100(1.05) = 105
> $$
> First see the picture. A long forward plus a bond worth 100 today recreates the asset. So forward parity should give the same put price as ordinary parity.
>
> $$
> p_0 - 12 = (95 - 105)(1.05)^{-1}
> $$
> $$
> p_0 = 2.48
> $$
>
> Explanation: The no-arbitrage put premium is **2.48**. That match is the whole point: cash-underlying parity and forward parity are telling the same story through two different build-ups.

##### FIRM VALUE APPLICATIONS

45. The reading then stretches parity beyond trading desks and into capital structure. This is where the topic gets unexpectedly beautiful.
46. Suppose firm value today is $V_0$ and the firm has zero-coupon debt with face value $D$. Then firm value equals equity value plus the present value of debt.
47. At debt maturity, two worlds exist. The firm is solvent if firm value at maturity exceeds debt face value. The firm is insolvent if firm value falls short of debt face value.
48. If the firm is solvent, debtholders receive $D$ and shareholders receive the residual $V_T - D$. If the firm is insolvent, debtholders take the firm value and shareholders get zero.
49. The shareholder payoff is therefore:

$$
\max(0, V_T - D)
$$

50. What is a residual claim: the amount left after higher-priority claims are paid. Why is equity called residual: shareholders get paid only after debt has been satisfied.
51. That shareholder payoff is exactly the payoff of a call option on firm value with exercise price equal to debt face value. Unlimited upside, zero below the strike: same picture.
52. The debtholder payoff is:

$$
\min(V_T, D)
$$

53. That can also be written as debt face value minus a put option on firm value. So debtholders are like holders of risk-free debt who have sold a put to shareholders.
54. Why is that sold put intuition useful: as insolvency risk rises, the put becomes more valuable, which means the debtholder's position becomes worse.
55. The source interprets that put value as the credit spread intuition. More insolvency risk means a more valuable put written by debtholders, so debt should demand more compensation.
56. Put-call parity then becomes a firm-value identity:

$$
V_0 = c_0 + PV(D) - p_0
$$

57. Read that in plain English: firm value equals the shareholders' call-like claim plus the debtholders' risky debt claim, where risky debt is risk-free debt minus a short put.
58. This is one of those rare derivatives readings that explains corporate finance without leaving derivatives logic. Equity is not "sort of like" a call. In this setup, it really is a call-like payoff.

> [!example] LEHMAN IN 2008 MAKES THIS FEEL REAL
> In calm years, equity holders of a leveraged firm feel like owners of a growing machine. But once panic arrives, the picture changes brutally fast. In 2008, as firm values collapsed and debt sat there like a hard strike price, equity in fragile firms could get wiped out while debtholders fought over salvage.
>
> That is why the call-option analogy sticks: shareholders keep the upside if firm value outruns debt, but if asset value falls through the debt strike, equity can go to zero very quickly.

> [!warning] EXAM TRAP
> Shareholders are the long call side.
> Debtholders are the short put side layered onto risk-free debt.
> If leverage rises and insolvency risk rises, the put on firm value becomes more valuable, which hurts debtholders.

59. The source's practice problem says exactly that: when leverage rises, the debtholder position deteriorates because debtholders are effectively short a put on firm value that has appreciated.

> [!tip] QUICK CHECKS
> - Same underlying, same strike, same expiration date.
> - European options only in this reading.
> - Discount the strike before moving terms around.
> - Overpriced side gets sold; underpriced side gets bought.
> - Equity payoff maps to a call on firm value. Debt payoff maps to risk-free debt minus a put.

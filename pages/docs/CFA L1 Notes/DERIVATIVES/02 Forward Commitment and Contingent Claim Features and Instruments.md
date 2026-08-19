```table-of-contents
```

> [!abstract] LOOK AT THESE BEFORE EXAM
> - Forward, futures, and swaps are **firm commitments**. Both sides must perform later.
> - Call and put options are **contingent claims**. The buyer chooses whether to exercise.
> - Long forward payoff at maturity:
>   $$
>   S_T - F_0(T)
>   $$
> - Short forward payoff at maturity:
>   $$
>   F_0(T) - S_T
>   $$
> - Long call payoff and profit:
>   $$
>   c_T = \max(0, S_T - X)
>   $$
>   $$
>   \Pi = \max(0, S_T - X) - c_0
>   $$
> - Long put payoff and profit:
>   $$
>   p_T = \max(0, X - S_T)
>   $$
>   $$
>   \Pi = \max(0, X - S_T) - p_0
>   $$
> - Short call profit:
>   $$
>   \Pi = -\max(0, S_T - X) + c_0
>   $$
> - Short put profit:
>   $$
>   \Pi = -\max(0, X - S_T) + p_0
>   $$
> - **A forward is agreed at USD 64 and the asset ends at USD 58.50. What does the long lose per unit?** Use **spot minus forward price**. That is **58.50 - 64 = -5.50**, so the long loses **USD 5.50 per unit**.
> - **A call has strike USD 30, premium USD 5, and the asset ends at USD 40. What is the long call profit?** First get payoff **40 - 30 = 10**. Then subtract premium. Profit is **USD 5**.
> - **A put has strike USD 30, premium USD 5, and the asset ends at USD 20. What is the long put profit?** First get payoff **30 - 20 = 10**. Then subtract premium. Profit is **USD 5**.
> - **A call has strike USD 1,240 and premium USD 24.85. What is breakeven?** Add strike and premium. Breakeven is **USD 1,264.85**.
> - **A credit default swap notional is USD 10 million and loss given default is 60%. What contingent payment matters after default?** Use **loss given default times notional**, so think **USD 6 million**.

### LEARNING OUTCOMES

- Define forward contracts, futures contracts, swaps, options (calls and puts), and credit derivatives and compare their basic characteristics.
- Determine the value at expiration and profit from a long or a short position in a call or put option.
- Contrast forward commitments with contingent claims.

> [!tip] BIG GOTCHAS
> - Forward and futures payoff at final maturity can look the same, but futures settle gains and losses daily.
> - Forward payoff equals profit at maturity because there is no upfront payment at inception.
> - Option payoff is not option profit. Profit must include the premium.
> - A call can have positive payoff and still negative profit if the payoff does not cover the premium.
> - A credit default swap is called a swap, but in this reading it behaves like a contingent claim because payment depends on a credit event.

### FORWARDS, FUTURES, AND SWAPS

> [!abstract] MEMORISE
> - A firm commitment forces both sides to perform later.
> - Forward = one customized future exchange.
> - Futures = one standardized exchange-traded future exchange with daily settlement.
> - Swap = a series of future exchanges.

1. Start with the backbone: **forward contracts, futures contracts, and swaps are firm commitments**. Both counterparties are on the hook. Nobody gets to casually walk away later because the market moved against them.
2. What is a firm commitment: a derivative contract where both sides must perform the agreed exchange later.
3. Why is a firm commitment used: it locks future trading terms now, so price risk can be shifted before the actual economic event happens.
4. A forward contract is an over-the-counter derivative where one side agrees to buy and the other side agrees to sell an underlying later at a pre-agreed fixed price.
5. What is over-the-counter: a privately negotiated contract between counterparties rather than a standardized exchange trade.
6. Why is over-the-counter used: it allows exact customization of size, maturity, underlying details, and credit terms.
7. If you are the forward buyer, you are **long**. You gain when the underlying price rises over the contract life because you locked a cheaper purchase price earlier.
8. If you are the forward seller, you are **short**. You gain when the underlying price falls because you locked a richer sale price earlier.
9. At inception, a plain forward usually has **zero upfront payment**. That is why, at maturity, the payoff also becomes the profit.
10. What is forward payoff at maturity from the buyer side: the spot price at maturity minus the forward price fixed at inception.

$$
S_T - F_0(T)
$$

11. If the maturity spot price is above the forward price, the long forward wins because buying below market is a gift. If the spot price is below the forward price, the long forward loses because it is forced to buy too high.
12. The short forward just gets the mirror image. Its payoff at maturity is:

$$
F_0(T) - S_T
$$

> [!question] FORWARD PAYOFF
> Problem: A forward on 1,000 barrels is agreed at **USD 64** per barrel. At maturity, spot is **USD 58.50**. What happens to the long?
>
> ---
>
> Use **spot minus forward price** first.
>
> $$
> 58.50 - 64.00 = -5.50
> $$
>
> Total payoff:
>
> $$
> 1{,}000 \times (-5.50) = -5{,}500
> $$
>
> The long loses **USD 5,500**. Same story in plain English: the investor agreed to buy too expensively.

> [!example] SOUTHWEST'S FUEL HEDGE
> In the early 2000s, Southwest Airlines became famous for locking in fuel prices before oil later surged. That hedge did not make planes fly better. It simply meant the airline had already fixed a future cost while rivals were forced to buy fuel at uglier market prices. That is the forward-commitment instinct in real life: lock first, breathe later.

13. Futures contracts are basically forwards that have been standardized by an exchange. Contract size, maturity dates, and delivery rules are not improvised by the two counterparties.
14. Why is a futures exchange used: standardization and centralized clearing make trading easier, more liquid, and safer against counterparty default.
15. A futures buyer is long and a futures seller is short, just like in forwards. The economic direction is the same, but the cash-flow timing is not.
16. The most important futures feature is **mark to market**, also called daily settlement. Gains and losses are settled every day through the clearinghouse.
17. What is mark to market: the clearinghouse resets each contract to the end-of-day settlement price and moves the day’s gain or loss through margin accounts.  It is simply taking the market price and marking up to it. Suppose you hold a future and the price of the underlying increases by 5. So now your future has an MTM gain of 5 and you receive payment of 5 in your margin account. It is as simple as that.
18. Why is mark to market used: it prevents large unpaid losses from silently building until maturity.
19. At futures initiation, there is no purchase price paid for the underlying itself, but each side must post **initial margin** into a futures margin account.
20. What is initial margin: the required opening deposit that supports daily settlement risk.
21. Each contract also has a **maintenance margin**. If your balance falls below it, you receive a margin call and must restore the balance back to the initial margin.
22. What is maintenance margin: the minimum balance you must keep in the futures margin account.
23. What is a margin call: the demand to top up the margin account when losses push the balance below maintenance margin.
24. What is variation margin: the funds added to restore the account after mark-to-market losses.
25. At final maturity, the futures buyer’s total economic payoff still ends up tied to the same basic idea:

$$
S_T - f_0(T)
$$

26. But do not miss the subtlety: in futures, the total result is chopped into daily cash flows first. In forwards, the settlement sits mostly at maturity.
27. Why does this timing difference matter: money received earlier or paid earlier has time value, so forward and futures values need not be perfectly identical.
28. If a futures position becomes inconvenient before expiration, you usually close it by taking the opposite futures position. You do not have to wait politely until maturity.
29. Some futures contracts settle in cash. Others require physical delivery of the underlying. The exchange decides the contract terms up front.

> [!danger] DO NOT MAKE THIS MISTAKE
> Falling below **maintenance margin** does not mean you top up only to maintenance margin. You usually top up back to **initial margin**. That is the line the exam loves to test.

30. A swap is a firm commitment where counterparties exchange a **series** of future cash flows rather than just one future exchange.
31. What is a swap: a derivative contract that replaces one stream of future cash flows with another stream.
32. Why is a swap used: it changes the risk exposure of assets or liabilities without buying or selling the underlying cash instrument itself.
33. In the most common interest rate swap, one side pays a fixed rate and receives a floating market reference rate. The other side does the opposite.
34. What is market reference rate: the floating benchmark rate that resets each period and determines the variable leg cash flow.
35. The **fixed-rate payer** is also the **floating-rate receiver**. The **floating-rate payer** is also the **fixed-rate receiver**. Same people, different labels depending on which leg you focus on.
36. The notional principal in a standard interest rate swap is usually not exchanged. It is just the base used to compute interest payments.
37. What is notional principal: a reference amount used to calculate contractual cash flows without actually changing hands.
38. At inception, a standard swap also starts near **zero value**, ignoring transaction costs. That is because the fixed rate is chosen to balance the present value of both legs.
39. As market conditions move, the swap gains value for one side and loses value for the other. You should picture it as a strip of forward-style exchanges unfolding through time.

> [!question] SWAP NET PAYMENT
> Problem: A five-year interest rate swap has notional **GBP 200 million**. One side receives fixed at **2.25% semiannual** and pays six-month market reference rate of **1.95%**. What is the first net receipt?
>
> ---
>
> Fixed inflow:
>
> $$
> 200{,}000{,}000 \times \frac{0.0225}{2} = 2{,}250{,}000
> $$
>
> Floating outflow:
>
> $$
> 200{,}000{,}000 \times \frac{0.0195}{2} = 1{,}950{,}000
> $$
>
> Net receipt:
>
> $$
> 2{,}250{,}000 - 1{,}950{,}000 = 300{,}000
> $$
>
> The receive-fixed side collects **GBP 300,000**.

### OPTIONS

> [!abstract] MEMORISE
> - Option buyer has a right, not an obligation.
> - Call = right to buy.
> - Put = right to sell.
> - Buyer pays premium upfront.
> - Buyer payoff is never negative at expiry, but buyer profit can be negative after premium.

40. Options are contingent claims. One side, the buyer, gets to decide whether the trade should actually happen at maturity.
41. What is a contingent claim: a derivative where settlement depends on whether a specified condition makes exercise worthwhile.
42. Why is a contingent claim used: it gives directional exposure with asymmetry, so the buyer can keep upside while limiting downside to a premium.
43. The option buyer pays an upfront **premium** to the option seller for this right. That premium is the price of flexibility.
44. What is exercise price, also called strike price: the pre-agreed price at which the underlying can be bought or sold if the option is exercised.
45. A **call option** gives the right to buy the underlying. A **put option** gives the right to sell the underlying.
46. This reading focuses on **European options**, which can be exercised only at maturity.
47. What is a European option: an option that may be exercised only on the expiration date.
48. What is an American option: an option that may be exercised any time from inception to maturity.
49. A long call buyer exercises only when the underlying price at maturity is above the exercise price. Otherwise buying at strike would be silly.
50. The long call payoff at maturity is:

$$
c_T = \max(0, S_T - X)
$$

51. The long call profit is payoff minus premium paid:

$$
\Pi = \max(0, S_T - X) - c_0
$$

52. What is intrinsic value for a call: the amount by which current spot price exceeds the exercise price, if positive.
53. A call is **in the money** when spot is above strike. It is **at the money** when spot equals strike. It is **out of the money** when spot is below strike.
54. What is time value: the part of an option’s price that comes from the chance that future price moves could make exercise attractive before maturity arrives.
55. Why does time value exist: more time means more room for favorable price movement.
56. Time value declines toward zero as maturity approaches. That is the slow melting ice cube inside every option.

> [!question] LONG CALL PROFIT
> Problem: A call has strike **USD 30**, premium **USD 5**, and the underlying ends at **USD 40**. What is the long call profit?
>
> ---
>
> Payoff:
>
> $$
> \max(0, 40 - 30) = 10
> $$
>
> Profit:
>
> $$
> 10 - 5 = 5
> $$
>
> The long call earns **USD 5**. The key algorithm is simple: first ask whether exercise makes sense, then subtract the premium.

57. The long call buyer has limited loss and potentially large upside. The most that can be lost is the premium paid upfront.
58. The short call seller gets the opposite shape. Maximum gain is the premium received, but loss can become very large if the underlying shoots far above strike.
59. Why is short call risk dangerous: the seller promised upside exposure to the buyer without any cap from the option contract itself.
60. A long put buyer benefits from a lower underlying price because the buyer can sell at the richer pre-agreed strike.
61. The long put payoff at maturity is:

$$
p_T = \max(0, X - S_T)
$$

62. The long put profit is:

$$
\Pi = \max(0, X - S_T) - p_0
$$

63. The short put seller is again the mirror image. Maximum gain is the premium received. Loss happens when the underlying falls below strike.
64. The short put seller’s loss is usually limited because an ordinary asset price cannot fall below zero.
65. The short put profit is:

$$
\Pi = -\max(0, X - S_T) + p_0
$$

> [!question] LONG PUT PROFIT
> Problem: A put has strike **USD 30**, premium **USD 5**, and the underlying ends at **USD 20**. What is the long put profit?
>
> ---
>
> Payoff:
>
> $$
> \max(0, 30 - 20) = 10
> $$
>
> Profit:
>
> $$
> 10 - 5 = 5
> $$
>
> The long put earns **USD 5**. First use strike minus spot. Then subtract the premium.

66. One of the cleanest exam distinctions is this: **option payoff** ignores premium, while **option profit** includes premium. Many wrong answers are born right there.
67. A call can finish in the money and still give a negative profit if the payoff is smaller than the premium. Positive payoff does not guarantee positive profit.
68. The long call breakeven at maturity is strike plus call premium. The long put breakeven at maturity is strike minus put premium.

> [!question] CALL BREAKEVEN
> Problem: A call has strike **USD 1,240** and premium **USD 24.85**. What spot price at maturity gives zero profit?
>
> ---
>
> Add strike and premium:
>
> $$
> 1{,}240 + 24.85 = 1{,}264.85
> $$
>
> Breakeven is **USD 1,264.85**.

> [!example] MARCH 2020 PUT PROTECTION
> In March 2020, when global equity markets cracked during the pandemic panic, plain old index puts stopped looking boring and started looking like oxygen. Portfolio managers who had paid premium earlier suddenly had the right to sell into a falling market at far better levels. That is why a put feels expensive until the day fear arrives all at once.

### CREDIT DERIVATIVES

> [!abstract] MEMORISE
> - A credit derivative is written on credit risk, not on an ordinary asset price.
> - The most common one is the credit default swap.
> - Protection buyer pays spread and is short credit risk.
> - Protection seller receives spread and is long credit risk.
> - Credit event payment is tied to loss given default.

69. Credit derivatives are built on the default risk of one issuer or a group of issuers. Here the underlying is not a stock or commodity price but credit risk itself.
70. The most common credit derivative is the **credit default swap (CDS)**. After this line, the short label **CDS** is safe to read quickly.
71. What is a credit default swap: a contract where one side pays periodic spread to transfer default loss risk to the other side.
72. Why is a credit default swap used: it lets an investor separate credit risk management from actually buying or selling the cash bond.
73. The protection buyer pays the spread and receives compensation if a defined credit event hits the reference issuer.
74. The protection seller receives the spread and bears the contingent loss if the credit event occurs.
75. What is credit spread in this context: the periodic spread paid on the credit default swap to compensate for default risk.
76. Credit spreads rise when the market sees greater probability of default or greater loss given default. A wider spread means the issuer looks more distressed.
77. What is probability of default: the chance that the issuer fails to meet its debt obligations.
78. What is loss given default: the percentage loss suffered if default actually occurs.
79. A credit default swap priced at par spread starts with zero net present value, just like a standard swap struck fairly at inception.
80. But unlike an ordinary interest rate swap, the payment under a credit default swap depends on whether a credit event happens. That is why this reading treats it like a contingent claim.
81. Common credit events include bankruptcy, failure to pay, and involuntary debt restructuring.
82. ==If a credit event occurs, the protection seller pays the protection buyer an amount tied to **loss given default times notional**.==


> [!danger] DO NOT MAKE THIS MISTAKE
> CDS seller pays LGD times notional, not the outstanding loan amount.

83. A buyer who already owns the bond uses the contract like insurance. A buyer without the bond is expressing a bearish view on the issuer’s credit.
84. Why is the protection buyer called short credit risk: the buyer gains when credit quality worsens and spreads widen. Remember it like short credit worthiness if credit worthiness increases the protection buyer loses.
85. Why is the protection seller called long credit risk: the seller earns spread income while effectively bearing loss exposure similar to owning the risky bond.  Remember it like long credit worthiness if credit worthiness increases the protection seller benefits.
86. If the issuer’s credit spread widens after inception, the buyer gains mark-to-market value because the buyer is now paying an old fixed spread that looks cheap relative to the new market spread.

> [!example] LEHMAN AND THE CDS WAKE-UP CALL
> In 2008, Lehman Brothers collapsed and the abstract language of credit protection turned brutally concrete. A credit default swap was no longer just a spread quoted on a screen. It became a contract asking who would absorb the default loss. That crisis burned one lesson into the market: credit risk can look sleepy for years and then arrive like a wall.

### FORWARD COMMITMENTS VS CONTINGENT CLAIMS

> [!abstract] MEMORISE
> - Firm commitment = both sides must perform.
> - Contingent claim = buyer decides based on whether exercise is worthwhile.
> - Long forward, long call, and short put can all lean bullish, but their profit shapes differ.

87. Now tie the whole module together. A forward commitment forces performance from both sides. A contingent claim gives the buyer a choice.
88. Why does this distinction matter: two derivatives can point in the same market direction but create very different downside and upside experiences.
89. A long forward and a long call both benefit when the underlying price rises. That similarity tempts students into thinking they are almost the same. They are not.
90. The long forward has linear profit:

$$
S_T - F_0(T)
$$

91. The long call with exercise price equal to the forward price has profit:

$$
\max(0, S_T - F_0(T)) - c_0
$$

92. If the underlying crashes, the long forward keeps losing linearly. The long call simply stops at the premium loss because the buyer can refuse exercise.
93. So the long call looks like a bullish position with downside protection purchased through the premium.
94. A short put can also benefit from a rise in the underlying price. Its profit shape has some similarity to a long forward, but the gain is capped at the premium received.
95. If the underlying rises strongly, the long forward keeps gaining. The short put does not join that feast forever because its profit ceiling is already fixed.
96. So when price appreciation is huge, the long forward can outperform a short put. But when prices weaken only modestly, the premium on the short put can cushion the result relative to the forward.
97. The exam point is not to worship one instrument. It is to see the trade-off: **firm commitments give pure exposure, contingent claims give shaped exposure**.
98. A short forward, a short call, and a long put all benefit from a decline in the underlying price. That direction grouping is worth memorizing because it is tested in simple matching questions.

> [!tip] QUICK CHECKS
> - If there is **no upfront payment**, maturity payoff usually equals maturity profit.
> - If there **is** an upfront premium, profit must adjust for it.
> - If both sides must perform, think **firm commitment**.
> - If the buyer chooses whether to perform, think **contingent claim**.
> - If spread widening helps you in a credit default swap, you are thinking like the **protection buyer**.

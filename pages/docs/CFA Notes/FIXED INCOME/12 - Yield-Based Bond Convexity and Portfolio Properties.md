### MODULE 12: Yield-Based Bond Convexity and Portfolio Properties


> [!abstract] Learning outcomes
> - Calculate and interpret convexity and describe the convexity adjustment.
> - Calculate percentage price change using duration and convexity.
> - Calculate portfolio duration and convexity and explain their limits.

> [!tip] SEE THIS BEFORE EXAM
> - **Annualized modified duration is 4.58676, annualized convexity is 24.23895, and yield rises 100 basis points. Estimate percentage price change.** do duration part first, so $-4.58676 \times 0.01 = -4.58676\%$. Then add convexity part, so $0.5 \times 24.23895 \times (0.01)^2 = 0.12119\%$. Final answer: about **-4.46556%**.
> - **Annualized modified duration is 4.58676, annualized convexity is 24.23895, and yield falls 100 basis points. Estimate percentage price change.** flip the sign in the duration term, so $-4.58676 \times (-0.01) = 4.58676\%$. Convexity still gets added because the squared term stays positive. Final answer: about **4.70795%**.
> - **$PV_- = 100.229641$, $PV_+ = 99.770965$, $PV_0 = 100$, and yield shock is 5 basis points. Find approximate convexity.** add the bumped prices, subtract $2PV_0$, then divide by $(0.0005)^2 \times 100$. That is $(100.229641 + 99.770965 - 200) / 0.000025 = 24.23896$. Final answer: **24.23896**.
> - **Annualized convexity is 81.701 and position value is GBP 50,000,000. Find money convexity.** do not overthink it, just multiply convexity by full price. So $81.701 \times 50,000,000 = 4,085,050,000$ approximately. Final answer: about **GBP 4.085 billion**.
> - **Annualized convexity is 81.701, position value is GBP 50,000,000, and yield falls 100 basis points. Find the money convexity adjustment.** first find money convexity, then multiply by $0.5 \times (0.01)^2$. So $0.5 \times 4,085,050,000 \times 0.0001 \approx 204,252$. Final answer: about **GBP 204,252**.
> - **Money duration is USD 458,675,875, money convexity is USD 2,423,894,503, and yield rises 100 basis points. Estimate money price change.** duration gives the main loss, so $-458,675,875 \times 0.01 = -4,586,758.75$. Then add convexity back, so $0.5 \times 2,423,894,503 \times 0.0001 = 121,194.73$. Final answer: about **-USD 4,465,564**.
> - **Bond A weight is 40%, duration is 2.858, convexity is 9.752; Bond B weight is 60%, duration is 8.376, convexity is 81.701. Find portfolio duration and convexity.** weighted average both numbers. Duration is $(0.4 \times 2.858) + (0.6 \times 8.376) = 6.169$. Convexity is $(0.4 \times 9.752) + (0.6 \times 81.701) = 52.921$. Final answers: **6.169** and **52.921**.
> - **Portfolio duration is 6.169, portfolio convexity is 52.921, and yield rises 50 basis points. Estimate portfolio percentage price change.** do duration hit first, so $-6.169 \times 0.005 = -3.0845\%$. Then add convexity relief, so $0.5 \times 52.921 \times (0.005)^2 = 0.06615\%$. Final answer: about **-3.018%**.
> - **A new Treasury position lowers portfolio duration from 10.19004 to 9.87415 and convexity from 195.21581 to 161.62749. If you expect yields to fall, add it or skip it?** if your view is yields down, ask which portfolio has more upside. Higher duration and higher convexity win that game. Final answer: **skip it**.
> - Duration is the first-order effect, convexity is the second-order effect.
> - Convexity adjustment is added, not subtracted, for an option-free fixed-rate bond.
> - Use full price in convexity and money convexity work, not flat price.
> - Weighted-average portfolio duration and convexity are practical, but they quietly assume a parallel shift in the yield curve.
> - More convexity usually comes from longer maturity, lower coupon, and lower yield.
> - For the same duration, greater cash-flow dispersion means greater convexity.
> - Convexity matters much more when yield moves are large. Tiny yield changes make duration look good enough.

1. Think of duration as your first rough guess. You see yield move and you ask, "Fine, how much should price move?" Convexity enters one step later and says, "Not so fast, the path is curved, so your first guess needs a correction."

2. Convexity matters because the true price-yield relationship is curved, not straight.
   Why is convexity used: to improve price estimates when duration alone starts missing the real move.

3. For an option-free fixed-rate bond, convexity is always positive. That is a very friendly feature. When yields fall, the bond helps you more than duration promised. When yields rise, it hurts you less than duration threatened.

4. That is why convexity is valuable to investors.
   Why is convexity valuable: it reduces downside damage and increases upside gain for the same absolute yield move.

> [!example] Why positive convexity feels like hidden protection
> Silicon Valley Bank loaded up on long bonds when yields were low. When rates jumped, duration did the first punch. Convexity mattered too, because long bonds sit on a more curved price path. Big rate moves stop being gentle very fast.

5. The percentage price change estimate is:
$$
\% \Delta PV_{\text{Full}} \approx (-\text{AnnModDur} \times \Delta \text{Yield}) + \left(\frac{1}{2} \times \text{AnnConvexity} \times (\Delta \text{Yield})^2\right)
$$

6. Read that formula like a tired exam candidate. First grab the big move from duration. Then calm down and add the smaller convexity correction. Do not try to feel the whole formula at once.

7. Use full price in these formulas, not flat price.
   What is full price: the bond price including accrued interest.

8. Approximate convexity can be estimated from bumped prices:
$$
\text{ApproxCon} = \frac{PV_- + PV_+ - (2 \times PV_0)}{(\Delta \text{Yield})^2 \times PV_0}
$$

9. Here, $PV_0$ is today's full price, $PV_+$ is the bruised price after yield goes up, and $PV_-$ is the happier price after yield goes down. You are basically poking the bond on both sides and seeing how curved its reaction is.

10. For BRWA's five-year 3.2% bond, $PV_+ = 99.770965$ and $PV_- = 100.229641$ after a 5 basis point shock. That gives approximate convexity of 24.23896, which is almost identical to the annual convexity from the cash-flow table.

11. This price-bump method is handy when the neat textbook cash-flow route becomes annoying. If you can reprice the bond after a small bump up and bump down, you can still get the bend without begging for a perfect closed-form setup.

> [!question] BRWA approximate convexity
> Problem: $PV_- = 100.229641$, $PV_+ = 99.770965$, $PV_0 = 100.00$, and $\Delta y = 0.0005$. Find approximate convexity.
> 
> Solution: add the two bumped prices, subtract $200$, then divide by $(0.0005)^2 \times 100$.
> Answer: $\text{ApproxCon} = 24.23896$.

12. Convexity rises when maturity is longer, coupon is lower, and yield-to-maturity is lower.
    Why: those features push more value into later cash flows, and later cash flows react more violently to discount-rate changes.

13. One more driver is cash-flow dispersion. That just means how spread out the bond's payments are across time.

14. If two bonds have the same duration, do not relax and call them identical. The one with cash flows spread farther across the timeline usually has more convexity, so its price path bends more.

15. The Romanian 30-year bond makes this obvious. Its approximate modified duration is 15.90637 and approximate convexity is 369.64203. BRWA's five-year bond has duration 4.58676 and convexity 24.23896.

16. The Romanian bond wins on convexity mainly because 30 years of maturity overwhelms the fact that its coupon and yield are higher.
    Why: longer maturity increases convexity, while higher coupon and higher yield reduce it.

> [!example] Long bond versus short bond in real life
> Imagine two desks on a brutal rate day. One is stuffed with short corporate paper. The other is leaning hard into long sovereign bonds. The long desk does not just move more. It moves on a much more curved path, so every extra rate shock hurts differently.

17. Duration alone pretends the world is polite and symmetric. Real bond prices are not. The same 100 basis point move up and down does not create mirror-image results, because the real price-yield line is curved.

18. For BRWA's five-year bond, a 100 basis point yield increase gives an actual price change of -4.46788%, while a 100 basis point decrease gives 4.71035%.

19. Duration alone estimates both moves at 4.58676% in absolute value. Adding convexity improves the estimate to -4.46556% for the yield rise and 4.70795% for the yield decline.

20. This is the whole practical point of learning convexity. You are not memorizing a fancy extra term for decoration. You are learning how to be less wrong when yields move hard.

> [!question] Price change with duration plus convexity
> Problem: BRWA has annualized modified duration 4.58676 and annualized convexity 24.23895. Yield rises 100 basis points. Estimate percentage price change.
> ---
> Solution: do $-4.58676 \times 0.01$, then add $0.5 \times 24.23895 \times (0.01)^2$.
> Answer: about $-4.46556\%$.

21. Money convexity is what happens when the abstract bend finally turns into money. Now you are no longer saying, "This bond has convexity 24." You are saying, "Fine, but how many dollars is that bend worth to me?"

22. The formula is:
$$
\text{MoneyCon} = \text{AnnConvexity} \times PV_{\text{Full}}
$$

23. Then money price change is estimated with:
$$
\Delta PV_{\text{Full}} \approx -(\text{MoneyDur} \times \Delta \text{Yield}) + \left(\frac{1}{2} \times \text{MoneyCon} \times (\Delta \text{Yield})^2\right)
$$

24. For a USD 100 million BRWA position, money convexity is USD 2,423,894,503. With a 100 basis point yield increase, the actual position loss is USD 4,467,884.

25. Money duration alone estimates a bigger loss of USD 4,586,759. Adding money convexity improves the estimate to USD 4,465,564, so the miss shrinks to only USD 2,320.

> [!question] Money convexity adjustment
> Problem: Annualized convexity is 81.701, full price is GBP 50,000,000, and yield falls 100 basis points. Find the money convexity adjustment.
> ---
> Solution: first get money convexity with convexity times price, then multiply by $\frac{1}{2} \times (0.01)^2$.
> Answer: about GBP 204,252.

26. At portfolio level, the story gets more practical. You can build duration and convexity from the whole pile of cash flows, or you can take weighted averages of the bonds sitting in the portfolio.

27. The aggregate-cash-flow method is the clean textbook answer. It is also the kind of answer people quietly avoid when the portfolio is large and real life is messy.

28. So what do managers actually do? Usually the weighted-average route. Take each bond's duration and convexity, weight them by market value, and add them. It is fast, usable, and good enough for a lot of decisions.

29. In the EUR 100 million two-bond example, the weights are 40% and 60%. Portfolio duration is 6.169 and portfolio convexity is 52.921.

30. If yields rise 50 basis points, estimated portfolio percentage price change is:
$$
\% \Delta PV_{\text{Full}} \approx (-6.169 \times 0.005) + \left(\frac{1}{2} \times 52.921 \times 0.005^2\right) \approx -3.018\%
$$

31. In the BRWA-Romania portfolio, weighted-average modified duration is 10.19004 and weighted-average convexity is 195.21581.

32. If all yields in that portfolio rise 100 basis points in parallel, the estimated portfolio decline is 9.21396%.

33. Here is where the shortcut quietly cheats. It assumes a parallel shift, meaning yields across maturities all move together by the same amount and in the same direction.

34. But you and I both know markets are rarely that polite. Curves steepen, flatten, and twist. So weighted-average portfolio measures are useful, but they are still a shortcut, not holy truth.

35. The weighted-average method becomes more accurate when yield differences across bonds are smaller and the yield curve is flatter.

36. In Example 2, adding a USD 50 million par 10-year US Treasury lowers portfolio duration from 10.19004 to 9.87415 and convexity from 195.21581 to 161.62749.

37. If the investor expects a 100 basis point parallel fall in yields, the Treasury should not be added. You want the portfolio that leans harder into the rally, and that means more duration plus more convexity, not less.

> [!question] Portfolio duration and convexity
> Problem: Existing portfolio duration is 10.19004 and convexity is 195.21581. Proposed portfolio duration is 9.87415 and convexity is 161.62749. Yields are expected to fall in parallel. Should the Treasury be added?
> 
> Solution: when your view is yields down, you want more duration and more convexity, not less.
> Answer: do not add the Treasury position.

> [!warning] Quick traps
> - Convexity is the second-order effect, not the first-order effect.
> - Convexity adjustment is added to duration's estimate.
> - Use full price, not flat price.
> - Bigger yield move means convexity matters more.
> - Weighted-average portfolio measures assume parallel shifts.

> [!abstract] Memorise
> - Duration is the slope; convexity is the bend.
> - Positive convexity helps in both yield directions.
> - Longer maturity, lower coupon, and lower yield increase convexity.
> - Money convexity is annual convexity times full price.
> - Portfolio weighted averages are practical, but not theoretically pure.

### MODULE 13: Curve-Based and Empirical Fixed-Income Risk Measures

> Source module: `/home/karma/CFAPractice/mcq/quiz/AI/PDF/FixedIncome/module_13_curve_based_and_empirical_fixed_income_risk_measures.txt`

> [!abstract] MEMORISE
> - Modified duration is the plain-vanilla tool. Effective duration is the option-bond tool.
> - Effective duration and convexity come from repricing, not from a clean closed-form shortcut.
> - Key rate duration is for twist/steepening/flattening moves, not one big parallel shrug.
> - Empirical duration matters when spreads and government yields move together in the real world.

1. This module exists because the curve does not move in same direction. Short rates, belly rates, and long rates can move by different amounts, and sometimes in opposite directions.
2. Cash flows are not fixed because borrowers can prepay, issuers can call, or embedded options can change what you actually receive.
3. That is why Macaulay and modified duration are not enough everywhere. They quietly assume a parallel shift and fixed cash flows.
##### MODIFIED VS EFFECTIVE

> [!abstract] MEMORISE
> - Option-free bond: modified duration is usually fine.
> - Bond with embedded option or prepayment risk: use effective duration.
> - Modified duration is formula-based. Effective duration is reprice-and-see.
> - Memory hook: **modified duration is pessimistic.**

4. Modified duration is your first-order sensitivity for a plain fixed-rate bond. It is the tangent-line estimate of price sensitivity to yield.
5. ==Modified duration is pessimistic.== It usually overstates the price drop when yields rise and understates the price gain when yields fall because it ignores curvature.
6. Effective duration is brute-force duration. You shock the benchmark curve down, shock it up, reprice the bond both times, allow cash flows to change, and then measure the slope from those observed prices.
7. That makes effective duration the right tool for callable bonds, putable bonds, and mortgage-backed securities, because those instruments change behavior when rates move.
8. Keep the logic clean:
   - Modified duration asks: “If yield moves a bit, what is the approximate price sensitivity if cash flows stay fixed?”
   - Effective duration asks: “If the benchmark curve moves, what actually happens to price once the bond’s cash flows are allowed to react?”

> [!question] WHY EFFECTIVE DURATION EXISTS
> 
> Problem: Why is modified duration not good enough for a callable bond?
> 
> Because the callable bond may get called when rates fall, so the cash flows themselves change. Modified duration assumes the cash flows stay fied. Effective duration reprices the bond after the rate move and captures that change directly.
> **Takeaway:** if the bond can change its own cash-flow path, use effective duration.

9. The effective-duration formula is just a normalized slope:
$$\boxed{\text{Effective Duration}=\dfrac{PV_- - PV_+}{2\,\Delta \text{Curve}\,PV_0}}$$
10. Read it like a human:
   - $PV_-$ = price after the curve shifts down
   - $PV_+$ = price after the curve shifts up
   - $\Delta \text{Curve}$ = the size of the benchmark curve shock in decimals
   - divide by $PV_0$ so the answer becomes percentage sensitivity rather than raw dollars

##### CONVEXITY IN PLAIN ENGLISH

> [!abstract] MEMORISE
> - Callable bond: upside gets capped when yields fall, so convexity can turn negative.
> - Putable bond: downside gets cushioned when yields rise, so convexity stays positive.
> - Duration gives the main move. Convexity gives the correction.

11. Effective convexity is the same concept as effective duration, just one order deeper. You reprice the bond after a small up-shift and down-shift in the benchmark curve and measure the curvature of the price response.
12. This matters because duration alone is a straight-line approximation. Real price-yield relationships are curved, especially for large moves and especially when options start changing behavior.
13. Callable bonds are the classic trap. When yields fall a lot, the issuer gets tempted to call. So your upside starts flattening out. That is negative convexity.
14. Putable bonds are the opposite comfort blanket. When yields rise, the put feature helps protect the downside, so convexity remains positive.
15. To estimate price change with effective measures, use:
$$\Delta P/P \approx -\text{Eff. D}\,\Delta\text{Curve} + \tfrac{1}{2}\,\text{Eff. Conv}\,(\Delta\text{Curve})^2$$
16. Translation: duration gives the big directional move, convexity fine-tunes it.

> [!info] FOR THE MATH GUYS
> - Duration is basically the **first derivative** of price with respect to yield: the slope.
> - Convexity is the **second derivative**: how fast that slope itself changes.
> - The price-change formula is just a **second-order Taylor expansion** around today’s yield.
> - First term = linear approximation. Second term = curvature correction.

> [!question] PRICE CHANGE USING EFF. D AND EFF. CONV.
> Problem: Effective duration = 10.5, effective convexity = 97.3, and the curve falls by 200 basis points. Estimate the percentage price change.
> 
> Duration effect: $-10.5 \times (-0.02) = +0.2100 = +21.00\%$
> Convexity effect: $\tfrac{1}{2} \times 97.3 \times (0.02)^2 = 0.0195 = +1.95\%$
> Estimated price change: about **+22.95%**
> **Takeaway:** duration does the heavy lifting; convexity adds the extra juice for a large move.

##### KEY RATE DURATION

> [!abstract] MEMORISE
> - Key rate duration = sensitivity to one maturity point on the curve.
> - Use it when the curve twists, steepens, or flattens.
> - The weighted sum of portfolio key rate durations equals portfolio effective duration.
> - This is the “where on the curve am I exposed?” tool.

17. Key rate duration is just partial duration. Instead of shocking the whole curve, you shock one maturity point, like the 5-year point, and ask how much the bond price cares about that one spot.
18. If the 2-year rate jumps, the 30-year rate barely moves, and the 10-year point falls, key rate duration lets you map the damage properly.
19. A portfolio’s key rate durations tell you where the real risk lives across the curve. If your exposure is concentrated in the belly, that is where the pain or gain will come from.
20. The weighted sum of a bond portfolio’s key rate durations equals the portfolio’s effective duration. So key rate duration is not replacing effective duration; it is breaking it open by maturity bucket.

> [!tip] HOW EACH DURATION MOVES WHEN BENCHMARK YIELDS MOVE
>
> #### Core Idea
>
> Duration is the slope between a bond's price and a small yield change.
>
> **What is duration:** price sensitivity to yield.
>
> **What is yield:** the market's required interest rate.
>
> **Relationship:** yield up usually means price down; yield down usually means price up. The hard part is that the slope can change when the bond's cash flows can change.
>
> #### What is yield curve?
>
> A yield curve is the set of yields for different maturities.
>
> **What is yield curve:** interest rates lined up by loan length, such as 2-year, 5-year, 10-year, and 30-year.
>
> **What is maturity:** the final repayment date.
>
> **How does it become flat:** short and long yields move closer together.
>
> **How does it become steep:** long yields move much higher than short yields, or short yields fall much more than long yields.
>
> **What is benchmark yield:** the reference market rate used as the base rate.
>
> **What is spread:** extra yield above the benchmark for credit or liquidity risk.
>
> #### Duration Types
>
> ##### Modified Duration
>
> This assumes the bond's cash flows are fixed and measures price sensitivity to the bond's own yield-to-maturity.
>
> **Why is modified duration used:** to estimate price change for a plain bond when cash flows do not react to rates.
>
> **Relationship:** if cash flows are locked, only the discount rate moves, so the duration slope stays clean.
>
> **Example:** imagine you took a fixed-rate mortgage and the lender assumes you will pay every month exactly as scheduled; rate changes affect the loan's value, but not the payment dates.
>
> ##### Effective Duration: Option-Free Bond
>
> This measures price sensitivity to a parallel benchmark-curve shift.
>
> **What is option-free bond:** a bond with no call, put, or prepayment feature.
>
> **What is parallel shift:** every point on the curve moves by the same amount.
>
> **Why is effective duration used:** to measure sensitivity to benchmark-curve movement rather than only the bond's own yield.
>
> **Relationship:** for an option-free bond, cash flows still stay fixed, so effective duration and modified duration are usually close; they get closer when the curve is flatter, maturity is shorter, and price is closer to par.
>
> **Example:** imagine your mortgage cannot be refinanced early and all market mortgage rates move up by 1%; the loan value falls much like a normal fixed-rate bond.
>
> ##### Effective Duration: Callable Bond
>
> This falls when benchmark yields fall and the issuer becomes more likely to call the bond.
>
> **What is callable bond:** a bond the borrower can repay early.
>
> **Why is call used:** the borrower wants to replace expensive old debt with cheaper new debt.
>
> **Relationship:** falling yields make refinancing attractive, so the investor loses the long stream of high coupons; expected life shortens, price upside is capped, and effective duration falls.
>
> **Example:** imagine you borrowed at 7%, new borrowing rates fall to 5%, and you repay early; your lender no longer receives the old 7% payments for as long as expected.
>
> ##### Effective Duration: Putable Bond
>
> This falls when benchmark yields rise and the investor becomes more likely to put the bond back to the issuer.
>
> **What is putable bond:** a bond the investor can sell back to the borrower before maturity.
>
> **Why is put used:** the investor wants protection when market rates rise and the old bond becomes unattractive.
>
> **Relationship:** rising yields normally hurt bond price, but the put creates a floor because the investor can exit; price falls less, so effective duration falls while effective convexity remains positive.
>
> **Example:** imagine you are the lender and your loan contract lets you force repayment when better market rates appear; you are not trapped earning the old low rate.
>
> ##### Effective Duration: MBS
>
> This changes because mortgage borrowers can refinance or prepay when rates move.
>
> **What is MBS:** a bond backed by a pool of mortgages.
>
> **What is prepayment:** borrower pays back principal earlier than scheduled.
>
> **Why is refinancing used:** the borrower replaces an expensive mortgage with a cheaper one.
>
> **Relationship:** falling rates increase refinancing, so high-rate mortgage cash flows vanish early; the MBS price does not rise as much as a normal bond, and effective duration captures that changed cash-flow path.
>
> **Example:** imagine you took a mortgage at 7%, rates fall to 5%, and you refinance; good for you, but the MBS investor loses the attractive 7% payments.
>
> ##### Key Rate Duration
>
> This measures sensitivity to one maturity point on the benchmark curve.
>
> **What is key rate:** one selected maturity point, such as the 2-year, 5-year, 10-year, or 30-year yield.
>
> **Why is key rate duration used:** to measure non-parallel curve moves.
>
> **Relationship:** if only the 5-year yield moves, a full-curve duration hides the detail; key rate duration shows which maturity point created the gain or loss, and all key-rate buckets sum to effective duration.
>
> **Example:** imagine 30-year mortgage rates rise but 2-year car-loan rates do not; your exposure depends on which rate your cash flows are tied to.
>
> ##### Empirical Duration
>
> This estimates duration from historical price behavior instead of a clean formula.
>
> **What is empirical:** based on observed data.
>
> **What is analytical:** based on a model or formula.
>
> **Why is empirical duration used:** to capture real-world interaction between benchmark yields, spreads, and bond prices.
>
> **Relationship:** in stress, government benchmark yields may fall while credit spreads widen; the falling benchmark helps price, but the widening spread hurts price, so empirical duration for risky credit can be lower than analytical duration.
>
> **Example:** imagine base mortgage rates fall, but banks become scared of your credit risk and demand a bigger spread; the headline rate move says borrowing should get cheaper, but the spread fights that benefit.
>

> [!question] KRD WITH A NON-PARALLEL MOVE
> Problem: 50% in a 5-year zero at 5% and 50% in a 10-year zero at 6%. The 5-year yield rises by 50 basis points and the 10-year yield falls by 25 basis points. Estimate the portfolio percentage change.
> 
> 
> 5-year impact: modified duration $= 5/1.05 = 4.762$, weighted KRD $= 2.381$, price impact $= -2.381 \times 0.005 = -1.19\%$
> 10-year impact: modified duration $= 10/1.06 = 9.434$, weighted KRD $= 4.717$, price impact $= -4.717 \times (-0.0025) = +1.18\%$
> Net portfolio move: roughly **-0.01%**
> **Takeaway:** one part of the curve can hurt you while another quietly saves you.

##### EMPIRICAL VS ANALYTICAL

> [!abstract] MEMORISE
> - Analytical duration = formula or model estimate.
> - Empirical duration = history-based estimate.
> - For credit-heavy bonds, empirical duration can be lower because spreads often widen when government yields fall in stress.
> - Flight to quality breaks naive analytical thinking.

21. Analytical duration and convexity are model-based. They come from formulas or repricing frameworks that usually hold spreads constant while the benchmark curve moves.
22. Empirical duration and convexity are built from historical data. They ask what bond prices actually did when rates and spreads moved together in the wild.
23. This distinction matters a lot for credit risk. In stress periods, government yields often fall because investors flee to safety, but credit spreads widen at the same time because default fears jump.
24. So a corporate bond may not rally nearly as much as its analytical duration suggests. Sometimes it may not rally at all. That is why empirical duration can be lower than analytical duration for credit-heavy portfolios.

> [!info] Example
> March 2020 is the real version. COVID panic sent investors stampeding into US Treasuries, so Treasury yields collapsed. But high-yield corporate spreads exploded because default fear suddenly went through the roof. So a junk-bond fund did not enjoy the full “rates are down, bond prices should rise” party. Spread widening punched back hard. That gap between the neat formula and the actual market outcome is why empirical duration exists.

> [!tip] QUICK CHECKS
> - Embedded option or prepayment risk? Use effective, not modified.
> - Convert basis points to decimals before multiplying.
> - Key rate durations are for non-parallel curve moves.
> - Portfolio KRDs add up to portfolio effective duration.
> - Analytical holds the spread story simpler than reality; empirical lets history talk.

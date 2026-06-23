### MODULE 10: Interest Rate Risk and Return

> [!ABSTRACT] LOS
> 1. Calculate and interpret the sources of return from investing in a fixed-rate bond.
> 2. Describe the relationships among a bond's holding period return, its Macaulay duration, and the investment horizon.
> 3. Define, calculate, and interpret Macaulay duration.
10 Interest Rate Risk and Return
> [!tip] SEE THIS BEFORE EXAM
> - Realized horizon yield = annualized return from reinvested coupons plus sale price or redemption value, divided by what you paid.
> - Duration gap = Macaulay duration - investment horizon.
> - Macaulay duration = sum of each cash-flow time multiplied by its present-value weight.
> ==Long horizon: reinvestment risk dominates, so falling rates hurt. Short horizon: price risk dominates, so rising rates hurt.==
> - Duration is negatively related to the change in yield and the coupon rate.
> - When yield rises, the fat chunk that is balloon payment of the present value of the bond is discounted more heavily, so the weights to later cash flows decline and duration decreases (gets pulled earlier). A better way to see this is that with an increased yield you reinvest your coupons at a better rate which means you get your money back faster hence lower duration.
> - When the yields fall then your coupons are reinvested at an awful rate. So the duration increases because it will take time to get your money back.
> - **You paid 100, reinvested coupons grow to 21, and sale price is 110 after 3 years. Find realized horizon yield.** Put everything you finally have on top: 21 + 110 = 131. Compare that with what you paid: 131 / 100 = 1.331. Now take the 3-year root; since 1.10 cubed is 1.331, horizon yield is 10% per year.
> - **A 5% annual coupon bond pays coupons for 3 years, and reinvestment rate is 10%. Find future value of coupons.** Do not just add 5 + 5 + 5 and stop. First coupon compounds for 2 years: 5 x 1.10 x 1.10 = 6.05. Second coupon compounds for 1 year: 5 x 1.10 = 5.50. Third coupon is already at the horizon: 5. Total future value of coupons = 16.55.
> - **A bond has 2 years left, coupon is 5, face value is 100, and market yield is 5%. Find sale price.** Discount the cash flows at the new yield: 5 / 1.05 + 105 / 1.05^2. That is 4.76 + 95.24 = 100. When coupon rate equals market yield, price sits at par.
> - **A discount bond was bought at 96, its constant-yield carrying value is now 98, and it is sold for 101. Split the return effect.** The pull from 96 to 98 is interest income through discount amortization. The extra 101 - 98 = 3 is capital gain because the bond sold above its constant-yield path. Do not throw both into the same bucket.
> - **Macaulay duration is 9.85 years and investment horizon is 7 years. Find duration gap and the main risk.** Duration gap = 9.85 - 7 = 2.85. Positive gap means the bond's duration is longer than your horizon, so price risk dominates and rising rates are the bad move. If the gap were negative, reinvestment risk would dominate and falling rates would be the bad move.
> - **A bond has two cash flows: 50 in year 1 and 50 in year 3. The full price is 100. Find Macaulay duration if both present-value weights are 50%.** Do the weighted average of time: 1 x 0.50 + 3 x 0.50 = 2 years. Macaulay duration is just the cash-flow center of gravity.
> - **A semiannual bond has Macaulay duration of 3.6 periods. Convert it to years.** Semiannual means 2 periods per year, so 3.6 / 2 = 1.8 years. Do not leave period duration as annual duration.
> - **A bond is 60 days into a 180-day coupon period. Find the first cash-flow time in periods.** Time left is 180 - 60 = 120 days. First cash-flow time = 120 / 180 = 0.667 periods. Every later cash flow is one full period after that.
> - **A 5-year zero-coupon bond has one cash flow at maturity. Find Macaulay duration.** No table needed. All present-value weight sits in year 5, so Macaulay duration = 5 years, even if the yield is weird or negative.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Yield-to-maturity becomes the realized return only if the bond pays as scheduled, coupons are reinvested at the original yield-to-maturity, and the sale price follows the constant-yield path or the bond is held to maturity.
>
> If any one of those breaks, realized return changes.

#### Core Flow

1. This module asks one question: you bought a fixed-rate bond, so what return do you actually earn? The answer is **not automatically yield-to-maturity**.
2. What is yield-to-maturity: the single discount rate that prices the bond today, assuming promised cash flows are received and reinvestment works as assumed.
3. A fixed-rate bond has three return sources: scheduled coupon and principal payments, reinvestment income on coupons, and capital gain or loss if sold before maturity.
4. Think of a bond like a rental flat. Rent checks are coupons, investing the rent is reinvestment income, and selling the flat creates the capital gain or loss. Your total result is all three.
5. Horizon yield is the annualized return over your actual holding period:

$$
r = \left(\frac{FV_{\text{coupons}} + P_{\text{sale or maturity}}}{PV_{\text{purchase}}}\right)^{1/T} - 1
$$

6. Notation in simple language:
   - $FV_{\text{coupons}}$: future value of coupons reinvested until the horizon date.
   - $P_{\text{sale or maturity}}$: sale price if sold before maturity, or redemption value if held to maturity.
   - $PV_{\text{purchase}}$: purchase price at the start.
   - $T$: investment horizon in years.
6. Example: buy at **100**, coupons grow to **27.203**, sell at **100** after **4** years. The realised return is:

$$
r = \left(\frac{27.203 + 100}{100}\right)^{1/4} - 1 = 6.20\%
$$

8. That **6.20%** equals the original yield-to-maturity because coupons were reinvested at **6.20%** and the sale price stayed on the constant-yield price path.
9. What is constant-yield price path: the bond's carrying value path if the market yield stays equal to the original yield-to-maturity.
10. Carrying value = purchase price plus accumulated discount amortization, or minus accumulated premium amortization. Discount bonds get pulled up toward par; premium bonds get pulled down toward par.
11. The big rate-move rule is simple: rising rates help coupon reinvestment but hurt sale price; falling rates hurt coupon reinvestment but help sale price.
12. ==Reinvestment risk is the risk that coupons are reinvested at worse rates than expected. Price risk is the risk that the bond must be sold at a worse price than expected.==
13. A buy-and-hold investor has no realised price risk if there is no default, but still has reinvestment risk. An investor who sells before the first coupon has price risk but no reinvestment risk.

> [!example] SILICON VALLEY BANK
>  Silicon Valley Bank's 2023 problem was price risk becoming real. Long fixed-rate securities lost market value when rates rose; once forced sales enter the story, the paper loss becomes a realized wound.

14. Source example: all investors buy a **10-year**, **6.2%** annual coupon bond at par. If rates rise to **7.2%**, the **10-year** investor's horizon yield rises to **6.43%** because reinvestment improves and there is no sale loss.
15. The **4-year** investor in the same bond gets hurt when rates rise. Coupons reinvest better, but the sale price drops to **95.263**, so horizon yield falls to **5.28%**.
16. If rates fall to **5.2%**, the **10-year** investor's horizon yield falls to **5.98%** because coupons reinvest at lower rates.
17. The **4-year** investor benefits when rates fall because the sale price rises to **105.043**; horizon yield rises to **7.16%**.
18. Same bond, same rate move, different investor. Long horizon fears falling rates. Short horizon fears rising rates.

> [!question] HORIZON YIELD WHEN RATES RISE
> Problem: A family office buys a **6-year**, **5.8%** annual coupon bond at par. Immediately after purchase, rates rise to **6.5%**. The investor sells after **3** years. Calculate the annualized return.
>
> ---
>
> Solution:
>
> Future value of three coupons reinvested at **6.5%**:
>
> $$
> FV_{\text{coupons}} = 18.556
> $$
>
> Sale price after **3** years, with **3** years remaining and yield at **6.5%**:
>
> $$
> P_{\text{sale}} = 98.146
> $$
>
> Horizon yield:
>
> $$
> r = \left(\frac{18.556 + 98.146}{100}\right)^{1/3} - 1 = 5.28\%
> $$
>
> Explanation: reinvestment improved, but the capital loss hurt more. That is why the return is below the original **5.8%**.

19. Interest income is the return from time passing: coupons, reinvestment income, and discount or premium amortization. Capital gain or loss is the return from the bond's market value changing because yield-to-maturity changed.
20. Investment horizon is how long the investor expects to hold the bond. This is the key variable that decides whether reinvestment risk or price risk matters more.
21. ==Macaulay duration is the holding period where price risk and reinvestment risk roughly offset for a one-time instantaneous parallel yield-curve shift.==
22. What is Macaulay duration: the present-value-weighted average time to receive the bond's cash flows.
23. Why Macaulay duration matters: if your horizon equals Macaulay duration, the bad effect of a rate move is roughly balanced by the good effect.
24. Duration gap is:

$$
\text{Duration gap} = \text{Macaulay duration} - \text{Investment horizon}
$$

26. If duration gap is **positive**, Macaulay duration is greater than the horizon. Price risk dominates. The bad scenario is **rising rates**.
27. If duration gap is **zero**, investment horizon equals Macaulay duration. Price risk and reinvestment risk roughly offset.
28. If duration gap is **negative**, Macaulay duration is less than the horizon. Reinvestment risk dominates. The bad scenario is **falling rates**.
29. Source example: Macaulay duration **9.85**, investor horizon **7.0** years:

$$
\text{Duration gap} = 9.85 - 7.00 = 2.85
$$

30. Positive duration gap means price risk dominates; this investor is mainly worried about rates rising. **P for positive. P for price.**
31. Example: BRWA's **10-year**, **6.2%** bond has Macaulay duration **7.7429** years. The **4-year** investor is short-horizon and price-risk-heavy; the **10-year** investor is long-horizon and reinvestment-risk-heavy; the **8-year** investor is close to balanced.
32. Romanian **30-year**, **5.61%** eurobond example: Macaulay duration is **15.16** years. The **15-year** investor stays near **5.61%** whether rates move up or down by **50** basis points because horizon is close to duration.

> [!tip] DURATION GAP MAP
> Positive gap: price risk dominates; rising rates hurt.
>
> Zero gap: price risk and reinvestment risk roughly offset.
>
> Negative gap: reinvestment risk dominates; falling rates hurt.

33. Macaulay duration is calculated as a weighted-average time to cash flows:

$$
\text{Weight}_t = \frac{PV(\text{cash flow at time }t)}{\text{Full price}}
$$

$$
\text{Macaulay duration} = \sum(t \times \text{Weight}_t)
$$

34. What is full price: the invoice price including accrued interest. It is used because the weights must add up to the actual present value paid for the bond.
35. Macaulay duration is the bond's cash-flow center of gravity. A zero-coupon bond has all cash flow at maturity, so Macaulay duration equals maturity.
36. A coupon bond usually has Macaulay duration below maturity because coupons arrive earlier. Higher coupons pull more value earlier and usually reduce duration.
37. Do not confuse Macaulay duration with modified duration. Macaulay duration asks, "On average, when do I get my money back?" Modified duration asks, "How much does price move when yield changes?"
38. Source example: a **10-year**, **6.2%** annual coupon bond priced at par has Macaulay duration **7.7429** years, not **10**, because coupons arrive before final maturity.
39. In that example, the final cash flow of **106.2** is about **58%** of present value, so duration is still closer to maturity than to the early coupon dates.
40. If a bond pays semiannual coupons, the table gives Macaulay duration in periods; divide by **2** to annualize. If it pays quarterly, divide by **4**.
41. Between coupon dates, the first cash flow arrives in less than one full period:

$$
1 - \frac{t}{T}
$$

42. Here, $t$ is days since the last coupon and $T$ is days in the coupon period. Each later cash flow is one period after the previous one.
43. Source example: **57** days after issuance on a 30/360 annual coupon basis, the first cash flow arrives after **0.8417** years, and Macaulay duration falls from **7.7429** to **7.5845**.
44. Key property: Macaulay duration is not static. As time passes, remaining cash flows get closer, so duration normally falls.
45. Source self-assessment: a **2-year**, **4%** semiannual coupon bond at **4.60%** yield is **63** days into a **180-day** period. First cash flow timing is:

$$
\frac{180 - 63}{180} = 0.65 \text{ periods}
$$

46. The weighted sum is **3.5331** periods, so annualized Macaulay duration is:

$$
\frac{3.5331}{2} = 1.7666 \text{ years}
$$

47. Source question-set example: a **3-year**, **4%** semiannual coupon bond priced at **100** has period-based Macaulay duration **5.71346** periods:

$$
\frac{5.71346}{2} = 2.857 \text{ years}
$$

48. Negative yields do not break Macaulay duration. A **5-year**, **0%** coupon bond with yield-to-maturity of **-0.38%** still has Macaulay duration **5.0000** years because there is only one cash flow.
49. A **5-year**, **0.5%** annual coupon bond with yield-to-maturity of **-0.20%** has Macaulay duration **4.9515** years; if it is **91** days into the first coupon period, duration falls to **4.6987** years.
50. The source also gives a closed-form Macaulay duration equation, but the exam mechanics are usually easier from the cash-flow table or spreadsheet function. Spreadsheet shortcut:

$$
\text{DURATION(Settlement, Maturity, Coupon, Yield, Frequency, Basis)}
$$

51. Frequency is **1** for annual, **2** for semiannual, **4** for quarterly. Basis is the day-count convention: **0** or omitted for 30/360, **1** for actual/actual, **2** for actual/360, and **3** for actual/365.

> [!question] BETWEEN COUPON DATES
> Problem: A semiannual coupon bond is **12** days into a **180-day** coupon period. The cash-flow table gives weighted time of **5.6439** periods. What is the annualized Macaulay duration?
>
> ---
>
> Solution:
>
> $$
> \frac{180 - 12}{180} = 0.9333 \text{ periods}
> $$
>
> $$
> \frac{5.6439}{2} = 2.8220 \text{ years}
> $$
>
> Explanation: being partway through the coupon period reduces the time to every remaining cash flow.

52. Exam trap: if the investor holds to maturity, do not say price risk dominates. No sale means no realized price risk, assuming no default.
53. Exam trap: if the investor sells before the first coupon, do not say reinvestment risk dominates. There is no coupon to reinvest.
54. Exam trap: duration gap uses **Macaulay duration minus investment horizon**, not maturity minus horizon.
55. Exam trap: for semiannual bonds, annualize Macaulay duration by dividing the period result by **2**.
56. Final mental picture: rates rise, price falls now, coupons reinvest better later. Rates fall, price rises now, coupons reinvest worse later. Macaulay duration is the balancing point between those two forces.

> [!tip] FINAL QUICK CHECKS
> If horizon yield equals original yield-to-maturity, ask: were coupons reinvested at the original yield and was the sale price on the constant-yield path?
>
> If investment horizon is greater than Macaulay duration, reinvestment risk dominates and falling rates are the bad scenario.
>
> If investment horizon is less than Macaulay duration, price risk dominates and rising rates are the bad scenario.
>
> If the bond is zero-coupon, Macaulay duration equals maturity because there is only one cash flow.

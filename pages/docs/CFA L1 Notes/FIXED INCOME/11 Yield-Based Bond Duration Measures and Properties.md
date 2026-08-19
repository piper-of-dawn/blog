> [!abstract] SEE THIS BEFORE EXAM
> - Duration is the bond's interest-rate sensitivity meter. It tells you how hard price gets hit when yield moves.
> - Macaulay duration = present-value-weighted average time to promised cash flows.
> - Modified duration = approximate percentage price sensitivity to a change in the bond's own yield-to-maturity.
> - Money duration and price value of a basis point translate that sensitivity into currency moves.
> - ==Long maturity, low coupon, low yield = higher duration and higher interest-rate risk.==
> - **Macaulay duration is 10.2 semiannual periods and annual yield is 4%. Find modified duration and annualized modified duration.** First slow down: semiannual means split the 4% annual yield into 2% per period. Modified duration is Macaulay duration divided by 1 plus the periodic yield, so 10.2 / 1.02 = 10 periods. Annualized modified duration is then 10 / 2 = 5 years.
> - **Annualized modified duration is 6 and yield rises by 50 basis points. Estimate the percentage price change.** Convert basis points before touching the formula: 50 basis points = 0.005. Price change is -6 x 0.005 = -0.03, so the bond falls about 3%. The minus sign is the whole story: yield up, price down.
> - **Current full price is 100, price after yield falls is 105, price after yield rises is 95, and the yield shock is 1%. Find approximate modified duration.** Use the up-and-down price gap: (105 - 95) / (2 x 0.01 x 100). That is 10 / 2 = 5. You are just measuring the slope around today's price.
> - **Approximate modified duration is 5 and yield per period is 2%. Find approximate Macaulay duration.** Go backward by multiplying by 1 plus the periodic yield: 5 x 1.02 = 5.10. Modified duration is the price-sensitivity version; Macaulay duration is the time version.
> - **A USD 10 million par position has full price 102, annualized modified duration 5, and yield rises by 1%. Estimate the money loss.** First convert price into market value: USD 10 million x 102 / 100 = USD 10.2 million. Money duration is 5 x USD 10.2 million = USD 51 million. Loss is USD 51 million x 0.01 = USD 510,000.
> - **Price after yield falls 1 basis point is 100.06 and price after yield rises 1 basis point is 99.94. Find price value of a basis point.** Price value of a basis point is the small up-down price gap divided by 2: (100.06 - 99.94) / 2 = 0.06. That means one basis point is worth 0.06 per 100 of par.
> - **Price value of a basis point is 0.04 per 100 of par and par value is USD 10 million. Find position price value of a basis point.** Scale the per-100 number to the whole position: 0.04 / 100 x USD 10 million = USD 4,000 per basis point. Tiny rate moves become real money when the position is large.
> - **Money duration is USD 50 million. Find basis point value.** One basis point is 0.0001, so basis point value = USD 50 million x 0.0001 = USD 5,000. This is the shortcut version of one-basis-point risk.
> - **A 5-year zero-coupon bond has yield of 25%. Find modified duration.** A zero-coupon bond gets all its money at maturity, so Macaulay duration is 5. Modified duration is 5 / 1.25 = 4. Positive yield makes modified duration smaller than Macaulay duration.
> - **A perpetuity has yield per period of 25%. Find Macaulay duration.** Perpetuity duration is (1 + r) / r, so 1.25 / 0.25 = 5 periods. The bond never matures, but its duration is still finite because distant coupons have tiny present-value weights.
> - **A floating-rate note has 180 days in the coupon period and 60 days have passed since reset. Find Macaulay duration.** Floating-rate duration is basically time left until reset. Time left is 180 - 60 = 120 days, so duration = 120 / 180 = 0.667 of a period.

1. Duration exists because bond prices and yields move in opposite directions, but not all bonds move by the same amount. A tiny 1-year zero-coupon bond barely flinches. A 30-year bond can get slapped around.
2. So duration is just a cleaner answer to one question: **if yield moves, how hard does this bond's price get hit?**
3. This module is about **yield duration**, meaning sensitivity to the bond's own yield-to-maturity while promised cash flows are treated as certain. Later curve-duration measures deal with benchmark curve shifts and messier cash-flow paths.
4. Keep the two learning outcomes in your head: first, define, calculate, and interpret modified duration, money duration, and price value of a basis point; second, explain how maturity, coupon, and yield level change interest-rate risk.

##### THE DURATION FAMILY

> [!abstract] MEMORISE
> - Macaulay = time.
> - Modified = percentage price move.
> - Money duration = currency move.
> - Price value of a basis point = full-price move for 1 basis point.
> - All four are yield-based duration measures when the bond's cash flows are treated as certain.

5. Macaulay duration is the **present-value-weighted average time** to receive the bond's promised cash flows.
   What is present-value-weighted: each cash flow gets weight based on how much of today's full price it represents.
   What is average time: cash flows received earlier pull the duration down; cash flows received later push it up.
6. In casual language, Macaulay duration asks: **where is the bond's value sitting on the timeline?** If most value comes back at maturity, duration is long. If coupons come back early, duration is shorter.
7. Modified duration is what traders care about more day to day. It converts Macaulay duration into **price sensitivity**.
   What is price sensitivity: how much the bond's full price moves for a small change in yield.
   Why is modified duration used: to estimate percentage price change when the bond's own yield-to-maturity changes.

$$
\text{ModDur} = \frac{\text{MacDur}}{1+r}
$$

8. Here, $r$ is the yield per coupon period. If the bond pays semiannual coupons, use the semiannual yield in the denominator first, then annualize duration by dividing by the number of coupon periods per year.
9. The key price-change approximation is:

$$
\% \Delta PV_{\text{Full}} \approx - \text{AnnModDur} \times \Delta \text{AnnYield}
$$

10. The minus sign is the whole bond market in one symbol: yields up, prices down; yields down, prices up.
11. The price change refers to **full price**, also called dirty price, because it includes accrued interest. Do not use flat price for this formula.
12. If a bond has annualized modified duration of 5, then a 100 basis point rise in yield means roughly a **5% price drop**. That is the quick-and-dirty mental math.
13. Higher modified duration means higher interest-rate risk because the price-yield line is steeper.

> [!info] WHY DURATION FEELS LIKE A SEESAW
> Imagine two bonds. Bond A gives you most of your cash back next year. Bond B gives you most of your cash back 30 years from now. If discount rates change today, Bond B's faraway cash flow gets revalued much more violently.
> 
> That is duration. The further the important money sits in the future, the longer the bond's price sits on the wrong end of the seesaw.
> 
> Apple can lose 5% in a day because equity is risky. A government bond can also lose meaningful value without default, simply because its cash flows are far away and rates jump. That is the point: **duration risk is not credit risk.**

> [!info] FOR THE MATH GUYS
> - Modified duration is the **first derivative** of bond price with respect to yield.
> - It is the slope of the price-yield curve at today's yield.
> - Bigger slope in absolute value = more interest-rate risk.
> - This is still a linear approximation, not the full curved story.

##### APPROXIMATE MODIFIED DURATION

> [!abstract] MEMORISE
> - Shock yield up a bit, shock yield down by the same amount, and measure the slope.
> - Use full prices: current full price, price after yield increase, and price after yield decrease.
> - This approximation is extremely close for plain fixed-rate bonds.
> - It becomes useful later when closed-form duration is messy.

14. You do not always need to compute modified duration through Macaulay duration first. You can estimate it directly from prices:

$$
\text{AnnModDur} \approx \frac{PV_- - PV_+}{2 \times \Delta \text{Yield} \times PV_0}
$$

15. Meaning:
   - $PV_0$ = current full price
   - $PV_+$ = full price after a small yield increase
   - $PV_-$ = full price after a small yield decrease
   - $\Delta \text{Yield}$ = the annual yield shock written as a decimal
16. This is just the slope estimate from a tiny bump up and tiny bump down in yield. If the Bright Wheels Automotive Corporation (BRWA) bond is priced at 100, rises to 100.230 when yield falls 5 basis points, and falls to 99.771 when yield rises 5 basis points, the approximation gives modified duration of about **4.587**.
17. The source example's exact annualized modified duration for that BRWA bond is about **4.58676**, so the approximation is basically the same for a small yield shock.
18. If you already have approximate modified duration and want approximate Macaulay duration, multiply modified duration by one plus the yield per period:

$$
\text{AnnMacDur} \approx \text{AnnModDur} \times (1+r)
$$

> [!warning] THE LINEAR ESTIMATE TRAP
> Duration gives equal-and-opposite estimates for equal yield moves because it draws a straight tangent line. Real bond prices are curved, so the price gain from a yield fall is usually larger than the price loss from an equal yield rise for a normal option-free bond.
> 
> This is why duration is great for small moves and rough estimates, but convexity enters when the rate move is large.

> [!question] BRWA MODIFIED DURATION
> Problem: A 5-year BRWA bond has annualized modified duration of 4.58676. What is the estimated percentage price change if its yield rises by 80 basis points?
> 
> Solution:
> $$
> \% \Delta PV_{\text{Full}} \approx -4.58676 \times 0.008 = -0.0367
> $$
> Estimated price change: about **-3.67%**
> 
> Explanation: If yield falls by 80 basis points, the estimate flips to **+3.67%** because duration is a straight-line approximation.
> 
> **Takeaway:** duration gives the quick estimate; convexity explains why the real gain and loss are not perfectly symmetric.

##### MONEY DURATION AND PRICE VALUE OF A BASIS POINT

> [!abstract] MEMORISE
> - Modified duration gives percentage move.
> - Money duration gives currency move.
> - Price value of a basis point gives the full-price move for a 1 basis point yield shift.
> - Big portfolio + modest duration can still mean ugly money losses.

19. Money duration is modified duration translated into position size:

$$
\text{MoneyDur} = \text{AnnModDur} \times PV_{\text{Full}}
$$

20. What is money duration: the approximate currency change in the bond or bond position for a 100 basis point change in yield.
    Why is money duration used: percentage loss is not enough when portfolio size differs.
21. Money duration can be stated per 100 of par value or for the actual market value of the position. In the United States, it is often called **dollar duration**.
22. The price change in currency terms is:

$$
\Delta PV_{\text{Full}} \approx - \text{MoneyDur} \times \Delta \text{Yield}
$$

23. Suppose an institutional investor owns USD 100 million par value of a bond with full market value about USD 100.504 million and annualized modified duration of 4.43092. Money duration is about **USD 445.325 million**, so a 100 basis point yield rise implies an approximate loss of **USD 4.453 million**.
24. Price value of a basis point, or **PVBP**, is the estimated change in the full price of a bond for a **1 basis point** change in its yield-to-maturity.

$$
\text{PVBP} = \frac{PV_- - PV_+}{2}
$$

25. Here, $PV_-$ is the full price after decreasing the yield by 1 basis point, and $PV_+$ is the full price after increasing the yield by 1 basis point.
26. PVBP is also called **PV01**, meaning price value or present value of an 01. In the United States, it is often called **DV01**, meaning dollar value of 1 basis point.
27. A related statistic called **basis point value** is:

$$
\text{BPV} = \text{MoneyDur} \times 0.0001
$$

28. Do not make this harder than it is. Modified duration says, "about 4.3% for a 100 basis point move." Money duration says, "about USD 4.3 million for that position." PVBP says, "about USD 43,000 for 1 basis point."

> [!info] MONEY DURATION IS WHERE RISK BECOMES PAINFUL
> A bond can look safe because it is high quality, but if the position is huge, money duration can still be savage. Silicon Valley Bank's 2022-2023 pain was not mainly about borrowers defaulting. It was about owning large long-duration bond positions when rates rose hard.
> 
> That is the exam lesson: credit quality tells you whether cash flows are likely to arrive; duration tells you how much today's price moves before those cash flows arrive.

> [!question] MONEY DURATION
> Problem: A bond has annualized modified duration of 4, full price of 95 per 100 of par value, and yield rises by 50 basis points. Estimate the change in price per 100 of par value.
> 
> Solution:
> $$
> \text{MoneyDur} = 4 \times 95 = 380
> $$
> $$
> \Delta PV_{\text{Full}} \approx -380 \times 0.005 = -1.90
> $$
> Explanation: The price falls by about **1.90 per 100 of par value**.
> 
> **Takeaway:** percentage sensitivity becomes real money very quickly.

##### SPECIAL BONDS: ZEROES, PERPETUITIES, AND FLOATERS

> [!abstract] MEMORISE
> - Zero-coupon bond: Macaulay duration equals maturity.
> - Positive yield: modified duration is less than Macaulay duration.
> - Negative yield: modified duration can be greater than Macaulay duration.
> - Perpetuity Macaulay duration = $(1+r)/r$.
> - Floating-rate note duration is roughly time left until the next reset.

29. For a zero-coupon bond, there is only one cash flow: the maturity value. Since that single cash flow has 100% of the present-value weight, **Macaulay duration equals time-to-maturity**.
30. If a 5-year zero-coupon bond has a positive yield of 3%, its modified duration is less than 5 years because you divide Macaulay duration by $1+r$.
31. If yield is negative, modified duration can be **greater** than Macaulay duration because $1+r$ is less than 1. That is a clean exam trap.
32. A perpetual bond has no maturity value and pays a fixed coupon forever, unless it is called. For a non-callable perpetuity:

$$
\text{MacDur} = \frac{1+r}{r}
$$

33. A floating-rate note or floating-rate loan resets its coupon using a market reference rate plus a quoted margin. Because the coupon resets, rate risk mainly lives between reset dates.
34. For a floating-rate instrument, Macaulay duration is simply the fraction of the coupon period remaining until the next reset:

$$
\text{MacDur}_{\text{Floating}} = \frac{T-t}{T}
$$

35. If there are 180 days in the coupon period and 57 days have passed, the duration is:

$$
\frac{180-57}{180}=0.6833
$$

36. This is why floating-rate instruments usually have very low duration. They keep repricing their coupons, so their price does not behave like a long fixed-rate bond.

> [!info] FIXED COUPON VS FLOATING COUPON
> Think of a fixed-rate bond like a landlord who locked rent for five years. If market rent rises tomorrow, that old lease becomes less attractive immediately.
> 
> A floating-rate note is closer to a rent contract that resets every six months. It can still move between reset dates, but the pain window is much shorter.
> 
> **So what:** fixed-rate bonds carry duration through the whole maturity structure; floating-rate notes mostly carry duration until the next reset.

##### WHAT CHANGES DURATION

> [!abstract] HAMMER THIS
> - Longer maturity = more duration, usually.
> - Lower coupon = more duration.
> - Lower yield = more duration.
> - More of the current coupon period elapsed = lower duration until the coupon date.
> - Duration falls as the bond rolls toward maturity, but it jumps slightly after coupons are paid.

37. All else equal, a bond's interest-rate risk rises when time to maturity is longer, coupon rate is lower, or yield-to-maturity is lower.
38. The intuition for **longer maturity** is simple: more of the bond's value sits far in the future, and distant cash flows get hit harder when discount rates change.
39. This direct maturity-duration relationship always holds for bonds trading at par or premium. For very long-dated discount bonds, the source gives a curious exception: duration can eventually peak and then decrease.
40. The intuition for **lower coupon** is that less cash comes back early, so more value gets pushed into the final principal payment. That makes the bond behave more like a zero-coupon bond, which is more rate-sensitive.
41. The intuition for **lower yield** is that discounting is gentler, so future cash flows keep more weight in today's price. When future-heavy cash flows dominate, duration rises.
42. The fraction of the current coupon period that has elapsed also matters. As days pass before the next coupon, Macaulay duration decreases smoothly. Right after the coupon is paid, it jumps up slightly, creating a saw-tooth pattern.
43. Do not overthink that saw-tooth. During the coupon period, time is passing and the next cash flow is getting closer. On the coupon date, that cash flow disappears from the schedule, so the remaining weighted-average timing jumps a little.
44. Duration is not static. As a bond moves closer to maturity, duration generally falls because time itself slowly bleeds interest-rate risk out of the bond.

> [!info] 1994 BOND MARKET MASSACRE
> In 1994, many bond investors were comfortable because rates had been calm and carry felt easy. Then the Federal Reserve tightened faster than the market expected, yields jumped, and long bonds got hit hard.
> 
> The key lesson was not default. It was duration. Long bonds had cash flows sitting far in the future, so when discount rates rose, their prices took the biggest damage.
> 
> **So what:** if duration is huge and yields rise fast, even high-quality bonds can produce ugly mark-to-market losses.
> <img src="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3730565-4d29-4966-bf59-2236a16478cc_604x772.png" alt="Chart from Adam Tooze article on the 1994 bond market massacre" width="220" style="display:block; margin-top:8px; border-radius:8px;" />

##### QUICK EXAM TABLE

| If this increases | Duration usually does this | Why |
|---|---:|---|
| Time-to-maturity | Increases | More value sits farther away. |
| Coupon rate | Decreases | More cash comes back early. |
| Yield-to-maturity | Decreases | Future cash flows get discounted harder, so their weight falls. |
| Fraction of current coupon period elapsed | Decreases before coupon date | The next cash flow is getting closer. |

45. The fastest comparison method is simple. If two bonds are identical except coupon, the lower-coupon bond has higher duration. If two bonds are identical except yield, the lower-yield bond has higher duration. If two bonds are identical except maturity, the longer bond usually has higher duration.
46. If the question says rates will rise, the lowest-duration bond should perform best because it has the smallest expected price loss.
47. If the question says rates will fall, the highest-duration bond should perform best because it has the biggest expected price gain.
48. In the source comparison, the short Australian zero-coupon bond has the least interest-rate risk, the 5-year BRWA bond sits in the middle, and the 30-year Romanian bond has the most interest-rate risk.

> [!question] RANK THE RISK
> Problem: Three bonds have annualized modified durations of 0.737, 4.335, and 16.248. Which bond has the most interest-rate risk if yields move by the same amount?
> 
> Solution: The bond with modified duration **16.248** has the most interest-rate risk.
> 
> Explanation: Modified duration ranks the approximate percentage price sensitivity to the bond's own yield. A bigger duration means a steeper price-yield response.
> 
> **Takeaway:** for the same yield move, biggest duration gets hit or helped the most.

> [!tip] QUICK CHECKS
> - Macaulay = time; modified = percentage sensitivity.
> - Use full price, not flat price, in duration work.
> - Convert basis points to decimals before multiplying.
> - Bigger duration means steeper price response.
> - Long maturity, low coupon, low yield = higher duration.
> - Floating-rate note duration is short because the coupon resets.
> - PVBP, PV01, and DV01 are all 1-basis-point sensitivity language.

> [!warning] DO NOT DO THIS
> - Don't confuse Macaulay duration with modified duration.
> - Don't forget the minus sign in the price-change approximation.
> - Don't use flat price when the formula is about full price.
> - Don't treat the straight-line duration estimate as exact for large yield moves.
> - Don't assume duration stays constant as the bond ages.
> - Don't forget that negative yields can make modified duration greater than Macaulay duration.

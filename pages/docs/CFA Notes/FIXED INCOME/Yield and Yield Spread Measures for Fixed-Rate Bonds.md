> [!NOTE] LOS
> 1. Calculate annual yield on a bond for varying compounding periods in a year.
> 2. Compare, calculate, and interpret yield and yield spread measures for fixed-rate bonds.
>

1. Start every numerical by asking: "What cash flows am I discounting, and how often?" Yield to maturity (YTM) is the rate that makes today's price equal to the present value of all promised coupons and principal:

$$PV = \frac{PMT_1}{(1+r)^1} + \frac{PMT_2}{(1+r)^2} + \cdots + \frac{PMT_N+FV_N}{(1+r)^N}$$

Symbol intuition: PV is today's bond price, PMT is coupon per period, FV is principal repaid at the end, N is number of coupon periods, and r is the yield per period. If coupons are semiannual, the calculator gives the half-year r, so quoted YTM = **2 x r**.

2. Periodicity is the compounding frequency hiding inside the quote. Do not compare raw yields until the compounding basis matches. Use this bridge:

$$\left(1 + \frac{\mathrm{APR}_m}{m}\right)^m = \left(1 + \frac{\mathrm{APR}_n}{n}\right)^n$$

Symbol intuition: APR_m is the quoted annual rate with m compounding periods. APR_n is the quoted annual rate with n compounding periods. Both sides are just "one-year growth." For the same one-year growth, higher compounding frequency means lower quoted annual rate.

3. Effective annual yield (EAY) is the "show me the actual one-year money" number:

$$\mathrm{EAY} = \left(1+\frac{y}{n}\right)^n - 1$$

Symbol intuition: y is the quoted annual yield, n is periods per year, and y/n is the per-period yield. If the question says compare bonds with different coupon frequencies, convert to EAY or to one common periodicity before judging.

4. Street yield versus true yield is a timing issue, not a new formula war. Street yield assumes coupons arrive on scheduled dates. True yield moves weekend or holiday payments to the real business day. Same cash flow arriving later is worse, so ==true yield is never higher than street yield==.

5. Current yield is the quick coupon-income ratio:

$$\text{Current yield} = \frac{\text{Annual coupon}}{\text{Flat price}}$$

Symbol intuition: annual coupon is the cash coupon for one year, and flat price is the quoted clean price. This is easy to calculate but incomplete. It ignores compounding, accrued interest, and the gain or loss when price moves toward par.

6. Simple yield is current yield with one extra honesty check: it includes straight-line amortization of discount or premium.

$$\text{Simple yield} = \frac{\text{Annual coupon} + \text{Straight-line amortized gain or loss}}{\text{Flat price}}$$

Symbol intuition: discount amortization adds to return because price moves up toward par; premium amortization subtracts because price moves down toward par.

7. Callable bond numericals are not "solve YTM and relax." Replace the final maturity value with the call price and solve to each call date:

$$PV = \sum_{t=1}^{N-1}\frac{PMT}{(1+r)^t} + \frac{PMT+\text{Call price}}{(1+r)^N}$$

Symbol intuition: N is periods until that specific call date, not maturity. Do this for every call date, calculate YTM too, then take the lowest number:

$$\text{YTW} = \min(\text{YTM}, \text{all YTCs})$$

8. Spread numericals are usually subtraction, but only after choosing the correct benchmark:

$$\text{G-spread} = \text{Bond YTM} - \text{Government benchmark yield}$$

$$\text{I-spread} = \text{Bond YTM} - \text{Swap rate for same currency and tenor}$$

Symbol intuition: G means government. I means swap curve/interpolated swap benchmark. If the exact government maturity is missing, interpolate first, then subtract. If yield changes but spread does not, benchmark moved. If spread changes, issuer or issue risk changed.

9. Z-spread numericals are not one subtraction. Z-spread is the one constant spread added to every spot rate so the discounted cash flows equal price:

$$PV = \frac{PMT_1}{1+s_1+Z} + \frac{PMT_2}{(1+s_2+Z)^2} + \cdots + \frac{PMT_N+FV_N}{(1+s_N+Z)^N}$$

Symbol intuition: s_1, s_2, and s_N are spot rates for each cash-flow date. Z is the same extra spread added to all of them. For callable bonds:

$$\mathrm{OAS} = \text{Z-spread} - \text{Option value in basis points per year}$$

10. Callable bond has a **hidden short call option** given to issuer → investor loses upside → market compensates by reducing spread → **OAS < Z-spread**. The call option belongs to the issuer, so it eats part of the raw Z-spread. ==That is why callable bond OAS is below Z-spread.==  This option adjusted spread could be confusing.  Z spread is the spread that you pay,when you buy a call option, a portion of this Z spread becomes the option value. And when you remove that option value from, it becomes option adjusted spread.


> [!ABSTRACT] MEMORISE
> Effective annual yield (periodicity n):
>
> $$\mathrm{EAY} = \left(1 + \frac{y}{n}\right)^{n} - 1$$
>
> Current and simple yield:
>
> $$\text{Current} = \frac{\text{Annual coupon}}{\text{Flat price}},\quad \text{Simple} \approx \frac{\text{Annual coupon} \pm \text{Annual amortization}}{\text{Flat price}}$$
>
> Government spread (G-spread):
>
> G SPREAD = Bond Yield - Government Yield (same maturity)
>
> Zero Volatility Spread (Z-Spread)
>
> Z-spread over spot curve (solve for Z so price matches):
>
> $$\sum_{t=1}^{T} \frac{CF_t}{\big(1 + s_t + Z\big)^{t}} = \text{Price}$$
>
> Callable bonds - option-adjusted spread:
>
> OAS = Z-spread - Option cost
>
> Yield to worst:
>
> $$\text{YTW} = \min\big(\,\text{YTM},\ \{\text{YTC}_i\}\,\big)$$
>
> Notation in simple language: y = quoted yield to maturity; APR = annual percentage rate; n = coupons/year; PMT = coupon payment per period; PV = today's price; FV = final principal repayment; YTC = yield to call; s_t = benchmark spot rate at time t; Z = Z-spread in decimal form; bp = basis points, and **1 bp = 0.01%**.

> [!tip] Quick checks
> - Hold EAY fixed: higher periodicity -> lower quoted YTM.
> - "Yield moved, spread didn't" -> benchmark moved (economy-wide).
> - "Spread moved" -> issuer/issue changed (credit/liquidity/tax).
> - Callable: YTW is the smallest among YTM and all YTCs.
> - Interpolate the benchmark yield when exact maturity is missing.

> [!question] ZERO-COUPON: QUOTED YTM (SEMIANNUAL BASIS)
>
> Problem: A 15-year zero with USD 1,000 par trades at USD 331.40. Find the quoted YTM on a semiannual bond basis.
>
> ---
>
> Solution:
> $$N=30,\ PMT=0,\ FV=1000,\ PV=-331.40 \Rightarrow I/Y_{\tfrac{1}{2}\,yr}=3.750\%$$
> Quoted YTM = 2 x 3.750% = \textbf{7.500%}.
> Explanation: The calculator's I/Y is per half-year; bond-basis quotes double it.

> [!question] G-SPREAD WITH INTERPOLATED BENCHMARK
> Problem: A 3-year, 8% semiannual-pay bond is priced at 103.165. Treasury 1y = 3.0%, 4y = 5.0%. Compute the G-spread.
>
> ---
>
> Solution:
> Bond YTM:
>
> $$N=6,\ PMT=4,\ FV=100,\ PV=-103.165 \Rightarrow I/Y_{\tfrac{1}{2}\,yr}=3.408\%$$
>
> Quoted YTM = \textbf{6.82%}.
> Interpolated 3y Treasury:
>
> $$3.0 + \tfrac{(3-1)}{(4-1)} (5.0-3.0) = \textbf{4.33\%}$$
>
> G-spread = 6.82 - 4.33 = \textbf{2.49% (249 bp)}.
> Explanation: Use nearest on-the-run government yields and linear interpolation for the missing maturity.

#### Periodicity and Annualized Yields (LOS 1)

9. The whole module is basically one warning: a yield number is not meaningful until you know the convention behind it. A trader saying "this bond yields 5%" is like a promoter saying "the movie made 500 crore" without telling you whether that is gross, net, worldwide, or opening weekend. First ask: annual or semiannual? quarterly or monthly? street or true? government basis or corporate basis?

10. Periodicity means how many compounding periods are assumed in one year. More periods means more chances for interest to earn interest. So a lower quoted annual rate with more compounding can still give the same actual one-year return.

11. Use this flow for periodicity questions: first find the periodic rate, then make both quotes produce the same one-year growth, then solve for the required quoted basis. 

$$\left(1 + \frac{\mathrm{APR}_m}{m}\right)^m = \left(1 + \frac{\mathrm{APR}_n}{n}\right)^n$$

12. If a semiannual bond basis yield is **3.582%**, the half-year rate is **1.791%**. To convert it to quarterly compounding, do not divide by **4** blindly. Make the semiannual growth equal the quarterly growth:

$$\left(1 + \frac{0.03582}{2}\right)^2 = \left(1 + \frac{\mathrm{APR}_4}{4}\right)^4$$

$$\mathrm{APR}_4 = 3.566\%$$

So the quoted annual rate falls because quarterly compounding happens more often. 

13. Effective annual yield (EAY) is the clean "what did I actually earn in one year?" number. If a bond has a stated annual yield of **5.00%** compounded quarterly:

$$\mathrm{EAY} = \left(1 + \frac{0.05}{4}\right)^4 - 1 = 5.0945\%$$

That extra **0.0945%** is interest-on-interest.

14. Semiannual bond basis yield is not the same as effective annual yield. ==Semiannual bond basis just doubles the half-year rate==. Effective annual yield compounds it. If the half-year yield is **2.00%**, semiannual bond basis yield is **4.00%**, but effective annual yield is:

$$\left(1+0.02\right)^2-1 = 4.04\%$$

This is a tiny-looking difference, but it is exactly the kind of exam trap that punishes mechanical memorisation.

> [!ABSTRACT] MEMORISE - PERIODICITY
> 1. Higher compounding frequency means lower quoted annual percentage rate for the same economic return.
> 2. Semiannual bond basis yield is just the half-year yield multiplied by **2**.
> 3. Effective annual yield is the actual one-year growth rate after compounding.
> 4. If two bonds have different payment frequencies, convert before comparing. Do not compare a quarterly quote with a semiannual quote directly.

> [!example] INTERESTING EXAMPLE 
> Imagine two deposit ads both screaming **5%** like a shady billboard. One pays once at year-end. The other pays quarterly and lets each payment earn interest for the rest of the year. The second one quietly gives you more money, even though both ads shout the same number. That is periodicity: the headline rate is not the whole truth.

15. For a zero-coupon bond, periodicity is a quote choice because there are no coupons to set the natural frequency. The bond only has one cash flow at maturity, so analysts can express the same discounting result with different compounding labels. A five-year zero priced at **80 per 100 par** can be quoted as **4.564%** with annual compounding or **4.488%** with quarterly compounding:

$$80 = \frac{100}{(1+0.04564)^5}$$

$$80 = \frac{100}{(1+0.01122)^{20}}, \quad 0.01122 \times 4 = 4.488\%$$

Both are correct because both discount **100** back to **80**.

#### Other Yield Measures and Conventions 

16. Current yield is quick but crude. It answers only one question: "How much annual coupon do I get relative to today's flat price?"

$$\text{Current yield} = \frac{\text{Annual coupon}}{\text{Flat price}}$$

If a **3.20%** annual coupon bond trades at **98.70 per 100 par**:

$$\text{Current yield} = \frac{3.20}{98.70} = 3.242\%$$

This only sees the coupon. It ignores compounding, accrued interest, and the gain or loss as price moves toward par.


> [!tip] HAMMER THIS INTO YOUR HEAD
> 1. Current yield only answers: "How much coupon am I getting relative to today's flat price?"
> 2. It does not answer: "What is my total return if I hold the bond?"
> 3. Discount bond: current yield ignores the gain from price moving up to par.
> 4. Premium bond: current yield ignores the loss from price moving down to par.

18. Street convention assumes coupon payments happen on the scheduled dates. True yield adjusts for weekends and holidays. True yield is never higher than street yield because delayed payments mean the investor waits longer for the same cash flow. Same money arriving later means a slightly worse yield.

19. Government equivalent yield puts a corporate bond yield onto the government bond day-count basis. ==Corporate bonds commonly use **30/360**. Government bonds commonly use **actual/actual**.== Before calculating a spread, stop comparing apples with mangoes and put both yields on the same day-count basis. A quick approximation is:

$$\text{Yield}_{\text{actual/actual}} \approx \frac{365}{360} \times \text{Yield}_{30/360}$$

So a **3.20%** corporate yield becomes:

$$\frac{365}{360} \times 3.20\% = 3.244\%$$

Now the spread over the government bond is comparing like with like.

20. Simple yield improves slightly on current yield by adding the straight-line amortized gain or loss. It is still a rough shortcut, but at least it admits that buying below par or above par matters.

$$\text{Simple yield} = \frac{\text{Annual coupon} + \text{Straight-line amortized gain or loss}}{\text{Flat price}}$$

Simple yield is used mostly for Japanese government bonds. For exam logic, remember the direction: discount adds to coupon income; premium subtracts from coupon income.

#### Embedded Options: Yield to Call and Yield to Worst 

21. A callable bond is dangerous because the issuer controls the exit door. When rates fall, the issuer can call the bond, repay you, and refinance cheaper. You lose the nice coupon just when it becomes valuable. 

> [!example] INTERESTING EXAMPLE - THE ISSUER DUMPS YOU FIRST
> Suppose you hold a bond paying **8%** when new market rates fall to **5%**. You feel like a genius because your coupon is fat. The issuer feels robbed. If the bond is callable, the issuer can repay you and issue new debt at the cheaper **5%** rate. Now imagine you are a issuer and you have taken a mortgage with a prepayment option.

22. Yield to call replaces maturity value with the call price and solves only to that call date. The calculator is not asking, "What if the bond lives forever until maturity?" It is asking, "What if the issuer kicks me out on this exact call date?"

$$PV = \sum_{t=1}^{N-1}\frac{PMT}{(1+r)^t} + \frac{PMT+\text{Call price}}{(1+r)^N}$$

Do this for every call date. Then compare those yields with yield to maturity.


> [!warn] HOW TO DO IT ON CALCULATOR?
> - Set **N = periods to call**, **PMT = coupon**, **FV = call price**, **PV = −market price**, then **CPT I/Y** → this gives YTC for that call date.
> - Repeat for each call date (change N and FV), then compare with YTM and take the lowest (yield-to-worst).

23. Yield to worst is the lowest yield among yield to maturity and all yields to call. It is the investor's worst allowed yield under the bond's legal terms. If the yields are **5.15%**, **5.25%**, **5.31%**, **5.36%**, and **5.37%**, then:

$$\text{YTW} = 5.15\%$$

The investor does not care about the prettiest yield. The investor cares about the worst allowed outcome.

> [!question]
> Price = 102, coupon = 6% (annual), maturity = 5 years, callable in 3 years at 101 — find YTM, YTC, and YTW.
> 
> ---
> 

> [!ABSTRACT] MEMORISE - CALLABLE BONDS
> 1. Normal bond: yield to maturity is usually the main yield.
> 2. Callable bond: yield to maturity is only one possible story.
> 3. Calculate yield to every call date.
> 4. Yield to worst is the lowest of yield to maturity and all yields to call.
> 5. If the question says "conservative yield" for a callable bond, your brain should jump to yield to worst.

24. For callable bonds, option-adjusted yield and option-adjusted spread exist because the call option has value. The callable bond is worth less to the investor than the same non-callable bond. So when the exam talks about option-adjusted measures, the hidden idea is simple: separate the bond from the issuer's option to take the bond away.

#### Yield Spread Measures and Matrix Pricing

25. Spread is the extra yield after removing the benchmark. The benchmark is the top-down macro piece: expected real rates and expected inflation. The spread is the bottom-up bond-specific piece: credit risk, liquidity, taxation, and issue-specific mess.
26. If a bond yield rises because the benchmark rises by the same amount, the spread did not change. That is a market-wide rate move. If the benchmark is stable but the bond yield rises, the spread widened. That means the market wants more compensation for that issuer or issue.


> [!ABSTRACT] MEMORISE - SPREAD MOVES
> 1. Yield up and benchmark up by the same amount: spread unchanged, macro move.
> 2. Yield up and benchmark unchanged: spread wider, issuer or issue looks worse.
> 3. Yield down and benchmark unchanged: spread tighter, issuer or issue looks better or more expensive.
> 4. Same risk, liquidity, and tax profile: lower spread means less relative value for the investor.

27. On-the-run government bonds are the newest benchmark government bonds. They usually trade at slightly lower yields than off-the-run bonds because they are more liquid and more heavily demanded. Off-the-run bonds are older seasoned government bonds. 

28. G-spread uses a government benchmark. It asks, "How much extra yield is this bond offering over the comparable government bond?"

$$\text{G-spread} = \text{Bond YTM} - \text{Government benchmark yield}$$

If the bond has **24 years** left and the government curve only gives **20-year** and **30-year** yields, interpolate first.

29. Interpolation example: bond YTM is **3.756%**, remaining maturity is **24 years**, 20-year government yield is **2.00%**, and 30-year government yield is **2.25%**.

	Step 1: How much does the yield change per year?: 
	Step 2: column how much did the yield change in 4 years?
		
$$w_{20} = \frac{30-24}{30-20} \times 0.25 = 0.1\%$$

$$r_{24} = 2.0 + 0.1 = 2.10\%$$
$$\text{G-spread} = 3.756\% - 2.10\% = 1.656\% = 166 \text{ bp}$$

30. I-spread uses the swap rate in the same currency and tenor. It asks, "How much extra yield is this bond offering over the swap benchmark?"

$$\text{I-spread} = \text{Bond YTM} - \text{Swap rate}$$

If the corporate bond yield is **2.707%** and the same-tenor swap rate is **1.840%**:

$$\text{I-spread} = 2.707\% - 1.840\% = 0.867\% = 87 \text{ bp}$$

Use swap rate for I-spread. Use government yield for G-spread.

> [!ABSTRACT] MEMORISE - G-SPREAD VS I-SPREAD
> 1. G-spread means government benchmark.
> 2. I-spread means interest rate swap benchmark.
> 3. Same bond yield, different benchmark, different spread.
> 4. If the question gives Treasury or sovereign yields, think G-spread. If it gives swap rates, think I-spread.

31. Matrix pricing and relative value are the practical reason spreads exist. The analyst compares a bond's spread with its own history, with similar bonds, and with high-low-average ranges. If comparable bonds have similar credit risk, liquidity, and tax treatment, the lower-spread bond offers less relative value to the investor.

#### 5. Curve-Aware Spreads: Z-Spread and Option-Adjusted Spread (LOS 2)

32. Z-spread is the constant spread added to every spot rate so the present value of cash flows equals price. G-spread and I-spread compare one yield with one benchmark number. Z-spread respects the whole spot curve.

33. Z-spread price example: a three-year annual-pay bond has coupons of **5.50**, final principal of **100**, benchmark spot rates of **2.98%**, **3.48%**, and **4.00%**, and Z-spread of **378 bp**.

$$PV = \frac{5.50}{1+0.0298+0.0378} + \frac{5.50}{(1+0.0348+0.0378)^2} + \frac{105.50}{(1+0.0400+0.0378)^3}$$

$$PV = 94.20$$

Add the same Z-spread to every spot rate, then discount each cash flow at its own maturity's adjusted rate.

34. Option-adjusted spread removes the option value from Z-spread:

$$\mathrm{OAS} = \text{Z-spread} - \text{Option value in basis points per year}$$

For a callable bond, OAS is below Z-spread because the call option benefits the issuer and hurts the investor. If Z-spread is **180 bp** and option value is **40 bp**, OAS is **140 bp**.

> [!ABSTRACT] MEMORISE - Z-SPREAD AND OAS
> 1. G-spread and I-spread are one-yield-minus-one-benchmark shortcuts.
> 2. Z-spread adds the same spread to every spot rate on the curve.
> 3. Z-spread is solved by making present value equal price.
> 4. Option-adjusted spread equals Z-spread minus option value.
> 5. For a callable bond, option-adjusted spread is below Z-spread.

35. Final exam flow: identify the convention first; match periodicity before comparing yields; use current yield only for annual coupon divided by flat price; use simple yield when amortized discount or premium is included; use yield to worst for callable bonds; use G-spread for government benchmarks; use I-spread for swap benchmarks; use Z-spread when each cash flow is discounted with spot rate plus a constant spread; use OAS when the embedded option has been stripped out.

### MODULE 9: The Term Structure of Interest Rates: Spot, Par, and Forward Curves

> Source module: `/home/karma/CFAPractice/mcq/quiz/AI/PDF/FixedIncome/module_09_the_term_structure_of_interest_rates_spot_par_and_forward_curves.txt`

> [!ABSTRACT] LOS
> 1. Define spot rates and the spot curve, and calculate the price of a bond using spot rates.
> 2. Define par and forward rates, and calculate par rates, forward rates from spot rates, spot rates from forward rates, and the price of a bond using forward rates.
> 3. Compare the spot curve, par curve, and forward curve.

#### Big Picture

1. Earlier bond math used one discount rate, usually yield-to-maturity. This module says: that is a shortcut. In the real market, **a one-year cash flow, a five-year cash flow, and a thirty-year cash flow do not deserve the same discount rate**.
2. The term structure of interest rates is the relationship between interest rates and time-to-maturity.
3. The cleanest term structure comes from default-risk-free zero-coupon government bonds. Those rates are called **spot rates**, **zero rates**, or the **spot curve**.
4. From the spot curve, you can build two other curves:
   - **Par curve:** coupon rates for hypothetical bonds that would trade exactly at par.
   - **Forward curve:** rates implied today for borrowing or investing during future periods.
5. The three curves are not separate worlds. The spot curve is the base engine. Par rates and forward rates are derived from spot rates.

> [!tip] HAMMER THIS INTO YOUR HEAD
> A spot rate prices **one cash flow paid on one date**.
>
> A par rate prices **a whole coupon bond so that its price equals 100**.
>
> A forward rate prices **a future time period hidden between two spot rates**.
>
> If you confuse these three, the formulas look random. If you keep the cash-flow story straight, the math becomes mechanical.

#### 1. Spot Rates and the Spot Curve

Spot rates are market discount rates on default-risk-free zero-coupon bonds.

What is default-risk-free: the bond is treated as having no meaningful default risk, usually because the issuer is a developed-market sovereign borrowing in its own currency.

What is zero-coupon: the bond pays no coupons before maturity; it has one final cash flow.

Why is this used: if there is only one cash flow, the yield is a clean discount rate for that exact maturity. There is no reinvestment mess from coupons.

The spot curve is the collection of spot rates across maturities. A government bond spot curve is also called the **zero curve** or **strip curve**, because coupon payments can be stripped from coupon bonds to create separate zero-coupon cash flows.

> [!info] WHY ZERO-COUPON RATES ARE THE CLEAN SOURCE
> Suppose you compare a 2-year coupon bond with a 10-year coupon bond. Their yields can differ because of maturity, but also because of coupon size, reinvestment risk, liquidity, tax treatment, and whether the bond is old or newly issued.
>
> A zero-coupon government bond removes most of that noise. It says: "Here is one government-backed cash flow on one date. What discount rate prices it today?"
>
> That is why spot rates are the source of truth for no-arbitrage pricing.

#### What Can Make Bond Yields Different?

Do not assume every yield difference is a maturity difference. Yields can differ because of:

1. **Credit risk:** Romania's 30-year euro-denominated bonds were issued at a 4.657% yield-to-maturity, with a 411 basis point spread over German government bonds. That spread was not just "30-year maturity"; it reflected credit and market-risk differences versus Germany.
2. **Currency:** a U.S. dollar bond and a euro bond do not sit on the same curve.
3. **Liquidity:** a bond that trades constantly usually yields less than a dusty old bond that is hard to sell.
4. **Tax treatment:** discount, premium, capital gains, and interest income may be taxed differently.
5. **Periodicity assumption:** yields must be put on the same compounding/payment convention before comparison.
6. **Maturity:** once the other differences are controlled, remaining yield differences across time are the term structure.

#### Practical Curve Construction

In theory, we want a full set of default-risk-free zero-coupon government rates. In practice, the market usually gives us actively traded coupon government bonds.

So analysts commonly use:

1. **Recently issued government bonds**, also called on-the-run bonds, because they are more liquid.
2. **Bonds close to par**, because discount or premium bonds can introduce tax distortions.
3. **Interpolation**, because governments issue at standard maturities such as 2-year, 3-year, 5-year, 7-year, 10-year, and 30-year, but analysts need rates between those points.
4. **Consistent periodicity**, because short-term government securities may quote on a discount-rate basis and must be converted to bond-equivalent yields before being compared with coupon bonds.

> [!warning] EXAM WARNING
> The ideal spot curve uses default-risk-free zero-coupon bonds. The practical curve often starts from recently issued coupon government bonds and fills gaps with interpolation.
>
> If the question asks for the clean theory, say zero-coupon default-risk-free bonds. If it asks what is done in practice, say recently issued, liquid government bonds plus interpolation.

> [!info] REAL-WORLD SCANDAL: LIBOR MADE "CLEAN CURVES" MATTER
> The London Interbank Offered Rate, commonly called LIBOR, was supposed to reflect what major banks would pay to borrow from each other. During the LIBOR manipulation scandal, traders at several banks were found to have influenced submitted rates, which affected loans, swaps, and other contracts tied to that benchmark.
>
> This is not part of the spot-rate formula, but it is a useful memory hook. Fixed-income valuation lives or dies on the benchmark curve. If the curve is dirty, every price built on top of it can become dirty too.

#### Pricing a Bond Using Spot Rates

Because each cash flow arrives on a different date, each cash flow is discounted using the spot rate for that date.

For an annual-pay bond:

$$
PV = \frac{PMT}{(1 + Z_1)^1} + \frac{PMT}{(1 + Z_2)^2} + \cdots + \frac{PMT + FV}{(1 + Z_N)^N}
$$

Notation in simple language:

- \(PV\): bond price today.
- \(PMT\): coupon payment each period.
- \(FV\): face value repaid at maturity.
- \(Z_1\): spot rate for period 1.
- \(Z_2\): spot rate for period 2.
- \(Z_N\): spot rate for period N.

If the bond has more credit risk than the government spot curve, add a spread to the spot rates. The government spot curve gives default-risk-free discount rates; a risky corporate bond needs compensation for credit risk.

> [!question] SPOT-RATE PRICING
> Problem: A 3-year annual-pay bond has a 5% coupon and par value of 100. The 1-year spot rate is 2%, the 2-year spot rate is 3%, and the 3-year spot rate is 4%. Price the bond.
>
> ---
>
> Solution:
>
> $$
> PV = \frac{5}{1.02} + \frac{5}{(1.03)^2} + \frac{105}{(1.04)^3}
> $$
>
> $$
> PV = 4.902 + 4.713 + 93.345 = 102.960
> $$
>
> Explanation: the bond trades above par because the 5% coupon is high relative to the spot rates used to discount the cash flows.

#### Spot Rates Versus Yield-to-Maturity

Yield-to-maturity is one single internal rate of return that equates the bond price with all future cash flows.

What is internal rate of return: the one discount rate that makes the present value of cash flows equal the current price.

Why is yield-to-maturity used: it summarizes the bond into one number, which is convenient for quoting and comparison.

But spot-rate pricing is more precise. In the 5% coupon example above, the same price of **102.960** can be summarized by a yield-to-maturity of **3.935%**, but the individual cash flows are not actually discounted at 3.935% in no-arbitrage pricing. The first coupon is discounted at 2%, the second at 3%, and the final cash flow at 4%.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Yield-to-maturity is a summary number.
>
> Spot rates are the actual discount rates by date.
>
> The same bond price can be produced by both approaches, but only spot-rate pricing shows the true no-arbitrage value of each dated cash flow.

#### Why Different Spot Curves Can Give the Same Bond Price

A bond price is especially sensitive to the spot rates attached to its largest cash flows. For a plain fixed-rate bond, the biggest cash flow is usually the final coupon plus principal.

That is why two very different curve shapes can produce the same price if the maturity-date spot rate is very similar. The source gives a Canadian example where an upward-sloping curve and a downward-sloping curve both price a 3-year 0.50% coupon bond at **99.126**, because the 3-year spot rates are almost the same: **0.7977%** in one case and **0.7951%** in the other.

#### 2. Par Rates

A par rate is the yield-to-maturity and coupon rate that would make a bond trade exactly at par value.

What is par value: the face value of the bond, usually 100 in these examples.

What is coupon rate: the annual coupon as a percentage of face value.

Why is par used: par removes the distortion from actual bonds trading at a premium or discount, so the curve is cleaner for comparison.

Par rates are derived from spot rates up to and including the bond's maturity.

The par-rate equation sets price equal to 100 and solves for the coupon payment:

$$
100 = \frac{PMT}{(1 + Z_1)^1} + \frac{PMT}{(1 + Z_2)^2} + \cdots + \frac{PMT + 100}{(1 + Z_N)^N}
$$

The coupon payment divided by 100 is the par rate per period.

Between coupon dates, use the flat price equal to 100, not the full price.

> [!info] WHY THE U.S. TREASURY CURVE IS A PAR CURVE
> The widely quoted U.S. Treasury yield curve published by the U.S. Department of the Treasury is made of par rates, not raw yields from one random old bond at each maturity.
>
> That matters because actual bonds can be messy. One 10-year Treasury might be newly issued and very liquid. Another might be old, less liquid, and priced far from par. A par curve creates a cleaner benchmark by asking: "What coupon would make a hypothetical government bond trade at exactly 100?"

> [!question] PAR RATE FROM SPOT RATES
> Problem: Spot rates are 5.263% for 1 year and 5.616% for 2 years. Calculate the 2-year annual par rate.
>
> ---
>
> Solution:
>
> $$
> 100 = \frac{PMT}{1.05263} + \frac{PMT + 100}{(1.05616)^2}
> $$
>
> $$
> PMT = 5.606
> $$
>
> Explanation: because the face value is 100, a coupon payment of **5.606** means a par rate of **5.606%**.

#### Par Rate Versus Yield-to-Maturity

1. A bond's yield-to-maturity is the internal rate of return based on its actual market price.
2. A par rate is the yield-to-maturity that a hypothetical bond would have if its price were exactly 100.
3. For a bond priced at par, coupon rate = yield-to-maturity = par rate.
4. For an actual premium or discount bond, yield-to-maturity is not necessarily a par rate.

#### 3. Forward Rates

An implied forward rate is a future-period rate inferred from today's spot rates.

What is implied: the rate is not directly observed as a spot rate today; it is backed out from today's curve.

What is future-period rate: it applies to a loan or investment period that starts later, not today.

Why is it important: it is the breakeven reinvestment rate that makes two maturity strategies equally attractive under no-arbitrage.

The naming convention is **AyBy**:

- **3y1y** means a 1-year rate beginning 3 years from today.
- **2y3y** means a 3-year rate beginning 2 years from today.
- The first number tells you when the forward period starts.
- The second number tells you how long that forward period lasts.

> [!tip] HAMMER THIS INTO YOUR HEAD
> For **2y3y**, the forward starts after 2 years and ends after 5 years.
>
> So you need the **2-year spot rate** and the **5-year spot rate**.
>
> The ending maturity is always: start date + forward tenor.

#### Forward Rates from Spot Rates

The no-arbitrage relationship is:

$$
(1 + Z_A)^A \times (1 + IFR_{A,B-A})^{B-A} = (1 + Z_B)^B
$$

Notation in simple language:

- \(Z_A\): spot rate to the start of the forward period.
- \(Z_B\): spot rate to the end of the forward period.
- \(IFR_{A,B-A}\): implied forward rate starting at time A and lasting B minus A periods.
- \(A\): number of years from today to the start of the forward period.
- \(B\): number of years from today to the end of the forward period.

> [!question] FORWARD RATE FROM SPOT RATES
> Problem: The 3-year spot rate is 3.65% and the 4-year spot rate is 4.18%. Calculate the 3y1y implied forward rate.
>
> ---
>
> Solution:
>
> $$
> (1 + 0.0365)^3 \times (1 + IFR_{3,1})^1 = (1 + 0.0418)^4
> $$
>
> $$
> IFR_{3,1} = 5.79\%
> $$
>
> Explanation: the extra fourth year must earn **5.79%** for an investor to be indifferent between locking in the 4-year zero-coupon bond and buying the 3-year zero-coupon bond then reinvesting for one more year.

#### The Economic Meaning of a Forward Rate

A forward rate is the breakeven reinvestment rate.

Suppose an investor has a 5-year horizon:

1. Buy a 3-year government bond now, then reinvest for 2 years later.
2. Buy a 5-year government bond now.

If the 3-year spot rate is **3%** and the 5-year spot rate is **4%**, the implied 3y2y forward rate is:

$$
(1 + 0.03)^3 \times (1 + IFR_{3,2})^2 = (1 + 0.04)^5
$$

$$
IFR_{3,2} = 5.52\%
$$

If the investor expects the actual 2-year rate in 3 years to be above **5.52%**, the 3-year bond plus reinvestment is better. If she expects it to be below **5.52%**, the 5-year bond is better.

> [!info] REAL-WORLD EVENT: 2006-2007 YIELD CURVE INVERSION
> Before the 2008 global financial crisis, the U.S. yield curve inverted. Short-term yields rose above long-term yields because the Federal Reserve had tightened policy while the market increasingly doubted long-run growth and inflation.
>
> This is exactly the kind of world where forward rates can fall below spot rates. The curve is quietly saying: "The market thinks future short rates may be lower than today's short rates."
>
> The spicy part is that many people ignored it because credit markets still looked calm. The curve was not a crystal ball, but it was an early warning signal that the market's future-rate story had turned dark.

#### Spot Rates from Forward Rates

Forward rates can also be multiplied together to recover spot rates. The spot rate is the geometric average of the forward rates up to that maturity.

For one-year forward rates:

$$
(1 + Z_N)^N = (1 + 0y1y)(1 + 1y1y)(1 + 2y1y)\cdots(1 + (N-1)y1y)
$$

Then solve for \(Z_N\).

> [!question] SPOT RATE FROM FORWARD RATES
> Problem: The forward rates are 0y1y = 1.88%, 1y1y = 2.77%, 2y1y = 3.54%, and 3y1y = 4.12%. Calculate the 4-year spot rate.
>
> ---
>
> Solution:
>
> $$
> (1 + Z_4)^4 = 1.0188 \times 1.0277 \times 1.0354 \times 1.0412
> $$
>
> $$
> Z_4 = 3.0741\%
> $$
>
> Explanation: the 4-year spot rate is the single annual rate that gives the same compound growth as walking through all four one-year forward rates.

#### Pricing a Bond Using Forward Rates

You can price a bond directly from forward rates because forward rates compound into spot discount factors.

If a 4-year bond pays a 3.75% annual coupon and the forward curve is:

- 0y1y = 1.88%
- 1y1y = 2.77%
- 2y1y = 3.54%
- 3y1y = 4.12%

Then:

$$
PV = \frac{3.75}{1.0188} + \frac{3.75}{1.0188 \times 1.0277} + \frac{3.75}{1.0188 \times 1.0277 \times 1.0354} + \frac{103.75}{1.0188 \times 1.0277 \times 1.0354 \times 1.0412}
$$

$$
PV = 102.637
$$

The same price comes from first converting those forward rates into spot rates and then discounting by spot rates. Spot and forward pricing must agree, because they are two ways of writing the same no-arbitrage discount factors.

> [!warning] COMMON FORWARD-RATE MISTAKE
> Do not use only the forward rate for the cash-flow date.
>
> The year-3 cash flow is discounted by the whole path from today to year 3:
>
> $$
> 0y1y \times 1y1y \times 2y1y
> $$
>
> You are not teleporting to year 3. You are discounting all the way from year 3 back to today.

#### 4. Comparing Spot, Par, and Forward Curves

Because par and forward rates are derived from spot rates, their shapes are connected.

| Spot curve shape | Par curve | Forward curve |
|---|---|---|
| Upward sloping and positive | Below the spot curve | Above the spot curve |
| Upward sloping and negative | Can sit above the spot curve | Above the spot curve as the curve moves toward zero |
| Flat | Equal to the spot curve | Equal to the spot curve |
| Downward sloping or inverted | Above the spot curve | Below the spot curve |

#### Upward-Sloping Spot Curve

If spot rates are positive and upward sloping:

1. The par curve is close to the spot curve but usually slightly below it.
2. The gap between par and spot rates tends to be larger at longer maturities.
3. The forward curve is above the spot curve.

Why par is below spot: the bond's earlier coupons are discounted at lower short-term spot rates, which increases their present value. To make the whole bond price exactly 100, the coupon rate does not need to be as high as the final long-term spot rate.

Why forward is above spot: if the average rate from today to a longer maturity is rising, the marginal future rates must be higher than the current average.

#### Flat Spot Curve

If the spot curve is flat:

1. Spot rates are the same at all maturities.
2. Par rates equal spot rates.
3. Forward rates equal spot rates.

If every maturity has a 2.50% spot rate, a government bond with a 2.50% coupon trades at par, and the implied future rates are also 2.50%.

#### Downward-Sloping or Inverted Spot Curve

If the spot curve slopes downward:

1. Short-term spot rates are higher than long-term spot rates.
2. The par curve is close to the spot curve but generally above it.
3. The forward curve is below the spot curve.

Why forward is below spot: if the average rate falls as maturity extends, the marginal future rates must be lower than today's short rates.

> [!info] REAL-WORLD EVENT: THE "BOND MARKET IS SCREAMING" MOMENTS
> Yield-curve inversions are watched because they have often appeared before recessions. The famous cases are not because the curve magically predicts the future. The logic is simpler: when investors believe central banks will cut rates later, long-term yields can fall below short-term yields.
>
> In 2019, parts of the U.S. Treasury curve inverted while markets debated slowing growth and trade-war pressure. In 2022, the curve inverted again as the Federal Reserve raised short rates aggressively to fight inflation while investors priced in the possibility that future growth would weaken.
>
> For this module, the exam point is not the recession forecast. The exam point is mechanical: inverted spot curve means forward curve below spot curve.

#### Negative Spot Rates

Negative rates do not break the math. The same formulas work.

A bond can have a negative spot rate when investors are willing to accept a small guaranteed loss in exchange for safety, liquidity, regulation-friendly collateral, or currency exposure. Germany and Switzerland both had negative sovereign spot rates after the global financial crisis era as central banks pushed policy rates extremely low.

The source gives Switzerland spot rates from **-0.7882%** at 1 year to **-0.1216%** at 10 years. That curve is upward sloping because rates become less negative as maturity increases. The 9y1y forward rate is positive:

$$
(1 - 0.001945)^9 \times (1 + IFR_{9,1})^1 = (1 - 0.001216)^{10}
$$

$$
IFR_{9,1} = 0.537\%
$$

> [!tip] HAMMER THIS INTO YOUR HEAD
> "Negative" and "upward sloping" are separate ideas.
>
> A curve can be below zero and still slope upward if rates move from very negative to less negative.
>
> In that case, forward rates can be positive even though spot rates are still negative.

There is one par-curve wrinkle here: if spot rates are negative and upward sloping, the par curve can sit **above** the spot curve. The practice problem tests this using Germany and Switzerland. Do not blindly memorize "upward sloping means par below spot" without checking whether the spot rates are positive or negative.

> [!info] REAL-WORLD EVENT: SWISS NEGATIVE RATES
> Switzerland became a textbook example of negative yields because global investors treated Swiss government debt and the Swiss franc as safe-haven assets. At times, investors effectively paid Switzerland for the privilege of storing money there.
>
> This feels insane until you compare it with a crisis. If a fund manager fears bank stress, currency instability, or a violent market selloff, losing a small known amount on Swiss government paper may look better than taking a large unknown loss somewhere else.
>
> That is the real-world intuition behind negative rates: safety and liquidity can become so valuable that yield goes below zero.

#### Quick Formula Sheet

> [!ABSTRACT] MEMORISE
> Spot-rate bond price:
>
> $$
> PV = \frac{PMT}{(1 + Z_1)^1} + \frac{PMT}{(1 + Z_2)^2} + \cdots + \frac{PMT + FV}{(1 + Z_N)^N}
> $$
>
> Par-rate equation:
>
> $$
> 100 = \frac{PMT}{(1 + Z_1)^1} + \frac{PMT}{(1 + Z_2)^2} + \cdots + \frac{PMT + 100}{(1 + Z_N)^N}
> $$
>
> Forward-rate no-arbitrage equation:
>
> $$
> (1 + Z_A)^A \times (1 + IFR_{A,B-A})^{B-A} = (1 + Z_B)^B
> $$
>
> Spot rate from one-year forward rates:
>
> $$
> (1 + Z_N)^N = (1 + 0y1y)(1 + 1y1y)(1 + 2y1y)\cdots(1 + (N-1)y1y)
> $$

#### Quick Checks Before the Exam

> [!tip] QUICK CHECKS
> 1. If you are pricing with spot rates, each cash flow gets its own spot rate.
> 2. If you are solving a par rate, set price equal to 100 and solve for the coupon payment.
> 3. If the forward rate is 2y3y, use the 2-year and 5-year spot rates.
> 4. If the spot curve is upward sloping and positive, forward is above spot and par is below spot.
> 5. If the spot curve is flat, all three curves collapse into the same line.
> 6. If the spot curve is inverted, forward is below spot and par is above spot.
> 7. If rates are negative, do not panic. Use the same formulas. A negative upward-sloping curve can still produce positive forward rates, and the par curve can sit above the spot curve.

#### Final Mental Model

Spot rates are the discounting truth. Par rates are the coupon rates that would make clean hypothetical bonds trade at 100. Forward rates are the future reinvestment rates implied by today's spot curve.

Once you know the spot curve, the other two curves are not guesses. They are consequences.

## Variant: Spot Rates and Yield for a Coupon Bond

**Abstract:** *Discount each cash flow at its own spot rate to get the price. Then solve for the single rate (YTM) that reproduces that same price—it is pulled toward the spot rate attached to the biggest cash flow.*

> Compute the **price** and **yield to maturity** of a **three-year, 4% annual-pay, \$1,000 face** value bond given the spot rate curve: $S_1 = 5\%$, $S_2 = 6\%$, $S_3 = 7\%$.

**What is the question really asking?**

Two things: (1) the bond's price using the spot curve, and (2) the single YTM that reproduces that price. The key question is: **why are price and YTM different from each other and from any single spot rate?**

> [!NOTE]
> Each cash flow is discounted at the spot rate for its own maturity. YTM is the one rate that replaces all of them.

**1. Price the bond using the spot curve**

Each coupon and the face value get discounted at the spot rate matching their year:

$$
P = \frac{40}{1.05} + \frac{40}{1.06^2} + \frac{1040}{1.07^3}
$$

$$
P = 38.10 + 35.60 + 848.95 = \boxed{\$922.64}
$$

*Intuition:* The Year 3 cash flow (\$1,040) dominates, so $S_3$ has the biggest pull on the price.

**2. Solve for YTM**

Now find the single rate $y_3$ that makes the PV of all cash flows equal to \$922.64:

$$
\text{TI BA II Plus: } N=3,\; PV=-922.64,\; PMT=40,\; FV=1000,\; \text{CPT I/Y}
$$

$$
y_3 = \boxed{6.94\%}
$$

> [!NOTE]
> YTM sits between the spot rates: $S_1 < y_3 < S_3$, pulled closest to $S_3$ because the par payment dominates.

---

## Variant: Forward Pricing

**Abstract:** *The forward price is today's long-bond price divided by today's short-bond price. It is the price locked today for buying the remaining piece of the journey later.*

> Calculate the **forward price two years from now** for a **\$1 par, zero-coupon, three-year bond** given $S_2 = 4\%$ and $S_5 = 6\%$.

**What is the question really asking?**

We need $F(2,3)$ — the price agreed today, paid in two years, for a bond that pays \$1 in five years. The key question is: **what two investments must have the same cost today?**

**1. Compute the two discount factors**

$$
P(2) = \frac{1}{(1.04)^2} = 0.9246
$$

$$
P(5) = \frac{1}{(1.06)^5} = 0.7473
$$

*Intuition:* $P(2)$ is today's price of \$1 received in 2 years. $P(5)$ is today's price of \$1 received in 5 years.

**2. Apply the forward pricing model**

Buying a 5-year zero today costs $P(5)$. Entering a forward contract to buy a 3-year bond in 2 years costs $P(2) \times F(2,3)$ today (the forward price discounted back 2 years). Arbitrage forces them equal:

$$
F(2,3) = \frac{P(5)}{P(2)} = \frac{0.7473}{0.9246} = \boxed{\$0.8082}
$$

> [!NOTE]
> Forward pricing model: $F(j,k) = P(j+k) / P(j)$. The forward price is a ratio of two discount factors.

---

## Variant: Forward Rates

**Abstract:** *The forward rate plugs the gap between a short investment and a long one. Make both routes end with the same money; on an upward-sloping curve, the forward rate sits above the long spot rate.*

> Given $S_2 = 4\%$ and $S_5 = 6\%$, calculate the implied **three-year forward rate** for a loan starting two years from now, $f(2,3)$.

**What is the question really asking?**

We need the rate on a 3-year loan that starts in 2 years. The key question is: **what rate makes a 5-year zero equal to a 2-year zero rolled into a 3-year forward?**

**1. Set up the forward rate model**

$$
[1 + f(2,3)]^3 = \frac{(1+S_5)^5}{(1+S_2)^2}
$$

**2. Substitute and solve**

$$
[1 + f(2,3)]^3 = \frac{(1.06)^5}{(1.04)^2} = \frac{1.33823}{1.08160} = 1.23727
$$

$$
1 + f(2,3) = (1.23727)^{1/3} = 1.0735
$$

$$
f(2,3) = \boxed{7.35\%}
$$

> [!NOTE]
> Upward-sloping curve $\Rightarrow$ forward rate is above the long spot rate: $f(2,3) = 7.35\% > S_5 = 6\%$.

**How many forward rates can a set of spot rates produce?**

Every pair of maturity dates creates one forward period. With $n$ spot maturities:

$$
\text{Number of forward rates}=\frac{n(n-1)}{2}
$$

For 1-, 2-, and 3-year spots, $n=3$:

$$
\frac{3(3-1)}{2}=\boxed{3}
$$

Those are $f(1,1)$, $f(2,1)$, and $f(1,2)$.

> [!NOTE]
> Pick any two spot maturities: the earlier date is the forward start, and the gap between them is the forward tenor.

---

## Variant: Bootstrapping Spot Rates from the Par Curve

**Abstract:** *Bootstrapping is a staircase: the one-year par rate gives the first spot rate, and every solved spot rate becomes an input for the next step. Always move earliest to latest.*

> Given the **annual-pay par curve** — 1-year: **1.00%**, 2-year: **1.25%**, 3-year: **1.50%** — compute the corresponding **spot rate curve**.

**1. Spot rate for Year 1**

The 1-year par bond has no reinvestment risk, so:

$$
S_1 = \boxed{1.00\%}
$$

**2. Spot rate for Year 2**

A 2-year par bond pays a 1.25% coupon and trades at 100. Discount the first coupon at $S_1$, solve for $S_2$:

$$
100 = \frac{1.25}{1.01} + \frac{101.25}{(1+S_2)^2}
$$

$$
100 = 1.2376 + \frac{101.25}{(1+S_2)^2}
$$

$$
\frac{101.25}{(1+S_2)^2} = 98.7624
$$

$$
(1+S_2)^2 = \frac{101.25}{98.7624} = 1.02518
$$

$$
S_2 = \boxed{1.252\%}
$$

**3. Spot rate for Year 3**

A 3-year par bond pays 1.50% and trades at 100. Discount the first two coupons at $S_1$ and $S_2$, solve for $S_3$:

$$
100 = \frac{1.50}{1.01} + \frac{1.50}{(1.01252)^2} + \frac{101.50}{(1+S_3)^3}
$$

$$
100 = 1.4851 + 1.4632 + \frac{101.50}{(1+S_3)^3}
$$

$$
\frac{101.50}{(1+S_3)^3} = 97.0517
$$

$$
(1+S_3)^3 = \frac{101.50}{97.0517} = 1.04581
$$

$$
S_3 = \boxed{1.505\%}
$$

> [!NOTE]
> Bootstrapping is recursive: each new spot rate uses all previously found spot rates. Par bonds trade at 100, so the price is always 100.

---

## Variant: Spot Rate Evolution and Holding Period Returns

**Abstract:** *If future spot rates land exactly where today's forward curve predicts, every zero-coupon bond earns the one-year spot rate over a one-year hold. Different maturities, same one-year return.*

> **Jane Dash, CFA** collects benchmark spot rates: $S_1 = 3\%$, $S_2 = 4\%$, $S_3 = 5\%$. Expected spot rates at end of Year 1: Year 1 = **5.01%**, Year 2 = **6.01%**. Calculate the **one-year holding period return** of a 1-year, 2-year, and 3-year zero-coupon bond.

**1. Verify the expected rates are the forward rates**

$$
f(1,1) = \frac{(1.04)^2}{1.03} - 1 = 5.01\%
$$

$$
f(1,2) = \left(\frac{(1.05)^3}{1.03}\right)^{1/2} - 1 = 6.01\%
$$

The expected rates match the forward rates, so all bonds will earn $S_1 = 3\%$.

**2. One-year bond**

$$
P_0 = \frac{1}{1.03} = 0.9709
$$

After one year, the bond matures and pays \$1:

$$
\text{HPR} = \frac{1}{0.9709} - 1 = \boxed{3.00\%}
$$

**3. Two-year bond**

$$
P_0 = \frac{1}{(1.04)^2} = 0.9246
$$

After one year, the bond has 1 year left. The 1-year expected spot rate is 5.01%:

$$
P_1 = \frac{1}{1.0501} = 0.9523
$$

$$
\text{HPR} = \frac{0.9523}{0.9246} - 1 = \boxed{3.00\%}
$$

**4. Three-year bond**

$$
P_0 = \frac{1}{(1.05)^3} = 0.8638
$$

After one year, the bond has 2 years left. The 2-year expected spot rate is 6.01%:

$$
P_1 = \frac{1}{(1.0601)^2} = 0.8898
$$

$$
\text{HPR} = \frac{0.8898}{0.8638} - 1 = \boxed{3.00\%}
$$

> [!NOTE]
> When spot rates evolve as the forward curve predicts, every zero-coupon bond earns $S_1$ over a 1-year horizon — maturity does not matter.

---

## Variant: Computing the Swap Rate Curve

**Abstract:** *The swap fixed rate is the coupon that makes a \$1 synthetic bond worth exactly \$1. Discount the fixed payments, force the total to par, and solve for the coupon.*

> Given the **MRR spot rate curve** — $S_1 = 3\%$, $S_2 = 4\%$, $S_3 = 5\%$ — compute the **swap fixed rate** for tenors of 1, 2, and 3 years.

**1. Compute discount factors**

$$
P_1 = \frac{1}{1.03} = 0.9709, \quad P_2 = \frac{1}{(1.04)^2} = 0.9246, \quad P_3 = \frac{1}{(1.05)^3} = 0.8638
$$

**2. SFR for 1-year tenor**

$$
\frac{SFR_1}{1.03} + \frac{1}{1.03} = 1 \quad \Rightarrow \quad SFR_1 = \boxed{3.00\%}
$$

*Why?* A 1-year swap is just a 1-year par bond, so $SFR_1 = S_1$.

**3. SFR for 2-year tenor**

$$
\frac{SFR_2}{1.03} + \frac{SFR_2}{(1.04)^2} + \frac{1}{(1.04)^2} = 1
$$

$$
SFR_2 \times (0.9709 + 0.9246) = 1 - 0.9246 = 0.0754
$$

$$
SFR_2 = \frac{0.0754}{1.8955} = \boxed{3.98\%}
$$

**4. SFR for 3-year tenor**

$$
SFR_3 \times (0.9709 + 0.9246 + 0.8638) = 1 - 0.8638 = 0.1362
$$

$$
SFR_3 = \frac{0.1362}{2.7593} = \boxed{4.93\%}
$$

> [!NOTE]
> Swap fixed rate formula: $SFR_T = \frac{1 - P_T}{\sum_{i=1}^{T} P_i}$. It is the coupon that prices a \$1 par bond at par.

---

## Variant: Swap Spread

**Abstract:** *Swap spread is swap rate minus same-maturity Treasury yield. Match maturities first, subtract second, and keep the sign—it can occasionally be negative.*

> The **2-year swap rate** is **2.02%** and the **2-year U.S. Treasury** is yielding **1.61%**. What is the **swap spread**?

$$
\text{Swap spread} = 2.02\% - 1.61\% = \boxed{0.41\% \text{ or } 41 \text{ bps}}
$$

> [!NOTE]
> Swap spreads are usually positive, but they can go negative when regulation, dealer balance-sheet costs, or unusual Treasury demand distort the market.

---

## Variant: I-Spread (Interpolated Spread)

**Abstract:** *I-spread is bond yield minus the same-maturity swap rate. If that exact swap maturity is missing, interpolate it first; the main trap is subtracting an unmatched benchmark.*

> **6% Zinni, Inc. bonds** yield **2.35%** and mature in **1.6 years**. Given the swap curve: 0.5yr = 1.00%, 1yr = 1.25%, 1.5yr = 1.35%, 2yr = 1.50%. Compute the **I-spread**.

**1. Interpolate the 1.6-year swap rate**

1.6 years falls between the 1.5-year (1.35%) and 2-year (1.50%) swap rates:

$$
\text{Swap}_{1.6} = 1.35\% + \frac{1.6 - 1.5}{2.0 - 1.5} \times (1.50\% - 1.35\%)
$$

$$
= 1.35\% + \frac{0.1}{0.5} \times 0.15\% = 1.35\% + 0.03\% = \boxed{1.38\%}
$$

**2. Subtract from the bond yield**

$$
\text{I-spread} = 2.35\% - 1.38\% = \boxed{0.97\% \text{ or } 97 \text{ bps}}
$$

> [!NOTE]
> I-spread removes time value (already in the swap rate) and isolates credit + liquidity risk. Higher I-spread = riskier bond.

---

## Variant: Pricing a Risky Bond Using the Z-Spread

**Abstract:** *Add the same Z-spread to every spot rate, then discount each cash flow at its matching risky rate. If the question gives forwards, chain them into spots before pricing.*

> A **3-year, 5% annual-pay ABC, Inc. bond** trades at a **Z-spread of 100 bps** over the benchmark spot curve. The benchmark 1-year spot rate is **3%**, the 1-year forward rate in Year 1 is **5.051%**, and the 1-year forward rate in Year 2 is **7.198%**. Compute the **bond's price**.

**1. Derive the spot rates from the forward rates**

$$
(1+S_1) = 1.03 \quad \Rightarrow \quad S_1 = 3.00\%
$$

$$
(1+S_2)^2 = (1.03)(1.05051) = 1.08203 \quad \Rightarrow \quad S_2 = 4.02\%
$$

$$
(1+S_3)^3 = (1.03)(1.05051)(1.07198) = 1.15995 \quad \Rightarrow \quad S_3 = 5.07\%
$$

*Intuition:* Spot rates chain forward rates — each forward rate extends the compounding by one more year.

**2. Add the Z-spread and discount each cash flow**

$$
P = \frac{5}{1.03 + 0.01} + \frac{5}{(1.0402 + 0.01)^2} + \frac{105}{(1.0507 + 0.01)^3}
$$

$$
P = \frac{5}{1.04} + \frac{5}{(1.0502)^2} + \frac{105}{(1.0607)^3}
$$

$$
P = 4.81 + 4.53 + 87.99 = \boxed{\$97.33}
$$

> [!NOTE]
> Z-spread is added to **every** spot rate uniformly. It assumes zero interest rate volatility — do not use it for bonds with embedded options.

---

## Variant: Reverse Forward Pricing — Recovering the Missing Spot Price

**Abstract:** *Forward pricing is one multiplication chain: short bond price × forward price = long bond price. If the question hides one piece, do not panic—just rearrange the same chain.*

> The one-year spot rate is **5%**, and the forward price today for a one-year zero-coupon bond delivered one year from now is **0.9346**. Find the current price of the two-year zero-coupon bond and its two-year spot rate.

**What is this asking?**

The forward deal starts in Year 1 and ends in Year 2. We need the price *today* of the full two-year journey.

```text
Today -------- Year 1 -------- Year 2
  DF1            × F(1,1)        = DF2
```

> [!NOTE]
> The no-arbitrage chain is $DF_B=DF_A\times F(A,B-A)$. Long price = short price × forward price.

**1. Turn the one-year spot rate into a one-year price**

A one-year discount factor is simply the current price of \$1 received in one year:

$$
DF_1=\frac{1}{1.05}=0.9524
$$

**2. Complete the price chain**

$$
DF_2=DF_1\times F(1,1)
$$

$$
DF_2=0.9524\times0.9346=\boxed{0.8901}
$$

So \$1 paid in two years is worth about **\$0.8901 today**.

**3. If they ask for the spot rate, unwrap the discount factor**

$$
0.8901=\frac{1}{(1+S_2)^2}
$$

$$
S_2=\left(\frac{1}{0.8901}\right)^{1/2}-1=\boxed{5.99\%}
$$

*Sanity check:* the one-year spot is 5%, while the later one-year forward is roughly 7%. Their two-year average should land between them. About 6% makes sense.

> [!NOTE]
> If you are given $DF_A$ and the forward price, multiply. If you are given $DF_B$ and $DF_A$, divide to recover the forward price.

---

## Variant: Coupon Reinvestment and the Bond's True Expected Return

**Abstract:** *YTM assumes every coupon gets reinvested at the same YTM. If the question gives actual or expected reinvestment rates, grow each coupon to the horizon, add the pile, and annualize the return.*

> A five-year, **10% annual-pay bond** has face value **100**. Spot rates for Years 1–5 are **5%, 6%, 7%, 8%, and 9%**. Its price is **105.43** and its YTM is **8.62%**. If future one-year reinvestment rates equal today's implied forward rates—**7.0%, 9.0%, 11.1%, and 13.1%**—calculate the expected annual return.

**Why is YTM not automatically the answer?**

The bond throws off four early coupons before the final payment. Those coupons do not sit frozen. They get reinvested, and the rate available each year decides how large the final money pile becomes.

```text
Year 1 coupon -> reinvest 4 times
Year 2 coupon -> reinvest 3 times
Year 3 coupon -> reinvest 2 times
Year 4 coupon -> reinvest 1 time
Year 5 cash   -> already at the finish line
```

> [!NOTE]
> YTM is a built-in assumption, not a promise: it assumes every coupon is reinvested at the original YTM.

**1. Push every coupon forward to Year 5**

The first coupon travels through all four future one-year rates:

$$
10(1.07)(1.09)(1.111)(1.131)
$$

The second coupon misses the first reinvestment year, the third misses two, and so on:

$$
\begin{aligned}
FV_5={}&10(1.07)(1.09)(1.111)(1.131)\\
&+10(1.09)(1.111)(1.131)\\
&+10(1.111)(1.131)\\
&+10(1.131)+110
\end{aligned}
$$

The displayed forward rates are rounded; keeping the unrounded rates implied by the spot curve gives:

$$
FV_5\approx\boxed{162.22}
$$

That is the total cash sitting at the end of Year 5: reinvested coupons plus the final coupon and principal.

**2. Compare the final pile with what we paid**

$$
\text{Five-year total return}=\frac{162.22}{105.43}-1=53.87\%
$$

That 53.87% is the whole five-year gain. To turn it into a yearly rate:

$$
(1+r)^5=\frac{162.22}{105.43}
$$

$$
r=\left(\frac{162.22}{105.43}\right)^{1/5}-1=\boxed{9.00\%}
$$

The expected return is **9.00%**, not the **8.62% YTM**, because coupons were reinvested at the forward rates rather than at 8.62%.

> [!NOTE]
> For a horizon return: grow every interim cash flow to the horizon, add them, then solve $(FV/P_0)^{1/T}-1$.

---

## Variant: Holding-Period Return When the Future Curve Misses the Forward Curve

**Abstract:** *Buy today, collect the coupon, then reprice the remaining bond using the curve you expect at the sale date. Higher future rates crush the sale price; lower future rates boost it.*

> A three-year, **8% annual-pay bond** with face value **100** trades at par because today's curve is flat at **8%**. You will sell it after one year. Calculate the one-year return if next year's curve is flat at **9%**, and again if it is flat at **7%**.

**What cash do we own after one year?**

Two pieces:

1. the Year 1 coupon of 8; and
2. the sale price of a bond that now has two years left.

> [!NOTE]
> Holding-period return uses the **future sale price**, so discount the remaining cash flows using the curve expected on the sale date.

**Case 1: Future rates rise to 9%**

At the end of Year 1, the bond still promises an 8 coupon in Year 2 and 108 in Year 3. From the sale date, those are one and two years away:

$$
P_1=\frac{8}{1.09}+\frac{108}{1.09^2}=98.24
$$

Add the coupon already received:

$$
\text{Ending wealth}=8+98.24=106.24
$$

Because the starting price was 100:

$$
HPR=\frac{106.24}{100}-1=\boxed{6.24\%}
$$

Rates rose above the original 8%, so the sale price got punched down and the return fell below 8%.

**Case 2: Future rates fall to 7%**

$$
P_1=\frac{8}{1.07}+\frac{108}{1.07^2}=101.81
$$

$$
HPR=\frac{8+101.81}{100}-1=\boxed{9.81\%}
$$

Rates fell, so the remaining cash flows became more valuable and the return jumped above 8%.

> [!NOTE]
> Future spot below forward → bond looks cheap today and return rises. Future spot above forward → bond looks expensive and return falls.

---

## Variant: Rolling Down the Yield Curve

**Abstract:** *Buy a bond longer than your holding period, wait while it becomes a shorter bond, then reprice it at the lower short-maturity yield. The profit comes from the price lift—not free magic.*

> Government spot rates are **2.70% for two years** and **4.05% for four years**. Swap spreads are **0.30% for two years** and **0.70% for four years**. Buy a four-year zero-coupon corporate bond and sell it after two years, assuming the curve does not move. Find the annualized return.

**What is the trade?**

Today we buy a four-year bond. Two years later it has only two years left. If the curve stays put, the bond slides from the four-year yield down to the two-year yield.

```text
Buy as a 4-year bond ------ hold 2 years ------ sell as a 2-year bond
Yield: 4.75%                                      Yield: 3.00%
```

> [!NOTE]
> Corporate proxy yield here = government spot rate + same-maturity swap spread.

**1. Find today's four-year corporate yield and price**

$$
y_4=4.05\%+0.70\%=4.75\%
$$

$$
P_0=\frac{100}{1.0475^4}=83.058
$$

**2. Reprice it after two years**

It is now a two-year bond, so use the two-year corporate yield:

$$
y_2=2.70\%+0.30\%=3.00\%
$$

$$
P_2=\frac{100}{1.03^2}=94.260
$$

**3. Annualize the two-year gain**

$$
(1+r)^2=\frac{94.260}{83.058}
$$

$$
r=\left(\frac{94.260}{83.058}\right)^{1/2}-1=\boxed{6.53\%}
$$

The bond did not pay coupons. The entire return came from buying at 83.058 and selling at 94.260 as it rolled into a lower-yield maturity bucket.

> [!NOTE]
> Roll-down works only if the curve stays roughly where you expect. If rates jump, the capital loss can kill the trade.

---

## Variant: Roll-Down Return with Coupons and Reinvestment

**Abstract:** *A coupon-bond roll-down return has three boxes: reinvested coupons, the latest coupon, and the bond's sale price. Add the boxes at the horizon, then annualize against the purchase price.*

> Annual-pay par yields for 1-, 3-, 4-, 5-, and 6-year bonds are **2%, 4%, 5%, 6%, and 7%**. An investor has a two-year horizon and expects the curve to stay unchanged. Compare:
>
> - a 5-year, 6% coupon bond bought at 100; and
> - a 6-year, 7% coupon bond bought at 100.

**Why is this slightly harder than the zero-coupon version?**

Because cash arrives before the sale date. The Year 1 coupon gets one year to earn interest; the Year 2 coupon arrives right at the finish line; and the bond itself is sold with a shorter maturity.

```text
Ending wealth
    = reinvested Year 1 coupon
    + Year 2 coupon
    + sale price after Year 2
```

> [!NOTE]
> For a multi-year holding period, do not forget coupon reinvestment. Every cash flow must be moved to the same horizon before you add it.

**1. Five-year bond bought at the five-year par yield**

After two years, the five-year bond has three years left. The unchanged three-year yield is 4%, so its sale price is:

$$
P_2=\frac{6}{1.04}+\frac{6}{1.04^2}+\frac{106}{1.04^3}=105.55
$$

The first coupon earns the one-year rate of 2% for one year:

$$
6(1.02)=6.12
$$

Now stack all the Year 2 cash:

$$
FV_2=6.12+6+105.55=117.67
$$

$$
r=\left(\frac{117.67}{100}\right)^{1/2}-1=\boxed{8.48\%}
$$

**2. Six-year bond bought at the six-year par yield**

After two years, it has four years left. Reprice it at the unchanged four-year yield of 5%:

$$
P_2=\frac{7}{1.05}+\frac{7}{1.05^2}+\frac{7}{1.05^3}+\frac{107}{1.05^4}=107.09
$$

Add the reinvested first coupon and the second coupon:

$$
FV_2=7(1.02)+7+107.09=121.23
$$

$$
r=\left(\frac{121.23}{100}\right)^{1/2}-1=\boxed{10.10\%}
$$

The longer bond wins here because it pays a bigger coupon and gets a bigger price lift when it rolls from the 7% six-year point to the 5% four-year point.

> [!NOTE]
> Bigger roll-down return usually means bigger interest-rate risk. If the curve shifts up instead of staying still, that extra return can disappear fast.

---

## Variant: Pricing a Bond from a Swap Spread, Then Finding Clean Price

**Abstract:** *First build the bond's yield: interpolate the Treasury rate, then add the swap spread. Price the remaining cash flows to get invoice price, then subtract accrued interest to get clean price.*

> A **\$1,000,000 face**, **1.625% semiannual-pay** bond has **2 years and 350 days** remaining on a 360-day convention. The 2-year and 3-year Treasury yields are **0.525%** and **0.588%**. Its swap spread is **0.918%**. Settlement is **10 days into a 180-day coupon period**. Calculate the invoice price and clean price.

**This is a pipeline problem**

```text
Interpolate Treasury yield
          |
          v
Add swap spread -> bond YTM
          |
          v
Discount cash flows -> invoice price
          |
          v
Subtract accrued interest -> clean price
```

**1. Interpolate the 2.97-year Treasury yield**

The maturity is $2+350/360=2.9722$ years, so it sits almost all the way from the two-year quote to the three-year quote:

$$
T_{2.97}=0.525\%+\frac{350}{360}(0.588\%-0.525\%)
$$

$$
T_{2.97}=\boxed{0.586\%}
$$

> [!NOTE]
> Linear interpolation = lower rate + fraction of the gap travelled × change in rates.

**2. Add the swap spread**

$$
y=0.586\%+0.918\%=\boxed{1.504\%}
$$

The semiannual coupon is:

$$
C=1{,}000{,}000\times\frac{1.625\%}{2}=8{,}125
$$

The semiannual discount rate is:

$$
\frac{1.504\%}{2}=0.752\%
$$

**3. Price from the settlement date**

We are 10 days into a 180-day coupon period, so the next coupon is $1-10/180=0.9444$ half-year periods away. Discount the six remaining coupons and the principal using exponents $0.9444,1.9444,\ldots,5.9444$:

$$
P_{\text{invoice}}
=
\sum_{k=1}^{6}\frac{8{,}125}{(1+0.01504/2)^{k-10/180}}
+
\frac{1{,}000{,}000}{(1+0.01504/2)^{6-10/180}}
$$

$$
P_{\text{invoice}}=\boxed{\$1{,}003{,}954.12}
$$

Invoice price is the actual cheque changing hands. It includes the coupon interest already earned by the seller.

**4. Remove accrued interest to get clean price**

$$
AI=1{,}000{,}000\times\frac{1.625\%}{2}\times\frac{10}{180}=451.39
$$

$$
P_{\text{clean}}=1{,}003{,}954.12-451.39=\boxed{\$1{,}003{,}502.73}
$$

> [!NOTE]
> Invoice price = clean price + accrued interest. Therefore clean price = invoice price − accrued interest.

---

## Variant: Solving for the Z-Spread from a Market Price

**Abstract:** *When price is given and Z-spread is missing, add the same candidate spread to every spot rate until the discounted cash flows hit the market price. In an MCQ, plug the answer choices—do not bring algebraic artillery.*

> A two-year, **8% annual-pay**, **100 face-value** bond trades at **104.12**. The one-year and two-year government spot rates are **4%** and **5%**. Find the Z-spread.

**What does the Z-spread do?**

It is one constant risk surcharge added to *every* government spot rate:

$$
104.12=\frac{8}{1.04+Z}+\frac{108}{(1.05+Z)^2}
$$

There is no clean hand-solved rearrangement because $Z$ appears with different powers. On an exam, the options are your shortcut: test them.

> [!NOTE]
> Z-spread is one constant added to the entire spot curve—not a different spread for each year.

**Test $Z=0.80\%=0.008$**

$$
P=\frac{8}{1.048}+\frac{108}{1.058^2}
$$

$$
P=7.63+96.49=\boxed{104.12}
$$

The trial price matches the market price, so:

$$
Z=\boxed{0.80\%=80\text{ bps}}
$$

*Direction check:* adding a positive spread raises discount rates and lowers price. If your trial price is too high, increase $Z$; if it is too low, decrease $Z$.

> [!NOTE]
> Price too high → spread too low. Price too low → spread too high. That rule lets you kill wrong MCQ choices quickly.

---

## Variant: Annualizing Interest-Rate Volatility

**Abstract:** *A monthly standard deviation is a one-month risk number. To express it as yearly volatility, multiply by $\sqrt{12}$—time scales, but uncertainty scales with the square root of time.*

> Monthly proportional changes in a three-month T-bill yield have a standard deviation of **10.15%**. Estimate the annualized interest-rate volatility.

**What is being annualized?**

The 10.15% is not the yield. It is the standard deviation of the *proportional change in the yield* over one month.

One month is $1/12$ of a year. The formula is:

$$
\sigma_{annual}=\frac{\sigma_{period}}{\sqrt{\Delta t}}
$$

> [!NOTE]
> Monthly volatility × $\sqrt{12}$ = annual volatility. Do not multiply volatility by 12.

**Substitute the numbers**

$$
\sigma_{annual}=\frac{0.1015}{\sqrt{1/12}}
$$

$$
=0.1015\sqrt{12}=0.3516=\boxed{35.16\%}
$$

*Sanity check:* annual volatility should be larger than monthly volatility, but not twelve times larger. $10.15\%\times\sqrt{12}$ passes that smell test.

The source table reports **35.15%** because its monthly figure is rounded before display; using the displayed 10.15% gives 35.16%.

> [!NOTE]
> General rule: volatility over a longer horizon = short-horizon volatility × square root of the number of short periods.

---

## Variant: Key-Rate Duration and Yield-Curve Factor Risk

**Abstract:** *Key-rate duration splits portfolio risk by maturity point. Level, steepness, and curvature then remix those same maturity shocks into three recognizable curve moves.*

> A portfolio holds **\$100 each** of 1-year, 5-year, and 10-year zero-coupon bonds, so total value is **\$300**. Calculate its key-rate durations, effective duration, factor sensitivities, and percentage value change if $\Delta x_L=-0.50\%$, $\Delta x_S=+0.20\%$, and $\Delta x_C=+0.10\%$.

**1. Why are the individual durations 1, 5, and 10?**

A zero-coupon bond has only one cash flow, at maturity. Its duration is therefore roughly its maturity.

Each position is one-third of the portfolio, so each maturity's contribution is its duration times its portfolio weight:

$$
KeyDur_1=\frac{100}{300}(1)=0.3333
$$

$$
KeyDur_5=\frac{100}{300}(5)=1.6667
$$

$$
KeyDur_{10}=\frac{100}{300}(10)=3.3333
$$

> [!NOTE]
> Key-rate duration tells you which maturity bucket can hurt the portfolio; effective duration bundles all buckets into one parallel-shift number.

**2. Add them to get effective duration**

$$
D_{eff}=0.3333+1.6667+3.3333=\boxed{5.3333}
$$

**3. Convert maturity buckets into curve-shape factors**

For this three-point setup:

$$
D_L=K_1+K_5+K_{10}=5.3333
$$

$$
D_S=-K_1+K_{10}=-0.3333+3.3333=3.0000
$$

$$
D_C=K_1+K_{10}=0.3333+3.3333=3.6666
$$

Level moves every rate together. Steepness pushes short and long rates in opposite directions. Curvature moves the two ends against the middle.

**4. Feed the expected curve moves into the price-change model**

$$
\frac{\Delta P}{P}
\approx-D_L\Delta x_L-D_S\Delta x_S-D_C\Delta x_C
$$

$$
\frac{\Delta P}{P}
=-5.3333(-0.005)-3.0000(0.002)-3.6666(0.001)
$$

$$
=0.02667-0.00600-0.00367=\boxed{+1.70\%}
$$

The level drop helps the bond portfolio because yields fall. The steepness and curvature moves take some of that gain back.

> [!NOTE]
> Duration carries a minus sign: yields down → prices up; yields up → prices down.

---

## Variant: Applying Standardized Level, Steepness, and Curvature Shocks

**Abstract:** *A factor loading tells you the yield move caused by one standard-deviation shock. Multiply by the number of shocks, and reverse the sign when the shock direction reverses.*

> A factor table gives the following one-standard-deviation yield changes:
>
> - 20-year steepness loading: **−0.3015%**
> - 5-year level loading: **−0.4352%**
> - 5-year curvature loading: **+0.3963%**
>
> **1.** Find the 20-year yield change after a **two-standard-deviation increase** in steepness.
> **2.** Find the 5-year yield change after a **one-standard-deviation decrease** in both level and curvature.

**What is a loading?**

It is basically the bond yield's reaction setting. A loading of −0.3015% says: “for every +1 standard-deviation steepness shock, this yield moves down 0.3015%.”

> [!NOTE]
> Loading × shock size = yield change. A negative shock flips the loading's sign.

**1. Two-standard-deviation steepness increase**

The direction is positive and the size is 2:

$$
\Delta y_{20}=(-0.3015\%)(+2)=\boxed{-0.6030\%}
$$

The 20-year yield falls by 60.30 bps.

**2. One-standard-deviation decrease in level and curvature**

A decrease means a shock of $-1$ for each factor:

$$
\Delta y_5=(-0.4352\%)(-1)+(0.3963\%)(-1)
$$

$$
=0.4352\%-0.3963\%=\boxed{+0.0389\%}
$$

The two effects mostly cancel, leaving the five-year yield up by only 3.89 bps.

> [!NOTE]
> Do not copy signs blindly from the table. The table usually shows a **+1 SD shock**; a −1 SD question reverses every listed effect.

---

## Variant: Bond Risk Premium

**Abstract:** *Bond risk premium is the extra expected return for leaving the one-year safe lane and owning a longer bond. It is just long-bond expected return minus the one-year risk-free rate.*

> A five-year government bond has an expected one-year holding-period return of **4%**. The one-year risk-free rate is **1%**. Calculate the bond risk premium.

**What are we comparing?**

Both numbers cover the same one-year holding period:

- earn 1% in the short, nearly risk-free lane; or
- expect 4% from the five-year bond, which can move around in price.

The extra expected return is the payment for taking that additional duration risk:

$$
\text{Bond risk premium}
=4\%-1\%
=\boxed{3\%}
$$

That means 1 percentage point is the baseline time value over the year, while 3 percentage points are the expected extra reward for holding the longer bond.

> [!NOTE]
> Always match horizons: one-year expected bond return minus one-year risk-free rate. Mixing a five-year YTM with a one-year risk-free rate breaks the comparison.

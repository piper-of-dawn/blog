> [!abstact] SEE THIS BEFORE THE EXAM
> 1. On a reset date, if quoted margin equals discount margin, the floater is pulled back to par.
> 2. Required margin is bottom-up risk compensation. Think issuer credit risk, liquidity, and tax status. Broad rate changes are not the same as spread changes. Broad rate changes affect the market reference rate; issuer-specific credit changes affect the discount margin.
> 3. Longer reset period means more price volatility. Shorter reset period means the coupon catches up faster.
> 4. The quoted margin can be negative for very low-risk issuers. Do not assume all spreads are positive.
> 5. Money market discount rate understates investor return when \(PV < FV\) because it divides interest by \(FV\), not \(PV\).
> 6. Money market rates are annualized but not compounded. Do not treat them like normal bond yields unless the question explicitly converts the basis.
> 7. Bond equivalent yield means **365-day add-on basis**. It does not mean "semiannual bond yield" by itself.
> 8. In a discount-rate price formula, interest is effectively subtracted from face value. In an add-on-rate price formula, rate is added on to the price.
> 9. Quickly look at the numericals in this module. 

> [!ABSTRACT] LOS
> 10. Calculate and interpret yield spread measures for floating-rate instruments.
> 11. Calculate and interpret yield measures for money market instruments.

1. This module is really two small modules stitched together. First, how to price a floating-rate note when the coupon spread and the market-required spread are different. Second, how to compare short-term money market quotes that use annoying conventions.
2. A floating-rate note is a debt instrument whose coupon changes with a market reference rate (MRR), such as a short-term benchmark rate, plus a fixed quoted margin.
3. **What is market reference rate:** the base short-term market rate used to reset the coupon.
4. **What is quoted margin:** the fixed spread written into the bond contract.
5. **What is discount margin:** the spread investors currently require over the market reference rate. It is also called the required margin.
6. The clean memory line is this: **quoted margin creates the coupon, discount margin prices the bond.**
7. Money market instruments are short-term debt securities with original maturities of one year or less. ==Their rates are annualized, but they are usually **not compounded**.==

> [!danger] DO NOT MAKE THIS MISTAKE
>  The money market exam trap is that a **discount rate divides interest by face value**, while an **add-on rate divides interest by the amount invested**. Same cash flows, different denominator, different quote.
>
> Suppose you buy a short-term instrument for **95** and receive **100** at maturity. The interest earned is **5**.
>
> Discount-rate thinking says: **5 / 100 = 5.00%** before annualizing, because it divides interest by face value.
>
> Add-on-rate thinking says: **5 / 95 = 5.26%** before annualizing, because it divides interest by the money actually invested.
>
> Same cash flow. Same profit. Different denominator. That is why the add-on rate is higher whenever the purchase price is below face value.

> [!tip] HAMMER THIS INTO YOUR HEAD
> For a floater, do not say "coupon rate versus yield-to-maturity" first. Say **quoted margin versus discount margin**.
>
> If **quoted margin > discount margin**, the coupon spread is too generous, so the floater trades at a **premium**.
>
> If **quoted margin = discount margin**, the coupon spread is fair, so the floater trades at **par** on a reset date.
>
> If **quoted margin < discount margin**, the coupon spread is too small, so the floater trades at a **discount**.

#### Floating-Rate Notes

8. A fixed-rate bond locks the coupon. If rates move, the price must do the adjusting. A floating-rate note lets the coupon reset. If the market reference rate rises, the next coupon rises. If the market reference rate falls, the next coupon falls.
9. That is why floaters usually have less interest rate price risk than fixed-rate bonds. The cash flows keep catching up with the market. ==But do not overstate this. A floater is not riskless. Between reset dates, its price can still move because the current coupon is temporarily stale.==
10. Longer reset periods create more price volatility. A floater that resets every day behaves very close to par. A floater that resets once a year behaves more like a short fixed-rate bond during that year.
11. The exam wording is usually: **interest rate sensitivity of a floater is related to the time remaining until the next coupon reset date.**
12. Most floating-rate notes determine the reference rate at the start of the coupon period and pay the interest at the end. This is called payment **in arrears**.
13. What is in arrears: the rate is set now, but the cash is paid later.
14. Common floater day-count conventions are actual/360 and actual/365, but the simplified curriculum pricing model often assumes 30/360 with evenly spaced periods.

#### Quoted Margin Versus Discount Margin

15. The quoted margin is contractual. If the note says "market reference rate plus 250 basis points," that **250 basis points** is the quoted margin.
16. The quoted margin compensates investors for the issuer's credit risk relative to the reference rate when the note is issued. Very high-quality issuers can even have a negative quoted margin.
17. The discount margin is market-determined. It is the spread over or under the reference rate that would make the floater worth par on a reset date.
18. What is par: the bond's face value, usually **100** in exam pricing questions.
19. Why discount margin is used: it lets the market reprice the floater when issuer risk, liquidity, or tax treatment changes after issue.
20. Changes in the discount margin usually come from changes in credit risk. Liquidity and tax status can matter too.
21. Do not blame every required-margin change on the yield curve. In this module, broad benchmark interest rate moves sit inside the market reference rate. Issuer-specific spread moves sit inside the discount margin.
22. ==At issue, if the floater is issued at par, the quoted margin and discount margin are normally equal.== Later, the quoted margin stays fixed, but the discount margin can move. That gap is where the premium or discount comes from.
23. If the issuer is downgraded, investors demand a higher discount margin. If the quoted margin does not increase, the old floater's coupon spread becomes deficient, so price falls below par.
24. If the issuer improves, investors accept a lower discount margin. If the quoted margin stays high, the old floater's coupon spread becomes generous, so price rises above par.

> [!tip] QUICK PRICE CHECK
> 1. **Discount margin greater than quoted margin means discount.**
> 2. **Discount margin equal to quoted margin means par.**
> 3. **Discount margin less than quoted margin means premium.**
> 4. Say it like fixed-rate bonds: fixed coupon versus required yield becomes fixed quoted margin versus required margin.

#### Floater Pricing Formula

25. In the simplified floater pricing model, the coupon payment per period is based on the market reference rate plus the quoted margin:

$$
PMT = \frac{(MRR + QM) \times FV}{m}
$$

26. The discount rate per period is based on the market reference rate plus the discount margin:

$$
r = \frac{MRR + DM}{m}
$$

27. The floater price is the present value of the coupon payments and principal:

$$
PV = \frac{PMT}{(1+r)^1} + \frac{PMT}{(1+r)^2} + \cdots + \frac{PMT + FV}{(1+r)^N}
$$

28. Notation in simple language:
   - \(PV\): price of the floating-rate note.
   - \(PMT\): coupon cash flow per period.
   - \(MRR\): market reference rate as an annual rate.
   - \(QM\): quoted margin as an annual rate.
   - \(DM\): discount margin, or required margin, as an annual rate.
   - \(FV\): face value or par value.
   - \(m\): number of coupon periods per year.
   - \(N\): number of remaining coupon periods.
29. The exam's favorite first step is usually not hard: **build PMT using quoted margin, build r using discount margin.**
30. If the question gives price and asks for discount margin, solve the bond's periodic discount rate first, then use:

$$
DM = (r \times m) - MRR
$$
31. This is why the calculator setup matters. If the floater is priced at **97**, enter \(PV = -97\), \(FV = 100\), \(PMT\) from the quoted margin, and \(N\). The solved rate is the periodic \(r\), not the annual discount margin.
32. The simplified model assumes the same market reference rate for all future cash flows. Real models project future reference rates and discount using spot rates, but this module wants the simplified mechanics.

> [!question] FLOATER PRICE WHEN DISCOUNT MARGIN IS GIVEN
> Problem: A one-year floating-rate note pays quarterly coupons based on a 90-day market reference rate of **2.5%** plus a quoted margin of **80 basis points**. The discount margin is **100 basis points**. Face value is **100**. Price the floater.
>
> ---
>
> Solution:
>
> First calculate the coupon cash flow using the quoted margin:
>
> $$
> PMT = \frac{(0.025 + 0.008) \times 100}{4} = 0.825
> $$
>
> Then calculate the discount rate using the discount margin:
>
> $$
> r = \frac{0.025 + 0.010}{4} = 0.00875
> $$
>
> Now discount four quarterly cash flows:
>
> $$
> PV = \frac{0.825}{1.00875} + \frac{0.825}{(1.00875)^2} + \frac{0.825}{(1.00875)^3} + \frac{100.825}{(1.00875)^4}
> $$
>
> $$
> PV = 99.804
> $$
>
> Explanation: quoted margin is **80 basis points** and discount margin is **100 basis points**, so the spread paid by the bond is too low. The price must be below **100**.

> [!question] DISCOUNT MARGIN WHEN PRICE IS GIVEN
> Problem: A two-year floating-rate note pays three-month market reference rate of **-0.50%** plus **250 basis points**. The floater is priced at **99** per **100** of par. Assume quarterly payments, 30/360 day count, and evenly spaced periods. Calculate the discount margin.
>
> ---
>
> Solution:
>
> Coupon cash flow:
>
> $$
> PMT = \frac{(-0.005 + 0.025) \times 100}{4} = 0.500
> $$
>
> Calculator setup:
>
> $$
> N = 8,\quad PV = -99,\quad PMT = 0.500,\quad FV = 100
> $$
>
> Solving for the periodic discount rate gives:
>
> $$
> r = 0.00628562
> $$
>
> Convert periodic discount rate into annual discount margin:
>
> $$
> DM = (0.00628562 \times 4) - (-0.005) = 0.03014
> $$
>
> $$
> DM = 3.014\% \approx 301 \text{ basis points}
> $$
>
> Explanation: the quoted margin is **250 basis points**, but investors require about **301 basis points**, so the floater trades below par.

> [!warning] EXAM WARNING
> Negative market reference rates do not break the formula. If the market reference rate is **-0.55%** and the quoted margin is **250 basis points**, the coupon rate is **1.95%**, not **3.05%**.
>
> Always convert basis points first: **250 basis points = 2.50% = 0.0250**.

#### Money Market Instruments

33. Money market instruments are debt securities with original maturities of one year or less.
34. Examples include Treasury bills, commercial paper, bankers' acceptances, certificates of deposit, repurchase agreements, time deposits, and money market mutual fund holdings.
35. Bond yields-to-maturity are annualized and compounded. Money market rates are annualized but usually **not compounded**.
36. Bond yields usually use a common compounding periodicity. Money market rates have periodicity equal to:

$$
\text{Periodicity} = \frac{\text{Year}}{\text{Days}}
$$

37. A **91-day** instrument on a **365-day** year has periodicity **365 / 91 = 4.01**. A **180-day** instrument has a different periodicity. That is why raw money market quotes are not automatically comparable.
38. Money market instruments often use non-standard pricing equations. Do not blindly use normal bond time-value-of-money steps.
39. The two main quote bases are **discount rate** and **add-on rate**.
40. Typical discount-rate instruments include commercial paper, Treasury bills, and bankers' acceptances.
41. Typical add-on-rate instruments include certificates of deposit, repurchase agreements, and market reference rates.

#### Discount Rate Basis

42. A money market discount rate is odd because the interest is divided by face value, not the amount invested.
43. Pricing formula:

$$
PV = FV \times \left(1 - \frac{Days}{Year} \times DR\right)
$$

44. Solving for the discount rate:

$$
DR = \frac{Year}{Days} \times \frac{FV - PV}{FV}
$$

45. Notation in simple language:
   - \(PV\): price paid today.
   - \(FV\): face value paid at maturity.
   - \(Days\): days from settlement to maturity.
   - \(Year\): assumed days in the year, often **360** or **365**.
   - \(DR\): discount rate as an annual rate.
46. The key denominator is \(FV\). That is why the discount rate understates the investor's true return when \(PV < FV\).
47. Think of a bill bought for **95** and redeemed for **100**. The investor earns **5** on an investment of **95**, but the discount-rate quote divides **5** by **100**. That quote is lower than the actual investment return.

> [!question] DISCOUNT RATE PRICE
> Problem: A 91-day Indian Treasury bill has face value of **INR 10,000,000** and is quoted at a discount rate of **3.45%** on a **360-day** year. Calculate the price.
>
> ---
>
> Solution:
>
> $$
> PV = 10{,}000{,}000 \times \left(1 - \frac{91}{360} \times 0.0345\right)
> $$
>
> $$
> PV = 9{,}912{,}791.67
> $$
>
> Explanation: the instrument pays **INR 10,000,000** at maturity, but the investor pays less today because interest is built into the face value.

> [!danger] DO NOT MAKE THIS MISTAKE
> DISCOUNT RATE MEANS YOU ARE GETTING A DISCOUNT ON FV
> For a discount-rate quote, do **not** write \(PV = FV / (1 + rate)\). That is the add-on style.
>
> For a discount-rate quote, use:
>
> $$
> PV = FV \times \left(1 - \frac{Days}{Year} \times DR\right)
> $$

#### Add-On Rate Basis

48. An add-on rate is closer to normal intuition. Interest is calculated on the amount invested, then added to principal.
49. Pricing formula:

$$
PV = \frac{FV}{1 + \frac{Days}{Year} \times AOR}
$$

50. Solving for the add-on rate:

$$
AOR = \frac{Year}{Days} \times \frac{FV - PV}{PV}
$$

    Notation in simple language:
   - \(AOR\): add-on rate as an annual rate.
   - \(PV\): amount invested today.
   - \(FV\): redemption amount at maturity, including interest.
51. The key denominator is \(PV\). That is why an add-on rate is higher than a discount rate for the same positive-interest cash flow.
52. If a certificate of deposit is issued for **EUR 20,000,000** at an add-on rate of **0.12%** for **90** days on a **365-day** year, the maturity value is:

$$
FV = 20{,}000{,}000 \times \left(1 + \frac{90}{365} \times 0.0012\right)
$$

$$
FV = 20{,}005{,}918
$$

54. That is plain interest math. The investor put in **EUR 20,000,000**, earned **EUR 5,918**, and received **EUR 20,005,918** at maturity.

> [!question] ADD-ON RATE FROM PRICE AND MATURITY VALUE
> Problem: A 365-day-year certificate of deposit has initial principal of **USD 96.5 million**, maturity value of **USD 100 million**, and **270** days to maturity. Calculate the add-on rate.
>
> ---
>
> Solution:
>
> $$
> AOR = \frac{365}{270} \times \frac{100 - 96.5}{96.5}
> $$
>
> $$
> AOR = 0.04903 = 4.90\%
> $$
>
> Explanation: the denominator is the amount invested, **USD 96.5 million**, not the maturity value.

#### Bond Equivalent Yield

55. ==A bond equivalent yield is a money market rate restated as a **365-day add-on rate**.==
56. Why it is used: it puts money market instruments on a common basis so you can compare them with each other and with bond yields.
57. If the instrument is already quoted as a **365-day add-on rate**, that quote is already on bond-equivalent-yield basis.
58. If the instrument is quoted on a discount-rate basis, first calculate \(PV\), then convert the return into a 365-day add-on rate:

$$
BEY = \frac{365}{Days} \times \frac{FV - PV}{PV}
$$

59. Notice the two-step logic. Discount quote uses \(FV\) in the denominator. Bond equivalent yield uses \(PV\) in the denominator.

> [!question] CONVERT DISCOUNT RATE TO BOND EQUIVALENT YIELD
> Problem: A 90-day commercial paper instrument is quoted at a discount rate of **0.120%** on a **360-day** year. Face value is **100**. Calculate its bond equivalent yield.
>
> ---
>
> Solution:
>
> First calculate price from the discount quote:
>
> $$
> PV = 100 \times \left(1 - \frac{90}{360} \times 0.0012\right)
> $$
>
> $$
> PV = 99.970
> $$
>
> Then convert to a 365-day add-on rate:
>
> $$
> BEY = \frac{365}{90} \times \frac{100 - 99.970}{99.970}
> $$
>
> $$
> BEY = 0.00122 = 0.122\%
> $$
>
> Explanation: the quoted discount rate is **0.120%**, but the comparable investment yield is slightly higher because the investor actually invested **99.970**, not **100**.

> [!question] WHICH MONEY MARKET INSTRUMENT IS BETTER?
> Problem: A 180-day investor compares four instruments:
>
> | Instrument | Quote basis | Year | Quoted rate |
> |---|---:|---:|---:|
> | A | Discount rate | 360 | 4.33% |
> | B | Discount rate | 365 | 4.36% |
> | C | Add-on rate | 360 | 4.35% |
> | D | Add-on rate | 365 | 4.45% |
>
> ---
>
> Solution:
>
> Convert each one to a 365-day add-on rate, which is the bond equivalent yield:
>
> | Instrument | Bond equivalent yield |
> |---|---:|
> | A | 4.487% |
> | B | 4.456% |
> | C | 4.410% |
> | D | 4.450% |
>
> Explanation: Instrument A has the highest comparable return, even though its raw quote of **4.33%** looks lower than some others. Raw money market quotes are not comparable until the quote basis and year basis are made consistent.
> 
> ---
> 
>   Another easy solution is that calculate the present value for a face value of 100 at each rate. Remember, the add-on rate is always added on the price and discount rate is discounted on the face value. Whatever gives you the cheapest price is the best bond.

#### Converting Money Market Periodicity to Semiannual Bond Basis

60. Money market rates are simple annualized rates. Their periodicity is \(Year / Days\).
61. A bond yield with semiannual compounding has periodicity **2**.
62. To convert an annual percentage rate from one periodicity to another, use:

$$
\left(1 + \frac{APR_m}{m}\right)^m = \left(1 + \frac{APR_n}{n}\right)^n
$$

63. Notation in simple language:
   - \(APR_m\): annual percentage rate with periodicity \(m\).
   - \(APR_n\): annual percentage rate with periodicity \(n\).
   - \(m\): old periodicity.
   - \(n\): new periodicity.
64. If a **91-day** Indian Treasury bill is quoted at a bond equivalent yield of **3.50%**, then \(m = 365 / 91\). To convert it to semiannual bond basis, set \(n = 2\):

$$
\left(1 + \frac{0.035}{365/91}\right)^{365/91} = \left(1 + \frac{APR_2}{2}\right)^2
$$

$$
APR_2 = 3.515\%
$$

65. The rate rises slightly because the compounding basis changes. At low interest rates, this difference is small, but exam questions can still test the direction.





> [!tip] FINAL FORMULA SHEET
> Floater coupon:
>
> $$
> PMT = \frac{(MRR + QM) \times FV}{m}
> $$
>
> Floater periodic discount rate:
>
> $$
> r = \frac{MRR + DM}{m}
> $$
>
> Discount margin from solved periodic rate:
>
> $$
> DM = (r \times m) - MRR
> $$
>
> Money market discount-rate price:
>
> $$
> PV = FV \times \left(1 - \frac{Days}{Year} \times DR\right)
> $$
>
> Money market discount rate:
>
> $$
> DR = \frac{Year}{Days} \times \frac{FV - PV}{FV}
> $$
>
> Money market add-on-rate price:
>
> $$
> PV = \frac{FV}{1 + \frac{Days}{Year} \times AOR}
> $$
>
> Money market add-on rate:
>
> $$
> AOR = \frac{Year}{Days} \times \frac{FV - PV}{PV}
> $$
>
> Bond equivalent yield:
>
> $$
> BEY = \frac{365}{Days} \times \frac{FV - PV}{PV}
> $$

### MODULE 6: Fixed-Income Bond Valuation: Prices and Yields

> Source module: `/home/karma/CFAPractice/mcq/quiz/AI/PDF/FixedIncome/module_06_fixed_income_bond_valuation_prices_and_yields.txt`

1. If 2 year YTM is 4.3% and 5 year YTM is 5.2%, what is the 3 year forward rate. $(1.052^5 / 1.043^2)^{(1/3)} - 1 = 5.81\%$
2. Matrix pricing uses the yields of actively traded bonds with similar credit quality, coupon rates, and maturities to estimate the yield of an illiquid bond. The process relies on linear interpolation to estimate the yield-to-maturity for the target bond's specific maturity date.
3. **Matrix Pricing:** Recipe is to first calculate interpolated YTM using the given info and then compute PV
	
> [!question] QUESTION
> 
> ##### Price Interpolation
> 
> Rob Phelps, CFA, is estimating the value of a nontraded 4% annual-pay, A+ rated bond that has three years remaining until maturity. He has obtained the following yields to maturity on similar corporate bonds: 
> A+ rated, 2-year annual-pay, YTM = 4.3% 
> A+ rated, 5-year annual-pay, YTM = 5.1% 
> A+ rated, 5-year annual-pay, YTM = 5.3% 
> Estimate the value of the nontraded bond.
> ---
> If 2 year YTM is 4.3% and 5 year YTM is 5.2%, what is the 3 year interpolated YTM. $\Delta YTM (\text{3y}) = 5.2-4.3 = 0.9$. YTM increases by 0.9/3 = 0.30 per year. So 3-year straight line approximate YTM: 4.3+0.3 = 4.6% 
> 
> Now: I/Y = 4.6, N = 3, FV = 100, PMT = 4, **PV = -98.353**
> 
> ##### Using Spreads
> 
> Consider the following market yields:
> 4-year, U.S. Treasury bond, YTM 1.48%
> 5-year, A rated corporate bond, YTM 2.64%
> 6-year, U.S. Treasury bond, YTM 2.15%
> Estimate the required yield spread on a newly issued 6-year, A rated corporate bond
> 
> ---
> 5y YTM of US Treasury = 1.48 + (2.15-1.48)/2 = 1.480 + 0.335 = 1.815%
> A rated bond spread = 2.640 - 1.815 = 0.825 
> 6y YTM = 2.150 + 0.825 = 2.975
> 

4. The 'constant-yield price trajectory' illustrates how a bond's price moves toward par value as time passes, assuming the issuer does not default.
5. The YTM calculation assumes the investor holds the bond until maturity. It assumes the issuer makes all coupon and principal payments as scheduled without default. **==It assumes all coupon payments are reinvested at the calculated Yield-to-Maturity.==**
6. Generally, for the same change in market discount rates, a longer-term bond will experience a greater percentage price change than a shorter-term bond because the longer maturity bond has more cashflows that suffer the wrath of discounting.
7. ==A lower-coupon bond will typically have a higher percentage price change than a lower-coupon bond when market discount rates change by the same amount.== Lower coupon bond has *higher* interest rate risk (greater percentage price change) because a larger proportion of its value comes from the final principal payment, which is more sensitive to discounting. A higher coupon bond returns cash sooner, reducing duration.
8. **Convexity is optimistic.** The convexity effect implies that for the same absolute change in yield, the percentage price increase when yields fall is greater than the percentage price decrease when yields rise. 
9. The Actual/Actual method counts *actual* calendar days, which includes weekends, holidays, and leap days; it does not exclude them. Government bonds typically use Actual/Actual to be precise. #memorise
10. The 30/360 day count convention assumes each month has 30 days and the year has 360 days, and is often used for corporate bonds. #memorise
11. The flat price (or clean price) is the quoted price. It excludes accrued interest so that the price does not appear to drop significantly solely because a coupon payment was made.
12. The full price, also known as the invoice price, is equal to the flat price plus accrued interest. The full price includes accrued interest, which accumulates linearly between coupon dates and drops to zero immediately after a coupon payment.


> [!QUESTION] QUESTION
> A 4% annual coupon bond matures in 3 years. The market discount rate is 5%. The last coupon was paid 90 days ago. The coupon period is 360 days (30/360). What is the Full Price (Dirty Price)?
> 
> ---
> 
> Revalue the bond with 2.75 years remaining:
> N = 2.75, I/Y = 5, PMT = 4, FV = 100 -> **PV = 97.48**
> 
> Calculate lost coupon (accrued interest) = 90/360 $\times$ 4 = 1
> 
> Price = 98.48
>
 
 


> [!question] QUESTION
> A bond has a Full Price of 102.45. The semiannual coupon is 3.5% (annual rate). Settlement is 60 days into a 182-day coupon period. What is the Flat Price?
> 
> ---
> 
> Coupon = 3.5 
> Accrued Interest (linear) = 3.5 / 365 $\times$ 60 = 0.58
> Flat price = Full price - Accrued Interest = 101.87
 


13. The forward rate represents the marginal interest rate required to extend an investment for one additional period to break even with a longer-term spot investment.


> [!tip] HAMMER THIS INTO YOUR HEAD
> **What are Strips?** - Each **coupon payment** → becomes its **own zero-coupon bond**. The **principal repayment** → also becomes a **zero-coupon bond**.
> Bond: Face value **100**, maturity **3 years**, annual coupon **10%**. 
> - STRIP 1 (ZCB): pays **10** in Year 1 
> - STRIP 2 (ZCB): pays **10** in Year 2    
> - STRIP 3 (ZCB): pays **110** in Year 3
> Discount each Strip by YTM and you get the ZCB price.
> **Important things is to know is implication:**
> If the price of a bond calculated using the spot rate curve (theoretical price) is lower than the market price of the bond -> Bond is overvalued. Sell the bond, replicate its cash flows cheaper using strips → lock risk-free profit. 



> [!QUESTION] Title
> A 10-year, 8% annual coupon bond is purchased at a premium price of 115.00 (Yield = 6.00%). Assuming the yield remains constant at 6.00%, what is the expected price of the bond 1 year later (9 years to maturity)?

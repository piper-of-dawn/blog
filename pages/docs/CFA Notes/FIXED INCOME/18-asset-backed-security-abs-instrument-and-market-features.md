### MODULE 18: Asset-Backed Security (ABS) Instrument and Market Features

> Source module: `/home/karma/CFAPractice/mcq/quiz/AI/PDF/FixedIncome/module_18_asset_backed_security_abs_instrument_and_market_features.txt`

1. Compared to ordinary bank bonds, covered bonds are safer because your repayment isn’t riding on just “the bank stays healthy.” You also have a legally protected pile of assets sitting behind the bond. If assets fail to pay, you can lay claim on the assets of the originator. **The covered bonds have a recourse to the originator.** 
2. In a covered bond, the bank still owns the loans (they stay on its balance sheet), so regulators still treat them as the bank’s assets/risk. So the bank must still hold the same capital buffer against them-unlike securitization, where selling/isolating the loans can reduce required capital.
3. There is no tranching in covered bonds and the collateral pool cannot contain non performing assets.
4. **Hard Bullet** Suppose issuer misses Year 2 coupon Under hard bullet, this is immediate default. Acceleration happens immediately. The bondholders’ claim becomes: “pay me everything outstanding now."
5. **Soft-bullet**: if the issuer can’t pay at maturity, default/acceleration is delayed by extending the maturity (e.g., up to a year) to give time to pay, and only if still unpaid after the extension does default kick in. 
6. **Conditional pass-through**: if anything is still unpaid at maturity, the bond switches to pass-through, meaning investors get paid only as cash is later collected from the cover pool (e.g., 60 now, then 25, then 15), with repayment timing driven by recoveries rather than a fixed date.
#### WATERFALL STRUCTURE IN ABS

```text

ORIGINATOR (BANK)
   |
   | Sells loans to. 
   | This is a true sale including 
   | claim on collateral
   v
SPECIAL PURPOSE VEHICLE (SPV)
	|
    | Issues ABS to investors 
    v
    Flow of Funds works like this:
    --------
    SENIOR TRANCHE (AAA)
    FV = 300
    MRR + 0.5%
    --------
    MEZZANINE TRANCHE (BBB)
    FV = 80
    MRR + 1.5%
    --------
    JUNIOR TRANCHE (BB)
    FV = 30
    Variable
```

7. The senior tranche has the first claim on cash flows from the underlying assets, so it has the lowest risk and lowest yield. **It can have a higher credit rating than originator"
8. Suppose I have 10 of Mezzanine tranche and MRR is 4%. In no default case; I get 10 * 0.055 = 0.55. 
9. Suppose there is a default in the pool that amounts to 50, then the Junior tranche will be wiped off (30). I have to pay for remaining 20 from Mezzanine tranche. So I get 80 - 20 = 60. My return is 60/80 = 75% of 0.55 = 0.4125.
10. Credit card ABS has two phases because credit cards don’t have a fixed “repay schedule” like a mortgage. So the deal first runs a **revolving/lockout period** where principal coming in is **re-lent** (investors get only interest/fees), then switches to an **amortization period** where principal is **returned to investors**. (Very similar to a Z-Tranche)
#### COLLATERALISED DEBT OBLIGATION
11. A CDO is an **SPE-issued box** that owns a **portfolio of debt** and then **slices the cashflows into tranches** (senior/mezz/equity). What makes many CDOs different from plain ABS is that the portfolio is often **actively managed**: a **collateral manager** can **buy/sell/reinvest** the collateral to keep the deal generating enough cash to pay investors.


> [!note] HOW CDO's WORK?
> - Collateral (loans/bonds) generates **interest + principal**.    
> - Cash goes through a **waterfall**: expenses/fees → senior interest/principal → mezz → equity (residual).    
> - If defaults happen, **losses eat through subordination** bottom-up.
> - Because a manager can trade/reinvest, future cashflows depend on:    
>     - **credit outcomes** of holdings, and        
>     - **manager’s ability** to maintain portfolio quality + comply with deal test
>

### MODULE 14: Credit Risk

> Source module: `/home/karma/CFAPractice/mcq/quiz/AI/PDF/FixedIncome/module_14_credit_risk.txt`

> [!abstract] MEMORISE THIS FOR EFFICIENCY
> Loss Rate (LR) = PD $\times$ LGD 
> Spread should equal Loss Rate
> If Loss Rate > Spread $\to$ Investor is under-compensated
> Expected Loss = LR $\times$ EAD

1. Burn this cutoff: BBB− (S&P) = Baa3 (Moody's) is the last investment grade notch, one step down to BB+ = Ba1 and you're in junk. Yields spike and pension/insurance funds are legally out
2. Full credit rating ladder in one breath: AAA → AA → A → BBB is safe, BB → B is speculative, CCC → CC → C is distress, D (S&P) or C (Moody's) is already defaulted
3. Notation is cosmetic: Moody's uses letters + numbers (Aa1/Aa2/Aa3), S&P/Fitch use letters + symbols (AA+/AA/AA−), they map 1-to-1 within each tier, and Fitch quietly drops the +/− at CCC.
4. **Ratings lag reality:** market reprices risk instantly → ratings update slow → same rating bonds can trade very different yields because market cares about timing of default + recovery, ratings just average expected loss
5. **Ratings miss hidden/complex risks:** litigation, disasters, leverage events (buybacks, acquisitions) are hard to predict → agencies disagree → same bond can get split ratings → uncertainty not fully captured.    
6. **Agencies can be wrong:** incentives + model limits → misratings (e.g., pre-2008 MBS) → high-rated names can still collapse → takeaway = don’t outsource thinking, front-run rating changes > reacting to them
7. Two spreads, don't confuse them: yield spread = extra return over risk-free benchmark (credit risk proxy), bid-offer spread = dealer buy/sell gap (liquidity risk proxy) - exam questions will test whether you know which one is being referenced
8. Bid-offer spread is your liquidity risk meter: wider gap → higher transaction cost → higher liquidity risk, and the drivers are simple - less debt outstanding + lower credit quality + less trading activity → wider spreads
9. Stress causes contagion: junk illiquidity spikes in crisis → risk aversion spreads → IG bid-offer spreads widen too even though the credit quality hasn't changed, liquidity fear is contagious
10. **You can decompose yield spread into credit vs liquidity: calculate yield at bid and at offer → difference is the liquidity component → strip it out to isolate pure credit risk premium**

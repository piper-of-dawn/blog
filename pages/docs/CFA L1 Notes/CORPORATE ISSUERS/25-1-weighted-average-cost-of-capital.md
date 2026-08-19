### MODULE 25.1: WEIGHTED-AVERAGE COST OF CAPITAL

###### Expected number of questions: 1
###### LOS 25.a: Calculate and interpret the weighted-average cost of capital for a company.
###### LOS 25.b: Explain factors affecting capital structure and the weighted-average cost of capital.

> [!tip] LOOK AT THESE BEFORE EXAM  
> **Cost of equity without taxes:** A firm has all-equity cost of 10%, debt cost of 5%, debt of 15,000, and equity of 35,000. **Find cost of equity.** → First take the spread: 10% minus 5% = 5%. Then multiply by debt divided by equity: 15,000 divided by 35,000. Extra equity risk is 2.143%. Add this to 10%. Answer = **12.143%**.
> 
> **WACC unchanged:** Debt is 15,000, equity is 35,000, debt cost is 5%, and equity cost is 12.143%. **Find WACC.** → Total capital is 50,000. Debt is 30% of capital, equity is 70%. Take 30% of 5% and 70% of 12.143%, then add both. Answer = **10%**.
> 
> **Firm value from cash flows:** Debt cash flow is 750 and debt cost is 5%; equity cash flow is 4,250 and equity cost is 12.143%. **Find firm value.** → Debt value is 750 divided by 5%, which is 15,000. Equity value is 4,250 divided by 12.143%, which is 35,000. Add both. Firm value = **50,000**.
> 
> **Levered value with taxes:** Unlevered firm value is 100 million, debt is 40 million, tax rate is 25%. **Find levered value.** → Take 25% of 40 million. That gives 10 million tax shield. Add it to 100 million. Levered value = **110 million**.
> 
> **After-tax debt cost:** Before-tax debt cost is 8%, tax rate is 30%. **Find after-tax cost of debt.** → Tax saves 30%, so the company really bears 70% of the debt cost. Take 70% of 8%. Answer = **5.6%**.
> 
> **Cost of equity with taxes:** All-equity cost is 10%, debt cost is 5%, tax rate is 30%, debt is 15,000, equity is 35,000. **Find cost of equity.** → First take the spread: 10% minus 5% = 5%. Tax reduces the leverage effect, so take 70% of that spread = 3.5%. Then multiply by 15,000 divided by 35,000 = 1.5%. Add this to 10%. Answer = **11.5%**.
1. Cost of capital is the return demanded by the people funding the company. From investors’ side, it is required return. From the company’s side, it is cost. If a project earns more than this cost, it creates value. If it earns less, it destroys value. So WACC is the company’s hurdle rate.

2. Basic WACC is not “debt plus equity” blindly. It means: take **every financing source**, multiply each by its weight, and add them.

3. Debt gets special treatment because interest is usually tax deductible. So CFA normally uses **after-tax cost of debt**. But common equity does not get this tax adjustment because dividends are not tax deductible.

4. If the company has **preferred stock**, it is a separate bucket. Do not hide it inside common equity. Preferred stock has its own required return and its own weight. Also, preferred dividends are generally **not tax deductible**, so don’t treat preferred stock like debt unless the question explicitly says so.

5. **Non-controlling interests:** If they appear as part of financing, they can also enter WACC separately.
6. The required return on capital investments is derived from investors’ required returns, **adjusted for the specific risks of the project**. So WACC is not automatically correct for every project. A riskier project needs a higher hurdle rate; a safer one may need lower.
7. Secured debt can make debt cost lower

8. In general, the more **stable**, **non-cyclical**, **predictable**, and **recurring** are a company's revenues and cash flows, the higher proportion of debt it can have in its capital structure. Eg: Walmart (regular cashflows and non-cyclicity), Adani (Huge amount of tangible assets for collateral and non-cyclicity).
9. Capital structure is also dependent on the growth stage, a company is in. During startup stage, debt is very expensive. Company usually raises money through equity or convertible debt. During growth phase the risk is relatively lower and collateralized debt can be raised as capital. During mature stage, company can afford higher debt financing including unsecured debt. ==Remember: Startup companies can raise **Convertible Debt**, Growth ones can raise **Secured Debt** and Mature Ones can afford **Unsecured Debt**==
10. **Top Down Factors** such as inflation, the real GDP growth rate, monetary policy, and exchange rates impact capital structure. High Inflation scenarios demand greater yeilds.

> [!ABSTRACT]- MEMORISE THESE FOR EFFICIENCY
> WACC (use market‑value weights):
>
> $$
> \mathrm{WACC} = w_d\, r_d\, (1 - T) + w_p\, r_p + w_e\, r_e
> $$
>
> Weights (market values):
>
> $$
> w_d = \frac{D}{D + P + E}, \quad w_p = \frac{P}{D + P + E}, \quad w_e = \frac{E}{D + P + E}
> $$
>
> Cost of equity (CAPM):
>
> $$
> r_e = R_f + \beta\,\big(\mathbb{E}[R_m] - R_f\big)
> $$
>
> Cost of equity (DDM):
>
> $$
> r_e = \frac{D_1}{P_0} + g
> $$
>
> Cost of preferred:
>
> $$
> r_p = \frac{D_p}{P_p}
> $$
>
> After‑tax cost of debt:
>
> $$
> r_d\,(1 - T)
> $$
>
> Unlevering and relevering beta:
>
> $$
> \beta_\text{unlevered} = \frac{\beta_\text{comparable}}{1 + (1 - T)\, \frac{D}{E}}
> $$
>
> $$
> \beta_\text{relevered} = \beta_\text{unlevered}\,\Big[1 + (1 - T)\, \frac{D}{E}\Big]
> $$
>
> Notation in simple language:
> - Debt: market value of debt (symbol D)
> - Preferred: market value of preferred stock (symbol P)
> - Equity: market value of common equity (symbol E)
> - Debt weight: share of debt in total funding (wd)
> - Preferred weight: share of preferred in total funding (wp)
> - Equity weight: share of equity in total funding (we)
> - Cost of debt: return lenders demand on new debt (rd)
> - Cost of preferred: return investors demand on preferred shares (rp)
> - Cost of equity: return shareholders demand on common equity (re)
> - Risk‑free rate: rate on default‑free securities in same currency (Rf)
> - Equity market risk premium: expected market return minus risk‑free (E[Rm] − Rf)
> - Beta: sensitivity of the stock/project to the overall market (β)
> - Next dividend: dividend expected next period (D1)
> - Current share price: today’s price per share (P0)
> - Growth rate: long‑run dividend growth (g)
> - Tax rate: company’s marginal tax rate (T)

11. Use market values for weights (`w_d, w_p, w_e`), ideally the firm’s stated target structure; otherwise estimate via current market weights, trend, or industry averages.
12. Use marginal costs: estimate the return required on new debt/equity issues, not historical averages.
13. International notes: add a country risk premium to the market risk premium for CAPM when relevant; adjust for currency consistency (inputs and cash flows in same currency).

> [!Question] NUMERICAL — Quick WACC
> Problem: Market values — Debt = 200, Equity = 300; tax rate = 30%; cost of debt = 6%; cost of equity = 12%. Compute the WACC.  
> Solution:  
> - Compute market weights:
> $$
> w_d = \frac{200}{200+300} = 0.4, \quad w_e = 0.6
> $$
> - Apply the WACC formula (no preferred):
> $$
> \mathrm{WACC} = w_d\, r_d\, (1-T) + w_e\, r_e
> $$
> - Substitute and compute:
> $$
> 0.4\cdot 0.06\cdot (1-0.30) + 0.6\cdot 0.12 = 0.0168 + 0.072 = 0.0888 \;\approx\; 8.9\%
> $$
> Explanation: Debt is adjusted for taxes because interest is tax‑deductible; equity has no tax shield.

> [!Question] NUMERICAL — Add preferred
> Problem: Market values — Debt = 200, Equity = 250, Preferred = 50; tax rate = 25%; cost of debt = 8%; cost of preferred = 7%; cost of equity = 13%. Compute the WACC.  
> Solution:  
> - Weights:
> $$
> w_d = \frac{200}{200+250+50} = 0.40,\quad w_p = \frac{50}{500} = 0.10,\quad w_e = \frac{250}{500} = 0.50
> $$
> - Apply and compute:
> $$
> \mathrm{WACC} = 0.40\cdot 0.08\cdot (1-0.25) + 0.10\cdot 0.07 + 0.50\cdot 0.13
> $$
> $$
> = 0.024 + 0.007 + 0.065 = 0.096 \;=\; 9.6\%
> $$
> Explanation: Only debt gets an after‑tax adjustment; preferred and common equity do not.

> [!Question] NUMERICAL — Cost of equity (CAPM)
> Problem: Risk‑free rate = 3%, beta = 1.2, market risk premium = 5%. Find the cost of equity.  
> Solution: Use CAPM to add the scaled risk premium to the risk‑free rate.
> $$
> r_e = R_f + \beta\,(\mathbb{E}[R_m] - R_f) = 0.03 + 1.2\times 0.05 = 0.09 = 9\%
> $$
> Explanation: A beta above 1 amplifies the market premium; here 1.2 adds 6% on top of the 3% risk‑free.

> [!Question] NUMERICAL — Cost of equity (DDM)
> Problem: Current price = 50, next dividend = 2, long‑run growth rate = 4%. Find the cost of equity.  
> Solution: Gordon growth model (dividend yield plus growth).
> $$
> r_e = \frac{D_1}{P_0} + g = \frac{2}{50} + 0.04 = 0.04 + 0.04 = 0.08 = 8\%
> $$
> Explanation: Valid for stable, perpetual growth; ensure g reflects long‑run fundamentals.

> [!Question] NUMERICAL — After‑tax debt cost
> Problem: Pre‑tax borrowing rate = 10%, tax rate = 25%. Find the after‑tax cost of debt.  
> Solution: Apply the tax shield to interest.
> $$
> r_d\,(1 - T) = 0.10\times(1-0.25) = 0.075 = 7.5\%
> $$
> Explanation: Interest reduces taxable income; the effective cost to the firm is lower by the tax rate.

> [!warning] Remember
> - Always match currency: if discounting USD cash flows, use a USD WACC (USD inputs).  
> - WACC uses market weights; book weights can materially misstate the hurdle rate on exam numericals.


#### FACTORS AFFECTING THE CAPITAL STRUCTURE

14. Think of capital structure as the answer to one question: **what kind of funding can this business safely carry without raising its WACC too much?**

15. Start with the balance sheet logic. A company does not choose debt and equity in a vacuum. The left side of the balance sheet shapes the right side. **==If the business owns long-term assets, it generally wants longer-term financing. If it funds long-term assets with fragile short-term money, it may survive in normal times but get squeezed when refinancing becomes difficult.==** So first instinct is not “more debt is good” or “less debt is safe.” The instinct is: **match the financing to the asset and cash-flow profile**.

16. Now look at the business model. A capital-intensive business needs a lot of assets: utilities, transport, real estate, natural resources, semiconductors. Look for clues like **low asset turnover**, **high capex-to-sales**, and **high net working capital-to-sales**. ==**These businesses often need more external financing simply because the machine is asset-heavy.**== 
17. Not every famous brand owns the heavy assets. A hotel brand may manage hotels without owning them. A chip designer may design chips while another company owns the fabrication plant. ==**Do not judge capital intensity by the product name; judge it by who actually owns the assets.**==

18. Then come leases. A lease is economically close to debt because the company receives an asset and commits to payments. **==If the asset is fungible and tangible, like aircraft, office space, vehicles, or data centers, leasing may be cheaper than unsecured borrowing because the asset itself works as collateral.==** But that logic weakens when the asset is highly specialized, remote, or has poor resale value. 

19. Now shift to capital-light businesses. These firms do not need much external capital because they do not own many fixed assets. They may run networks where users own the assets, they may collect cash upfront, they may have a short or even negative cash conversion cycle, or they may pay employees with stock. **==Stock compensation is still a form of equity financing, just coming through employees rather than a formal market issue.==**

20. Next, life cycle. A startup usually has minimal revenue, negative free cash flow, and high failure risk. So normal debt is hard to get. It usually relies on founders, employees, venture capital, leases, or convertible debt. A growth company has better visibility, but free cash flow may still be negative because growth consumes cash through marketing, capex, and working capital. That is a key trap: **profitable and high-growth does not mean free-cash-flow positive**. Growth can eat cash. Mature companies have slower but more predictable revenue, stable positive free cash flow, and therefore more debt capacity.

21. The debt type also changes with the life cycle. **==Startup: convertible debt or leases. Growth: more likely secured debt. Mature: more likely unsecured debt.==** 

22. Now cost of capital. Debt and equity costs are not set only by the company. They are set by markets. If sovereign rates rise, inflation rises, monetary policy tightens, exchange-rate risk increases, or recession risk rises, both debt and equity investors demand more return. Credit spreads widen especially for cyclical sectors because their cash flows fall hardest in recessions.

23. Industry matters too. The same macro event can help one industry and hurt another. Higher oil prices may improve credit spreads for oil producers but worsen the position of airlines because fuel is a major cost. 

24. Finally, issuer-specific risk. Stable, predictable, diversified revenues lower financing cost. High operating leverage raises risk because fixed costs make profits swing harder when revenue changes. High financial leverage and weak interest coverage raise risk because lenders worry about payment capacity. Strong collateral lowers debt cost if the assets are liquid, fungible, and recoverable.


#### MODIGLIANI MILLER PROPOSITIONS

> [!tip] MODIGLIANI MILLER PROPOSITIONS
> 
> 1. **MM I without taxes:** Capital structure does **not** change firm value because investors can create/undo leverage themselves, so financing choice only reallocates risk. In simple language, investors can themselves borrow / lend to give the firm equity cash.
>     
> 2. **MM II without taxes:** More debt makes **equity riskier**, so cost of equity rises because shareholders now absorb more volatility after fixed debt payments.
>     
> 3. **MM with taxes:** Debt increases firm value because interest is **tax deductible**, so the firm keeps more after-tax cash flow through the tax shield.

25. In the pure MM world, investors can undo company leverage themselves. That only works because they can borrow and lend at the **risk-free rate**, with no taxes, no transaction costs, no bankruptcy costs, equal information, and no agency problems. So if question says MM holds in the real world, that is wrong. MM is a clean benchmark, not reality.
26. MM’s base message is: **capital structure itself does not create value**. Firm value comes mainly from future cash flows. So if question says managers can increase value merely by swapping equity for debt, be careful. Under MM without taxes, that is false. Investors can create their own leverage, so company leverage does not matter.
27. Debt looks cheaper, so you expect WACC to fall. MM Proposition II says no. **As debt rises, equity becomes riskier, so the cost of equity rises enough to offset cheaper debt. WACC stays unchanged.**
28. When taxes enter, the answer changes. Interest is tax deductible, so debt creates a tax shield. Levered firm value becomes unlevered firm value plus tax rate times debt. Higher tax rate means bigger debt benefit. **==Taken mechanically, this implies 100 percent debt — but that is unrealistic because distress costs are still being ignored.==**
29. With taxes, cost of equity still rises with leverage, but less sharply because the tax shield softens the effect. In the formula, the leverage premium is multiplied by one minus tax rate. That is why taxable firms may see WACC fall as debt increases.
30. If two identical firms differ only by capital structure and trade at different values, investors sell the expensive one, buy the cheap one, and force values together. **==That is why MM says financing cannot be the main value driver.==**
31. With taxes, the tax shield does not make equity safer. Equity cost still rises with leverage, just more slowly because the leverage premium is reduced by one minus the tax rate. If tax rate is zero, the tax formula collapses back into the no-tax formula.

#### PECKING ORDER THEORY

32. Start with the problem: managers know more about the company than outside investors. So every financing choice becomes a signal. CFA is not asking, “Which financing is cheapest on paper?” CFA is asking, “Which financing creates the least suspicious signal?”

33. That is why the order starts with **internal funds**. Retained earnings do not need a public explanation, do not require selling underpriced securities, and do not tell the market much. **==So internal financing comes first.==**

34. **==If internal cash is not enough, the firm prefers debt, especially private debt before public debt.==** Debt is less information-sensitive than equity because lenders mainly care whether the firm can repay. But debt still sends a signal: management is confident enough to commit to interest and principal payments.

35. Equity comes last. Public equity issuance often looks bad because investors think, “Why are existing owners willing to share the upside now?” The hidden message may be: management thinks the stock is overvalued. That is why equity issuance, especially for acquisitions, can be interpreted negatively.

36. **Both debt and equity investors demand higher returns** when information asymmetry is high. Why? Equity investors fear overpriced shares, but debt investors also fear the company may be borrowing just before credit quality worsens. So don’t reduce pecking order to “equity has signaling risk.” Debt has signaling risk too; just less.
37. Second, signalling does not need to be intentional.  Suppose a SSD manufacturer increases a credit line after seeing promising growth in data centres. Even if they are not “trying” to signal, outsiders may read the action as confidence about future expansion needs.
38. **==Pecking order theory does not give an optimal debt ratio. Capital structure becomes the accumulated result of past financing needs.==** A firm may be highly levered not because debt is “optimal,” but because it repeatedly needed external financing after using internal cash.
39. If managers think shares are undervalued, they may avoid issuing equity and may even repurchase shares. So equity issuance and share repurchase can both be read as signals about management’s view of valuation.



> [!tip] LOOK AT THESE BEFORE EXAM
> FORMULAS YOU MUST KNOW
>
> WACC (use market-value target weights):
>
> $$
> \mathrm{WACC} = w_\text{debt}\, r_\text{debt}\, (1 - \text{tax rate}) + w_\text{pref}\, r_\text{pref} + w_\text{equity}\, r_\text{equity}
> $$
>
> Weights from market values:
>
> $$
> w_\text{debt} = \frac{\text{Debt}}{\text{Debt} + \text{Preferred} + \text{Equity}},\quad w_\text{pref} = \frac{\text{Preferred}}{\text{Debt} + \text{Preferred} + \text{Equity}},\quad w_\text{equity} = \frac{\text{Equity}}{\text{Debt} + \text{Preferred} + \text{Equity}}
> $$
>
> Cost of equity (CAPM):
>
> $$
> r_\text{equity} = \text{risk-free rate} + \beta\,\big(\text{market risk premium}\big)
> $$
>
> Cost of equity (DDM for stable payers):
>
> $$
> r_\text{equity} = \frac{\text{next dividend}}{\text{current price}} + \text{growth rate}
> $$
>
> Cost of preferred (perpetual):
>
> $$
> r_\text{pref} = \frac{\text{preferred dividend}}{\text{preferred price}}
> $$
>
> After-tax cost of debt (use marginal borrowing rate/YTM):
>
> $$
> r_\text{debt, after-tax} = r_\text{debt}\,(1 - \text{tax rate})
> $$
>
> Unlever and relever a comparable beta:
>
> $$
> \beta_\text{unlevered} = \frac{\beta_\text{comparable}}{1 + (1 - \text{tax rate})\, \dfrac{\text{Debt}}{\text{Equity}}},\qquad \beta_\text{relevered} = \beta_\text{unlevered}\,\Big[1 + (1 - \text{tax rate})\, \frac{\text{Debt}}{\text{Equity}}\Big]
> $$
>
> MM results (no taxes):
>
> $$
> r_\text{equity} = r_\text{assets} + \frac{\text{Debt}}{\text{Equity}}\,\big(r_\text{assets} - r_\text{debt}\big)\quad \text{and WACC is constant}
> $$
>
> With corporate taxes (simple view):
>
> $$
> \text{Value levered} = \text{Value unlevered} + (\text{tax rate})\times \text{Debt}
> $$
>
> Static trade-off intuition:
>
> $$
> \text{Value levered} \;=\; \text{Value unlevered} + (\text{tax rate})\times \text{Debt} - \text{PV(expected distress and agency costs)}
> $$
>
> ROIC identities:
>
> $$
> \text{ROIC} = \frac{\text{profit after tax}}{\text{average invested capital}} = (\text{after-tax margin})\times(\text{capital turnover})
> $$
>
> Cost of not taking a trade credit discount (annualized):
>
> $$
> \text{Cost} = \frac{\text{discount}}{1 - \text{discount}}\;\times\; \frac{365}{\text{net days} - \text{discount days}}
> $$
>
> BIG GOTCHAS (COMMON EXAM MISTAKES)
> - Use market-value, target weights; do not use book weights unless asked. Example: Book shows 50/50, but market values are Debt 80, Equity 120 → weights are 40/60, not 50/50.
> - Use marginal costs (current required returns), not historical averages. Example: Existing bonds at 4% but new debt prices at 7% → use 7% as cost of debt.
> - Only debt is tax-adjusted in WACC; preferred and equity are not tax-deductible. Example: Apply (1−tax rate) to debt term only; do not multiply r_pref or r_equity by (1−T).
> - Treat flotation costs as a cash outflow at time 0, not inside WACC. Example: Issue equity for 100 with 5% fees → model 95 cash in at t=0; don’t add 5% to WACC.
> - Match currency and inflation. Example: Discount INR cash flows with INR inputs (risk-free, premium, beta) and nominal INR WACC; don’t mix USD rates or real/nominal without adjusting.
> - Use a project/divisional WACC or comparable beta for projects. Example: A utility division is lower risk than the firm average → use divisional WACC, not firm-wide WACC.
> - Exclude financing flows from project cash flows; include working-capital changes and opportunity costs; ignore sunk costs. Example: Don’t subtract interest expense in project CFs; do include an initial inventory build and the release at the end.
> - DDM uses next dividend (not last). Preferred cost uses current price (not par) unless stated. Example: Last dividend 2, growth 4% → next dividend = 2.08; r_e = 2.08/P0 + 4%.
> - Equity issue often signals overvaluation; debt issue can signal confidence. Example: Announcing a large equity raise can raise r_e and lower price in the short run.
> - MM with taxes vs practice. Example: Taxes alone suggest more debt, but expected distress costs (e.g., customer loss, covenants) and ratings cap the optimal leverage.
> - EPS accretion/dilution is not value creation. Example: Borrowing to repurchase shares may raise EPS, but if the project NPV < 0 or risk rises, firm value can still fall.
>
> QUICK CHECKS
> - Do your weights sum to 1? Are you using market values?
> - Did you tax-adjust only debt? Did you use next dividend in DDM?
> - Are units consistent (percent vs decimal; currency; timing of cash flows)?
> - If a project is riskier than the firm, did you raise the hurdle appropriately?


### MODULE 20.1: FEATURES OF CORPORATE ISSUERS
###### Expected number of questions: 1
###### LOS 20.a: Compare the organizational forms of businesses.
###### LOS 20.b: Describe key features of corporate issuers.
###### LOS 20.c: Compare publicly and privately owned corporate issuers.

> [!ABSTRACT]- MEMORISE THESE FOR EFFICIENCY
> - Organizational forms: Sole proprietorship (simple, single tax, unlimited liability), Partnership (pass‑through tax; limited partners have limited liability; general partners do not), Corporation (limited liability, access to capital markets, double tax), LLC/LLP (limited liability with pass‑through tax; rules vary).
> - Public vs Private: Public = broad access to capital + high disclosure; Private = concentrated ownership, less disclosure, less liquidity.
> - Governance basics: Board sets strategy, oversees management, protects shareholders; management runs operations; fiduciary duties apply.

1. Organizational forms (pros and cons)
   - Sole proprietorship: easy to form, full control, single taxation; limited capital, no continuity, unlimited personal liability.
   - Partnership: more capital and skills; pass‑through taxation. General partners have unlimited liability; limited partners are shielded but have limited control; potential conflicts among partners.
   - Corporation: separate legal person; limited liability; perpetual life; easier transferability and capital raising (equity/debt markets). Costs: more regulation, disclosure, governance, and possible double taxation on profits/dividends.
   - Hybrids (LLC/LLP and similar): limited liability with pass‑through taxation; specifics depend on jurisdiction.

2. Key features of corporate issuers
   - Objective: maximize long‑term firm value subject to legal/ethical constraints and financial health (liquidity/solvency).
   - Separation of ownership and control: shareholders (owners) elect a board; board appoints management; align via incentives and oversight.
   - Capital decisions: investment (capex/M&A), financing (capital structure, target leverage), and payout (dividends/buybacks) policies.
   - Reporting and disclosure: financial statements, MD&A, risk factors, significant events; higher for public issuers.
   - Stakeholders and ESG: environmental (emissions/resource use), social (workforce/customers/community), governance (board structure/rights/controls) can affect access to capital and cost of capital.

3. Public vs private corporate issuers (compare/contrast)
   - Access to capital: Public tap listed equity and public debt; private rely on bank loans, private placements, venture/PE.
   - Ownership and control: Public ownership dispersed with potential agency issues; private ownership concentrated with tighter control.
   - Disclosure and oversight: Public face securities regulation, periodic reporting, and market scrutiny; private have lighter, negotiated disclosure.
   - Liquidity and valuation: Public shares are (usually) liquid with observable prices; private shares are illiquid with appraisal‑based values.
   - Cost/benefit trade‑off: Public status lowers capital cost and increases flexibility but raises compliance cost; private status lowers compliance and can lengthen horizon but can raise the cost of equity and limit flexibility.

> [!warning] Exam tip
> When comparing forms, focus on liability, taxation, continuity, and capital access. When comparing public vs private, hit access to capital, disclosure/liquidity, ownership/control, and cost of capital. Tie ESG/governance back to risk and financing costs.

### EPS AND SHARE STRUCTURE

#### Jargons and Core Definitions

1. What is Warrant: A warrant is an equity call option issued by the company; it gives the holder the right (not obligation) to purchase newly issued shares at the exercise price.
2. Basic EPS: (Net income − preferred dividends) ÷ weighted average ordinary shares.
3. Preferred dividend: Dividends to preferred shareholders are subtracted from net income when computing EPS because EPS is for common shareholders.
4. Diluted EPS: “EPS if all dilutive instruments became common stock.” Conceptually, Net income for common ÷ (actual shares + new shares that would be issued upon conversion/exercise, if dilutive).
5. Dilution: Instruments convertible into common can increase share count → EPS falls. EPS accretion/dilution alone is not value creation.
6. Stock split: A 2-for-1 split doubles the number of shares and halves the price; market cap unchanged (ignoring frictions).
7. Complex capital structure: Company has instruments potentially convertible into common stock (options, convertibles, etc.).

#### Weighted Average Shares Example

|                                                        |           |
| ------------------------------------------------------ | --------- |
| Shares outstanding on 1 January 2018                   | 1,000,000 |
| Shares issued on 1 April 2018                          | 200,000   |
| Shares repurchased (treasury shares) on 1 October 2018 | (100,000) |
| Shares outstanding on 31 December 2018                 | 1,100,000 |

Weighted average number of shares outstanding:

|                                                                                              |           |
| -------------------------------------------------------------------------------------------- | --------- |
| 1,000,000 × (3 months/12 months) =                                                           | 250,000   |
| 1,200,000 × (6 months/12 months) =                                                           | 600,000   |
| 1,100,000 × (3 months/12 months) =                                                           | 275,000   |
| Weighted average number of shares outstanding = (3/12) * 1 + (6/12) * 1.2 + (3/12) * 1.1<br> | 1,125,000 |
### Module 21.1: Stakeholders and ESG Factors


1. ROE = PAT / Average Equity
2. ESG factors are non-financial environmental, social, and governance issues that can materially affect a company’s operations, risk, and future cash flows; things that are purely financial or macro without an E, S, or G link are not ESG factors.
3. ESG factor materiality: ESG factors are material when they can have a substantial impact on a company’s operations, business model, financial results, or future cash flows, including through loss of customer goodwill, regulatory fines and judgments, stranded assets, litigation, cleanup costs, or governance failures that allow managers to exploit shareholders.
### MODULE 23.1: LIQUIDITY MEASURES AND MANAGEMENT


> [!abstract] MEMORISE THIS FOR EFFICIENCY
>  - **CCC = DIO + DSO - DPO**
>  - Suppliers offer payment terms in the form **a/b net c, which means a percentage discount of a if the invoice is paid within b days, otherwise full payment is due within c days.**


1. The cash conversion cycle (CCC) measures the time it takes for a company to convert its investments in inventory and other resources into cash inflows from sales. 

> [!TIP] HAMMER THIS INTO YOUR HEAD
> CCC = DIO + DSO - DPO

2. Lower CCC is better and can be artificially created
   -  **Delay paying suppliers** right before quarter-end ⟶ payables look high ⟶ CCC ↓  
   -  **Sell receivables to a bank (factoring)** just before reporting ⟶ receivables drop ⟶ CCC ↓
   -  **Ship inventory early to distributors** with return rights ⟶ inventory disappears on paper ⟶ CCC ↓
   -  **Avoid writing down old inventory** ⟶ inventory looks lower than reality ⟶ CCC ↓
   -  **Stop buying inventory** just before reporting ⟶ inventory temporarily low ⟶ CCC ↓
2. We can think of accounts payable as an implicit source of credit from suppliers (as opposed to explicit sources such as bank loans). **Suppliers offer payment terms in the form a/b net c, which means a percentage discount of a if the invoice is paid within b days, otherwise full payment is due within c days.** Forgoing the discount for prompt payment amounts to borrowing money from the supplier for (c – b) days.

### MODULE 23.2 EXPENSE RECOGNITION

1. **Match costs with revenues:** recognize COGS **and estimated warranty costs** in the **period of sale**, not when paid in reality.
2. Remember US GAAP loves 'CFO'. Interest Expense go into operating always. IFRS gives you a choice. You can put Interest in 'CFF' or in 'CFO'.
3. IFRS is cool with splitting R&D. Research (incl. early software work) **expensed**; development (incl. saleable & internal software) **capitalized if criteria met**.
4. GAAP is strict, BOTH research and development is expensed. No capitalization at all.
5. GAAP hates R&D—except software. Saleable software = **capitalize (like IFRS)**; internal software = **capitalize only after build starts**.
### MODULE 24.1: CAPITAL INVESTMENTS AND PROJECT MEASURES
###### Expected number of questions: 3
###### LOS: Describe types of capital investments. Describe the capital allocation process, calculate net present value (NPV), internal rate of return (IRR), and return on invested capital (ROIC), and contrast their use in capital allocation.

#CRITICAL_MODULE


> [!ABSTRACT]- MEMORISE THESE FOR EFFICIENCY
> - Return on Invested Capital (ROIC) = PAT / Capital
> - Capital Turnover =  Revenue / Capital
> - After-Tax Margin = PAT / REVENUE
> - For NPV on TI Calc. Enter **CF**s (using **↓**) then **NPV**. Enter I then ↓ then **CPT**. 
> - IRR > Reqd Rate of Return ⟶ Accept Project
> - For IRR,  Calculate NPV then press **IRR** then **CPT**


1. Imagine an airline that has to replace aircraft engines as they age. This is a **going-concern project** because it is essential for airline survival. **The airline uses match funding approach**, that is, long-term debt or leases aligned with the engine's life. ==Match funding because: An asset generates benefits over time. Financing has to be repaid over time. If these timelines don't align, cash-flow risk appears.== 

> [!warning] Remember
> Maintenance activity that **reduces costs** will be a going concern project

2. If DGCA forces airlines to replace the old engines then that is a **Regulatory/compliance project**. If Indigo invests to buy Airbus A320s for international routes, then that is a **Expansion Project.**
3. The capital allocation process is identifying and evaluating capital projects (i.e., projects where the cash flows to the firm will be received over a period longer than a year). 
4. Capital Allocation Process looks like: Ideation ⟶ Forecast CF / Analyze ⟶ Budgeting ⟶ Audit 
5. A project has a conventional cash flow pattern if the sign on the cash flows changes only once, else it is unconventional.
6. NPV is the discounted PV of all future cashflows, discounted by Reqd. Rate of Return. IRR is the rate that makes NPV = 0. Accept if NPV > 0 and accept if IRR > Reqd. rate of Return.
7. NPV and IRR are forward looking approaches because you are talking about cashflows that **will happen in future.**

> [!warning] Remember
> It is important to understand, how cashflows are **reinvested** in each approach. **Under IRR method, they are reinvested at IRR and under NPV they are reinvested at Reqd. rate of return.**  

8. IRR is the discount rate that makes NPV = 0. If cash flows **change sign more than once** (e.g., − + − or − + − +), the NPV equation becomes a higher-degree polynomial, which can have **multiple real roots**. Each root is an IRR. Cash flows: −100 (today), +230 (year 1), −132 (year 2)  NPV(r) = −100 + 230/(1+r) − 132/(1+r)� = 0  This quadratic has **two solutions** ⟶ **two IRRs**.

> [!TIP] HAMMER THIS INTO YOUR HEAD
> Practice this on TI Calculator. You should be very very comfortable with this
> Suppose your cashflow stream is -1000, 100 ... (10 times). Required rate of return is 10%. Calculate NPV and IRR. 
> **CF** ⇢ **CLR WORK** ⇢ C0=-1000 ⇢ **ENTER** **↓** C01=100 ⇢ **ENTER** ⇢ F01=10 ⇢ **ENTER** ⇢ **NPV** ⇢ I=10 ⇢ **CPT**
> This gives NPV = -385.543
> Now do **IRR** ⇢ **CPT**
> This gives IRR = 0.0

9. **Return on Invested Capital (ROIC) = PAT / Average Invested Capital**
10. Operating Margin After Tax / After Tax Margin (PAT per unit Revenue) = PAT / Sales 
11. Capital Turnover (Revenue per unit capital) = Sales / Average Invested Capital.
12. **ROIC = After Tax Margin $\times$ Capital Turnover**
13. ROIC is backward looking because you are talking about PAT and Capital Investment that has **already happened**
14. ROIC is aggregated over a firm (Total PAT / Total Capital). So **profitable projects can hide trashy projects**. ROIC is accounting method and tax jurisdiction dependent hence **not comparable** across firms. ROIC can be **volatile** because it backward looking.
### MODULE 24.2: CAPITAL ALLOCATION PRINCIPLES AND REAL OPTIONS
###### Expected number of questions: 1
###### Describe principles of capital allocation and common capital allocation pitfalls
1. Principles: put capital where it creates the most long‑term value, use a hurdle rate that matches the project’s risk, and run post‑completion reviews to check forecasts and improve accountability.
2. Governance: separate idea generation, evaluation, approval, and audit so no one group controls all steps. Block pet projects and avoid throwing good money after bad.
3. Hurdle rates: use a project/division‑specific WACC that reflects its risk. Do not use one firm‑wide rate for every project.
4. Cash‑flow discipline: use incremental after‑tax cash flows; ignore sunk costs; include opportunity costs and working‑capital changes; build terminal values carefully.
5. Common pitfalls: over‑optimistic forecasts; ignoring capacity limits; mixing nominal vs real or different currencies; using book (not market) weights; adding flotation costs into WACC instead of cash flows; ignoring real‑option flexibility.

> [!ABSTRACT]- MEMORISE THESE FOR EFFICIENCY
> Decision logic and real options:
>
> $$
> \text{Accept if}\;\; \mathrm{NPV}_{\text{project}} \ge 0\quad \text{(using an appropriate project hurdle rate)}
> $$
>
> $$
> \mathrm{NPV}_{\text{with option}} = \mathrm{NPV}_{\text{base}} + \text{Option value}
> $$
>
> Simple decision tree (state‑probability) valuation:
>
> $$
> \text{Expected NPV} = \sum_{i} p_i\, \mathrm{NPV}_i
> $$
>
> Notation in simple language:
> - Expected NPV: probability‑weighted average of NPVs across states
> - Option value: extra value from flexibility (to delay, expand, abandon, contract, or switch)
> - Probability p: likelihood for each scenario in a decision tree
> - Hurdle rate: discount rate appropriate for the project’s risk (divisional WACC)

6. Real options:
   - Option to delay (timing): wait for more information before investing when volatility/uncertainty is high.
   - Option to expand (growth): invest in a pilot now to keep the right to scale if early results are good.
   - Option to abandon (put): stop and salvage if things go poorly; raises project value by limiting downside.
   - Option to contract (scale‑down): reduce scope/capacity if demand is weak.
   - Option to switch (flexibility): switch inputs/outputs (e.g., fuel source) to lower exposure to shocks.
   - Option to stage (compound): invest in phases; each phase is a sequential option contingent on success.

> [!warning] Remember
> - Sunk costs are ignored; opportunity costs and working capital changes are included.  
> - Abandonment resembles a put option with exercise price equal to salvage or liquidation proceeds.  
> - Use decision trees for discrete, managerial flexibility; do not over‑engineer with Black–Scholes unless assumptions fit.

> [!Question] NUMERICAL — Abandonment option adds value
> Problem: A two‑year project costs 100 today and yields a single cash flow in two years that is either 140 (good) with probability 60% or 80 (bad) with probability 40%. Discount rate = 10% per year. Without flexibility, should the firm invest? If the firm can abandon at the end of Year 1 for a guaranteed salvage of 60, how does that change the decision?  
> Solution:  
> - Without flexibility (single payoff at Year 2):
> $$
> \text{Expected payoff at Year 2} = 0.6\cdot 140 + 0.4\cdot 80 = 112 \;\text{(currency units)}
> $$
> $$
> \mathrm{NPV}_{\text{base}} = \frac{112}{(1.10)^2} - 100 = \frac{112}{1.21} - 100 \approx -7.4
> $$
> Explanation: Negative expected NPV, so reject without flexibility.
>
> - With abandonment after Year 1: If prospects look bad at Year 1, abandon and take 60 instead of continuing to the low outcome. Model with a simple decision tree; assume the “bad” branch is revealed at Year 1 and leads to the low outcome if continued.
> $$
> \text{Value if good branch} = \frac{140}{(1.10)^2} \approx 115.7
> $$
> $$
> \text{Value if bad branch with abandon} = \frac{60}{1.10} \approx 54.5
> $$
> $$
> \text{Expected present value} = 0.6\cdot 115.7 + 0.4\cdot 54.5 \approx 91.7
> $$
> $$
> \mathrm{NPV}_{\text{with option}} = 91.7 - 100 \approx -8.3
> $$
> Explanation: In this setup the salvage is too small to offset the weak bad state; the option does not rescue the project. If the salvage were higher (e.g., 80), the option value would be larger and could turn NPV positive. Key idea: abandonment limits downside and can add material value depending on salvage and timing.

> [!Question] NUMERICAL — Timing option (wait vs invest now)
> Problem: Invest 100 today for an immediate project with present value 108 (using the correct hurdle rate). Alternatively, wait one year: with probability 50% the present value next year will be 132 (good), and with probability 50% it will be 88 (bad). Discount rate = 10% per year. Ignore competitive erosion while waiting. Should you invest now or wait?  
> Solution:  
> - Invest now:
> $$
> \mathrm{NPV}_{\text{now}} = 108 - 100 = 8
> $$
> - Wait one year and invest only in the good state (exercise the option to delay):
> $$
> \text{Expected PV today of waiting} = \frac{0.5\cdot 132}{1.10} + \frac{0.5\cdot 0}{1.10} = \frac{66}{1.10} = 60
> $$
> $$
> \mathrm{NPV}_{\text{wait}} = 60 - 0 \;\;(\text{no outlay today}) = 60
> $$
> Explanation: Waiting preserves the right to invest only in favorable states; here waiting dominates investing now because upside is kept and downside is avoided.

> [!Question] NUMERICAL — Expand option (pilot then scale)
> Problem: A pilot requires 20 today and yields at Year 1 either Strong (probability 40%) or Weak (probability 60%). If Strong, the firm may expand by investing 80 at Year 1 to get additional Year‑2 cash inflow of 120; if Weak, expansion destroys value and should be skipped. Discount rate = 10%. Pilot on its own has Year‑1 inflow of 25 in Strong and 18 in Weak. Should the firm do the pilot?  
> Solution:  
> - Value of expand decision at Year 1 in Strong:
> $$
> \text{NPV of expand leg at Year 1} = -80 + \frac{120}{1.10} = 29.1\;>\;0\;\Rightarrow\; \text{expand}
> $$
> - Present value today of Strong branch:
> $$
> \text{PV today (Strong)} = \frac{25}{1.10} + \frac{29.1}{1.10} = \frac{54.1}{1.10} = 49.2
> $$
> - Present value today of Weak branch (skip expansion):
> $$
> \text{PV today (Weak)} = \frac{18}{1.10} = 16.4
> $$
> - Expected PV today and NPV of pilot with option to expand:
> $$
> \text{Expected PV} = 0.4\cdot 49.2 + 0.6\cdot 16.4 = 29.68
> $$
> $$
> \mathrm{NPV} = 29.68 - 20 = 9.68\;>\;0\;\Rightarrow\; \text{do the pilot}
> $$
> Explanation: The right (not obligation) to expand adds value; evaluating the pilot without this option would understate its true NPV.

### MODULE 25.1: WEIGHTED-AVERAGE COST OF CAPITAL

###### Expected number of questions: 1
###### Explain factors affecting capital structure and the weighted-average cost of capital

1. In general, the more **stable**, **non-cyclical**, **predictable**, and **recurring** are a company's revenues and cash flows, the higher proportion of debt it can have in its capital structure. Eg: Walmart (regular cashflows and non-cyclicity), Adani (Huge amount of tangible assets for collateral and non-cyclicity).
2. Companies with low fixed operating costs can support larger debt. 
3. For raising additional debt: Interest Coverage Ratio = EBIT / Interest Expense ⟶ Higher the better. Debt to Equity Ratio ⟶ Lower the better. Debt to EBIT  ⟶ Lower the better.  
4. Capital structure is also dependent on the growth stage, a company is in. During startup stage, debt is very expensive. Company usually raises money through equity or convertible debt. During growth phase the risk is relatively lower and collateralized debt can be raised as capital. During mature stage, company can afford higher debt financing including unsecured debt. ==Remember: Startup companies can raise **Convertible Debt**, Growth ones can raise **Secured Debt** and Mature Ones can afford **Unsecured Debt**==
5. **Top Down Factors** such as inflation, the real GDP growth rate, monetary policy, and exchange rates impact capital structure. High Inflation scenarios demand greater yeilds.

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

6. Use market values for weights (`w_d, w_p, w_e`), ideally the firm’s stated target structure; otherwise estimate via current market weights, trend, or industry averages.
7. Use marginal costs: estimate the return required on new debt/equity issues, not historical averages.
8. Project and division adjustments: riskier-than-firm projects need a higher hurdle rate; consider project beta or a divisional WACC rather than the firm-wide WACC.
9. Flotation costs (exam tip): treat as an incremental cash outflow at t=0 for equity issuance; do not bake into WACC.
10. International notes: add a country risk premium to the market risk premium for CAPM when relevant; adjust for currency consistency (inputs and cash flows in same currency).

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

### MODULE 25.2: CAPITAL STRUCTURE THEORIES
###### Expected number of questions: 2
###### LOS: Explain the Modigliani–Miller propositions regarding capital structure.

1. Asymmetric information exists because managers have superior knowledge about future prospects vs shareholders/creditors. 
2. Higher when business is complex or financial reporting is opaque ⟶ investors face more uncertainty. Investors price this uncertainty as higher required returns on both debt and equity.    
3. Investors infer management's private information from financing choices (**signaling**). Issuing debt signals confidence: fixed interest obligations imply expected stable cash flows. Issuing equity signals pessimism: markets infer management thinks stock is overvalued. **Therefore, equity financing is penalized more heavily than debt under asymmetric information.**    
4. Agency costs of equity arise from conflicts between managers and shareholders. Managers without ownership stake don't fully bear costs of overpaying themselves or mismanaging risk (too safe or too reckless). Shareholders anticipate this conflict and impose controls (monitoring, incentives, governance). Even after controls, some conflict remains ⟶ net agency cost of equity.
5. Agency costs of equity are related to conflicts of interest between managers and owners. Managers who do not have a stake in the company do not bear the costs associated with excessive compensation or taking on too much (or too little) risk. **Because shareholders are aware of this conflict, they take steps to reduce these costs. The result is called the net agency cost of equity.**
6. **Free cash flow hypothesis: excess cash invites wasteful spending or self-serving projects by managers.**
7. **Use of Debt forces managers to be disciplined**, because commits cash to interest and principal payments, reducing free cash flow available for misuse.
8. Pecking order theory is built on asymmetric information between managers and investors. Financing choices act as signals about management's private view of firm value. - Internal funds are preferred: no external scrutiny, no signal.
9. An extraordinary general meeting (EGM) would most likely be called to address matters such as mergers, approvals, any amendments to corporate bylaws. 
10. According to best practices, an audit committee should be composed of Solely independent directors and one of them should be an expert in finance and accounting. 
11. Direct and indirect agency cost of management is an important topic to understand. If there is a fees paid directly in cash to ensure accountability, then it is direct. If this statement rings of opportunity cost such as gone opportunity because of risk aversion, then it is indirect.
12. The principal agent conflict in corporate governance happens because agent who has been hired to perform certain tasks usually has more information about the task, than the principal.
13. A **poison pill** works as follows: control requires >50% ownership; a hostile bidder accumulates shares; once a ~10–20% threshold is crossed, trigger alarm sounds and all other shareholders can buy discounted shares; the share count explodes, the bidder’s ownership % collapses, and the takeover becomes prohibitively expensive unless the board agrees.
14. Entrenchment means managers use their power to protect their jobs, not shareholder value.

> [!ABSTRACT]- MM core results (quick recall)
> - MM I (no taxes): Capital structure is irrelevant to firm value under idealized assumptions (no taxes/transaction/bankruptcy costs; homogeneous expectations; risk‑free borrowing/lending; no agency costs; investment policy independent of financing).
> - MM II (no taxes): As D/E rises, cost of equity increases linearly; WACC stays constant.
> - With taxes: Interest tax shield lowers WACC as leverage increases; without distress costs, value is maximized at very high (theoretical 100%) debt.

15. MM Proposition I — No Taxes (Capital structure irrelevance)
   - “Pie” intuition: operating earnings determine total pie; slicing between debt and equity does not change the total value when assumptions hold.

10. MM Proposition II — No Taxes (Cost of equity vs leverage)
    - Equity gets riskier as leverage increases; the cheaper cost of debt is exactly offset by a higher cost of equity, keeping WACC unchanged.
    - Relationship (no taxes): $r_e = r_0 + (D/E) × (r_0 − r_d)$.

11. MM With Corporate Taxes — Debt tax shield adds value
    - Interest is tax‑deductible while dividends are not, so debt creates a tax shield and reduces WACC. In the simple taxed world (ignoring distress and personal taxes), firm value is maximized at very high leverage.
    - Note on personal taxes (Miller view): differing investor tax rates on interest vs dividends can reduce the net advantage of debt.

12. Costs of Financial Distress — Why firms don’t lever to 100%
    - Expected costs rise with leverage and include: direct bankruptcy costs (legal/admin) and indirect costs (lost customers/suppliers/employees, foregone investment, distraction), plus agency costs of debt (conflicts with debtholders during distress).
    - Probability of distress increases with operating leverage, financial leverage, and weak governance/management.

13. Static Trade‑Off Theory — Balance tax shield vs distress
    - Firm value initially increases (WACC decreases) with more debt due to the tax shield, but beyond a point higher expected distress costs dominate.
    - Optimal/target leverage is where WACC is minimized and firm value maximized; depends on business risk, tax rate, asset collateral, governance, and industry norms.

14. Target Capital Structure — Practice and estimation
    - Definition: the long‑run mix of debt, preferred, and equity the firm aims to maintain; use market‑value weights when estimating WACC.
    - If not disclosed, estimate using: (i) current market weights, (ii) trend‑adjusted weights if leverage is moving, or (iii) industry averages. Managers often track book‑based constraints for ratings/covenants.

> [!warning] Exam tip
> “With taxes” does NOT automatically imply “use 100% debt” in practice — once expected financial distress and agency costs are considered, there is a value‑maximizing interior optimum (static trade‑off). Also, under MM II (no taxes), WACC stays flat even as r_e increases with leverage.

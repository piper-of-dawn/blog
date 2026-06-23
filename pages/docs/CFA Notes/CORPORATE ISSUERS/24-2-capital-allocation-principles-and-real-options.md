### MODULE 24.2: CAPITAL ALLOCATION PRINCIPLES AND REAL OPTIONS
###### LOS 24.c: Describe principles of capital allocation and common capital allocation pitfalls.
###### LOS 24.d: Describe types of real options relevant to capital investments.
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

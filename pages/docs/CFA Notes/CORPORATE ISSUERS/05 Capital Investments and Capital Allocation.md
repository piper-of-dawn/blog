### MODULE 24.1: CAPITAL INVESTMENTS AND CAPITAL ALLOCATION
###### LOS 24.a: Describe types of capital investments.
###### LOS 24.b: Describe the capital allocation process, calculate net present value (NPV), internal rate of return (IRR), and return on invested capital (ROIC), and contrast their use in capital allocation.

> [!tip] LOOK AT THESE BEFORE EXAM
> - Capital projects are long-term investments whose cash flows usually stretch beyond one year.
> - Four buckets: going concern, regulatory or compliance, expansion of existing business, and new lines of business or other.
> - **Accept if NPV is at least 0. Accept if IRR is at least the required rate of return.**
> - NPV uses after-tax cash flows discounted at the required rate of return. IRR is the discount rate that forces NPV to 0.
> - ROIC is a company-wide return measure, not a project-by-project cash-flow measure.
> - **A project costs EUR 50 million today and returns EUR 16 million for four years plus EUR 20 million in Year 5 at 10%. Find NPV.** Quick algorithm: discount each after-tax inflow, total them to EUR 63.136 million, subtract EUR 50 million, and get **EUR 13.136 million**.
> - **Using the same cash flows, find IRR.** Quick algorithm: set NPV to 0 and solve with the IRR function; the answer is **19.52%**, so it clears a 10% hurdle rate.
> - **After-tax operating profit is 24,395 and average invested capital is the average of long-term liabilities plus equity across two years. Find ROIC.** Quick algorithm: divide 24,395 by average invested capital and get **8.73%**.
> - Big gotcha: IRR quietly assumes interim cash flows are reinvested at the IRR itself; NPV assumes reinvestment at the required rate of return.
> - Big gotcha: if cash-flow signs change more than once, IRR can give multiple answers; in that case trust NPV.
> - Quick check: NPV is in currency, IRR is in percent, and ROIC is historical and accounting-based.

> [!abstract] MEMORISE
> $$
> \text{NPV} = \sum_{t=0}^{T} \frac{CF_t}{(1+r)^t}
> $$
>
> $$
> \sum_{t=0}^{T} \frac{CF_t}{(1+\text{IRR})^t} = 0
> $$
>
> $$
> \text{ROIC} = \frac{\text{After-tax operating profit}}{\text{Average invested capital}}
> $$
>
> $$
> \text{ROIC} = \text{After-tax operating profit margin} \times \text{Capital turnover}
> $$
>
> Notation in simple language:
> - $CF_t$: after-tax cash flow at time $t$
> - $r$: required rate of return on a similarly risky investment
> - Average invested capital: average of long-term liabilities and equity

1. Capital investments, also called capital projects, are investments with a life of one year or longer. What is a capital project: a long-lived business investment whose cash flows arrive over time, not just this year.
2. The first accounting thing to remember is that the spending usually lands on the balance sheet first as a long-term asset. Later, the cost is spread over time through depreciation or amortization.
3. Why is that spreading done: because the asset helps the business over several periods, so accounting tries to match cost with the years receiving the benefit.
4. On the cash flow statement, the cash spending is shown when it happens. On the balance sheet later, the asset sits at cost minus accumulated depreciation or amortization.
5. Do not think capital investment means only factories and machines. The source is explicit that digital capabilities and other intangible assets can also be capital investments.
6. Analysts care about capital investment because it reveals how management is trying to create value. You are basically watching where the company is placing its long-term bets.

##### TYPES OF CAPITAL INVESTMENTS

7. The source groups capital projects into four buckets: going concern, regulatory or compliance, expansion of existing business, and new lines of business or other. This classification is really about purpose, risk, and return.
8. Going concern projects keep the current business alive and functioning. What is a going concern project: spending made to continue current operations and maintain the existing size of the business.
9. Common going concern examples are replacing worn-out assets, maintaining information technology hardware and software, and making continuous efficiency improvements in existing facilities.
10. These projects are usually easier to evaluate because management already understands the existing business. The company is not jumping into the dark; it is mostly repeating something it already runs.
11. Going concern projects are usually lower risk. A utility replacing old power equipment is not trying to reinvent itself; it is trying to keep the machine running safely and efficiently.
12. Match funding matters here. What is match funding: financing a long-term asset with financing that lasts about as long as the asset's useful life.
13. Why is match funding used: it reduces financing risk because the firm is less likely to face a refinancing problem before the asset has finished generating benefits.
14. Think of it like this: if the asset pays you back slowly over 30 years but your debt comes due in 2 years, the project can still be good and yet your financing can blow up.

> [!warning] REMEMBER
> A maintenance project that cuts costs can still be a going concern project. The key idea is not glamour; the key idea is preserving and improving the current business.

15. Regulatory or compliance projects are different because they are not mainly driven by management discretion. They are required to satisfy rules, standards, supervisors, or laws.
16. What is a regulatory or compliance project: a capital project the firm undertakes because outside rules force it to meet a standard or face penalties or shutdown risk.
17. These projects often raise expenses without directly adding revenue. The company still does them because the alternative can be fines, legal trouble, reputational damage, or the loss of the right to operate.
18. The tricky part is that even costly compliance projects can create strategic value. Tough rules can become barriers to entry that protect incumbents from weaker competitors.
19. Firms with stronger financial flexibility may adopt new rules early. Why is early adoption used: it can reduce uncertainty, attract customers, and create an edge over slower rivals.
20. Once compliance costs rise, management must ask a brutal question: does this business still clear the minimum required return after those extra costs are included?

> [!example] DANSKE BANK AND THE PRICE OF NEGLECT
> Danske Bank's anti-money-laundering failures were not some sleepy back-office issue. Weak controls, governance failures, resignations, branch closure, arrests, and the threat of billions in fines turned compliance into a story about survival.
>
> That is the exam point: compliance spending may feel painful up front, but the bill for ignoring it can be far uglier and far more public.

21. Expansion projects try to increase the size of existing operations or extend the firm's current scope into adjacent products, services, regions, or markets.
22. What is an expansion project: a project that grows the existing business rather than merely maintaining it.
23. Expansion brings execution risk. The firm may struggle to source inputs, manage bottlenecks, or spend more than expected to win new customers.
24. Younger firms often fund expansion mostly with equity because the risk is high and cash flows are less established. More proven firms may use debt once investors trust the expansion playbook.
25. Expanding scope can look smart because it reuses existing capabilities for a different customer base. The hidden danger is complexity: more business lines and more competitors can make execution messy.

> [!example] SONY PUSHES PLAY HARDER
> Sony did not buy Bungie just to own another logo. It moved to deepen live game services and reach more players through a business it already understood.
>
> That is what expansion of existing business feels like in real life: not survival spending, but a deliberate push to widen the moat around the core engine.

26. New lines of business and other projects move furthest from the current business. They are usually the riskiest capital investments in the source.
27. What is a new-lines-of-business project: an investment in an activity outside or only minimally related to the firm's current business.
28. These projects often look like startup bets inside a mature company. Management may be exploring a new technology, a new business model, or a sector it does not yet understand well.
29. The major risks are unfamiliar operations and overpaying. You can hear the warning in the source: new growth stories are exciting, but the business may be strange territory.

> [!example] KIRIN WALKS OUT OF ITS OLD LANE
> Kirin was already a giant beverage name in Japan, then it invested heavily in Fancl, a cosmetics and dietary supplement company. This was not just "more of the same"; it was a move into a different market with new habits, customers, and execution risk.
>
> That is why this bucket carries the highest danger. The dream can be huge, but the map is unfamiliar.

30. Analysts should examine both the level and trend of expansion capital spending. Why is this done: it helps judge growth prospects, management priorities, and whether returns look sensible relative to alternatives.
31. A rough estimate of expansion capital spending can be made by taking total capital expenditures and subtracting estimated maintenance spending. The source says maintenance spending is often approximated by depreciation and amortization.

##### CAPITAL ALLOCATION PROCESS

32. Capital allocation is the process management and the board use to make capital investment and return decisions. What is capital allocation: deciding where the firm's scarce capital should go.
33. The core goal is not just "find a profitable project." The goal is to earn risk-adjusted returns greater than investors could earn elsewhere on similarly risky opportunities.
34. The source says this process resembles investment portfolio construction, but with more granular detail and more proprietary, non-public information.
35. Step one is idea generation. Good ideas can come from anywhere, but management needs a strong grip on the competitive environment, current operations, capabilities, and positioning.
36. Step two is investment analysis. How is investment analysis done: forecast the amount, timing, duration, and volatility of expected cash flows, then test whether the project is a wise use of capital.
37. Step three is planning and prioritization. Management now chooses the mix of projects that creates the most value on a risk-adjusted basis, not just the projects that look attractive one by one.
38. This is where many students make the beginner mistake. A project can look fine in isolation and still lose when compared with other projects, existing operations, or financing constraints.
39. When value-creating opportunities are exhausted, the source says remaining capital should be returned to shareholders. If management cannot beat the shareholders' outside opportunities, it should stop pretending.
40. Step four is monitoring and post-investment review. Why is this done: to test assumptions, expose systematic errors, enforce discipline, and generate better future ideas.
41. Post-investment review also helps management scale up strong areas and scale down weak areas. That feedback loop is part of the capital allocation process, not an optional afterthought.

##### NET PRESENT VALUE

42. Net present value, or NPV, is the present value of expected future cash inflows minus the investment's costs. What is present value: today's value of future cash after discounting for time and risk.
43. The required rate of return is the rate investors could earn on a similarly risky investment. Why is it used: it captures opportunity cost, so a project must beat real alternatives, not a fantasy hurdle.
44. NPV is measured in currency, not in percent. That matters because NPV tells you how much shareholder wealth the project adds or destroys in money terms.
45. If NPV is positive, the project increases wealth. If NPV is negative, it destroys wealth. If NPV is exactly zero, it barely clears the hurdle and leaves no room for forecast error.
46. The decision rule is straightforward: invest if NPV is at least 0. The source still warns that this is usually necessary but not always sufficient because other strategic considerations can matter.
47. Unconventional cash-flow patterns matter. What is an unconventional cash-flow pattern: a pattern where the sign of cash flows changes more than once instead of only once.
48. A project can require more spending after inception, not just at time 0. In those cases, you still use NPV, but the timing of each cash flow has to be handled carefully.

> [!question] NPV NUMERICAL
> Problem: Gerhardt Corporation pays EUR 50 million today and expects after-tax cash inflows of EUR 16 million in Years 1 to 4 and EUR 20 million in Year 5. Required rate of return is 10%. Find NPV.
>
> Solution: Discount each inflow at 10%, add the present values to get EUR 63.136 million, then subtract the EUR 50 million outlay.
>
> $$
> \text{NPV} = -50 + \frac{16}{1.10} + \frac{16}{1.10^2} + \frac{16}{1.10^3} + \frac{16}{1.10^4} + \frac{20}{1.10^5} = 13.136
> $$
>
> Explanation: The project adds EUR 13.136 million of present value, so it should be accepted.

49. For unevenly spaced cash flows, the source points to tools like XNPV because ordinary NPV functions assume evenly spaced periods and treat the first listed cash flow as time 1.
50. That spreadsheet detail is easy to miss in a rush. If cash flows do not arrive at equal intervals, your formula choice can quietly distort the answer.

##### INTERNAL RATE OF RETURN

51. Internal rate of return, or IRR, is the discount rate that makes NPV equal to zero. What is IRR: the break-even rate of return implied by the project's own cash flows.
52. The decision rule is to invest if IRR is at least the required rate of return. This is why the required rate of return is often called the hurdle rate.
53. Students love IRR because it feels intuitive as a percentage. The source still says NPV is the more theoretically sound criterion.
54. The key hidden assumption is reinvestment. Why is IRR tricky: it assumes interim cash flows are reinvested at the IRR itself, which may be unrealistic.
55. NPV instead assumes reinvestment at the required rate of return. The source calls that assumption more economically realistic in many cases.

> [!warning] REINVESTMENT TRAP
> Under IRR, interim cash flows are assumed to earn the IRR. Under NPV, interim cash flows are assumed to earn the required rate of return. That single difference is an exam favorite.

> [!question] IRR NUMERICAL
> Problem: Use the same Gerhardt cash flows of EUR 50 million today, EUR 16 million in Years 1 to 4, and EUR 20 million in Year 5. Find IRR.
>
> Solution: Solve for the discount rate that makes NPV equal to 0.
>
> $$
> 0 = -50 + \frac{16}{(1+\text{IRR})} + \frac{16}{(1+\text{IRR})^2} + \frac{16}{(1+\text{IRR})^3} + \frac{16}{(1+\text{IRR})^4} + \frac{20}{(1+\text{IRR})^5}
> $$
>
> Explanation: The answer is **19.52%**. Since 19.52% is above the 10% hurdle rate, the project should be accepted.

56. If cash flows are not evenly spaced, the source points to XIRR rather than the ordinary IRR function. Again, the issue is timing accuracy.
57. Multiple IRRs can exist when cash-flow signs change more than once. That is not a minor quirk; it is a direct reason to prefer NPV in such cases.
58. Imagine a project with a negative outlay, then a big positive inflow, then another negative outflow later. That pattern can produce more than one IRR solution.
59. The source gives a simple example with cash flows of -1,000, +5,000, and -6,000 that produces IRRs of 100% and 200%. Same project, two IRRs, so IRR loses credibility there.
60. In mutually exclusive projects, choose the project with the higher NPV, not automatically the higher IRR. IRR tells you rate; NPV tells you wealth added.

##### RETURN ON INVESTED CAPITAL

61. External analysts usually cannot audit management's project-level NPV or IRR calculations, because they do not see the granular internal project data.
62. That is why ROIC matters. What is ROIC: a company-wide profitability measure that compares after-tax operating profit with the capital invested in the business.
63. ROIC is also known as return on capital employed. In the source, it is measured per year using an annual after-tax profit measure.
64. Average invested capital is built from long-term liabilities and equity. The source explicitly excludes working capital from this denominator.
65. Why is working capital excluded: because the denominator is meant to capture the long-term capital invested in the business.
66. ROIC is valuable because analysts can calculate it from consolidated financial statements. That makes it practical in a way project-level NPV and IRR often are not.
67. ROIC can also be decomposed into after-tax operating profit margin times capital turnover. That gives you two routes to improvement: better margins or faster turnover.
68. What is capital turnover: annual sales generated per unit of average invested capital.
69. The decomposition gives a useful intuition. A high-margin company can still have weak ROIC if its capital is tied up inefficiently, while a lower-margin company can earn strong ROIC if turnover is high.

> [!question] ROIC NUMERICAL
> Problem: A company reports after-tax operating profit of 24,395 in Year 2. End-of-Year 1 long-term debt, share capital, and retained earnings are 112,257, 15,688, and 148,442. End-of-Year 2 values are 106,597, 15,688, and 159,995. Find ROIC.
>
> Solution: First average invested capital, then divide after-tax operating profit by that average.
>
> $$
> \text{Average invested capital} = \frac{(112,257 + 15,688 + 148,442) + (106,597 + 15,688 + 159,995)}{2}
> $$
>
> $$
> \text{ROIC} = \frac{24,395}{279,333.5} = 8.73\%
> $$
>
> Explanation: The firm earned 8.73% on the long-term capital invested in the business during the year.

70. ROIC can be compared with investors' required rate of return. If ROIC stays above that required return over time, the firm is creating value.
71. If ROIC stays below the required return, investors could have done better elsewhere. The source says management should then improve margins or turnover, dispose of weak assets, return capital, or find better opportunities.
72. ROIC should be compared to a required return relevant for both debt and equity investors, not just equity. Equity alone would overstate the benchmark because debt is less risky.
73. ROIC is not perfect. It is accounting-based, not cash-based, so operating profit can differ materially from cash flow.
74. ROIC is also backward looking and can be volatile year to year. A strong project may take time to show up as an attractive aggregate return.
75. Because ROIC is highly aggregated, it can hide ugly business areas inside a decent overall number. Good segments can cover up bad segments, and bad segments can dilute great ones.
76. One final limitation is measurement disagreement. The source warns that practitioners differ on whether to exclude excess cash, intangible assets, or some long-term liabilities from invested capital.

> [!tip] QUICK CHECKS
> - NPV and IRR are project tools built from expected after-tax cash flows.
> - ROIC is a firm-level tool built from accounting data that analysts can actually observe.
> - Use NPV when cash-flow signs change more than once.
> - If two mutually exclusive projects conflict, the higher NPV wins.
> - If management cannot earn above the required return, capital should go back to shareholders.

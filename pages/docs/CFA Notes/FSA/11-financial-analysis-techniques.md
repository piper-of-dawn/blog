### MODULE 11: FINANCIAL ANALYSIS TECHNIQUES

> [!info] HOW TO READ THIS MODULE
> Ratios are compression tools, not magic truth machines.
> The learning outcomes are: use analytical tools, calculate activity, liquidity, solvency, and profitability ratios, connect ratios, apply DuPont analysis, use industry-specific ratios, and model earnings.
> Always ask: compared with what, and for what business model?

#### Introduction to Financial Ratios

1. Financial analysis starts with a problem: raw statements are too messy to compare, so you first adjust them for your purpose → that makes the numbers usable → but adjusted numbers still do not explain themselves → so the next step is to pass them through tools like ratios, common-size statements, graphs, and regression analysis (a method that estimates how one variable moves with another).

2. Ratios come first because they compress two numbers into one relationship → that helps you project earnings and cash flow, judge flexibility, assess management, track change, and compare firms → but a ratio by itself is weak because different accounting methods, mixed-industry firms, and shifting business conditions distort the comparison → so a ratio only tells you where to look next, not what the final answer is.

3. Once ratios tell you where the tension is, common-size statements show you exactly where it sits inside the accounts → a vertical balance sheet turns every item into a share of total assets, and a vertical income statement turns every item into a share of sales → but this still has a limit because percentages reveal pattern, not cause → so you use common-size analysis to separate “this changed” from “why it changed,” which pushes you into deeper investigation.

4. If you want the pattern to become even easier to see, you move from percentages to pictures and statistical links → graphs highlight composition shifts over time, and regression analysis (a method that links variables for forecasting) helps estimate outputs like sales from inputs like Gross Domestic Product (GDP) → but neither a graph nor a regression proves the business reason behind the movement → so they work best as early warning systems that tell you which line items deserve real analysis.

5. Put it together with the PDF’s example: net profit margin rose about 5% in 20X6, but cost of goods sold improved only 0.48% and Selling, General, and Administrative expense (SG&A) improved only about 0.5% → that pushes you to the next layer, where common-size analysis shows most of the jump came from lower amortization and lower interest and other debt expense → but lower amortization is non-cash and lower interest may not last → so the correct conclusion is not “profitability is permanently better,” but “you now know exactly which items must be tested before trusting future cash flow.”

#### Turnover and Liquidity Ratios

> [!WARNING] Remember
> To memorise all the ratios and **most importantly their implications**



> [!NOTE] MEMORISE THIS FOR EFFICIENCY
> 
> **TURNOVER RATIOS**
> 
> INVENTORY TURNOVER = REVENUE / AVERAGE INVENTORY
> AR TURNOVER = REVENUE / AVERAGE AR
> AP TURNOVER = COGS / AVERAGE AP
> DOI = 365 / INVENTORY TURNOVER
> DSO = 365 / AR TURNOVER
> DPO = 365 / AP TURNOVER
> CCC = DIO + DSO - DPO
> 
> **LIQUIDITY RATIOS**
> CR = CA / CL
> CASH RATIO = (CASH + MARKETABLE SECURITIES) / CL
> QUICK RATIO = (CASH + AR + MARKETABLE SECURITIES) / CL
> DEFENSIVE INTERVAL RATIO = (CASH + AR + MARKETABLE SECURITIES) / DAILY OPERATING EXPENSES

1. Turnover means how quickly something is replaced or replenished, inventory turnover ratio (ITR) would be COGS / Avg. Inventory, AR turnover (ART) would be Sales / Avg. AR, AP turnover would be COGS / Avg. AP. So think intuitively, for one unit of inventory, I have ITR units of COGS, so my inventory gets replenished ITR times. 

> [!Danger] DO NOT MAKE THIS MISTAKE
> ITR is COGS / Avg Inventory, APR is COGS / Avg. AP, ART is Sale / Avg AR. 

2. Divide any turnover ratio by 365 and you get Days of that thing. For example, Days of Inventory (DIO) = 365 / ITR, Days of AP (DPO) = 365 / APR, Days Sales Outstanding (DSO) = 365 / ART
3. JIT maufacturing makes ITR go very high often unusable especially for software companies.
4. Current Ratio =  Current Assets / Current Liabilities. In liquidity ratios, the denominator will usually be CL. 

###### HOW TO GAME CURRENT RATIO?
- Have aggressive sales on credit (AR goes up, CA goes up)
- Do not pay creditors (AP goes down, CL goes down)
- Sell a fixed asset. (Cash goes up, CA goes up)
- Take a long term loan (Cash goes up, CA goes up; Long term debt goes up, CL does not change)
- Issue shares (Cash goes up, CA goes up; Equity goes up, CL does not change)

4. Cash Ratio =  (Cash + Marketable Securities) / Current Liabilities. Marketable Securities are anything that you can quickly sell and generate cash. 
5. Quick Ratio =  (Cash + Marketable Securities + AR) / Current Liabilities. 
6. Cash Conversion Cycle (CCC) = DSO + DIO - DPO. Assets are plus (Inventory and AR), Liability (AP) is minus. It measures how quickly inventory turns into cash. You can crank this up by aggressively demanding payments, not paying your suppliers. If it is negative then you require short term financing to cover the period. If it is positive, then you are sitting on cash that can be used in other parts of business. You can afford (CA < CL).
7. The quick ratio reflects the fact that certain current assets—such as prepaid expenses, some taxes, and employee-related prepayments—represent costs of the current period that have been paid in advance and cannot usually be converted back into cash.

#### Solvency and Profitability Ratios

8. Debt to Equity ratio = Total Debt / Total Shareholder Equity. All interest bearing instruments **except leases** are part of total debt. If question is silent, treat Preference shares as Total Shareholder Equity.
9. Debt to Capital Ratio = Total Debt / (Total Debt + Total Shareholder Equity)
10. Debt to Asset Ratio = Total Debt / Total Assets
11. Debt to EBITDA Ratio = Total Debt / EBITDA
12. Financial Leverage = Avg Total Assets / Avg Total Equity. *How much of shareholder equity has been used to finance the assets*
13. Interest Coverage = EBIT / Interest Payments **(Always EBIT, not EBITDA,  not PBT, and not PAT)**. Suppose I earn (EBIT) 100 and I have to pay 10 as interest, I can cover interest 10 times. 

> [!danger] DEBT ALWAYS MEANS TOTAL DEBT
> 
> Debt to Equity Ratio = (Long Term Debt + Short Term Debt) / Total Shareholder Equity
> 
> Total Shareholder Equity = Common Stock + Preference Shares (if question states that)


> [!danger] RETURN ON ASSETS
> 
> ALWAYS ADD BACK INTEREST AFTER TAX TO NET INCOME TO CALCULATE ROA
> 
> ROA = Net Income + Interest Expense (1-Tax) / Avg Total Assets
> 
> Interest is tax deductible. So we add back interest after adjusting for tax.
> 
> 


> [!WARNING] Remember
> Any kind of margin is always calculated on Revenue
14. Margins are basically common-size income statement items.  
    CFA can ask this conceptually: return-on-sales ratios express income statement subtotals as a percentage of revenue. So gross margin, operating margin, pretax margin, and net margin are not random ratios; they are common-size income statement lines.  
15. Operating margin: be careful with EBIT.  
    Some analysts use EBIT as a shortcut for operating income, but strictly EBIT may include non-operating items such as dividends received or gains/losses on investments. So consistency matters.  
16. Gross margin is competition-sensitive.  
    Higher gross margin can mean pricing power, brand strength, quality, technology, or cost advantage. But competition limits pricing power, so gross margins are usually inversely related to competition.  
17. Pretax margin is where leverage enters profitability.  
    Pretax margin reflects interest expense, so it captures the effect of financial leverage. A fall in pretax margin with stable operating margin may mean debt cost increased, not that operations worsened.  
18. Non-operating income can fake margin improvement.  
    If pretax margin rises mainly because of non-operating income, ask whether the company deliberately changed its business focus and whether that income will continue.  
19. Net margin should often be adjusted.  
    Net income includes recurring and non-recurring components. For future profitability, CFA expects adjusted net income, not blindly reported net income.
20. 6. ROE includes all equity unless specified.  
    CFA says ROE measures return on equity capital including minority equity, preferred equity, and common equity. If they ask return on common equity, then subtract preferred dividends and divide by average common equity.
##### DUPONT ANALYSIS

7. Dupont Analysis breaks ROE into its drivers.

> [!NOTE] MEMORISE THIS FOR EFFICIENCY
> #memorise TIMEL (Tax Interest Margin Efficiency Leverage)
> ROE = PAT Margin × Asset Turnover × Financial Leverage
> ROE = ROA × Financial Leverage
> ROA = PAT / Avg Total Assets
> Asset Turnover = Revenue / Avg Total Assets
> PAT Margin = PAT / Revenue
> 
> Financial Leverage = Avg Total Assets / Avg Total Equity


NET INCOME MARGIN = EAT / REVENUE
Tax Burden = EBT / EAT
Interest Burden = EBT / EBIT 
EBIT Margin = EBIT / Sales 

$$ \boxed {\mathrm{ROE} = \frac{\text{EAT}}{\text{EBT}} \times \frac{\text{EBT}}{\text{EBIT}} \times \frac{\text{EBIT}}{\text{Sales}} \times \frac{\text{Sales}}{\text{Avg. Assets}} \times \frac{\text{Avg. Assets}}{\text{Avg. Equity}}} $$

##### INDUSTRY SPECIFIC RATIOS
8. Net income per employee and sales per employee are used in the analysis and valuation of service and consulting companies and software companies which usually have intangible assets such as employee skills. Steam has a $3.5 million to over $10 million in profit per employee.
9. For Walmart, average revenue per square foot is the metric.
10. For Spotify, average revenue per user is the metric.

#### DuPont Analysis

> [!abstract] MEMORISE
> - ROE has no meaning on its own → you must split it into drivers → DuPont does exactly this by writing ROE as a product of simpler ratios.
> - Two-way: **ROE = ROA × Leverage**. Three-way: **ROE = Net profit margin × Total asset turnover × Leverage**. Five-way: **ROE = Tax burden × Interest burden × EBIT margin × Total asset turnover × Leverage**.
> - Leverage ratio has a floor of **1.0** (all-equity firm), never zero.
> - Tax burden = 1 − average tax rate. Higher tax burden → company keeps more of its pretax profit.
> - Interest burden = EBT / EBIT. Higher borrowing cost → lower interest burden → lower ROE.
> - Leverage helps ROE only when the firm borrows at a rate **below** what it earns on the borrowed funds; otherwise leverage drags ROE down.

> [!tip] LOOK BEFORE EXAM
> 
> **EF PEF TIMEL:**
> 
> Two-way (EF) → isolates *operating efficiency vs. financing*.
> Three-way (PEF) → isolates *profitability vs. efficiency vs. financing*.
> Five-way (TIMEL) → isolates *taxes, interest, operating margin, efficiency, leverage* — this is the Bloomberg-style decomposition.

1. ROE alone tells you *how much* return equity holders earned → but it does not tell you *why* → DuPont splits ROE into component ratios so that each slice maps to a distinct driver (efficiency, profitability, taxes, interest, leverage) → but the decomposition is an algebraic identity, not causation → so DuPont tells you *where* the change came from, not *whether* it will persist.

2. Start from the definition and multiply by a clever "1":

$$ \text{ROE} = \frac{\text{Net income}}{\text{Avg. shareholders' equity}} = \frac{\text{Net income}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. shareholders' equity}} $$

$$ \boxed{\text{ROE} = \text{ROA} \times \text{Leverage}} $$

> [!tip] Notation in simple language
> - ROA = Net income / Average total assets → return generated per unit of assets.
> - Leverage = Average total assets / Average shareholders' equity → how many dollars of assets are supported by each dollar of equity.
> - All-equity firm → assets = equity → leverage = 1.0 → ROE = ROA.

3. Push one layer further by splitting ROA into margin × turnover:

$$ \text{ROE} = \frac{\text{Net income}}{\text{Revenue}} \times \frac{\text{Revenue}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. shareholders' equity}} $$

$$ \boxed{\text{ROE} = \text{Net profit margin} \times \text{Total asset turnover} \times \text{Leverage}} $$

> [!tip] Notation in simple language
> - Net profit margin = Net income / Revenue → profitability per unit of sales.
> - Total asset turnover = Revenue / Average total assets → how hard the assets are working.
> - Leverage = Average total assets / Average shareholders' equity → solvency dimension.

4. Split net profit margin once more to separate the effect of taxes, interest, and operating profitability:

$$ \boxed{\text{ROE} = \frac{\text{Net income}}{\text{EBT}} \times \frac{\text{EBT}}{\text{EBIT}} \times \frac{\text{EBIT}}{\text{Revenue}} \times \frac{\text{Revenue}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. shareholders' equity}} } $$

> [!tip] Notation in simple language
> - Tax burden = Net income / EBT = 1 − average tax rate → fraction of pretax profit retained after tax.
> - Interest burden = EBT / EBIT → fraction of operating profit left after interest expense.
> - EBIT margin = EBIT / Revenue → operating profitability per unit of sales.
> - Total asset turnover = Revenue / Average total assets → efficiency.
> - Leverage = Average total assets / Average shareholders' equity → financing choice.

5. Leverage is a two-edged sword → increasing leverage multiplies ROE when ROA is positive and the firm borrows below its marginal return on invested funds → but if borrowing cost exceeds the return earned on the borrowed money, extra leverage *depresses* ROA and ROE falls as leverage rises → so leverage is not "free return," it is a magnifier of whatever ROA already exists.

Reliance Jio took on massive debt at launch, but its network assets earn more than its cost of debt, so leverage multiplied the equity return. Vodafone Idea carries over INR 2 lakh crore of net debt on a loss-making operation, so each extra rupee of leverage just magnifies the loss per rupee of equity. Same "company took on debt" headline, opposite effect — DuPont is where the difference shows up.

6. Tax burden and interest burden both sit between 0 and 1 → a *fall* in tax burden means the firm paid a higher average tax rate (kept less pretax profit) → a *fall* in interest burden means interest expense ate a bigger share of operating profit → both show up as a drop in net profit margin in the three-way form, but the five-way form tells you *which* of the two caused it.

Infosys historically earned tax-exempt profits inside Special Economic Zones — when those holidays expire, its tax burden (net income divided by earnings before tax) drops even though the operating business is unchanged. Tata Steel carries heavy debt from blast-furnace spending and the Corus acquisition, so a rate rise or a rating slip pushes its interest burden (earnings before tax divided by earnings before interest and tax) down instead. Same "margin fell" headline, but only the five-way DuPont tells you whether it was the tax authority or the bond market.

7. Use DuPont to compare firms or to trace a single firm's trend → if two firms have the same ROE but very different decompositions (one via margin, one via leverage), their risk profiles are not the same → leverage-driven ROE is more fragile because it depends on continued access to debt at a favourable rate.

Walmart runs on a net profit margin of only 2–3% but spins its inventory hard enough to hit a total asset turnover around 2.5×, with little financial leverage — its return on equity comes from operating efficiency. HDFC Bank runs on a thin interest margin with structural leverage of roughly 7–10× because deposits sit against a small sliver of equity — its return on equity comes from leverage by regulatory design. Two similar-looking return-on-equity numbers, but Walmart's survives a credit cycle and the bank's does not.

> [!warning] COMMON TRAP
> Leverage ratio is **Assets / Equity**, not Debt / Equity. For an all-equity firm it equals **1.0**, never 0. A firm with debt always has leverage > 1.

> [!info] WHAT EACH DUPONT TERM ACTUALLY IS 
> Picture a bucket of money. Revenue comes in at the top. By the time it reaches the equity holders at the bottom, it has passed through several leaks and one magnifier. DuPont just names each one.
> 
> Imagine a shop called **Anna's Bakery**. She sells USD 1,000 worth of bread this year.
> 
> - **EBIT margin = EBIT / Revenue.** Out of that USD 1,000 of sales, how much is left after paying bakers, flour, rent, and electricity? Say USD 100. Her EBIT margin is 10%. This is the pure *operating* skill of the business — before the bank gets paid, before the taxman gets paid. It answers: **"Is the core business any good?"**
> 
> - **Interest burden = EBT / EBIT.** Anna borrowed money to buy her ovens. She owes USD 10 of interest. EBT = 100 − 10 = 90. Interest burden = 90/100 = 0.90. The number is **how much of operating profit she *keeps* after the bank's cut.** 0.90 means the bank takes 10%. If Anna had no debt, interest burden would be 1.0. If she borrowed too much and interest ate half her profit, it would be 0.50. **Higher is better.** (This is the bit people flip — it is a "kept" fraction, not a "cost" fraction.)
> 
> - **Tax burden = Net income / EBT.** The taxman takes 30% of the USD 90, leaving USD 63. Tax burden = 63/90 = 0.70. Same idea: **how much she *keeps* after tax.** 0.70 means she keeps 70 cents of every pretax dollar. A 0% tax regime would give tax burden = 1.0. **Higher is better.**
> 
> - **Total asset turnover = Revenue / Avg. total assets.** Anna owns USD 500 in ovens, mixers, and van. She generated USD 1,000 of sales from USD 500 of assets → turnover = 2.0. **This measures how hard the assets sweat.** A grocery chain has turnover around 2–4 (assets spin fast, tiny margin). A luxury hotel has turnover around 0.3 (huge real estate, low sales per unit of asset). Neither is "good" or "bad" — it is a business model fingerprint.
> 
> - **Leverage = Avg. total assets / Avg. shareholders' equity.** Anna's USD 500 of assets is funded by USD 250 of her own equity and USD 250 of bank debt. Leverage = 500/250 = 2.0. **This is the magnifier.** Every rupee of equity controls two rupees of assets. Leverage cannot be less than 1.0 — even an all-equity firm has leverage = 1, because assets still equal equity.
> 
> Now watch the chain come alive. Anna's ROE is:
> 
> $$ \text{ROE} = \underbrace{0.70}_{\text{tax}} \times \underbrace{0.90}_{\text{interest}} \times \underbrace{0.10}_{\text{EBIT margin}} \times \underbrace{2.0}_{\text{turnover}} \times \underbrace{2.0}_{\text{leverage}} = 25.2\% $$
> 
> Read it as a story: **"Out of every dollar of sales, Anna keeps 10 cents after operations, then 90% of that after interest, then 70% of that after tax (= 6.3 cents of net income per dollar of sales). Her assets turn over twice a year, so each dollar of assets produces 12.6 cents of net income. And each dollar of equity controls two dollars of assets, so each dollar of equity produces 25.2 cents."** That *is* the 25.2% ROE — just told slowly.
> 
> **Why decompose at all?** Because when Anna's ROE drops from 25% to 15% next year, you do not want to say "ROE fell." You want to say "ROE fell because EBIT margin dropped from 10% to 6%, and here is why — flour prices spiked." DuPont gives you a surgical tool, not a thermometer. Two firms can both have ROE = 15% and be utterly different businesses — one a thin-margin grocer with huge turnover and leverage, one a fat-margin luxury brand with modest turnover and no debt. They do not face the same risks, and the component breakdown is the only way to see it.
> 
> **One last trap.** Leverage *does not always help.* It multiplies whatever ROA already is. If Anna's business earns 8% on assets and she borrows at 12%, every extra dollar borrowed destroys value — leverage in the formula goes up, but ROA drops faster, and ROE falls. Leverage is a magnifier, not a generator. If the core engine (EBIT margin × turnover) is broken, stacking debt on top just makes the crash louder.

> [!question] QUESTION — Three-way DuPont
> Problem: A firm reports net profit margin of 10%, total asset turnover of 2.0, and financial leverage of 1.5. Compute ROE.
> 
> ---
> 
> - ROE = 0.10 × 2.0 × 1.5 = **0.30 or 30%**.
> 
> Explanation: The three-way decomposition multiplies profitability, efficiency, and leverage. Stopping at margin × turnover (= 20%) gives only ROA; multiplying by leverage (×1.5) lifts it to ROE.

> [!question] QUESTION — Tax burden from a tax rate
> Problem: The firm's average tax rate is 20%. What is the tax burden in the five-way DuPont?
> 
> ---
> 
> - Tax burden = 1 − 0.20 = **0.80**.
> 
> Explanation: Tax burden equals Net income / EBT, which is exactly one minus the average tax rate. A tax burden of 0.80 means the firm keeps 80 cents of every pretax dollar.

> [!question] QUESTION — Which driver moved ROE?
> Problem: Over two years, net profit margin and total asset turnover were unchanged, but leverage rose from 1.5 to 2.0. The firm borrows below the return earned on the borrowed funds. What most likely happened to ROE?
> 
> ---
> 
> - Under the three-way form, ROE is proportional to leverage when margin and turnover are held constant.
> - Leverage rose by a factor of 2.0 / 1.5 ≈ 1.33, so **ROE rose by about 33%**.
> 
> Explanation: Because borrowing cost is below the marginal return on invested funds, additional leverage is effective and ROE increases. If borrowing cost had exceeded that return, leverage would have reduced ROA and ROE would have fallen.

> [!question] QUESTION — Five-way decomposition
> Problem: Tax burden = 0.70, interest burden = 0.90, EBIT margin = 5%, total asset turnover = 1.1, leverage = 1.6. Compute ROE.
> 
> ---
> 
> - ROE = 0.70 × 0.90 × 0.05 × 1.1 × 1.6.
> - = 0.63 × 0.05 × 1.76 = 0.0315 × 1.76 ≈ **5.55%**.
> 
> Explanation: The product of tax burden and interest burden (0.63) collapses into the "retention after tax and interest." Multiply by EBIT margin to get net profit margin, by turnover to get ROA, and finally by leverage to get ROE. This is the Bloomberg-style view used to pinpoint which of the five levers moved.

> [!tip] Quick checks
> - ==Leverage ≥ 1 always==. If you computed leverage < 1, you flipped the ratio.
> - Tax burden and interest burden each lie in (0, 1]. Values above 1 mean you used the wrong numerator/denominator.
> - Three-way collapse test: Tax burden × Interest burden × EBIT margin should equal net profit margin. If it does not, the inputs are inconsistent.
> - All-equity firm → ROE = ROA. Use this as a sanity check when leverage = 1.

#### Industry-Specific Financial Ratios

> [!abstract] MEMORISE
> - No universal ratio definition exists → ratios are indicators, and what matters in one industry may be irrelevant in another.
> - Industry-specific ratios exist because the business model defines what to measure: stores for retailers, rooms for hotels, subscribers for streaming, employees for services, deposits for banks.
> - Regulated industries (especially banking) carry ratios that are not optional — they are regulatory thresholds.
> - Early-stage, pre-profit firms are often valued on industry-specific operating metrics rather than earnings ratios.

1. Ratios are tools, not definitions → the same label can mean different things across analysts, so the point is to pick ratios that indicate something important about *this* industry → that is why aspects irrelevant to one business (same-store sales for a bank) become central in another (same-store sales for a retailer).
2. Business risk is measured by coefficient of variation (CV) — standard deviation scaled by the mean → it tells you how volatile the line is relative to its typical level, which lets you compare firms of different sizes. Three common forms:
$$ \text{CV of Net Income} = \frac{\sigma(\text{Net Income})}{\text{Avg. Net Income}} $$
$$ \text{CV of Revenues} = \frac{\sigma(\text{Revenue})}{\text{Avg. Revenue}} $$

> [!tip] Notation in simple language
> - σ(·) = standard deviation of the series across years.
> - Avg. = arithmetic mean of the series across the same years.
> - Higher CV → more business risk relative to size.

> [!info] WHY CV, AND WHY HIGHER CV = MORE RISK
> Forget the formula. Two chai stalls:
>
> * **Ramesh**: avg USD 1,000, swings ±50
> * **Suresh**: avg USD 10,000, swings ±500
>
> Raw volatility says Suresh is riskier. Wrong. Both swing **5%** around their own scale:
>
> $$ \text{CV}*{R} = \frac{50}{1{,}000} = 5\% \qquad \text{CV}*{S} = \frac{500}{10{,}000} = 5\% $$
>
> Same CV → same *relative* risk. CV removes size and compares variability per unit of business.
>
> Risk = **unpredictability around the mean**:
>
> * **Low CV (≈5%)** → earnings stay close to average → forecastable → lower risk
> * **High CV (≈60%)** → earnings swing widely → average loses meaning → higher risk
>
> Example:
>
> * Utility → stable → low CV
> * Semiconductor → cyclical → high CV
>
> Same average possible, but very different risk.
>
> CV works because it scales volatility by the mean, giving a unit-free measure across firms. **Higher CV → more risk relative to size.** 


3. Financial sector ratios exist because banks are regulated on liquidity and solvency, not just profitability:
   - **Capital adequacy** = Components of capital ÷ risk-weighted assets (or market/operational risk exposure) → ties solvency to risk exposure.
   - **Monetary reserve requirement (cash reserve ratio)** = Reserves held at the central bank ÷ specified deposit liabilities → indicates banking liquidity under monetary rules.
   - **Liquid asset requirement** = Approved “readily marketable” securities ÷ specified deposit liabilities.
   - **Net interest margin (NIM)** = Net interest income ÷ total interest-earning assets → the spread earned on the asset base that actually generates interest.


> [!info] WHY BANKS NEED FOUR RATIOS, NOT ONE (intuition first)
> A bank borrows short (deposits) and lends long (mortgages). That mismatch *is* banking risk, and a bank can die in four independent ways — each ratio guards one door.
>
> Take **Lehmann Brothers Bank**: USD 1,000 of deposits, lent as USD 400 govt bonds + USD 400 corporate loans + USD 200 risky loans.
>
> - **Capital adequacy — "can you absorb losses?"** Weight loans by risk (0% / 100% / 150%) → RWA = USD 700. Against that, Lehmann Brothers holds USD 70 of its own capital → **10%** (Basel minimum ~8%). Capital takes the hit before depositors. **Denominator is risk-weighted, not total** — a bond-heavy bank needs little capital, a credit-card bank needs a lot.
>
> - **Cash reserve ratio — "can you meet today's withdrawals?"** Central bank forces Lehmann Brothers to park, say, 4% of deposits (USD 40) at the RBI — dead money, no yield. This can also be used a s monetary policy lever to control money supply. 
>
> - **Liquid asset requirement — "what if a run beats CRR?"** Second wall of assets you can dump in a day (T-bills, govt bonds). Say USD 200 → 20%. **CRR is dead money at the central bank; LAR is alive money in the bond market.**
>
> - **Net interest margin — "are you any good at the day job?"** Pay depositors 3%, lend at 8%, keep the spread. 
> - Net interest income (USD 50) ÷ *interest-earning* assets (USD 900) ≈ **5.6%**. Denominator excludes buildings and ATMs (they don't earn interest). ==Higher NIM isn't automatically better — often just means riskier borrowers.==
>
> **The picture.** Capital adequacy = survive losses. CRR + LAR = survive a run. NIM = earn in normal times. All four must pass independently.
>
> **Denominator rule.** Divide by *what can walk out the door* (deposits) or *what can blow up* (risky assets). Pick the fear, and the denominator writes itself.

4. Retail ratios focus on where retail growth actually comes from:
   - **Same (or comparable) store sales** = average revenue growth year over year for stores open in both periods → isolates organic growth from new-store growth. No denom
   - inator in the classical sense; it is a growth metric, not a stock metric.
     - *Remember this:* If Starbucks says total revenue grew 12% but same-store sales grew only 2%, it means the existing stores barely grew. The extra growth came from opening new stores. That is why analysts watch same-store sales — it tells you whether the business itself is getting stronger, or whether the company is only buying growth by opening new outlets.
   - **Sales per square meter (or square foot)** = Revenue ÷ total retail space → a productivity-of-space metric.
     - *Remember this:* An Apple Store earns about USD 5,500 of sales per square foot every year. A Walmart earns about USD 400. Both are called "retailers," but one square foot of floor space is doing completely different work in each. The ratio shows you how much money the shop squeezes out of every bit of floor it pays rent on.

5. Service companies are measured on human-capital productivity because their assets are skill-based:
   - **Revenue per employee** = Revenue ÷ total number of employees.
   - **Net income per employee** = Net income ÷ total number of employees.
     - *Remember this:* Valve, the company that runs the Steam gaming store, has only about 350 employees but serves more than 100 million gamers. It reportedly earns between USD 3.5 million and over USD 10 million of profit *per employee*. A normal consulting firm earns around USD 300,000 of revenue per employee. For service and software companies, the people are the factory, so this number tells you how much output each person produces.

6. Hotels are measured on room utilisation and pricing:
   - **Average daily rate (ADR)** = Room revenue ÷ number of rooms sold → pricing power per occupied room.
   - **Occupancy rate** = Number of rooms sold ÷ number of rooms available → how intensively capacity is used.
     - *Remember this:* The Taj in Mumbai might charge USD 400 per night and fill 70% of its rooms. A budget hotel like OYO might charge USD 30 and fill 95%. Both are hotels, but one makes its money from high prices and the other from filling rooms. Because of this, hotel analysts multiply the two ratios together to get **Revenue per Available Room** (the standard industry number): average price per room sold × fraction of rooms sold. This single number lets you compare a luxury hotel and a budget hotel fairly.

7. Subscription / relationship-based businesses are measured on the customer base:
   - **Average revenue per user (ARPU)** = Revenue ÷ average number of subscribers or users → the monetisation intensity of each relationship.
     - *Remember this:* Spotify earns roughly USD 5 per user per month. Netflix earns about USD 12. Both stream content, but each Netflix customer is worth more than twice a Spotify customer. When Reliance Jio launched in India, it deliberately kept this number near zero to pull in hundreds of millions of users, then slowly raised prices. Average revenue per user is the number subscription businesses live and die by — it tells you whether each customer relationship is actually worth something.

> [!question] QUESTION — Occupancy and ADR
> Problem: A hotel has 200 rooms available, sells 150 rooms on a given night, and earns room revenue of USD 30,000 that night.
> 
> ---
> 
> - Occupancy rate = 150 / 200 = **75%**.
> - ADR = USD 30,000 / 150 = **USD 200 per occupied room**.
> 
> Explanation: Occupancy uses *rooms available* as the denominator (capacity utilisation), while ADR uses *rooms sold* as the denominator (price realised per occupied room). Confusing the two denominators is the most common mistake.

> [!question] QUESTION — Sales per square meter
> Problem: A retailer reports revenue of USD 20 million across 2,000 square meters of retail space.
> 
> ---
> 
> - Sales per square meter = USD 20,000,000 / 2,000 = **USD 10,000**.
> 
> Explanation: This is a space-productivity ratio — revenue divided by physical selling area. It is distinct from same-store sales, which measures *growth* across periods for stores open in both.

> [!warning] EASY TO FORGET
> - Same-store sales has **no denominator** in the usual sense — it is a year-over-year growth figure restricted to stores open in both periods.
> - Net interest margin scales by **interest-earning assets**, not total assets and not deposits.
> - Cash reserve ratio uses **central-bank reserves ÷ deposits**, not marketable securities ÷ deposits (that is the liquid asset requirement).
> - Coefficient of variation = σ ÷ mean, **not** mean ÷ σ.

8. The scope limit: Exhibit 36 is illustrative, not exhaustive → many industries have their own ratios outside this module (for example, Standard and Poor’s Industry Surveys and industry bodies publish more) → so the exam-relevant point is the *principle*: the ratio must reflect what actually drives value in that industry.


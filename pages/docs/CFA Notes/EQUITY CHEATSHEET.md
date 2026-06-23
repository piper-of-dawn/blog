## Module 1: Market Organization and Structure

1. **Numerical: Leverage ratio on a margin purchase**  
   Stem: An investor buys 1,000 shares at USD 50 using an initial margin requirement of 40%. What is the leverage ratio?  
   Solution: First calculate the total position: 1,000 x USD 50 = USD 50,000. The investor must put up 40% equity, so equity is USD 20,000. Leverage ratio is position value divided by equity, so USD 50,000 / USD 20,000 = 2.50.  
   Formula: Leverage ratio = Position value / Investor equity.  
   Memory: **Less margin deposit means more leverage.**  
   Trap: CFA tests whether you divide by the investor's equity, not by the borrowed money.

2. **Numerical: Return on a margin purchase**  
   Stem: An investor buys 100 shares at USD 50 with 40% initial margin and sells six months later at USD 55. Ignore interest and dividends. What is the return on the investor's equity?  
   Solution: First find the cash the investor actually put in: 100 x USD 50 x 40% = USD 2,000. The stock gain is 100 x (USD 55 - USD 50) = USD 500. The return is based on the investor's own cash, so USD 500 / USD 2,000 = 25%.  
   Formula: Margin return = Gain or loss on position / Initial margin deposit.  
   Memory: **Return is on your cash, not the whole stock value.**  
   Trap: A 10% stock gain becomes 25% when the investor financed only 40% with equity.

3. **Numerical: Margin call price for a long position**  
   Stem: An investor buys a share at USD 25, contributes USD 12.50 of equity, and borrows the rest. The maintenance margin is 30%. At what price does the margin call occur?  
   Solution: The loan is fixed at USD 12.50. At price P, equity equals P - USD 12.50. The margin call happens when equity divided by price equals 30%, so (P - 12.50) / P = 0.30. Solve slowly: P - 12.50 = 0.30P, so 0.70P = 12.50, so P = USD 17.86.  
   Formula: Long margin call price = Loan / (1 - Maintenance margin).  
   Memory: **Loan stays fixed; falling price crushes equity first.**  
   Trap: Do not use the initial margin percentage in the margin-call equation.

4. **Numerical: Short-sale deposit**  
   Stem: A trader shorts 200 shares at EUR 47. The initial margin requirement is 40%. What cash must be left with the broker, ignoring commissions?  
   Solution: The short sale produces 200 x EUR 47 = EUR 9,400 of sale proceeds, and those proceeds stay with the broker. Initial margin is extra collateral of 40% x EUR 9,400 = EUR 3,760. Total left with the broker is EUR 9,400 + EUR 3,760 = EUR 13,160.  
   Mistake: Treating short-sale proceeds as cash the trader can withdraw.  
   Correct logic: The broker keeps sale proceeds plus the margin deposit.  
   Trap: Short-sale collateral is not just the margin requirement.

5. **Numerical: Bid-ask spread cost**  
   Stem: A dealer quotes a stock at 49.90 bid and 50.10 ask. An investor buys and immediately sells one share. What is the round-trip loss from the spread?  
   Solution: Buying uses the ask price because the dealer sells to you at 50.10. Selling uses the bid price because the dealer buys from you at 49.90. The immediate loss is 50.10 - 49.90 = USD 0.20 per share.  
   Formula: Bid-ask spread = Ask price - Bid price.  
   Memory: **You buy high at ask and sell low at bid.**  
   Trap: Do not average bid and ask when the question asks for actual execution.

6. **Numerical: Limit price versus stop price**  
   Stem: A trader owns a stock at USD 40 and enters a stop 30, market sell order. If the first trade at or below USD 30 is USD 29 and the order executes at USD 28.50, did the stop price guarantee a USD 30 sale?  
   Solution: No. The stop price only decides when the order becomes active. Once the stock trades at or below USD 30, the sell order becomes a market order and can execute at the next available price, here USD 28.50.  
   Mistake: Thinking a stop price is a minimum execution price.  
   Correct logic: A **limit** controls price; a **stop** controls activation.  
   Trap: Stop-loss orders can still execute at poor prices in a fast market.

## Module 2: Security Market Indexes

1. **Numerical: Price return versus total return**  
   Stem: A price return index starts at 100, ends at 108, and the index portfolio receives income of 3. What are the price return and total return?  
   Solution: Price return ignores income, so use only the index move: (108 - 100) / 100 = 8%. Total return adds income before dividing by the starting value: (108 - 100 + 3) / 100 = 11%.  
   Formula: Total return = (Ending price index - Beginning price index + Income) / Beginning price index.  
   Memory: **Price return ignores cash; total return reinvests the cash story.**  
   Trap: Total return uses the price return index value as the base.

2. **Numerical: Multi-period index compounding**  
   Stem: An index starts at 1,000 and earns price returns of 5% and 3% in two consecutive periods. What is the ending value?  
   Solution: Compound period by period. After the first period, value is 1,000 x 1.05 = 1,050. After the second period, value is 1,050 x 1.03 = 1,081.50.  
   Formula: Ending index value = Beginning value x (1 + return 1) x (1 + return 2).  
   Memory: **Returns chain by multiplication, not addition.**  
   Trap: 5% plus 3% gives 8%, but the index value reflects 8.15%.

3. **Numerical: Price-weighted index return**  
   Stem: A price-weighted index has two stocks priced at USD 20 and USD 80. The prices move to USD 22 and USD 76. What is the price return?  
   Solution: Start with the total price level: 20 + 80 = 100. End with the new total: 22 + 76 = 98. The price return is 98 / 100 - 1 = -2%. The high-priced stock had the louder voice.  
   Formula: Price-weighted return = New sum of prices / Old sum of prices - 1.  
   Memory: **High price gets high weight.**  
   Trap: Do not use market capitalization unless the index is market-cap weighted.

4. **Numerical: Price-weighted divisor after a split**  
   Stem: Three stocks trade at 10, 20, and 90. The divisor is 3, so the index is 40. The 90 stock has a 2-for-1 split and nothing economic changes. What new divisor keeps the index at 40?  
   Solution: After the split, prices are 10, 20, and 45. The new price sum is 75. To keep the index at 40, set 75 / New divisor = 40. New divisor = 75 / 40 = 1.875.  
   Formula: New divisor = New price sum / Old index level.  
   Memory: **Divisor repairs fake index moves.**  
   Trap: A split should not create a real index return.

5. **Numerical: Equal-weighted index return**  
   Stem: An equal-weighted index has three stocks with returns of 12%, -3%, and 6%. What is the index return?  
   Solution: Equal-weighted means each return gets the same weight. Add the returns and divide by three: (12% - 3% + 6%) / 3 = 5%.  
   Formula: Equal-weighted return = Arithmetic average of constituent returns.  
   Memory: **Equal-weighted means equal dollars, not equal shares.**  
   Trap: Equal weights drift after prices move, so periodic rebalancing is needed.

6. **Numerical: Float-adjusted market-cap weight**  
   Stem: Company A has 10 million shares at USD 20 with 80% float. Company B has 5 million shares at USD 40 with 50% float. What is A's float-adjusted weight?  
   Solution: First calculate investable market capitalization. A is 10m x 20 x 80% = USD 160m. B is 5m x 40 x 50% = USD 100m. Total investable market capitalization is USD 260m. A's weight is 160 / 260 = 61.5%.  
   Formula: Float-adjusted weight = Float-adjusted market cap / Total float-adjusted market cap.  
   Memory: **Only shares available to investors get full weight.**  
   Trap: Do not give controlling shareholders' locked-up shares the same weight.

7. **Numerical: Rebalancing versus reconstitution**  
   Stem: An index restores each constituent to a 5% target weight every quarter and replaces firms that no longer meet eligibility rules once a year. Which action is rebalancing and which is reconstitution?  
   Solution: Restoring target weights is rebalancing. Changing the membership list is reconstitution. The first changes how much of each security is held; the second changes which securities are in the index.  
   Mistake: Treating both as the same turnover source.  
   Correct logic: **Weights = rebalancing; names = reconstitution.**  
   Trap: Equal-weighted indexes need more rebalancing because price moves break equal weights.

## Module 3: Market Efficiency

1. **Numerical: Intrinsic value versus market price**  
   Stem: An analyst estimates intrinsic value at USD 42 while the stock trades at USD 36. Is the stock undervalued, fairly valued, or overvalued?  
   Solution: Compare value estimate to market price. If intrinsic value is higher than market price, the analyst believes the market is offering the stock too cheaply. USD 42 is greater than USD 36, so the stock is undervalued by USD 6.  
   Memory: **Value above price means undervalued.**  
   Trap: The label is from the market's perspective, not from the analyst's excitement.

2. **Numerical: Confidence interval around value**  
   Stem: An analyst estimates intrinsic value at USD 50 with low confidence, and the stock trades at USD 50.20. Should the small difference alone force an overvalued call?  
   Solution: No. The curriculum says the conclusion depends on confidence in the model and inputs. A 0.40% price gap is tiny, so if confidence is low, the analyst may call the security fairly valued because the difference is inside the practical uncertainty range.  
   Mistake: Treating every one-cent gap as a trading signal.  
   Correct logic: Bigger uncertainty requires a bigger price-value gap.  
   Trap: Valuation is not just arithmetic; model confidence matters.

3. **Numerical: Weak-form efficiency trap**  
   Stem: A trading rule based only on past price data earns 4% abnormal risk-adjusted return after trading costs for many years. Which form of efficiency is contradicted?  
   Solution: Past prices and trading data are exactly the weak-form information set. If a rule using only that information earns abnormal risk-adjusted returns after costs, weak-form efficiency is contradicted.  
   Memory: **Past prices belong to weak form.**  
   Trap: Do not call it semi-strong just because the result is profitable.

4. **Numerical: Semi-strong event reaction**  
   Stem: A company releases unexpectedly good public news at 10:00. The stock rises gradually over several days as investors slowly digest the news. What efficiency problem is suggested?  
   Solution: Public news should be incorporated quickly and rationally in a semi-strong efficient market. A slow multi-day drift after the announcement suggests semi-strong inefficiency, because public information was not reflected promptly.  
   Correct logic: Public information belongs to semi-strong form.  
   Memory: **Public news should hit price fast.**  
   Trap: The issue is not whether the price rises; the issue is whether the reaction is quick and accurate.

5. **Numerical: Strong-form efficiency trap**  
   Stem: Corporate insiders repeatedly earn abnormal profits from private information. Which form of market efficiency is least supported?  
   Solution: Strong-form efficiency says prices reflect public and private information. If insiders profit from private information, private information is not already fully reflected in price. That contradicts strong-form efficiency.  
   Memory: **Private information is strong-form territory.**  
   Trap: A market can be weak-form and semi-strong-form efficient without being strong-form efficient.

6. **Numerical: Arbitrage bounds and transaction costs**  
   Stem: The same asset trades at USD 100 in one market and USD 100.20 in another. The round-trip cost to arbitrage is USD 0.30. Is the observed price gap economically exploitable?  
   Solution: No. The gross gap is USD 0.20, but the cost is USD 0.30. After costs, the arbitrage loses USD 0.10. Prices can differ inside transaction-cost bounds without giving traders a profitable opportunity.  
   Formula: Net arbitrage profit = Price gap - Transaction costs.  
   Memory: **Efficiency lives inside trading costs.**  
   Trap: A visible price difference is not automatically a free profit.

## Module 4: Overview of Equity Securities

1. **Numerical: Cumulative voting power**  
   Stem: A shareholder owns 100 shares and four directors are being elected under cumulative voting. How many total votes can the shareholder allocate to one candidate?  
   Solution: Cumulative voting gives total votes equal to shares owned times directors being elected. Here, 100 x 4 = 400 votes. The shareholder can place all 400 votes on one candidate if desired.  
   Formula: Total cumulative votes = Shares owned x Number of directors elected.  
   Memory: **Cumulative voting lets small holders concentrate votes.**  
   Trap: Statutory voting would not let the shareholder pile all votes onto one seat in the same way.

2. **Numerical: Book value of equity**  
   Stem: A company reports total assets of USD 900 million, total liabilities of USD 540 million, and preferred stock of USD 60 million. What is book value available to common shareholders?  
   Solution: Start with assets minus liabilities: USD 900m - USD 540m = USD 360m total equity. Preferred has a prior claim, so common book value is USD 360m - USD 60m = USD 300m.  
   Formula: Common book value = Assets - Liabilities - Preferred stock.  
   Memory: **Common gets what is left after higher claims.**  
   Trap: Do not forget preferred stock when the question asks for common equity.

3. **Numerical: Book value per share versus market price**  
   Stem: Common book value is USD 300 million and 20 million common shares are outstanding. The stock trades at USD 24. What is book value per share, and is market price above book?  
   Solution: Divide common book value by shares: USD 300m / 20m = USD 15 per share. Market price is USD 24, which is above USD 15. The market is valuing future cash-flow prospects above accounting book value.  
   Formula: Book value per share = Common book value / Common shares outstanding.  
   Memory: **Book value is accounting history; market value is future expectation.**  
   Trap: Book value and market value are rarely equal.

4. **Numerical: Return on equity**  
   Stem: A stable company earns net income of USD 45 million. Beginning equity is USD 280 million and ending equity is USD 320 million. What is return on equity?  
   Solution: Use average equity when equity changes during the year. Average equity is (USD 280m + USD 320m) / 2 = USD 300m. Return on equity is USD 45m / USD 300m = 15%.  
   Formula: ROE = Net income / Average book value of equity.  
   Memory: **Profit divided by the equity base that produced it.**  
   Trap: Do not use ending equity automatically when average equity is more appropriate.

5. **Numerical: Market capitalization**  
   Stem: A company has 80 million shares outstanding and the market price is USD 12.50. What is total market value of equity?  
   Solution: Market value of equity is shares outstanding times price per share. So 80m x USD 12.50 = USD 1,000m, or USD 1.0 billion.  
   Formula: Market capitalization = Share price x Shares outstanding.  
   Memory: **Market cap is price times shares.**  
   Trap: Do not use book value per share to calculate market capitalization.

6. **Numerical: Cost of equity versus accounting return on equity**  
   Stem: A company earns accounting ROE of 9%, while investors require 12% on equity with similar risk. Is management covering investors' required return?  
   Solution: Compare the accounting return earned on the equity base with the return investors require for bearing risk. Here 9% is below 12%, so the company is not earning enough relative to the investors' required return.  
   Mistake: Assuming positive ROE always means good performance.  
   Correct logic: ROE must be judged against the required return or cost of equity.  
   Trap: Cost of equity is harder to observe than debt cost, but it is still the relevant hurdle.

## Module 5: Company Analysis: Past and Present

1. **Numerical: Revenue driver split**  
   Stem: A retailer has 100 average stores with USD 2.0 million sales per store. Next year, average stores rise to 110 and sales per store rise to USD 2.1 million. What is revenue growth?  
   Solution: First calculate current revenue: 100 x USD 2.0m = USD 200m. Next calculate forecast revenue: 110 x USD 2.1m = USD 231m. Growth is 231 / 200 - 1 = 15.5%.  
   Formula: Revenue = Average stores x Sales per store.  
   Memory: **Separate volume from productivity before calling it growth.**  
   Trap: Do not look only at store count; sales per store can change the answer.

2. **Numerical: Pricing power through margin**  
   Stem: A company raises selling prices by 5%, but cost per unit rises by 8% and unit volume is unchanged. What should happen to gross margin pressure?  
   Solution: Revenue per unit rises 5%, but cost per unit rises faster at 8%. Even though sales price increased, the spread between price and cost gets squeezed. Gross margin should decline unless the starting cost structure somehow offsets it.  
   Mistake: Treating every price increase as proof of pricing power.  
   Correct logic: Pricing power shows up when price rises without margin damage.  
   Trap: CFA tests profitability, not just the headline price increase.

3. **Numerical: Gross profit mix**  
   Stem: Segment A has revenue of USD 100 and gross margin of 30%. Segment B has revenue of USD 100 and gross margin of 10%. If Segment B grows faster, what happens to overall gross margin, all else equal?  
   Solution: Segment A contributes USD 30 gross profit and Segment B contributes USD 10. If the lower-margin Segment B becomes a larger part of sales, the weighted average gross margin falls. The company can grow revenue while profitability quality worsens.  
   Formula: Overall margin = Sum of segment gross profit / Sum of segment revenue.  
   Memory: **Mix can move margin even if each segment margin stays unchanged.**  
   Trap: Do not forecast one company-wide margin when segment mix is changing materially.

4. **Numerical: Cash conversion cycle reading**  
   Stem: A retailer has days sales outstanding of 3, days inventory on hand of 35, and days payable outstanding of 40. What is the cash conversion cycle, and what does it imply?  
   Solution: Add the days cash is tied up in receivables and inventory, then subtract supplier financing. Cash conversion cycle = 3 + 35 - 40 = -2 days. A negative cycle means suppliers are effectively financing inventory and operations for a short period.  
   Formula: Cash conversion cycle = DSO + DOH - DPO.  
   Memory: **Receivables plus inventory minus payables.**  
   Trap: Negative working capital can be a strength for some business models, not automatically distress.

5. **Numerical: Degree of financial leverage**  
   Stem: Operating income rises from USD 100 to USD 110, while net income rises from USD 40 to USD 48. What is degree of financial leverage?  
   Solution: Operating income increased by 10%. Net income increased by 20%. Degree of financial leverage is 20% / 10% = 2.0, meaning net income moved twice as much as operating income.  
   Formula: DFL = Percentage change in net income / Percentage change in operating income.  
   Memory: **Fixed interest makes net income more sensitive.**  
   Trap: Higher leverage can lift ROE, but it also magnifies downside.

6. **Numerical: ROE decomposition**  
   Stem: A company has net margin of 1.3%, asset turnover of 3.5, and equity multiplier of 1.84. What is ROE?  
   Solution: Multiply the three drivers: 1.3% x 3.5 x 1.84. First 1.3% x 3.5 = 4.55%. Then 4.55% x 1.84 = 8.37%. The company has high asset turnover, but thin margin keeps ROE modest.  
   Formula: ROE = Net margin x Asset turnover x Equity multiplier.  
   Memory: **Margin, efficiency, leverage: the three ROE levers.**  
   Trap: A high-sales business can still have low ROE if margins are tiny.

## Module 6: Industry and Competitive Analysis

1. **Numerical: Industry growth rate**  
   Stem: Industry sales rise from USD 500 billion to USD 560 billion in one year. What is the industry growth rate?  
   Solution: Growth is the change divided by the starting size. The increase is USD 60 billion. Divide USD 60 billion by USD 500 billion to get 12%.  
   Formula: Growth rate = Ending size / Beginning size - 1.  
   Memory: **Always anchor growth to the starting size.**  
   Trap: Do not divide by the ending size.

2. **Numerical: Herfindahl-Hirschman Index**  
   Stem: An industry has three competitors with market shares of 50%, 30%, and 20%. What is the Herfindahl-Hirschman Index?  
   Solution: Square each percentage share and add them: 50^2 + 30^2 + 20^2 = 2,500 + 900 + 400 = 3,800. Use whole percentages, not decimals, because the curriculum presents HHI that way.  
   Formula: HHI = Sum of squared competitor market shares.  
   Memory: **Square shares, then add.**  
   Trap: Using 0.50^2 + 0.30^2 + 0.20^2 gives 0.38, which is the wrong scale for CFA-style HHI questions.

3. **Numerical: Merger effect on HHI**  
   Stem: Two firms with market shares of 20% and 10% merge. By how much does HHI increase, assuming no other market shares change?  
   Solution: Before the merger, their HHI contribution is 20^2 + 10^2 = 400 + 100 = 500. After the merger, the combined firm has 30%, so contribution is 30^2 = 900. The HHI increase is 900 - 500 = 400.  
   Formula: HHI increase from merger = 2 x Share A x Share B.  
   Memory: **Combining firms increases concentration because cross-products appear.**  
   Trap: The number of store locations is not what matters; market share matters.

4. **Numerical: Mature versus growth industry forecast**  
   Stem: Real GDP is expected to grow 2%, inflation is expected to be 3%, and a mature industry's revenue usually tracks nominal GDP. What revenue growth is most consistent?  
   Solution: A mature industry often grows roughly with the broader economy. Nominal GDP is approximately real growth plus inflation, so 2% + 3% = 5%. A 5% revenue growth forecast is consistent with the industry moving with nominal economic activity.  
   Memory: **Mature industries usually do not grow like early-stage disruptors.**  
   Trap: Do not use real GDP alone when revenues are nominal.

5. **Numerical: Porter force from buyer concentration**  
   Stem: A supplier sells 70% of its output to two large customers. Which Porter force is numerically flashing red?  
   Solution: Customer concentration increases buyer bargaining power. If a few customers control most purchases, they can pressure price, quality, and terms. Here, two buyers account for 70%, so buyer power is the force to investigate.  
   Correct logic: Fewer, larger buyers usually have more bargaining power.  
   Memory: **Big buyers squeeze suppliers.**  
   Trap: Do not classify this as supplier power just because the company is a supplier.

6. **Numerical: Cost leadership risk**  
   Stem: A company wins by being the lowest-cost producer. A new technology cuts competitors' costs by 20%, but this company cannot adopt it. Which strategy risk is being tested?  
   Solution: This is a cost leadership risk. The company used to defend itself through lower costs, but technology lets rivals match or beat that cost position. The original cost advantage can disappear.  
   Mistake: Calling every technology change a PESTLE-only issue.  
   Correct logic: Technology is the external trigger, but the strategic risk is loss of cost leadership.  
   Trap: Porter strategy questions often ask what the change does to the firm's defense.

## Module 7: Company Analysis: Forecasting

1. **Numerical: Revenue growth relative to GDP**  
   Stem: Nominal GDP is forecast to grow 4%, and a company's revenue is expected to grow 50% faster than GDP. What revenue growth should be forecast?  
   Solution: "50% faster" is relative, so multiply GDP growth by 1.50. Revenue growth = 4% x 1.50 = 6%. This is the same as saying revenue growth is 200 basis points above 4%.  
   Formula: Forecast growth = GDP growth x (1 + relative premium).  
   Memory: **50% faster than 4% means 6%, not 54%.**  
   Trap: Distinguish percentage faster from percentage points higher.

2. **Numerical: Market growth and market share**  
   Stem: A product market is forecast at CNY 154 billion, and a company is expected to have 8% market share. What company revenue is forecast?  
   Solution: Start with the total market, then apply the company's share. Revenue = CNY 154 billion x 8% = CNY 12.32 billion.  
   Formula: Company revenue = Market size x Market share.  
   Memory: **Top-down means market first, company share second.**  
   Trap: Do not use current company revenue if the question gives forecast market size and forecast share.

3. **Numerical: Bottom-up volume and price**  
   Stem: A company expects to sell 2.185 million units at an average selling price of EUR 7.15. What is forecast revenue in EUR millions?  
   Solution: Bottom-up revenue is units times price. Multiply 2.185 million units by EUR 7.15 to get EUR 15.62275 million, or about EUR 15.6 million.  
   Formula: Revenue = Volume x Average selling price.  
   Memory: **Units first, price second, then multiply.**  
   Trap: Keep the units consistent; million units times euro price gives euro millions.

4. **Numerical: Gross margin after input and price changes**  
   Stem: A product currently sells for EUR 6.50. Input prices rise, so the company raises selling price by 10%, and volume falls from 2.300 million units to 2.185 million units. What is new revenue?  
   Solution: First update the selling price: EUR 6.50 x 1.10 = EUR 7.15. Then multiply by new volume: 2.185 million x EUR 7.15 = EUR 15.62275 million. Price went up, volume went down, and revenue depends on both.  
   Correct logic: Forecast price and volume separately when both are moving.  
   Memory: **Price increase does not automatically mean revenue increase.**  
   Trap: Elastic demand can reduce volume when price rises.

5. **Numerical: Working capital forecast from days sales outstanding**  
   Stem: Forecast revenue is USD 730 million and days sales outstanding is forecast at 30 days. What accounts receivable should be forecast, using a 365-day year?  
   Solution: Days sales outstanding tells you how many days of revenue sit in receivables. Daily revenue is USD 730m / 365 = USD 2m. Receivables are 30 days x USD 2m = USD 60m.  
   Formula: Accounts receivable = DSO x Revenue / 365.  
   Memory: **Days ratio turns annual sales into a balance sheet number.**  
   Trap: Do not divide by 30; use the year base in the formula.

6. **Numerical: Maintenance versus growth capital expenditures**  
   Stem: A mature company reports depreciation of USD 80 million and inflation is expected to be 5%. A simple maintenance capital expenditure forecast is closest to what amount?  
   Solution: Maintenance capital expenditure often starts with depreciation because depreciation approximates the cost of replacing existing assets. Adjust for inflation: USD 80m x 1.05 = USD 84m. Growth capital expenditure would be forecast separately from expansion plans.  
   Memory: **Maintenance keeps the machine running; growth expands the machine.**  
   Trap: Do not treat all capital expenditure as growth capital expenditure.

7. **Numerical: Debt forecast from EBITDA and target leverage**  
   Stem: Forecast revenue is USD 900 million, EBITDA margin is 6%, and target gross debt to EBITDA is 3.0x. What gross debt is implied?  
   Solution: First calculate EBITDA: USD 900m x 6% = USD 54m. Then apply the target leverage ratio: gross debt = 3.0 x USD 54m = USD 162m.  
   Formula: Gross debt = Target debt-to-EBITDA x Forecast EBITDA.  
   Memory: **Forecast profit first, leverage second.**  
   Trap: Do not multiply the leverage ratio by revenue unless EBITDA margin is 100%.

## Module 8: Equity Valuation: Concepts and Basic Tools

1. **Numerical: Market price versus estimated value**  
   Stem: An analyst estimates intrinsic value at EUR 32 and the stock trades at EUR 28. What valuation conclusion follows?  
   Solution: Compare estimated value with market price. EUR 32 is above EUR 28, so the analyst estimates the stock is undervalued. The expected opportunity exists only if the analyst trusts the model and expects market price to converge toward value.  
   Memory: **Value above price means undervalued.**  
   Trap: A model value is not automatically a buy unless the gap is meaningful and convergence is plausible.

2. **Numerical: Holding-period dividend discount model**  
   Stem: A stock is expected to pay dividends of EUR 2.00, EUR 2.10, and EUR 2.20 over the next three years and sell for EUR 20.00 at the end of Year 3. Required return is 10%. What is value today?  
   Solution: Discount each dividend and the Year 3 sale price. Value = 2.00 / 1.10 + 2.10 / 1.10^2 + 2.20 / 1.10^3 + 20.00 / 1.10^3. That is 1.82 + 1.74 + 1.65 + 15.03 = EUR 20.23.  
   Formula: $V_0 = \sum_{t=1}^{n} \frac{D_t}{(1+r)^t} + \frac{P_n}{(1+r)^n}$.  
   Memory: **Dividends plus exit price, all brought back to today.**  
   Trap: The sale price is a Year 3 cash flow, so discount it for three years.

3. **Numerical: Preferred stock perpetuity**  
   Stem: A non-callable, non-convertible perpetual preferred share pays USD 1.20 annually. Required return is 4.49%. What is intrinsic value?  
   Solution: A level perpetual preferred dividend is a perpetuity. Divide the annual dividend by the required annual return: USD 1.20 / 0.0449 = USD 26.73.  
   Formula: Preferred value = Dividend / Required return.  
   Memory: **Fixed dividend forever means perpetuity.**  
   Trap: Use the required return as a decimal, not 4.49 as a whole number.

4. **Numerical: Gordon growth model**  
   Stem: A stock just paid a dividend of USD 3.00. Dividends are expected to grow at 4% forever, and required return is 9%. What is intrinsic value?  
   Solution: Gordon uses next year's dividend, not the dividend just paid. First calculate D1: USD 3.00 x 1.04 = USD 3.12. Then divide by required return minus growth: USD 3.12 / (0.09 - 0.04) = USD 62.40.  
   Formula: $V_0 = \frac{D_1}{r-g} = \frac{D_0(1+g)}{r-g}$.  
   Memory: **Move D0 to D1 before dividing.**  
   Trap: Gordon only works when the required return is greater than growth.

5. **Numerical: Two-stage dividend discount model**  
   Stem: A stock just paid USD 2.00. Dividends grow 10% for two years, then 4% forever. Required return is 9%. What is the valuation order?  
   Solution: First build the high-growth dividends: D1 = 2.00 x 1.10 = 2.20, and D2 = 2.20 x 1.10 = 2.42. The stable phase starts after Year 2, so D3 = 2.42 x 1.04 = 2.5168. Terminal value at Year 2 is 2.5168 / (0.09 - 0.04) = 50.336. Finally discount D1, D2, and the Year 2 terminal value back to today.  
   Formula: Terminal value at time n = $D_{n+1} / (r-g_L)$.  
   Memory: **Terminal value sits one period before the first stable dividend.**  
   Trap: Do not calculate terminal value using D2 when D3 is the first stable-growth dividend.

6. **Numerical: Sustainable growth rate**  
   Stem: A company has return on equity of 15% and a dividend payout ratio of 40%. What is sustainable growth?  
   Solution: First calculate retention: 1 - payout ratio = 1 - 0.40 = 0.60. Then multiply retention by ROE: 0.60 x 15% = 9%.  
   Formula: Sustainable growth = Retention ratio x ROE.  
   Memory: **Growth comes from what the firm keeps and how well it reinvests.**  
   Trap: Do not multiply payout ratio by ROE; use retention.

7. **Numerical: Justified forward price-to-earnings ratio**  
   Stem: A company has a dividend payout ratio of 60%, required return of 10%, and expected dividend growth of 4%. What is the justified forward P/E?  
   Solution: The justified forward P/E links Gordon growth to next year's earnings. Divide payout by required return minus growth: 0.60 / (0.10 - 0.04) = 10.0. A higher payout or growth raises justified P/E; a higher required return lowers it.  
   Formula: $P_0 / E_1 = p / (r-g)$.  
   Memory: **Payout on top, risk-minus-growth below.**  
   Trap: This is forward P/E because the denominator is next year's expected earnings.

8. **Numerical: Enterprise value to equity value**  
   Stem: A company has market capitalization of USD 500 million, market value of debt of USD 200 million, preferred stock of USD 50 million, and cash of USD 80 million. What is enterprise value?  
   Solution: Enterprise value is the value of the whole operating business to all capital providers. Add equity, debt, and preferred stock, then subtract cash: 500 + 200 + 50 - 80 = USD 670 million.  
   Formula: EV = Market cap + Debt + Preferred stock - Cash and short-term investments.  
   Memory: **Takeover value adds claims, then removes cash.**  
   Trap: When moving from enterprise value to common equity value, subtract debt and preferred stock and add cash.

9. **Numerical: Asset-based value per share**  
   Stem: Adjusted assets are worth USD 105,000, liabilities are USD 45,000, and there are 1,000 shares outstanding. What is asset-based value per share?  
   Solution: First calculate equity value: adjusted assets minus liabilities = USD 105,000 - USD 45,000 = USD 60,000. Then divide by shares: USD 60,000 / 1,000 = USD 60 per share.  
   Formula: Asset-based value per share = (Fair value of assets - Liabilities - Preferred stock) / Shares.  
   Memory: **Assets minus claims, then per share.**  
   Trap: Asset-based value can miss important intangible value, so it often works better for asset-heavy firms.

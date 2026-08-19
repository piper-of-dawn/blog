
> [!tip] LOOK AT THESE BEFORE EXAM
> 1. Price return and total return start equal at inception. After that, total return wins only because it reinvests income.
> 2. The divisor is a bookkeeping tool. If a split or constituent change would fake a move, the divisor gets adjusted.
> 3. Price-weighted means the high-priced stock gets the loudest voice. That is why splits matter so much.
> 4. Equal-weighted usually beats market-cap-weighted when the smaller names do better.
> 5. Market-cap-weighted leans toward the winners. Fundamental-weighted leans toward value.
> 6. Rebalancing fixes weights. Reconstitution fixes membership.
> 7. Indexes are used for systematic risk, not systemic risk.
> 8. Commodity indexes use futures, not spot commodities.
> 9. Fixed-income indexes are hard to replicate because the bond universe is huge and illiquid.
> 10. Hedge fund indexes can have survivorship bias because reporting is voluntary.

> [!ABSTRACT] LOS
> 1. Describe a security market index.
> 2. Calculate and interpret the value, price return, and total return of an index.
> 3. Describe the choices and issues in index construction and management.
> 4. Compare the different weighting methods used in index construction.
> 5. Calculate and analyze the value and return of an index given its weighting method.
> 6. Describe rebalancing and reconstitution of an index.
> 7. Describe uses of security market indexes.
> 8. Describe types of equity indexes.
> 9. Compare types of security market indexes.
> 10. Describe types of fixed-income indexes.
> 11. Describe indexes representing alternative investments.

#### 1. What a security market index is

1. A security market index is a portfolio built to represent a target market, market segment, or asset class.
2. Think of it as a rules-based basket, not a random statistic.
3. The target can be broad, like the whole US equity market, or narrow, like small-cap value stocks or investment-grade bonds.
4. The point is to compress a lot of market information into one number you can track, compare, and model.

Think of the S&P 500 during a quiet week or the Dow during a noisy one. The point is not the drama. The index is the shortcut for the market's shape.

#### 2. Price return versus total return

5. A price return index only tracks price movement.
6. A total return index tracks price movement plus reinvested income.
7. At inception, they are equal. Once dividends or interest enter the picture, total return pulls ahead. What is income here: dividends, interest, and other distributions paid by the securities. Why is total return used: it is closer to what an investor actually earns if the cash gets reinvested.

> [!tip] HAMMER THIS INTO YOUR HEAD
> If the securities pay no income, price return and total return are the same.
>
> If they do pay income, total return will drift above price return over time because it compounds the cash.

#### Index value and return formulas

8. The price return index value is:

$$
V_{PRI} = \frac{\sum_{i=1}^{N} n_i P_i}{D}
$$

9. The price return of the index is:

$$
PR_I = \frac{V_{PRI1} - V_{PRI0}}{V_{PRI0}}
$$

10. The price return of one security is:

$$
PR_i = \frac{P_{i1} - P_{i0}}{P_{i0}}
$$
11. The index price return can also be written as the weighted average of constituent price returns:

$$
PR_I = \sum_{i=1}^{N} w_i PR_i
$$
12. The total return of the index is:

$$
TR_I = \frac{V_{PRI1} - V_{PRI0} + Inc_I}{V_{PRI0}}
$$
13. The total return of the index can also be written as the weighted average of constituent total returns:
$$
TR_I = \sum_{i=1}^{N} w_i TR_i
$$
14. The divisor is chosen at inception, often to make the starting value something neat like 1,000.
15. Later, the divisor gets adjusted so splits or constituent changes do not create fake index moves. What is the divisor: a scaling number that turns the underlying portfolio value into the published index level. Why is it adjusted: to preserve continuity when a mechanical event changes prices without changing economic value.

> [!question] MULTI-PERIOD INDEX VALUE
>
> Problem: A price return index starts at 1,000. It earns 5% in Period 1 and 3% in Period 2. What is the ending value?
>
> ---
>
> Solution:
>
> $$
> V_{PRI,2} = 1000(1.05)(1.03) = 1081.50
> $$
>
> Explanation: time compounding is multiplicative. Do not add 5 and 3 and pretend that is the answer.

16. How index providers build an index:
	- First, define the target market.
	- Next, decide which securities belong in that market slice.
	- Then decide how much weight each security gets.
	- Then decide when to rebalance.
	- Then decide when to re-examine the list and the rules.

17. The target market determines the investment universe. What is the investment universe: the full set of securities eligible for inclusion. Why this matters: if you define the target market badly, the rest of the index is already off.
18. Some indexes use hard rules. Others use committees. The Standard and Poor's 500 Index and the Standard and Poor's Bombay Stock Exchange Sensitive Index use committee judgement rather than pure automation.

> [!info] DOW JONES 
> The Dow Jones Industrial Average has only 30 stocks, but people still quote it constantly. That is the reminder: popular does not always mean broad.

#### Price weighting

19. A price-weighted index gives bigger weights to higher-priced stocks.
20. The weight formula is:
$$
w_i^{P} = \frac{P_i}{\sum_{i=1}^{N} P_i}
$$
21. The idea is simple, but economically odd. A stock matters more because one share is expensive, not because the company is larger. The classic example is the Dow Jones Industrial Average.

Apple is the clean memory hook here. A pricey stock can yank a price-weighted index around even if the underlying business is not the biggest thing in the market.


> [!question] PRICE-WEIGHTED SPLIT ADJUSTMENT
>
> Problem: Three stocks are priced at 10, 20, and 90. The divisor is 3, so the index level is 40. The 90 stock does a 2-for-1 split and nothing else changes. What new divisor keeps the index level unchanged?
>
> ---
>
> Solution:
>
> After the split, the prices are 10, 20, and 45.
>
> $$
> \frac{10 + 20 + 45}{D_2} = 40
> $$
>
> $$
> D_2 = \frac{75}{40} = 1.875
> $$
>
> Explanation: the split changed price mechanically, not economically. The divisor absorbs the fake move.

#### Equal weighting

22. An equal-weighted index gives every constituent the same weight at inception. The weight formula is:
$$
w_i^{E} = \frac{1}{N}
$$
23. It feels fair because every stock gets one equal vote. It is annoying to maintain because once prices move, the weights are no longer equal.
24. ==Equal weighting usually gives a small-cap tilt, because the smaller names are overweighted relative to a market-cap benchmark.==
#### Market-cap weighting

25. A market-cap-weighted index weights each stock by its market value. What is market capitalization: shares outstanding times share price. Why is it used: it makes the index look like the investable market itself.
26. The weight formula is:
$$
w_i^{M} = \frac{Q_i P_i}{\sum_{j=1}^{N} Q_j P_j}
$$
27. This is the cleanest way to represent the market if your goal is to hold companies in proportion to their size. It is also easy to track because the weights mostly move with prices.
28. The hidden downside is that winners get bigger weights and losers get smaller weights, which gives the method a momentum-like flavor.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Market-cap weighting says: let the market set the weights.
>
> That is why recent winners get bigger weights and recent losers get smaller weights.
#### Float-adjusted market-cap weighting
29. Float-adjusted market-cap weighting uses only the shares available to the public.
30. The weight formula is:
$$
w_i^{M} = \frac{f_i Q_i P_i}{\sum_{j=1}^{N} f_j Q_j P_j}
$$
31. This matters because some shares are locked up by founders, governments, or strategic owners and are not really tradable.
32. Most modern market-cap indexes are float adjusted unless the source says otherwise.

> [!example]
> Tesla is the good real-world picture here. A big block is tied up with Elon Musk and insiders, so the float-adjusted weight is smaller than raw market cap would suggest.
> 

#### Fundamental weighting
33. Fundamental weighting uses business measures, not price, to set weights.
34. The weight formula is:
$$
w_i^{F} = \frac{F_i}{\sum_{j=1}^{N} F_j}
$$
35. The fundamentals can be earnings, book value, revenue, dividends, cash flow, or even employee count.
36. The big effect is a value tilt. The method pushes weight toward stocks that look cheap on a fundamentals-to-price basis.

37. What is the basic logic: stop letting price alone decide the weight. Why is this used: to avoid blindly loading up on stocks just because they already got expensive.

> [!info] WHY FUNDAMENTAL WEIGHTING FEELS DIFFERENT
> If two firms earn the same amount, but one has been bid up to a much larger market value, market-cap weighting gives the expensive one a much bigger role. Fundamental weighting pushes back against that and says, "Hold on, the business output is the same."

#### Comparing weighting methods

| Method | What sets the weight | Main strength | Main weakness |
|---|---|---|---|
| Price-weighted | Share price | Simple | Arbitrary economic weights |
| Equal-weighted | Same weight for each stock | Simple and diversified by count | Needs frequent rebalancing, small-cap tilt |
| Market-cap-weighted | Company market value | Represents market size well, low maintenance | Momentum-like bias toward recent winners |
| Float-adjusted market-cap-weighted | Investable market value | Better reflects what investors can actually buy | Still inherits the market-cap momentum issue |
| Fundamental-weighted | Earnings, book value, revenue, dividends, and so on | Value tilt, less price-driven | Requires periodic turnover |

> [!question] SAME STOCKS, DIFFERENT RETURNS
>
> Problem: Three stocks A, B, and C have beginning prices 50, 20, and 10. Their ending prices are 55, 18, and 12. Shares outstanding are 1, 2, and 5. No dividends. Calculate the price return under price-weighted, equal-weighted, and market-cap-weighted methods.
>
> ---
>
> Solution:
>
> Individual stock returns:
>
> $$
> R_A = 10\% \qquad R_B = -10\% \qquad R_C = 20\%
> $$
>
> Price-weighted:
>
> $$
> I_0 = 50 + 20 + 10 = 80 \qquad I_1 = 55 + 18 + 12 = 85
> $$
>
> $$
> R^{PWI} = \frac{85 - 80}{80} = 6.25\%
> $$
>
> Equal-weighted:
>
> $$
> R^{EWI} = \frac{10\% - 10\% + 20\%}{3} = 6.67\%
> $$
>
> Market-cap-weighted beginning values:
>
> $$
> A = 50,\quad B = 40,\quad C = 50,\quad Total = 140
> $$
>
> $$
> w_A = 0.3571 \qquad w_B = 0.2857 \qquad w_C = 0.3571
> $$
>
> $$
> R^{MCWI} = 0.3571(10\%) + 0.2857(-10\%) + 0.3571(20\%) = 7.86\%
> $$
>
> Explanation: same stocks, different weighting logic, different return.

#### Rebalancing and reconstitution

38. Rebalancing means adjusting constituent weights to keep the weighting method intact. Reconstitution means changing the securities inside the index. ==Rebalancing is about weights. Reconstitution is about membership.==
39. Equal-weighted indexes need the most rebalancing because prices quickly knock the weights out of line. Market-cap-weighted indexes mostly rebalance themselves unless corporate actions force manual changes.


> [!example]  
>In December 2020, Tesla was added to the S&P 500, and index funds could not debate the story. They had to buy it, selling pieces of the existing index to make room. That was the membership shock. After Tesla entered, the routine work became weight control: as its market value moved, funds adjusted exposure so the index still matched its rulebook. This is the same kind of thing that happens when traders front-run an index addition. The company did not suddenly become better overnight. The rule-driven buying forced the price move.

> [!question] REBALANCE OR RECONSTITUTE?
>
> Problem: An index committee removes three bonds that are close to maturity and one defaulted bond, then adds four new actively traded bonds.
>
> ---
>
> Solution:
>
> Reconstitution.
>
> Explanation: the members changed. If the same members stayed and only their weights were reset, that would be rebalancing.

#### Uses of market indexes

40. Indexes started as a way to gauge market sentiment.
41. They now act as market proxies for return modeling and systematic risk modeling.
42. They are used as asset-class proxies in asset allocation models.
43. They are used as benchmarks for active managers.
44. They are the basis for index funds and exchange-traded funds. Why the benchmark choice matters: a small-cap manager should not be judged against a broad-market benchmark just because it is convenient. The benchmark has to match the strategy.
45. Indexes measure systematic risk, not systemic risk. What is ==systematic== risk: market-related risk. What is ==systemic== risk: risk that the whole financial system breaks down.

> [!example] SYSTEMATIC AND SYSTEMIC RISK
> In 2008, bank stocks were not just “high beta” names falling with the market. That would be systematic risk: the tide goes down, boats go down. The real problem was systemic risk: the boats were tied to each other with leverage, derivatives, short-term funding, and panic. When Lehman failed, the issue was not one stock’s index weight. The plumbing of finance itself started freezing.

 46. Equity index types
	- Broad market indexes try to capture almost the whole market, usually more than 90 percent of it.
	- Multi-market indexes combine countries or regions.
	- Sector indexes track industries.
	- Style indexes sort stocks by size and value/growth.
##### Broad market indexes
47. The Shanghai Stock Exchange Composite Index is a broad market index. The Wilshire 5000 Total Market Index is another broad market index. The Russell 3000 is also broad and covers about 98 percent of the US equity market in the source. The Wilshire 5000 name is historical. It is not a strict promise that exactly 5,000 names must always be inside.
##### Multi-market indexes
50. Multi-market indexes can represent developed markets, emerging markets, frontier markets, a region, or the whole world. MSCI is the source's main example.
51. MSCI classifies countries by development level and geography, then reconstitutes the index families as markets move around. That is why a country can move from frontier to emerging, or emerging to developed, and the index family changes with it.

##### Fundamental weighting in multi-market indexes

52. Some multi-market indexes weight stocks by market capitalization inside each country and then weight countries by gross domestic product.
53. Gross domestic product is just a country's economic size. The point is to stop a market-cap global index from becoming too dominated by countries whose stock prices already got very expensive. The source specifically mentions that gross domestic product weighting was used to reduce the huge Japanese weight in the old MSCI Europe, Australasia, and Far East Index.
##### Sector indexes
52. Sector indexes track parts of the economy such as finance, energy, health care, technology, and consumer goods.
53. They matter because sectors do not all behave the same through the business cycle.
54. They also help separate stock-picking skill from sector-allocation skill. If energy explodes and the manager still lags, the issue may be sector positioning, not stock picking. There is no universally agreed sector classification system, so do not let the wording in a question sound more rigid than the source actually is.
##### Style indexes

55. Style indexes classify stocks by market capitalization, value versus growth, or both.
56. Large cap, midcap, and small cap have no universal cutoff.
57. Value versus growth classification also varies by provider.
58. The classic combined style grid is six boxes: large-cap value, large-cap growth, mid-cap value, mid-cap growth, small-cap value, and small-cap growth.
59. Style indexes have higher turnover because stocks keep migrating across buckets. That is why style indexes feel more restless than broad market indexes. A stock can drift from value to growth, or from mid cap to large cap, just because the numbers changed.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Broad market indexes are more stable.
>
> Style indexes are more fidgety because stocks keep drifting across size and value/growth borders.
#### Fixed-income indexes

60. Fixed-income indexes are harder to build and replicate than equity indexes.
61. The bond universe is huge. Many bonds trade infrequently and are illiquid. Providers often need dealer quotes or estimates because clean market prices are not always there. Bonds mature all the time, so turnover is built in.
62. If you have ever tried to follow a broad bond benchmark and wondered why it is much harder than copying an equity index, that is the reason.

63. Fixed-income indexes can be classified by issuer, financing type, currency, maturity, credit quality, and inflation protection. The major families are aggregate indexes, market sector indexes, style indexes, economic sector indexes, and specialized indexes such as high-yield, inflation-linked, and emerging-market indexes.
64. The Bloomberg Barclays US Aggregate Bond Index is the classic broad example in the source.

> [!warning] FIXED-INCOME TRAPS
> 1. Same target market does not mean same number of bonds.
> 2. Coupon frequency is not a headline dimension in the source.
> 3. Replication is hard because the market is big, illiquid, and always turning over.

#### Alternative investment indexes

65. The source covers commodity indexes, real estate indexes, and hedge fund indexes. Commodity indexes use futures contracts on commodities such as energy, metals, grains, and livestock. Real estate indexes include appraisal indexes, repeat sales indexes, and real estate investment trust indexes. Hedge fund indexes reflect voluntary reporting, so they can suffer from survivorship bias.

##### Commodity indexes

66. There is no obvious market-cap weighting rule for commodities. So providers invent weighting schemes, including equal weighting, production value weighting, liquidity weighting, and committee weights.
67. That is why two commodity indexes can hold many of the same commodities and still behave very differently. Commodity index total return comes from futures price change, collateral yield, and roll yield.


> [!example] 
> In April 2020, oil did something absurd: the front-month WTI futures price went below zero. Not “cheap”, negative. Storage was full, demand had collapsed, and nobody wanted delivery. An oil-heavy commodity index felt like it had stepped on a landmine. But a broader commodity index with gold, grains, copper, and livestock looked very different. Same “commodity exposure”, completely different wound. And because futures had to be rolled, the damage was not just price. The curve itself became the tax.

> [!info] WHY COMMODITY INDEXES CONFUSE PEOPLE
> You can watch the spot price of oil rise and still not get the same return inside a commodity index, because the index is living in the futures market, not the physical market.

##### Real estate indexes

68. Appraisal indexes use appraised values. Repeat sales indexes use repeated sales of the same property.
69. Real estate investment trust indexes use publicly traded real estate investment trusts.
70. Public real estate investment trusts trade on exchanges, so their indexes can be updated continuously.

##### Hedge fund indexes

71. Hedge funds usually report performance voluntarily. Different databases include different funds. Poor performers may stop reporting. That creates survivorship bias and usually pushes the index return upward.



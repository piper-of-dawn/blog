
> [!tip] LOOK AT THESE BEFORE EXAM
> Callout: These are the formulas, traps, and quick numericals that decide most fast exam questions.
> 
> $$V_0 = \sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}$$
> 
> $$V_0 = \sum_{t=1}^{n}\frac{D_t}{(1+r)^t} + \frac{P_n}{(1+r)^n}$$
> 
> $$V_0 = \frac{D_1}{r-g} = \frac{D_0(1+g)}{r-g}$$
> 
> $$g = b \times ROE$$
> 
> $$FCFE = CFO - FCInv + \text{Net borrowing}$$
> 
> $$\frac{P_0}{E_1} = \frac{p}{r-g}$$
> 
> $$EV = \text{Market cap} + \text{Preferred stock} + \text{Debt} - \text{Cash and short-term investments}$$
> 
> - Gordon uses **next dividend**, not the dividend just paid.
> - Gordon works only when **$r > g$**.
> - Multiples must match the denominator basis across companies.
> - Enterprise value works better when capital structures are very different.
> - Asset-based value often gives a **floor**, not the full story.
> - **A share just paid USD 5.00, dividends grow at 4%, and the required return is 8%. What is the value?** First move from just-paid dividend to next dividend, so USD 5.00 becomes USD 5.20. Then run Gordon fast: USD 5.20 / (0.08 - 0.04) = USD 130.
> - **Expected dividends are EUR 2.00, EUR 2.10, and EUR 2.20 for the next three years, and the expected Year 3 price is EUR 20.00. What is the value today?** Use the short algorithm: discount the three dividends, discount the Year 3 price, and add the four present values.
> - **A preferred share pays USD 5.50 forever and the required return is 6%. What is the value?** This is a perpetuity, so use dividend divided by required return. Value is USD 5.50 / 0.06 = USD 91.67.
> - **The payout ratio is 40% and return on equity is 15%. What is the sustainable growth rate?** First get retention as 1 - 0.40 = 0.60. Then multiply retention by return on equity: 0.60 x 0.15 = 9%.
> - **The first dividend of USD 4.00 will be paid in Year 5, growth after that is 6%, and the required return is 10%. What is the value today?** Work one step before the first dividend, so stand at Year 4. Value there is USD 4.00 / (0.10 - 0.06) = USD 100, then discount that back four years.
> - **The current dividend is USD 5.00, growth is 10% for three years and 5% thereafter, and the required return is 15%. How do you estimate value?** Build the first three dividends, compute terminal value at Year 3 using the lower growth rate, discount each piece back, and then add everything.
> - **The share price is USD 60 and expected next-year earnings per share are USD 5. What is the forward price-to-earnings ratio?** Use the quick divide: price over next-year earnings. That gives USD 60 / USD 5 = 12.
> - **Market capitalization is USD 500, debt is USD 200, preferred stock is USD 50, and cash is USD 80. What is enterprise value?** Add equity, debt, and preferred stock, then subtract cash. Enterprise value is 500 + 200 + 50 - 80 = USD 670.
> - **Assets are worth USD 105,000, liabilities are worth USD 45,000, and there are 1,000 shares outstanding. What is the asset-based value per share?** First get equity value as assets minus liabilities = USD 60,000. Then divide by 1,000 shares, so value per share is USD 60.

#### Categories of Equity Valuation Models

1. Equity valuation has three buckets: present value, multiplier, and asset-based models.  
   What is present value model: value from discounted future benefits.  
   What is multiplier model: value from market ratios.  
   What is asset-based model: value from assets minus claims.

2. Present value models look at cash expected to reach shareholders.  
   What is dividend discount model: value from expected dividends.  
   What is free-cash-flow-to-equity model: value from cash available to be distributed after business needs are met.

3. Multiplier models use price multiples or enterprise value multiples.  
   What is multiple: a ratio linking price or enterprise value to a business variable like earnings, sales, cash flow, or book value.

4. Asset-based models start from asset value and subtract liabilities and preferred shares.  
   What is book value: carrying value shown on the balance sheet.  
   Why is adjustment used: book values often differ from market values.

5. Analysts often use more than one model because every model is a simplification.  
   Why is simplification used: valuation needs a workable frame, but no frame captures the full business reality.

#### Background for the Dividend Discount Model

6. Present value logic starts with one idea: you are giving up cash in your hand today because you expect a stream of benefits later. The whole game is converting that later story into a number you can compare with today's price.

7. Common stock return has two sources: dividends received and price change over the holding period.  
   What is holding period: the time you expect to own the share.

8. A cash dividend is cash distributed to shareholders based on shares owned.  
   What is regular cash dividend: a recurring scheduled dividend.  
   What is extra dividend: a non-regular payment or a payment added to the regular dividend.

9. Stock dividends, stock splits, and reverse stock splits do not change shareholder wealth by themselves.  
   What is stock split: more shares with lower price per share.  
   What is reverse stock split: fewer shares with higher price per share.

10. Share repurchases are a cash-distribution alternative to dividends.  
    What is share repurchase: the company buys back its own shares.  
    Why is share repurchase used: management may want signaling, flexibility, tax efficiency, or offset to employee options.  Think of this as management saying, we think that our stocks are undervalued now so we are buying them back cheaper.

11. Dividend timing follows declaration date, ex-dividend date, holder-of-record date, and payment date.  What is ex-dividend date: the first date the share trades without the upcoming dividend.

12. On the ex-dividend date, share price usually drops by about the foregone dividend, all else equal. Why is price drop expected: new buyers no longer get that cash payment.

> [!example] MICROSOFT'S CASH BLAST IN 2004
> Dividend dates feel boring until a giant cash payout makes one missed day expensive.
>
> In 2004, Microsoft threw out a huge special dividend and reminded the market that dividend chronology is not clerical fluff. If you owned the shares through the right dates, cash landed. If you showed up after the ex-dividend line, the trade still settled, but the dividend was already gone.  
>
> That is why the ex-dividend date matters. It is the cliff edge. One side gets paid. The other side only gets the stock.

#### Dividend Discount Model and Free-Cash-Flow-to-Equity Model

13. If the company is a going concern, a share’s intrinsic value is the present value of expected future dividends.  
    What is going concern: a business expected to keep operating rather than shut down.

14. The full dividend discount model is:

$$
V_0 = \sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}
$$

15. For a finite holding period, value today is expected dividends during the holding period plus expected selling price at the end.  
    What is terminal value: the expected stock value at the end of the forecast horizon.

16. The finite-horizon form is:

$$
V_0 = \sum_{t=1}^{n}\frac{D_t}{(1+r)^t} + \frac{P_n}{(1+r)^n}
$$

17. Do not get fooled by holding period here. Even if you plan to sell in three years, the buyer who takes the stock from you will still care about the dividends after Year 3, and that future cash sneaks back into your sale price today.

18. Analysts often use free cash flow to equity instead of dividends.  
    What is free cash flow to equity: cash available for distribution to common shareholders after operating, investment, and financing needs are considered.

19. Free cash flow to equity is:

$$
FCFE = CFO - FCInv + \text{Net borrowing}
$$

20. Cash flow from operations starts with net income, adds non-cash expenses, and subtracts working capital investment.  
    What is fixed capital investment: spending needed to maintain the business as a going concern.

21. Free cash flow to equity is useful when dividends do not reflect payout capacity or when the company pays no dividend.  
    Why is FCFE used: predicting a first future dividend is often harder than forecasting distributable cash.

> [!question] THREE-YEAR HOLDING PERIOD DDM
> Callout: This is the clean template for valuing a share when both dividends and exit price are given.
>
> Problem: Dividends are expected to be EUR 2.00, EUR 2.10, and EUR 2.20 in Years 1 to 3. The expected Year 3 stock price is EUR 20.00. Required return is 10%.
>
> Solution:
>
> $$
> V_0 = \frac{2.00}{1.10} + \frac{2.10}{1.10^2} + \frac{2.20}{1.10^3} + \frac{20.00}{1.10^3}
> $$
>
> $$
> V_0 = 1.818 + 1.736 + 1.653 + 15.026 = 20.23
> $$
>
> Explanation: The dividends contribute EUR 5.207 in present value and the terminal stock value contributes EUR 15.026. Most of the value came from the sale price, not the near dividends.

#### Preferred Stock Valuation

22. Preferred stock usually has priority over common stock for dividends and liquidation claims.  
    What is liquidation: the process of settling claims when the company is wound down.

23. A non-callable, non-convertible perpetual preferred share is a perpetuity.  
    What is perpetual: it has no maturity date.  
    What is non-callable: the issuer cannot redeem it early.

24. Its value is:

$$
V_0 = \frac{D}{r}
$$

25. If preferred stock has maturity, you discount all dividends and the par value.  
    What is par value: the face amount paid at maturity.

26. Callable preferred is less valuable to investors.  
    Why is callability used: the issuer redeems when redemption helps the issuer, not when it helps you.

27. Retractable preferred is more valuable to investors.  
    What is retraction option: the holder can sell the shares back to the issuer on preset terms.

> [!example] BANK PREFERREDS IN THE 2008 CRISIS
>
> In 2008, many financial preferred shares were treated like safe income machines right before fear tore through the market. Required returns jumped, prices dropped, and investors were forced to remember that preferred stock is still a valuation problem, not a bank fixed deposit.  
>
> That is the lesson here. If the issuer controls a call, value tilts toward the issuer. If the holder has a put-like escape hatch, value tilts back toward the investor.

#### The Gordon Growth Model

28. The Gordon model assumes dividends grow forever at a constant rate.  
    What is constant growth: one stable dividend growth rate that never changes.

29. The model is:

$$
V_0 = \frac{D_1}{r-g} = \frac{D_0(1+g)}{r-g}
$$

30. Gordon fits mature dividend payers that are relatively insensitive to the business cycle. If the company feels like a boring machine that keeps doing roughly the same thing year after year, this model starts making sense. If the business still feels wild, fashionable, or unstable, back off.

31. The strict condition is **$r > g$**.  
    Why is this condition used: if growth reaches or exceeds the required return, the perpetuity formula breaks.

32. The most common exam mistake is using $D_0$ in the numerator when the formula needs $D_1$.  
    What is $D_0$: the dividend just paid.  
    What is $D_1$: the next expected dividend.

33. Sustainable growth is:

$$
g = b \times ROE
$$

34. Retention rate equals one minus payout ratio.  
    What is retention rate: the share of earnings kept inside the business.  
    What is return on equity: earnings produced for common shareholders relative to their equity.

35. A higher payout ratio can raise current dividends but also reduce future growth.  
    Why is this tradeoff important: value rises from cash paid now but may fall from weaker reinvestment.

36. Gordon is highly sensitive when $r$ and $g$ are close. When those two numbers start hugging each other, the model becomes dramatic. A tiny change in growth or required return can make value jump or crash far more than your confidence deserves.

> [!example] THE NIFTY FIFTY HANGOVER
>
> In the early 1970s, investors fell in love with so-called "one-decision" growth stocks. The spell worked until it did not. Once the market stopped believing in endless smooth growth, valuation multiples cracked hard, even when the businesses themselves had not vanished overnight.  
>
> That is the Gordon lesson in the wild: when required return and growth sit too close, even a small change in belief can blow a hole through value.

> [!question] NO CURRENT DIVIDEND, FIRST DIVIDEND AT YEAR 5
> Callout: When dividends start later, value the future dividend stream first, then walk it back to today.
>
> Problem: First dividend is USD 4.00 at $t = 5$. Growth after that is 6% forever. Required return is 10%.
>
> Solution:
>
> $$
> V_4 = \frac{4.00}{0.10-0.06} = 100
> $$
>
> $$
> V_0 = \frac{100}{1.10^4} = 68.30
> $$
>
> Explanation: The cleaner setup is to stand at Year 4, the point right before the first dividend year in a constant-growth stream, then discount that value back to today.

#### Multistage Dividend Discount Models

37. Multistage models are used when growth changes over time.  

38. The two-stage model assumes a finite high-growth phase followed by perpetual sustainable growth.  
    What is sustainable growth: the lower long-run rate the business can realistically maintain.

39. The two-stage structure is:

$$
V_0 = \sum_{t=1}^{n}\frac{D_0(1+g_S)^t}{(1+r)^t} + \frac{V_n}{(1+r)^n}
$$

$$
V_n = \frac{D_{n+1}}{r-g_L}
$$

$$
D_{n+1} = D_0(1+g_S)^n(1+g_L)
$$

40. The terminal value is the value at the end of the high-growth period of all later dividends.  
    Why is terminal value used: you cannot forecast each distant dividend one by one forever.

41. A two-stage model can fit older firms in transition, not just young firms.  
    Why is this possible: growth can restart, fade, or recover before settling into a long-run rate.

42. A three-stage model adds an explicit transition period between rapid growth and maturity.  
    What is maturity phase: the stage where growth settles at a lower stable rate.

> [!question] TWO-STAGE DDM
> Callout: This is the core exam pattern when supernormal growth fades into a lower permanent rate.
>
> Problem: $D_0 = 5.00$, growth is 10% for three years, then 5% forever, and required return is 15%.
>
> Solution:
>
> $$
> D_1 = 5.50,\; D_2 = 6.05,\; D_3 = 6.655,\; D_4 = 6.98775
> $$
>
> $$
> V_3 = \frac{6.98775}{0.15-0.05} = 69.8775
> $$
>
> $$
> V_0 = \frac{5.50}{1.15} + \frac{6.05}{1.15^2} + \frac{6.655}{1.15^3} + \frac{69.8775}{1.15^3} \approx 59.68
> $$
>
> Explanation: Discount the high-growth dividends directly, then attach the Gordon block at the end of Year 3 and discount that block back.

> [!example] APPLE AFTER THE IPHONE EXPLOSION
> Callout: A two-stage model makes sense when a company tears through a hot growth phase and then cools into something more normal.
>
> Apple after the iPhone launch is the kind of story that makes a flat forever-growth assumption look silly. Early on, growth was explosive and the market kept revising the ceiling upward. Later, the business became larger, heavier, and more cash-generative, so the right mental model became fast growth first, steadier growth later.

#### Multiplier Models and Fundamentals

43. A price multiple compares share price with a monetary flow or value.  
    Why is multiple used: it helps judge relative worth quickly across companies.

44. Common multiples are price-to-earnings, price-to-book, price-to-sales, and price-to-cash-flow.  
    What is price-to-earnings ratio: share price divided by earnings per share.

45. Multiples can be trailing or forward, but the basis must stay consistent across firms.  
    What is trailing multiple: uses past data.  
    What is forward multiple: uses forecast data.

46. Industry-specific ratios also matter when they capture the business engine directly.  Suppose, you are comparing YouTube Music with Spotify. The right ratio is to measure revenue per subscriber. You are comparing Instagram with Tiktok, here the right ratio would be revenue per minute of screen time.

47. The method of comparables applies the Law of One Price.  
    What is Law of One Price: similar assets should sell at similar prices after adjusting for differences.

48. Multiples are not disconnected from fundamentals; the Gordon model links them directly.  
    Why is this link useful: it explains why two firms can deserve different multiples without mispricing.

49. The justified forward price-to-earnings ratio is:

$$
\frac{P_0}{E_1} = \frac{p}{r-g}
$$

50. A higher required return lowers justified price-to-earnings.  
    A higher growth rate raises justified price-to-earnings.  
    A higher payout ratio usually raises justified price-to-earnings, but growth may weaken because retention falls.

51. That payout-growth tension is called dividend displacement of earnings.  
    What is dividend displacement of earnings: paying out more today can reduce future growth by leaving less to reinvest.

52. Multiples are fast and practical, but they can mislead when accounting rules, business cycles, or comparability are weak. This is one of those shortcuts that looks clever until you compare two businesses that are not really comparable. Then the ratio starts lying with a straight face.

> [!example] TESLA'S MULTIPLE WARS
> Callout: A huge price-to-earnings ratio can be the market screaming about future growth, not just current profit.
>
> During the years when Tesla traded at eye-watering multiples, one side of the market pointed at current earnings and called the stock absurd. The other side pointed at future scale, future margins, and a very different business shape years ahead. That is the whole justified-multiple argument in street form: today's multiple often contains tomorrow's story.

#### Enterprise Value

53. Enterprise value estimates the value of the whole business, not just common equity.  
    What is enterprise value: market value of operating business after adding financing claims and subtracting cash.

54. The standard form is:

$$
EV = \text{Market cap} + \text{Market value of preferred stock} + \text{Market value of debt} - \text{Cash and short-term investments}
$$

55. Enterprise value is often called takeover cost.  
    Why is takeover cost used: an acquirer assumes debt but also gets the target’s cash.

56. Enterprise value is especially helpful when companies have very different capital structures.  
    Why is capital structure important: equity value alone can look cheap or expensive just because debt levels differ.

57. EV/EBITDA is common because EBITDA is measured before payments to debt and equity claimholders.  
    What is EBITDA: earnings before interest, taxes, depreciation, and amortization.

58. EV multiples can still work when price-to-earnings fails because earnings are negative.  
    Why is this useful: EBITDA is usually positive even when net income is negative.

59. Estimating enterprise value can be messy if debt market values are unavailable.  
    Why is book debt rough: interest rates and credit risk may have changed since issuance.

60. A buyer has to think about the whole package: equity, debt, and the cash sitting inside the company. That is why enterprise value is called takeover cost. It forces you to price the whole animal, not just one visible slice of it.

61. This is where lazy analysis gets punished. If you pretend debt book value is the same as debt market value when rates or credit risk have moved, your enterprise value can drift far from reality.

#### Asset-Based Valuation

62. Asset-based valuation estimates equity from fair value of assets minus liabilities and preferred shares.  
    What is fair value: the value at which the asset or liability could be exchanged in the market.

63. This approach works best when assets and liabilities can be valued reasonably and intangibles are limited.  
    Why are intangibles a problem: many are hard to price and some are not even on the balance sheet.

64. Asset-based valuation is common for private companies, financial companies, natural resource companies, and liquidation cases.  
    Why is liquidation case suitable: separate assets may be worth more than the failing operating story.

65. Asset-based valuation often provides a floor value.  
    What is floor value: a baseline minimum estimate before adding harder-to-measure intangible value.

66. If the business story is ugly but the hard assets still matter, asset-based valuation becomes interesting fast. You stop asking, "Is this company thriving?" and start asking, "What are these pieces worth if someone takes them apart?"

67. Property, plant, and equipment can be difficult because book value is not market value.  
    How is adjustment done: analysts may use depreciated value, inflation-adjusted value, or replacement cost.

68. Hyperinflation makes asset estimation even harder.  
    Why is hyperinflation dangerous: old balance-sheet numbers become poor anchors for current fair value.

69. For public companies, piece-by-piece asset revaluation can be a large practical burden.  
    Why is this difficult: the balance sheet may contain too many assets with unclear market prices.

> [!example] PAN AM AFTER THE FALL
> Callout: A broken operating story can still leave behind assets that other players would fight to grab.
>
> When Pan Am collapsed, the business as a living operating machine was in terrible shape, but pieces of it still mattered. Routes, airport positions, and aviation rights were not sentimental debris. To a rival, they were strategic assets with real value.  
>
> That is the asset-based jolt. The ongoing business may be dying, but the parts can still be worth serious money.

> [!warning] QUICK TRAPS
> Callout: These are the mistakes that quietly wreck valuation answers.
>
> - Do not use stock dividends or stock splits as valuation cash flows.
> - Do not use $D_0$ in the Gordon numerator.
> - Do not let $g$ exceed or equal $r$ in the Gordon model.
> - Do not compare trailing and forward multiples as if they were the same thing.
> - Do not assume debt book value equals market value unless the question forces that shortcut.

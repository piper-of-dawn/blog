
> [!ABSTRACT] LOS
> 1. Describe the performance appraisal of alternative investments.
> 2. Calculate and interpret alternative investment returns both before and after fees.

> [!tip] SEE THIS BEFORE EXAM
> - Alternative investment performance is hard to compare because cash flows are staggered, leverage is common, values can be model-based, and fees are customized.
> - Investment life cycle = capital commitment, capital deployment, capital distribution.
> - J-curve = early negative returns from fees and deployment, then acceleration when assets mature or exit, then leveling off when capital is distributed.
> ==Fees first, work second, harvest last. That is the J-curve.==
> - Internal rate of return is preferred for long-lived alternatives because it captures **timing and size** of cash flows. Multiple of invested capital is easier, but it ignores timing.
> - Multiple of invested capital:
>
> $$
> \text{MOIC}=\frac{\text{Realized value}+\text{Unrealized value}}{\text{Total invested capital}}
> $$
>
> - Total invested capital = paid-in capital minus management fees and fund expenses.
> - **Paid-in capital 750, fees 75, realized value 1,000, unrealized value 500. Find multiple of invested capital.** Denominator is 675, not 750. Multiple of invested capital = 1,500 / 675 = 2.22 times.
> - Leveraged return:
>
> $$
> r_L=r+\frac{V_b}{V_c}(r-r_b)
> $$
>
> ==Leverage helps only when $r>r_b$. If $r<r_b$, leverage makes the loss worse.==
> - **Capital 100, borrow 50 at 4%, asset earns 8%.** Spread is 4%. Borrowed proportion is 0.5. Extra return = 2%. Leveraged return = 10%.
> - **Same facts, but asset loses 2%.** Spread is -6%. Extra damage = -3%. Leveraged return = -5%.
> - Level 1 = live quoted price. Level 2 = model built from observable inputs. Level 3 = model built from unobservable inputs.
> ==Level 3 can smooth returns and understate volatility. A smooth mark is not the same as a safe asset.==
> - Gross return = what the fund earns before fees. Net return = what the investor keeps after fees.
> - Basic manager fee:
>
> $$
> R_{GP}=(P_1 \times r_m)+\max[0,(P_1-P_0)\times p]
> $$
>
> - Investor net return:
>
> $$
> r_i=\frac{P_1-P_0-R_{GP}}{P_0}
> $$
>
> - **Beginning value 100, ending value 130, management fee 1%, performance fee 20%.** Independent-fee investor return = 22.7%. Net-of-management-fee investor return = 22.96%.
> - Hard hurdle = bonus only above the hurdle. Soft hurdle with catch-up = manager catches up faster once hurdle is crossed.
> - **Property bought for 100 sells for 160 after 2 years, preferred return 8%, carry 20%.** Soft hurdle gives the general partner 12. Hard hurdle gives only 8.8.
> - High-water mark = no bonus for merely recovering old losses.
> - **Old investor high-water mark 122.7, fund falls to 108.9, then rises to 128.** Old investor return = 15.39%. New investor return = 12.86%. Same fund, different entry point, different net return.
> - Clawback = return of previously accrued carry when later losses reduce aggregate profit.
> - **One deal gains 12, later deal loses 10, carry 20%.** Initial carry = 2.4. Final carry = 0.4. Manager gives back 2.0.
> - Redemption fee, notice period, lockup period, and gate all exist because investors always want the exit at the same time.
> - Fund of funds adds a second fee layer. Direct hedge fund return can be 14%, but after fund-of-funds fees the investor may keep only 11.6%.
> - Vintage-year comparison matters for private equity and real estate.
> - Survivorship bias removes dead funds. Backfill bias adds good past returns later. Both make hedge fund indexes look too good.

> [!tip] HAMMER THIS INTO YOUR HEAD
> IRR answers: **When did the money come in and go out?**
>
> MOIC answers: **How many times did the invested capital come back?**
>
> Leverage answers: **Is the asset return higher than the borrowing cost?**
>
> Level 3 valuation asks: **Is the asset actually stable, or is the model just slow to admit pain?**
>
> Fee math asks: **What does the investor keep after the manager takes management fee, performance fee, hurdle, high-water mark, and fund-of-funds drag?**
>
> If you remember only one line, remember this: ==same gross return can create different investor net returns because timing, fee terms, and high-water marks differ.==

#### Core Flow

1. Alternative investment performance appraisal is harder than public-stock or public-bond appraisal because the cash flows, valuations, leverage, fees, taxes, and investor terms are not standardized.
2. Public securities are easier to compare because they have quoted prices, similar claims, regular cash flows, and broad benchmarks. Alternative investments are customized, so two investors in the same hedge fund can earn different net returns if they entered at different times or negotiated different fee terms.
3. The four big appraisal complications are the investment life cycle, borrowed funds, valuation, and fee structure. ==Higher fees alone are not the main point; **complex fee arrangements** are the main point.==
4. Alternative returns are often less normally distributed than traditional returns. Do not blindly trust average return and standard deviation when the strategy has illiquidity, leverage, and ugly left-tail events.
5. The alternative investment life cycle usually has three phases: capital commitment, capital deployment, and capital distribution. Capital commitment means investors promise money; capital deployment means the manager actually puts it to work; capital distribution means cash comes back from income, exits, sales, or liquidations.
6. Early returns are often negative because fees and expenses start before assets produce income. During deployment, cash outflows usually exceed inflows. During distribution, successful assets finally generate cash or are sold.
7. The J-curve means returns first dip negative, then accelerate, then level off as assets are distributed and the fund closes. ==Memorize it as: **fees first, work second, harvest last**.==

> [!example] THE J-CURVE IS WHY IMPATIENT MONEY PANICS
> A private equity fund buys a boring packaging company. Year 1 looks bad because legal fees, consultants, debt costs, and restructuring expenses hit immediately. Year 4 may look good only if operations improve. Year 7 may look excellent if the company is sold at a high price.
>
> A public stock investor sees a price every second. A private equity investor may stare at ugly early cash flows for years before the payoff appears. The pain arrives on schedule; the glory is optional.

#### IRR and MOIC

8. ==Internal rate of return, or IRR, is the preferred measure for many long-lived alternatives because it considers both the amount and timing of cash flows.==
		- What is internal rate of return: the discount rate that makes the present value of all cash inflows and outflows equal to zero.
		- Why IRR is used: the private equity or real estate manager controls when capital is called and when proceeds are distributed, so timing is part of performance.
9. IRR is useful but not innocent. It requires assumptions about the financing rate for outgoing cash flows and the reinvestment rate for incoming cash flows.

> [!example] IRR HAS TWO HIDDEN ASSUMPTIONS
> Imagine a private equity fund calls **USD 100 million** from investors today and later distributes **USD 180 million** after a few years. The IRR number looks clean, but it quietly assumes something about both sides of the timeline.
>
> For the money going out, the calculation needs a financing rate: what did investors give up, or what did it cost them, to provide the capital when the fund called it?
>
> For the money coming back, the calculation needs a reinvestment rate: when the fund returns cash early, can investors actually reinvest that cash at a similar return?
>
> That is why IRR can flatter fast early exits. A fund that sends cash back quickly may show a spicy IRR, but if the investor cannot reinvest that cash well, the lived return is less magical. ==IRR measures timing power, but it does not guarantee reinvestment power.==

10. ==Multiple of invested capital, or MOIC, is a shortcut money multiple. It tells you how many times invested capital came back, but it ignores timing.== Total invested capital means paid-in capital less management fees and fund expenses.
	  MOIC formula:

$$
\text{MOIC}=\frac{\text{Realized value of investment}+\text{Unrealized value of investment}}{\text{Total invested capital}}
$$

11. Realized value means value already received from exits, sales, or distributions. Unrealized value means value still sitting inside the fund.

> [!question] Problem: A fund has paid-in capital of **€750 million**, pays **2%** annual management fees for **5 years**, distributes **€1,000 million**, and still owns assets worth **€500 million**.
> Solution:
> Management fees are:
> 
> $$
> 750 \times 2\% \times 5=75
> $$
> 
> Total invested capital is:
> 
> $$
> 750-75=675
> $$
> 
> MOIC is:
> 
> $$
> \frac{1{,}000+500}{675}=2.22 \ \mathrm{x}
> $$
> 

12. The fund turned **€675 million** of actual invested capital into **€1,500 million** of realized plus unrealized value. ==The timing of those cash flows is invisible inside MOIC.==

> [!tip] IRR VS MOIC
> If two funds both show **2.0x MOIC**, ask: “How long did it take?”
>
> Fund A doubles money in **3 years**. Fund B doubles money in **10 years**. The money multiple is identical, but Fund A is better because the capital came back faster. That is why IRR exists.

#### Leverage

13. Leverage means using borrowed money or derivatives to take a larger market position than the investor’s own capital would allow.
14. Leverage magnifies both gains and losses because the asset return is earned on the full position, while the investor’s own capital absorbs the residual result after borrowing cost.
15. Leveraged return formula:

$$
r_L=\frac{r(V_c+V_b)-(V_b \times r_b)}{V_c}
$$

Shortcut formula:

$$
r_L=r+\frac{V_b}{V_c}(r-r_b)
$$
 $r_L$ is leveraged return, $r$ is underlying asset return, $V_c$ is investor cash capital, $V_b$ is borrowed capital, and $r_b$ is borrowing rate.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Start with the return you would have earned without borrowing: $r$.
>
> Then add the leverage juice or damage: **proportion you borrowed** times **the excess you make or lose on the borrowed money**.
>
> In plain English:
> $$
> \text{Leveraged return}=\text{asset return}+\text{borrowed proportion}\times\text{spread over borrowing cost}
> $$

16. The whole formula lives inside $r-r_b$. ==If the asset return is above the borrowing rate, leverage helps. If the asset return is below the borrowing rate, leverage hurts.==

> [!question] LEVERAGE WHEN ASSETS WIN
> Problem: Lupulus has **USD 100 million** of capital and borrows **USD 50 million** at **4%**. If the underlying position earns **8%**, calculate leveraged return.
>
> ---
>
> Solution:
>
> $$
> 8\%+\frac{50}{100}(8\%-4\%)=10\%
> $$
>
> Explanation: Lupulus earns **4%** more than the borrowing cost on borrowed money equal to half its own capital, so leverage adds **2%** to the unleveraged **8%** return.

> [!question] LEVERAGE WHEN ASSETS LOSE
> Problem: Lupulus has **USD 100 million** of capital and borrows **USD 50 million** at **4%**. If the underlying position loses **2%**, calculate leveraged return.
>
> ---
>
> Solution:
>
> $$
> -2\%+\frac{50}{100}(-2\%-4\%)=-5\%
> $$
>
> Explanation: Lupulus loses **2%** on the asset and still pays **4%** on the borrowing, so the borrowed slice creates extra damage.


> [!example] LEVERAGE LOOKS LIKE GENIUS UNTIL THE BILL ARRIVES
> A hedge fund earning **8%** on assets while borrowing at **4%** looks clever. Add enough borrowed money, and the investor return looks juiced.
>
> If the asset return flips to **-2%**, the same machine becomes brutal. The loan still charges interest, the margin account shrinks, and the broker can demand more collateral.

17. A margin account represents the hedge fund’s net equity in its financed positions. A margin call happens when the equity or collateral falls below the required level and the lender demands more collateral.
    - What is margin account: the running account that shows how much of the financed position is still truly yours after borrowing is considered.
    - What is equity: your own leftover stake in the position after subtracting what you owe the lender.
    - What is collateral: cash or securities you post as protection for the lender, so the lender has a buffer if the trade goes bad.
    - Why is margin call used: the lender wants the cushion restored before losses become so large that the loan is no longer safely covered.
    - Think of it like buying a apartment with borrowed money. The apartment value is the full position, the home loan is the borrowing, and your equity is the part of the apartment that is still really yours. If the apartment price falls too much, the bank wants more cushion.
18. ==Margin calls can lock in losses because the fund may be forced to sell losing positions at bad prices, especially if the sale itself pushes the market price lower.==

#### Valuation

19. Valuation is difficult because many alternative assets are illiquid and do not have clean market prices.
20. Fair value is the market-based price that market participants would use to exchange an asset or liability in an orderly transaction at the measurement date. The seller’s version is often called the exit price.
21. Fair value Level 1 means quoted prices in active markets for identical assets, such as a listed public stock’s closing price.
22. Fair value Level 2 means observable inputs other than Level 1 quoted prices, such as an over-the-counter interest rate derivative priced using observable market data.
23. Fair value Level 3 means unobservable inputs, usually for assets with little or no market activity, such as private equity or real estate valued through cash-flow projection models.

> [!example] REAL WORLD: EASY PRICE, MODEL PRICE, AND "TRUST ME" PRICE
> Level 1 is the clean, shamelessly public case. Think of Apple shares on the Nasdaq. At the close, the market prints a price and the whole world can see it. Nobody needs a poetic speech from management. The quoted price for the identical asset is already sitting there.
>
> Level 2 is what a big bank lived on for years before and after the 2008 crisis. Imagine a dealer book full of over-the-counter interest rate swaps. There is not one single exchange screen showing the exact price for your exact contract, but the value can still be built from observable market ingredients such as the yield curve, benchmark floating rates, and prices of comparable instruments. You are not blind, but you are definitely no longer in the sunlight.
>
> Level 3 is where finance starts asking for faith. Imagine a property fund in a weak office market after remote work punched demand in the face. Hardly any comparable towers have traded, tenants are wobbling, and the manager still has to put a number on the building. So the valuation comes from rent assumptions, vacancy assumptions, discount rates, and projected cash flows. That number may be intelligent, but it is still partly a story until a real buyer shows up with real money.

24. Mark-to-model valuation means the value comes from a model rather than a live market price. Models should be independently tested, benchmarked, and calibrated because the manager may have a conflict of interest.
25. ==Level 3 values can smooth or overstate returns and understate volatility and risk.== The asset is not necessarily safer; it may simply be marked less directly.

> [!example] REAL WORLD: 2008 TAUGHT THIS THE HARD WAY
> During the global financial crisis, traded securities screamed first. Bank stocks, mortgage-linked securities, and anything with a live market price started collapsing in public. That is the cruel honesty of market pricing: the humiliation happens immediately.
>
> But less frequently traded assets often looked calmer for longer because they were being marked with models and assumptions rather than a brutal last trade. The calm was partly cosmetic. Once forced sales, refinancing stress, or genuine market transactions arrived, the softer marks had to catch up. That is the Level 3 danger: the number can stay polite long after reality has turned violent.

#### Fee Structures

26. ==Gross return is what the fund earns before fees. Net return is what the investor keeps after fees.==
27. A management fee is a fixed fee, often based on assets under management or end-of-period value. A performance fee is based on investment gains, often above a hurdle or high-water mark.
28. ==Different investors in the same fund can face different net returns== because of larger commitments, earlier entry, founder share classes, side terms, high-water marks, or longer lockups.
29. Founders shares are lower-fee shares offered to early investors in a new fund. Example: **1.5%** management fee and **10%** performance fee instead of **2%** and **20%**.
30. Either/or fees let the manager take either a management fee or an incentive fee, whichever is higher. A large institution may negotiate **1%** management fee or **30%** incentive fee above a hurdle, whichever is greater.
31. Redemption fee discourages withdrawals and helps offset transaction costs. Notice period is advance warning before redemption, often **30 to 90 days**. Lockup period is the minimum holding period before withdrawal. A gate limits redemptions for a period.

> [!example] THE EXIT DOOR CAN BECOME A VIP ROPE LINE
> During stress, everyone wants liquidity at the same time. A fund holding private loans, real estate, or complex hedge fund positions cannot sell everything politely by Friday.
>
> Redemption fees, notice periods, lockups, and gates protect the strategy and remaining investors, but they also mean your “investment value” and your “cash in hand” are not the same thing.



32. Basic general partner fee formula when management and performance fees are calculated independently:

$$
R_{GP}=(P_1 \times r_m)+\max[0,(P_1-P_0)\times p]
$$

33. Investor return after fees:

$$
r_i=\frac{P_1-P_0-R_{GP}}{P_0}
$$

34. Notation in simple language: $R_{GP}$ is total manager fee, $P_0$ is beginning fund value, $P_1$ is ending fund value before fees, $r_m$ is management fee rate, $p$ is performance fee rate, and $r_i$ is investor net return.
35. Kettleside Timberland is the running example fund here. It starts with **USD 100 million**, charges a **1%** management fee on year-end assets, and takes a **20%** performance fee.

> [!question] FEES CALCULATED INDEPENDENTLY
> Problem: Beginning value is **USD 100 million**, ending value is **USD 130 million**, management fee is **1%** of year-end assets, and performance fee is **20%**. If fees are independent, calculate manager fees and investor net return.
>
> ---
>
> Solution:
>
> $$
> R_{GP}=130 \times 1\%+(130-100)\times 20\%=7.3
> $$
>
> $$
> r_i=\frac{130-100-7.3}{100}=22.7\%
> $$

36. If performance fee is calculated net of management fee, the formula becomes:

$$
R_{GP,\ net}=(P_1 \times r_m)+\max[0,\{P_1(1-r_m)-P_0\}\times p]
$$

> [!question] FEES CALCULATED NET OF MANAGEMENT FEE
> Problem: Use the same fund facts, but now calculate performance fee after management fee has already been deducted.
>
> ---
>
> Solution:
>
> $$
> R_{GP,\ net}=130 \times 1\%+\{130(0.99)-100\}\times 20\%=7.04
> $$
>
> $$
> r_i=\frac{130-100-7.04}{100}=22.96\%
> $$
>
> Explanation: ==net-of-management-fee performance fee is slightly better for the investor because the performance-fee base is smaller.==

> [!example] YOUR UNCLE THE FUND MANAGER
> Do not memorise these formulas. They are common sense. Imagine you are rich, lazy, and slightly doomed, so you hand your money to your uncle because he swears he understands markets better than the rest of the family.
> 
> Your uncle says, “Son, I work hard, I meet management teams, I watch markets, I lose hair for you.” So he charges **2% management fee** every year for running the portfolio. That fee gets paid even if the portfolio performs terribly. If your money falls, your uncle still sends the invoice.
> 
> Then comes the **performance fee**, which is the incentive. This is the part where your uncle says, “If I make you extra money, I want a cut of the upside too.” So management fee is the fixed salary. Performance fee is the bonus.
> 
> Then you get wiser and say, “Fine, but you do not get bonus for breathing.” So you set a **hurdle rate**. That means your uncle earns performance fee only after the portfolio clears some minimum return. In plain English, hurdle rate means: “First make me enough money. Only then we talk bonus.”
> 
> Then you get even wiser because your uncle has a dangerous talent for losing money one year and calling a recovery “genius” the next. So you add a **high-water mark**. That means if your portfolio fell from **100** to **80**, and next year crawls back to **95**, your uncle does **not** get to call that victory and collect incentive fees. He gets performance fee only after he beats the old peak again.
> 
> That is the clean way to remember it:
> ==Management fee = pay for running the money.==
> ==Performance fee = pay for making extra money.==
> ==Hurdle rate = minimum return before bonus starts.==
> ==High-water mark = no bonus for merely recovering old losses.==
> 
> Once you see it that way, the formulas stop looking abstract. They are just bookkeeping for one question: how much does the investor keep after paying the manager for showing up and for winning?

37. ==A hard hurdle is the investor saying: “You do not earn bonus just because the fund made money. First clear my minimum required return.”== Only the return above that hurdle is exposed to performance fee. With a hard hurdle calculated net of management fee:

$$
R_{GP,\ hurdle}=(P_1 \times r_m)+\max[0,\{P_1(1-r_m)-P_0(1+r_h)\}\times p]
$$

> [!question] HARD HURDLE
> Problem: Use the same fund facts, but now add a **6%** hard hurdle. Think of the investor as protecting the first **6%** return from incentive fees.
>
> ---
>
> Solution:
>
> $$
> R_{GP,\ hurdle}=130 \times 1\%+\{130(0.99)-100(1.06)\}\times 20\%=5.84
> $$
>
> $$
> r_i=\frac{130-100-5.84}{100}=24.16\%
> $$

38. A high-water mark is the previous best fund value after fees. ==It is the investor saying: “Do not charge me a victory bonus for merely recovering from your old mistakes.”==
39. So the rule is simple: after a bad year, the manager can still collect management fee, but performance fee starts again only after the fund rises above the old peak. The formula is:

$$
R_{GP,\ HWM}=(P_t \times r_m)+\max[0,(P_t-P_{HWM})\times p]
$$

> [!question] HIGH-WATER MARK AFTER A BAD YEAR
> Problem: In Year 2, fund value falls to **USD 110 million** after Year 1 investor capital had already reached **USD 122.7 million** net of fees. What happens under a high-water mark?
>
> ---
>
> Solution:
>
> $$
> R_{GP,\ HWM}=110 \times 1\%+\max[0,(110-122.7)\times 20\%]=1.1
> $$
>
> $$
> r_i=\frac{110-122.7-1.1}{122.7}=-11.25\%
> $$
>
> Explanation: the fund is still below its old best level, so the manager has no right to incentive fee yet.

> [!question] HIGH-WATER MARK FOR THE OLD INVESTOR
> Problem: In Year 3, fund value rises to **USD 128 million**. The old investor’s high-water mark is **USD 122.7 million**. Calculate the fee and investor return.
>
> ---
>
> Solution:
>
> $$
> R_{GP,\ HWM}=128 \times 1\%+(128-122.7)\times 20\%=2.34
> $$
>
> $$
> r_i=\frac{128-108.9-2.34}{108.9}=15.39\%
> $$

> [!question] HIGH-WATER MARK FOR THE NEW INVESTOR
> Problem: A new investor enters after Year 2 with a personal high-water mark of **USD 108.9 million**. The fund still rises to **USD 128 million** in Year 3. Calculate the fee and investor return.
>
> ---
>
> Solution:
>
> $$
> R_{GP,\ HWM}=128 \times 1\%+(128-108.9)\times 20\%=5.10
> $$
>
> $$
> r_i=\frac{128-108.9-5.10}{108.9}=12.86\%
> $$

40. ==Exam trap: the same fund and same gross Year 3 performance produced **15.39%** for the old investor and **12.86%** for the new investor because their high-water marks differed.==

> [!example] THE NEW INVESTOR PAYS FOR THE COMEBACK PARTY
> Suppose a fund crashes from **USD 130 million** to **USD 110 million**. Old investors are still underwater, so the high-water mark protects them from paying performance fees on a mere recovery.
>
> A new investor who enters at **USD 110 million** does not have that old scar. If the fund rebounds to **USD 128 million**, the new investor may pay incentive fees while old investors pay less.

41. ==A clawback provision gives limited partners the right to reclaim part of the general partner’s performance fee if later losses reduce aggregate profits.==

> [!question] CLAWBACK
> Problem: One investment gains **USD 12 million**, another later loses **USD 10 million**, and carry is **20%**. Calculate the final carry after clawback.
>
> ---
>
> Solution:
>
> The manager may initially accrue **USD 2.4 million** carry:
>
> $$
> 12 \times 20\%=2.4
> $$
>
> But aggregate profit after the later loss is only **USD 2 million**, so final carry should be **USD 0.4 million**:
>
> $$
> (12-10)\times 20\%=0.4
> $$
>
> Explanation: ==**USD 2.0 million** of previously accrued performance fee must be returned to limited partner capital accounts== because final carry is only **USD 0.4 million**, not the initially accrued **USD 2.4 million**.

42. ==Soft hurdle means once the hurdle is met, carried interest can apply to a larger base through a catch-up arrangement. Hard hurdle means carry applies only to the amount above the hurdle.==

> [!question] SOFT HURDLE WITH CATCH-UP
> Problem: A property is bought for **USD 100 million** and sold after **2 years** for **USD 160 million**, with **8%** annual preferred return and **80/20** split. Calculate the soft-hurdle payout.
>
> ---
>
> Solution:
>
> Limited partners first receive **USD 100 million** capital back and **USD 16 million** preferred return. The general partner then receives **USD 4 million** catch-up, and the remaining **USD 40 million** is split **80/20**, giving **USD 32 million** to limited partners and **USD 8 million** to the general partner.
>
> Explanation: total soft-hurdle payout is **USD 148 million** to limited partners and **USD 12 million** to the general partner.

> [!question] HARD HURDLE WITHOUT CATCH-UP
> Problem: Use the same property facts, but now assume a hard hurdle with no catch-up. Calculate the payout.
>
> ---
>
> Solution:
>
> $$
> 44 \times 20\%=8.8
> $$
>
> Explanation: total hard-hurdle payout is **USD 151.2 million** to limited partners and **USD 8.8 million** to the general partner. ==Soft hurdle with catch-up gives the general partner more.==

> [!question] DIRECT HEDGE FUND VERSUS FUND OF FUNDS
> Problem: Direct hedge fund investment earns **20%** gross return and charges **2 and 20** fees. Calculate the direct investor return.
>
> ---
>
> Solution:
>
> $$
> \text{Management fee}=100 \times 2\%=2
> $$
>
> $$
> \text{Incentive fee}=20 \times 20\%=4
> $$
>
> $$
> \text{Investor return}=\frac{20-2-4}{100}=14\%
> $$

> [!question] FUND OF FUNDS DOUBLE-FEE DRAG
> Problem: The fund of funds earns **14%** after underlying hedge fund fees and then charges **1 and 10**. Calculate the investor return.
>
> ---
>
> Solution:
>
> $$
> \frac{14-1-(14 \times 10\%)}{100}=11.6\%
> $$
>
> Explanation: fund of funds may still provide due diligence, diversification, manager access, or access to a closed hedge fund, but ==the double-fee drag is real.==

#### Relative Returns and Biases

43. Relative performance needs benchmarks, but alternative benchmarks are dangerous if the peer group is not comparable.
44. ==Private equity and real estate comparisons are better when investments are from the same vintage year.== Vintage year means the year a fund starts its investment life, so funds are compared at similar life-cycle stages.
45. A mature private equity fund harvesting exits should not be lazily compared with a new fund still paying fees and deploying capital.
46. Hedge fund indexes have special bias problems because funds self-report, fail, close, or selectively join databases.
47. Survivorship bias happens when failed funds are excluded from the index, making average reported returns look too good.
48. Backfill bias happens when successful funds join an index later and add their good past returns to the database.
49. ==Both survivorship bias and backfill bias create upward bias in hedge fund indexes.==

> [!example] THE INDEX MAY BE A BEAUTY PAGEANT OF SURVIVORS
> Imagine a coaching center advertises only the students who cracked the exam and quietly removes everyone who failed. Then it adds the past mock scores of its toppers after discovering they were toppers.
>
> That is survivorship bias plus backfill bias. Hedge fund indexes can look cleaner than the actual set of funds investors had to choose from in real time.

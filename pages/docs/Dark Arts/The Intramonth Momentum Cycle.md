## 1. TL;DR

The paper says U.S. equity momentum is not spread evenly across the month. Most of it happens in **six trading days**, from **τ−9 to τ−4**, where **τ** is the last trading day of the month. The key driver is not winners rising. It is **loser stocks falling before month-end**. The authors argue this happens because investors need cash near month-end, so they sell stocks that are easiest to justify selling: liquid, underperforming, low-dividend, tax-loss stocks. They call this **asset dispensability**. Over 1980–2025, $1 invested in WML only during this six-day window grows to **$18.78**, versus **$2.37** outside the window. The strongest causal evidence is settlement-cycle reform: when settlement became faster, loser selling moved one day closer to month-end. The paper reframes a large part of momentum as **market plumbing**, not just psychology or hidden risk. 

---

## 2. One-Sentence Thesis

A large part of equity momentum exists because predictable month-end cash demand forces investors to sell **dispensable loser stocks** before settlement deadlines, creating temporary loser underperformance and therefore WML profits. 

---

## 3. The Problem

Classic momentum says:

> Stocks that performed well keep doing well, and stocks that performed badly keep doing badly.

Old explanations:

| Explanation | Story                                                         |
| ----------- | ------------------------------------------------------------- |
| Behavioral  | Investors underreact, so prices adjust slowly.                |
| Risk-based  | Momentum earns compensation for bearing hidden risk.          |
| Fund-flow   | Money flows into winning managers and out of losing managers. |

This paper asks a sharper question:

> **When exactly during the month are momentum profits earned?**

That timing reveals the mechanism.

If momentum comes from slow information diffusion, returns should not be so tightly packed into a six-day calendar window. If it comes from month-end cash demand, returns should concentrate exactly before settlement deadlines. The paper finds the second pattern. 

---

## 4. Core Building Blocks

### Momentum

Momentum means:

> Buy past winners, short past losers.

If Apple went up a lot over the last year and Intel went down a lot, a momentum strategy might buy Apple and short Intel.

---

### D1 and D10

The authors sort stocks into 10 groups.

| Group | Meaning                                 |
| ----- | --------------------------------------- |
| D1    | Bottom 10% by past return, loser stocks |
| D10   | Top 10% by past return, winner stocks   |

The sort uses returns from months **−12 to −2**. They skip the most recent month, which is standard in momentum research to avoid short-term reversal noise. 

---

### WML

$$
WML_t = R^{D10}_t - R^{D1}_t
$$

#### Purpose

This equation exists to measure the return of a momentum strategy.

#### Symbols

* $WML_t$: winners-minus-losers return on day $t$
* $R^{D10}_t$: return of winner stocks on day $t$
* $R^{D1}_t$: return of loser stocks on day $t$
* $t$: trading day

#### Build the equation

Start with winner return:

$$
R^{D10}_t
$$

Subtract loser return:

$$
R^{D10}_t - R^{D1}_t
$$

That gives the long-short momentum return.

#### Operation

The minus sign means:

> Compare winners against losers.

#### Financial meaning

This computes the daily return from buying winners and shorting losers.

If $WML_t$ increases, the momentum strategy is making more money.

#### Units

Usually percent or basis points per day.

#### Numerical example

Suppose:

$$
R^{D10}_t = 0.30%
$$

$$
R^{D1}_t = -0.20%
$$

Then:

$$
WML_t = 0.30% - $-0.20%$
$$

Subtracting a negative means adding:

$$
WML_t = 0.30% + 0.20% = 0.50%
$$

So WML earns **0.50%** that day.

**Forget the symbols. This equation is simply saying:** momentum makes money when winners beat losers. In this paper, the key point is that WML mostly earns money because losers fall, not because winners rise.

---

## 5. Key Calendar Idea

The paper defines:

$$
PreTOM = $$\tau - 9, \tau - 4$$
$$

#### Purpose

This equation defines the specific six-day window where the paper finds momentum profits.

#### Symbols

* $PreTOM$: pre-turn-of-the-month window
* $tau$: last trading day of the month
* $tau - 9$: ninth trading day before month-end
* $tau - 4$: fourth trading day before month-end
* $$\tau - 9, \tau - 4$$all trading days from $\tau - 9$ through $\tau - 4$, inclusive

#### Build the equation

Start with month-end:

$$
\tau
$$

Move backward nine trading days:

$$
\tau - 9
$$

Move backward four trading days:

$$
\tau - 4
$$

Take the full range:

$$
$$\tau - 9, \tau - 4$$
$$

#### Operation

The brackets mean:

> Include every trading day between the two endpoints.

#### Financial meaning

This identifies the cash-raising window before month-end settlement deadlines.

#### Units

Trading days.

#### Numerical example

Suppose the last trading day is day 21.

$$
\tau = 21
$$

Then:

$$
\tau - 9 = 12
$$

$$
\tau - 4 = 17
$$

So PreTOM is:

$$
$$12,17$$
$$

That means days 12, 13, 14, 15, 16, and 17.

**Forget the symbols. This equation is simply saying:** look about one to two weeks before month-end. That is where the paper says loser stocks get sold heavily.

---

## 6. How Everything Fits Together

The paper’s causal chain:

$$
\text{Month-end obligations}
\rightarrow
\text{cash demand}
\rightarrow
\text{investors sell before settlement deadline}
\rightarrow
\text{they sell liquid, dispensable stocks}
\rightarrow
\text{loser stocks face selling pressure}
\rightarrow
\text{loser prices fall}
\rightarrow
\text{WML earns positive returns}
$$

The important twist:

> Momentum profit is not mainly “winners keep winning.”
> It is mostly “losers get sold before month-end.”

---

## 7. Method

### Data

The authors use five main data sources:

| Data                                    | Purpose                          |
| --------------------------------------- | -------------------------------- |
| CRSP daily stocks, 1980–2025            | Build daily momentum deciles     |
| Fama-French factors                     | Market, SMB, HML, UMD controls   |
| TAQ intraday indicators, 2003–2022      | Measure buy/sell pressure        |
| Morningstar + CRSP mutual fund holdings | Link fund flows to stock selling |
| Compustat Global                        | Test international markets       |

The main stock-level panel has **53.3 million stock-day observations** from 1980–2025. 

---

### Design choice: fixed monthly sorts

Stocks are sorted once per month into momentum deciles and kept there for the month.

Why?

Because institutions do not rebuild portfolios every day. If a fund holds loser stocks going into month-end, those are the stocks that may be sold for cash.

Without fixed monthly sorts, the loser group would keep changing daily, making it harder to track actual selling pressure.

---

## 8. Main Portfolio Result

The paper compares two strategies:

| Strategy                                   | Result             |
| ------------------------------------------ | ------------------ |
| Invest in WML only during PreTOM           | $1 grows to $18.78 |
| Invest in WML during the rest of the month | $1 grows to $2.37  |
| Full WML                                   | $1 grows to $44.46 |

PreTOM is only **29% of trading days**, but earns **78% of WML cumulative log return**. 

That is economically large, not just statistically interesting.

---

## 9. Equation 1: Daily Momentum-Decile Returns

$$
r_{i,t} - r^m_t =
\sum_{d=1}^{10} b_{d,t} \mathbf{1}{D_{i,t}=d} + u_{i,t}
$$

### Step 1. Purpose

This equation exists to estimate the return of each momentum decile each day.

The authors want to know:

> On a given day, how did D1, D2, ..., D10 perform relative to the market?

---

### Step 2. Every Symbol

* $r_{i,t}$: return of stock $i$ on day $t$
* $i$: stock index
* $t$: trading day
* $r^m_t$: market return on day $t$
* $r_{i,t} - r^m_t$: stock return after subtracting the market return
* $sum_{d=1}^{10}$: add across all 10 momentum deciles
* $d$: decile number, from 1 to 10
* $b_{d,t}$: estimated market-adjusted return of decile $d$ on day $t$
* $mathbf{1}{D_{i,t}=d}$: indicator equal to 1 if stock $i$ belongs to decile $d$, otherwise 0
* $D_{i,t}$: momentum decile of stock $i$ on day $t$
* $u_{i,t}$: unexplained stock-specific part

---

### Step 3. Build the equation

Start with a stock’s return:

$$
r_{i,t}
$$

Subtract the market:

$$
r_{i,t} - r^m_t
$$

This isolates performance beyond the market.

Now ask: which momentum decile is the stock in?

If stock $i$ is in D1, then:

$$
\mathbf{1}{D_{i,t}=1}=1
$$

and the other decile indicators are 0.

So the equation selects the right decile return.

---

### Step 4. Operations

* Subtraction: remove market movement.
* Summation: add the contribution from all decile indicators.
* Indicator: acts like an on/off switch.
* Error term: captures what the decile label does not explain.

---

### Step 5. Statistical model

* Dependent variable: $r_{i,t} - r^m_t$
* Independent variables: decile indicators
* Coefficients: $b_{d,t}$
* Residual: $u_{i,t}$
* Estimation method: daily cross-sectional regression
* Interpretation: $b_{d,t}$ is the market-adjusted return of decile $d$ that day

---

### Step 6. Financial meaning

It computes how each momentum bucket performs after removing broad market movement.

If $b_{1,t}$ becomes more negative, loser stocks are doing worse relative to the market.

---

### Step 7. Units

Basis points or percent per day.

---

### Step 8. Numerical example

Suppose there are only 2 deciles.

Stock A is in D1.

$$
r_{A,t}=0.20%
$$

$$
r^m_t=0.10%
$$

Then:

$$
r_{A,t}-r^m_t=0.20%-0.10%=0.10%
$$

If Stock A is in D1:

$$
\mathbf{1}{D_{A,t}=1}=1
$$

$$
\mathbf{1}{D_{A,t}=2}=0
$$

So:

$$
0.10%=b_{1,t}\cdot 1 + b_{2,t}\cdot 0 + u_{A,t}
$$

$$
0.10%=b_{1,t}+u_{A,t}
$$

The regression uses all stocks to estimate $b_{1,t}$.

**Forget the symbols. This equation is simply saying:** each stock belongs to a momentum bucket, and the regression estimates how each bucket performed that day after removing the market.

---

## 10. Equation 2: Is the Decile Return Different During PreTOM?

$$
b_{d,t} = c^d_0 + c^d_1 PreTOM_t + v_{d,t}
$$

### Step 1. Purpose

Equation 1 gives daily decile returns. Equation 2 asks:

> Are those daily decile returns different during PreTOM?

---

### Step 2. Every Symbol

* $b_{d,t}$: market-adjusted return of decile $d$ on day $t$
* $d$: decile, usually D1 or D10 here
* $c^d_0$: average return of decile $d$ outside PreTOM
* $c^d_1$: extra return during PreTOM
* $PreTOM_t$: equals 1 if day $t$ is in the PreTOM window, otherwise 0
* $v_{d,t}$: residual noise

---

### Step 3. Build the equation

Start with normal decile return:

$$
c^d_0
$$

Then add the PreTOM effect:

$$
c^d_1 PreTOM_t
$$

If it is not PreTOM:

$$
PreTOM_t=0
$$

So:

$$
b_{d,t}=c^d_0
$$

If it is PreTOM:

$$
PreTOM_t=1
$$

So:

$$
b_{d,t}=c^d_0+c^d_1
$$

---

### Step 4. Operations

* Addition: baseline return plus PreTOM effect.
* Multiplication by 0 or 1: turns PreTOM effect off or on.

---

### Step 5. Statistical model

* Dependent variable: decile return $b_{d,t}$
* Independent variable: PreTOM indicator
* Intercept: $c^d_0$
* Coefficient: $c^d_1$
* Residual: $v_{d,t}$
* Estimated quantity: PreTOM-minus-Rest difference

---

### Step 6. Main result

For losers:

* Rest-day average: $-0.87$ bps/day
* PreTOM average: $-7.98$ bps/day
* Difference: $-7.12$ bps/day

For winners:

* Rest-day average: $+1.52$ bps/day
* PreTOM average: $+2.17$ bps/day
* Difference: $+0.65$ bps/day, statistically weak

So the effect is on losers, not winners. 

---

### Step 7. Units

Basis points per day.

1 basis point = 0.01%.

So:

$$
-7.12 \text{ bps} = -0.0712%
$$

---

### Step 8. Numerical example

For loser stocks:

$$
c^1_0=-0.87
$$

$$
c^1_1=-7.12
$$

On a Rest day:

$$
b_{1,t}=-0.87 + $-7.12$$0$
$$

$$
b_{1,t}=-0.87
$$

On a PreTOM day:

$$
b_{1,t}=-0.87 + $-7.12$$1$
$$

$$
b_{1,t}=-7.99
$$

That matches the paper’s $-7.98$ bps/day.

**Forget the symbols. This equation is simply saying:** loser stocks do not underperform equally all month. They get hit mainly before month-end.

---

## 11. Equation 3: Main Stock-Level Regression

$$
r_{i,t} - r^m_t
===============

\beta_1 Loser_{i,t}
+
\beta_2 Loser_{i,t} \times PreTOM_t
+
\mu_i
+
\delta_t
+
\epsilon_{i,t}
$$

### Step 1. Purpose

This is the paper’s central regression.

It asks:

> After controlling for each stock’s usual behavior and each day’s market-wide shock, do loser stocks perform especially badly during PreTOM?

---

### Step 2. Every Symbol

* $r_{i,t}$: return of stock $i$ on day $t$
* $r^m_t$: market return on day $t$
* $r_{i,t} - r^m_t$: market-adjusted stock return
* $Loser_{i,t}$: equals 1 if stock $i$ is in the bottom momentum decile, otherwise 0
* $PreTOM_t$: equals 1 if day $t$ is in $$$\tau-9,\tau-4$$$, otherwise 0
* $Loser_{i,t} \times PreTOM_t$: equals 1 only when the stock is a loser and the day is PreTOM
* $beta_1$: normal loser effect outside PreTOM
* $beta_2$: extra loser effect during PreTOM
* $mu_i$: stock fixed effect
* $delta_t$: day fixed effect
* $epsilon_{i,t}$: residual error

---

### Step 3. Build the equation

Start with market-adjusted return:

$$
r_{i,t} - r^m_t
$$

Add whether the stock is a loser:

$$
\beta_1 Loser_{i,t}
$$

Add whether the stock is both a loser and in PreTOM:

$$
\beta_2 Loser_{i,t} \times PreTOM_t
$$

Add stock fixed effects:

$$
\mu_i
$$

This controls for permanent stock-specific differences.

Add day fixed effects:

$$
\delta_t
$$

This controls for shocks affecting all stocks on the same day.

Add residual:

$$
\epsilon_{i,t}
$$

This is what remains unexplained.

---

### Step 4. Operations

* Subtraction: removes market return.
* Multiplication: creates an interaction.
* Interaction: asks whether two conditions happen together.
* Addition: combines baseline loser effect, PreTOM loser effect, fixed effects, and noise.
* Fixed effects: remove repeated stock-specific and day-specific patterns.

---

### Step 5. Statistical model

* Dependent variable: stock’s market-adjusted daily return
* Independent variables: loser indicator and loser × PreTOM interaction
* Coefficient of interest: $beta_2$
* Residual: $epsilon_{i,t}$
* Estimation: panel regression
* Standard errors: double-clustered by stock and day
* Estimated quantity: extra PreTOM underperformance of losers

What is assumed:

* The fixed effects absorb stable stock traits and common day shocks.
* The remaining variation identifies loser-specific PreTOM pressure.
* Standard-error clustering handles correlation within stocks and within days.

What is estimated:

* $beta_1$
* $beta_2$
* fixed effects
* residual variation

---

### Step 6. Financial meaning

$beta_2$ measures how much more loser stocks fall during PreTOM than they normally do.

The paper estimates:

$$
\beta_2 = -7.15 \text{ bps/day}
$$

That means loser stocks lose about **0.0715% extra per day** during PreTOM. 

---

### Step 7. Units

Basis points per day.

---

### Step 8. Numerical example

Suppose:

$$
\beta_1=-1
$$

$$
\beta_2=-7
$$

Case 1: stock is not a loser.

$$
Loser=0
$$

$$
PreTOM=1
$$

Then:

$$
\beta_1 Loser = $-1$$0$=0
$$

$$
\beta_2 Loser \times PreTOM = $-7$$0$$1$=0
$$

No loser penalty.

Case 2: stock is a loser, but not PreTOM.

$$
Loser=1
$$

$$
PreTOM=0
$$

$$
\beta_1 Loser = $-1$$1$=-1
$$

$$
\beta_2 Loser \times PreTOM = $-7$$1$$0$=0
$$

Total loser effect:

$$
-1 \text{ bp}
$$

Case 3: stock is a loser during PreTOM.

$$
Loser=1
$$

$$
PreTOM=1
$$

$$
\beta_1 Loser = $-1$$1$=-1
$$

$$
\beta_2 Loser \times PreTOM = $-7$$1$$1$=-7
$$

Total loser effect:

$$
-1 + $-7$ = -8 \text{ bps}
$$

**Forget the symbols. This equation is simply saying:** compare losers to other stocks, but only after removing stock-specific habits and market-wide daily shocks. Losers fall especially hard during the pre-month-end window.

---

## 12. Why Liquid Losers Matter

The authors test whether the effect is stronger among liquid loser stocks.

Why?

If institutions need to raise cash quickly, they prefer stocks that are cheap to trade. A stock with a narrow bid-ask spread is cheaper to sell.

The bid-ask spread is:

$$
BAS_{i,t} = \frac{Ask_{i,t} - Bid_{i,t}}{Midpoint_{i,t}}
$$

### Purpose

This measures trading cost.

### Symbols

* $Ask_{i,t}$: price at which you can buy stock $i$
* $Bid_{i,t}$: price at which you can sell stock $i$
* $Midpoint_{i,t}$: average of bid and ask
* $BAS_{i,t}$: bid-ask spread as a percentage

### Build it

Take the ask price.

Subtract the bid price.

Divide by the midpoint.

### Operations

* Subtraction: measures the gap between buying and selling price.
* Division: converts that gap into a percentage of stock price.

### Numerical example

Suppose:

$$
Ask=101
$$

$$
Bid=99
$$

$$
Midpoint=\frac{101+99}{2}=100
$$

Then:

$$
BAS=\frac{101-99}{100}
$$

$$
BAS=\frac{2}{100}=0.02=2%
$$

A 2% spread is expensive.

If:

$$
Ask=100.01
$$

$$
Bid=99.99
$$

$$
Midpoint=100
$$

Then:

$$
BAS=\frac{0.02}{100}=0.0002=0.02%
$$

That stock is cheap to trade.

**Forget the symbols. This equation is simply saying:** a small bid-ask spread means the stock is easy and cheap to sell.

The paper finds the PreTOM loser effect is stronger among liquid losers, consistent with institutional selling rather than random information shocks. 

---

## 13. Selling Pressure Evidence

The paper then directly checks whether loser stocks are actually being sold.

$$
NetSell_{i,t}
=============

\beta_1 Loser_{i,t}
+
\beta_2 Loser_{i,t} \times PreTOM_t
+
\mu_i
+
\delta_t
+
\epsilon_{i,t}
$$

### Step 1. Purpose

This equation asks:

> Are loser stocks sold more aggressively during PreTOM?

This moves the paper from return evidence to trading evidence.

---

### Step 2. Every Symbol

* $NetSell_{i,t}$: net selling pressure for stock $i$ on day $t$
* $Loser_{i,t}$: 1 if stock is in D1
* $PreTOM_t$: 1 if day is in the PreTOM window
* $Loser_{i,t} \times PreTOM_t$: loser stock during PreTOM
* $beta_2$: extra selling pressure on losers during PreTOM
* $mu_i$: stock fixed effect
* $delta_t$: day fixed effect
* $epsilon_{i,t}$: residual

---

### Step 3. Build it

Instead of explaining stock returns, this explains order flow.

Start with net selling pressure.

Add normal loser effect.

Add extra loser-selling effect during PreTOM.

Control for stock and day effects.

---

### Step 4. Operations

Same regression logic as Equation 3.

The interaction isolates:

> loser stock + PreTOM day.

---

### Step 5. Units

$NetSell$ ranges from:

$$
-1 \text{ to } +1
$$

* $-1$: all buyer-initiated volume
* $+1$: all seller-initiated volume

---

### Step 6. Main result

The paper finds:

$$
\beta_2 = +0.0020
$$

That means losers face an additional **0.2 percentage points** of net selling pressure during PreTOM. 

---

### Step 7. Financial meaning

This directly supports the mechanism.

Returns fall because there is actual selling pressure, not merely because of a statistical calendar artifact.

---

### Step 8. Numerical example

Suppose normal net selling pressure is:

$$
0.010 = 1.0%
$$

For loser stocks during PreTOM, add:

$$
0.002 = 0.2%
$$

Then:

$$
0.010 + 0.002 = 0.012
$$

So net selling pressure becomes:

$$
1.2%
$$

**Forget the symbols. This equation is simply saying:** during the pre-month-end window, loser stocks are not just falling. They are being sold more.

---

## 14. Why Losers Are “Dispensable”

The paper’s core concept is **asset dispensability**.

A dispensable stock is one investors are willing to sell first when they need cash.

Losers are dispensable for three reasons:

| Reason                   | Why it makes selling easier                      |
| ------------------------ | ------------------------------------------------ |
| Tax loss                 | Selling realizes a loss, which may help taxes    |
| Low dividends            | Selling gives up less future cash income         |
| Salient underperformance | Managers under pressure reach for obvious losers |

The paper says distance from the 52-week high captures dispensability better than classic 12-2 momentum. A stock far below its 52-week high is likely to be a painful underperformer, a tax-loss candidate, and often a non-dividend payer. Sorting on distance from 52-week high gives a larger PreTOM premium: $1 grows to **$45.72** during PreTOM, versus **$18.78** for standard WML PreTOM. 

---

## 15. Reversal Evidence

If loser underperformance comes from temporary selling pressure, some of it should reverse after the cash-raising window ends.

The paper tests:

$$
r_{i,t} - r^m_t
===============

\beta_1 Loser_{i,t}
+
\beta_2 Loser_{i,t} \times PreTOM_t
+
\beta_3 Loser_{i,t} \times Post_t
+
\mu_i
+
\delta_t
+
\epsilon_{i,t}
$$

### Step 1. Purpose

This equation asks:

> Do loser stocks recover after the PreTOM selling pressure ends?

---

### Step 2. Every Symbol

* $Post_t$: equals 1 in the seven-day window $$$\tau-3,\tau+3$$$
* $beta_2$: extra loser underperformance during PreTOM
* $beta_3$: loser rebound during Post
* Other symbols are the same as Equation 3

---

### Step 3. Build it

Start with loser return.

Add PreTOM pressure.

Add Post-month-end rebound.

Control for stock and day effects.

---

### Step 4. Main result

The PreTOM gap widens by:

$$
\beta_2 = -5.59 \text{ bps/day}
$$

The Post gap narrows by:

$$
\beta_3 = +3.36 \text{ bps/day}
$$

Cumulatively, the Post rebound recovers about **70%** of the PreTOM underperformance. 

---

### Step 5. Numerical example

PreTOM lasts 6 days.

$$
6 \times $-5.59$ = -33.54 \text{ bps}
$$

Post lasts 7 days.

$$
7 \times 3.36 = 23.52 \text{ bps}
$$

Recovery ratio:

$$
\frac{23.52}{33.54}=0.701
$$

So about:

$$
70.1%
$$

is recovered.

**Forget the symbols. This equation is simply saying:** losers get pushed down before month-end, then much of that pressure unwinds afterward.

---

## 16. Settlement-Cycle Evidence

This is the cleanest evidence in the paper.

Settlement means:

> If you sell a stock today, when do you actually receive usable cash?

| Settlement rule | Meaning                                  |
| --------------- | ---------------------------------------- |
| T+3             | Cash arrives 3 business days after trade |
| T+2             | Cash arrives 2 business days after trade |
| T+1             | Cash arrives 1 business day after trade  |

If investors sell to raise month-end cash, then faster settlement should allow them to sell later.

The paper tests exactly this.

---

## 17. U.S. T+2 to T+1 Reform

After the U.S. moved from T+2 to T+1 in May 2024:

* old marginal selling day: $tau-4$
* new marginal selling day: $tau-3$

Prediction:

$$
\text{selling pressure should move from } \tau-4 \text{ to } \tau-3
$$

That is what the paper finds. Loser returns improve at $tau-4$ and deteriorate at $tau-3$. The post-reform sample is short, but the difference between the two days is statistically significant. 

---

## 18. Difference-in-Differences Regression

$$
R^{D1}_t - r^m_t
================

\alpha
+
\beta_{\tau-4}\mathbf{1}$$\tau-4$$
+
\beta_{\tau-3}\mathbf{1}$$\tau-3$$
+
\pi T1Reform_t
+
\theta_{\tau-4}\mathbf{1}$$\tau-4$$\times T1Reform_t
+
\theta_{\tau-3}\mathbf{1}$$\tau-3$$\times T1Reform_t
+
\epsilon_t
$$

### Step 1. Purpose

This equation asks:

> Did loser-stock returns change specifically on the old and new settlement-boundary days after the T+1 reform?

---

### Step 2. Every Symbol

* $R^{D1}_t$: return of the loser portfolio on day $t$
* $r^m_t$: market return on day $t$
* $R^{D1}_t - r^m_t$: loser portfolio return after removing market return
* $alpha$: baseline return
* $mathbf{1}$$\tau-4$$$: equals 1 if the day is four trading days before month-end
* $mathbf{1}$$\tau-3$$$: equals 1 if the day is three trading days before month-end
* $T1Reform_t$: equals 1 after the T+1 reform, otherwise 0
* $theta_{\tau-4}$: post-reform change at $tau-4$
* $theta_{\tau-3}$: post-reform change at $tau-3$
* $epsilon_t$: residual error

---

### Step 3. Build it

Start with loser portfolio market-adjusted return.

Add special effects for $tau-4$ and $tau-3$.

Add whether the T+1 reform has happened.

Add interaction terms:

$$
\mathbf{1}$$\tau-4$$\times T1Reform_t
$$

and

$$
\mathbf{1}$$\tau-3$$\times T1Reform_t
$$

These ask whether those specific days changed after the reform.

---

### Step 4. Operations

* Indicator: turns a variable on for a specific day.
* Interaction: asks whether a day changed after reform.
* Difference-in-differences: compares before vs after, treated days vs control days.

---

### Step 5. Financial meaning

The key object is:

$$
\theta_{\tau-4} - \theta_{\tau-3}
$$

This measures whether selling pressure moved from the old boundary day to the new boundary day.

The paper finds:

$$
\theta_{\tau-4} - \theta_{\tau-3}=+85.9 \text{ bps}
$$

with $t=2.68$. 

---

### Step 6. Numerical example

Suppose after reform:

* $tau-4$ improves by +50 bps
* $tau-3$ worsens by -35 bps

Then:

$$
\theta_{\tau-4}=+50
$$

$$
\theta_{\tau-3}=-35
$$

Difference:

$$
50 - $-35$=85
$$

That means the relative movement is 85 bps.

**Forget the symbols. This equation is simply saying:** when settlement became faster, investors could delay selling by one day, and loser-stock pressure moved by one day.

---

## 19. European Settlement Reform

Europe moved from T+3 to T+2 in October 2014.

Prediction:

$$
\tau-5 \rightarrow \tau-4
$$

The paper finds the same pattern across 15 European markets:

* selling pressure moves one day closer to month-end
* 12 of 15 countries have the predicted sign
* pooled estimate is statistically significant

This cross-market result matters because it reduces the chance that the U.S. finding is a coincidence. 

---

## 20. International Evidence

The paper tests 20 developed markets.

For the 19 markets with normal momentum, loser stocks underperform more during PreTOM by:

$$
-4.48 \text{ bps/day}
$$

Winners do not show the same pattern. WML shows a positive PreTOM differential of:

$$
+5.16 \text{ bps/day}
$$

Japan is treated separately because Japan historically has reversed or weak momentum. 

---

## 21. Mutual Fund Evidence

The paper revisits Carhart’s classic result:

> Past loser mutual funds keep underperforming.

Carhart says this happens because:

1. loser funds have bad momentum exposure
2. loser funds charge higher expenses

This paper adds timing:

> The momentum-related part of loser-fund underperformance happens mainly during PreTOM.

The daily fund regression is:

$$
r^{Dk}_d - r^f_d
================

\alpha^{Dk}*{PreTOM}\mathbf{1}*{d\in PreTOM}
+
\alpha^{Dk}*{Rest}\mathbf{1}*{d\in Rest}
+
\beta^{Dk}MKT!-!rf_d
+
s^{Dk}SMB_d
+
h^{Dk}HML_d
+
\gamma^{Dk}r^{Loser}_d
+
\epsilon_d
$$

### Step 1. Purpose

This equation asks:

> Is loser-fund underperformance really fund skill failure, or is it just exposure to loser stocks that get sold during PreTOM?

---

### Step 2. Every Symbol

* $r^{Dk}_d$: return of mutual funds in performance decile $Dk$ on day $d$
* $r^f_d$: risk-free return on day $d$
* $r^{Dk}_d - r^f_d$: fund excess return
* $alpha^{Dk}_{PreTOM}$: abnormal fund return during PreTOM
* $alpha^{Dk}_{Rest}$: abnormal fund return outside PreTOM
* $mathbf{1}_{d\in PreTOM}$: 1 if day is PreTOM
* $mathbf{1}_{d\in Rest}$: 1 if day is Rest
* $MKT-rf_d$: market excess return
* $SMB_d$: size factor
* $HML_d$: value factor
* $r^{Loser}_d$: return on loser-stock portfolio
* $gamma^{Dk}$: fund exposure to loser stocks
* $epsilon_d$: residual

---

### Step 3. Build it

Start with fund excess return.

Split abnormal return into PreTOM alpha and Rest alpha.

Add standard factor exposures.

Add loser-stock exposure.

See whether alpha disappears.

---

### Step 4. Main result

For D1 loser funds:

* PreTOM alpha before loser-stock control: $-2.02$ bps/day
* PreTOM alpha after loser-stock control: $-0.38$ bps/day

So loser-stock exposure absorbs most of the PreTOM fund underperformance.

Outside PreTOM, alpha falls from $-2.40$ to $-1.82$ bps/day, so expense drag remains. 

---

### Step 5. Financial meaning

Loser funds underperform during PreTOM because they hold loser stocks.

They underperform during the rest of the month partly because of fees and expenses.

---

### Step 6. Numerical example

Suppose a loser fund loses:

$$
-2.02 \text{ bps/day}
$$

during PreTOM.

After controlling for loser-stock exposure, it loses only:

$$
-0.38 \text{ bps/day}
$$

Explained amount:

$$
-2.02 - $-0.38$ = -1.64 \text{ bps/day}
$$

So loser-stock exposure explains:

$$
\frac{1.64}{2.02}=0.812
$$

About **81%** of the PreTOM alpha loss.

**Forget the symbols. This equation is simply saying:** bad funds look especially bad before month-end because they hold the stocks everyone is selling.

---

## 22. Crash Risk

A natural objection:

> Maybe PreTOM earns high returns because it avoids momentum crashes.

The paper says no.

Momentum crashes mostly happen at **month-start**, not during PreTOM. PreTOM has high average WML profits, while month-start has crash concentration. These are different calendar regions. 

This matters because it weakens the “PreTOM premium is just crash compensation” explanation.

---

## 23. Alternative Explanations the Paper Rejects

| Alternative              | Why paper says it fails                                                   |
| ------------------------ | ------------------------------------------------------------------------- |
| Tax-loss selling alone   | Effect remains outside December and outside quarter-end months            |
| Window dressing          | Non-quarter-end months still show the effect                              |
| Benchmark rebalancing    | Value-weighted benchmark funds would not need to sell after price drops   |
| Fixed-weight rebalancing | Would imply buying losers, not selling them                               |
| Market beta              | WML has near-zero market beta; loser × PreTOM remains after beta controls |
| Transaction costs        | Net PreTOM concentration survives especially after decimalization         |

The transaction-cost section is important. Over 1980–2025, monthly WML earns 91.3 bps gross and 11.5 bps net, with 65% of gross premium during PreTOM. After decimalization, PreTOM-only earns 54.1 bps gross and 14.9 bps net, while Rest-only earns negative net returns. 

---

## 24. What Is Evidence vs Interpretation?

### Observed evidence

* WML profits concentrate in PreTOM.
* Losers drive the effect.
* Losers experience net selling pressure during PreTOM.
* Liquid losers are hit more.
* Part of the price pressure reverses.
* Settlement reforms shift the timing by one day.
* The pattern appears internationally.
* Mutual fund loser underperformance inherits the same timing.

### Authors’ interpretation

The selling is caused by predictable month-end cash needs.

Investors sell the stocks they find most dispensable.

### Alternative explanation still possible?

Some part could still reflect other calendar behavior, fund-flow seasonality, tax behavior, or omitted institutional constraints. But the settlement-cycle evidence makes pure coincidence less likely.

---

## 25. Practical Meaning

### For a quant researcher

Do not treat momentum as a smooth monthly factor.

Split WML by calendar window:

* PreTOM WML
* Rest-of-month WML
* Month-start WML

Then test whether your alpha comes from the same loser-selling channel.

---

### For a portfolio manager

If your portfolio is overweight loser stocks, the risk is not uniform across the month.

Loser exposure is most dangerous before month-end.

---

### For a trader

A naive implementation is:

* monitor liquid D1 stocks before PreTOM
* monitor 52-week-high-distance losers
* compare expected PreTOM premium against borrow cost, spread cost, capacity, and crowding

But this is not automatically free money.

---

### For a risk manager

Create a calendar stress:

> What happens if loser-heavy books face concentrated selling from $tau-9$ to $tau-4$?

Also stress liquidity shocks like March 2020, because the paper argues the mechanism generalizes beyond normal month-end cycles. 

---

## 26. Limitations

### 1. Post-T+1 sample is short

The May 2024 reform is powerful but recent. The paper itself says individual day-level estimates are imprecise, although the predicted difference is statistically significant. 

### 2. TAQ trade classification has noise

Buy/sell initiation is inferred, not perfectly observed. That can attenuate selling-pressure estimates.

### 3. Dispensability is a proxy

Distance from 52-week high is not literally “desire to sell.” It proxies embedded losses, salience, and dividend patterns.

### 4. Strategy implementation is hard

A real strategy needs:

* borrow availability
* transaction costs
* market impact
* shorting constraints
* crowding control
* tax treatment
* capacity analysis

### 5. It does not explain all momentum

The paper explains a large and important component of momentum timing. It does not prove every momentum episode is caused by cash demand.

---

## 27. Common Misunderstandings

### Mistake 1

> “Momentum works because winners rise before month-end.”

Wrong. The paper says the effect is mostly from **losers falling**.

### Mistake 2

> “This proves all momentum is liquidity demand.”

Wrong. It reframes a large part of momentum, but not all of it.

### Mistake 3

> “This is just tax-loss selling.”

Wrong. The effect remains outside December and outside quarter-end months.

### Mistake 4

> “This is immediately tradable.”

Wrong. The paper documents gross and net patterns, but real trading still faces capacity, borrowing, spreads, and market impact.

### Mistake 5

> “The crash risk is in PreTOM.”

Wrong. Momentum crashes concentrate more at month-start, not in the PreTOM profit window. 

---

## 28. Final Mental Model

Forget the mathematics. The paper is really saying: momentum looks like a mysterious behavioral or risk anomaly until you put it on a calendar. Before month-end, investors need settled cash, so they sell the stocks easiest to dump: liquid losers. That selling pressure pushes loser prices down, and a winners-minus-losers portfolio profits mostly because the short leg falls. Settlement reforms move the pressure by exactly the kind of one-day shift this cash-settlement story predicts.

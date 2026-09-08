## Variant: Decide Whether a Benchmark Is Fit for the Job

**Abstract:** *A benchmark is the cheap passive alternative the manager is trying to beat. It must represent the mandate, be investable at low cost, and have observable rules and returns.*

> A global small-cap manager is judged against a private index of 40 large-cap domestic stocks. Its weights are disclosed only after year-end, and no passive fund can replicate it. Is this a valid benchmark? Explain each failure and whether the zero-sum argument for active management applies cleanly.

**Active management. What is active management?** It means deliberately choosing holdings or weights that differ from a benchmark in an attempt to beat it. **Benchmark. What is a benchmark?** It is the comparison portfolio—the plain, low-cost alternative the manager is supposed to beat. **Mandate. What is a mandate?** It is the agreed job the manager was hired to do. **Representative. What does representative mean?** The benchmark owns the same kind of investments allowed by the mandate. **Small-cap and large-cap. What do those mean?** Small-cap companies have relatively small stock-market values; large-cap companies have relatively large ones. **Index. What is an index?** It is a rules-based list of investments whose combined return represents a market. **Passive fund. What is a passive fund?** It simply copies an index instead of choosing active bets. **Replicate. What does replicate mean?** It means buying the same holdings in the same weights. **Investable and observable. What do those mean?** Investable means the benchmark can actually be bought at reasonable cost; observable means its rules, weights, and returns can be checked. **Zero-sum. What does zero-sum mean here?** Before fees, one manager's win against the whole market must be another manager's loss.

**1. Run the three-part benchmark check**

- **Representative?** No. Large-cap domestic stocks are not the global small-cap investments the manager was hired to choose from.
- **Replicable at low cost?** No. The client cannot actually hold this “passive alternative.”
- **Observable?** No. Hidden weights prevent checking the benchmark beforehand or measuring performance promptly.

$$
\boxed{\text{Reject the benchmark}}
$$

**2. Handle the zero-sum claim carefully**

Active management is zero-sum before costs when the benchmark is **float-adjusted and capitalization-weighted**. What does that mean? Each company's weight follows its publicly tradable stock-market value: $w_i=\text{float-adjusted market value}_i/\sum_j\text{float-adjusted market value}_j$. The benchmark must also cover the complete relevant market. This narrow, mismatched index does not meet that setup because managers can own assets outside it.

> [!NOTE]
> A benchmark is not decoration. If it is not representative, replicable, and observable, “value added” is being measured against a ghost portfolio.

---

## Variant: Calculate Portfolio, Benchmark, and Active Return

**Abstract:** *Build both portfolios from weight times return, then subtract benchmark return from managed return. A positive portfolio return alone proves nothing about active skill.*

> Stocks return 14% and bonds return 2%. The benchmark is 60% stocks and 40% bonds; the manager holds 70% and 30%. Calculate both returns and value added.

**Portfolio. What is a portfolio?** It is the basket of investments owned together. **Portfolio return. What is portfolio return?** It is the weighted return on that basket: $R_P=\sum_i w_{P,i}R_i$. **Benchmark return. What is benchmark return?** It is the weighted return on the comparison basket: $R_B=\sum_i w_{B,i}R_i$. **Active return—or value added. What is that?** It is the extra return created, or lost, by moving away from the benchmark: $R_A=R_P-R_B$.

**1. Price the passive alternative**

$$
R_B=0.60(14\%)+0.40(2\%)=\boxed{9.20\%}
$$

**2. Price what the manager actually held**

$$
R_P=0.70(14\%)+0.30(2\%)=\boxed{10.40\%}
$$

**3. Measure the manager, not the market**

$$
R_A=R_P-R_B=10.40\%-9.20\%=\boxed{1.20\%}
$$

The manager added 1.20 percentage points relative to the passive portfolio.

> [!NOTE]
> Active return is benchmark-relative: $R_A=R_P-R_B$. Positive absolute return can still mean negative value added.

---

## Variant: Calculate Active Weights and Security Contributions

**Abstract:** *Active weight is the manager's deviation from the benchmark. Multiply that bet by the asset return; overweights in winners and underweights in losers create value.*

> A country portfolio has benchmark/managed weights of UK 17%/16%, Japan 25%/14%, France 11%/8%, Germany 9%/24%, and Other 38%/38%. Returns are −7.6%, −9.0%, −3.5%, −15.8%, and −0.1%. Find the largest bets and total value added.

**Weight. What is a weight?** It is the percentage of the whole portfolio placed in one investment. **Active weight. What is an active weight?** It is the manager's weight minus the benchmark's weight: $\Delta w_i=w_{P,i}-w_{B,i}$. Positive means an overweight; negative means an underweight. **Security contribution. What is that?** It is the piece of value added caused by one bet: $\Delta w_iR_i$. Add every contribution to get $R_A=\sum_i\Delta w_iR_i$.

**1. Subtract benchmark weights from managed weights**

$$
\Delta w=(-1\%,-11\%,-3\%,+15\%,0\%)
$$

Germany is the largest overweight at $+15\%$; Japan is the largest underweight at $-11\%$.

**2. Add each bet's contribution**

$$
R_A=(-0.01)(-7.6\%)+(-0.11)(-9.0\%)+(-0.03)(-3.5\%)+(0.15)(-15.8\%)
$$

$$
R_A=0.076\%+0.990\%+0.105\%-2.370\%=\boxed{-1.199\%\approx-1.20\%}
$$

The Japan underweight helped, but the much larger German overweight got crushed.

> [!NOTE]
> A negative weight times a negative return contribution is positive: avoiding a loser can add value just like owning a winner.

---

## Variant: Separate Active Return from Beta-Adjusted Alpha

**Abstract:** *Active return merely subtracts the benchmark; alpha also adjusts for benchmark sensitivity. They match only when portfolio beta equals one.*

> A portfolio returns 8.6%, its benchmark returns 7.4%, and portfolio beta is 1.10. Calculate active return and the module's simplified beta-adjusted alpha.

**Beta. What is beta?** It tells you how strongly the portfolio tends to move when the benchmark moves: $\beta_P=\operatorname{Cov}(R_P,R_B)/\operatorname{Var}(R_B)$. **Covariance and variance. What are those?** Covariance measures whether two returns move together; variance is one return's own volatility squared. Beta 1.10 means roughly 1.10% of movement for each 1% benchmark move. **Alpha. What is alpha?** It is return left after charging for benchmark exposure: $\alpha_P=R_P-\beta_PR_B$. **Beta-adjusted. What does that mean?** Compare the portfolio with $\beta_PR_B$, not blindly with one copy of $R_B$.

**Active return. What is active return?** It is the unadjusted benchmark gap: $R_A=R_P-R_B$. Alpha and active return answer different questions unless $\beta_P=1$.

**1. Calculate the plain benchmark gap**

$$
R_A=8.6\%-7.4\%=\boxed{1.20\%}
$$

**2. Charge the portfolio for its extra benchmark exposure**

$$
\alpha_P=R_P-\beta_PR_B
$$

$$
\alpha_P=8.6\%-1.10(7.4\%)=\boxed{0.46\%}
$$

The portfolio beat the benchmark by 1.20%, but 0.74 percentage point of that gap is associated with beta above one.

> [!NOTE]
> Do not casually rename active return “alpha.” $R_A=\alpha_P$ only when $\beta_P=1$ in this module's setup.

---

## Variant: Decompose Value Added into Allocation and Selection

**Abstract:** *Allocation asks whether the manager put extra weight in the right asset classes. Selection asks whether the chosen funds beat each class benchmark.*

> Actual weights are 68% equities and 32% bonds versus policy weights of 60% and 40%. Equity fund/benchmark returns are −5.6%/−4.5%; bond fund/benchmark returns are −0.3%/0.0%. Decompose value added using the curriculum convention.

**Asset class. What is an asset class?** It is a broad investment bucket, such as equities or bonds. **Policy weight. What is a policy weight?** It is the client's planned long-run percentage for an asset class—the neutral starting point. **Asset allocation. What is asset allocation?** It is the decision to put more or less money in those broad buckets; its contribution is $R_{allocation}=\sum_i(w_{P,i}-w_{B,i})R_{B,i}$. **Security selection. What is security selection?** It is the decision about what to own inside each bucket; its contribution is $R_{selection}=\sum_iw_{P,i}(R_{P,i}-R_{B,i})$. **Attribution. What is attribution?** It is the split $R_A=R_{allocation}+R_{selection}$.

**1. Find active class weights and within-class active returns**

$$
\Delta w_E=+8\%,\qquad \Delta w_B=-8\%
$$

$$
R_{A,E}=-5.6\%-(-4.5\%)=-1.1\%,\qquad R_{A,B}=-0.3\%
$$

**2. Allocation contribution uses benchmark returns**

$$
R_{allocation}=0.08(-4.5\%)-0.08(0.0\%)=\boxed{-0.36\%}
$$

**3. Selection contribution uses actual weights**

$$
R_{selection}=0.68(-1.1\%)+0.32(-0.3\%)=\boxed{-0.844\%}
$$

$$
R_A=-0.36\%-0.844\%=\boxed{-1.204\%\approx-1.20\%}
$$

> [!NOTE]
> In Equation 4, selection uses actual weights, so the overlap caused jointly by allocation and selection is counted inside selection.

---

## Variant: Solve Backward for a Missing Attribution Component

**Abstract:** *Attribution pieces must reconcile to total active return. If two pieces are known, the missing piece is simply the plug that closes the accounting loop.*

> A portfolio added 1.40% in total. Asset allocation contributed 0.60%. Find security-selection contribution and verify the total.

**Attribution component. What is an attribution component?** It is one labelled piece of value added, such as allocation or selection. The pieces obey $R_A=R_{allocation}+R_{selection}$. **Solve backward. What does that mean?** Rearrange that same identity: $R_{selection}=R_A-R_{allocation}$.

**1. Use the attribution identity**

$$
R_A=R_{allocation}+R_{selection}
$$

$$
R_{selection}=1.40\%-0.60\%=\boxed{0.80\%}
$$

**2. Close the loop**

$$
0.60\%+0.80\%=\boxed{1.40\%}
$$

This is not a new performance source. It is just Equation 4 run backward.

> [!NOTE]
> Attribution is an accounting split. The components must add back to $R_P-R_B$ apart from displayed rounding.

---

## Variant: Calculate Active Share and Diagnose Closet Indexing

**Abstract:** *Active share measures how different the holdings are, not whether the differences are intelligent. Tiny active share plus tiny tracking risk is the closet-indexing smell test.*

> Benchmark weights are 40%, 30%, 20%, and 10%; portfolio weights are 42%, 28%, 21%, and 9%. Calculate active share and interpret it.

**Active share. What is active share?** It is the percentage of holdings that differ from the benchmark after we avoid double-counting overweights and underweights: $\text{Active share}=\frac12\sum_i|w_{P,i}-w_{B,i}|$. **Closet indexing. What is closet indexing?** It is charging for active management while quietly holding almost the same portfolio as the index.

**1. Find absolute active weights**

$$
|\Delta w|=(2\%,2\%,1\%,1\%)
$$

**2. Divide the double-counted difference by two**

$$
\text{Active share}=\frac12\sum_i|\Delta w_i|
=\frac12(6\%)=\boxed{3\%}
$$

Every overweight must be funded by an underweight, so the raw absolute sum counts the reshuffling twice.

$$
\boxed{\text{The holdings are extremely benchmark-like.}}
$$

> [!NOTE]
> Active share measures difference, not skill. A wildly different portfolio can still be wildly wrong.

---

## Variant: Calculate and Annualize a Sharpe Ratio

**Abstract:** *Sharpe pays you for excess return over cash per unit of total volatility. Keep return and volatility on the same time scale before dividing.*

> A portfolio has average monthly return 0.60%, monthly risk-free return 0.10%, and monthly return standard deviation 2.00%. Calculate its annualized ex post Sharpe ratio using the curriculum convention.

**Risk-free return. What is the risk-free return?** It is the return $R_f$ on the cash-like alternative used as the starting line. **Standard deviation. What is standard deviation?** Written $\sigma_P$, it measures how widely portfolio returns bounce around—the chapter's measure of total risk. **Excess return. What is excess return?** It is portfolio return above cash: $R_P-R_f$. **Sharpe ratio. What is the Sharpe ratio?** It is excess return per unit of total risk: $SR=(R_P-R_f)/\sigma_P$. **Ex post and annualized. What do those mean?** Ex post means measured after returns happened; annualized means converted to one year, using $\bar R_{annual}=12\bar R_{monthly}$ and $\sigma_{annual}=\sqrt{12}\sigma_{monthly}$ here.

**1. Annualize average excess return arithmetically**

$$
(0.60\%-0.10\%)\times12=\boxed{6.00\%}
$$

**2. Annualize volatility with square-root time**

$$
\sigma_{annual}=2.00\%\sqrt{12}=\boxed{6.928\%}
$$

**3. Divide reward by total risk**

$$
SR=\frac{6.00\%}{6.928\%}=\boxed{0.866}
$$

> [!NOTE]
> Sharpe uses the risk-free rate and total volatility. Annualizing only the numerator or only the denominator breaks the units.

---

## Variant: Calculate an Ex Post Information Ratio

**Abstract:** *Information ratio is benchmark-relative reward per unit of benchmark-relative risk. Use active return in the numerator and tracking risk in the denominator.*

> A manager averages 0.15% active return per month, and the monthly standard deviation of active returns is 0.90%. Calculate the annualized information ratio.

**Active risk. What is active risk?** It is the standard deviation of active returns, $\sigma_A=\sigma(R_P-R_B)$—how much the manager's result bounces around relative to the benchmark. It is also called **tracking risk**. **Information ratio. What is the information ratio?** It is active return per unit of active risk: $IR=E(R_A)/\sigma_A$.

**1. Annualize both active ingredients**

$$
\bar R_{A,annual}=0.15\%(12)=1.80\%
$$

$$
\sigma_{A,annual}=0.90\%\sqrt{12}=3.118\%
$$

**2. Calculate consistency of value added**

$$
IR=\frac{1.80\%}{3.118\%}=\boxed{0.577}
$$

This says the manager generated about 0.58 unit of average active return per unit of active risk.

> [!NOTE]
> IR uses $R_P-R_B$ and $\sigma(R_P-R_B)$. Putting total portfolio volatility underneath active return mixes two different games.

---

## Variant: Add Cash to Match a Target Volatility

**Abstract:** *Cash shrinks a risky portfolio's return above cash and its volatility by the same proportion, so its Sharpe ratio survives the resize.*

> Small caps have expected return 10.3%, volatility 19.2%, and Sharpe ratio 0.42 when the risk-free rate is 2.3%. Large caps have volatility 14.6% and expected return 8.2%. Mix small caps with cash to match 14.6% risk and calculate the combined return and Sharpe ratio.

**Expected return. What is expected return?** Written $E(R)$, it is the return we forecast, not a promise. **Volatility. What is volatility?** Written $\sigma$, it is return standard deviation—the amount returns are expected to jump around. **Cash. What does cash mean here?** It is the risk-free investment: return $R_f$ and zero volatility. **Cash scaling. What is cash scaling?** Mix risky portfolio weight $w$ with cash, so $E(R_C)=wE(R_P)+(1-w)R_f$ and $\sigma_C=w\sigma_P$.

**Sharpe ratio. What is the Sharpe ratio?** It is expected return above cash per unit of total volatility: $SR=[E(R)-R_f]/\sigma$.

**1. Find how much risky portfolio fits inside the risk budget**

$$
w_{small}=\frac{14.6\%}{19.2\%}=\boxed{76.04\%}
$$

Cash weight is $23.96\%$.

**2. Blend the returns**

$$
R_C=0.7604(10.3\%)+0.2396(2.3\%)=\boxed{8.38\%\approx8.4\%}
$$

**3. Confirm Sharpe survives**

$$
SR_C=\frac{8.38\%-2.3\%}{14.6\%}=\boxed{0.416\approx0.42}
$$

At equal risk, small caps plus cash still beat the 8.2% large-cap forecast.

> [!NOTE]
> Cash scaling preserves Sharpe because excess return and risk shrink together. **Two-fund separation—what is that?** Any risk level can be built by mixing the risky fund with cash.

---

## Variant: Blend an Active Fund with Its Benchmark

**Abstract:** *Adding the benchmark turns down both active return and active risk by the same knob, so the information ratio stays unchanged.*

> An active fund has expected active return 2.0% and active risk 5.0%. Invest 60% in the fund and 40% in its benchmark. Find the blend's active return, active risk, and information ratio.

**Active fund. What is an active fund?** It deliberately holds different weights from the benchmark to try to beat it. **Blend. What is a blend?** It is one portfolio made by mixing active-fund weight $w$ with benchmark weight $1-w$. **Benchmark scaling. What is benchmark scaling?** It turns down the active piece: $E(R_{A,blend})=wE(R_{A,fund})$ and $\sigma_{A,blend}=w\sigma_{A,fund}$, so $IR$ stays unchanged.

**Information ratio. What is the information ratio?** It is expected active return per unit of active risk: $IR=E(R_A)/\sigma_A$.

**1. Calculate the original information ratio**

$$
IR=\frac{2.0\%}{5.0\%}=0.40
$$

**2. Scale only the active piece**

$$
R_{A,blend}=0.60(2.0\%)=\boxed{1.20\%}
$$

$$
\sigma_{A,blend}=0.60(5.0\%)=\boxed{3.00\%}
$$

$$
IR_{blend}=\frac{1.20\%}{3.00\%}=\boxed{0.40}
$$

> [!NOTE]
> Benchmark blending preserves IR; cash blending generally does not. Do not swap “benchmark” and “risk-free asset” in your head.

---

## Variant: Distinguish Cash Scaling from Benchmark Scaling

**Abstract:** *Cash is the anchor for Sharpe; the benchmark is the anchor for information ratio. Scaling with the wrong anchor changes the ratio you care about.*

> A fund returns 10%, its benchmark returns 8%, cash earns 2%, total volatility is 16%, and active risk is 5%. What happens to Sharpe and information ratio if half the fund is replaced by cash rather than by the benchmark?

**Total volatility. What is total volatility?** It is $\sigma_P$, how much the fund itself moves around without subtracting a benchmark. **Cash scaling. What is cash scaling?** It gives $R_C=wR_P+(1-w)R_f$ and $\sigma_C=w\sigma_P$, preserving $SR$. **Benchmark scaling. What is benchmark scaling?** It gives $R_{A,C}=wR_A$ and $\sigma_{A,C}=w\sigma_A$, preserving $IR$. The two operations protect different ratios.

**1. Original ratios**

$$
SR=\frac{10\%-2\%}{16\%}=0.50,\qquad IR=\frac{10\%-8\%}{5\%}=0.40
$$

**2. Replace half with cash**

$$
R_C=0.5(10\%)+0.5(2\%)=6\%,\qquad \sigma_C=0.5(16\%)=8\%
$$

$$
SR_C=\frac{6\%-2\%}{8\%}=\boxed{0.50}
$$

But the benchmark is still 8%, so the blend now underperforms it by 2%. Its IR is not preserved.

$$
\boxed{\text{Cash preserves Sharpe, not IR.}}
$$

> [!NOTE]
> Ask “relative to what?” Sharpe is relative to cash; IR is relative to the benchmark.

---

## Variant: Diagnose Closet Indexing and a Market-Neutral Fund

**Abstract:** *A closet index can mimic benchmark Sharpe while producing almost no active efficiency. A market-neutral fund using cash as benchmark makes IR and Sharpe the same calculation.*

> Fund C earns −0.10% active return with 0.50% active risk and otherwise hugs its benchmark. Fund M is market neutral, earns 4% above cash, and has 8% total risk. Calculate the useful ratios and interpret both funds.

**Closet index fund. What is a closet index fund?** It is a supposedly active fund that barely moves away from its benchmark. **Market-neutral fund. What is a market-neutral fund?** It builds offsetting long and short positions so broad market movements are designed to cancel; the goal is to earn from security choices, not from the whole market rising. **Long and short. What do those mean?** Long benefits when an investment rises; short benefits when it falls. With cash as the benchmark, $R_A=R_P-R_f$ and $\sigma_A=\sigma_P$, so $IR=SR$.

**Active risk and total risk. What are they?** Active risk, $\sigma_A$, measures movement relative to a benchmark. Total risk, $\sigma_P$, measures movement of the fund itself.

**1. Closet-index information ratio**

$$
IR_C=\frac{-0.10\%}{0.50\%}=\boxed{-0.20}
$$

Low active risk does not rescue negative active return. A benchmark-like Sharpe ratio would merely confirm that the fund behaves like the index.

**2. Market-neutral ratio**

Cash is the benchmark, so excess return equals active return and total risk equals active risk:

$$
SR_M=IR_M=\frac{4\%}{8\%}=\boxed{0.50}
$$

> [!NOTE]
> **Tracking error—what is it?** It is another name for active risk. A tiny value can mean the manager charged active fees for passive exposure.

---

## Variant: Select the Better Active Manager Using Information Ratio

**Abstract:** *The manager with the highest expected IR can create the best combined portfolio. A fund's raw return, volatility, or Sharpe can point at the wrong winner.*

> Fund I has expected active return −1.4% and active risk 5.1%. Fund II has expected active return 1.2% and active risk 6.2%. Both use the same benchmark. Which fund should be combined with that benchmark?

**Expected information ratio. What is an expected information ratio?** It is forecast active return divided by forecast active risk: $IR=E(R_A)/\sigma_A$. It asks, “For each unit of benchmark-relative risk I plan to take, how much extra return do I expect?” **Expected. What does expected mean?** These are forward-looking estimates, not performance already earned.

**1. Calculate both information ratios**

$$
IR_I=\frac{-1.4\%}{5.1\%}=\boxed{-0.275}
$$

$$
IR_{II}=\frac{1.2\%}{6.2\%}=\boxed{0.194}
$$

**2. Choose efficiency, not raw risk**

$$
\boxed{\text{Select Fund II}}
$$

Fund II produces positive expected value added per unit of active risk. Fund I does not.

> [!NOTE]
> Use expected IR to construct a portfolio and ex post IR to evaluate history. Do not mix forecast inputs with realized inputs.

---

## Variant: Calculate the Maximum Combined Sharpe Ratio

**Abstract:** *A useful active strategy adds a separate source of reward beside the benchmark. Square benchmark Sharpe and IR, add them, then take the square root.*

> A benchmark has expected Sharpe ratio 0.53. The chosen active manager has expected information ratio 0.20. Find the highest Sharpe ratio available from an optimal combination.

**Optimal combination. What is an optimal combination?** It is the mix of benchmark and active strategy that produces the highest expected Sharpe ratio under the chapter's assumptions. **Maximum combined Sharpe ratio. What is that?** It is the best score the two pieces can produce together: $SR_{max}=\sqrt{SR_B^2+IR^2}$.

**Sharpe ratio and information ratio. What are they?** Sharpe measures return above cash per unit of total risk, $SR=[E(R_P)-R_f]/\sigma_P$. Information ratio measures active return per unit of active risk, $IR=E(R_A)/\sigma_A$.

**1. Use the optimal-combination identity**

$$
SR_{max}^2=SR_B^2+IR^2
$$

$$
SR_{max}=\sqrt{0.53^2+0.20^2}=\boxed{0.5665\approx0.57}
$$

The improvement is real but modest: $0.57-0.53\approx0.04$.

> [!NOTE]
> This is an optimal-combination result. Do not apply it mechanically to a strategy with negative expected IR and pretend squaring erased the bad sign.

---

## Variant: Find Optimal Active Risk and Benchmark Weight

**Abstract:** *The benchmark sets the scale; IR tells us how hard to lean into active management. Then compare desired active risk with the fund's built-in active risk.*

> A benchmark has $SR_B=0.53$ and volatility 14.4%. An active fund has $IR=0.20$ and active risk 6.2%. Find optimal active risk and the weights in the active fund and benchmark.

**Optimal active risk. What is optimal active risk?** It is the benchmark-relative risk that maximizes the combined portfolio's Sharpe ratio: $\sigma_A^*=(IR/SR_B)\sigma_B$. **Fund weight. What is a fund weight?** It is the fraction of money placed in the active fund; resize it with $w_{fund}=\sigma_A^*/\sigma_{A,fund}$.

**The symbols $SR_B$, $IR$, and $\sigma_B$. What are they?** They mean benchmark Sharpe ratio, active-fund information ratio, and benchmark volatility. Sharpe is $SR_B=[E(R_B)-R_f]/\sigma_B$; information ratio is $IR=E(R_A)/\sigma_A$.

**1. Find the Sharpe-maximizing tracking risk**

$$
\sigma_A^*=\frac{IR}{SR_B}\sigma_B
=\frac{0.20}{0.53}(14.4\%)=\boxed{5.434\%}
$$

**2. Resize the active fund**

$$
w_{fund}=\frac{5.434\%}{6.2\%}=\boxed{87.65\%}
$$

$$
w_B=1-0.8765=\boxed{12.35\%\approx13\%}
$$

The fund brings too much tracking risk on its own, so the benchmark **dilutes it**. What does dilutes mean? Adding benchmark exposure reduces the size of the active bet.

> [!NOTE]
> Fund weight is target active risk divided by supplied active risk. A positive benchmark weight dilutes; a negative one leverages the active fund.

---

## Variant: Recognize a Leveraged Active-Fund Allocation

**Abstract:** *If optimal active risk exceeds what the fund supplies, the active-fund weight goes above 100% and the benchmark weight turns negative.*

> Indigo has $IR=0.15$ and active risk 8.0%. Its benchmark has $SR_B=0.333$ and volatility 18.0%. Find optimal active risk and both portfolio weights.

**Leverage. What is leverage?** It means investing more than 100% in the active fund by borrowing or taking a negative benchmark position. **Negative benchmark weight. What is that?** Instead of owning the benchmark, you short it; the cash finances the extra active-fund position. The weights still net to one: $w_B=1-w_{fund}$.

**The symbols $IR$, $SR_B$, and $\sigma_A$. What are they?** They mean information ratio, benchmark Sharpe ratio, and active risk. The target is $\sigma_A^*=(IR/SR_B)\sigma_B$, then $w_{fund}=\sigma_A^*/\sigma_{A,fund}$.

**1. Calculate target active risk**

$$
\sigma_A^*=\frac{0.15}{0.333}(18.0\%)=\boxed{8.108\%}
$$

**2. Scale the fund**

$$
w_{Indigo}=\frac{8.108\%}{8.0\%}=\boxed{1.014}
$$

$$
w_B=1-1.014=\boxed{-0.014}
$$

So invest 101.4% in Indigo and finance the extra 1.4% by shorting the benchmark.

> [!NOTE]
> A negative benchmark weight is how active risk gets pushed above the fund's built-in 8% level.

---

## Variant: Calculate Simple and Beta-Adjusted Active Security Return

**Abstract:** *Simple active return subtracts the benchmark one-for-one. Residual return first scales the benchmark by the security's beta.*

> A security returns 12%, the benchmark returns 8%, and the security beta is 1.25. Calculate its simple active return and its single-factor beta-adjusted residual return.

**Security. What is a security?** It is one investable asset, such as one stock or bond. **Single-factor model. What is a single-factor model?** It explains the security using one shared driver—the benchmark. **Residual return. What is residual return?** It is what remains after removing beta-scaled benchmark return: $R_{residual,i}=R_i-\beta_iR_B$. Plain active return removes only one benchmark copy: $R_{A,i}=R_i-R_B$.

**Security beta. What is security beta?** It measures how strongly the security tends to move with the benchmark: $\beta_i=\operatorname{Cov}(R_i,R_B)/\operatorname{Var}(R_B)$.

**1. Simple benchmark-relative return**

$$
R_{A,i}=R_i-R_B=12\%-8\%=\boxed{4.00\%}
$$

**2. Beta-adjusted version**

$$
R_{residual,i}=R_i-\beta_iR_B
$$

$$
R_{residual,i}=12\%-1.25(8\%)=\boxed{2.00\%}
$$

The simple version calls all 4% “active.” The risk-model version recognizes that a high-beta security was expected to move more with the benchmark.

> [!NOTE]
> Correlation is not beta. Beta adjusts the size of benchmark sensitivity; correlation only standardizes co-movement.

---

## Variant: Scale Scores into Expected Active Returns

**Abstract:** *Grinold scaling turns a direction score into a return forecast: skill times active volatility times score. Riskier names receive larger raw forecasts for the same score.*

> Four securities have scores $+1,+1,-1,-1$, active volatilities 25%, 50%, 25%, 50%, and expected $IC=0.20$. Calculate each expected active return.

**Score. What is a score?** It puts signals on one common scale: positive means “beat,” negative means “lag,” and size shows conviction. **Active volatility. What is active volatility?** Written $\sigma_i$, it measures how much one security's return relative to the benchmark can bounce around. **Information coefficient, or IC. What is IC?** It is the correlation between forecasts and later active returns: $IC=\rho(\text{forecast},\text{realized active return})$. Higher positive IC means better forecasting skill. **Grinold scaling. What is Grinold scaling?** It turns score $S_i$ into forecast $\mu_i$ using $\mu_i=IC\,\sigma_iS_i$.

**1. Apply the scaling rule**

$$
\mu_i=IC\,\sigma_iS_i
$$

$$
\mu_1=0.20(25\%)(1)=\boxed{5\%}
$$

$$
\mu_2=0.20(50\%)(1)=\boxed{10\%}
$$

$$
\mu_3=0.20(25\%)(-1)=\boxed{-5\%}
$$

$$
\mu_4=0.20(50\%)(-1)=\boxed{-10\%}
$$

> [!NOTE]
> The score supplies direction, volatility supplies scale, and IC discounts the signal for imperfect forecasting skill.

---

## Variant: Decide When Breadth Equals the Number of Bets

**Abstract:** *Breadth counts independent decisions, not rows in a spreadsheet. Repeated or correlated bets are duplicates wearing different name tags.*

> A manager follows four securities and refreshes forecasts quarterly. What is breadth if all 16 security-period decisions are independent? What if quarterly forecasts merely repeat the annual view?

**Breadth, or $BR$. What is breadth?** It is the number of genuinely independent investment decisions the manager gets to make. **Independent decision. What does independent mean?** It brings new information instead of repeating another bet. When security and time decisions are truly independent, $BR=N_{securities}\times N_{periods}$.

**1. Fully independent case**

$$
BR=4\text{ securities}\times4\text{ periods}=\boxed{16}
$$

**2. Repeated-signal case**

If each quarter repeats the same annual decision, time adds no independent information:

$$
BR=\boxed{4\text{, not }16}
$$

> [!NOTE]
> More holdings or more rebalancing dates increase breadth only when active-return decisions are independent across securities and through time.

---

## Variant: Calculate Unconstrained Optimal Active Weights

**Abstract:** *The optimizer rewards forecast per unit of variance, then scales all bets to the active-risk budget. A bigger forecast helps; volatility gets squared and hits harder.*

> Four uncorrelated securities have expected active returns of 5%, 10%, −5%, and −10%; active volatilities of 25%, 50%, 25%, and 50%; $IC=0.20$, $BR=4$, and target active risk 9%. Calculate optimal active weights.

**Uncorrelated. What does uncorrelated mean?** The securities' active-return surprises do not systematically move together. **Unconstrained. What does unconstrained mean?** No rule blocks the ideal weights. **Optimizer. What is an optimizer?** It is a mathematical procedure that searches for the best weights. **Optimal active weight. What is that?** It is the benchmark-relative position giving the most expected active return for the risk budget: $\Delta w_i^*=(\mu_i/\sigma_i^2)[\sigma_A/(IC\sqrt{BR})]$. **Variance. What is variance?** It is volatility squared, $\sigma_i^2$.

**1. Use the curriculum weight formula**

$$
\Delta w_i^*=\frac{\mu_i}{\sigma_i^2}\frac{\sigma_A}{IC\sqrt{BR}}
$$

The common scaling piece is:

$$
\frac{0.09}{0.20\sqrt4}=0.225
$$

**2. Size each position**

$$
\Delta w_1^*=\frac{0.05}{0.25^2}(0.225)=\boxed{18\%}
$$

$$
\Delta w_2^*=\frac{0.10}{0.50^2}(0.225)=\boxed{9\%}
$$

By symmetry:

$$
\Delta w_3^*=\boxed{-18\%},\qquad \Delta w_4^*=\boxed{-9\%}
$$

> [!NOTE]
> Same score does not mean same weight. Doubling volatility doubles the scaled forecast but quadruples variance, so optimal weight is halved.

---

## Variant: Convert Active Weights and Returns into Total Portfolio Inputs

**Abstract:** *Active quantities are deviations. Add them back to the benchmark quantities to recover the actual portfolio the client owns.*

> An equally weighted four-security benchmark has 25% in each security and expected return 10%. Active weights are 18%, 9%, −18%, and −9%; expected active returns are 5%, 10%, −5%, and −10%. Find total weights and total return forecasts.

**Equally weighted benchmark. What is that?** It gives every security the same percentage of the benchmark. **Total weight. What is total weight?** It is what the portfolio actually owns: $w_{P,i}=w_{B,i}+\Delta w_i$. **Total return forecast. What is that?** It is the full expected security return: $E(R_i)=E(R_B)+\mu_i$.

**1. Rebuild actual weights**

$$
w_{P,i}=w_{B,i}+\Delta w_i
$$

$$
w_P=(43\%,34\%,7\%,16\%)
$$

$$
43\%+34\%+7\%+16\%=\boxed{100\%}
$$

**2. Rebuild total security returns**

$$
E(R_i)=E(R_B)+\mu_i
$$

$$
E(R)=(15\%,20\%,5\%,0\%)
$$

> [!NOTE]
> An active weight of −18% is not necessarily a short. Against a 25% benchmark weight, it leaves a positive 7% total holding.

---

## Variant: Calculate Portfolio Active Return and Active Risk Directly

**Abstract:** *Expected active return adds weight times forecast. With uncorrelated active returns, active variance adds squared weight times squared volatility.*

> Use total weights 43%, 34%, 7%, and 16%; total return forecasts 15%, 20%, 5%, and 0%; active weights 18%, 9%, −18%, and −9%; and active volatilities 25%, 50%, 25%, and 50%. Find portfolio return, active return, and active risk.

**Direct calculation. What does direct mean here?** It means building the answer security by security instead of jumping to the fundamental law. Portfolio return is $E(R_P)=\sum_iw_{P,i}E(R_i)$. **Active variance. What is active variance?** It is active risk squared; with uncorrelated returns, $\sigma_A=\sqrt{\sum_i\Delta w_i^2\sigma_i^2}$.

**1. Find the managed return**

$$
E(R_P)=0.43(15\%)+0.34(20\%)+0.07(5\%)+0.16(0\%)
=\boxed{13.60\%}
$$

Against a 10% benchmark:

$$
E(R_A)=13.60\%-10.00\%=\boxed{3.60\%}
$$

**2. Add independent variance contributions**

$$
\sigma_A=\sqrt{0.18^2(25\%)^2+0.09^2(50\%)^2+(-0.18)^2(25\%)^2+(-0.09)^2(50\%)^2}
$$

$$
\sigma_A=\boxed{9.00\%}
$$

> [!NOTE]
> Negative active weights do not create negative variance: weights are squared inside the risk calculation.

---

## Variant: Verify the Basic Fundamental Law

**Abstract:** *Skill, independent opportunities, and aggressiveness multiply into expected value added. Breadth helps through a square root, not one-for-one.*

> An unconstrained strategy has $IC=0.20$, $BR=4$, and active risk 9%. Calculate its information ratio and expected active return; compare with a direct active return of 3.6%.

**Fundamental law of active management. What is it?** It says active performance comes from forecasting skill, independent opportunities, how well forecasts become weights, and risk. **Aggressiveness. What does aggressiveness mean here?** It is simply active risk, $\sigma_A$. **Basic fundamental law. What makes it basic?** It assumes forecasts become ideal weights with no constraints, so $IR^*=IC\sqrt{BR}$ and $E(R_A)^*=IC\sqrt{BR}\sigma_A$.

**IC and BR. What are they?** $IC$ is the correlation between forecasts and later active returns—forecasting skill. $BR$ is breadth—the number of independent decisions.

**1. Calculate active efficiency**

$$
IR^*=IC\sqrt{BR}=0.20\sqrt4=\boxed{0.40}
$$

**2. Attach the chosen risk budget**

$$
E(R_A)^*=IR^*\sigma_A=0.40(9\%)=\boxed{3.60\%}
$$

The law matches the direct portfolio calculation, giving us an independent check on the answer.

> [!NOTE]
> $IC$ is skill, $BR$ is independent opportunity count, and $\sigma_A$ is aggressiveness. Do not use $BR$ without the square root.

---

## Variant: Solve the Fundamental Law Backward for Breadth

**Abstract:** *When IR and IC are given, strip out implementation loss, divide by skill, and square. The answer is effective independent bets, not automatically the number of holdings.*

> A manager has $IR=0.75$, $IC=0.1819$, and $TC=1.0$. Assuming independent security decisions, solve for breadth.

**Transfer coefficient, or TC. What is TC?** It measures how faithfully forecasts become actual portfolio weights; one means perfect transfer. The full law is $IR=TC\,IC\sqrt{BR}$. **Breadth. What is breadth?** It is the number of independent decisions. **Solving for breadth. What are we doing?** Run the law backward: $BR=[IR/(TC\,IC)]^2$.

**IR and IC. What are they?** $IR=E(R_A)/\sigma_A$ measures active return per unit of active risk. $IC=\rho(\text{forecast},\text{realized active return})$ measures forecasting skill.

**1. Rearrange the full law**

$$
IR=TC\,IC\sqrt{BR}
$$

$$
BR=\left(\frac{IR}{TC\,IC}\right)^2
$$

**2. Substitute**

$$
BR=\left(\frac{0.75}{1.0(0.1819)}\right)^2
=\boxed{17.00\approx17\text{ independent bets}}
$$

> [!NOTE]
> Squaring is the final move because breadth entered through $\sqrt{BR}$. Forgetting the square produces the classic wrong answer near four.

---

## Variant: Calculate the Risk-Weighted Information Coefficient

**Abstract:** *IC checks whether forecasts lined up with outcomes after both are divided by active risk. It measures forecasting skill, not portfolio construction.*

> Three managers forecast four securities. Their risk-weighted forecast vectors are M1 $(0.176,0.400,0.417,0.240)$, M2 $(0.235,0.100,0.000,0.080)$, and M3 $(0.147,0.150,0.042,0.060)$. Realized risk-weighted active returns are $(0.353,0.700,0.333,0.080)$. Which manager has the highest IC?

**Vector. What is a vector?** It is an ordered list—one number per security. **Risk-weighted. What does risk-weighted mean?** Divide each forecast and realized active return by that security's active volatility so a risky name does not dominate just because its numbers are bigger. **Correlation. What is correlation?** Written $\rho(X,Y)$, it measures whether two lists move together. Here $IC=\rho(\mu_i/\sigma_i,R_{A,i}/\sigma_i)$. **Realized. What does realized mean?** It means what actually happened.

**1. Correlate each forecast vector with realized outcomes**

$$
IC=\rho\left(\frac{\mu_i}{\sigma_i},\frac{R_{A,i}}{\sigma_i}\right)
$$

The correlations across the four securities are:

$$
IC_1=0.5335,\qquad IC_2=0.0966,\qquad IC_3=0.6769
$$

**2. Select the strongest forecaster**

$$
\boxed{\text{Manager 3 has the highest IC at }0.6769}
$$

> [!NOTE]
> IC connects forecasts to realized returns. Actual portfolio weights do not belong in the IC calculation.

---

## Variant: Calculate the Risk-Weighted Transfer Coefficient

**Abstract:** *TC checks whether forecasts made it into positions after risk adjustment. It measures implementation efficiency, not whether the forecasts came true.*

> For the same managers, risk-weighted forecast vectors are M1 $(0.1765,0.4000,0.4167,0.2400)$, M2 $(0.2353,0.1000,0,0.0800)$, and M3 $(0.1471,0.1500,0.0417,0.0600)$. Risk-adjusted weight vectors are M1 $(-0.0213,0.0025,0.0090,0.0063)$, M2 $(0.0340,0,-0.0120,-0.0250)$, and M3 $(-0.0085,0.0050,0.0060,-0.0125)$. Which manager has the highest TC?

**Forecast vector. What is a forecast vector?** It is an ordered list of expected active returns—one forecast per security. **Risk-adjusted weight. What is a risk-adjusted weight?** It is active weight multiplied by the security's active volatility, $\Delta w_i\sigma_i$, so position size is read together with its risk. **Transfer coefficient, or TC. What is TC?** It is the correlation between risk-weighted forecasts and risk-adjusted actual weights: $TC=\rho(\mu_i/\sigma_i,\Delta w_i\sigma_i)$. High positive TC means the portfolio reflects the forecasts.

**1. Match forecasts with implemented weights**

$$
TC=\rho\left(\frac{\mu_i}{\sigma_i},\Delta w_i\sigma_i\right)
$$

The correlations are:

$$
TC_1=0.7267,\qquad TC_2=0.8504,\qquad TC_3=-0.0020
$$

**2. Select the cleanest implementation**

$$
\boxed{\text{Manager 2 has the highest TC at }0.8504}
$$

> [!NOTE]
> TC connects forecasts to weights. Realized returns do not belong in the TC calculation.

---

## Variant: Verify the Expanded Fundamental Law under Constraints

**Abstract:** *Constraints bend actual weights away from ideal weights. TC measures that damage and scales down the active return the forecasts could otherwise produce.*

> Expected active returns are 5%, 10%, −5%, and −10%; actual active weights are 6%, 4%, 7%, and −17%; active volatilities are 25%, 50%, 25%, and 50%. Given $TC=0.58$, $IC=0.20$, and $BR=4$, verify active return and risk directly and through the expanded law.

**Constraint. What is a constraint?** It is a rule—such as no shorting or a position limit—that blocks the manager from taking the ideal weight. **Actual active weight. What is that?** It is the weight the constrained portfolio can really hold, not the unconstrained ideal. **Expanded fundamental law. What is it?** It adds implementation quality to the basic law: $E(R_A)=TC\,IC\sqrt{BR}\sigma_A$.

**No shorting and position limit. What do those mean?** No shorting means a total holding cannot fall below zero. A position limit caps how far a weight may move. **TC, IC, and BR. What are they?** TC measures forecast-to-weight transfer, IC measures forecast accuracy, and BR counts independent decisions.

**1. Direct active return**

$$
E(R_A)=0.06(5\%)+0.04(10\%)+0.07(-5\%)-0.17(-10\%)
$$

$$
E(R_A)=\boxed{2.05\%\approx2.1\%}
$$

**2. Direct active risk**

$$
\sigma_A=\sqrt{0.06^2(25\%)^2+0.04^2(50\%)^2+0.07^2(25\%)^2+(-0.17)^2(50\%)^2}
=\boxed{9.03\%\approx9.0\%}
$$

**3. Fundamental-law check**

$$
E(R_A)=TC\,IC\sqrt{BR}\sigma_A
$$

$$
=0.58(0.20)\sqrt4(9.0\%)=\boxed{2.088\%\approx2.1\%}
$$

> [!NOTE]
> The tiny direct-versus-law gap is displayed rounding. The economic message is large: constraints cut the 3.6% unconstrained forecast to about 2.1%.

---

## Variant: Find Constrained Optimal Risk and Maximum Sharpe

**Abstract:** *A constraint penalty lowers both the best active-risk target and the attainable Sharpe improvement. Apply TC before deciding how aggressively to invest.*

> A constrained strategy has $TC=0.50$ and unconstrained $IR^*=0.30$. Its benchmark has $SR_B=0.40$ and volatility 16%. The fund itself carries 8% active risk. Find constrained optimal active risk, maximum Sharpe, and fund/benchmark weights.

**Constrained strategy. What is a constrained strategy?** It is an active strategy whose ideal bets are restricted; a lower $TC$ means the actual weights line up less closely with the forecasts. **Constrained optimal risk. What is that?** It is $\sigma_{A,C}^*=TC(IR^*/SR_B)\sigma_B$. **Constrained maximum Sharpe. What is that?** It is the best combined score after the implementation penalty: $SR_{max}=\sqrt{SR_B^2+TC^2(IR^*)^2}$.

**The symbols $TC$, $IR^*$, and $SR_B$. What are they?** TC measures how closely weights follow forecasts, $IR^*$ is unconstrained information ratio, and $SR_B$ is benchmark Sharpe ratio.

**1. Shrink optimal active risk by TC**

$$
\sigma_{A,C}^*=TC\frac{IR^*}{SR_B}\sigma_B
=0.50\left(\frac{0.30}{0.40}\right)(16\%)=\boxed{6.00\%}
$$

**2. Calculate the constrained maximum Sharpe**

$$
SR_{max}=\sqrt{SR_B^2+TC^2(IR^*)^2}
=\sqrt{0.40^2+0.50^2(0.30)^2}=\boxed{0.427\approx0.43}
$$

**3. Dilute the fund to the target**

$$
w_{fund}=\frac{6\%}{8\%}=\boxed{75\%},\qquad w_B=\boxed{25\%}
$$

> [!NOTE]
> When $TC=0$, optimal active risk is zero. If forecasts cannot reach weights at all, the benchmark wins by default.

---

## Variant: Decompose Ex Post Performance into Skill and Noise

**Abstract:** *Replace expected IC with realized IC to measure what forecasting delivered that period; whatever remains in actual active return is noise.*

> A strategy has $BR=100$, expected $IC=0.05$, $TC=0.80$, and active risk 4%. Realized $IC_R=-0.10$ and actual active return is −2.6%. Find ex ante return, conditional ex post return, noise, and variance shares.

**Ex ante. What does ex ante mean?** It means forecast before the period: $E(R_A)=TC\,IC\sqrt{BR}\sigma_A$. **Realized IC. What is realized IC?** Written $IC_R$, it is the forecasting success that actually occurred. **Conditional ex post return. What is that?** It is the return expected after we know realized skill: $E(R_A\mid IC_R)=TC\,IC_R\sqrt{BR}\sigma_A$. **Noise. What is noise?** It is the leftover surprise: $\text{Noise}=R_A-E(R_A\mid IC_R)$. The variance shares are $TC^2$ from skill and $1-TC^2$ from noise.

**BR and TC. What are they?** BR counts independent decisions. TC measures how closely actual weights line up with forecasts.

**1. Ex ante expectation**

$$
E(R_A)=0.80(0.05)\sqrt{100}(4\%)=\boxed{1.60\%}
$$

**2. Condition on what forecasting actually did**

$$
E(R_A\mid IC_R)=0.80(-0.10)\sqrt{100}(4\%)=\boxed{-3.20\%}
$$

**3. Back out noise**

$$
\text{Noise}=-2.6\%-(-3.2\%)=\boxed{+0.60\%}
$$

**4. Split performance variance**

$$
TC^2=0.80^2=\boxed{64\%},\qquad1-TC^2=\boxed{36\%}
$$

Noise softened a bad forecasting period; it did not turn bad forecasting into skill.

> [!NOTE]
> The shares are $TC^2$ and $1-TC^2$, not $TC$ and $1-TC$.

---

## Variant: Compare Security Selection with Sector Selection

**Abstract:** *More skill can lose to more breadth. Compare strategies through $IC\sqrt{BR}$, then attach the same risk budget.*

> A stock selector has $IC=0.05$ across 100 independent securities. A sector selector has $IC=0.15$ across nine independent sectors. Both are unconstrained and target 3% active risk. Compare IR and expected active return.

**Stock selection. What is stock selection?** It means forecasting individual companies. **Sector selection. What is sector selection?** It means forecasting broad industry groups such as banks or technology. **Risk budget. What is a risk budget?** It is the amount of active risk the strategy is allowed to take—3% here. **Selector IR. What is it?** With no constraints, it is $IR=IC\sqrt{BR}$; expected active return is then $E(R_A)=IR\sigma_A$. This lets skill and opportunity count compete on the same scoreboard.

**IC and BR. What are they?** IC measures how well forecasts match later results; BR counts independent forecasts. One better forecast raises IC, while one genuinely new forecast raises BR.

**1. Stock selection**

$$
IR_{stock}=0.05\sqrt{100}=\boxed{0.50}
$$

$$
E(R_{A,stock})=0.50(3\%)=\boxed{1.50\%}
$$

**2. Sector selection**

$$
IR_{sector}=0.15\sqrt9=\boxed{0.45}
$$

$$
E(R_{A,sector})=0.45(3\%)=\boxed{1.35\%}
$$

The sector manager is three times as accurate, but the stock manager has enough extra independent bets to win narrowly.

> [!NOTE]
> Compare the product, not one input. High IC with tiny breadth can lose to moderate IC applied many independent times.

---

## Variant: Build a Quarterly Credit-Timing Strategy

**Abstract:** *First measure the risk of IG minus HY, then annualize it, convert hit rate into IC, and scale the active tilt to the permitted tracking risk.*

> Quarterly IG and HY volatilities are 2.84% and 4.64%, with correlation 0.575. A manager makes four independent annual credit calls, is correct 55% of the time, targets 2% annual active risk, and starts from 70% IG/30% HY. Calculate differential risk, IC, active tilt, allocations, IR, and expected active return.

**IG and HY. What are they?** IG means investment-grade bonds—borrowers judged less likely to default. HY means high-yield bonds—riskier borrowers offering investors a bigger promised return. **Credit-timing call. What is that?** It is a choice to lean toward IG or HY based on which is forecast to outperform. **Correlation. What is correlation?** Written $\rho$, it measures how closely IG and HY returns move together. **Differential risk. What is that?** It is volatility of $R_{IG}-R_{HY}$: $\sigma_{IG-HY}=\sqrt{\sigma_{IG}^2+\sigma_{HY}^2-2\rho\sigma_{IG}\sigma_{HY}}$. Quarterly risk becomes annual risk here through $\sigma_{annual}=\sqrt4\sigma_{quarterly}$. **Hit-rate IC. What is that?** For a two-way call, $IC=p_{correct}-p_{wrong}=2p_{correct}-1$. **Active tilt. What is that?** It is the weight moved from one side to the other: $|\Delta w|=\sigma_A/\sigma_{IG-HY}$.

**IR and expected active return. What are they here?** Four independent timing calls give $BR=4$, so $IR=IC\sqrt4$ and $E(R_A)=IR\sigma_A$.

**1. Risk of the return difference**

$$
\sigma_{IG-HY}=\sqrt{2.84^2+4.64^2-2(2.84)(4.64)(0.575)}=\boxed{3.80\%}
$$

$$
\sigma_{annual}=3.80\%\sqrt4=\boxed{7.60\%}
$$

**2. Turn hit rate into skill**

$$
IC=0.55-0.45=\boxed{0.10}
$$

**3. Size the tilt**

$$
|\Delta w|=\frac{2.00\%}{7.60\%}=\boxed{26.3\%}
$$

**Pro-credit allocation. What is that?** It is the riskier mix used when HY is forecast to win: IG $70-26.3=43.7\%$, HY $30+26.3=56.3\%$. **Defensive allocation. What is that?** It is the safer mix used when IG is forecast to win: IG 96.3%, HY 3.7%.

**4. Apply the law**

$$
IR=0.10\sqrt4=\boxed{0.20}
$$

$$
E(R_A)=0.20(2.00\%)=\boxed{0.40\%}
$$

> [!NOTE]
> Binary timing skill is $IC=p_{correct}-p_{wrong}=2p_{correct}-1$, not simply the percentage correct.

---

## Variant: Test Whether More Rebalancing Really Raises Breadth

**Abstract:** *A faster calendar raises breadth only if it produces new information. Repeating the same signal twelve times is still one decision wearing twelve timestamps.*

> A four-asset strategy has annual breadth 3.2 because some active returns are correlated. What is the maximum breadth under monthly independent rebalancing? What happens if monthly signals merely repeat the annual forecast?

**Rebalancing. What is rebalancing?** It means refreshing portfolio weights at a scheduled time. **Time-series breadth. What is that?** It counts genuinely new decisions through time. If every monthly decision is independent, $BR_{monthly}=12BR_{annual}$; if the same forecast is repeated, breadth does not increase. **Turnover. What is turnover?** It is how much of the portfolio gets bought and sold. **TC. What is TC?** It measures how closely actual weights follow forecasts: $TC=\rho(\mu_i/\sigma_i,\Delta w_i\sigma_i)$.

**1. Truly independent monthly decisions**

$$
BR_{monthly}=12(3.2)=\boxed{38.4}
$$

**2. Persistent signals**

If all twelve months repeat the same view:

$$
BR_{repeated}=\boxed{3.2}
$$

Higher turnover can also lower TC, so even genuinely higher breadth does not guarantee a proportional IR improvement.

> [!NOTE]
> Independence must hold cross-sectionally and through time. Observation count is not breadth.

---

## Variant: Measure How Constraints Damage a Global Equity Strategy

**Abstract:** *Holding IC and breadth fixed isolates the effect of constraints: lower TC means less forecast reaches the portfolio and IR falls.*

> A global strategy has $IC=0.099$ and $BR=24.5$. Compare: (A) $TC=0.995$, active risk 2%; (B) long-only and weight limits with $TC=0.694$, risk 2%; and (C) tighter binding at $TC=0.567$, risk 2.74%. Find IR and expected active return.

**Long-only. What does long-only mean?** The portfolio may own a security or hold zero, but it may not short it. **Weight limit. What is a weight limit?** It caps how far a position may move above or below its benchmark weight. **Binding constraint. What does binding mean?** The rule is actively stopping the desired trade, so TC falls. For each case, $IR=TC\,IC\sqrt{BR}$ and $E(R_A)=IR\sigma_A$.

**TC, IC, and BR. What are they?** TC measures whether forecasts become weights, IC measures whether forecasts become results, and BR counts independent decisions. They combine as $IR=TC\,IC\sqrt{BR}$.

**1. Nearly unconstrained**

$$
IR_A=0.995(0.099)\sqrt{24.5}=\boxed{0.488\approx0.49}
$$

$$
E(R_A)_A=0.488(2\%)=\boxed{0.976\%\approx0.98\%}
$$

**2. Constrained at the same risk**

$$
IR_B=0.694(0.099)\sqrt{24.5}=\boxed{0.340}
$$

$$
E(R_A)_B=0.340(2\%)=\boxed{0.680\%}
$$

**3. More aggressive, but more constrained**

$$
IR_C=0.567(0.099)\sqrt{24.5}=\boxed{0.278\approx0.28}
$$

$$
E(R_A)_C=0.278(2.74\%)=\boxed{0.762\%\approx0.76\%}
$$

More active risk raised return slightly from B to C, but efficiency fell because constraints bit harder.

> [!NOTE]
> Scaling every unconstrained active weight up or down leaves IR unchanged. With constraints, taking more active risk can lower TC and therefore lower IR.

---

## Variant: Calculate Effective Breadth with Correlated Bets

**Abstract:** *Common positive correlation turns many names into fewer independent bets. Strong negative correlation can make effective breadth exceed the number of securities.*

> Use $BR=N/[1+(N-1)\rho]$. First take $N=80$ and common correlation 0.04. Then take $N=2$ and correlation −0.80.

**Effective breadth. What is effective breadth?** It is the number of independent bets the portfolio behaves as if it had after allowing for overlap. With $N$ equally correlated bets, $BR=N/[1+(N-1)\rho]$. **Common correlation, $\rho$. What is that?** It is the assumed same co-movement between every pair of bets; positive $\rho$ creates duplication, while negative $\rho$ creates offsetting risk.

**1. Duplicated positive-correlation bets**

$$
BR=\frac{80}{1+79(0.04)}=\boxed{19.23}
$$

Eighty holdings deliver only about 19 independent bets.

**2. Strong negative-correlation case**

$$
BR=\frac{2}{1+(2-1)(-0.80)}=\boxed{10.0}
$$

The two positions offset risk so strongly that effective breadth exceeds two.

> [!NOTE]
> For the common-correlation formula to describe possible returns, $\rho\geq-1/(N-1)$. Do not plug in an impossible negative correlation.

---

## Variant: Adjust the Fundamental Law for Uncertain Skill

**Abstract:** *If realized IC jumps around, forecasting uncertainty creates strategy risk. The useful skill measure becomes IC divided by the volatility of IC.*

> A strategy covers 100 independent securities. The standard deviation of realized IC is 0.04, risk-model tracking risk is 1.5%, and expected IC is 0.05. Assume $TC=1$. Calculate realized active risk and expected active return using Equations 17 and 18.

**IC uncertainty. What is IC uncertainty?** Realized forecasting skill changes from period to period; $\sigma_{IC}$ measures that wobble. **Risk-model tracking risk. What is that?** Written $\sigma_{RM}$, it is the active risk predicted by the security-risk model before skill uncertainty is added. **Strategy risk. What is strategy risk?** It is $\sigma_A=\sigma_{IC}\sqrt N\sigma_{RM}$. Expected active return is $E(R_A)=(IC/\sigma_{IC})\sigma_A$ when $TC=1$.

**$TC=1$. What does that mean?** The transfer coefficient equals one, so forecasts and actual weights line up perfectly; no gap between ideal and actual weights reduces expected return.

**1. Calculate strategy risk**

$$
\sigma_A=\sigma_{IC}\sqrt N\sigma_{RM}
$$

$$
\sigma_A=0.04\sqrt{100}(1.5\%)=\boxed{0.60\%}
$$

**2. Reward skill relative to its uncertainty**

$$
E(R_A)=\frac{IC}{\sigma_{IC}}\sigma_A
$$

$$
E(R_A)=\frac{0.05}{0.04}(0.60\%)=\boxed{0.75\%}
$$

> [!NOTE]
> A modest average IC is less impressive when IC is unstable. “Skill” without uncertainty is an overconfident input.

---

## Variant: Debug an Absurdly High Information Ratio

**Abstract:** *Huge breadth can manufacture fantasy performance when correlated holdings and repeated signals are counted as independent. Debug the assumptions before admiring the answer.*

> A monthly S&P 500 stock selector claims $IC=0.05$ and sets $BR=12\times500=6{,}000$. At 3% active risk, calculate the claimed IR and return, then give the main reasons they are likely overstated.

**S&P 500. What is the S&P 500?** It is a widely used benchmark of roughly 500 large US companies. **Claimed breadth. What is claimed breadth?** It is the manager's stated count of independent bets—here $BR=12\times500$. **Claimed IR. What is that?** Under the basic law it is $IR=IC\sqrt{BR}$, but that answer is trustworthy only if the 6,000 decisions are truly independent and the IC estimate is honest.

**IC. What is IC?** It is the correlation between forecasts and later active returns: $IC=\rho(\text{forecast},\text{realized active return})$. **Expected active return. What is that?** Once IR is known, it is $E(R_A)=IR\sigma_A$.

**1. Reproduce the tempting calculation**

$$
IR=0.05\sqrt{6{,}000}=\boxed{3.873}
$$

$$
E(R_A)=3.873(3\%)=\boxed{11.62\%}
$$

**2. Find what broke**

- Stocks driven by the same industry or broad market forces are not 500 independent bets.
- A stock forecast often persists month to month, so 12 observations are not 12 new decisions.
- The forecast IC may be too optimistic or may jump around through time.
- Rules forbidding bets on price declines, capping weights, limiting trading, or restricting risk reduce TC.

$$
\boxed{\text{The arithmetic is valid; the independence assumptions are not.}}
$$

> [!NOTE]
> The fundamental law is “garbage in, garbage out.” A precise square root cannot rescue fake breadth or imaginary skill.

---

## Variant: Compare Managers When Skill, Breadth, and Constraints All Differ

**Abstract:** *A manager can win with fewer bets if those bets are more accurate and reach the portfolio more cleanly. Put every input into the same formula before choosing.*

> Manager 1 has $IC=0.15$, $TC=1.0$, and 50 independent security decisions. Manager 2 has $IC=0.10$, $TC=0.80$, and 100 independent decisions. Both target 5% active risk. Which manager has the higher expected active return?

**Manager comparison. What are we comparing?** Not skill, breadth, or constraints one at a time. We compare the complete output of the law: $E(R_A)=TC\,IC\sqrt{BR}\sigma_A$. Because both managers use the same $\sigma_A$, the higher $TC\,IC\sqrt{BR}$ wins.

**TC, IC, and BR. What are they?** TC measures forecast-to-weight transfer, IC measures forecast accuracy, and BR counts independent decisions. **Active risk. What is active risk?** Written $\sigma_A$, it is how much return relative to the benchmark is expected to bounce around.

**1. Run Manager 1 through the full law**

$$
IR_1=1.0(0.15)\sqrt{50}=1.0607
$$

$$
E(R_{A,1})=1.0607(5%)=\boxed{5.30%}
$$

**2. Run Manager 2 through the same law**

$$
IR_2=0.80(0.10)\sqrt{100}=0.80
$$

$$
E(R_{A,2})=0.80(5%)=\boxed{4.00%}
$$

$$
\boxed{\text{Choose Manager 1}}
$$

Manager 2 has twice as many bets, but breadth only helps through a square root. Manager 1's stronger skill and perfect transfer more than make up for having fewer independent chances.

> [!NOTE]
> Never rank managers using breadth alone. The decision depends on the complete product $TC\times IC\times\sqrt{BR}\times\sigma_A$.

---

## Variant: Evaluate Offsetting Changes in IC and TC

**Abstract:** *Strategy changes can push different parts of the law in opposite directions. Recalculate the whole product instead of declaring one change dominant by inspection.*

> A strategy begins with $IC=0.10$, $TC=0.50$, $BR=100$, and active risk 3%. Research changes lower IC to 0.08, while relaxed constraints raise TC to 0.75; breadth and risk stay fixed. Compare expected active return before and after.

**Relaxed constraint. What is a relaxed constraint?** It is a rule made less restrictive, allowing forecasts to pass into weights more easily and usually raising TC. **Offsetting changes. What does that mean?** One input hurts while another helps. Recalculate the full product $E(R_A)=TC\,IC\sqrt{BR}\sigma_A$; eyeballing only IC or only TC can give the wrong answer.

**IC, TC, BR, and $\sigma_A$. What are they?** They are forecast accuracy, forecast-to-weight transfer, independent-decision count, and active risk. Together they generate expected active return: $E(R_A)=TC\,IC\sqrt{BR}\sigma_A$.

**1. Original strategy**

$$
IR_0=0.50(0.10)\sqrt{100}=0.50
$$

$$
E(R_A)_0=0.50(3\%)=\boxed{1.50\%}
$$

**2. Revised strategy**

$$
IR_1=0.75(0.08)\sqrt{100}=0.60
$$

$$
E(R_A)_1=0.60(3\%)=\boxed{1.80\%}
$$

The loss of forecasting skill is more than offset by better forecast-to-weight transfer.

$$
\boxed{\Delta E(R_A)=+0.30\%}
$$

> [!NOTE]
> IC, TC, $\sqrt{BR}$, and active risk multiply. When inputs move in opposite directions, only the complete product settles the argument.

<!-- Source audit: Primary source is CFA Level II Portfolio Management, Learning Module 2, printed pages 91-154, including Equations 1-19, Examples 1-10, all 29 practice problems, and official solutions. Schweser Reading 35, Modules 35.1-35.4, was used only as a secondary exam-shape cross-check. The existing conceptual note was preserved. -->

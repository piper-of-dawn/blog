```table-of-contents
```
## QUANTITATIVE METHODS

### RATES OF RETURN
1. Interest rate = price of waiting. The required rate of return (discount rate) is the minimum return investors demand to delay consumption.
2. Nominal = real growth + inflation protection. Money must grow in real terms and also keep up with inflation. Exact relation (Fisher equation)
$$(1 + r_{nominal}) = (1 + r_{real}) \times (1 + \pi_{expected})$$
Expected inflation, not current inflation, because interest rates price the future.
$$ r_{nominal} \approx r_{real} + \pi$$Expected inflation, always
3. Every premium exists because uncertainty exists
	- Maturity Risk Premia: More time ⟶ more volatility ⟶ maturity premium. In simple words, a lot more could go wrong if money is locked up for long.
	- Liquidity Risk Premia: Asset might be very hard to sell if I need money quickly.
	- Default risk premia: The borrower may refuse or declare inability to pay.
	- Inflation premia: Purchansing power of money is lower in future.


### MODULE 1.2: TIME-WEIGHTED AND MONEY-WEIGHTED RETURNS



> [!warn] REMEMBER 
> - If funds are contributed to an investment portfolio just before a period of relatively poor portfolio performance, the money-weighted rate of return will tend to be lower than the time-weighted rate of return. On the other hand, if funds are contributed to a portfolio at a favorable time (just before a period of relatively high returns), the money- weighted rate of return will be higher than the time-weighted rate of return. 
> - The use of the time-weighted return removes these distortions, and thus provides a better measure of a manager’s ability to select investments over the period. 
> - If the manager has complete control over money flows into and out of an account, the money-weighted rate of return would be the more appropriate performance measure.

1. **TWROR is designed to _not_ be impacted by the timing or size of external cash flows**. It isolates “portfolio growth rate per unit time” by breaking the timeline at each cash flow and compounding the sub-period returns.
   
> [!question] TWROR
> Assume an investor buys a share of stock for $100 at t = 0, and at the end of the year (t = 1), she buys an additional share for $120. At the end of Year 2, the investor sells both shares for $130 each. At the end of each year in the holding period, the stock paid a $2 per share dividend. What is the money-weighted rate of return and time-weighted rate of return?
> 
> ---
> 
> | Time | Cash Flow | Amount |
> |------|-----------|--------|
> |0 | -100 | -100 |
> | 1 | -120+2 | -118 |
> | 2 | 130+130+2+2 | 264 |
> 
> MWROR = IRR(-100, -118, 264) = -13.86\% 
> 
> **t=0**
> Beginning NAV = 100
> Income = 2
> Price Appreciation = 20
> Ending NAV = 122
> HPR = 122/100 - 1 = 22\%
> 
> **t=1**
> Another share bought for 120
> Beginning NAV = 242 (Assuming dividend was re-invested)
> Income = 4
> Price Appreciation = 0
> Ending NAV = 264
> HPR = 264/242 - 1 = 9.09\%
> 
> TWROR = \[(1 + 0.22)(1 + 0.0909)\]^2 - 1 = 15.36\%
> 


> [!quesion] NUMERICAL
> An investor buys a share of stock for $40 at time t = 0, buys another share of the same stock for $50 at t = 1, and sells both shares for $60 each at t = 2. The stock paid a dividend of $1 per share at t = 1 and at t = 2. The periodic money-weighted rate of return on the investment is closest to:
> 
> MWROR = IRR(-40, -50+1, 60+60+2) = 23.82\%
> 
> **t = 0** 
> Beginning NAV = 40
> Income = 1
> Price Appreciation = 10
> Ending NAV = 51
> HPR = 51/40 - 1 = 27.5\%
> 
> **t=1**
> Another share bought for 50
> Beginning NAV = 50 + 50 = 100 (Dividend not re-invested)
> Income = 1+1 = 2
> Price Appreciation = 10 $\times$ 2 =  20
> Ending NAV = 122
> HPR = 122/100 - 1 = 22\%
> 
> TWROR = \[(1 + 0.275)(1 + 0.22)\]^2 - 1 = 24.7\%
> 
> 


> [!danger] ANNUALISED RETURN
> While calculating annualised return, always assume 365 day year.

> [!question] ANNUALISED RETURN
> A saver deposits $100 into a bank account. After 90 days, the account balance is $100.75. What is the saver’s annualized rate of return?
> 
> ---
> 
> Interest = 100.75 - 100 = 0.75 or 0.75\%
> Annualized return = (1 + 0.0075)^(365/90) - 1 = 3.06\%
> 


> [!question] ANNUALISED RETURN
> An investor buys a 500-day government bill for $970 and redeems it at maturity for $1,000. What is the investor’s annualized return?
> 
> ---
> 
> 500-Day Return = (1000 - 970) / 970 = 0.039
> Annualized return = (1 + 0.03)^(365/500) - 1 = 2.25\%

### MODULE 6.1: LOGNORMAL DISTRIBUTIONS AND SIMULATION TECHNIQUES

1. **Log-Normal Distribution**
	1. If $\log(x)$ is normal, the $x$ is log normal. If $x$ is normal, then $e^x$ is log-normal. 
	2. Imagine **many parallel universes** starting today with the same initial price $P_0$. In each universe, the asset earns **continuously compounded (log) returns** over time. By definition of continuous compounding:$$ P_T = P_0 e^{r_{0,T}} $$where $r_{0,T}$ is the total log-return from 0 to $T$.
	3. These log-returns $r_{0,T}$ are independent (or wedakly dependent) and identically distributed. Because log-returns **add**:  $$  r_{0,T} = \sum_{i=1}^n r_i $$By the **Central Limit Theorem**, the sum $r_{0,T}$ is approximately **normally distributed**.
	4. Since $\log P_T = \log P_0 + r_{0,T}$ is normal, $P_T$ is log-normally distributed** (not normal).

2. **Monte Carlo Simulation**
	 - Monte Carlo lets you test **scenarios that never happened**.  Example: Simulate a −40% equity crash even if history only saw −20%. Inputs are **not limited by past data ranges**. Example: Assume 80% volatility even if historical max was 35%.
	 - Results are **only as good as the assumptions**. Example: Assume normal returns ⟶ underestimate crash risk.
	 - Wrong assumptions give **precise but wrong answers**. Example: Simulation outputs USD 12.40, but real market price is USD 20 due to fat tails.
	 * Monte Carlo is **statistical, not analytic**. You get a price but no formula. It gives outcomes, **not intuition**. Example: You know the option value but not why it reacts strongly to volatility.
3. **Resampling and Bootstrapping:**
	- Start with n observed data points. Example: 250 daily returns.
	- For one bootstrap sample, do this: Randomly pick one return at a time from the original 250. Put it back after picking (sampling _with replacement_). Repeat until you have **250 picks**
	- Result is: Some days appear multiple times. Some days don't appear at all. Total observations = still 250. Repeat this process many times (e.g., 10,000 bootstrap samples).
	- From 250 returns, bootstrapping shows the mean return is 8%, but with a wide spread (spread comes from 10k generated samples) ⟶ you see how unreliable that estimate is.
	- Instead of assuming normal returns, you reuse actual ugly days (crashes, spikes) exactly as they occurred. Even with small data, you can still quantify risk around estimates.
    
### MODULE 7.1: SAMPLING TECHNIQUES AND THE CENTRAL LIMIT THEOREM
1. Probability sampling: “Everyone had a ticket in the lottery.” Randomly selecting 500 firms from 10,000 gives each firm a 5% selection chance, making the sample's average profitability an unbiased estimate of the population mean. This is probability sampling.
2. Non-probability sampling: “I picked whoever was easiest to reach.” Studying only easy-to-access or familiar firms (glossy reporters, followed companies, local firms) skews results because the sample is biased and not representative of the population. One way to form an approximately random sample is **systematic sampling** selecting every nth member from a population.
3. **Stratified sampling (Probability Sampling Method)** divides a heterogeneous population into homogeneous groups based on key characteristics and randomly samples from each group in proportion to its size. Eg: Estimating national income by first grouping people into income brackets (low, middle, high) and then randomly sampling individuals from each bracket in proportion to their population share.
4. One of the most important examples is of a bond index is replicated by grouping bonds by maturity and coupon, then randomly selecting bonds from each group in proportion to the group's weight in the index.
5. **Cluster sampling (Probability Sampling Method)** means randomly picking a few groups that are assumed to look like the whole population and then collecting data from those groups instead of everyone. Eg: To estimate average student height in a city, randomly pick a few schools and measure all (or some) students in those schools instead of sampling from every school.
6. One-stage cluster sampling means randomly selecting a few clusters and including **every observation inside those clusters** in the sample. Eg: To estimate city electricity usage, randomly pick a few apartment buildings and use the electricity data of all households in those buildings.
7. Two-stage cluster sampling means randomly selecting a few clusters first (stage 1) and then randomly sampling individuals within each selected cluster (stage 2). To estimate city income, randomly pick a few neighborhoods and then randomly survey a sample of households within each selected neighborhood.
8. Two-stage cluster sampling can be expected to have greater sampling error than one-stage cluster sampling because you have done stuff randomly twice. But it costs less.
9. The non probability methods are Convenience Sampling and Judgemental Sampling. Convenience sampling refers to selecting sample data based on ease of access, using data that are readily available. Judgemental sampling refers to samples for which each observation is selected from a larger dataset by the researcher, based on one's experience and judgement.
10. Suppose a sample contains the past 30 monthly returns for McCreary, Inc. The mean return is 2%, and the sample standard deviation is 20%. Calculate and interpret the standard error of the sample mean. SE($\mu$) = $\sigma / \sqrt{n}$ = 0.2 / $\sqrt{30}$ = 0.036. **As n $\to$ $\infty$, SE($\mu$) $\to$ 0
11. **Jackknife Method for SE:** From 5 returns {2, 4, 6, 8, 10}, compute 5 means by dropping one observation at a time (7, 6.5, 6, 5.5, 5). The standard deviation of these leave-one-out means estimates the standard error of the mean. **Works when sample size is small**
12. **Bootstrap Method for SE:** From the same 5 returns {2, 4, 6, 8, 10}, repeatedly draw samples of size 5 **with replacement** (e.g., {2,2,6,8,10}, {4,6,6,8,10}, …) and compute the mean each time.  After 10,000 such resamples, the **standard deviation of these means** is the bootstrap estimate of the standard error (and their percentiles give confidence intervals).

### MODULE 8.1: THE BASICS OF HYPOTHESIS TESTING

1. Null hypothesis is always: **Effect doesn't exist**. Trust this statement like God or Gravity.
2. Significance level is the maximum type I error you are willing to tolerate. If p value > significance level, your CANNOT or FAIL TO REJECT the null hypothesis. Also trust this double negative statement like God or Gravity.

 > [!TIP] HAMMER THIS INTO YOUR HEAD
> Suppose null hypothesis is: the person is NOT pregnant. **Null is always no effect exists.** Type I error is a doctor telling a man that he is pregnant (False Positive). A positive outcome that is false. Type II error is a doctor telling a truly pregnant lady that she is not (False Negative). A negative outcome that is false.
> ![[Pasted image 20251230214023.png]]



> [!TIP] HAMMER THIS INTO YOUR HEAD
> - p-value measures, **how extreme is my sample**, given the null hypothesis is true. 
> - p-value measures how strong the evidence **against** the null hypothesis is, assuming the null is true.
> - A p-value of 0.01 means strong evidence that the drug is effective (null is no effect), since such results would occur only 1% of the time if the ground truth was no effect.

3. Power of the test is (1 - Type II error), that is probability of correctly rejecting a false null i.e. claiming the effect where it truly exists that is telling a pregnant lady that she is indeed pregnant. Remember it like: a powerful pregnancy kit can ALWAYS correctly identity if someone is indeed pregnant (even though it can give positive results that are false).4

### MODULE 8.2: TYPES OF HYPOTHESIS TESTS


> [!question] Basics — One-Sample Mean Test  
> **Problem**  
> An analyst suspects that, in the most recent year, excess returns on stocks have fallen below **5%**. She wants to test whether excess returns are **less than 5%**. Let the population mean be denoted by $\mu$.
>
> **Hypotheses**  
> $$
> H_0:\ \mu \ge 0.05
> \qquad
> H_A:\ \mu < 0.05
>$$
>
> **Appropriate Test**  
> One-sample, **left-tailed t-test** (population variance unknown).
>
> **Significance and Confidence**  
> Significance level: $\alpha = 5\%$  
> Confidence level: $1-\alpha = 95\%$
>
> **Test Statistic**  
> $$
> t = \frac{\bar X - 0.05}{s / \sqrt{n}}, \quad \text{df} = n-1
>$$
>
> **Decision Rule**  
> Reject $H_0$ if  
> $$
> t < -t_{\alpha,\,n-1}
>$$
> (left-tail rejection region).


> [!Question] Basics - Difference between Means
> Sue Smith is investigating whether the abnormal returns for acquiring firms during merger announcement periods differ for horizontal and vertical mergers. She estimates the abnormal returns for a sample of acquiring firms associated with horizontal mergers and a sample of acquiring firms involved in vertical mergers. Smith finds that abnormal returns from horizontal mergers have a **mean of 1.0%** and a **standard deviation of 1.0%**, while abnormal returns from vertical mergers have a **mean of 2.5%** and a **standard deviation of 2.0%**. Smith assumes the samples are independent, the population means are normally distributed, and the population variances are equal. Smith calculates the **t-statistic as −5.474** and the **degrees of freedom as 120**. Using a 5% significance level, should Smith reject or fail to reject the null hypothesis that the abnormal returns to acquiring firms during the announcement period are the same for horizontal and vertical mergers?
> 
> **Hypotheses**
> > $$H_0: \mu_H - \mu_V = 0 \qquad H_A: \mu_H - \mu_V \neq 0$$
> 
> **Appropriate Test**
> t-test for independent population with known variance
> 
> **Test Statistic**
> -5.474
> 
> **Decision Rule**
> Reject if: $$ |t| > t_{0.975,\ 120}$$
> $t_{0.975,\ 120} = 1.979$
> 
> Hence $H_0$ is rejected


> [!QUESTION] Basics - Difference between Means
> Joe Andrews is examining changes in estimated betas for the common stock of companies in the telecommunications industry before and after deregulation. Andrews believes the betas may decline because of deregulation, because companies are no longer subject to the uncertainties of rate regulation—or that they may increase because there is more uncertainty regarding competition in the industry. Andrews calculates a t-statistic of 10.26 for this hypothesis test, based on a sample size of 39. Using a 5% significance level, determine whether there is a change in betas.




> [!question] One-tailed vs Two-tailed Test Selection  
> A manager tests whether a portfolio’s mean monthly return is **greater than 1%** using a **one-tailed test at the 5% significance level**. After observing that the sample mean is **below 1%**, she decides to **switch to a two-tailed test** at the same significance level and reassess the result.  
>  
> Is this procedure statistically valid? State the **correct decision rule** and identify **which hypothesis test must be used**.

> [!question] Pooled vs Unpooled Variance Decision  
> Two **independent samples** of returns have **unknown variances**. Sample A has $n_1 = 18$, Sample B has $n_2 = 22$. The analyst assumes **equal variances** and applies a **pooled t-test**, even though the sample standard deviations differ materially.  
>  
> At the **5% significance level**, test whether the population means differ. Identify **whether the test choice is appropriate** and **what error this assumption introduces**.

> [!question] Chi-square Test Tail Direction  
> An analyst tests whether a fund’s **variance is less than 4%** using **24 monthly return observations** at the **5% significance level**. The calculated **chi-square test statistic falls in the rejection region**, but the analyst compares it against the **upper-tail critical value** instead of the **lower-tail critical value**.  
>  
> Should the null hypothesis be rejected? Identify the **exact procedural mistake**.

> [!question] Significance Level vs Confidence Level  
> A researcher states that using a **1% significance level** means she is **99% confident that the null hypothesis is false** if it is rejected.  
>  
> Is this interpretation correct? Restate the **correct probabilistic meaning** of the significance level and confidence level.

> [!question] Type I vs Type II Error Interpretation  
> An analyst designs a hypothesis test with a **very low significance level** to avoid false positives. As a result, the test rarely rejects the null hypothesis.  
>  
> Identify how this choice affects the **probability of a Type II error** and the **power of the test**.

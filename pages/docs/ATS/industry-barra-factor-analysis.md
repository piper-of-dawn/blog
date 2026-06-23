# Industry Barra factor research

## Trading question

Do industry exposures predict abnormal daily stock returns after controlling for market-beta exposure?

The current answer is **no statistically robust positive industry effect was found** in the tested sample. This does not support an industry-overweight trade on its own.

## Data used

- Universe: 500 stocks from the current `us_largecap` Supabase table.
- Industry mapping: `us_tickers_info.industry`.
- Prices: Yahoo Finance adjusted-close daily prices, 2021-06-23 to 2026-06-22.
- Market proxy: `^GSPC`.

## Model

One equal-weighted cross-sectional regression is estimated each trading day:

`stock return(i,t) = beta(i,t-1) * market factor(t) + industry dummy(i,g) * industry factor(g,t) + residual(i,t)`

- The dependent variable is each stock's daily simple return.
- Each industry dummy is an exposure. Its daily coefficient is that industry's daily factor return after controlling for market-beta exposure.
- Market beta is estimated using up to 252 prior matched stock/market return observations and is shifted by one day. The return on date `t` is not used in the beta at `t`, so the beta calculation has no look-ahead bias.
- Stocks need valid return, beta, and industry data. A daily regression needs at least 100 eligible stocks.
- The model has no intercept and gives every stock the same OLS weight.

## Significance diagnostics

Two p-value series are produced for every industry.

1. **Daily cross-sectional p-value**: tests whether the industry's factor return differs from zero on that specific day. This is useful for diagnosis, but it is too noisy to use directly as a trading signal.
2. **Rolling 252-observation p-value**: tests whether the industry's mean factor return differs from zero over the trailing 252 available factor-return observations. A 126-observation minimum is required before this statistic is shown.

Both the full-sample and rolling analyses use Benjamini-Hochberg false-discovery-rate adjustment across industries. This is necessary because testing roughly one hundred industries creates many false positives if raw 5% p-values are used.

## Findings

- The live analysis produced 109 industry factor-return series.
- No industry had a positive **full-sample** mean factor return significant at the 5% FDR-adjusted threshold.
- Therefore, there is no validated industry factor in this study to tilt toward, rank stocks by, or use as a standalone long signal.

## Trading interpretation

Current research conclusion: **do not trade an industry tilt from this result.**

If the rolling p-value panel later identifies an industry with all of the following properties, it can become a candidate for further out-of-sample testing:

- positive rolling mean factor return;
- FDR-adjusted rolling p-value below 0.05;
- persistence rather than a one-day crossing; and
- sufficient stock coverage in the daily regressions.

That candidate would still require a walk-forward portfolio test with transaction costs, turnover, liquidity constraints, and a separate holdout period before deployment.

## Important limitation

`us_tickers_info` has only `ticker`, `sector`, and `industry`. It does not provide effective dates, historical universe membership, or verified GICS sub-industry labels. The study therefore uses a current static mapping and has survivorship plus classification look-ahead bias.

Treat this as exploratory **industry** research, not as a validated GICS factor backtest. To make it trading-grade, replace the mapping with licensed, effective-dated GICS sub-industry data and point-in-time index membership, then rerun the same framework.

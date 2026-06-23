## Volatility Decomposition
$$
\Omega_r = B\, \Omega_f\, B^T + \Omega_\epsilon
$$
This equation tells us **what causes the ups and downs in a group of asset returns, and how those sources mix together.** If you want to understand risk, build portfolios, or analyze any group of assets, this formula is a fundamental “recipe” for how returns vary together.

Start from the recipe for asset returns:
$$
r = Bf + \epsilon
$$
The **covariance** (how things wiggle together) of $r$ is:
$$
\Omega_r = \mathrm{Var}(r)
$$
Plug in our recipe:
$$
= \mathrm{Var}(Bf + \epsilon)
$$
If errors and factors are independent, the variance of a sum is just the sum of variances:
$$
= \mathrm{Var}(Bf) + \mathrm{Var}(\epsilon)
$$
When you scale factors by B, variances get mapped like so:
$$
\mathrm{Var}(Bf) = B\, \mathrm{Var}(f)\, B^T
$$
$$
\Omega_r = B\, \Omega_f\, B^T + \Omega_\epsilon
$$
## Socratic Q\&A

Q: What does the first term $B \Omega_f B^T$ mean in words?
A: It shows how group movements (factors) flow through to each asset and spread out to influence asset risk.

Q: Why do we need $B$ and $B^T$, not just $\Omega_f$?
A: Because $B$ tailors the factor wiggles to each asset, and $B^T $connects back to all assets, creating a full map of shared risk.

Q: What does $\Omega_\epsilon$ add to the mix?
A: It captures each asset’s personal quirks—randomness that factors cannot explain.

Q: Why is the sum of two covariances—the shared and the unique?
A: Because return variations come from big market shocks (factors) and small asset-specific surprises (errors).

Q: What’s the practical importance of splitting up risks this way?
A: It lets investors see what risks can be diversified (factor risks) and what is stubborn (idiosyncratic risk).
<span style="display:none">[^1]</span>


Keep two running trackers: 
- tracker A = “how jumpy prices have been lately” (volatility)
- tracker B = “how prices have moved lately” (returns), but scaled by tracker A

Update both after every new price. The ratio tells you how many standard deviations today’s price move is, smoothed over time. Large positive = trend up, large negative = trend down.

Step-by-step 

1. Compute a scale-free return  
    $$r_{t}= \frac{P_t-P_{t-1}}{P_{t-1}}\quad\text{or}\quad\ln(P_t/P_{t-1})  $$
    Using percent/log makes the metric independent of the absolute price level.
    
2. Update volatility (σ²) first  
    Exponential moving average of squared returns with decay η:  
    $$\sigma^{2}_{t}= (1-\eta)\,\sigma^{2}_{t-1}+\eta\,r_{t}^{2}  $$
    This is a one-line “memory” of recent squared moves; smaller η = longer memory.
3. Normalise today’s return 
$$z_t = \frac{r_t}{\sigma_t+\epsilon}  $$
    ε is a tiny constant to prevent division by zero.
4. Update the signal  
    Another exponential average, but of the z-scores:  $$
    \phi_t = (1-\eta)\,\phi_{t-1} + \sqrt{\eta}\,z_t  $$
    The $\sqrt{\eta}$ factor keeps the signal’s variance near 1 when returns are white noise.

So φ = +2.0 means: the exponentially weighted average of 112 day returns is two standard deviations above zero.
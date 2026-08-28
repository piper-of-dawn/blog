
> [!abstract] **TLDR: First Principles Thinking**
> 
> Markets aren't static. A stock's sensitivity to the market (**Beta**) changes every day. Traditional OLS is like looking at a blurry long-exposure photo; the **Kalman Filter** is a high-speed video.
> 
> **The logic:** > 1. **Predict:** Start with your best guess for today's Beta.
> 
> 2. **Observe:** Look at how the stock actually moved compared to the market.
> 
> 3. **Adjust:** If your guess was off, update it. If the market was crazy volatile, trust your guess more. If the market was stable and you missed, trust the data more.

---

## 1. Model Configuration

To track a moving target, we define how it behaves (Transition) and how we see it (Measurement).

|**Parameter**|**Definition**|**First Principle Role**|
|---|---|---|
|$\bar\beta$|Long-run average|The "gravity" pulling Beta back to normal.|
|$\phi$|Mean reversion speed|How fast the stock returns to its typical risk profile.|
|$Q$|Process noise|Internal "jitter"—how much Beta can jump on its own.|
|$R$|Measurement noise|Market "static"—stock moves unrelated to the market.|

---

## 2. The Algorithm

### Phase A: Initialization

We begin with our best long-term estimate.

- **State:** $\hat\beta \leftarrow \bar\beta$
    
- **Uncertainty:** $P \leftarrow \mathrm{SE}(\bar\beta)^2$
    

### Phase B: The Recursive Loop

For every trading day $t$, we execute the following:

#### Step 1: Predict (The "Prior")

We project where Beta should be before seeing today's returns.

$$\hat\beta^{-} = \phi \hat\beta + (1-\phi)\bar\beta$$

_Correction:_ Your uncertainty prediction $P^{-} = P + Q$ assumes a random walk. Since we are using a mean-reverting transition ($\phi$), the variance propagation must account for the shrinkage:

$$P^{-} = \phi^2 P + Q$$

#### Step 2: Observe

We calculate the "Innovation"—the gap between reality and our model.

1. **Market Signal:** $H_t = r^{mkt}_t$
    
2. **Expected Return:** $\hat y_t = H_t \hat\beta^{-}$
    
3. **Surprise (Residual):** $e_t = r^{stock}_t - \hat y_t$
    

#### Step 3: The Learning Rate (Kalman Gain)

This determines how much we react to the "Surprise."

1. **System Variance:** $S_t = H_t^2 P^{-} + R$
    
2. **Gain:** $K_t = \frac{P^{-} H_t}{S_t}$
    

> [!info] **Logic Check**
> 
> If $R$ (market noise) is huge, $K_t$ becomes small. We ignore the surprise because it's probably just noise. If $P^{-}$ (our uncertainty) is huge, $K_t$ becomes large. We trust the data more because we don't trust our own guess.

#### Step 4: Update (The "Posterior")

We refine our estimate and shrink our uncertainty for tomorrow.

1. **New Beta:** $\hat\beta \leftarrow \hat\beta^{-} + K_t e_t$
    
2. **New Uncertainty:** $P \leftarrow (1 - K_t H_t) P^{-}$
    

---

## 3. Key Outputs

- **$\{\hat\beta_t\}$:** Your time-varying Beta series.
    
- **$\{P_t\}$:** The confidence interval of your estimate (use $\pm \sqrt{P_t}$ for bands).
    

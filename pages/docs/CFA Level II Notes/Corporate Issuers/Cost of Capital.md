## Variant: Cost of Debt using Matrix Pricing

> [!abstract]
> Find traded bonds with the same credit rating, compute their YTMs, average by maturity, then linear-interpolate to your target maturity. Average before interpolating — that is the main trap.

> **Brevis Solutions** is a technology provider. **Sunil Tilak, CFA** is estimating the **cost of debt**, which represents **30% of Brevis' capital structure**. The **6-year, BB-rated debt** is **thinly traded**. Tilak collects data on similar **BB-rated securities** with liquid markets:
>
> * **Silva:** 4-year, 5% coupon, price **\$99.45**
> * **Deso:** 4-year, 6% coupon, price **\$101.75**
> * **Manfried:** 7-year, 7% coupon, price **\$110.00**
> * **Listor:** 7-year, 8% coupon, price **\$114.00**
>
> Estimate the **cost of debt** using the **matrix method**.

**What is the question really asking?**

We need Brevis's **cost of debt** — the YTM a 6-year BB-rated bond should have. But Brevis's bond is thinly traded, so there is no reliable market price. The key question is: **what yield does the market assign to BB-rated bonds near 6 years?**

> [!NOTE]
> Matrix pricing = borrow the yield from comparable traded bonds when your bond doesn't trade.

**1. Calculate the YTM of each comparable bond**

Each comparable is a standard TVM problem: today's price is the PV, coupons are PMT, par is FV, solve for I/Y.

$$
\text{Silva: } PV=-99.45,\; N=4,\; PMT=5,\; FV=100 \Rightarrow YTM=\boxed{5.16\%}
$$

$$
\text{Deso: } PV=-101.75,\; N=4,\; PMT=6,\; FV=100 \Rightarrow YTM=\boxed{5.50\%}
$$

$$
\text{Manfried: } PV=-110.00,\; N=7,\; PMT=7,\; FV=100 \Rightarrow YTM=\boxed{5.26\%}
$$

$$
\text{Listor: } PV=-114.00,\; N=7,\; PMT=8,\; FV=100 \Rightarrow YTM=\boxed{5.53\%}
$$

*Intuition:* Price above par means yield below coupon; price below par means yield above coupon. Silva at \$99.45 is almost at par, so its 5.16% YTM is just above its 5% coupon. Deso at \$101.75 is a premium bond, so its 5.50% YTM is below its 6% coupon.

**2. Construct the matrix and average yields by maturity**

Arrange the YTMs into a grid of maturity vs coupon, then average each maturity row:

| Maturity | 5% | 6% | 7% | 8% | Average YTM |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 4 yr | 5.16% | 5.50% | — | — | **5.33%** |
| 7 yr | — | — | 5.26% | 5.53% | **5.39%** |

> [!NOTE]
> Average each maturity row first — this removes the coupon effect and isolates the **maturity effect** on yield.

**3. Linear-interpolate to the target maturity (6 years)**

We have the 4-year average (5.33%) and the 7-year average (5.39%). Brevis needs the 6-year yield, which sits between them.

$$
\text{Yield}_{6} = \text{Yield}_{short} + \frac{\text{Yield}_{long}-\text{Yield}_{short}}{\text{Mat}_{long}-\text{Mat}_{short}} \times (\text{Mat}_{target}-\text{Mat}_{short})
$$

$$
= 5.33\% + \frac{5.39\%-5.33\%}{7-4} \times (6-4)
$$

$$
= 5.33\% + \frac{0.06\%}{3} \times 2 = 5.33\% + 0.04\% = \boxed{5.37\%}
$$

*Intuition:* The yield curve from 4 to 7 years slopes gently upward (5.33% → 5.39%). Six years is two-thirds of the way from 4 to 7, so we take the 4-year yield and add two-thirds of the 0.06% spread.

> [!NOTE]
> Linear interpolation: $\text{Yield}_{target} = \text{Yield}_{short} + \frac{\Delta \text{Yield}}{\Delta \text{Mat}} \times (\text{target} - \text{short})$.

---

## Variant: Cost of Debt from a Capital Lease (RIIL)

> [!abstract]
> The lease hides a loan. PV is what the lessor spends (fair value + direct costs), PMT is the lease payment, FV is the residual. Solve for I/Y — that is the hidden cost of debt.

> **Company A** has signed a **15-year lease** with **annual payments of \$10 million** at the end of each year. The **lease residual value** is **\$30 million**. The **fair value of the asset** is **\$120 million**, and the **lessor incurs a cost of \$5 million** at lease initiation.
>
> Calculate the **RIIL** (rate implicit in the lease).

**What is the question really asking?**

We need the **hidden interest rate** baked into this lease — the rate that makes the lessor's investment worthwhile. The key question is: **what is the lessor actually investing, and what are they getting back?**

> [!NOTE]
> RIIL is the IRR of the lease from the lessor's perspective: PV of what they pay out = PV of what they receive back.

**1. Identify the lessor's cash flows**

The lessor gives up the asset (fair value \$120m) and pays extra costs (\$5m) at inception. In return, they receive 15 annual payments of \$10m plus the residual of \$30m at the end.

$$
\text{PV (lessor outflow)} = \text{Fair value} + \text{Lessor's direct cost} = 120 + 5 = \$125\text{m}
$$

$$
\text{PMT (annual inflow)} = \$10\text{m}, \quad \text{FV (residual)} = \$30\text{m}, \quad N = 15
$$

*Intuition:* The lessor spends \$125m today to buy and deliver the asset. They get \$10m/year for 15 years, then the asset back (worth \$30m). The IRR of that stream is the hidden borrowing rate.

**2. Solve for the rate (TVM)**

$$
PV = -125, \quad N = 15, \quad PMT = 10, \quad FV = 30
$$

$$
\text{CPT I/Y} = \boxed{4.28\%}
$$

*Why?* The lessor lends \$125m, receives \$10m/year plus \$30m at the end. The rate that balances those flows is 4.28% — that is the cost of debt implied by the lease.

> [!NOTE]
> RIIL uses the lessor's perspective: $PV = -(\text{fair value} + \text{direct cost})$, $PMT = \text{lease payment}$, $FV = \text{residual}$.

---

## Variant: Equity Risk Premium using the Grinold-Kroner Model

> [!abstract]
> Expected equity return = dividend yield + repricing + inflation + real growth − dilution. Get inflation from the Fisher equation (Treasury vs TIPS, not simple subtraction). Subtract the risk-free rate for the ERP.

> **Patrick McGill** is estimating the **equity risk premium** for the U.S. market. He uses the **S&P 500** as the market proxy.
>
> * **Dividend yield:** **1.2%**
> * **Real GDP growth rate (forecast):** **3%**
> * **Market is fairly valued** (no expected P/E change)
> * **10-year Treasury yield:** **2.4%**
> * **10-year TIPS yield:** **0.25%**
> * **No net change in shares outstanding**
> * **Risk-free rate:** **0.50%**
>
> Calculate the **equity risk premium**.

**What is the question really asking?**

We need the **ERP** — the extra return investors demand for holding equities over the risk-free rate. The key question is: **what are the five drivers of expected equity return, and which are zero here?**

**1. Understand the Grinold-Kroner decomposition**

The model says the expected market return comes from five pieces:

$$
E(R_e) = \underbrace{DY}_{\text{dividend yield}} + \underbrace{\Delta P/E}_{\text{repricing}} + \underbrace{i}_{\text{inflation}} + \underbrace{G}_{\text{real growth}} - \underbrace{\Delta S}_{\text{dilution}}
$$

Then:

$$
ERP = E(R_e) - r_f
$$

> [!NOTE]
> Grinold-Kroner: $ERP = [DY + \Delta P/E + i + G - \Delta S] - r_f$. Each piece is an independent driver of equity return.

**2. Knock out the zeros**

Two pieces are given as zero:

* **Market is fairly valued** $\Rightarrow$ no expected P/E expansion or contraction $\Rightarrow \Delta P/E = 0$
* **No net change in shares outstanding** $\Rightarrow \Delta S = 0$

That leaves three live pieces: $DY$, $i$, and $G$.

**3. Estimate expected inflation from Treasury vs TIPS**

The question gives both the nominal 10-year Treasury yield (2.4%) and the TIPS yield (0.25%). The difference reveals the market's inflation expectation — but not by simple subtraction.

Use the **Fisher equation** (exact):

$$
i = \frac{1 + YTM_{\text{nominal}}}{1 + YTM_{\text{TIPS}}} - 1
$$

$$
i = \frac{1.024}{1.0025} - 1 = 0.02144 \approx \boxed{2.1\%}
$$

> [!NOTE]
> **Do not simply subtract** $2.4\% - 0.25\% = 2.15\%$. Use the Fisher equation: $i = \frac{1+Y_{\text{nominal}}}{1+Y_{\text{TIPS}}} - 1$.

*Intuition:* TIPS already include inflation protection, so the real yield is 0.25%. The nominal yield is 2.4%. The inflation rate that connects the two is not their difference but their ratio (minus one), because real and nominal rates compound multiplicatively.

**4. Assemble the ERP**

$$
E(R_e) = 1.2\% + 0 + 2.1\% + 3.0\% - 0 = 6.3\%
$$

$$
ERP = E(R_e) - r_f = 6.3\% - 0.5\% = \boxed{5.8\%}
$$

*Intuition:* Equity investors expect to earn the dividend yield (1.2%), plus inflation (2.1%), plus real economic growth (3.0%). That totals 6.3%. Since the risk-free rate pays 0.5%, the extra risk premium for holding equities is 5.8%.

> [!NOTE]
> If the market were **undervalued**, $\Delta P/E > 0$ (expected upward repricing adds to ERP). If **overvalued**, $\Delta P/E < 0$.

---

## Variant: Cost of Equity using the DDM

> [!abstract]
> Cost of equity = dividend yield + growth. Constant growth → Gordon formula ($D_1/P_0 + g$). Varying growth → IRR with the terminal stock price bundled into the last cash flow. The trap is forgetting that terminal price.

> Calculate the **cost of equity** for two companies:
>
> * **Cogenics, Inc.:** Expected dividend **\$4** at end of Year 1, dividends grow at a constant rate of **4%** per year, current stock price **\$100**.
> * **Betagenics, Inc.:** Expected dividends of **\$1.50, \$2.00, \$2.50, and \$3.00** at the end of each of the next four years. Current stock price **\$50**, expected stock price at end of Year 4 is **\$60**.

**What is the question really asking?**

We need each company's **required return on equity** ($r_e$). The key question is: **does the dividend stream have constant growth or varying growth?** Cogenics is constant (use the Gordon formula); Betagenics is varying (use IRR).

> [!NOTE]
> DDM cost of equity: $r_e = DY + CGY = \frac{D_1}{P_0} + g$. For non-constant dividends, solve for IRR instead.

**1. Cogenics — constant growth (Gordon)**

Dividends grow at a steady 4% forever, so the Gordon Growth Model applies directly:

$$
r_e = \frac{D_1}{P_0} + g = \frac{4}{100} + 4\% = 4\% + 4\% = \boxed{8\%}
$$

*Intuition:* You pay \$100 today. You get a \$4 dividend yield immediately, and the stock grows at 4% per year (capital gains). Total required return = 8%.

**2. Betagenics — non-constant growth (IRR)**

Dividends change every year, so there is no single $g$ to plug in. Instead, set up the cash flows and solve for IRR — the rate that makes the PV of all future cash flows equal to today's price.

The cash flows are:

| Time | 0 | 1 | 2 | 3 | 4 |
| ---: | ---: | ---: | ---: | ---: | ---: |
| CF | −50 | 1.50 | 2.00 | 2.50 | 63.00 |

*Why $63$ at Year 4?* The last cash flow bundles the **final dividend (\$3.00)** with the **terminal stock price (\$60)**: $3 + 60 = 63$.

> [!NOTE]
> The terminal stock price enters at the same time as the final dividend — bundle them: $CF_{last} = D_{last} + P_{terminal}$.

On the TI BA II Plus:

$$
CF_0 = -50,\; C01 = 1.50,\; C02 = 2.00,\; C03 = 2.50,\; C04 = 63.00
$$

$$
\text{CPT IRR} = \boxed{8.78\%}
$$

*Intuition:* You pay \$50 now and receive a growing dividend stream plus \$60 at the end. The IRR that balances those flows — 8.78% — is what equity holders require.

---

## Variant: Cost of Equity using Bond Yield Plus Risk Premium

> [!abstract]
> Cost of equity = bond YTM + equity risk premium. Solve the YTM from the bond price first — it is not the coupon rate. Then add the premium for equity being riskier than debt.

> **Company LMN** has bonds with **15 years to maturity**, a **coupon of 8.2%**, and a **price of 101.70**. An analyst estimates that the additional risk of holding equity rather than bonds justifies a **risk premium of 3.8%**. Calculate the **cost of equity** using the **bond-yield-plus-risk-premium** approach.

**What is the question really asking?**

We need LMN's **cost of equity** using a build-up shortcut. The key question is: **what is the YTM of LMN's bonds?** That is the starting point, not the coupon rate.

**1. Compute the bond's YTM**

The bond price (101.70) differs from par (100), so YTM ≠ coupon. Solve a TVM problem:

$$
PV = -101.70,\; N = 15,\; PMT = 8.2,\; FV = 100 \Rightarrow YTM = \boxed{8.0\%}
$$

*Intuition:* The bond trades at a slight premium, so its YTM (8.0%) is just below its coupon (8.2%). Bondholders demand 8.0%.

**2. Add the equity risk premium**

Equity sits below debt in the capital structure, so equity holders demand more. The analyst has quantified that "more" as 3.8%:

$$
r_e = YTM_{\text{bond}} + \text{risk premium} = 8.0\% + 3.8\% = \boxed{11.8\%}
$$

*Intuition:* Bondholders get 8.0%. Equity holders take all the residual risk, so they demand 3.8% more. Total: 11.8%.

> [!NOTE]
> BYRPM: $r_e = YTM_{\text{debt}} + \text{equity risk premium over debt}$. Use YTM, **not** the coupon rate.

---

## Variant: Cost of Equity using the CAPM

> [!abstract]
> Cost of equity = risk-free rate + beta × equity risk premium. One factor, one multiplication. Beta scales the market premium — below 1 means less risk, above 1 means more.

> The expected **risk-free rate** is **4%**, and the **equity risk premium** is **3.9%**. Calculate the **required return on equity** for a stock with a **beta of 0.8**.

**What is the question really asking?**

We need the **required return on equity** using the simplest single-factor model. The key question is: **how much market risk does this stock carry?** Beta = 0.8 means less than the market.

**1. Apply the CAPM formula**

$$
r_e = r_f + \beta \times ERP
$$

$$
r_e = 4\% + (0.8 \times 3.9\%) = 4\% + 3.12\% = \boxed{7.12\%}
$$

*Intuition:* The risk-free floor is 4%. The market premium is 3.9%, but this stock only captures 80% of market risk (beta = 0.8), so it earns only 3.12% of the premium. Total: 7.12%.

> [!NOTE]
> CAPM: $r_e = r_f + \beta \times ERP$. Beta scales the market premium — a beta below 1 means less market risk, a beta above 1 means more.

---

## Variant: Cost of Equity using the Fama–French Five-Factor Model

> [!abstract]
> Like CAPM but with five risk buckets. Multiply each beta by its premium (mind negative signs — they subtract), sum all contributions, add the risk-free rate.

> Suppose the current **risk-free rate** is **2.1%**. Calculate the **cost of equity** for **Fulton Corp.** using the **Fama–French five-factor model**:
>
> * **Market:** beta **1.1**, risk premium **3.2%**
> * **Size (SMB):** beta **0.2**, risk premium **1.3%**
> * **Value (HML):** beta **−0.3**, risk premium **2.0%**
> * **Profitability (RMW):** beta **0.18**, risk premium **4.2%**
> * **Investment Style (CMA):** beta **0.5**, risk premium **2.4%**

**What is the question really asking?**

We need Fulton's **required return on equity** ($r_e$). The key question is: **how many risk buckets does this model use?** The question fixes Fama–French five-factor, so there are five, not one.

> [!NOTE]
> FF5 = CAPM with four extra risk buckets: $r_e = r_f + \sum_i \beta_i \times RP_i$. Each factor chips in its own $\beta \times$ premium.

**1. Recognise the game: CAPM with five risk buckets**

CAPM prices equity with a single market bucket. FF5 keeps that skeleton but adds four extra buckets — different *flavours of risk* a stock is exposed to:

* **Size (SMB, Small Minus Big)** — small firms tend to out-earn big firms.
* **Value (HML, High Minus Low book-to-market)** — value firms tend to out-earn growth firms.
* **Profitability (RMW, Robust Minus Weak)** — robust earners tend to win.
* **Investment Style (CMA, Conservative Minus Aggressive)** — conservative investors tend to win.

**2. Multiply each beta by its risk premium**

Each bucket's contribution is *sensitivity × price per unit of sensitivity*:

$$
\begin{aligned}
\text{Market:}&\quad 1.1 \times 3.2\% = 3.52\%\\
\text{Size:}&\quad 0.2 \times 1.3\% = 0.26\%\\
\text{Value:}&\quad (-0.3) \times 2.0\% = -0.60\%\\
\text{Profitability:}&\quad 0.18 \times 4.2\% = 0.756\%\\
\text{Investment Style:}&\quad 0.5 \times 2.4\% = 1.20\%
\end{aligned}
$$

> [!NOTE]
> **Negative beta = subtraction.** Fulton's value beta is $-0.3$, so it behaves like a *growth* stock and the value premium is removed, not added.

**3. Sum the buckets and add the risk-free rate**

$$
r_e = 2.1\% + 3.52\% + 0.26\% - 0.60\% + 0.756\% + 1.20\% = 7.236\%
$$

$$
r_e \approx \boxed{7.2\%}
$$

*Intuition:* Start at the risk-free floor of 2.1%. Fulton earns extra for market risk (+3.52%), a little for size (+0.26%), profitability (+0.76%) and investment style (+1.2%), but loses a bit because it is growth-leaning, not value (−0.60%). Net ≈ 7.2%.

*Units check:* beta is unitless; $\beta \times RP$ yields percentage points; the running total is a rate in %. Consistent.

**4. Interpret the result**

$\boxed{r_e \approx 7.2\%}$ is what Fulton's shareholders require. It is the **discount rate for Fulton's equity cash flows** and the **hurdle rate** for equity-funded projects — any project returning below 7.2% destroys equity value.

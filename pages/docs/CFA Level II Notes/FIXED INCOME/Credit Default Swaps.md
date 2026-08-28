
## Variant: Index CDS Default Payoff and Remaining Notional

> Party X is the **protection buyer** in a five-year **$100 million notional CDS index** containing **125 equally weighted entities**. One constituent, Company A, defaults. After default, its bonds trade at **30% of par**.
> **1. What payoff does Party X receive?**
> **2. What is the CDS index notional after the default?**

**What is happening?**

A **CDS index** is like buying default insurance on a basket of companies rather than on one company.

```text
$100m CDS Index
      |
      +-- Company 1
      +-- Company 2
      +-- ...
      +-- Company A  <-- defaults
      +-- ...
      +-- Company 125
```

Because the 125 companies are **equally weighted**, each company represents the same fraction of the $100 million index notional.

> [!NOTE]
> A default does **not** trigger payment on the entire $100m index—only on the notional assigned to the defaulted company.

**1. Find Company A's notional**

We currently have:

* Total index notional = $100$ million
* Number of entities = $125$

Therefore:

$$
\text{Notional per entity}
=
\frac{\$100\text{m}}{125}
=
\$0.8\text{m}
$$

So Party X has effectively bought protection on **$800,000 of Company A debt**.

**2. Understand the 30% bond price**

After default, Company A's bonds trade at **30% of par**.

This is the **recovery rate**:

$$
R=30\%
$$

If $1 of debt defaults but is still worth $0.30, the investor has actually lost:

$$
1-0.30=0.70
$$

So the **loss given default (LGD)** is:

$$
LGD=1-R=70\%
$$

> [!NOTE]
> CDS protection pays the **loss**, not the recovery: $\text{Payoff}=\text{Notional}\times(1-\text{Recovery Rate})$.

**3. Calculate the CDS payoff**

$$
\text{Payoff}
=
\$800{,}000\times(1-0.30)
$$

$$
=
\$800{,}000\times0.70
=
\boxed{\$560{,}000}
$$

*Intuition:* Party X had $800,000 of Company A exposure. After default, $240,000 is recoverable:

$$
\$800{,}000\times30\%=\$240{,}000
$$

The protection seller therefore replaces the missing $560,000:

$$
\$800{,}000-\$240{,}000=\$560{,}000
$$

**4. Calculate the remaining index notional**

Once Company A defaults, its $0.8 million notional is removed from the continuing index:

$$
\$100\text{m}-\$0.8\text{m}
=
\boxed{\$99.2\text{m}}
$$

The remaining 124 companies continue to be covered.

> [!NOTE]
> For an equally weighted CDS index: $\text{Defaulted notional}=\frac{\text{Index notional}}{\text{Number of constituents}}$.

**Reusable pattern**

$$
\text{Defaulted entity notional}
=
\frac{\text{Total index notional}}{N}
$$

$$
\text{CDS payoff}
=
\text{Defaulted entity notional}\times(1-R)
$$

$$
\text{Remaining index notional}
=
\text{Old notional}-\text{Defaulted entity notional}
$$

---

## Variant: Calculating Survival Probability from Annual Hazard Rates

> Consider a five-year senior CDS on Xeon Corp. Its **hazard rate is 2% in Year 1 and increases by 1 percentage point each year**. Calculate the probability that Xeon **survives all five years without defaulting**.

**What is the question asking?**

We want the **survival probability**: the probability that Xeon makes it through **every year** without defaulting.

The annual hazard rates are:

| Year | Hazard rate |
| ---: | ----------: |
|    1 |          2% |
|    2 |          3% |
|    3 |          4% |
|    4 |          5% |
|    5 |          6% |

**What is a hazard rate?**

A hazard rate is the probability of default **during that year, conditional on the company having survived up to the start of that year**.

So if Year 1 hazard is 2%:

$$
P(\text{default in Year 1})=2\%
$$

Therefore:

$$
P(\text{survive Year 1})=1-2\%=98\%
$$

> [!NOTE]
> Hazard rate means **default probability given survival so far**; therefore annual survival probability is $1-\text{hazard rate}$.

**1. Convert every hazard rate into a survival probability**

$$
\begin{aligned}
S_1 &=1-0.02=0.98\\
S_2 &=1-0.03=0.97\\
S_3 &=1-0.04=0.96\\
S_4 &=1-0.05=0.95\\
S_5 &=1-0.06=0.94
\end{aligned}
$$

**2. Surviving five years means surviving Year 1 AND Year 2 AND ... AND Year 5**

Therefore multiply the conditional survival probabilities:

$$
P(\text{survive 5 years})
=
0.98\times0.97\times0.96\times0.95\times0.94
$$

$$
=0.81493
\approx
\boxed{81.5\%}
$$

*Intuition:* Imagine starting with 100 companies. Roughly 98 survive Year 1. Of those survivors, 97% survive Year 2, then 96% of those survive Year 3, and so on. Each year's surviving population becomes the starting population for the next year.

```text
Start
  |
100%
  | × 0.98
  v
98%
  | × 0.97
  v
95.06%
  | × 0.96
  v
91.26%
  | × 0.95
  v
86.69%
  | × 0.94
  v
81.49%
```

> [!NOTE]
> Do **not** simply subtract $2%+3%+4%+5%+6%=20%$ from 100%; each hazard rate applies only to firms that survived earlier years.

**Reusable rule**

For annual hazard rates $h_1,h_2,\ldots,h_T$:

$$
\boxed{
P(\text{survive through }T)
=
\prod_{t=1}^{T}(1-h_t)
}
$$

Recognition pattern: **hazard rates across several periods + probability of surviving to maturity → convert each hazard into $1-h$ and multiply.**

---

## Variant: Cheapest-to-Deliver Bond in a CDS

> Party X is the **protection buyer** in a **$10 million notional senior CDS** on Alpha, Inc. Alpha defaults. After default:
>
> * Bond P: **subordinated unsecured**, trading at **15% of par**
> * Bond Q: **senior unsecured**, trading at **25% of par**
> * Bond R: **senior unsecured**, trading at **30% of par**
>
> What is the payoff on the CDS?

**What is the question really asking?**

After Alpha defaults, the CDS protection buyer is compensated for the loss on an **eligible bond** of the reference company.

The key phrase is **senior CDS**.

That means we cannot automatically choose the bond with the lowest market price. We must first ask:

**Which bonds have the required seniority?**

* Bond P = subordinated → **not eligible**
* Bond Q = senior unsecured → eligible
* Bond R = senior unsecured → eligible

> [!NOTE]
> “Cheapest-to-deliver” means the cheapest **eligible** obligation, not simply the cheapest bond issued by the company.

**1. Find the cheapest eligible bond**

Among the eligible senior unsecured bonds:

$$
Q=25\%\text{ of par}
$$

$$
R=30\%\text{ of par}
$$

Therefore:

$$
\boxed{\text{Bond Q is cheapest-to-deliver}}
$$

*Why?* A $100 face-value Bond Q can be obtained in the market for only $25, versus $30 for Bond R.

The fact that Bond P trades at only $15 does not matter because its **subordinated** status makes it unsuitable for this senior CDS.

> [!NOTE]
> Apply the filter first: **eligible seniority → then lowest price**.

**2. Translate 25% of par into recovery**

Bond Q trades at **25% of par**.

Think of a $1 claim:

* Face value promised = $1.00
* Value recovered after default = $0.25
* Economic loss = $0.75

Therefore:

$$
\text{Recovery Rate}=25\%
$$

$$
\text{Loss Given Default}
=
1-0.25
=
75\%
$$

**3. Calculate the CDS payoff**

The CDS protects $10 million of notional.

$$
\text{Payoff}
=
\text{Notional}\times(1-\text{Recovery Rate})
$$

Substitute:

$$
\text{Payoff}
=
\$10{,}000{,}000\times(1-0.25)
$$

$$
=
\$10{,}000{,}000\times0.75
$$

$$
=
\boxed{\$7.5\text{ million}}
$$

*Intuition:* The protected claim was worth $10 million before default, but the cheapest eligible defaulted obligation is now worth only:

$$
\$10\text{m}\times25\%
=
\$2.5\text{m}
$$

The CDS fills the $7.5 million shortfall:

$$
\$10\text{m}-\$2.5\text{m}
=
\$7.5\text{m}
$$

> [!NOTE]
> CDS default payoff: $\text{Notional}\times(1-\text{recovery})$; a lower CTD price means lower recovery and therefore a larger payoff.

**Reusable recognition pattern**

```text
Default occurs
      |
      v
Which bonds are eligible?
      |
      v
Keep only correct seniority
      |
      v
Choose lowest-priced eligible bond
      |
      v
CTD price = recovery rate
      |
      v
Payoff = Notional × (1 - Recovery)
```

**Rule:** **Eligibility first → cheapest bond second → recovery third → CDS payoff last.**

---

## Variant: Upfront Premium and Price of a CDS

> A 10-year CDS on Alpha, Inc. has a **fixed coupon of 5.0%**, while the current market CDS spread is **3.5%**. The CDS duration is **7**. Calculate the approximate **upfront premium** and the **price of the CDS**.

**What is the question asking?**

A CDS has two different rates here:

* **CDS coupon = 5.0%** → the contractual annual premium the protection buyer must pay.
* **CDS spread = 3.5%** → the premium the market currently thinks is fair for Alpha's credit risk.

But the buyer is contractually being asked to pay **5% when fair compensation is only 3.5%**.

So the CDS coupon is **too high**.

The protection buyer must therefore receive money **upfront** to compensate for these excessive future coupon payments.

> [!NOTE]
> Compare **market spread with fixed coupon**. If coupon > spread, the protection buyer receives an upfront payment.

**1. Measure how far the coupon is from the fair market spread**

$$
\text{CDS spread}-\text{CDS coupon}
=
3.5\%-5.0\%
=
-1.5\%
$$

The negative sign means the buyer's contractual coupon is **1.5 percentage points too high each year**.

**2. Why multiply by duration?**

The 1.5% difference occurs over many future premium payments.

**Duration = 7** approximately converts this annual spread difference into the present value of all those future differences.

Think of it as:

$$
\text{Annual pricing mismatch}
\times
\text{effective number of years}
$$

Therefore:

$$
\text{Upfront premium}
\approx
(\text{CDS spread}-\text{CDS coupon})
\times
\text{duration}
$$

Substitute:

$$
=(3.5\%-5.0\%)\times7
$$

$$
=(-1.5\%)\times7
=
\boxed{-10.5\%}
$$

> [!NOTE]
> The minus sign indicates **direction**: approximately 10.5% of notional is paid by the protection seller to the protection buyer.

For every $100 of CDS notional, the buyer therefore receives approximately:

$$
\$100\times10.5\%
=
\$10.50
$$

*Intuition:* You agree to pay $5 per year for protection that the market says should cost only $3.50. Because you are overpaying in the future, the seller gives you compensation today.

**3. Convert the upfront premium into a CDS price**

The pricing convention is:

$$
\text{CDS Price}
=
100-\text{Upfront Premium}
$$

Here the upfront premium is **negative**:

$$
\text{CDS Price}
=
100-(-10.5)
$$

$$
=
\boxed{110.50}
$$

So the CDS is quoted at:

$$
\boxed{\$110.50\text{ per }\$100\text{ notional}}
$$

> [!NOTE]
> Coupon > spread $\Rightarrow$ negative upfront premium $\Rightarrow$ price > 100.

**Reusable rule**

$$
\boxed{
\text{Upfront Premium \%}
\approx
(\text{CDS Spread}-\text{CDS Coupon})
\times\text{Duration}
}
$$

$$
\boxed{
\text{CDS Price}=100-\text{Upfront Premium \%}
}
$$

```text
Spread vs Coupon
      |
      +-- Spread > Coupon --> buyer pays upfront --> Price < 100
      |
      +-- Spread = Coupon --> no upfront       --> Price = 100
      |
      +-- Spread < Coupon --> buyer receives upfront --> Price > 100
```

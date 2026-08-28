## Variant: Converting Currencies Using Spot Rates

> A dealer quotes **EUR/GBP = 1.1750 - 1.1760**. Calculate: **(1)** EUR received from converting GBP 2,000,000. **(2)** GBP received from converting EUR 2,000,000.

First understand the quote. EUR/GBP means: *How many EUR are paid for 1 GBP?* Therefore, EUR is the numerator/top currency and GBP is the denominator/bottom currency. The quote is **1.1750 Bid - 1.1760 Ask**.

**Always think from the dealer's perspective.**

- Bid = dealer buys the denominator currency. **B for Bid, B for Buy.**
- Ask = dealer sells the denominator currency. **Dealer is ASKING a price from you.**
- Here GBP is the denominator. Therefore, **Bid 1.1750 = dealer buys GBP from you**, while **Ask 1.1760 = dealer sells GBP to you**.

**1. Convert GBP 2,000,000 -> EUR.** You have GBP and want EUR. You give GBP to the dealer, so the dealer is **buying GBP from you**. Dealer buys -> use the **Bid = 1.1750**.

$2,000,000 \times 1.1750 = \boxed{2,350,000\text{ EUR}}$

**What does "up the quote" mean?** Think of EUR/GBP as:

$$
\frac{EUR}{GBP}
$$

GBP is at the **bottom** of the quote and EUR is at the **top**. You start with GBP and want EUR:

$$
GBP \rightarrow EUR
$$

So you are moving **from the bottom to the top** of the quote. That is what *going up the quote* means.

Now forget the terminology for a moment. The bid tells you:

$$
1\text{ GBP} = 1.1750\text{ EUR}
$$

So think of it this way: *if every 1 GBP gives you 1.1750 EUR, then 2,000,000 GBP gives you 2,000,000 lots of 1.1750 EUR.* That is why you **multiply**.

$$
2,000,000\text{ GBP} \times \frac{1.1750\text{ EUR}}{1\text{ GBP}}
= 2,350,000\text{ EUR}
$$

Notice that **GBP cancels**, leaving EUR. This gives another foolproof rule: **when you go from the denominator to the numerator, multiply**.

**2. Convert EUR 2,000,000 -> GBP.** Now you have EUR and want GBP. You need the dealer to give you GBP, which means the dealer is **selling GBP to you**. Dealer sells -> use the **Ask = 1.1760**.

$$
\frac{2,000,000}{1.1760}
= \boxed{1,700,680.27\text{ GBP}}
$$

Here you are moving:

$$
EUR \rightarrow GBP
$$

EUR is at the **top** of the quote and GBP is at the **bottom**, so this is called *going down the quote*.

The ask tells you:

$$
1\text{ GBP} = 1.1760\text{ EUR}
$$

Think like you are in a supermarket. **One GBP costs 1.1760 EUR.** You walk into the shop with EUR 2,000,000 and ask: *If each GBP costs me 1.1760 EUR, how many GBP can I buy?*

Whenever you know **how much one unit costs** and want to know **how many units your money can buy**, you divide:

$$
\frac{2,000,000\text{ EUR}}
{1.1760\text{ EUR per GBP}}
= 1,700,680.27\text{ GBP}
$$

The EUR cancels and GBP remains.

**Foolproof rule:** denominator -> numerator = **go up the quote -> use Bid -> multiply**. Numerator -> denominator = **go down the quote -> use Ask -> divide**.

**Memory:** **B for Bid, B for Buy.** If the dealer buys the denominator currency from you, use Bid. If the dealer sells the denominator currency to you, use Ask.

---

## Variant: Triangular Arbitrage

> Interbank quotes: **USD/AUD = 0.6000 - 0.6015**, **USD/MXN = 0.0933 - 0.0935**. **(1)** Find the implied **MXN/AUD** cross rate. **(2)** A dealer quotes **MXN/AUD = 6.3000 - 6.3025**. Is arbitrage possible? Start with **USD 1,000,000**.

> [!NOTE]
> *Triangular arbitrage* means moving through **three currencies and returning to the starting currency**. If you return with more money than you started with, the difference is risk-free arbitrage profit.

```text
                         USD
                        /   \
          AUD -> USD   /     \   USD -> MXN
                      /       \
                    AUD <----- MXN
                       MXN -> AUD
```

**1. Find the implied MXN/AUD rate.** We want:

$$
\frac{MXN}{AUD}
$$

We already have $USD/AUD$, so we need $MXN/USD$ because:

$$
\frac{USD}{AUD}\times\frac{MXN}{USD}=\frac{MXN}{AUD}
$$

But we are given **USD/MXN**, so invert it. **When you invert a quote, Bid and Ask swap:**

$$
A/B=Bid-Ask \quad\Rightarrow\quad B/A=\frac1{Ask}-\frac1{Bid}
$$

Therefore:

$$
MXN/USD=\frac1{0.0935}-\frac1{0.0933}
=10.6952-10.7181
$$

Now multiply **Bid × Bid** and **Ask × Ask**:

$$
(MXN/AUD)_{Bid}=0.6000\times10.6952=6.4171
$$

$$
(MXN/AUD)_{Ask}=0.6015\times10.7181=6.4469
$$

So:

$$
\boxed{MXN/AUD=6.4171-6.4469}
$$

The dealer quotes **6.3000 - 6.3025**. Notice:

$$
6.3025<6.4171
$$

The dealer is **selling AUD for only 6.3025 MXN**, while the interbank market effectively buys that AUD for at least **6.4171 MXN**. Think supermarket: *buy cheaply from one shop, sell for more elsewhere.*

The profitable route is:

```text
USD
 |
 | divide by 0.0935
 v
MXN
 |
 | divide by 6.3025
 v
AUD
 |
 | multiply by 0.6000
 v
USD
```

**2. Execute the arbitrage.**

USD -> MXN: **down the quote -> Ask -> Divide.** One MXN costs $0.0935$ USD.

$$
\frac{1,000,000}{0.0935}=10,695,187.17\text{ MXN}
$$

MXN -> AUD: **down the quote -> Ask -> Divide.** One AUD costs $6.3025$ MXN.

$$
\frac{10,695,187.17}{6.3025}=1,696,975.35\text{ AUD}
$$

AUD -> USD: **up the quote -> Bid -> Multiply.** One AUD gives $0.6000$ USD.

$$
1,696,975.35\times0.6000=1,018,185.21\text{ USD}
$$

Therefore:

$$
\boxed{\text{Profit}=1,018,185.21-1,000,000=18,185.21\text{ USD}}
$$

**Foolproof rules:** **Down = Ask = Divide. Up = Bid = Multiply.** For cross rates, treat currency pairs like fractions and make the unwanted currency cancel. If **dealer Ask < implied Bid**, buy from the dealer and sell through the market.

---
## Variant: Converting Forward Points into an All-In Forward Rate

> Given **AUD/CAD spot = 1.0511/1.0519** and **30-day forward points = +3.9/+4.1**, calculate the **30-day forward bid and ask rates**.

First understand what is being quoted. **AUD/CAD = 1.0511/1.0519** means the current *spot* bid and ask rates. Spot means exchanging the currencies essentially **today**. A *30-day forward* means agreeing today on the exchange rate that will apply **30 days from now**.

The numbers **+3.9/+4.1 are not exchange rates themselves**. They are called **forward points**: tiny adjustments that we add to or subtract from today's spot rate to obtain the future exchange rate.

**The crucial trick is converting forward points into decimal form.** This is critical: lock it into memory that 1 point equals 1/10,000 of a unit. FX rates here are quoted to four decimal places, so one point is:

$$
1\text{ point}=0.0001=\frac{1}{10,000}
$$

Therefore:

$$
3.9\text{ points}=\frac{3.9}{10,000}=0.00039
$$

and:

$$
4.1\text{ points}=\frac{4.1}{10,000}=0.00041
$$

Think of the points as a *small adjustment sticker* attached to the spot rate. We are not adding **3.9** to 1.0511; we are adding only **0.00039**.

**How do we know whether to add or subtract?** Look at the sign of the forward points.

- **Positive points (+) -> add them to spot**
- **Negative points (-) -> subtract them from spot**

Here both points are positive, so we **add** them.

For the **bid**, always keep the bid side together: *spot bid + forward bid points*.

$$
1.0511+\frac{3.9}{10,000}
=1.0511+0.00039
=\boxed{1.05149}
$$

For the **ask**, keep the ask side together: *spot ask + forward ask points*.

$$
1.0519+\frac{4.1}{10,000}
=1.0519+0.00041
=\boxed{1.05231}
$$

Therefore, the **30-day all-in forward quote** is:

$$
\boxed{AUD/CAD=1.05149/1.05231}
$$

**What does "all-in forward rate" mean?** It simply means the *actual exchange rate you would contract at*, after combining the spot rate with the forward-point adjustment:

$$
\text{Forward Rate}=\text{Spot Rate}\pm\text{Forward Points}
$$

**Why are the points positive?** The forward AUD/CAD rate is higher than the spot rate. Under the quotation convention used here, this means **CAD, the denominator/base currency, is trading at a forward premium**. A forward premium means the base currency is expected to appreciate, so one CAD would cost more AUD in the future.

**Foolproof rule:** first convert points by dividing by **10,000**. Then **positive -> add, negative -> subtract**. Never mix sides: **Bid with Bid, Ask with Ask**.

---

## Variant: Valuing a Forward Contract Prior to Maturity

> Yew Mun Yip entered a **90-day forward contract long CAD 1,000,000 against AUD** at **1.05358 AUD/CAD**. Thirty days later, **60 days remain**. Current AUD/CAD spot is **1.0612/1.0614**, 60-day forward points are **+8.6/+9.0**, and the 60-day AUD interest rate is **1.16%**. What is the contract's mark-to-market value in AUD?

First understand what *mark-to-market* means. Yip already has an old contract at **1.05358 AUD/CAD**. We ask: *If Yip wanted to get rid of this contract today, how much is it worth?* The trick is to create a **new opposite forward contract** that cancels the old one, then compare the two rates.

Yip is **long CAD 1 million**. *Long CAD* means that at maturity Yip must **receive CAD 1 million and pay AUD**. To cancel this position, Yip needs the exact opposite trade:

**Old contract:** AUD -> CAD
**Offsetting contract:** CAD -> AUD

There are **60 days remaining**, so we need today's **60-day forward rate**, not the 30-day or 90-day rate.

The 60-day forward points are **+8.6/+9.0**. Positive points are added to spot, and one point is $1/10,000$.

Which side should we use? Yip wants to **sell CAD and receive AUD**. In AUD/CAD, CAD is the denominator currency. Yip gives CAD to the dealer, so the dealer is **buying CAD**.

**Dealer buys -> Bid. B for Bid, B for Buy.**

Therefore use the **spot bid 1.0612** and the **forward bid points +8.6**:

$$
F_{Bid}
=
1.0612+\frac{8.6}{10,000}
=
\boxed{1.06206}
$$

So Yip's old contract buys CAD at:

$$
1.05358\text{ AUD per CAD}
$$

while today Yip can offset it by selling CAD at:

$$
1.06206\text{ AUD per CAD}
$$

Think of CAD as an item. Yip already has the right to **buy the item for 1.05358 AUD** and can simultaneously arrange to **sell the same item for 1.06206 AUD**. The difference is profit per CAD:

$$
1.06206-1.05358
=
0.00848\text{ AUD/CAD}
$$

For CAD 1,000,000:

$$
0.00848\times1,000,000
=
8,480\text{ AUD}
$$

But there is one important issue: **AUD 8,480 is received 60 days from now, not today.** Mark-to-market asks for the value **today**, so we must discount this future AUD amount back 60 days.

Because the cash flow is measured in **AUD**, use the **AUD interest rate**. This is the foolproof rule: **discount using the interest rate of the currency in which the value is being measured.**

Using the 60-day AUD rate of 1.16%:

$$
V_t
=
\frac{8,480}
{1+0.0116\left(\frac{60}{360}\right)}
$$

$$
=
\boxed{8,463.64\text{ AUD}}
$$

Therefore, Yip's forward contract has a **positive mark-to-market value of AUD 8,463.64**.

The intuition is simple: Yip locked in buying CAD for **1.05358 AUD**, but CAD can now be sold forward for **1.06206 AUD**. CAD has become more valuable relative to AUD, which benefits someone who is **long CAD**.

**Foolproof workflow:** determine what the old contract makes you buy or sell -> create the opposite trade -> use the forward maturity matching the **remaining life** -> choose Bid/Ask from the dealer's perspective -> calculate the difference between the new and old forward rates -> multiply by contract size -> discount using the interest rate of the **valuation currency**.

---
## Variant: Covered Interest Arbitrage

> The U.S. dollar money-market rate is **8%**, the euro money-market rate is **6%**, the spot exchange rate is **USD/EUR = 1.30**, and the 1-year forward rate is **USD/EUR = 1.35**. Determine whether a covered interest arbitrage opportunity exists and calculate the profit.

*Covered interest arbitrage* means **borrow in one currency -> convert it into another currency -> invest there -> simultaneously lock the future exchange rate using a forward contract**. The word **covered** means the future exchange rate is already locked, so we are not gambling on where EUR/USD will be one year later.

First ask: **what should the 1-year forward rate be if markets are fairly priced?** Covered interest parity gives:

$$
F=S\left(\frac{1+r_{USD}}{1+r_{EUR}}\right)
$$

Why this formula? **USD/EUR tells us how many dollars one euro costs.** Dollars earn **8%**, while euros earn only **6%**. Because dollars grow faster than euros, one euro must cost *more dollars in the forward market* to prevent free money. The bracketed factor is pretty intuitive: you grow one unit of currency at their rates, and the ratio shows what the base currency would cost in foreign currency.

Substitute:

$$
F=1.30\left(\frac{1.08}{1.06}\right)
=\boxed{1.3245\text{ USD/EUR}}
$$

But the actual market forward rate is:

$$
1.35>1.3245
$$

So the euro is **too expensive in the forward market**. For any arbitrage, commit this to memory: **sell the expensive asset and buy the cheap one**. Think like a trader: *if something is overpriced in the future, I want to arrange today to sell it at that overpriced future price.*

Therefore we want to **acquire euros today and sell those euros forward at 1.35**.

The arbitrage path is:

```text
Borrow USD
    |
    v
Buy EUR today
    |
    v
Invest EUR for 1 year
    |
    v
Sell future EUR at 1.35
    |
    v
Receive USD -> repay USD loan -> keep profit
```

**Step 1: Borrow USD 1,000 at 8%.** After one year we must repay:

$$
1,000(1.08)=1,080\text{ USD}
$$

**Step 2: Convert USD 1,000 into EUR at spot = 1.30 USD/EUR.** The quote means **1 EUR costs USD 1.30**. If each euro costs $1.30, how many euros can $1,000 buy? **Divide.**

$$
\frac{1,000\text{ USD}}{1.30\text{ USD/EUR}}
=
769.23\text{ EUR}
$$

**Step 3: Invest the EUR 769.23 at 6%.** After one year:

$$
769.23(1.06)
=
815.38\text{ EUR}
$$

**Step 4: Lock in selling those future euros at the overpriced forward rate of 1.35 USD/EUR.** We already know our euro investment will become EUR 815.38, so today we enter a forward contract to sell exactly that amount in one year.

$$
815.38\text{ EUR}\times1.35\text{ USD/EUR}
=
1,100.76\text{ USD}
$$

Notice what the forward contract did: we already know **today** that our EUR 815.38 will become USD 1,100.76 in one year. The exchange-rate risk has disappeared. That is why the arbitrage is *covered*.

After one year, we receive **USD 1,100.76** from the forward contract but owe **USD 1,080** on our original loan.

$$
\text{Profit}
=
1,100.76-1,080
=
\boxed{20.76\text{ USD}}
$$

So **yes, covered interest arbitrage exists**, producing approximately **USD 20.76 per USD 1,000 borrowed**.

**Foolproof rule:** first calculate the forward rate implied by interest-rate parity. If **market forward > parity forward**, the denominator currency here **EUR is overpriced forward -> buy EUR spot, invest EUR, and sell EUR forward**. If **market forward < parity forward**, reverse every transaction.

---

## Variant: Forecasting Spot Rates with Uncovered Interest Rate Parity

> The current exchange rate is **ZAR/EUR = 8.385**. The 1-year interest rate is **10% in the eurozone** and **8% in South Africa**. Using uncovered interest rate parity, estimate the expected percentage change in the exchange rate over the next year.

First understand the quote. **ZAR/EUR = 8.385** means:

1 EUR=8.385 ZAR1\text{ EUR}=8.385\text{ ZAR}

So **EUR is the denominator/base currency**. If ZAR/EUR **falls**, fewer rand are needed to buy one euro, meaning the **euro has depreciated relative to the rand**.

Now understand _uncovered interest rate parity (UIP)_. UIP says that, in expectation, **the currency with the higher interest rate should depreciate relative to the currency with the lower interest rate**.

Why? Suppose two countries offered different interest rates but their currencies were expected to remain unchanged. Everyone would simply invest in the country paying the higher rate. UIP says the expected currency movement offsets that interest-rate advantage.

Here:

- Euro interest rate = **10%**
    
- Rand interest rate = **8%**
    

The euro offers the **higher interest rate by 2%**. Therefore, UIP predicts that the **euro should depreciate by approximately 2% relative to the rand**.

For a quote written as **ZAR/EUR**, a useful approximation is:

%ΔS≈rZAR−rEUR\%\Delta S \approx r_{ZAR}-r_{EUR}

Therefore:

%ΔS≈8%−10%=−2%\%\Delta S\approx8\%-10\%=\boxed{-2\%}

**What does the negative sign mean?** It means the quoted number **ZAR/EUR is expected to fall by 2%**. Since the quote tells us how many rand one euro buys, a falling quote means **one euro buys fewer rand -> the euro depreciates and the rand appreciates**.

The expected exchange rate is therefore approximately:

8.385(1−0.02)=8.2173 ZAR/EUR8.385(1-0.02)=\boxed{8.2173\text{ ZAR/EUR}}

Think of it very simply: today **EUR 1 buys ZAR 8.385**. UIP predicts that one year later, **EUR 1 will buy only about ZAR 8.217**.

**Foolproof intuition:** **higher interest rate -> expected currency depreciation. Lower interest rate -> expected currency appreciation.** Here **EUR pays 10% versus ZAR's 8% -> EUR is expected to depreciate by about 2% -> ZAR/EUR falls by about 2%.**

_Important:_ this is an **expectation**, not an arbitrage guarantee. It is called **uncovered** because unlike covered interest parity, there is **no forward contract locking the future exchange rate**.

---

## Variant: Forecasting Spot Rates with Uncovered Interest Rate Parity

> The current exchange rate is **ZAR/EUR = 8.385**. The 1-year interest rate is **10% in the eurozone** and **8% in South Africa**. Using uncovered interest rate parity, estimate the expected percentage change in the exchange rate over the next year.

First understand the quote. **ZAR/EUR = 8.385** means:

$$
1\text{ EUR}=8.385\text{ ZAR}
$$

So **EUR is the denominator/base currency**. If ZAR/EUR **falls**, fewer rand are needed to buy one euro, meaning the **euro has depreciated relative to the rand**.

Now understand *uncovered interest rate parity (UIP)*. UIP says that, in expectation, **the currency with the higher interest rate should depreciate relative to the currency with the lower interest rate**.

Why? Suppose two countries offered different interest rates but their currencies were expected to remain unchanged. Everyone would simply invest in the country paying the higher rate. UIP says the expected currency movement offsets that interest-rate advantage.

Here:

* Euro interest rate = **10%**
* Rand interest rate = **8%**

The euro offers the **higher interest rate by 2%**. Therefore, UIP predicts that the **euro should depreciate by approximately 2% relative to the rand**.

For a quote written as **ZAR/EUR**, a useful approximation is:

$$
\%\Delta S \approx r_{ZAR}-r_{EUR}
$$

Therefore:

$$
\%\Delta S\approx8\%-10\%=\boxed{-2\%}
$$

**What does the negative sign mean?** It means the quoted number **ZAR/EUR is expected to fall by 2%**. Since the quote tells us how many rand one euro buys, a falling quote means **one euro buys fewer rand -> the euro depreciates and the rand appreciates**.

The expected exchange rate is therefore approximately:

$$
8.385(1-0.02)=\boxed{8.2173\text{ ZAR/EUR}}
$$

Think of it very simply: today **EUR 1 buys ZAR 8.385**. UIP predicts that one year later, **EUR 1 will buy only about ZAR 8.217**.

**Foolproof intuition:** **higher interest rate -> expected currency depreciation. Lower interest rate -> expected currency appreciation.** Here **EUR pays 10% versus ZAR's 8% -> EUR is expected to depreciate by about 2% -> ZAR/EUR falls by about 2%.**

*Important:* this is an **expectation**, not an arbitrage guarantee. It is called **uncovered** because unlike covered interest parity, there is **no forward contract locking the future exchange rate**.

---

## Variant: Forecasting Exchange Rates with Ex-Ante PPP

> The current spot rate is **USD/AUD = 1.00**. Expected annual inflation is **5% in Australia** and **2% in the United States**. According to ex-ante purchasing power parity (PPP), estimate the expected percentage change in the spot rate and the expected exchange rate one year from now.

First understand the quote. **USD/AUD = 1.00** means:

$$
1\text{ AUD}=1.00\text{ USD}
$$

AUD is the **denominator/base currency**. If USD/AUD falls, one AUD buys fewer USD, meaning **AUD has depreciated relative to USD**.

**What is ex-ante PPP?** *Ex-ante* simply means **based on expected future inflation**. PPP says that the currency of the country with **higher inflation should depreciate** relative to the currency of the country with lower inflation.

Why? Suppose Australian prices rise **5%**, while U.S. prices rise only **2%**. Australian goods are becoming expensive faster. For similar goods to remain competitively priced internationally, the **AUD must weaken** to offset some of that extra inflation.

Here:

- Australian inflation = **5%**
- U.S. inflation = **2%**

Australia has **3% more inflation**, so AUD is expected to depreciate by approximately **3% relative to USD**.

For a quote written as **USD/AUD**, the approximate PPP rule is:

$$
\%\Delta S\approx\pi_{USD}-\pi_{AUD}
$$

Therefore:

$$
\%\Delta S\approx2\%-5\%=\boxed{-3\%}
$$

**What does the negative sign mean?** It means **USD/AUD is expected to fall by 3%**. Since USD/AUD tells us how many dollars one AUD buys, a falling quote means **one AUD buys fewer dollars -> AUD depreciates**.

Starting from 1.00:

$$
S_1\approx1.00(1-0.03)=\boxed{0.97\text{ USD/AUD}}
$$

So today:

$$
1\text{ AUD}=1.00\text{ USD}
$$

but PPP predicts that in one year:

$$
1\text{ AUD}\approx0.97\text{ USD}
$$

**Why exactly 3%?** Think of the inflation gap:

$$
5\%-2\%=3\%
$$

Australian prices are rising about **3 percentage points faster**, so AUD needs to lose roughly **3% of its value** relative to USD to compensate.

The exact PPP calculation is:

$$
S_1
=
S_0\left(\frac{1+\pi_{USD}}{1+\pi_{AUD}}\right)
$$

$$
=
1.00\left(\frac{1.02}{1.05}\right)
=
\boxed{0.9714\text{ USD/AUD}}
$$

So **0.97 is the standard approximation**, while **0.9714 is the exact PPP-implied rate**.

**Foolproof intuition:** **higher inflation -> currency depreciates; lower inflation -> currency appreciates.** Then look carefully at how the exchange rate is quoted. Here **AUD has higher inflation -> AUD depreciates -> one AUD buys fewer USD -> USD/AUD falls.**


---

## Variant: Carry Trade

> U.K. interest rate = **3%**, U.S. interest rate = **1%**, and **USD/GBP = 1.50 today and 1.50 one year later**. Compute the return to an investor who **borrows in the United States and invests in the United Kingdom**.

A *carry trade* means **borrow where interest rates are low and invest where interest rates are high**. Remember the golden rule of arbitrage: buy cheap - meaning buy a bond where interest rates are low - and sell high, meaning sell a bond where interest rates are high. Here, borrowing USD costs only **1%**, while investing in GBP earns **3%**.

The basic idea is:

$$
\text{Carry return}
=
\text{investment return}
-
\text{borrowing cost}
+
\text{currency return}
$$

Why is there a currency return? Because you borrow **USD**, convert it into **GBP**, invest the GBP, and eventually convert everything back into **USD**. If GBP rises or falls during the year, that affects your final USD profit.

Remember, you have to eat in USD, so the only future exchange rate that matters is USD to GBP. If the dollar gets expensive, you're in trouble.

Here the exchange rate stays unchanged:

$$
USD/GBP: 1.50 \rightarrow 1.50
$$

So there is **0% currency gain or loss**.

Therefore:

$$
\text{Return}
=
3\%-1\%+0\%
=
\boxed{2\%}
$$

To make this foolproof, imagine actually borrowing **USD 1,500**.

At today's exchange rate:

$$
1\text{ GBP}=1.50\text{ USD}
$$

So USD 1,500 buys:

$$
\frac{1,500}{1.50}=1,000\text{ GBP}
$$

Invest GBP 1,000 in the U.K. at 3%:

$$
1,000(1.03)=1,030\text{ GBP}
$$

One year later, the exchange rate is still 1.50 USD/GBP, so convert back:

$$
1,030\times1.50=1,545\text{ USD}
$$

Meanwhile, the USD 1,500 loan has grown at 1%:

$$
1,500(1.01)=1,515\text{ USD}
$$

So the profit is:

$$
1,545-1,515=30\text{ USD}
$$

Relative to the original USD 1,500:

$$
\frac{30}{1,500}=2\%
$$

**The real risk in a carry trade is the exchange rate.** The 2% interest-rate advantage is profitable only because GBP did **not depreciate** against USD. If GBP weakened enough (USD becomes expensive), the currency loss could erase the entire interest-rate gain.

**Foolproof intuition:** **borrow the low-yield currency -> convert -> invest in the high-yield currency -> convert back -> repay the loan.** If the exchange rate does not move, your approximate return is simply the **interest-rate difference: $3%-1%=2%$**.

---

## Variant: Carry Trade with an Exchange-Rate Change

> U.K. interest rate = **3%**, U.S. interest rate = **1%**, and **USD/GBP moves from 1.50 today to 1.44 one year later**. Compute the return to an investor who **borrows in the United States and invests in the United Kingdom**.

> [!note] KEY CONCEPTS
> - A carry trade earns the foreign interest rate but pays the domestic borrowing rate.
> - The investor also gains or loses from the currency movement. For **USD/GBP**, a fall means GBP depreciates against USD.
> - Exact return: $(1+r_{GBP})\left(\frac{S_1}{S_0}\right)-(1+r_{USD})$.
> - Approximate return: **interest-rate advantage + percentage change in the investment currency**.
> - Always calculate the final payoff in the currency in which the loan must be repaid.

The investor borrows **USD 1,500**. At today's rate of **1.50 USD/GBP**, this buys:

$$
\frac{1,500}{1.50}=1,000\text{ GBP}
$$

Invest GBP 1,000 in the United Kingdom at 3%:

$$
1,000(1.03)=1,030\text{ GBP}
$$

After one year, GBP has weakened to **1.44 USD/GBP**. Convert the investment back into USD:

$$
1,030\times1.44=1,483.20\text{ USD}
$$

The USD loan grows at 1%, so the repayment is:

$$
1,500(1.01)=1,515\text{ USD}
$$

The investor therefore loses:

$$
1,483.20-1,515=-31.80\text{ USD}
$$

Relative to the USD 1,500 borrowed, the exact return is:

$$
\frac{-31.80}{1,500}=\boxed{-2.12\%}
$$

The same result follows directly from the exact return formula:

$$
(1.03)\left(\frac{1.44}{1.50}\right)-1.01
=0.9888-1.01
=\boxed{-2.12\%}
$$

The quick approximation is:

$$
3\%-1\%+\left(\frac{1.44}{1.50}-1\right)
=2\%-4\%
=\boxed{-2\%}
$$

The **2% interest-rate advantage** is more than erased by the **4% depreciation of GBP**. The exact loss is slightly larger because the exchange-rate movement also affects the interest earned on the GBP investment.

**Foolproof intuition:** a high foreign interest rate does not guarantee a profitable carry trade. Compare the interest-rate advantage with the movement in the currency you invested in; if that currency depreciates by more than the interest advantage, the trade loses money.

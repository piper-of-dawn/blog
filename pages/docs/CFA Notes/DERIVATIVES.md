```table-of-contents
```
### MODULE 70.1: PRICING AND VALUATION OF FORWARD CONTRACTS AND FOR AN UNDERLYING WITH VARYING MATURITIES

> [!abstract] MEMORISE
> - At inception, a fairly priced forward has value **0**. The **price** is locked, but the **value** later moves.
> - Long forward value before maturity:
>   $$V_t(T)=S_t-F_0(T)(1+r)^{-(T-t)}$$
> - Short forward value is just the mirror image:
>   $$V_t(T)=F_0(T)(1+r)^{-(T-t)}-S_t$$
> - At maturity, discounting disappears:
>   $$V_T(T)=S_T-F_0(T)$$
> - Implied forward rates are breakeven reinvestment rates linking short and long zero rates.
> - An FRA is just a forward on an interest rate. Long FRA = pay fixed, receive floating.

1. Start with the cleanest distinction in the whole reading: ==**price is what you agreed then; value is what the contract is worth now**.== At trade date, a fair forward is born at zero value. Nobody pays upfront. But once spot prices move, time passes, or rates shift, that zero-value contract starts behaving like an asset for one side and a liability for the other.
2. For a **long forward** on an asset with no income and no carry costs, the logic is brutally simple:
   - compare the current spot price today, $S_t$
   - with the present value of the old agreed forward price, $F_0(T)$
   If spot is higher than the discounted strike, the long is gaining money.

> [!tip] FEEL THE FORMULA
> $$V_t(T)=S_t-\text{PV of old forward price}$$
> The long asks: "If I had to settle this thing right now, am I buying cheap or expensive?"
> Cheap locked price versus rich current spot = gain.

3. At maturity, the contract stops being abstract and turns into raw settlement:
   - Long forward:
     $$V_T(T)=S_T-F_0(T)$$
   - Short forward:
     $$V_T(T)=F_0(T)-S_T$$
   If spot explodes above the agreed price, the long wins. If spot crashes below the agreed price, the short wins.

> [!info] Example
> A biotech share was locked forward at **INR 300.84**.
> If it ends at **INR 312**, the long makes **INR 11.16**.
> If it ends at **INR 287**, the short makes **INR 13.84**.
> Same contract. Same strike. Just different ending scene.

4. During the life of the contract, **rates matter too**. Why? Because the old forward price is a cash amount you will pay or receive **later**, not today. And money due later is never treated at full face value today, because you could invest money between now and then. So we discount that future amount back to today. If the risk-free rate rises, future cash gets discounted more aggressively, which means the present value of that old forward price falls.

> [!info] Example
> Suppose a forward says you must pay **USD 100** in one year.
> If rates are **5%**, that future **USD 100** is worth about **USD 95.24** today.
> If rates jump to **10%**, the same future **USD 100** is worth only **USD 90.91** today.
> Same contract. Same **USD 100**. Higher discount rate just shrinks its value today.

5. That means:
   - for the **long**, a higher discount rate can help because the present value of what it owes falls
   - for the **short**, a higher discount rate can hurt for the exact same reason
   This is one of those sneaky exam points where spot stays unchanged but value still moves.

> [!warning] HOW THIS THING WORKS?
> In a plain forward, the long does **not** usually pay the full forward price today.
> The long agrees **today** on a price, but the actual cash payment happens **at maturity**.
> So when rates rise, the present value of that future payment falls, which helps the long.
> If you had to pay today, that would be buying the asset now, not entering a forward.

> [!info] Example
> Imagine you are short a stock forward at a fixed future sale price.
> The stock drops, so that helps you.
> But if rates suddenly jump too, the discounted value of the locked sale price drops.
> Your gain can shrink even though spot moved your way. 

6. If the underlying throws off **benefits** like income, or has **costs** of carry, then tweak the spot side before comparing it to the discounted forward price:
   $$V_t(T)=\big(S_t-\text{PV(benefits)}+\text{PV(costs)}\big)-F_0(T)(1+r)^{-(T-t)}$$
   Benefits reduce forward value to the long. Costs increase it. Same old intuition: what matters is the economic value of carrying the asset from now to maturity.
7
> [!tip] HAMMER THIS INTO YOUR HEAD
> The **price** of a forward is just:
> **the cost/benefit of carrying the asset to maturity if you bought it today** or **simply you are paying the short guy to carry the asset to maturity**. The guy asks you to compensate for costs (cost of carry increase forward price) and discounts you for benefits he will get (benefits of carry reduce the forward price).
> Once you internalise this statement, you wouldn't need to memorise anything. This is the whole backbone of forward pricing. 
> Apply this logic to discount rates, imagine you are short, if rates rise, the opportunity cost of carrying the asset increases (you'd better sell the asset and loan the cash to someone), hence, you would want to be compensated with a higher price (vice versa).

7. FX forwards are kind of same, but now the asset you are "carrying" is one currency and you are funding that position with another currency. That is why **two** interest rates show up. If you want to lock in buying one currency in the future, you can think of it as:
   - hold the currency you want
   - fund that by borrowing the other currency
   So one rate helps you and the other rate hurts you. The forward price is driven by that tug-of-war:
   $$F_0(T)=S_0e^{(r_f-r_d)T}$$
   where the price currency's rate and the base currency's rate are competing.

9. The intuition is clean:
   - if the **foreign/price currency** has the higher interest rate, it tends to trade at a **forward discount**
   - if the **domestic/base currency** has the higher interest rate, the foreign currency tends to trade at a **forward premium**
   It is just no-arbitrage. If one currency earns more in money-market terms, the forward rate has to adjust so people cannot print free money by borrowing one currency, investing in the other, and locking the exchange rate.

> [!tip] HAMMER THIS INTO YOUR HEAD
> An FX forward is just a carry trade put into a formula.
> You borrow one currency, invest in the other, and lock the future exchange rate.
> The currency with the **higher** interest rate must look **weaker** on the forward.
> Otherwise arbitrageurs would feast on it.

10. The value later is still the same forward logic as before:   $$V_t(T)=S_t-F_0(T)e^{-(r_f-r_d)(T-t)}$$So even if spot has not moved, the contract value can move because the **rate gap** moved. Change the carry, and you change the value of the old locked FX rate.

> [!info] Example
> Think about the Japanese yen for years when Japanese rates were near zero while US rates were much higher.
> Borrowing yen was cheap. Holding dollars earned more carry.
> So the yen tended to trade at a forward premium against the dollar, or flip it around: the dollar tended to trade strong in carry terms against the yen.


11. Now the term-structure part. Interest rates are annoying because there is no single "the rate." A 1-year rate, 2-year rate, and 3-year rate can all be different. So before you can price forwards on rates, you need **zero rates** and **discount factors**.

12. A **zero rate** is the rate for one single cash flow at one future date. A **discount factor** is just the present value of **1** unit received later:
   $$DF_i=\frac{1}{(1+z_i)^i}$$
   The one-period bond is special: its yield-to-maturity equals its zero rate.

> [!abstract] MEMORISE
> - One cash flow only? **YTM = zero rate**.
> - Discount factor = price today of **1** unit paid later.
> - Bootstrapping means: strip coupon bonds into implied zero rates one maturity at a time.

13. Once you have zero rates, you can extract the **implied forward rate**. This is the breakeven future reinvestment rate that makes two strategies give the same final money:
   - invest short, then roll over later
   - invest long right now and hold

14. The master relationship is:
   $$(1+z_A)^A(1+\text{IFR}_{A,B-A})^{B-A}=(1+z_B)^B$$
   Read it like this: "Go from today to time **B** either in one jump, or in two linked jumps. No-arbitrage says both paths must end at the same pile of money."

> [!question] Implied Forward Rate
> Suppose **z2 = 2%** and **z3 = 3%**. What is the implied 1-year forward rate starting two years from now?
>
> $$F(2,1)=\frac{(1.03)^3}{(1.02)^2}-1\approx 5.03\%$$
>
> The hidden future 1-year rate is much higher than both spot rates because it has to bridge the gap between the 2-year and 3-year compounding paths.

15. Forward-rate notation is pure decoding:
   - **2y3y** = a **3-year rate starting 2 years from now**
   - **F3m,6m** = a **6-month rate starting 3 months from now**
   First number tells you **when it starts**. Second tells you **how long it lasts**.

> [!warning] EXAM TRAP
> **2y3y** does **not** mean "the 2-year rate observed 3 years from now."
> It means a rate that starts in year 2 and then runs for 3 years.
> First number = forward start.
> Second number = tenor.

13. Sometimes the cash-market rates use different compounding frequencies, so you must align them before solving for the forward rate. If one rate is quoted with semiannual compounding and the other with quarterly compounding, convert them to the same periodicity first. Otherwise the algebra looks clean but the answer is junk.

14. Now the practical instrument: **Forward Rate Agreement (FRA)**. This is a forward on a future borrowing/lending rate for a notional principal. No actual principal changes hands. Only the interest difference is settled.

15. The easiest way to remember FRA sides:
   - **Long FRA / fixed-rate payer**: pay fixed, receive floating
   - **Short FRA / fixed-rate receiver**: receive fixed, pay floating
   So if you fear rates will rise and you want protection, you go **long FRA**. Why? Because receiving floating becomes valuable when the actual market rate jumps.

> [!info] Example
> Picture a bank treasury desk one week before a central-bank meeting.
> It knows it must refinance soon and is terrified rates will rip higher overnight.
> A long FRA is basically the desk saying:
> "Fine. Lock my future rate now before the market goes feral."

16. The FRA fixed rate is the **implied forward rate**. That is the no-arbitrage rate that makes the contract worth zero at inception. So when you see an FRA question, step one is often: back out the forward rate from the term structure.

17. At the end of the FRA reference period, the undiscounted net payment from the long FRA perspective is:
   $$\text{Net payment}=(R-K)\times \text{Notional}\times \tau$$
   where:
   - `R` = realized market reference rate
   - `K` = FRA fixed rate
   - `\tau` = year fraction of the underlying interest period

18. But FRAs usually settle **at the beginning** of that interest period, not at the end. So discount that net payment back using the realized floating rate:
   $$\text{Cash settlement}=\frac{(R-K)\times \text{Notional}\times \tau}{1+R\tau}$$

> [!tip] HAMMER THIS
> First find **τ**.
> Then compute **(R − K) × Notional × τ**.
> Then discount by **1 + Rτ**.
> If **R > K**, the long FRA receives cash.

19. Quick intuition on signs:
   - `R > K` means floating beat fixed, so long FRA wins
   - `R < K` means fixed was too high, so long FRA loses
   The short FRA is exactly the opposite.

> [!question] FRA Settlement
> A **3m x 6m** FRA has notional **USD 1,000,000**. The fixed FRA rate is **1.20%**. At settlement, the realized 6-month rate is **1.50%**. With **τ = 0.5**, what is the cash settlement to the long?
>
> $$\text{Settlement}=\frac{(0.015-0.012)(1{,}000{,}000)(0.5)}{1+0.015(0.5)}\approx USD\ 1{,}488.83$$
>
> Rates came in hotter than the locked fixed rate, so the long FRA gets paid.

20. Here is the deep link between spot rates, implied forward rates, and FRAs:
   - zero rates tell you how to discount future cash flows
   - implied forward rates tell you the no-arbitrage future rate between two maturities
   - FRAs turn that implied future rate into a tradeable hedge

> [!abstract] MEMORISE
> Spot curve tells you today's term structure.
> Forward curve tells you the rates implied by that term structure.
> FRA lets you lock one slice of that forward curve.
> Same machinery, different packaging.

21. If you want the shortest mental model possible, use this:
   - ordinary forward on stock: lock future **price**
   - FX forward: lock future **exchange rate**
   - FRA: lock future **interest rate**
   Same skeleton. Only the underlying changes.

### MODULE 71.1: FUTURES VALUATION

LOS 71.a: Compare the value and price of forward and futures contracts.  
LOS 71.b: Explain why forward and futures prices differ.

> [!ABSTRACT] MEMORISE
> - Price vs Value (Forwards): Forward price is fixed at initiation; contract value fluctuates with the underlying and can be non-zero before expiry.  
> - Price vs Value (Futures): Daily mark-to-market (MTM) sets contract value back to zero each day; futures price moves to the settlement price daily.  
> - Quoting IR Futures:  
>   $$\text{Futures price} = 100 - (100 \times \text{MRR}_{A,\,B-A})$$  
>   A 6-month rate of 3% implies a futures price of 97.  
> - Basis Point Value (BPV):  
>   $$\text{BPV} = \text{Notional} \times \tau \times 0.0001$$  
>   where $\tau$ is year fraction for the accrual period.  
> - Futures vs Forwards Prices: If interest rates are constant or uncorrelated with futures prices → same price. If positively correlated → futures more valuable (for a long). If negatively correlated → futures less valuable.  
> - Convexity Bias (IR): FRAs/forwards exhibit convexity; longer maturities can show material forward–futures price differences.

1. Unlike a forward that is settled at a future date in totality, the future price difference is settled every day by Exchange. The exchange marks the price of the contract against the current market price. This is known as Mark to market. For example, if I bought a bitcoin future for $100 and the price of bitcoin futures increase to $110. The next day the $10 would be credited to my variation margin account. **Daily variation margin cashflows settle the MTM P&L, so the futures contract is reset to ~0 each day.**

2. To understand all three kinds of margin, hammer the table below into your head:

|     |                              |                     |                         |                           |                                       |                       |                      |
| --- | ---------------------------- | ------------------- | ----------------------- | ------------------------- | ------------------------------------- | --------------------- | -------------------- |
| Day | Futures settlement price (F) | Initial margin (IM) | Maintenance margin (MM) | Variation margin (VM = F) | Margin balance (end of day, pre-call) | Margin call / Top-up  | Balance after top-up |
| 0   | 100                          | 15                  | 10                      | NA                        | 15                                    | 0                     | 15                   |
| 1   | 102                          | 15                  | 10                      | +2                        | 17                                    | 0                     | 17                   |
| 2   | 92                           | 15                  | 10                      | -10                       | 7                                     | +8 (to restore to IM) | 15                   |
| 3   | 91                           | 15                  | 10                      | -1                        | 14                                    | 0                     | 14                   |
| 4   | 96                           | 15                  | 10                      | +5                        | 19                                    | 0                     | 19                   |
| 5   | 94                           | 15                  | 10                      | -2                        | 17                                    | 0                     | 17                   |
3. Interest rate futures are quoted as a “price,” not a rate. They convert a market reference rate (MRR) into a price via:
				**Futures price=100−(100×MRR)**
	So higher rates ⇒ lower futures prices. 

> [!QUESTION] FUTURES PRICE
> Suppose an interest rate futures contract is for a **6-month rate starting 6 months from now**, and the quoted futures price is **97**.
> 
> ---
> 
> 100−(100×MRR) = 97, implies, MRR = 0.03

4. How much does my futures value change if my MRR moves by 1bp. That is BPV which is notional times time in years times 0.0001. $$\text{BPV} = \text{Notional} \times \tau \times 0.0001$$  
5. **==If interest rates are constant or uncorrelated with futures prices, the pricing is effectively the same.==**  
6. When interest rates are high, futures are more attractive than forwards because I receive cash daily, and hence futures are expensive than forwards. This makes interest rate and futures price positively correlated.
7. With negative correlation → futures are less attractive.

> [!tip] Quick checks
> - After each futures MTM, contract value → 0; price moves to settlement price.  
> - For a 6-month contract on $1,000,000,\ BPV = 1{,}000{,}000 \times 0.5 \times 0.0001 = 50.$  
> - A 1 bp move → $\pm$BPV in futures value; for forwards, discount the payoff at the realized rate for the same $\tau$.


> [!question] CONVEXITY ISSUE
> Consider a $1 million interest rate future on a 6-month MRR priced at 97.50 (an MRR of 2.5%) that settles six months from now. If the realised 6-month MRR at settlement is (i) 2.51% and (ii) 2.49%, compute the PV of the settlement at the beginning of the period. 
> 
> ---
> 
> BPV = 1 Million $\times$ 0.0001 $\times$ 0.5 = $50
> - If the MRR at settlement is 2.51%, the long receives 50/(1 + 0.0251/2) = $49.3803.
> - If the MRR at settlement is 2.49%, the long must pay 50/(1 + 0.0249/2) = $49.3852.
>   
>Rate decline harms long more than Rate rise of same amount benefits him.


> [!question] Price vs Value with Daily MTM (Gold futures)
> 
> Problem: A futures on 100 oz gold is initiated at $1870$/oz. Day 1 settlement price rises to $1880$/oz. What happens to price and value?  
> 
> ---
> 
> MTM Value = 10 $\times$ 100 = 1000. 
> Deposit $1000 in VM and reset Future contract price to 0 



> [!question] Forward vs Futures (convexity/discounting effect)
> Problem: Consider an otherwise equivalent 6-month FRA with notional $\$1{,}000{,}000$ struck at 2.50%. If the realized 6-month MRR at settlement is (i) 2.51% and (ii) 2.49%, compute the PV of the settlement at the beginning of the period. Compare to the $\pm$BPV from the futures.  
> Solution: For the FRA, per 1 bp: $\text{Nominal}\ \Delta = 50$. Discount at the realized rate over $\tau=0.5$.  
> (i) If realized is 2.51%:  
> $$\text{PV} = \frac{50}{1 + 0.0251/2} = 49.3803$$  
> (ii) If realized is 2.49%:  
> $$\text{PV} = \frac{50}{1 + 0.0249/2} = 49.3852$$  
> Explanation: The present value depends on the realized discount rate. Increases in the rate reduce the PV of gains slightly more than equal decreases increase it → convexity bias. By contrast, the futures marks $\pm 50$ without discounting nuance, causing potential forward–futures pricing differences for longer maturities.

> [!warning] Exam gotchas
> - Don’t PV the futures BPV change; PV at the realized rate applies to forward/FRA settlement.  
> - Positive correlation (rates with futures price) favors futures for longs; negative correlation favors forwards.  
> - Always convert quoted futures price to a rate correctly: rate = $(100 - \text{price})/100$.

### MODULE 72.1: SWAP VALUATION

> [!abstract] MEMORISE
> - A swap is just a **series of future exchanges**, not one single future exchange.
> - The **price** of a swap is the **fixed swap rate** that makes the swap worth **0** at inception.
> - The **value** of a swap later is the current settlement plus the PV of all remaining settlements.
> - **Pay fixed, receive floating** behaves like **short fixed-rate bond + long FRN**.
> - **Receive fixed, pay floating** behaves like **long fixed-rate bond + short FRN**.

1. Suppose you want to take a mortgage, but you hate interest-rate exposure. Every time rates jump, your payments can jump. So you find a guy willing to take that risk from you. You tell him: "I will pay you a fixed rate every period. You pay me the floating rate every period." Now your floating-rate loan plus the swap starts behaving much more like fixed-rate borrowing. That is the heart of a swap: **you are transferring a stream of interest-rate risk to someone else**.

2. How will the other guy price this swap? He will look at the floating payments he expects to make or receive in each future period, using today's forward curve as the market's best guess. Then he will ask: "What single fixed rate would make the total present value of my fixed cash flows exactly match the total present value of those expected floating cash flows?" That single break-even fixed rate is the swap rate. If he charges less than that, he gets underpaid. If he charges more, you are the one getting underpaid.
3. Suppose the swap notional is **USD 100,000** for one year, and you are **pay fixed, receive floating**. At inception, the fair fixed swap rate is **10%**, so the contract starts at value **0**. That means the market originally thought:
   - your fixed payment in one year would be about **USD 10,000**
   - the floating payment you receive in one year was also expected to be about **USD 10,000**
   So there was no free lunch for either side.

4. Now imagine rates suddenly jump and the new one-year floating rate becomes **20%**. What happens to actual cash settlement if that rate is what sets for the period?
   - you still **pay fixed = USD 10,000**
   - you now **receive floating = USD 20,000**
   - net swap settlement to you at the end of the year = **USD 10,000**
   That is the cash-flow side of the story: higher floating rates make life better for a **pay-fixed, receive-floating** position.

4. Now comes the MTM side. Now **Mr. Opportunist** walks up to you and says, "Hand me this swap." You laugh and say, "Why would I give it to you for free? This contract lets me pay only **10%** fixed while receiving floating linked to a market that is now at **20%**. That is gold." So **Mr. Opportunist** would have to pay you money to take that sweet contract away from you. **That payment is the positive MTM value of the swap.** MTM is just the cash value of how attractive your old contract has become relative to the new market.
5. Now flip the story by keeping **the same position** but making rates crash instead of jump. Suppose the new floating rate becomes **5%**:
   - you still **pay fixed = USD 10,000**
   - you now **receive floating = USD 5,000**
   - net settlement = **negative USD 5,000**
	You are stuck in a net negative contract now. So you walk to **Mr. Rescuer's** shop and say, "Please take this swap." He says, "Why should I? This contract is awful. I would be stuck paying **10%** fixed while receiving floating from a market now at only **5%**." So **you** would have to pay **him** to take that ugly swap away. **That is negative MTM or MTM loss**. Same position. Different rate move. Completely different outcome.

> [!abstract] WHAT IS MARK TO MARKET?
>
> Mark to market is just **catching up to market**. Your contract was struck in the past, but the market has moved on. So you are marking to the market. If **Mr. Opportunist** would pay you to take the swap, that catch-up creates **positive MTM**. If you must pay **Mr. Rescuer** to take it, that catch-up creates **negative MTM**.

> [!tip] HAMMER THIS INTO YOUR HEAD
> A swap is just **many forward-style settlements stitched together**.
> The floating leg changes every period.
> The fixed leg does **not**.
> The fixed swap rate is the single number that makes the whole package fair on day one.

7. That fixed swap rate is the **price** of the swap. It is often called the **par swap rate**. "Par" just means fair. It is the fixed rate that makes:
   $$\text{PV(Fixed leg)}=\text{PV(Floating leg)}$$
   so the swap starts with value **0** to both sides.

8. This is the exact same spirit as forward pricing. In a forward, you choose the forward price so nobody can lock in arbitrage on day one. In a swap, you choose the fixed swap rate so the present value of what each side gives and gets is equal on day one.

9. If you want the formula skeleton, it is:   $$\sum \text{PV(floating payments)}=\sum \text{PV(fixed payments)}$$
   The floating payments are built from implied forward rates. The fixed payments are just the same fixed swap rate repeated across periods and discounted back.

10. So the swap rate is really a **multi-period breakeven rate**. It is the one fixed rate that makes you indifferent between:
   - paying fixed and receiving the whole future floating path
   - receiving fixed and paying the whole future floating path

> [!info] Example
> Think of a company with a floating-rate loan just before a brutal hiking cycle.
> It does not want to keep guessing each quarter's rate.
> So it enters a **pay-fixed, receive-floating** swap and effectively freezes its borrowing cost.
> That is why treasurers love swaps more than juggling a pile of separate FRAs.

11. At each reset date, the current period's settlement from the **fixed-rate payer's** perspective is:
   $$\text{Settlement}=(\text{MRR}-s_N)\times \text{Notional}\times \text{Period}$$
   where **MRR** is the floating market reference rate that set for that period and **\(s_N\)** is the fixed swap rate locked at inception.

12. That sign tells the whole story:
   - if **MRR > fixed swap rate**, the fixed-rate payer wins on that period
   - if **MRR < fixed swap rate**, the fixed-rate payer loses on that period

13. But a swap's value is not just today's settlement. A swap still has a whole life ahead of it. So on any settlement date:
   $$\text{Swap value}=\text{current settlement value}+\text{PV of remaining future settlements}$$
   This is the part students often miss. A swap is alive until the final period dies.

> [!warning] DO NOT MISS THIS
> A swap is not repriced from scratch each period like a futures contract.
> After one settlement is done, the contract still contains the value of all the later settlements.
> So MTM value is always about the **rest of the movie**, not just the current scene.

14. Now the big valuation intuition. Suppose you are **pay fixed, receive floating**. Your fixed payments are locked. Your floating receipts depend on expected future rates. If expected forward rates rise after inception, the floating leg becomes richer while your fixed leg stays the same. That gives you an MTM gain.

15. So:
   - **higher expected forward rates** help the **fixed-rate payer**
   - **lower expected forward rates** help the **fixed-rate receiver**

16. This is exactly why swap positions line up with bond intuition:
   - **receive fixed, pay floating** behaves like being **long a fixed-rate bond**
   - **pay fixed, receive floating** behaves like being **short a fixed-rate bond**
   because the floating-rate note side tends to hug par, while the fixed leg is the duration-heavy piece that really moves when rates change.

> [!info] Example
> During the **2022 UK pension-fund crisis**, a lot of liability-driven investors were effectively loaded with **receive-fixed** swap exposure.
> When yields exploded higher, that fixed leg got smashed, just like a long-duration bond.
> The result was ugly: MTM losses, collateral calls, and forced asset sales.
> That drama makes one thing unforgettable: **receive fixed = bond-like duration exposure**.

17. Time alone can also change swap value, even if the whole forward curve stays exactly where it was. Why? Because as early low-rate settlements roll off and the remaining cash flows are farther along an upward-sloping forward curve, the economics of the leftover swap can change.

18. On an upward-sloping forward curve:
   - a **pay-fixed** swap can drift into a gain as earlier lower floating resets pass
   - a **receive-fixed** swap can drift into a loss for the mirror-image reason
   This is not because the fixed rate changed. It did not. It is because the composition of the remaining floating path changed.

19. Another useful lens is bond replication:
   - **pay fixed, receive floating** = long FRN + short fixed bond
   - **receive fixed, pay floating** = long fixed bond + short FRN
   Since FRNs stay near par when rates move, most of the swap MTM comes from the fixed-bond-like side.

> [!tip] MEMORY SHORTCUT
> If you know how a **fixed-rate bond** behaves when rates move, you already know half of swap valuation.
> Receive fixed -> think **long bond**.
> Pay fixed -> think **short bond**.
> The floating leg is the quieter side.

20. Practical use follows immediately:
   - a borrower with floating debt who wants certainty will often **pay fixed**
   - an investor who wants more duration without buying bonds may **receive fixed**
   - a manager who wants less duration may **pay fixed**

21. So when you see a swap question, ask these in order:
   - Who is fixed payer and who is fixed receiver?
   - Where is the current floating rate versus the fixed swap rate?
   - Where did expected future forward rates move after inception?
   - Which side now has the more valuable leg?

> [!abstract] MEMORISE
> Swap **price** = fixed swap rate that makes initial value **0**.
> Swap **value** later = current settlement + PV of all remaining settlements.
> Rising expected rates -> good for **pay fixed**.
> Falling expected rates -> good for **receive fixed**.

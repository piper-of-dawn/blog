## Module 1: Derivative Instrument and Derivative Market Features

1. Numerical: **Derivative settlement from contract size**
   Stem: A forward contract covers 1,000 shares at EUR30 per share. At settlement, the shares are worth EUR25. What cash settlement does the short forward receive?
   Solution: First find the price difference from the short side: fixed price minus market price = EUR30 - EUR25 = EUR5. Then scale it by the contract size: EUR5 x 1,000 = EUR5,000. The short receives EUR5,000 because the short sold at EUR30 when the market is only EUR25.
   Formula: Short payoff = $(F_0(T) - S_T) x contract size$.
   Memory: **Long likes price up; short likes price down.**
   Trap: Do not stop at per-share payoff when the contract gives a notional size.

2. Numerical: **ETD versus OTC margin logic**
   Stem: A derivative user wants exact 73-day exposure on a foreign currency payment. Which market is more likely to fit the exposure: OTC or exchange traded?
   Solution: The exact date is the giveaway. Exchange-traded derivatives are standardized, so the date and contract size may not match. OTC contracts can be customized to the exact maturity and notional. Use OTC when matching terms matters more than liquidity.
   Memory: **OTC fits the suit; exchange traded fits the rack.**
   Trap: Do not choose exchange traded just because it is safer; the question asks for exact exposure matching.

3. Numerical: **Central counterparty risk**
   Stem: A centrally cleared OTC contract removes direct counterparty credit risk between two users. What risk becomes more important to the market?
   Solution: The central counterparty steps between the two users and guarantees settlement. That reduces bilateral credit risk, but it concentrates risk in the central counterparty. The key remaining concern is whether the central counterparty can perform.
   Memory: **Clearing moves credit risk to the middle.**
   Trap: If the question says centrally cleared, think systemic/central counterparty risk, not no risk.

## Module 2: Forward Commitment and Contingent Claim Features and Instruments

1. Numerical: **Long forward payoff**
   Stem: A long forward contract has a forward price of USD64 on 1,000 barrels of oil. At maturity, spot is USD58.50. What is the long's payoff?
   Solution: The long agreed to buy at USD64, but the market price is only USD58.50. That is bad for the long. Per barrel payoff is USD58.50 - USD64 = -USD5.50. Scale by 1,000 barrels: -USD5,500.
   Formula: Long forward payoff = $(S_T - F_0(T)) x quantity$.
   Memory: **Forward payoff is spot minus fixed for the buyer.**
   Trap: The producer may be the seller, but calculate from the position named in the question.

2. Numerical: **Futures margin call**
   Stem: A long gold futures account starts with USD4,950 initial margin and USD4,500 maintenance margin. The futures price falls by USD5 per ounce on a 100-ounce contract. Is there a margin call, and how much?
   Solution: A long loses when futures price falls. Loss = USD5 x 100 = USD500. New balance = USD4,950 - USD500 = USD4,450. This is below maintenance margin of USD4,500, so the trader must top the account back to initial margin. Margin call = USD4,950 - USD4,450 = USD500.
   Formula: Variation margin = initial margin - balance after loss.
   Memory: **Below maintenance, refill to initial.**
   Trap: Do not refill only to maintenance margin.

3. Numerical: **Call option profit versus payoff**
   Stem: A call with exercise price USD45 costs USD6. At expiration, the stock is USD50. What is the buyer's profit?
   Solution: First calculate payoff: the call lets the buyer buy at USD45 when market is USD50, so payoff = USD5. Then subtract the premium already paid: USD5 - USD6 = -USD1. The buyer had a positive payoff but still lost money overall.
   Formula: Call buyer profit = $max(0, S_T - X) - premium$.
   Memory: **Payoff ignores premium; profit includes premium.**
   Trap: CFA often asks profit after giving a premium.

4. Numerical: **Put option break-even**
   Stem: A put has exercise price USD40 and premium USD3. Below what stock price does the put buyer earn a positive profit?
   Solution: A put pays when the stock is below exercise price. Profit is positive only when payoff exceeds the premium. So the stock must fall below USD40 - USD3 = USD37.
   Formula: Put buyer break-even = $X - premium$.
   Memory: **Put buyer needs spot below strike minus cost.**
   Trap: Stock below strike gives positive payoff, not necessarily positive profit.

5. Numerical: **Forward commitment versus contingent claim**
   Stem: A short forward and a long put both benefit when the underlying falls. Which one can have unlimited loss when the underlying rises?
   Solution: The short forward must settle at maturity no matter what, so if the underlying rises far above the fixed price, the short forward keeps losing. The long put simply expires worthless, and the buyer loses only the premium.
   Memory: **Forward must settle; option can walk away.**
   Trap: Similar direction does not mean similar loss profile.

## Module 3: Derivative Benefits, Risks, and Issuer and Investor Uses

1. Numerical: **Implicit leverage from futures margin**
   Stem: Spot gold exposure is USD177,000. A futures contract gives similar exposure with USD4,950 initial margin. What is the approximate exposure-to-cash leverage?
   Solution: Divide the exposure controlled by the cash posted: USD177,000 / USD4,950 = 35.8 times. A small move in gold can become a large percentage gain or loss on margin.
   Formula: Leverage ratio = exposure / cash outlay.
   Memory: **Small margin, big exposure.**
   Trap: Do not compare futures return to the full notional unless the question asks for underlying return.

2. Numerical: **Opportunity cost of margin versus cash purchase**
   Stem: Borrowing costs are 5% per year. Compare the three-month interest cost of borrowing USD4,950 for futures margin versus USD177,000 for a spot gold purchase.
   Solution: Use three months as one-quarter of a year. Margin interest = USD4,950 x 5% / 4 = USD61.88. Spot purchase interest = USD177,000 x 5% / 4 = USD2,212.50. The futures position uses much less cash, but the exposure is still large.
   Memory: **Futures reduce cash outlay, not economic exposure.**
   Trap: Low initial cash does not mean low risk.

3. Numerical: **Basis risk versus liquidity risk**
   Stem: A hedge uses a futures contract on an index similar to, but not exactly the same as, the hedged portfolio. The futures value stops tracking the portfolio. Which risk is this?
   Solution: The problem is value divergence between the hedge and the exposure. That is basis risk. Liquidity risk is about cash flow timing, such as margin calls arriving before the hedged transaction produces cash.
   Memory: **Basis = value mismatch; liquidity = cash timing mismatch.**
   Trap: Margin-call wording usually points to liquidity risk.

4. Numerical: **Cash flow hedge versus fair value hedge**
   Stem: A company has floating-rate debt and enters a pay-fixed, receive-floating interest rate swap to make interest expense fixed. Which hedge type is this?
   Solution: The company is changing variable future cash flows into fixed cash flows. That is a cash flow hedge. A fair value hedge offsets changes in the fair value of an existing fixed-rate asset or liability.
   Memory: **Variable cash flow made fixed = cash flow hedge.**
   Trap: A receive-fixed swap for fixed-rate debt is a fair value hedge; a pay-fixed swap for floating-rate debt is a cash flow hedge.

## Module 4: Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives

1. Numerical: **No-arbitrage forward with no income**
   Stem: Spot is GBP50, the six-month risk-free rate is 4% annual, and the six-month forward price is GBP52.50. Is there arbitrage?
   Solution: First calculate the no-arbitrage forward price: GBP50 x $(1.04)^{0.5}$ = GBP50.99. The quoted forward is GBP52.50, which is too high. Borrow GBP50, buy the asset, sell the forward, then deliver at GBP52.50. Profit = GBP52.50 - GBP50.99 = GBP1.51.
   Formula: $F_0(T) = S_0(1+r)^T$.
   Memory: **Too-high forward: buy spot, sell forward.**
   Trap: Use six-month compounding, not a full year.

2. Numerical: **Costs and benefits of carry**
   Stem: Spot is USD100, present value of income is USD3, present value of storage cost is USD2, and the one-year risk-free rate is 5%. What is the no-arbitrage forward price?
   Solution: Start with spot. Subtract benefits because the forward buyer does not receive them. Add costs because the spot holder must pay them. Adjusted spot = USD100 - USD3 + USD2 = USD99. Then compound one year: USD99 x 1.05 = USD103.95.
   Formula: $F_0(T) = [S_0 - PV(I) + PV(C)](1+r)^T$.
   Memory: **Income down, costs up.**
   Trap: Benefits reduce the forward price.

3. Numerical: **FX forward rate**
   Stem: KRW/EUR spot is 1,300. The KRW risk-free rate is 0.75%, the EUR risk-free rate is -0.25%, and maturity is 75/365 years. What is the KRW/EUR forward rate?
   Solution: KRW is the price currency and EUR is the base currency, so use price-currency rate minus base-currency rate. The rate difference is 0.75% - (-0.25%) = 1.00%. Forward = 1,300 x $e^{0.0100 x 75/365}$ = about 1,302.67.
   Formula: $F_{0,f/d}(T) = S_{0,f/d}e^{(r_f-r_d)T}$.
   Memory: **For f/d quotes, exponent is foreign minus domestic.**
   Trap: Do not flip the rates when the quote is price currency per one base currency.

4. Numerical: **Commodity storage cost**
   Stem: Spot gold is USD1,783.28, storage cost of USD2 is paid at maturity, risk-free rate is 2%, and maturity is 0.25 years. What forward price includes storage?
   Solution: First discount the storage cost because the formula uses present value of costs: USD2 / $(1.02)^{0.25}$ = about USD1.99. Add it to spot: USD1,783.28 + USD1.99 = USD1,785.27. Then compound to maturity: USD1,785.27 x $(1.02)^{0.25}$ = about USD1,794.13.
   Formula: $F_0(T) = [S_0 + PV(C)](1+r)^T$.
   Memory: **Known storage is a cost of owning spot, so forward goes up.**
   Trap: If a commodity forward is far below cost-of-carry value, think convenience yield.

5. Numerical: **Replication of long forward**
   Stem: Which cash-market position replicates a long forward on a non-income asset?
   Solution: A long forward acts like owning the asset later without paying cash today. To replicate it today, borrow money and buy the underlying. At maturity, sell the asset or keep it, and repay the loan. The payoff left is the asset value minus the financed purchase price, same as long forward payoff.
   Memory: **Long forward = long spot + borrowed cash.**
   Trap: Buying a risk-free bond does not finance the spot purchase; selling/borrowing does.

## Module 5: Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities

1. Numerical: **Forward value during life**
   Stem: A long forward has fixed price EUR51.23. Three months remain, spot is EUR50.50, and the risk-free rate is 5%. What is the long forward value?
   Solution: The long compares today's spot with the present value of the fixed price it must pay later. Discount the fixed price for the remaining 0.25 year: EUR51.23 x $(1.05)^{-0.25}$ = about EUR50.61. Value = EUR50.50 - EUR50.61 = -EUR0.11.
   Formula: Long value = $S_t - F_0(T)(1+r)^{-(T-t)}$.
   Memory: **Long forward value = spot now minus PV of fixed price.**
   Trap: At time t, discount only the remaining life.

2. Numerical: **Short forward value**
   Stem: A short forward price is INR300.84, spot after three months is INR285, six-month original maturity is now three months away, and risk-free rate is 4%. What is the short value?
   Solution: The short will receive the fixed price later, so start with the present value of INR300.84 for the remaining 0.25 year. PV = INR300.84 x $(1.04)^{-0.25}$ = about INR297.90. Then subtract current spot INR285. Value = INR12.90 gain to the short.
   Formula: Short value = $F_0(T)(1+r)^{-(T-t)} - S_t$.
   Memory: **Short forward is the mirror image of long forward.**
   Trap: Rising risk-free rates lower PV of the fixed price, hurting the short.

3. Numerical: **Forward with remaining dividends**
   Stem: Four months after inception, a six-month equity forward has fixed price EUR50.6311. One EUR0.30 dividend remains in two months, and the risk-free rate is 5%. What spot price makes the long value zero?
   Solution: For zero value, adjusted spot must equal PV of the forward price. PV of fixed price for two months = EUR50.6311 x $(1.05)^{-2/12}$ = EUR50.2202. PV of remaining dividend = EUR0.30 x $(1.05)^{-2/12}$ = EUR0.2976. Because the long forward does not receive the dividend, spot must be PV fixed plus PV dividend = EUR50.5178.
   Formula: $0 = [S_t - PV_t(I)] - PV_t(F_0)$.
   Memory: **Breakeven spot must compensate for dividends the forward misses.**
   Trap: Use only remaining benefits after time t.

4. Numerical: **Zero-rate bootstrapping**
   Stem: A two-year annual 3% coupon bond is priced at 99 per 100 face value. The one-year zero rate is 2.50%. What equation solves the two-year zero rate?
   Solution: Discount the year-1 coupon using the known one-year zero rate. Discount the year-2 coupon plus principal using the unknown two-year zero rate. The equation is 99 = 3/1.025 + 103/$(1+z_2)^2$. Solve for $z_2$, not yield to maturity. The result is about 3.5422%.
   Memory: **Bootstrap one cash flow at a time.**
   Trap: Do not solve internal rate of return on all cash flows when the question asks for a zero rate.

5. Numerical: **Implied forward rate**
   Stem: One-year zero rate is 4% and two-year zero rate is 5%. What is the one-year forward rate one year from now?
   Solution: Make the two strategies equal. Investing for two years at 5% must equal investing one year at 4% and rolling into the one-year forward rate. So $(1.04)(1+IFR_{1,1}) = (1.05)^2$. Solve: $IFR_{1,1} = 6.0096%$.
   Formula: $(1+z_A)^A(1+IFR_{A,B-A})^{B-A} = (1+z_B)^B$.
   Memory: **Forward rate is the missing reinvestment rate.**
   Trap: In `2y3y`, the first number is when it starts; the second is the tenor.

6. Numerical: **FRA settlement**
   Stem: A pay-fixed FRA has fixed rate 2.24299%, three-month market reference rate sets at 2.15%, notional CNY100,000,000, and period 90/360. What is the cash settlement at the beginning of the period?
   Solution: First compute the end-of-period net payment from the fixed-rate payer's perspective: (2.15% - 2.24299%) x CNY100,000,000 x 90/360 = -CNY23,247.50. FRAs settle at the beginning of the interest period, so discount this amount using the market reference rate: -CNY23,247.50 / $(1 + 0.0215/4)$ = about -CNY23,123.21.
   Formula: FRA PV settlement = net payment / $(1 + MRR x period)$.
   Memory: **FRA cash settles early, so present value it.**
   Trap: Pay-fixed gains when MRR sets above fixed; here MRR is below fixed, so pay-fixed pays.

## Module 6: Pricing and Valuation of Futures Contracts

1. Numerical: **Futures price with dividend**
   Stem: A stock is EUR125, pays EUR2.50 at maturity, and the one-year risk-free rate is 1%. What is the no-arbitrage futures price?
   Solution: First discount the dividend because the formula uses present value of benefits: EUR2.50 / 1.01 = EUR2.48. Subtract it from spot because the futures buyer does not receive the dividend. Then compound: (EUR125 - EUR2.48) x 1.01 = EUR123.75.
   Formula: $f_0(T) = [S_0 - PV(I)](1+r)^T$.
   Memory: **Dividend lowers futures price.**
   Trap: Do not subtract the undiscounted dividend unless it is paid today.

2. Numerical: **Daily futures MTM**
   Stem: A short oil futures position on 1,000 barrels moves from USD66.02 to USD68.01. What is the daily MTM?
   Solution: Price rose by USD1.99. A short loses when price rises. Loss = USD1.99 x 1,000 = USD1,990.
   Formula: Short futures MTM = $-(f_t - f_{t-1}) x quantity$.
   Memory: **Short hates price increases.**
   Trap: Use the futures price change, not the spot price change.

3. Numerical: **Interest rate futures quote**
   Stem: A three-month market reference rate futures contract trades at 98.25. What rate is implied?
   Solution: Interest rate futures are quoted as 100 minus 100 times the rate. So 98.25 = 100 - 100 x MRR. MRR = 1.75%.
   Formula: Futures price = $100 - 100 x MRR$.
   Memory: **Price up means rate down.**
   Trap: A futures price above 100 implies a negative market reference rate.

4. Numerical: **Interest rate futures BPV**
   Stem: Notional is USD50,000,000 and the futures references a one-month rate. What is the basis point value?
   Solution: One basis point is 0.01%, or 0.0001. Period is 1/12. BPV = USD50,000,000 x 0.0001 x 1/12 = USD416.67. A 100 bp move gives USD41,667.
   Formula: BPV = notional x 0.01% x period.
   Memory: **BPV scales by notional and fraction of year.**
   Trap: Do not use a full year for a one-month or three-month contract.

5. Numerical: **Futures versus forward price direction**
   Stem: Futures prices are positively correlated with interest rates. Which price is higher: futures or forward?
   Solution: A long futures position receives cash gains when prices rise, and those gains arrive when rates are high, so they can be reinvested at high rates. Losses happen when rates are low, so financing them is cheaper. Long futures are more attractive than long forwards, and the more attractive contract has the higher price. Therefore futures price is above forward price.
   Memory: **Positive correlation helps long futures.**
   Trap: If interest rates are constant or uncorrelated with futures prices, forward and futures prices are equal.

6. Numerical: **FRA convexity bias versus futures**
   Stem: A GBP25,000,000 pay-fixed FRA has fixed rate 2.95%, market reference rate sets at 3.25%, and period is 1/4. What is the FRA PV settlement and comparable short futures gain?
   Solution: End payment = (3.25% - 2.95%) x GBP25,000,000 x 1/4 = GBP18,750. The FRA settles on a present value basis, so PV = GBP18,750 / $(1 + 0.0325/4)$ = GBP18,598.88. Futures BPV = GBP25,000,000 x 0.0001 x 1/4 = GBP625, and a 30 bp rise gives GBP18,750.
   Memory: **Futures payoff is linear; FRA settlement is discounted.**
   Trap: The futures gain is slightly larger because the FRA amount is present-valued.

## Module 7: Pricing and Valuation of Interest Rates and Other Swaps

1. Numerical: **Periodic swap settlement**
   Stem: An investor pays fixed 1.12% and receives six-month market reference rate on EUR100 million. The floating rate sets at 0.25%. What is the six-month settlement from the investor's perspective?
   Solution: The investor is fixed-rate payer, so settlement = floating received minus fixed paid. Difference = 0.25% - 1.12% = -0.87%. Apply notional and six-month period: -0.87% x EUR100,000,000 x 0.5 = -EUR435,000. The investor pays.
   Formula: Fixed payer settlement = $(MRR - s_N) x notional x period$.
   Memory: **Pay fixed gains when floating sets above fixed.**
   Trap: Do not forget the 0.5 period.

2. Numerical: **Swap as loan hedge**
   Stem: A company pays three-month market reference rate plus 1.50% on a loan. It enters a pay-fixed 2.05%, receive-floating swap. What is its all-in rate?
   Solution: The loan payment is MRR + 1.50%. The swap receives MRR and pays 2.05%. The MRR paid on the loan and received on the swap cancel. All-in rate = 2.05% + 1.50% = 3.55%.
   Memory: **Pay-fixed swap turns floating debt into fixed debt.**
   Trap: The swap fixed rate is not the total cost if the loan has a spread.

3. Numerical: **Par swap rate**
   Stem: A three-period swap has PV of expected floating payments equal to 0.111017 and annuity factor for fixed payments equal to 2.800545. What is the par swap rate?
   Solution: The par swap rate makes PV floating equal PV fixed. PV fixed = swap rate x annuity factor. So swap rate = 0.111017 / 2.800545 = 3.9641%.
   Formula: $s_N = PV(floating payments) / sum(discount factors)$.
   Memory: **Par swap rate is the fixed rate that makes swap value zero.**
   Trap: The swap rate is constant; the individual forward rates usually are not.

4. Numerical: **Swap value when forward rates rise**
   Stem: After a pay-fixed, receive-floating swap is initiated, expected future floating rates rise. Who gains?
   Solution: The fixed rate is locked. The floating payments expected to be received are now larger. So the fixed-rate payer, who receives floating, has a mark-to-market gain. The fixed-rate receiver has the equal loss.
   Memory: **Pay fixed is short bond; receive fixed is long bond.**
   Trap: Falling rates help the fixed-rate receiver, not the fixed-rate payer.

5. Numerical: **Receive-fixed duration exposure**
   Stem: A portfolio manager expects rates to fall and wants bond-like exposure without buying bonds. Which swap position fits?
   Solution: Receive fixed and pay floating. Fixed cash flows become more valuable when rates fall, just like a fixed-rate bond. Paying fixed would benefit from rising rates and reduce duration.
   Memory: **Receive fixed = long fixed-rate bond.**
   Trap: The floating-rate note side stays near par; the fixed side drives duration.

## Module 8: Pricing and Valuation of Options

1. Numerical: **Call exercise value and time value**
   Stem: A European call has exercise price GBP50, three months to maturity, risk-free rate 2%, spot GBP57.50, and option price GBP10. What are exercise value and time value?
   Solution: First present-value the exercise price for the remaining 0.25 year: GBP50 x $(1.02)^{-0.25}$ = about GBP49.75. Exercise value = max(0, GBP57.50 - GBP49.75) = GBP7.75. Time value = option price - exercise value = GBP10 - GBP7.75 = GBP2.25.
   Formula: Call exercise value = $max(0, S_t - PV(X))$.
   Memory: **Before expiry, compare spot with PV of strike.**
   Trap: Do not use raw strike when time remains.

2. Numerical: **Put exercise value and time value**
   Stem: A put has exercise price EUR1,000, risk-free rate 1%, six months remaining, spot EUR950, and option price EUR50. What is time value?
   Solution: First find exercise value: PV of strike = EUR1,000 x $(1.01)^{-0.5}$ = EUR995.04. Put exercise value = EUR995.04 - EUR950 = EUR45.04. Time value = EUR50 - EUR45.04 = EUR4.96.
   Formula: Put exercise value = $max(0, PV(X) - S_t)$.
   Memory: **Put wants PV strike above spot.**
   Trap: Time value is not the full option price unless exercise value is zero.

3. Numerical: **Option bounds**
   Stem: A six-month call has strike GBP50, three months remain, spot is GBP65, and risk-free rate is 2%. What is the lower bound?
   Solution: The call lower bound is spot minus PV of exercise price, or zero if negative. PV strike = GBP50 x $(1.02)^{-0.25}$ = about GBP49.75. Lower bound = GBP65 - GBP49.75 = GBP15.25.
   Formula: Call lower bound = $max(0, S_t - PV(X))$; put lower bound = $max(0, PV(X) - S_t)$.
   Memory: **Lower bound equals exercise value with PV strike.**
   Trap: Call upper bound is spot; put upper bound is exercise price.

4. Numerical: **Factor direction**
   Stem: Holding all else constant, what happens to call and put values if volatility rises?
   Solution: Both rise. Higher volatility widens future outcomes. The option buyer keeps the good tail and can ignore the bad tail by not exercising. That one-sided payoff makes volatility valuable for both calls and puts.
   Memory: **Volatility helps both option buyers.**
   Trap: Do not think put value falls just because high upside outcomes hurt puts; the downside tail helps and losses are capped.

5. Numerical: **Risk-free rate effect**
   Stem: What happens to a call and a put when the risk-free rate rises, holding all else constant?
   Solution: A higher rate lowers PV of the exercise price. For a call, paying the strike later becomes cheaper in present-value terms, so call value rises. For a put, receiving the strike later becomes less valuable in present-value terms, so put value falls.
   Memory: **Higher rates help calls and hurt puts.**
   Trap: The risk-free rate affects exercise value through PV of strike; it does not directly create time value.

6. Numerical: **Income and storage effects**
   Stem: An asset starts paying a larger dividend. What happens to call and put values?
   Solution: The asset owner receives the dividend, but the option owner does not. That makes owning the asset more attractive relative to a call, so call value falls. The dividend lowers expected forward value, which helps the put, so put value rises. Storage costs do the opposite: calls up, puts down.
   Memory: **Benefits help puts; costs help calls.**
   Trap: Convenience yield is a benefit of holding the physical commodity.

## Module 9: Option Replication Using Put-Call Parity

1. Numerical: **Put-call parity price**
   Stem: Stock is INR295, six-month call price is INR59, strike is INR265, and risk-free rate is 4%. What should the six-month put price be?
   Solution: First discount the strike: INR265 x $(1.04)^{-0.5}$ = INR259.85. Put-call parity says stock plus put equals call plus PV strike. So INR295 + put = INR59 + INR259.85. Put = INR23.85.
   Formula: $S_0 + p_0 = c_0 + X(1+r)^{-T}$.
   Memory: **Protective put equals fiduciary call.**
   Trap: The options must be European, same strike, same maturity, and same underlying.

2. Numerical: **Parity arbitrage**
   Stem: In the same setup, the put trades at INR30 instead of INR23.85. What is the arbitrage?
   Solution: The protective put side is expensive: stock + put = INR295 + INR30 = INR325. The fiduciary call side costs INR59 + INR259.85 = INR318.85. Sell the expensive side: sell stock and sell put. Buy the cheap side: buy call and buy the risk-free bond. Immediate profit = INR325 - INR318.85 = INR6.15, and future payoffs offset.
   Memory: **Sell expensive side, buy cheap side.**
   Trap: Do not buy the overpriced put because it has downside protection.

3. Numerical: **Covered call synthetic**
   Stem: Stock is INR295, strike is INR325, six-month put price is INR56, and risk-free rate is 4%. What call price is consistent with a covered call parity rearrangement?
   Solution: A covered call is long stock minus call. Parity gives $S_0 - c_0 = PV(X) - p_0$. PV strike = INR325 x $(1.04)^{-0.5}$ = about INR318.69. So INR295 - call = INR318.69 - INR56 = INR262.69. Call = INR32.31.
   Formula: $S_0 - c_0 = X(1+r)^{-T} - p_0$.
   Memory: **Covered call = bond minus put.**
   Trap: Covered call means long underlying and short call, not long call.

4. Numerical: **Put-call forward parity**
   Stem: Forward price is INR300.84, strike is INR265, six-month call price is INR59, and risk-free rate is 4%. What is the put price?
   Solution: Use forward parity because the underlying is replaced by long forward plus a risk-free bond. The relationship is $p_0 - c_0 = [X - F_0(T)](1+r)^{-T}$. So put - INR59 = (INR265 - INR300.84) x $(1.04)^{-0.5}$. The right side is about -INR35.14. Put = about INR23.86.
   Formula: $F_0(T)(1+r)^{-T} + p_0 = c_0 + X(1+r)^{-T}$.
   Memory: **Forward plus bond can replace stock.**
   Trap: Do not use spot if the question gives put-call forward parity inputs.

5. Numerical: **Firm value as options**
   Stem: A firm has asset value at maturity $V_T$ and zero-coupon debt face value D. What are shareholder and debtholder payoffs?
   Solution: Shareholders get what remains after debt is paid, but never less than zero: $max(0, V_T - D)$. That is like a call option on firm value. Debtholders receive the smaller of firm value and promised debt: $min(V_T, D)$, which equals risk-free debt minus a sold put on firm value.
   Memory: **Equity is a call; risky debt is risk-free debt minus a put.**
   Trap: Higher insolvency risk makes the put more valuable and hurts debtholders.

## Module 10: Valuing a Derivative Using a One-Period Binomial Model

1. Numerical: **Hedge ratio for a call**
   Stem: Stock is EUR80. In one year it can be EUR110 or EUR60. A call has strike EUR100. What is the hedge ratio?
   Solution: First calculate call payoffs. Up payoff = max(0, EUR110 - EUR100) = EUR10. Down payoff = max(0, EUR60 - EUR100) = EUR0. Hedge ratio is change in option value divided by change in stock value: (EUR10 - EUR0) / (EUR110 - EUR60) = 0.20.
   Formula: $h = (c_u - c_d)/(S_u - S_d)$.
   Memory: **Hedge ratio is option move over stock move.**
   Trap: Use ending payoffs, not today's option price.

2. Numerical: **Call value by hedge portfolio**
   Stem: Using the EUR80 stock, EUR110/EUR60 outcomes, EUR100 strike, and 5% risk-free rate, what is the call value?
   Solution: From the hedge ratio, buy 0.20 shares and sell one call. In the up state, portfolio value = 0.20 x EUR110 - EUR10 = EUR12. In the down state, portfolio value = 0.20 x EUR60 - EUR0 = EUR12. This certain EUR12 must be worth EUR12 / 1.05 = EUR11.43 today. The 0.20 share position costs 0.20 x EUR80 = EUR16, so call value = EUR16 - EUR11.43 = EUR4.57.
   Formula: $c_0 = hS_0 - V_1/(1+r)$.
   Memory: **Make the portfolio riskless, then discount at risk-free.**
   Trap: Do not discount expected real-world payoff.

3. Numerical: **Risk-neutral probability**
   Stem: Stock is 16 today and can move to 20 or 12. The risk-free rate is 5%. What is the risk-neutral probability of an up move?
   Solution: First convert ending prices to gross returns. Up return = 20/16 = 1.25. Down return = 12/16 = 0.75. Risk-neutral up probability = $(1+0.05 - 0.75)/(1.25 - 0.75)$ = 0.30/0.50 = 0.60.
   Formula: $\pi = (1+r-R_d)/(R_u-R_d)$.
   Memory: **Risk-neutral probability uses returns, not the analyst's belief.**
   Trap: Actual probability of an up move does not price the option.

4. Numerical: **Put value by risk-neutral pricing**
   Stem: A stock is JPY8,000. In one month it can rise 5% or fall 15%. The one-month risk-free rate is -0.20%. Strike is JPY7,950. What is the put value?
   Solution: Up stock = JPY8,400, so put payoff is zero. Down stock = JPY6,800, so put payoff is JPY7,950 - JPY6,800 = JPY1,150. Risk-neutral up probability = $(1 - 0.002 - 0.85)/(1.05 - 0.85)$ = 0.74, so down probability is 0.26. Expected payoff = 0.26 x JPY1,150 = JPY299. Discount by 0.998 because the risk-free rate is negative: JPY299 / 0.998 = about JPY299.60.
   Formula: Option value = risk-neutral expected payoff / $(1+r)^T$.
   Memory: **Use negative rates exactly; do not force the discount rate positive.**
   Trap: Down probability is $1-\pi$, not $\pi$.

5. Numerical: **Higher volatility in binomial model**
   Stem: A one-year call has stock price USD50, strike USD55, and risk-free rate 5%. If up/down moves widen from +/-20% to +/-40%, what happens to the call value?
   Solution: With +/-20%, ending prices are USD60 and USD40. Call payoffs are USD5 and USD0, giving a call value of about USD2.98. With +/-40%, ending prices are USD70 and USD30. Call payoffs are USD15 and USD0, giving a call value of about USD8.04. Wider up/down outcomes increase volatility, and volatility increases both call and put values.
   Memory: **Bigger spread between up and down = higher option value.**
   Trap: The actual probability of the up move still does not matter.

6. Numerical: **Mispriced call in binomial model**
   Stem: A binomial model says a call is worth USD2.98, but it trades at USD3.50. What arbitrage direction is indicated?
   Solution: The call is overpriced. Sell the expensive call and buy the hedge portfolio needed to offset the option risk. In the call example, that means borrowing at the risk-free rate, selling the call, and buying the underlying in the hedge ratio. The extra sale price creates a return above the risk-free rate.
   Memory: **Overpriced option: sell option, build hedge.**
   Trap: The hedge ratio is based on payoff sensitivity, not on actual probabilities.

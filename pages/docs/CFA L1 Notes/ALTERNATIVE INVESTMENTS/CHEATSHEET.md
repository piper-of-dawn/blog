Alternative Investments — Exam Callout

[!tip] Read this before the exam
Focus on the exact fee base, the order of fees, the protection mechanism, and the strategy label. Most traps come from using the right word with the wrong calculation.

⸻

Module 1: Alternative Investment Features, Methods, and Structures

1. Numerical: Hard Hurdle Performance Fee

Stem: A fund earns 18%, has a 10% hard hurdle, and charges a 20% performance fee on returns above the hurdle. Calculate the general partner’s performance fee as a percentage of fund value.

Solution: First ask what the manager is allowed to charge on. A hard hurdle means the manager charges only on the return above the hurdle. The fund earned 18%, but the first 10% belongs to limited partners before carry starts. Excess return is 8%. The manager takes 20% of 8%, so the fee is 1.6% of fund value.

Formula: Performance fee = max[0, p × (fund return − hard hurdle)]

Memory: Hard hurdle = bonus only on the extra part.

Trap: CFA is testing whether you charge carry on 18% or only on 8%.

⸻

2. Numerical: Catch-Up Clause

Stem: A fund earns 18%, has an 8% preferred return, a 20% performance fee, and a 2% catch-up return to the general partner. Calculate the general partner’s total return.

Solution: Give the first 8% to limited partners. Then the general partner receives the 2% catch-up. After that, the remaining return is 18% − 8% − 2% = 8%. The manager gets 20% of 8%, which is 1.6%. Total general partner return is 2.0% + 1.6% = 3.6%.

Formula: GP return = max[0, catch-up + p × (return − hurdle − catch-up)]

Memory: Catch-up lets the manager run after crossing the hurdle.

Trap: Do not treat catch-up like a hard hurdle. It accelerates the manager’s share.

⸻

3. Management Fee Base Trap

Mistake: Charging private equity management fees only on invested capital.

Correct logic: Private equity commonly charges management fees on committed capital, because capital is drawn down over years and the manager should not be pushed to invest too fast just to grow fees. Hedge funds and real estate investment trusts usually charge fees on assets under management.

Memory: Private equity fee base = promise first, investment later.

Trap: CFA gives committed capital and invested capital together. Use committed capital for private equity unless the stem says otherwise.

⸻

4. Waterfall Trap

Mistake: Saying deal-by-deal and whole-of-fund waterfalls protect limited partners equally.

Correct logic: Deal-by-deal, or American waterfall, pays the general partner as each profitable deal exits, so it favors the general partner. Whole-of-fund, or European waterfall, waits until limited partners recover initial investment plus the hurdle at the aggregate fund level, so it favors limited partners.

Memory: American = manager gets paid deal by deal. European = investors get whole-fund protection first.

Trap: A later losing deal is exactly why clawback matters.

⸻

5. Clawback vs High-Water Mark

Mistake: Treating clawback and high-water mark as the same protection.

Correct logic: A high-water mark stops the manager from earning performance fees again until prior losses are recovered. A clawback lets limited partners reclaim performance fees already paid when later losses erase earlier gains.

Memory: High-water mark blocks future fees; clawback pulls back old fees.

Trap: Hedge funds often use high-water marks. Private equity and real estate are more likely to need clawbacks over a long fund life.

⸻

Module 2: Alternative Investment Performance and Returns

1. Numerical: MOIC

Stem: A private equity fund invests JPY 3.8 billion in Year 0, adds JPY 1.2 billion in Year 2, adds JPY 0.2 billion in Year 3, and exits for JPY 8.5 billion in Year 8. Calculate multiple of invested capital.

Solution: Multiple of invested capital ignores timing. First add every amount actually invested: 3.8 + 1.2 + 0.2 = 5.2 billion. Then divide the exit value by total invested capital: 8.5 / 5.2 = 1.63×.

Formula: MOIC = (realized value + unrealized value) / total invested capital

Memory: MOIC asks, “How many times did the money come back?”

Trap: MOIC does not care that the money arrived in different years.

⸻

2. Numerical: Leveraged Return When the Trade Works

Stem: A hedge fund has USD 100 million of capital, borrows USD 50 million at 4%, and the underlying position earns 8% for the period. Calculate the leveraged return on investor capital.

Solution: Start with the unleveraged asset return of 8%. The fund borrowed half as much as its own capital because 50 / 100 = 0.5. The borrowed money earns 8% but costs 4%, so the spread is 4%. Leverage adds 0.5 × 4% = 2%. Investor return is 8% + 2% = 10%.

Formula: Leveraged return = r + (borrowed capital / cash capital) × (r − borrowing rate)

Memory: Leverage helps only when asset return beats borrowing cost.

Trap: Do not calculate return on total assets. The question asks for return on investor capital.

⸻

3. Numerical: Leveraged Return When the Trade Loses

Stem: Same fund: USD 100 million capital, USD 50 million borrowed at 4%. The underlying position loses 2%. Calculate the leveraged return.

Solution: Start with the asset return of −2%. The borrowed slice is still 0.5 of investor capital. The spread is −2% − 4% = −6%, because the asset lost money and the loan still costs 4%. Extra damage is 0.5 × −6% = −3%. Leveraged return is −2% − 3% = −5%.

Formula: Leveraged return = r + (Vb / Vc) × (r − rb)

Memory: Borrowing cost does not disappear just because the asset falls.

Trap: CFA is testing the sign inside r − rb.

⸻

4. Numerical: Basic Hedge Fund Fees

Stem: A fund starts with USD 100 million, ends at USD 130 million, charges a 1% management fee on year-end assets, and charges a 20% performance fee on total return. Fees are calculated independently. Calculate investor net return.

Solution: First calculate management fee: 1% of 130 = 1.3 million. Then calculate performance fee on the gain: 20% of (130 − 100) = 6.0 million. Total fees are 7.3 million. The investor made 30 million before fees, keeps 30 − 7.3 = 22.7 million, so net return is 22.7%.

Formula: Fees = (P1 × management fee) + max[0, (P1 − P0) × performance fee]

Memory: Gross return is what the fund made. Net return is what the investor kept.

Trap: Management fee is on ending assets if the stem says year-end assets.

⸻

5. Numerical: High-Water Mark for Old vs New Investor

Stem: A fund’s old investor has a high-water mark of USD 122.7 million. Fund value falls to USD 108.9 million, then rises to USD 128 million. Fees are 1% management fee on ending assets and 20% performance fee above the high-water mark. Calculate the old investor’s Year 3 return.

Solution: First charge management fee: 1% of 128 = 1.28 million. Then performance fee applies only above the old high-water mark: 128 − 122.7 = 5.3 million. Performance fee is 20% × 5.3 = 1.06 million. Total fee is 2.34 million. Investor wealth goes from 108.9 to 128 − 2.34 = 125.66 million. Return is (125.66 − 108.9) / 108.9 = 15.39%.

Formula: Fee = management fee + max[0, (ending value − high-water mark) × performance fee]

Memory: Same fund, different entry point, different net return.

Trap: A new investor starting at 108.9 has a lower high-water mark and pays more performance fee.

⸻

6. Index Bias Trap

Mistake: Trusting hedge fund index returns as clean asset-class returns.

Correct logic: Survivorship bias removes failed funds. Backfill bias adds strong past returns only after successful funds join the database. Both overstate return and understate risk.

Memory: Dead funds disappear; winners show up with a resume.

Trap: CFA often asks why hedge fund returns look too smooth or too good.

⸻

Module 3: Investments in Private Capital: Equity and Debt

1. Venture Stage Trap

Mistake: Calling every early private company investment “private equity buyout.”

Correct logic: Pre-seed or angel capital funds the idea stage. Seed financing supports product development and market research. Early-stage financing funds operations before production and sales. Later-stage financing comes after production and sales begin. Mezzanine-stage financing prepares for an initial public offering.

Memory: Idea, seed, start-up, expansion, exit prep.

Trap: Mezzanine-stage venture capital is not the same phrase as mezzanine debt.

⸻

2. Leveraged Buyout Trap

Mistake: Thinking a leveraged buyout creates value just because debt is used.

Correct logic: Debt is the financing tool. The value story is improving or restructuring operations, then using stronger cash flows to service and pay down debt. If debt financing is unavailable or expensive, leveraged buyouts become less attractive.

Memory: Debt buys control; operations must pay the bill.

Trap: Management buyout means existing management participates. Management buy-in means new management replaces current management.

⸻

3. Exit Strategy Trap

Mistake: Treating recapitalization as a clean exit.

Correct logic: Trade sale and public listing are main exits. Public listing can be an initial public offering, direct listing, or special purpose acquisition company transaction. Recapitalization can pay a dividend using new debt, but it is not a true exit because the private equity firm typically still controls the company.

Memory: Sale exits. Recap takes cash but stays invested.

Trap: Write-off or liquidation is the bad exit, not a planned value-maximizing route.

⸻

4. Vintage-Year Trap

Mistake: Comparing private equity funds without matching vintage years.

Correct logic: Vintage year is when deployment begins. Funds seeded in expansion tend to earn excess returns when they fund early-stage companies. Funds seeded in contraction tend to do better with distressed companies. Diversify across vintage years because entry valuation and business-cycle phase matter.

Memory: Private capital performance is born in its vintage year.

Trap: Do not compare a boom-vintage venture fund with a contraction-vintage distressed fund as if timing did not matter.

⸻

5. Private Debt Risk Ladder

Mistake: Treating all private debt as one risk bucket.

Correct logic: Senior direct lending is lower risk because it is usually senior, secured, and covenant protected. Mezzanine debt is subordinated and may include equity-like upside, so it has higher risk and return. Unitranche blends secured and unsecured debt into one loan with one blended rate. Distressed debt needs restructuring skill and recovery analysis.

Memory: Senior is safer. Mezzanine wants extra return. Distressed
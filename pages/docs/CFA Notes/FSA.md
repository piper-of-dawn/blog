```table-of-contents
title: 
style: nestedList # TOC style (nestedList|nestedOrderedList|inlineFirstLevel)
minLevel: 0 # Include headings from the specified level
maxLevel: 4 # Include headings up to the specified level
include: 
exclude: 
includeLinks: true # Make headings clickable
hideWhenEmpty: false # Hide TOC if no headings are found
debugInConsole: false # Print debug info in Obsidian console
```

### MODULE 1: INTRODUCTION TO FINANCIAL STATEMENT ANALYSIS

> [!info] HOW TO READ THIS MODULE
> You are not “reading accounts.” You are building an evidence file.
> The learning outcomes are: know the analyst’s framework, know the role of analysis, understand why notes and filings matter, respect differences across reporting systems, and know where else to look when the annual report is too polished.
> Treat the annual report like a company’s resume. Useful, but written by the company. Your job is to call references.

#### Financial Statement Roles

1. Financial statement analysis starts with a question. Are you buying equity, lending money, checking credit risk, valuing a business, or judging management?
2. The workflow is: define purpose, collect data, process data, analyze, conclude, and update when new facts arrive.
3. Notes matter because the statements give you the number and the notes explain the number. “Inventory” alone is not enough; you want raw materials, work in progress, finished goods, write-downs, and cost formula.
4. Management commentary matters because it tells you what management wants you to notice. Read it like a sales pitch from someone who knows the product better than you.
5. Audit reports matter, but they are not magic shields. Satyam and Wirecard remind you that audited statements can still hide massive problems.
6. Reporting systems matter because the same business can look different under International Financial Reporting Standards (IFRS) and United States Generally Accepted Accounting Principles (U.S. GAAP).
7. Other sources matter because businesses live outside filings. For airlines, read passenger traffic. For banks, read central bank data. For retailers, read same-store sales and foot traffic.

> [!tip] REAL-WORLD HOOK
> Wirecard looked like a fintech champion until the missing cash story broke. The lesson is brutal and simple: do not worship the report. Use it, then cross-check it.

### MODULE 2: ANALYZING INCOME STATEMENTS

> [!info] HOW TO READ THIS MODULE
> The income statement is the company saying, “Here is how we performed.”
> Your job is to ask: did revenue really happen, were expenses matched properly, which items will not repeat, how many shares split the profit, and what do margins reveal?
> Profit is not just a number. It is timing plus classification plus estimates.

#### Revenue Recognition

1. Revenue recognition under International Financial Reporting Standard 15 (IFRS 15) and Accounting Standards Codification Topic 606 (ASC 606) is a five-step test for deciding how much sales revenue a company is allowed to record, and when it is allowed to record it.
   - What is revenue recognition: The rule for when a company can say, "This sale is real enough to put in the income statement."
   - Why is IFRS 15 used: It gives companies using International Financial Reporting Standards one common revenue rule.
   - Why is ASC 606 used: It gives companies using U.S. Generally Accepted Accounting Principles one common revenue rule.
   - Step 1: Find the contract. Did a real customer agreement exist? Example: Netflix sells a one-year subscription for USD 120.
   - Step 2: Find the promises. What exactly did the company promise to deliver? Example: Netflix promised streaming access for 12 months, not one giant service delivered on day one.
   - Step 3: Find the price. How much money does the company expect to collect after discounts, refunds, bonuses, or variable fees?
   - Step 4: Split the price across the promises. If the customer bought software plus support, do not dump the whole price into one bucket just because cash arrived today.
   - Step 5: Book revenue only as each promise is kept. Netflix should record USD 10 per month, not USD 120 on day one, because you are using the service month by month.
   - Memory hook: **Contract, promises, price, split price, book revenue.** Like a restaurant bill: first confirm the order, then list the dishes, total the bill, split it if needed, and only call it earned when the food is served.
2. Before you even think about revenue, ask whether IFRS or U.S. GAAP treats the customer agreement as a real **contract**. A contract exists only if collecting the money is **probable**.
   - What is probable: The company is confident enough that the customer will pay.
   - Under IFRS: probable means **more likely than not**. Think: just over the 50 percent line can be enough.
   - Under U.S. GAAP: probable means **likely to occur**. Think: stronger proof of collection is needed.
   - Example: Larsen & Toubro signs a USD 100 million highway contract with a government customer that often pays late. If collection is only slightly better than a coin toss, IFRS may treat the agreement as a contract, but U.S. GAAP may say, "Not enough proof yet."
   - Example: A phone company sells handsets plus two-year service plans to customers with weak credit. If payment looks clearly likely, both IFRS and U.S. GAAP can treat the agreement as a contract. If payment looks doubtful, neither should let the company rush into revenue.
   - Exam memory: **IFRS is the lower collectability hurdle; U.S. GAAP is the higher hurdle.** Same customer, same deal, different answer.
   - Why this matters: if it is not treated as a contract, do not book revenue just because a deal was signed. Revenue recognition starts only after the agreement passes this collectability gate.
3. ==Under the converged accounting standards, the incremental costs of obtaining a contract and certain costs incurred to fulfil a contract must be capitalized.== If a company expensed these incremental costs in the years prior to adopting the converged standards, all else being equal, its profitability will appear higher under the converged standards.
4. Principal vs agent presentation is about whether the company is the real seller or just the middleman.
   - What is principal: The company controls the product before the customer gets it.
   - What is agent: The company only arranges the sale for another seller.
   - Real-world example: Amazon acting as the seller of its own inventory is closer to principal. If Amazon buys a speaker for USD 70 and sells it for USD 100, it reports USD 100 of revenue, USD 70 of cost of sales, and USD 30 of gross profit.
   - Real-world example: Amazon Marketplace acting as a platform for a third-party seller is closer to agent. If the customer pays USD 100 to the seller and Amazon earns a USD 30 commission, Amazon reports USD 30 of revenue, not USD 100.
   - Same economics, wild ratio difference: in both cases net profit can be USD 20 after USD 10 of selling, general, and administrative expense. But the principal shows a 20 percent net margin on USD 100 revenue, while the agent shows a 67 percent net margin on USD 30 revenue.
   - Remember: principal looks bigger because revenue is gross. Agent looks leaner because revenue is only commission. Do not compare margins without checking the mix.
5. Franchising and licensing split the business into different revenue buckets. Do not treat all store sales as the parent company’s revenue.
   - Real-world example: If McDonald's owns and operates a restaurant, McDonald's reports the full burger-and-fries sale as revenue.
   - Real-world example: If a franchisee owns the McDonald's restaurant, the franchisee records the customer sale. McDonald's records only its royalty or fee from the franchisee, not the full restaurant sales.
   - Upfront franchise fees: If a franchisee pays to open a new unit, the parent does not dump the whole fee into revenue on day one. It first records deferred revenue, then recognizes it over the franchise agreement.
   - Supply chain sales: If the parent sells food, equipment, or supplies to franchisees, it records revenue when those products are shipped or delivered, depending on shipping terms.
   - Remember: a company-owned restaurant is like running the shop yourself. A franchise is like renting out the brand and collecting a cut.
6. Software revenue depends on whether the customer gets a software license or an ongoing software service.
   - Software license: If the customer gets the software as it exists today and can install or use it, revenue is usually recognized when the software is made available.
   - Support and updates: Revenue is recognized over the support period because the company keeps serving the customer after the license is sold.
   - Software as a service: The customer does not take possession of the software. They access it through the cloud, so revenue is recognized over the subscription term.
   - Real-world example: Microsoft selling a traditional Office license is closer to upfront revenue because the customer receives the software right away. Microsoft 365 is closer to over-time revenue because the customer keeps receiving cloud access, updates, and service.
   - Real-world example: Netflix does not sell you a movie file forever. It gives you streaming access month by month, so the revenue pattern is over the subscription period.
   - Remember: if the customer gets the thing now, revenue may be upfront. If the customer keeps receiving access, updates, or service, revenue is spread over time.
7. Long-term construction and production contracts recognize revenue over time when control passes to the customer as work is performed.
   - This fits work where the customer receives benefits as the company performs, controls the asset while it is being built, or must pay for work completed to date.
   - Progress can be measured by output, such as units completed, or input, such as costs incurred as a percentage of total expected costs.
   - Real-world example: Boeing or Lockheed Martin may build a custom aircraft or defense system over several years. If the customer controls the work as it is built and must pay for work completed, revenue is recognized over time, not only when the final aircraft or system is delivered.
   - Numerical anchor: If the contract price is USD 10 million, expected cost is USD 7 million, and the company has completed 60 percent of the work based on costs incurred, it recognizes USD 6 million of revenue and USD 1.8 million of profit so far.
   - Remember: if the customer is effectively taking control as the work is done, do not wait until the final delivery to recognize everything.
8. Bill-and-hold means the customer has bought the product, but asks the seller to keep it for now.
   - Revenue can be recognized only when the reason for holding is real, the product is separately identified for that customer, the product is ready for delivery, and the seller cannot use it or redirect it to another customer.
   - Real-world-style example: A company orders a custom Tesla fleet vehicle, the exact vehicle identification number is assigned to that customer, the vehicle is ready, title and risk have passed, but the customer asks Tesla to hold it for a few weeks because its delivery lot is full. Revenue can be recognized because control has passed.
   - Bad version: the seller keeps a generic product in the warehouse and could still sell it to someone else. That is not enough.
   - Remember: bill-and-hold works only when the product is basically the customer’s property already.
9. Selling, general, and administrative expense means normal overhead that is not directly the product cost.
   - What is selling expense: Costs to sell the product, such as sales staff, advertising, and delivery support.
   - What is general and administrative expense: Head-office costs, such as management salaries, accounting, legal, and office rent.
   - Why it matters: in the principal-versus-agent example, the same USD 10 overhead makes the agent’s margin look much higher because the agent reports only USD 30 of commission revenue.

#### Expense Recognition

You look more profitable **as long as you’re piling up assets faster than you’re wearing them out**. Once growth slows or assets mature, the bill arrives via depreciation.

> [!info] CAPITALIZE VS EXPENSE (intuition first)
> If Reliance builds a telecom tower, that tower helps earn revenue for many years, so the cost becomes an asset and gets depreciated slowly.
> If Reliance runs an advertising campaign, the money is mostly gone once the campaign runs, so it is expensed now.
> WorldCom abused this distinction by treating ordinary telecom line costs like assets. That made expenses look lower and profit look higher.
> Ask yourself: did this spending create a future asset, or did it just keep the business running today?

#### Nonrecurring Items

> [!abstract] MEMORISE
> - Unusual or infrequent items are still part of **income from continuing operations**.
> - They are reported **before tax**.
> - Discontinued operations are shown **separately, net of tax, after continuing operations**.
> - Expected loss on disposal can be recognized at the measurement date.
> - Expected gain on disposal **cannot** be recognized until sale is completed.

> [!example] DUMMY INCOME STATEMENT - WHERE THESE ITEMS GO
> | Line item | Amount |
> |---|---:|
> | Revenue | USD 1,000 |
> | Cost of goods sold (COGS) | (600) |
> | Gross profit | 400 |
> | Selling, general, and administrative expense | (120) |
> | Earnings before interest, taxes, depreciation, and amortization (EBITDA) | 280 |
> | Depreciation and amortization | (40) |
> | Earnings before interest and taxes (EBIT) | 240 |
> | Interest expense | (20) |
> | ==Unusual loss from factory fire: inside continuing operations and before tax== | ==(50)== |
> | ==Income from continuing operations before tax== | ==170== |
> | Income tax expense | (51) |
> | ==Income from continuing operations after tax== | ==119== |
> | ==Loss from discontinued operation, net of tax== | ==(40)== |
> | ==Net income== | ==79== |
>
> Read it like this: the factory fire is unusual, but the company is still continuing that business, so it stays above tax inside continuing operations. The discontinued operation is different because that whole business is being disposed of, so it sits below continuing operations and is already net of tax.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Unusual or infrequent items stay inside income from continuing operations and are reported before tax.

1. Nonrecurring items are material events that are unusual in nature or infrequent in occurrence. Examples from the PDF: gains or losses from sale of assets or part of a business, impairments, write-offs, write-downs, and restructuring costs.

2. Do not blindly remove these items from analysis. Some firms have “unusual” losses every year or every few years. If it keeps happening, it is not helping you understand recurring earnings to pretend it does not exist.

3. A discontinued operation is different. Management has decided to dispose of a business that is physically and operationally distinct from the rest of the firm in assets, operations, and investing and financing activities.

> [!abstract] MEMORISE
> Discontinued operations:
> - Must be physically and operationally distinct.
> - Are shown net of tax.
> - Sit after income from continuing operations.
> - Expected losses can be accrued at the measurement date.
> - Expected gains cannot be recognized until sale is completed.

4. Once a business qualifies as a discontinued operation, move its profit or loss out of normal operations and show it near the bottom of the income statement, **net of tax**.
   - What is net of tax: The tax effect is already included, so do not tax it again.
   - Example: Suppose Reliance sells a retail chain and will have no further involvement. The retail chain’s profit or loss should not be mixed with Reliance’s continuing telecom or energy operations. Put it after income from continuing operations, net of tax.
   - If prior income statements are shown, separate the discontinued business there too. Otherwise last year and this year are not comparable.
   - Remember: discontinued operation = separate bucket at the bottom. Do not bury it inside revenue, cost of goods sold, or operating profit.

5. Losses are recognized earlier than gains when a discontinued business is being disposed of.
   - Measurement date: The date management commits to the disposal plan and the operation qualifies for discontinued treatment.
   - Expected loss: If the company expects to lose money during the shutdown period or on the sale, recognize that expected loss at the measurement date.
   - Expected gain: If the company expects to make a gain on sale, wait until the sale is actually completed.
   - Example: Tata decides to sell a small division. If it expects a USD 20 million loss, book the loss when the disposal plan qualifies. If it expects a USD 20 million gain, do not celebrate early. Recognize the gain only when the sale closes.
   - Remember: accounting is faster to admit bad news than good news here.

6. For forecasting, remove discontinued operations from future earnings because that business will not be around to generate future profit or cash flow.
   - Example: If Disney sells a TV network, do not include that network’s future profit when forecasting Disney after the sale. It is no longer part of the machine.
   - But do not ignore the disposal completely. It may tell you strategy changed, cash is coming in from the sale, debt may be repaid, or management is cutting a weak business.
   - Remember: remove it from recurring earnings, but still ask what the sale says about the company.

7. Accounting policy changes and accounting estimate changes are treated differently.
   - Change in accounting policy: Usually retrospective. Restate old financial statements as if the new policy had always been used, unless doing so is impractical.
   - Example: Microsoft adopted a new revenue recognition policy and restated earlier years, so analysts could compare revenue and net income on the same basis.
   - Change in accounting estimate: Prospective. Do not rewrite old years. Apply the new estimate to the current and future periods.
   - Example: If a company changes a machine’s useful life from 10 years to 8 years, old depreciation stays old. Only current and future depreciation change.
   - Remember: policy change rewrites the movie from the beginning. Estimate change only changes the next scenes.

> [!warning] EASY TO FORGET
> Change in accounting policy = usually retrospective.
> Change in accounting estimate = prospective.
> If you mix these up, you will misread comparability across periods.

#### Basic Earnings Per Share

> [!abstract] MEMORISE
> 
> BASIC EPS = (PAT - Pref. Dividend) / Weighted Avg. of Ordinary Equity
> 
> Whenever a stock split happens do not mess with weighted number of shares calculations. Just take the final weighted number of and split it.
> 
> In case of convertible bonds, always add after-tax interest to the numerator 
> 
> In case of options and warrants, first figure out if exercise is economic, if yes:
>    Shares are issued  
  >  Cash comes in 
   > Cash buys back some shares @ market price
   > **Only the leftover shares increase the denominator**
	>That leftover is the **true dilution**.


- **What is Warrant:** A warrant is essentially an equity call option issued by the company; a warrant holder has the right but not the obligation to purchase newly issued shares at the exercise price. 
1. **What is Basic EPS:** (Actual earnings - Preferred Dividend) / actual weighted ordinary shares.

> [!DANGER] DO NOT MAKE THIS MISTAKE
> Preferred Dividend is subtracted while calculating EPS

2. **What are Actual weighted shares:** Weighted average number of shares outstanding during the period. Shares outstanding adjusted for how long they existed during the year. For example:


> [!question] WEIGHTED AVERAGE OF SHARES
> |                                                        |           |
| ------------------------------------------------------ | --------- |
| Shares outstanding on 1 January 2018                   | 1,000,000 |
| Shares issued on 1 April 2018                          | 200,000   |
| Shares repurchased (treasury shares) on 1 October 2018 | (100,000) |
| Shares outstanding on 31 December 2018                 | 1,100,000 |
The actual weighted shares are calculated as:
> 
> 

|                                                                                                 |           |
| ----------------------------------------------------------------------------------------------- | --------- |
| 1,000,000 * (3 months/12 months) =                                                              | 250,000   |
| 1,200,000 * (6 months/12 months) =                                                              | 600,000   |
| 1,100,000 * (3 months/12 months) =                                                              | 275,000   |
| Weighted average number of shares outstanding = (3/12) \* 1 + (6/12) \* 1.2 + (3/12) \* 1.1<br> | 1,125,000 |

> [!question] STOCK SPLIT
> On 1 December 2018, a previously declared 2-for-1 stock split took effect. For the year ended 31 December 2018, Angler Products had net income of USD2,500,000. The company declared and paid USD200,000 of dividends on preferred stock. Calculate its basic EPS.
> 
> ---
> 
> **Whenever a stock split happens do not mess with weighted number of shares calculations. Just take the final weighted number of and split it.** 
> 
> It is 2 for 1 split. So 1.125 Million shares turn into 2.25 million shares.
> 
> BASIC EPS = (2.5 million - 0.2 million) / 2.25 million = USD 1.022


4. **What is Preferred Dividend?** This is the dividend paid to the preferred shareholders. **Preferred stock doesn't come under common stock and hence EPS removes it.**
5. **What is Diluted EPS:** “What EPS would be” if all dilutive instruments became common stock. This would be (Actual Earnings - Preferred Dividends) / (Ordinary Shares + New common stock that would have been issued at conversion))
6. **What is Dilution:** The instruments convertible into ordinary equity can become shares ⟶ share count rises ⟶ EPS goes down. That's dilution.
7. **What is stock split:** Suppose a company with a market capitalization of $100 has 100 shares (each share is priced $1). The company declares 2:1 stock split, which means each share would be split into 2 shares. This means the number of shares will be now: (100 * (2/1)) = 200. Now each share would be priced $0.5.
8. Complex Capital Structure: Under IFRS, the type of equity for which EPS is presented is referred to as ordinary. Ordinary shares are those equity shares that are subordinate to all other types of equity. When a company has issued any financial instruments that are potentially convertible into common stock, it is said to have a complex capital structure. 



> [!question] BASIC EPS
> 1. For the year ended 31 December 2018, Shopalot Company had net income of USD1,950,000. The company had 1,500,000 shares of common stock outstanding, no preferred stock, and no convertible financial instruments. What is Shopalot’s basic EPS?
>    
>    ---
>    
>    Basic EPS = 1.95 / 1.5 = USD 1.30

###### DILUTED EPS

9. **What-if**, if everything that can be converted into common stock is converted into common stock. This increases the number of shares and reduces EPS. This is diluted EPS.
10. **What-if bonds are converted**, When company converts bonds into common stock, in the numerator, you add **after-tax interest.** In the denominator, you add the new shares issued on conversion.

> [!danger] ALWAYS ADD AFTER-TAX INTEREST
> **Why?** Because the interest is tax-deductible and hence on conversion you lose the tax shield benefit of interest. So you add back after-tax interest to numerator.

11. **What-if preferred stock is converted**, In this case, you add preferred dividends to numerator and add new shares issued on conversion to denominator.


> [!question] DILUTED EPS (ALWAYS ADD AFTER TAX INTEREST)
> Oppnox Company (fictitious) reported net income of USD750,000 for the year ended 31 December 2018. The company had a weighted average of 690,000 shares of common stock outstanding. In addition, the company has only one potentially dilutive security: USD50,000 of 6 percent convertible bonds, convertible into a total of 10,000 shares. Assuming a tax rate of 30 percent, calculate Oppnox’s basic and diluted EPS.
> 
> ---
> 
> Numerator = PAT + After tax Interest = 750 + 50(0.06)(0.7) - 750 + 2.1 = 752.1
> Denominator = 690 + 10 = 700
> Diluted EPS = 752.1 / 700 = USD 1.0744

###### TREASURY STOCK METHOD

12. If exercise is uneconomic → no exercise → no new shares → **not dilutive**. If exercise is economic:
    - Shares are issued  
    - Cash comes in 
    - Cash buys back some shares @ market price
    - **Only the leftover shares increase the denominator**
	- That leftover is the **true dilution**.




> [!question] OPTIONS AND WARRANTS
>During 20X6, XXX Corp. reported earnings available to common shareholders of $1.2 million and had 500,000 shares of common stock outstanding for the entire year, for basic EPS of $2.40. XXX has 100,000 stock options (or warrants) outstanding the entire year. Each option allows its holder to purchase one share of common stock at $15 per share. The average market price of XXX’s common stock during 20X6 is $20 per share. Calculate diluted EPS.
>
>---
>
>First think, is exercise economic. Yes, because market price $20 > exercise price $15.
>
>Cash Inflow from exercise = 100,000 * $15 = $1,500,000
>
>New shares issued = 100,000
>
>Cash used to buy back shares = 1,500,000 / 20 = 75,000
>
>Net new shares = 100,000 - 75,000 = 25,000
>
>Numerator = 1,200,000
>Denominator = 500,000 + 25,000 = 525,000
>
>Diluted EPS = 1,200,000 / 525,000 = $2.2857
>

#### Ratios and Common-Size Income Statements

1. Common-size income statement = divide every line item by **Revenue** and express as %.

> [!info] WHY COMMON-SIZE WORKS
> Common-size analysis turns every income statement line into a percentage of revenue.
> This lets you compare Walmart with a smaller retailer without being fooled by size.
> If Walmart has a gross margin near 24% and a luxury brand has a gross margin near 65%, the lesson is not “one is better.” The lesson is that the business models are different.
> Common-size statements make the income statement speak in proportions instead of raw dollars.

> [!tip] HAMMMER THIS INTO YOUR HEAD
> Margin is always calculated as **Revenue** as denominator. Turnover is always calculated as **Revenue** as numerator. **Revenue is usually the numerator**, **except inventory and A/C payable turnover**, which uses COGS for matching.

> [!danger] DO NOT MAKE THIS MISTAKE
> Inventory and A/C Payables Turnover use COGS as numerator

### MODULE 3: ANALYZING BALANCE SHEETS

> [!info] HOW TO READ THIS MODULE
> The balance sheet is a photo of resources and claims at one date.
> The learning outcomes are about intangible assets, goodwill, financial instruments, non-current liabilities, and common-size balance-sheet analysis.
> Ask: what is recorded, what is missing, and what measurement basis is being used?

#### Intangible Assets, Goodwill, Financial Instruments, and Non-Current Liabilities

> [!abstract] MEMORISE
> - The first purchase of asset must always be recorded at cost value under IFRS
> - Any goodwill on the accounts is only created during purchase acquisition. **Internally generated goodwill must be expensed.**
> - Under US GAAP, held to maturity securities such as debentures are measured at amortised cost. Amortized cost is equal to the original issue price minus any principal payments, plus any amortized discount or minus any amortized premium, minus any impairment losses. **Coupon payments go to OCI.** **Subsequent changes in market value are ignored.** for example if credit rating of the borrower declines or interest rate shoots up, you do not account net for these changes.
> - Tradable securities such as equity and derivatives which are held with an intent to sell are measured at fair value and PnL go to OCI

1. IFRS rule: Under IFRS (set by [International Accounting Standards Board](chatgpt://generic-entity?number=0)), a purchased identifiable intangible (patent, license, trademark) is first recorded at cost and then you can choose cost model or revaluation model, but revaluation is allowed only if there is an active market with observable prices.
2. Cost model (IFRS and US GAAP): Asset stays at historical cost minus accumulated amortization and impairment; example: a firm buys a patent for INR 100, amortized straight-line over 10 years ⟶ carrying value after 3 years = INR 100 − INR 30 = INR 70, regardless of what similar patents trade at today.

> [!note] IMPLICATIONS OF THE COST MODEL
> - **Understates assets** during inflation or long holding periods.  
> - **Ratios distorted**:     
>     - ROA ↑ (assets understated)        
>     - Asset turnover ↑     
> - **Cross-company comparability suffers** when peers use different measurement bases.>     
> - Notes must be checked to understand **measurement bases used** across firms.


3. Revaluation model (IFRS only): Asset is periodically marked to fair value using market prices, with increases going to OCI (revaluation surplus) and decreases to P&L if they exceed any existing surplus; example: taxi medallion bought for INR 100, amortized to INR 80, active market price now INR 120 ⟶ balance sheet value reset to INR 120 and INR 40 goes to equity via OCI, not income.

> [!warning] REMEMBER
> Under US GAAP, the intangible asset is always recorded at cost value. Re-evaluation is not allowed whatsoever. Both Reserach and Development is always expensed under US GAAP.

4. Under IFRS firm must explicitly identify research stage and expense it.  Then capitalise the development stage. Under US GAAP, firm must always expense both research and development, no matter what.
5. The intangible assets with finite life such as patents must be amortised. The lifespan of such assets must be reviewed annually. 
6. Any admin overhead, training costs etc must be expensed under both IFRS and US GAAP.

###### GOODWILL

7. Any internally generated goodwill must be expensed. Goodwill is only created on balance sheet during purchase acquisition.

> [!WARNING] REMEMBER
> Accounting goodwill should not be confused with economic goodwill. Economic goodwill derives from the future earning potential of the firm whereas accounting goodwill is the result of the past acquisitions.
8. To improve comparability analysts should eliminate goodwill from the balance sheet while calculating ratios. 
9. Sometimes firms manipulate net income upward by allocating a larger proportion of acquisition price to goodwill. Lower value of tangible assets result in lower depreciation and amortisation expense and hence higher income.
###### FINANCIAL INSTRUMENTS

9. Financial instruments are contracts that give rise to both a financial asset of one entity and a  financial liability or equity instrument of another entity.
10. Under US GAAP, held to maturity securities such as debentures are measured at amortised cost. Amortized cost is equal to the original issue price minus any principal payments, plus any amortized discount or minus any amortized premium, minus any impairment losses. **Subsequent changes in market value are ignored.** for example if credit rating of the borrower declines or interest rate shoots up, you do not account net for these changes. 
11. Tradable securities such as equity and derivatives which are held with an intent to sell are measured at fair value. This is also known as mark to market accounting. All gains and losses go into OCI. Short position on stocks is recorded on liability side at fair value. 


> [!question] QUESTION
> Triple D Corporation, a U.S. GAAP reporting  firm, purchased a 6% bond, at par, for $1 million at the beginning of the year. Interest rates have recently increased, and the market value of the bond declined by $20,000. Determine the bond's effect on Triple D's financial statements under each classification of securities.
>
 > ---
> 
> **US GAAP**: It matters if this bond is held to maturity or is held with an intention to sell. 
>If it is held to maturity then the change in bond price due to interest rate changes are ignored and bond is recorded at its amortised cost of 1 million. The interest of $6k goes to OCI.
>If it is held as a tradable security then we record it at its fair mark-to-market price. 

12. A vertical common-size balance sheet expresses each item of the balance sheet as a **percentage of total assets**.

> [!tip] HAMMER THIS INTO YOUR HEAD
> - A common size balance sheet expresses each item as percentage of total assets, income statement as percentage of revenue.

#### Common-Size Balance Sheets

1. Common-size balance sheet = each balance sheet line item divided by total assets.
2. This helps you compare companies of different sizes. A bank and a software company can both have huge assets, but the bank’s assets are loans and securities while the software company may depend on cash, code, people, and customer relationships.
3. The analyst question is: “What does this company need to own to make money?”
4. Apple may hold large cash and marketable securities because the business throws off cash. An airline holds aircraft. A bank holds loans. Same word “asset,” completely different risk.

> [!tip] REAL-WORLD HOOK
> Safeway once recorded a large goodwill impairment after acquisitions looked less valuable during a weak economy. Goodwill is management saying, “We paid extra because we expected extra value.” If that story breaks, goodwill gets written down.

### MODULE 4: ANALYZING STATEMENTS OF CASH FLOWS I

> [!info] HOW TO READ THIS MODULE
> Cash flow is where accrual accounting meets the bank account.
> The learning outcomes are: link cash flow with the income statement and balance sheet, prepare direct and indirect cash flow statements, convert indirect to direct, and compare International Financial Reporting Standards (IFRS) with United States Generally Accepted Accounting Principles (U.S. GAAP).
> Your mantra: profit can be estimate-heavy; cash movement is harder to hand-wave.

#### Cash Flow Introduction and Direct Method Cash Flow from Operating Activities

1. Balance sheet = snapshot (assets, how they're funded) at one date → income statement, cash flow statement, and equity statement are all "flow" bridges that explain _how_ you got from last snapshot to this one → so every line-item change on the balance sheet must trace through at least one flow statement, and if it doesn't, something's wrong.
2. Income statement runs on accrual accounting (recognize revenue when earned, not when cash lands) → cash flow statement corrects for this by tracking only actual cash movement → the gap between the two creates or destroys current assets/liabilities on the balance sheet: e.g., revenue recognized but cash not yet collected = accounts receivable goes up; cash received before you deliver = deferred revenue (a liability) goes up until you perform.
3. That gap gives you a built-in diagnostic: Beginning A/R + Revenue − Cash Collected = Ending A/R → if ending A/R is ballooning while cash collected flatlines, the company may be booking fake revenue (sales recognized on paper with no real expectation of collection) → same logic applies in reverse to payables and deferred revenue, so cross-checking flow statements against balance sheet movements is your primary fraud-detection tool.
4. Cash flow statement splits into operating (core business cash), investing (buying/selling long-term assets), and financing (debt/equity raises and repayments) → a transaction hits the income statement and the cash flow statement at _different times_ — depreciation hits income as an expense over years but the full cash outflow hit investing on purchase day; interest accrues on the income statement over the loan's life but cash leaves only on payment date → understanding which bucket and which timing applies is the whole game of reading these statements together.
5. Real example: ABC buys $100 inventory on credit Jan 1 
	- Balance sheet: inventory ↑$100, A/P ↑$100, no cash move yet. 
	- Pays supplier Jan 30 — cash ↓$100, A/P ↓$100, operating cash flow ↓$100. 
	- Sells for $150 on credit Feb 1 — A/R ↑$150, inventory ↓$100, income statement: revenue $150, COGS $100, profit $50, still no cash. 
	- Customer pays Feb 15 — cash ↑$150, A/R ↓$150, operating cash flow ↑$150. Net result: $50 profit on income statement, $50 net cash inflow on cash flow statement, but they arrived at completely different dates.


> [!info] MEMORISE THIS 
> How to use direct method? - Pick a P&L line (revenue, COGS, salary expense, whatever)
> - Find its B/S partner (A/R for revenue, A/P for purchases, wages payable for salary, etc.)
> - Check: did that B/S account go up or down?
> - Asset up = you got less cash than the P&L says. Liability up = you paid less cash than the P&L says. Reverse for decreases.
> - P&L number ± that B/S change = actual cash. Done.

> [!TIP] HAMMER THIS INTO YOUR HEAD
> Memorise these two lines:
> **BEGINNING + WHAT GOES IN − WHAT GOES OUT = ENDING**
> **CASH PAID = EXPENSE + INCREASE IN ASSET - INCREASE IN LIABILITY**

6. **Cash from customers — one step:**
	Beginning A/R + Revenue − Cash Collected = Ending A/R
You know beginning A/R, revenue, ending A/R → solve for cash collected. Done.

7. **Cash to suppliers — two steps, same rule twice:**
	- Step 1 — _how much did you buy?_ **Beginning Inventory + Purchases − COGS = Ending Inventory** You know everything except purchases → solve for purchases.
	- Step 2 — _how much did you actually pay?_ **Beginning A/P + Purchases − Cash Paid = Ending A/P** You now know purchases from step 1 → solve for cash paid.
8. Same logic extends to every operating line: 
	- **Opening Wages Payable + Salary Expense - Cash Wage Payments = Ending Wages Payable**. Solve for Cash Wage Payments.
	- **Opening Interest Payable + Interest Expense - Cash Interest Payments = Ending Interest Payable**. Solve for Cash Interest Payments.
#### Cash flow classifications (US GAAP vs IFRS)

- US GAAP: Interest paid = CFO; interest received = CFO; dividends received = CFO; dividends paid = CFF; taxes = CFO (with limited exceptions).
- IFRS: Interest paid = CFO or CFF; interest received = CFO or CFI; dividends received = CFO or CFI; dividends paid = CFO or CFF; taxes allocated by nature when specifically identifiable, otherwise CFO.
- Bank overdrafts: US GAAP = financing liability; IFRS = may be included in cash and cash equivalents if repayable on demand and integral to cash management.
- CFO examples: cash from customers; cash paid to suppliers/employees; trading securities cash flows (if operating by policy); taxes and interest (per standard).
- CFI examples: purchase/sale of PP&E and intangibles; business acquisitions/disposals; lending and collections (if not classified as operating under policy); long-term investment securities.
- CFF examples: issuing/repaying debt (principal); issuing/repurchasing equity; dividends paid (US GAAP) or per policy (IFRS).

#### Indirect Method Cash Flow from Operating Activities

**Learning outcomes covered here:** analyze and interpret both reported and common-size cash flow statements; calculate and interpret free cash flow to the firm, free cash flow to equity, and performance and coverage cash flow ratios.

> [!abstract] MEMORISE THIS FOR EFFICIENCY
> Your brain should hear: **Net Income → Remove non-operating → Undo Non Cash → Fix WC timing → CFO.**
> 				 **==CFO = NI or PAT + NCC - $\Delta$ WC==**
> Indirect method is NOT preferred by either US GAAP or IFRS 
> **US GAAP requires disclosure of cash paid for interest and income taxes**, while **IFRS encourages (but does not mandate) similar disclosure**. 
> 
> Do not stop at calculating cash flow from operating activities. The Chartered Financial Analyst (CFA) exam wants you to read the story: **where cash came from, where it went, whether operations paid for investment, and whether net income is backed by cash.**

1. Indirect CFO = “net income (accrual story)” converted into “cash reality” by 
		 - Removing stuff that isn’t operating, **Gain on sale of equipment / land** is removed from CFO because the cash from sale is shown in investing.
		 - Undoing expenses/gains/losses that didn’t move cash. Things like depreciation reduce Net Income but don't cost actual cash. We must **add them back**
		 - Adjust for timing in working capital: 
			 - Increase in current operating asset → subtract from NI; decrease → add. Current Asset could be A/R or Inventory.
			 - Increase in current operating liability → add to NI; decrease → subtract. Current liability could be A/P or Wages Payable.
		 - Fixing timing mismatches created by working capital accruals. Your brain should hear: **Net Income → Remove non-operating → Undo Non Cash (NCC) → Fix WC timing ($\Delta WC$) → CFO.**
	
	
> [!TIP] HAMMER THIS INTO YOUR HEAD
> **Closing Anything = Opening Anything + Inflow (Purchase) - Outflow (Write Off / Sale)**
> What remains in closing, is the net of what you added to opening plus what you removed from opening. This will help you solve a lot of questions. You can calculate any variable by re-arranging the equation above

2. Memorize what should be added and subtracted
	  ==**Subtract the gains and Add the losses**== (We are reversing).
	  ==**Subtract the Asset Increase and Add the Asset Decrease**== (We are reversing).
	  ==**Subtract the Liability Decrease and Add the Liability Increase**== (We are reversing).

| **Stuff to be added:**                   | **Stuff to be subtracted:**              |
| ---------------------------------------- | ---------------------------------------- |
| Depreciation, Amortization and Depletion | Anything that eats into a liability      |
| Loss on sale of land, PPE                | Gain on sale of land, PPE                |
| Asset Impairment, write-down             | Reversal of asset Impairment, write-down |
| Decrease in DTA<br>                      | Increase in DTA                          |
| Increase in DTL<br>                      | Decrease in DTL                          |
| **Losses** on Prepayment of Debt         | **Gains** on Prepayment of Debt          |
3. Fix timing of working capital (**==Subtract change in working capital==**):
	- Operating assets move opposite to cash; operating liabilities move with cash.
	- Working capital (for CFO–indirect) = **current operating assets − current operating liabilities**.
	- **Inventory up = cash trapped → CFO down,   Inventory down = cash released → CFO up**

4. Read the cash flow statement like a detective, not like a calculator:
	- For a mature company, the main source of cash should usually be **cash flow from operating activities (CFO)**. If operations are always negative, the company survives only by borrowing money or issuing shares. That cannot go on forever because lenders and shareholders eventually want cash back from the business.
	- For a young growth company, negative cash flow from operating activities can be okay for a while because cash may be tied up in inventory and receivables. Think of a fast-growing retailer opening new stores: shelves must be stocked before the cash register starts ringing. But this is a temporary excuse, not a permanent business model.
	- The cleanest pattern is: operations generate cash, the company uses some of it for capital expenditures, and the leftover cash can reduce debt, pay dividends, buy back shares, or fund new projects.
	- If investing cash flow is heavily negative, ask: is the company buying productive assets for the future, or just burning cash? Danone's 2017 cash flow statement showed a huge investing outflow because it acquired WhiteWave. That is not the same as a normal maintenance capital expenditure.
	- If financing cash flow is heavily positive, ask: why did outsiders have to provide cash? Was the company funding growth, plugging an operating hole, or preparing for a large acquisition?

> [!info] WHY OPERATING CASH FLOW QUALITY MATTERS (intuition first)
> Imagine Apple and Sears both report net income of 1,000 in a simplified classroom example.
> Apple collects cash quickly from customers, pays suppliers normally, and reports cash flow from operating activities of 1,300.
> Sears books more sales on credit, receivables balloon, inventory piles up, and cash flow from operating activities is only 200.
> On paper, both earned 1,000. In the real world, Apple has money in the bank and Sears has promises from customers plus products sitting in stores.
> This is why the Chartered Financial Analyst (CFA) Curriculum treats the relationship between net income and cash flow from operating activities as an earnings-quality check.
> Enron is the famous warning sign here: reported earnings can look impressive while the cash story is much weaker. Cash is harder to fake than accrual profit, so always ask whether profit turned into cash.

5. Compare cash flow from operating activities with net income:
	- For a mature company, cash flow from operating activities should usually be **higher than net income** because depreciation and amortization reduce accounting profit but do not use current-period cash.
	- If net income is high but cash flow from operating activities is weak, earnings quality may be poor. The company may be recognizing revenue too early, stretching assumptions, or letting receivables and inventory absorb cash.
	- If cash flow from operating activities is volatile, forecasting future cash flows becomes harder. That matters directly for valuation because debt and equity are ultimately valued from expected future cash.
	- A simple exam line: **Net income tells you the accounting story. Cash flow from operating activities tells you whether customers actually funded the business.**

6. Common-size cash flow statements under the indirect method:
	- Method 1: express each cash inflow as a percentage of total cash inflows, and each cash outflow as a percentage of total cash outflows.
	- Method 2: express each cash flow line item as a percentage of net revenue. This is useful for forecasting because once you forecast revenue, you can estimate items like depreciation, capital expenditures, debt repayment, and dividends as a percentage of sales.
	- Under the **direct method**, operating cash inflows and outflows are visible separately, such as cash received from customers and cash paid to suppliers.
	- Under the **indirect method**, operating cash inflows and outflows are not shown separately. You only see the net cash flow from operating activities. So in a common-size inflow/outflow statement, positive cash flow from operating activities appears as one inflow line, not as separate customer collections and supplier payments.

> [!warning] EXAM TRAP
> If cash flow from operating activities is positive under the indirect method, it is shown as a cash inflow in the total-inflows common-size format.
> If cash flow from operating activities is negative, it is shown as a cash outflow.
> Do not try to split it into customer cash received and supplier cash paid unless the statement uses the direct method.

7. Connect this module to free cash flow and ratios:
	- Free cash flow starts with the same idea: after operations generate cash, ask whether that cash covers capital expenditures. If yes, the company has room to repay lenders, pay shareholders, or reinvest.
	- Free cash flow to the firm (FCFF) is cash available to both debt and equity capital providers after operating expenses, taxes, working capital investment, and fixed capital investment.
	- Free cash flow to equity (FCFE) is cash available to common shareholders after operating expenses, taxes, working capital investment, fixed capital investment, and net borrowing effects.
	- Performance ratios use cash flow from operating activities to judge cash productivity, such as cash flow from operating activities divided by revenue.
	- Coverage ratios use cash flow from operating activities to judge solvency pressure, such as whether operations can cover debt, interest, dividends, or reinvestment needs.

> [!tip] Quick checks
> 1. Mature company: cash flow from operating activities should normally be positive and should ideally cover capital expenditures.
> 2. Cash flow from operating activities greater than net income is usually a good quality signal, but still check why.
> 3. Receivables up means sales were not fully collected in cash, so cash flow from operating activities goes down.
> 4. Payables up means suppliers financed part of the business, so cash flow from operating activities goes up.

> [!QUESTION] Question
> A company reports net income of 1,000 for the year. Depreciation expense recorded during the year is 200. Accounts receivable increased by 150 over the period. Calculate cash flow from operating activities using the indirect method.
> NI = 1000, NCC = 200, $\Delta$ WC = 150
> CFO = 1000 + 200 - 150 = 1050
> ---
> A firm shows net income of 2,000. During the year, inventory increased by 300 and accounts payable increased by 180. Using the indirect method, determine cash flow from operating activities.
> NI = 2000, $\Delta$ WC = 300 - 180 = 120
> CFO = 2000 - 120 = 1820
> ---
> A firm shows Net Income of 39000. Current Depreciation Expense is 7000. Gain on Sale of Land is 10000. Loss on disposal of PP&E is 2000. AR increased by 1000. Inventory decreased by 2000. CL increased by 11,000
> NI = 39000, NCC = 7000 - 10000 + 2000 = -1000, $\Delta$ WC = 1000 - 2000 - 11000 = -12000.
> CFO = 39000 - 1000 + 12000 = 50000
>

#### Investing and Financing Cash Flows and IFRS/U.S. GAAP

1. Investing cash flow tells you what the company did with long-term assets and investments: bought equipment, sold equipment, acquired businesses, or bought securities.
2. Financing cash flow tells you how capital providers moved money in or out: issued debt, repaid debt, issued shares, repurchased shares, or paid dividends.
3. A healthy mature company usually generates cash from operations, invests enough to stay competitive, and returns surplus cash to debt or equity holders.
4. A risky pattern is negative operating cash flow funded by repeated borrowing. That is like paying rent with a credit card every month.
5. International Financial Reporting Standards (IFRS) gives more classification flexibility for interest and dividends than United States Generally Accepted Accounting Principles (U.S. GAAP). For comparisons, rebuild classifications consistently.

> [!tip] REAL-WORLD HOOK
> Netflix spent heavily on content for years. The income statement could show improving scale, but the cash flow statement showed how much cash was being poured into content assets. That is why you read cash flow, not just net income.

### MODULE 5: ANALYZING STATEMENTS OF CASH FLOWS II

> [!info] HOW TO READ THIS MODULE
> This module is about judging cash quality.
> The learning outcomes are: analyze reported and common-size cash flow statements, then calculate free cash flow and cash-flow ratios.
> Ask: did the business generate enough cash to fund itself, or did outsiders have to keep feeding it?

#### Cash Flow Analysis and Ratios

> [!TL;DR] Before using ratios
> Under IFRS, interest and dividends may be classified in CFO/CFI/CFF. Rebuild CFO consistently (see classifications above) before computing cash‑flow ratios to compare firms.

#### Performance ratios (cash productivity)
- Cash flow to revenue: `CFO ÷ Net revenue` — cash collected per unit of sales.
- Cash return on assets (CROA): `CFO ÷ Avg total assets` — cash yield on asset base.
- Cash return on equity (CROE): `CFO ÷ Avg equity` — cash return on owners’ capital.
- Cash to income: `CFO ÷ Operating income (EBIT)` — earnings’ conversion to cash.
- Cash flow per share: `(CFO − preferred dividends) ÷ weighted avg common shares` — cash available per share. IFRS note: if total dividends were included in CFO, add back first, then subtract preferred dividends.

#### Coverage ratios (ability to fund obligations)
- Debt coverage: `CFO ÷ Total debt` — years of CFO to retire total debt.
- Interest coverage (cash‑based, US GAAP): `(CFO + interest paid + taxes paid) ÷ interest paid` — operating cash ability to service interest. IFRS note: if interest paid is in financing, do not add it back.
- Reinvestment ratio: `CFO ÷ Cash paid for long‑term assets (CapEx)` — ability to fund growth internally.
- Debt payment ratio: `CFO ÷ Cash paid for long‑term debt repayment` — capacity to retire principal from operations.
- Dividend payment ratio: `CFO ÷ Dividends paid` — sustainability of distributions.
- Investing + financing coverage: `CFO ÷ (Investing outflows + Financing outflows)` — can operations cover strategic cash needs?

#### IFRS adjustment reminders
- IFRS allows: interest paid (CFO/CFF), interest received (CFO/CFI), dividends received (CFO/CFI), dividends paid (CFO/CFF). Normalize classifications across firms before ratio analysis.

#### Free Cash Flow Measures

#CRITICAL_MODULE 
#### Free Cash Flow to the Firm (FCFF)

- ==Definition: cash available to all capital providers (debt and equity) after running and maintaining the business.==
- Practical formula (from cash flow statement):
  FCFF = CFO + ==Interest × (1 − tax rate)== − Capex
- Intuition:
  - Start at CFO (cash from operations).
  - Add back after‑tax interest because CFO reflects cash after paying lenders; FCFF should be pre‑financing for all providers.
  - Subtract capital expenditures needed to maintain/grow productive capacity.



> [!warning] REMEMBER
> it is important to understand the intuition why we add after tax interest. The interest is tax-deductible. Suppose you paid hundred dollars and interest and statutory tax rates are 10%. This means that $10 can be deducted from the allowance for income tax. The net interest paid by the firm is $90. 

Analyst note: Using CFO as the base captures non‑cash adjustments and working‑capital timing already; ensure interest classification is normalized (per IFRS vs U.S. GAAP) before applying the formula.

##### Free Cashflow to Equity 

This is the cash that is available only to the equity shareholders. From equity, we specifically refer to common equity **that does not include preference shares.**

  Anything paid to preferred reduces what is available to common. You already see this logic in the curriculum’s “cash flow per share” ratio: it uses (CFO − preferred dividends) to get a common per-share cash flow figure.

FCFE = CFO - Capex + Net Borrowing

From the formula above, you can easily figure out the relationship between FCFE and FCFF. 

The free cash flow to firm subtract after tax, interest, and free cash flow to equity adds net borrowing.

Write both equations again:

FCFF = CFO + Interest (1-tax) - Capex
FCFE = CFO + Net Borrowing - Capex

Subtract the second equation from the first equation

FCFF - FCFE = Interest(1-tax) - Net Borrowing

FCFE = FCFF  + Net Borrowing - Interest (1-tax)

The free cash flow to equity must contain net borrowing because the cash received from borrowing is legally owned by owners of the firm. It must subtract after tax interest because interest payments is gone cash and cannot flow to equity. 

> [! Question] NUMERICAL
> Acme Corporation reports CFO = USD 2,606. Interest paid = USD 258 and the income tax rate = 34%. During the year, Acme had cash paid for fixed capital = USD 1,300 and cash received from sale of fixed capital = USD 762. Acme also has debt repayment = USD 500
> —-
> FCFF = CFO + Interest (1-t) - Capex = 2606 + 258 (0.66) + 1300 - 762 =3 314,28
> FCFE = FCFF + Net Borrowing  - Interest (1-t) =  3314.28 + 500 - 258(0.66) = 









> [!question] Question (CFI reconstruction)
> Opening/Closing balances (Land, PP&E gross and accumulated depreciation) and notes:
> - Land: 100 → 90; gain on sale = 45; no depreciation on land.
> - PP&E gross: 500 → 600; an asset costing 100 was sold; depreciation expense = 130.
> - Accumulated depreciation: 300 → 350.
> Compute cash flow from investing (CFI).
> —
> Land sold: carrying change = −10; with gain 45 → cash inflow = 55.
> PP&E purchases: expected gross after sale = 400; closing is 600 → purchases = 200.
> Accumulated depreciation roll: 300 + 130 − x = 350 → x (AD on asset sold) = 80 → carrying amount sold = 100 − 80 = 20; cash proceeds = carrying 20 + gain 30 = 50.
> Net CFI = +55 (land) − 200 (purchases) + 50 (PP&E sale) = −95.

> [!question] Question (Dividends paid from RE)
> Retained earnings: 1,200 → 1,450; dividend payable: 100 → 120; net income = 560. Calculate dividends paid.
> —
> Dividends declared = 1,200 + 560 − 1,450 = 310. If none paid, dividend payable would be 100 + 310 = 410; actual closing is 120 → dividends paid = 410 − 120 = 290.

> [!question] Question (Cash collected from customers)
> Accounts receivable: 66 → 55; quarterly revenue = 72. How much cash collected from customers?
> —
> If none collected: AR would be 66 + 72 = 138. Actual AR is 55 → cash collected = 138 − 55 = 83.

> [!question] Question (Revenue vs AR change)
> Revenue = 100; expenses = 80; net income = 20; accounts receivable increased by 10. How much cash received from customers?
> —
> Cash received = revenue − increase in AR = 100 − 10 = 90.

### MODULE 6: ANALYSIS OF INVENTORIES

> [!info] HOW TO READ THIS MODULE
> Inventory is cash wearing a product costume.
> The learning outcomes are: lower of cost and net realizable value, inflation and deflation effects under different cost formulas, and inventory disclosures.
> If inventory rises faster than sales, slow down. It may mean growth, or it may mean the warehouse is filling with unsold stuff.

#### Inventory Measurement

> [!DANGER] MISTAKES YOU WILL MAKE
> - Storage costs for finished products are EXCLUDED (not included) in inventory. 
> - LIFO is only allowed in US GAAP

1. Manufacturers can report either separate inventory categories or one total on the balance sheet; if they report only one total, **they must disclose raw materials, work in progress, and finished goods separately in the footnotes.**
2. **Cost:** What you paid to get inventory ready for sale (purchase price + freight-in/shipping + import duties − discounts). Example: buy a jacket for $100, pay $8 shipping, get a $3 discount → cost = $105. 
3. Inventory (Both IFRS and US GAAP) = **only costs needed to make the product ready for sale**. Anything inefficient, unnecessary, or not part of production → expense immediately.  If you wrongly include them → profit looks higher now, but it’s fake (just delayed costs).

> [!tip] HAMMER THIS INTO YOUR HEAD
> **“Did this cost help create the product?”**  
>   → Yes → inventory 
>   → No → expense

###### INVENTORY VALUATION 

4. **Methods allowed**    
    - IFRS → Specific ID, FIFO, WAC        
    - US GAAP → Specific ID, FIFO, WAC + LIFO  
        → _Only difference = LIFO allowed in US GAAP_     
5. **Core idea (what method does)**    
    - It decides **which cost is assigned to goods sold**        
    - Physical flow ≠ accounting flow        
6. **Flow (how cost moves)**    
    - Purchase/produce → goes to **Inventory (Balance Sheet)**      
    - Sell → moves to **COGS (Income Statement)**        
    - Method decides → _which layer of cost leaves first_
7. Choice of inventory is irrelevant if prices remain the same. 
8. **Specific identification** → track exact cost per item; sold item carries its own cost  
    _Example:_ buy 3 cars at 10k, 12k, 15k → sell the 15k car → cost of sales = 15k    
9. **First-in, first-out** → oldest cost leaves first, newest stays  
    _Example:_ buy 100 units at 10, then 100 at 12 → sell 100 → cost of sales = 100×10, inventory = 100×12    
10. **Weighted average cost** → average all costs, same cost for all units  
    _Example:_ buy 100 at 10 and 100 at 12 → average = 11 → sell 100 → cost of sales = 100×11, inventory = 100×11    
11. **Last-in, first-out (US GAAP only)** → newest cost leaves first, oldest stays  
    _Example:_ buy 100 at 10, then 100 at 12 → sell 100 → cost of sales = 100×12, inventory = 100×10**
12. **Net realizable value (NRV):** Expected selling price minus costs to complete and sell. Example: expect to sell for $110, and it will cost $4 to finish/pack and $3 selling commission → NRV = $103.
13. **Market (Replacement Cost):** If you sold everything today at cost, what will you get.
14. **Lower-of-cost-or-NRV rule:** Carry inventory at the lower number. With cost $105 and NRV $103, carry at $103 and record a $2 write-down in income.
15. IFRS: Inventory at the lower of cost or net realizable value (NRV). NRV = expected sales price − selling and completion costs. Write-downs hit income (separate line or COGS). **Subsequent write-ups allowed, but only up to the prior write-down (cannot exceed original cost)**.
16. U.S. GAAP: If not using LIFO/retail, measure at lower of cost or NRV. If using LIFO or the retail method, measure at lower of cost or market (LCM) where market = replacement cost, bounded by ceiling = NRV and floor = NRV − normal profit margin. **No write-ups permitted under U.S. GAAP (applies to both LCNRV and LCM users).**
17. **Periodic** = calculate inventory and cost of sales **at the end***. *Perpetual** = update inventory and cost of sales **every transaction**. Always know inventory in real time. 
   
> [!warning] REMEMBER
> 1. LCNRV (lower of cost or net realizable value): **Compare cost vs NRV;** carry the lower; write down the difference to income.
>    Example: cost = $105, NRV = $103 → carry $103; write-down = $2. **If NRV exceeds cost, carry the cost**
> 2. LCM (lower of cost or market): **“Market” = replacement cost, capped by NRV (ceiling) and floored by NRV − normal profit (floor).** Carry lower of cost or market.
>    Example: cost = \$210; NRV = \$203; normal profit = \$12 
> 			 → ceiling = NRV = \$203; 
> 			 → floor = NRV - PM = \$191; 
> 			 → replacement cost = \$197 → market = \$197 
> 			 → carry \$197 because \$197 $\in$ \[191, 203\]; 
> 			 → write-down = Cost - Carry = \$13.
> 3. Retail method (inventory estimation): Compute cost-to-retail ratio = goods available at cost ÷ at retail; multiply by ending inventory at retail to estimate ending inventory at cost.
>    Example: goods available: cost $600, retail $1,000 → ratio = 60%. Sales = $800 → ending at retail = $200 → ending at cost = $200 × 60% = $120.

> [!tip] HAMMER THIS INTO YOUR HEAD
> - LCM = lower of cost or market; “market” is replacement cost, capped by NRV (ceiling) and floored by NRV − normal profit (floor).
> - IFRS and US GAAP have same aim: don’t overstate inventory; losses hit income.
> - IFRS (LCNRV): compare to NRV; write-ups allowed up to prior write-downs.
> - U.S. GAAP: LIFO/retail use LCM with ceiling/floor around replacement cost; no write-ups. Non-LIFO/retail uses LCNRV (same NRV test).
> - Memory hook: IFRS can “reverse”, upto previous write-down; GAAP “locks” the loss.
18. Notes: With inflation, LIFO ending inventory reflects older/cheaper costs, so LIFO firms are less likely to trigger write-downs than FIFO/average cost users. Certain commodity inventories (e.g., agricultural, mineral, precious metals) may be reported at NRV with unrealized gains/losses recognized in income when active markets exist.

19. Disclosures — inventory (IFRS vs U.S. GAAP)
	   - Both: accounting policy and cost formula (e.g., FIFO/LIFO/average); carrying amounts by category (raw materials, WIP, finished goods/merchandise); amount recognized as expense (COGS); inventory write-downs recognized; inventories pledged as collateral.
   - **IFRS only: reversals of write-downs and the circumstances; carrying amount of any inventories measured at fair value less costs to sell**.
   - **U.S. GAAP only: LIFO reserve disclosure for LIFO users; no reversals permitted (so no reversal disclosure).**

> [!question] QUESTION — Inventory write-down
> A company sells digital cameras. Per-unit information: original cost = $210; expected sales price = $225; selling costs = $22; normal profit margin = $12; replacement cost = $197. What are the per-unit carrying values using (1) lower of cost or NRV and (2) lower of cost or market?
> 
> ---
> - Compute NRV: $225 − $22 = $203.
>   Lower of cost or NRV (IFRS, and U.S. GAAP when applicable): compare cost $210 vs NRV $203 → carrying value = $203; write-down = $210 − $203 = $7 (recorded in income via COGS or a separate line).
> - Compute Market = Replacement Cost = 197
>   Make sure, ceiling NRV = $203 and floor NRV - Margin = $191 is respected.
>   FINAL MARKET = \$197
>   Write down = \$210 - \$197 = \$13 

> [!question] QUESTION 2 — Inventory write-up after prior write-down
> In the year after the write-down above, NRV and replacement cost each increase by $10. What is the impact under IFRS and under U.S. GAAP?
> 
> ---
> 
> - New NRV = $203 + $10 = $213; 
>   new replacement cost = $197 + $10 = $207.
> - IFRS: write-up permitted but limited to reversing prior write-down. Prior write-down was $7; carrying value increases from $203 to $210 (cannot exceed original cost $210). Recognise a $7 gain (separate line or reducing COGS).
> - U.S. GAAP: no write-up allowed; carrying value remains at $197. The benefit appears later as higher profit when inventory is sold (lower COGS).

8. When inventory is written down:
	- Inventory is lower. Current assets are lower. Assets are lower.
	- Current Ratio: CA / CL goes down.
	- Inventory Turnover: COGS / Avg. Inventory rises. Days of Inventory: 365 / ITR falls. 
	- Cash Conversion Cycle: DIO + DSO - DPO falls.
	- Total Asset turnover: Sales / Avg. Assets rises. Debt to Assets rises. **Debt to Equity rises as equity falls, write-down losses hit equity**.
	- Gross Margin: GP / Sales falls (COGS ↑). Operating Margin: EBIT / Sales falls (COGS ↑). Net Margin: PAT/ Sales (COGS ↑) falls.

#### Inflation Impact on FIFO and LIFO

1. First-in, first-out (FIFO) assumes the oldest costs go to cost of goods sold first. In inflation, old cheaper costs hit expense first, so profit and ending inventory look higher.
2. Last-in, first-out (LIFO) assumes the newest costs go to cost of goods sold first. In inflation, new expensive costs hit expense first, so profit and taxes look lower.
3. In deflation, flip the logic. First-in, first-out can produce lower profit than last-in, first-out because older costs are higher.
4. The LIFO reserve is the bridge between first-in, first-out inventory and last-in, first-out inventory. Analysts use it to compare companies.

> [!info] FIFO VS LIFO (intuition first)
> Imagine a kirana store buys soap for USD 1 in January and USD 2 in December.
> Under first-in, first-out, the income statement says the sold soap cost USD 1, so profit looks fat and ending inventory looks expensive.
> Under last-in, first-out, the income statement says the sold soap cost USD 2, so profit looks thinner but closer to today’s replacement cost.
> This is why inflation makes inventory accounting matter.

#### Presentation and Disclosure

1. Inventory disclosures tell you the cost formula, carrying amount by category, write-downs, reversals, and inventory pledged as collateral.
2. The note matters because the balance sheet gives one inventory number. The note tells you whether the inventory is raw material, work in progress, finished goods, or merchandise.
3. If finished goods are piling up while sales are flat, the company may be producing more than customers want.
4. If inventory write-downs keep recurring, margins may have been too optimistic earlier.

> [!tip] REAL-WORLD HOOK
> Fashion retailers live and die by inventory. A Zara jacket that sells this month is valuable. The same jacket after the season may need a discount. Inventory is not always “almost cash.” Sometimes it is yesterday’s fashion sitting under bright store lights.

### MODULE 7: ANALYSIS OF LONG-TERM ASSETS

> [!info] HOW TO READ THIS MODULE
> Long-term assets are long promises.
> The learning outcomes are: compare intangible asset types, evaluate impairment and derecognition, and interpret disclosures for property, plant, equipment, and intangibles.
> Ask: what did the company capitalize, how long will it benefit the business, and what happens if the story disappoints?

#### Intangible Long-Lived Assets

> [!TLDR] TL;DR
> - Revaluation allowed only under IFRS; U.S. GAAP prohibits it.
> - Research is always expensed under both standards.
> - Development can be capitalized only under IFRS when six strict criteria are met.
> - U.S. GAAP expenses both research and development (software exception after technological feasibility).
> - Only capitalize costs that add future economic benefit; expense the rest.

#### 1) Measurement of Long‑Lived Assets

##### A. Cost Model (IFRS and U.S. GAAP)
- Record at historical cost minus accumulated depreciation and any impairment losses.
- Required under U.S. GAAP; permitted under IFRS.
- Example: Business car cost ₹1,000,000; accumulated depreciation ₹300,000; impairment ₹50,000 → carrying value ₹650,000.

Rules summary:
- U.S. GAAP: must use cost model (no revaluation).
- IFRS: may use cost model or revaluation model.

##### B. Revaluation Model (IFRS only)
- Periodically remeasure to fair value; then depreciate from revalued amount.
- Upward revaluation → OCI (revaluation surplus). Downward → P&L (unless reversing prior surplus).
- U.S. GAAP prohibits revaluation for PP&E and intangible assets (other than certain specialized cases not in scope here).

#### 2) Research and Development Treatment

##### A. IFRS
- Research phase: always expensed (no reliably measurable future benefit).
- Development phase: capitalize only if all six are met:
  1) Technical feasibility; 2) Intention to complete; 3) Ability to use/sell; 4) Future economic benefits; 5) Adequate resources; 6) Reliable measurement of cost.
- Capitalizable examples: direct materials/labor; testing/prototypes; engineering and design tied to the asset.
- Always expensed: admin and general overhead, training, wasted materials/inefficiencies, advertising/promotional.

##### B. U.S. GAAP
- General rule: expense both research and development.
- Software development exception:
  - Before technological feasibility → expense.
  - After technological feasibility → capitalize; maintenance/bug fixes → expense.

#### 3) General Capitalization Rule (Both IFRS and U.S. GAAP)
- Capitalize only costs that clearly add future economic benefit; expense costs that do not.
- Common “always expense” items: general/admin overhead, selling/marketing, staff training, startup losses, research phase costs, repairs that only maintain (not improve) the asset.

#### 4) IFRS vs U.S. GAAP — Snapshot
- PP&E measurement: IFRS = cost or revaluation; U.S. GAAP = cost only.
- Research: expensed under both.
- Development: IFRS may capitalize if criteria met; U.S. GAAP expensed (except software after technological feasibility).
- Software development: IFRS capitalize only when development criteria met; U.S. GAAP capitalize only after technological feasibility.

#### Impairment and Derecognition

> [!abstract] MEMORISE
> - Impairment = unexpected drop in value below carrying value.
> - Derecognition = asset is removed because it is sold, exchanged, abandoned, or retired.
> - IFRS: compare carrying value with **recoverable amount**.
> - U.S. GAAP: test with **undiscounted cash flows**, then measure with **fair value**.
> - Impairment lowers current income, but can make future ratios look better.

1. Depreciation and amortization are normal spreading of cost over useful life. Impairment is different: value falls unexpectedly below carrying value. Derecognition is the final step when the asset is sold, exchanged, abandoned, or retired.
2. IFRS (International Financial Reporting Standards): the asset is impaired when carrying value exceeds recoverable amount. Recoverable amount is the higher of fair value less selling costs and value in use. Value in use is the present value of future cash flows from continued use and disposal.

> [!tip] HAMMER THIS INTO YOUR HEAD
> U.S. GAAP impairment for held-for-use assets:
> - Test with undiscounted cash flows.
> - Measure loss with fair value.
> IFRS:
> - Compare carrying value directly with recoverable amount.

3. U.S. GAAP (Generally Accepted Accounting Principles): first apply the recoverability test. If carrying value is greater than future undiscounted cash flows, the asset is impaired. Then measure the loss using fair value, or discounted future cash flows if fair value is not known.

4. Once impairment is recorded, the asset is written down on the balance sheet and a loss goes through the income statement. Assets fall. Equity falls through retained earnings. In the impairment year, Return on Assets (ROA) and Return on Equity (ROE) usually fall because net income falls.

> [!warning] CFA TRAP
> After impairment:
> - Current-period net income usually falls.
> - Future depreciation or amortization usually falls.
> - Future ROA, ROE, and asset turnover can rise.
> This does not mean cash flow improved.

5. In later periods, depreciation or amortization will be lower because the asset now has a lower carrying amount. That can push up future net income, ROA, ROE, and asset turnover. This is an accounting effect, not proof that the business improved. The PDF also says impairment has no cash flow impact when recognized because it is an unrealized loss until disposal.

> [!abstract] MEMORISE
> Held for sale:
> - Stop depreciation and amortization.
> - Compare with fair value less selling costs.
> - Reversal is capped at the original impairment loss.

6. If the firm intends to sell the asset and the sale is probable, the asset becomes held for sale. Then depreciation or amortization stops. The asset is impaired if carrying value exceeds fair value less selling costs. If value later recovers, loss reversal is allowed for held-for-sale assets under both IFRS and U.S. GAAP, but only up to the original impairment loss.

7. Under IFRS, impairment loss on an identifiable long-lived asset held for use can also be reversed later if value recovers, but only up to the original impairment loss. Under U.S. GAAP, recovery of impairment loss for held-for-use assets is typically not allowed.

8. Derecognition rule: when a long-term asset is sold, remove it from the balance sheet and record gain or loss in the income statement as:

$$
\text{Gain or Loss on Sale} =
\text{Sale Proceeds} - \text{Carrying Value}
$$

You compare what you got in cash with what the asset was still worth on the books.

9. If the cash flow statement uses the indirect method, this gain or loss is removed from net income in cash flow from operations because the sale proceeds belong in investing cash flow, not operating cash flow.

10. Brownfield example from the PDF:

$$
\text{Carrying Value} = \$900{,}000 - \$100{,}000 = \$800{,}000
$$

$$
\text{IFRS Recoverable Amount} =
\max(\$785{,}000,\$760{,}000) = \$785{,}000
$$

$$
\text{IFRS Impairment Loss} =
\$800{,}000 - \$785{,}000 = \$15{,}000
$$

$$
\text{U.S. GAAP Impairment Loss} =
\$800{,}000 - \$790{,}000 = \$10{,}000
$$

Same asset, different reported loss, because IFRS compares directly with recoverable amount while U.S. GAAP uses an undiscounted cash flow screen first and fair value second.

#### Long-Term Asset Disclosures

| Action                              | Asset Type                                              | IFRS                                                                                                                                                                | U.S. GAAP                                                                                                                                                                 | Casual example                                                                                              |
| ----------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Initial measurement                 | Tangible long-term assets                               | International Accounting Standard 16: initially record at cost.                                                                                                     | Same as IFRS.                                                                                                                                                             | Buy a machine for USD 100; start at USD 100.                                                                |
| Subsequent measurement              | Tangible long-term asset                                | International Accounting Standard 16 allows either the cost model or the revaluation model.                                                                         | ==Cost model only. No upward revaluation for property, plant, and equipment.==                                                                                            | Building value jumps: ==IFRS may show the gain; U.S. GAAP says stay at cost.==                              |
| Depreciation                        | Tangible assets with finite useful lives                | Depreciate over useful life using a method that reflects consumption of benefits. Review useful life and residual value.                                            | Same as IFRS.                                                                                                                                                             | Truck wears out each year, so expense it slowly.                                                            |
| Capitalization of development costs | Internally generated intangible assets                  | International Accounting Standard 38 allows capitalization of development costs only when strict criteria are met. Research costs are expensed.                     | ==Research and development are generally expensed==, except some software costs after technological feasibility.                                                          | New app works: ==IFRS may capitalize development; U.S. GAAP usually expenses it.==                          |
| Amortization                        | Finite-life intangible assets                           | Amortize over useful life. Disclose useful life, amortization method, gross carrying amount, accumulated amortization, and movements.                               | Same as IFRS.                                                                                                                                                             | Patent lasts 10 years; expense it over 10 years.                                                            |
| No amortization                     | Indefinite-life intangible assets                       | Do not amortize. Test for impairment and disclose carrying amount plus why the useful life is indefinite.                                                           | Same as IFRS.                                                                                                                                                             | Brand may last forever, but still check if value cracked.                                                   |
| Impairment test                     | Long-lived assets held for use                          | International Accounting Standard 36 compares carrying amount with recoverable amount, which is the higher of fair value less costs of disposal and value in use.   | ==First test recoverability using undiscounted future cash flows.== If not recoverable, measure impairment using fair value.                                              | Factory looks weak: ==IFRS tests recoverable amount; U.S. GAAP uses an undiscounted cash-flow gate first.== |
| Impairment reversal                 | Long-lived assets held for use                          | Reversal is allowed for assets other than goodwill, capped at what carrying amount would have been without the impairment.                                          | ==Reversal is generally not allowed for assets held for use.==                                                                                                            | Bad write-down improves later: ==IFRS may reverse; U.S. GAAP usually says no.==                             |
| Held for sale                       | Long-lived assets expected to be sold                   | Stop depreciation or amortization. Measure at the lower of carrying amount and fair value less selling costs.                                                       | Same as IFRS.                                                                                                                                                             | Once the shop is for sale, stop depreciating it.                                                            |
| Derecognition                       | Sold, exchanged, abandoned, or retired long-term assets | Remove the asset and recognize gain or loss as sale proceeds minus carrying amount.                                                                                 | Same as IFRS.                                                                                                                                                             | Sell van for USD 30, book value USD 20; gain is USD 10.                                                     |
| Disclosures                         | Property, plant, equipment, and intangible assets       | Disclose methods, usewful lives, carrying amount reconciliation, impairments, reversals, restrictions, pledges, commitments, and revaluation details if applicable. | ==Disclose future amortization expense for intangible assets.== Also disclose methods, useful lives, impairment facts, fair value approach, and major intangible classes. | Intangible notes: ==U.S. GAAP gives future amortization expense; IFRS focuses more on movement details.==   |
|                                     |                                                         |                                                                                                                                                                     |                                                                                                                                                                           |                                                                                                             |

> [!tip] HAMMER THIS INTO YOUR HEAD
> 1. **IFRS = I Can Revalue.** International Financial Reporting Standards allow the revaluation model for property, plant, and equipment. US GAAP usually keeps you stuck at cost.
> 2. **GAAP = Gate First, Fair Value Second.** For held-for-use impairment, US GAAP first uses the undiscounted cash flow gate. If the asset fails the gate, then fair value measures the loss.
> 3. **IFRS = Recoverable Right Away.** International Financial Reporting Standards go straight to recoverable amount: the higher of fair value less selling costs and value in use.
> 4. **Development can become an asset under IFRS; research dies immediately.** Research is expensed. Development is capitalized only if the strict criteria are met.
> 5. **Indefinite means no foreseeable end, not immortal.** You do not amortize it, but you still test it for impairment.
> 6. **Held for sale means stop the clock.** Once an asset is held for sale, depreciation and amortization stop.

> [!abstract] MEMORISE
> - This module is about **reading the notes**, not just reading the balance sheet.
> - Property, plant, and equipment (PPE) disclosures tell you cost, accumulated depreciation, depreciation method, useful life, and movements during the year.
> - Intangible asset disclosures tell you whether useful life is finite or indefinite, amortization method, amortization expense, and movements during the year.
> - Impairment disclosures tell you what got written down, why it got written down, how fair value or recoverable amount was estimated, and where the loss hit the statements.
> - The analyst uses these disclosures to judge asset intensity, asset age, reinvestment needs, and whether reported performance is being helped or hurt by accounting estimates.

1. The learning outcome here is sacred: **analyze and interpret financial statement disclosures regarding property, plant, and equipment and intangible assets**. Do not stop at “net property, plant, and equipment went up.” Ask what changed underneath: new purchases, depreciation, impairments, disposals, revaluations, acquisitions, and foreign currency translation.

2. The balance sheet gives you the final carrying amount. The notes tell you the movie. A factory might show net property, plant, and equipment of USD 500 million, but the note may reveal that gross cost is USD 1,500 million and accumulated depreciation is USD 1,000 million. That is a very different story from a brand-new factory costing USD 500 million.

> [!info] WHY DISCLOSURES MATTER 
> Imagine two airlines both report aircraft carrying value of USD 10 billion.
> One airline bought new aircraft recently, so accumulated depreciation is low.
> Another airline has old aircraft with huge accumulated depreciation, but the same net carrying value because it once bought many more planes.
> On the balance sheet, both look equally asset-heavy.
> In the notes, one looks young and capital-hungry later; the other looks old and may need replacement sooner.
> This is why you read the note. The balance sheet gives the photo; the disclosure gives the age, wear, repairs, and hidden story.

3. Under International Financial Reporting Standards (IFRS), for each class of property, plant, and equipment, the company must disclose the measurement basis, depreciation method, useful life or depreciation rate, gross carrying amount, accumulated depreciation at the beginning and end of the period, and a reconciliation of carrying amount from beginning to end.
4. For property, plant, and equipment, the notes also disclose restrictions on title, assets pledged as security, and contractual commitments to buy more property, plant, and equipment. This matters because an asset that is pledged to lenders is not as financially flexible as a clean asset.
5. If the company uses the revaluation model under International Financial Reporting Standards, the notes must show the date of revaluation, how fair value was obtained, what the carrying amount would have been under the cost model, and the revaluation surplus. ==Under US GAAP (U.S. GAAP), the cost model is used for property, plant, and equipment.==

> [!warning] EXAM TRAP
> A higher asset value after revaluation does not mean the company earned cash. It can increase assets and equity, but the business did not suddenly sell more products.

6. For intangible assets under International Financial Reporting Standards, first split the world into **finite useful life** and **indefinite useful life**. Finite-life intangibles are amortized. ==Indefinite-life intangibles are not amortized, but they are tested for impairment.==

7. For finite-life intangible assets, the company discloses useful life or amortization rate, amortization method, gross carrying amount, accumulated amortization at the beginning and end of the period, where amortization appears in the income statement, and the reconciliation from opening carrying amount to closing carrying amount.

8. ==For indefinite-life intangible assets, the company must disclose the carrying amount and why the useful life is considered indefinite.== This is where you should slow down. “Indefinite” does not mean “immortal.” It means there is no foreseeable limit based on the information available.

9. Under U.S. GAAP, companies disclose gross carrying amount and accumulated amortization in total and by major class of intangible assets, aggregate amortization expense for the period, and estimated amortization expense for the next five fiscal years.

10. Impairment disclosures are your “what went wrong?” section. Under International Financial Reporting Standards, the company discloses impairment losses and reversals by class of asset, where they appear in the financial statements, the main asset classes affected, and the events and circumstances that caused the impairment or reversal.

11. Under U.S. GAAP, there is no reversal of impairment losses for assets held for use. The company discloses a description of the impaired asset, what caused the impairment, how fair value was determined, the amount of the impairment loss, and where the loss is recognized.

12. Orange, the French telecom company used in the curriculum, is a perfect example. In 2016, it recognized large impairment losses because assumptions changed in places such as Poland, Egypt, Congo, Cameroon, and Niger. The story was not just “assets fell.” The notes explained the business reasons: weaker competitiveness, worse revenue assumptions, country risk, currency depreciation, political uncertainty, lower purchasing power, regulation, and more competition.

13. Real-world memory hook: WorldCom became infamous partly because it treated roughly USD 3.8 billion of ordinary line costs as capital assets instead of expenses. A normal telecom would expense those network access costs as the service is used. WorldCom parked them on the balance sheet and dripped them slowly through depreciation, which made profit look better for a while. Different scandal, same analyst instinct: when assets grow suspiciously and expenses look too smooth, read the long-term asset notes like a detective.

14. Another memory hook: telecom companies often look like asset mountains. They spend heavily on towers, fiber networks, licenses, and software. If customer growth slows but the network keeps getting older, the notes will tell you whether management is still investing enough or just squeezing old assets.

##### WHERE LONG-TERM ASSET DISCLOSURES SHOW UP

15. Balance sheet: shows the carrying value of property, plant, and equipment, goodwill, and other intangible assets.

16. Income statement: may show depreciation and amortization separately, or bury them inside cost of sales or selling, general, and administrative expenses depending on presentation.

17. Statement of cash flows: purchases and sales of fixed assets appear in investing cash flow. If the indirect method is used, depreciation and amortization are usually added back while reconciling net income to operating cash flow because they are non-cash charges.

18. Notes: usually give the richest detail: accounting methods, useful life ranges, historical cost by asset class, accumulated depreciation, impairment movement, amortization movement, and capital commitments.

> [!tip] HAMMER THIS INTO YOUR HEAD
> The financial statements give you **where the number landed**.
> The notes give you **how the number moved**.

##### ANALYSIS RATIOS FROM DISCLOSURES

19. Fixed asset turnover measures how much revenue the company generates from its average net property, plant, and equipment.

$$
\text{Fixed Asset Turnover} =
\frac{\text{Revenue}}{\text{Average Net Property, Plant, and Equipment}}
$$

High fixed asset turnover usually means the company generates more sales per unit of fixed assets. But do not blindly call it “better.” A software firm and a steel plant should not have the same asset intensity.

20. Apple and Walmart make this idea easy. An Apple Store has historically generated around USD 5,500 of sales per square foot, while Walmart has been closer to around USD 400 per square foot. Apple can sell expensive phones, laptops, and watches from a small premium store. Walmart needs massive stores, warehouses, parking lots, and shelves to sell lower-margin goods. The ratio is not saying Apple is morally better than Walmart. It is saying the business models convert physical space and assets into sales very differently.

21. Average age of depreciable assets uses accumulated depreciation divided by annual depreciation expense.

$$
\text{Estimated Average Age} =
\frac{\text{Accumulated Depreciation}}{\text{Annual Depreciation Expense}}
$$

Plain English: if the company has already recorded USD 70 of accumulated depreciation and records USD 10 of depreciation each year, the asset base looks about 7 years old.

22. Estimated remaining useful life uses net property, plant, and equipment divided by annual depreciation expense.

$$
\text{Estimated Remaining Useful Life} =
\frac{\text{Net Property, Plant, and Equipment}}{\text{Annual Depreciation Expense}}
$$

Plain English: if net property, plant, and equipment is USD 60 and depreciation is USD 10 each year, the assets look like they have about 6 years left.

23. Estimated total useful life uses historical cost divided by annual depreciation expense.

$$
\text{Estimated Total Useful Life} =
\frac{\text{Historical Cost}}{\text{Annual Depreciation Expense}}
$$

These three ratios are connected:

$$
\text{Estimated Total Useful Life}
=
\text{Estimated Average Age}
+
\text{Estimated Remaining Useful Life}
$$

24. Reinvestment check: compare capital expenditures with depreciation expense.

$$
\text{Capital Expenditures to Depreciation} =
\frac{\text{Capital Expenditures}}{\text{Depreciation Expense}}
$$

If capital expenditures are consistently below depreciation, the company may be underinvesting in productive capacity. If capital expenditures are consistently above depreciation, it may be expanding or replacing assets aggressively.

> [!question] ASSET AGE
> Problem: A company reports historical cost of property, plant, and equipment of USD 100 million, accumulated depreciation of USD 60 million, net property, plant, and equipment of USD 40 million, and annual depreciation expense of USD 10 million.
> ---
> Solution:
> $$ \text{Estimated total useful life} = \frac{100}{10} = 10 \text{ years} $$
> $$ \text{Estimated average age} = \frac{60}{10} = 6 \text{ years} $$
> $$ \text{Estimated remaining useful life} = \frac{40}{10} = 4 \text{ years} $$
> Explanation: The asset base looks more than halfway used up. That does not prove replacement is urgent, but it tells you where to investigate.

25. These asset age ratios work best when assets are reported under the cost model, depreciation is roughly straight-line, and land is not a big part of property, plant, and equipment. Land is not depreciated, so including land can muddy the calculation.

26. Be careful comparing companies. Different asset mixes, depreciation methods, useful life estimates, acquisitions, divestitures, revaluations, and disclosure categories can make two companies look different even before business performance enters the picture.

27. The exam angle is simple: disclosures help you answer four questions. What assets does the company own? How old are they? How fast is the company replacing them? Did any write-down reveal that old assumptions were too optimistic?

> [!tip] Quick checks
> - Gross cost minus accumulated depreciation should connect to net property, plant, and equipment, unless impairments, revaluations, disposals, or other adjustments complicate the bridge.
> - If useful life is longer, annual depreciation is lower, so current profit looks higher.
> - If accumulated depreciation is high relative to gross cost, the asset base may be older.
> - If impairment is large, ask what assumption broke: demand, price, technology, country risk, discount rate, or regulation.

### MODULE 8: TOPICS IN LONG-TERM LIABILITIES AND EQUITY

> [!info] HOW TO READ THIS MODULE
> This module is about promises that do not always look like normal debt.
> The learning outcomes are: explain leases from lessee and lessor perspectives, explain defined contribution plans, defined benefit plans, and stock-based compensation, and read long-term liability disclosures.
> The trick is simple: liabilities are promises, not just bank loans.

#### Leases

#### Lessee accounting summary (IFRS 16 vs U.S. GAAP ASC 842)

- Balance sheet (both): recognize Right‑of‑Use (ROU) asset and Lease liability for substantially all leases (short‑term/low‑value exceptions under IFRS policy).
- Lease liability (both): effective interest rate method (EIRM): interest = opening liability × rate; principal = cash payment − interest; closing liability = opening + interest − payment.

IFRS 16 (single model):
- P&L shows separate depreciation of ROU asset (typically straight‑line) and interest expense on the liability → front‑loaded total expense.
- ROU asset falls linearly; liability falls non‑linearly (slow early, faster later) → often a net lease liability position over time.

U.S. GAAP ASC 842:
- Finance lease: same economics/presentation as IFRS (separate interest + amortization).
- Operating lease: still recognize ROU + liability and EIRM for liability, but present a single straight‑line lease expense; compute period amortization as a plug so that interest + amortization equals straight‑line lease cost.

Memory hooks:
- “If you lease it, you show it.” (ROU + liability on balance sheet.)
- “GAAP: one balance sheet; two income‑statement shapes.”

> [!tip] REAL-WORLD HOOK
> Airlines and retailers love leases because they can control expensive assets without buying them upfront. Before modern lease rules, many operating leases sat off the balance sheet, so companies looked less leveraged than they really were. The new rule says: if you control the asset and owe payments, show the asset and the liability.
	
1. An alternative way to look at a lease is: **taking a loan and buying the asset.**
2. To be called a lease, a lessee needs to have following characteristics:
	- Asset must be **Identified** a.k.a it should exist.
	- Lessee should have exclusive control of asset and must derive all the economic benefits from the asset. 
3. Under IFRS and U.S. GAAP, in a **financing lease** ownership and risks should be transferred to lessee. You break it and you pay for it. If either the benefits or the risks of ownership are not substantially transferred, it is an operating lease.

> [!warning] Remember
> Financing Lease:
> 	- **Present Value of payments >= Asset Fair Value**
> 	- You have an option to buy the asset and get rid of the lease.
4. Accounting treatment would be:
	- On liabilities side, you would create a lease liability that would be amortized with time.
	- On asset side, you would create ROU asset that would depreciate with time.


> [!question] QUESTION
> The Affordable Company (Affordable) leases a machine for its own use for four years with annual payments of $10,000. At the end of the lease, which is also the end of the machine's useful life, Affordable will return the machine to the lessor. The interest rate implicit in the lease is 5%. Assuming that the ROU asset is amortized on a straight-line basis over the term of the lease, calculate the impact of the lease on Affordable's financial statements for each of the four years.
> 
> Fair value of Asset: PMT = -10000, I/Y = 5, FV = 0, CPT ⟶ PV = 35549
> 
> Asset Amortisation per year = 35549 / 4 = 8887.25
> 

6. From Lessor's POV: **“What asset do I carry?”**
	- **Finance lease:** you stop carrying the physical asset and carry a **financial asset (lease receivable)** instead.  
	- **Operating lease:** you keep carrying the **physical asset (PP&E at cost − accumulated depreciation)**.

7. Lease receivable is measured as the **present value of future lease payments**, discounted using the **rate implicit in the lease**.
8. All lease payments represent operating revenues regardless of lease classification. **The entire lease payment (BOTH principal and interest) goes to CFO**

> [!question] QUESTION
> Financing Lease: $4,000 at each year-end for 3 years for PP&E worth $11,000. Rate implicit in the lease: 6%. Show the treatment in the accounts of the lessor.
> 
> PV = $10,692. This will be recorded as **Lease Receivable on Assets side of Balance Sheet** and **PP&E worth $11000 would be derecognized**. ==The asset swap created a spread of $308. The Equity (liability) must decline by $308 to show this loss. This "Loss at Lease inception" is also shown on P/L.==
> 
> AMORTISATION SCHEDULE
> 
| OB    | PMT  | P    | I   |
| ----- | ---- | ---- | --- |
| 10692 | 4000 | 3358 | 642 |
| 7332  | 4000 | 3560 | 440 |
| 3772  | 4000 | 3772 | 226 |
> 
> INCOME STATEMENT:
> 
> Y1:	Income from Lease =  $642. Loss on lease inception = $308
> 
> CASHFLOW STATEMENT
> 
> $4000 goes in CFO
> Under **both US GAAP and IFRS (for the lessor)**, the **interest received in a lease is not split out**—the **entire lease cash receipt** (which includes the interest component) is reported in **CFO (operating activities)**.
> 
> BALANCE SHEET
> 
> Y1: 
> - Assets: Lease Receivable is recorded as $10,692. PP&E is derecognized by $11,000. Liability: Equity is decreased by $308.
> - Lease Receivable drops by 3358 (Asset). Cash Balance increases by 4000 (Asset). Equity increases by 642 (Liability) 



> [!QUESTION] QUESTION
> A lessor buys equipment for **$50,000** on Jan 1, Year 1. It is leased out under an **operating lease** for **3 years** with **annual rent of $12,000 paid at each year-end**. The equipment is depreciated **straight-line over 5 years** with **$0 residual**. Ignore taxes. Required: how the lessor’s **balance sheet impact** at the end of **Year 1, Year 2, Year 3** (PP&E net, accumulated depreciation, cash change). Also state whether a **lease receivable** is recognized.


10. IFRS vs US GAAP: lessor balance sheet is basically the same (don’t overthink).

#### Deferred Compensation and Disclosures

> [!abstract] MEMORISE THIS FOR EFFICIENCY
> 


1. A pension is delayed salary. **Defined Contribution (DC)** ⟶ firm promises _how much it puts in_, employee bears **investment risk**. For example NPS and EPF in India and PPK in Poland. My employer puts in money, it gets invested into the market. If market collapses, everything turns to ashes. 
2. **Defined Benefit (DB)** ⟶ firm promises _how much you'll get_, employer bears investment + longevity risk. I am promised a pension of PLN 10k per month, no matter if market collapses or booms. For example, ZUS contributions or Military pensions. **Employer bears market risk and employee bears longevity risk.** If I die, the pension vanishes. 
3. Defined benefit is complicated. ==It is recorded as a **long term liability** on the balance sheet and on part of employers, it involves forecasting market cycles, interest rates, expected lifespan etc.==
4. Defined Benefit (DB) plans create a **net position** on the balance sheet = what the firm owes − what it has set aside.  **Assets > obligation ⟶ asset. Assets < obligation ⟶ liability**.  Annual changes flow partly through P&L, partly through OCI.
5. Funded status = **Fair value of plan assets − Pension obligation** **Overfunded** means I have saved more money (Plan Assets) that what my obligation demands (Pension to be paid), which creates a net asset position. **Underfunded** creates a net liability position.
6. IFRS = Pay for work + interest in P&L, dump all shocks into OCI GAAP = smooth P&L via amortization.


> [!question] QUESTION
> **Start**: Obligation = 1,000, Assets = 900, Net liability = 100, Discount rate = 10%. 
> **Year events**, Service cost = 50, Past service cost = 20, Actual asset return = 40, Expected return = 90, Actuarial Loss = 60. Identify what goes into OCI and what goes into P&L. 
> 
> #### IFRS
> **Any admin,  service cost (past or present) goes into P&L.** For example: Service + Past Service = 70
> **Any interest goes into P&L:** 10% of 1000 = 100
> **Any return or market shock goes to OCI:** Asset return surprise - Actuarial Loss = (40-90) - 60 = -110
> 
> #### US GAAP
> **PnL:** 
> 	- Current Service Cost + Interest = - 50 - 100 = -150
> 	- Expected Return on Assets = 90
> **OCI:**
> 	- Past Service Cost = -20
> 	- Actuarial Loss = -60

7. One of the differences from IFRS pension accounting is that past service costs are recognized in other comprehensive income, rather than in the income statement as part of employee service costs. These costs are amortized over the employees' service period. **Actuarial gains and losses are typically treated the same way, but U.S. GAAP allows firms to recognize them in the period incurred.**

> [!tip] HAMMER THIS INTO YOUR HEAD
> 
> Past service cost for Defined Contribution plans goes into OCI under US GAAP and PnL under IFRS.
8. ==Pension cost is **not shown as a separate line item** for manufacturing firms. It is **embedded** in expenses based on employee role.== Factory workers ⟶ pension cost goes into **inventory ⟶ COGS**. Office/admin staff ⟶ pension cost goes into **SG&A / salaries**. Income statement hides pension cost inside operating costs. Therefore, analysts **must read the notes** to see total pension expense and assumptions.
9. Stock options, on the other hand, may cause managers to take on too much risk, because options have asymmetrical payoffs. An option has value if the stock price is above the exercise price, but its value cannot fall below zero if the stock price is below the exercise price.
10. **Grant-date fair value rule (IFRS = GAAP)**: stock-based compensation is measured at **fair value on grant date** and expensed **over the vesting (service) period**; immediate vesting ⟶ full expense on grant date, delayed vesting ⟶ straight-line over service period.
11. These are shares awarded outright, with restrictions (Restricted Stock Units (RSU)) , or contingent on performance (Performance Shares).    
12. **Stock grants vs performance shares**:    
    - **Stock grants / RSUs** ⟶ FV = **share price at grant**, expense based only on service/vesting.        
    - **Performance shares** ⟶ vesting tied to **non-market metrics** (ROE, EPS, margins); fair value still set at grant but **managerial incentives can distort accounting choices**.        
13. Compensation expense exists **before shares are received**; if vesting conditions aren't met, expense is reversed.
14. **Stock grants (RSUs)**: the share price on the grant date is taken as the cost; this cost is charged to the income statement over the vesting period (or all at once if vesting is immediate); the same amount is added to equity; example: grant value 100 with 2-year vesting ⟶ expense 50 each year, equity increases by 50 each year, and at vesting it is moved into share capital and APIC.    
15. **Stock grants – why equity doesn't change**: the expense reduces retained earnings, but equity is increased by the same amount through APIC, so total equity stays the same; example: expense 50 ⟶ retained earnings −50, APIC +50.
16. **Stock options**: the option's value is calculated using an option pricing model at grant and expensed evenly over the vesting period; **until exercise, only APIC increases and no shares are issued;** example: option value 80 over 4 years ⟶ expense 20 per year, APIC +20 per year.    
17. **Stock options – exercise stage**: when employees exercise, the company receives cash equal to the strike price and issues shares; equity increases by the cash received, split between share capital (par) and APIC, and any accumulated reserve is moved into APIC; example: strike 50 ⟶ cash +50, share capital +1, APIC +49 plus the reserve.

> [!tip] HAMMER THIS INTO YOUR HEAD
> - Suppose UBS gave me a stock as salary. The price is 100 CHF. In this case retained earnings will go down by 100 (stock got charged on PnL) and APIC will increase by 100. **No new shares are issued**. If I don't complete 3 years, they will reverse the charge on PnL and APIC will go down.
> - Suppose UBS gave me a deferred stock (100 CHF) as salary that I can vest at the end of 3 years of service. Each year UBS will show a compensation expense of 33.33 CHF **always calculated on the price @ grant date** and APIC rises by 33.33 CHF every year.
> - Suppose UBS gave me a call option to exercise at the end of 3 years of service at strike price of 100 CFH. The Black Scholes value is 10 CHF, which is shown in income statement. If I exercise it, then UBS gets the strike price which moves into APIC and issues me shares. **UBS does not issue new shares**
18. Phantom stock a.k.a fake stock is a **cash bonus plan** that mimics share price performance, where employees receive **cash linked to the company's stock value without receiving actual shares or ownership**.

### MODULE 9: ANALYSIS OF INCOME TAXES

> [!info] HOW TO READ THIS MODULE
> Tax accounting is two scoreboards at once: accounting profit and taxable income.
> The learning outcomes are: separate accounting profit, taxable income, taxes payable, and income tax expense; explain deferred tax assets and liabilities; compare statutory, effective, and cash tax rates; and read tax disclosures.
> Ask: is this tax number a cash bill today, a timing difference, or a permanent advantage?

#### Differences Between Accounting Profit and Taxable Income

1. Accounting profit is profit before tax under accounting rules.
2. Taxable income is income under tax law.
3. Taxes payable is the cash tax owed now.
4. Income tax expense is the tax cost reported in the income statement, including current tax plus deferred tax effects.
5. Temporary differences reverse later and create deferred tax assets or deferred tax liabilities.
6. Permanent differences never reverse and do not create deferred tax items.

> [!info] TEMPORARY VS PERMANENT (intuition first)
> If a company gets faster tax depreciation today, tax is lower now but higher later. That is temporary.
> If a government fine is never tax deductible, the difference never comes back. That is permanent.
> Temporary is a timing problem. Permanent is a forever problem.
> Suppose you have operating profit before interest and tax of USD 100. Accounting may call it profit today, while tax law may allow deductions at a different speed. That timing gap is where deferred tax is born.

#### Deferred Tax Assets and Liabilities

> [!abstract] MEMORISE
> - Deferred tax comes from **temporary differences** between accounting profit and taxable income.
> - Permanent differences do **not** create deferred tax.
> - Deferred tax asset = tax benefit you expect to use later.
> - Deferred tax liability = tax bill pushed into the future.
> - Income tax expense is not just cash tax paid today. It also includes changes in deferred tax assets and deferred tax liabilities.
> - For analysis, ask whether the deferred tax item will reverse, whether cash tax will actually be paid, and whether management is being realistic about future profits.

1. The learning outcome here is: **explain how deferred tax liabilities and assets are created and the factors that determine how deferred tax liabilities and assets should be treated for financial analysis**. In plain English: accounting and tax rules often do not recognize income and expenses at the same time. Deferred tax is the bridge between the two worlds.

2. Accounting profit is profit before tax on the income statement. Taxable income is income calculated using tax law. Taxes payable is the amount owed to the tax authority now. Income tax expense is the tax cost reported on the income statement after matching current and future tax effects.

3. Do not mix these up:

| Term | Plain English |
|---|---|
| Accounting profit | Profit before tax under accounting rules |
| Taxable income | Income under tax rules |
| Taxes payable | Cash tax owed now |
| Income tax expense | Tax expense shown in the income statement |
| Tax base | Value of an asset or liability for tax purposes |
| Carrying amount | Value of an asset or liability in the financial statements |

4. Temporary difference means the accounting-tax difference reverses later. Permanent difference means it never reverses. This is the whole fork in the road. Temporary difference creates deferred tax. Permanent difference does not.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Temporary difference = timing problem.
> Permanent difference = forever problem.
> Deferred tax exists only for timing problems.

5. Example of a permanent difference: a fine may be recorded as an expense in accounting profit but may not be deductible for tax. The tax authority basically says, “Nice try, you cannot reduce taxable income for that.” Since the difference will never reverse, no deferred tax asset or deferred tax liability is created.

6. Example of a temporary difference: depreciation. A company may use straight-line depreciation in its financial statements but faster depreciation for tax. Total depreciation over the asset’s life is still the same, but the timing is different. That timing gap creates deferred tax.

> [!info] WHY DEFERRED TAX EXISTS (intuition first)
> Imagine Raj buys a machine for USD 100.
> In accounting books, he deducts USD 10 every year for 10 years.
> For tax, the government lets him deduct USD 25 in the first year.
> In year 1, Raj pays less tax because tax depreciation is bigger than accounting depreciation.
> But he did not escape tax forever. He just used more deduction early, so he has fewer deductions left later.
> That future tax catch-up is the deferred tax liability.
> Deferred tax is built this way because accounting wants to match tax expense with the economic profit of the period, not only with the cash paid to the tax department today.

##### HOW TO DECIDE DEFERRED TAX ASSET VS LIABILITY

7. For assets, use this rule:

| Asset comparison | Result |
|---|---|
| Carrying amount > tax base | Deferred tax liability |
| Carrying amount < tax base | Deferred tax asset |

8. For liabilities, the rule flips:

| Liability comparison | Result |
|---|---|
| Carrying amount > tax base | Deferred tax asset |
| Carrying amount < tax base | Deferred tax liability |

9. The easiest memory: if the tax authority has been paid too much today or gave you too little deduction today, you may have a deferred tax asset. If the tax authority has been paid too little today because you got tax relief early, you may have a deferred tax liability.

10. Accelerated tax depreciation usually creates a deferred tax liability. The company deducts more depreciation for tax now, so taxable income and cash taxes are lower today. Later, tax depreciation will be lower, so taxable income and cash taxes will be higher. That future tax payment is the liability.

11. Advance payments from customers can create a deferred tax asset if tax law taxes the cash immediately but accounting revenue is recognized only later when the company performs. The company pays tax before recognizing accounting income, so it has effectively prepaid tax.

12. Research costs can create a deferred tax asset if accounting rules expense the cost immediately but tax rules require capitalization and amortization. Carrying amount may be zero, but tax base is still positive. That future tax deduction has value.

13. Development costs can create a deferred tax liability if the accounting carrying amount is higher than the tax base. The company has recognized an asset in the financial statements, but the tax base is lower, so future taxable amounts may be higher.

> [!warning] EXAM TRAP
> Do not say “asset always means deferred tax asset.” Wrong.
> For an asset, carrying amount greater than tax base gives a deferred tax liability.
> For a liability, carrying amount greater than tax base gives a deferred tax asset.

##### CORE FORMULA

14. Income tax expense combines current taxes and deferred tax movement.

$$
\text{Income Tax Expense}
=
\text{Taxes Payable}
+
\Delta \text{Deferred Tax Liability}
-
\Delta \text{Deferred Tax Asset}
$$

> [!tip] Notation in simple language
> - Taxes payable = cash tax owed for the current period.
> - Delta deferred tax liability = increase or decrease in future tax obligation.
> - Delta deferred tax asset = increase or decrease in future tax benefit.

15. If deferred tax liability increases, income tax expense rises above taxes payable. If deferred tax asset increases, income tax expense falls below taxes payable. This is why cash tax and income tax expense can tell very different stories.

16. Reston Partners example from the curriculum: equipment cost is GBP 20,000. Accounting depreciation is GBP 2,000 per year over 10 years. Tax depreciation is GBP 2,857 per year over 7 years. Tax depreciation is faster, so tax base falls faster than carrying amount. Carrying amount exceeds tax base, so the company records a deferred tax liability.

> [!question] DEFERRED TAX LIABILITY
> Problem: A machine has carrying amount of USD 80 and tax base of USD 60. The tax rate is 30%. What deferred tax item is created?
> ---
> Solution:
> $$ \text{Temporary Difference} = 80 - 60 = 20 $$
> $$ \text{Deferred Tax Liability} = 20 \times 30\% = 6 $$
> Explanation: This is an asset whose carrying amount exceeds its tax base, so it creates a deferred tax liability of USD 6.

17. If the statutory tax rate changes, deferred tax assets and deferred tax liabilities must be remeasured. A lower future tax rate reduces the value of both. A deferred tax asset becomes less valuable because each future deduction saves less tax. A deferred tax liability becomes smaller because each future taxable amount costs less tax.

> [!info] WHY TAX RATE CHANGES HIT DEFERRED TAX (intuition first)
> Suppose you have a coupon that lets you deduct USD 100 from taxable income next year.
> If the tax rate is 35%, that coupon saves USD 35.
> If the tax rate falls to 21%, the same coupon saves only USD 21.
> Same deduction, lower tax saving.
> That is why a deferred tax asset falls when tax rates fall.
> Now flip it: if you owe tax later on USD 100, you would rather owe at 21% than 35%.
> That is why a deferred tax liability also falls when tax rates fall.

##### REALIZABILITY AND VALUATION ALLOWANCE

18. A deferred tax asset is only useful if the company expects enough future taxable profit to use it. A loss-making company can have a big deferred tax asset on paper, but if it never earns taxable income, that asset is like a discount coupon for a shop you will never visit.

19. Under International Financial Reporting Standards (IFRS), if future economic benefits are doubtful, an existing deferred tax asset is reversed. Under US GAAP (U.S. GAAP), a valuation allowance is created to reduce the deferred tax asset to the amount more likely than not to be realized.

20. Micron Technology in the curriculum had large tax loss carryforwards and a large valuation allowance. That allowance was basically management saying: “We have tax benefits on paper, but we are not confident enough that all of them will be usable.” If profits improve later, reducing the allowance can increase reported earnings even though no new cash came in.

21. This is where analysts should be skeptical. A company can suddenly look more profitable because it releases a valuation allowance, not because the core business improved. After the global financial crisis, banks and cyclical companies had huge tax loss carryforwards. When profits came back, some of those tax assets became usable and accounting earnings got a boost. Useful, yes. But not the same as selling more products.

22. For acquisition analysis, tax loss carryforwards can be valuable. If a profitable acquirer can use the target’s losses to reduce future taxes, it may be willing to pay more. The value depends on the acquirer’s tax rate, expected taxable income, and when the tax benefits can actually be used.

##### HOW ANALYSTS TREAT DEFERRED TAX LIABILITIES

23. Treat a deferred tax liability as a real liability if it is expected to reverse and require a future cash tax payment. Example: accelerated tax depreciation usually reverses when tax depreciation becomes lower later.

24. Treat a deferred tax liability more like equity if it is not expected to reverse. If a company keeps buying new assets and keeps rolling forward the same kind of tax deferral, the cash payment may be pushed out for a very long time.

25. Exclude the deferred tax liability from both debt and equity if the amount and timing of reversal are too uncertain. That is the cleanest treatment when you cannot honestly say whether it behaves like debt or equity.

> [!tip] HAMMER THIS INTO YOUR HEAD
> Deferred tax liability:
> - Expected to reverse soon = treat like liability.
> - Not expected to reverse = may behave like equity.
> - Timing and amount unclear = exclude from both debt and equity for ratio analysis.

26. Real-world hook: Berkshire Hathaway has long benefited from tax deferral because unrealized gains and other timing differences can postpone taxes for years. Think of it like an interest-free loan from the tax authority. It is not free money forever, but if the payment is delayed for decades, the economic value is very real.

27. Real-world danger: tax assets can flatter a weak company. A bank with large losses may show deferred tax assets, but those assets depend on future taxable profits. If the bank cannot earn enough, the asset must be reduced. That reduction hits income and equity, which can make already weak capital ratios look worse.

> [!question] TAX EXPENSE BRIDGE
> Problem: A company reports taxes payable of USD 100. During the year, deferred tax liability increases by USD 20 and deferred tax asset increases by USD 5. What is income tax expense?
> ---
> Solution:
> $$ \text{Income Tax Expense} = 100 + 20 - 5 = 115 $$
> Explanation: The company owes USD 100 now, added USD 20 of future tax obligation, and added USD 5 of future tax benefit. Reported income tax expense is USD 115.

28. The story test is the best test. Deferred tax asset means “future tax relief, if usable.” Deferred tax liability means “future tax payment, if it reverses.” The analyst’s job is not to memorize labels. The analyst’s job is to ask: will this actually become cash tax, cash saving, or nothing?

> [!tip] Quick checks
> - Permanent difference creates no deferred tax item.
> - Faster tax depreciation usually creates a deferred tax liability.
> - A valuation allowance increase usually increases income tax expense and reduces earnings.
> - A lower tax rate reduces both deferred tax assets and deferred tax liabilities.
> - Deferred tax assets are only high quality when future taxable profit is believable.

#### Tax Rates and Disclosures

1. Do not look at the tax line only as a percentage of sales and stop there. The sharper check is **income tax expense / earnings before tax** because that gives you the **effective tax rate**. That tells you what share of pretax profit the company is actually handing over in tax.
2. If the effective tax rate falls, do not clap immediately. Ask the obvious follow-up: did the business genuinely move profit into a lower-tax jurisdiction, or did something one-off make the tax bill look lighter this year?
3. Tax numbers are dangerous because they can make net income look healthier even when the business itself did not improve. If profit rises mainly because the tax rate fell, that is not the same thing as stronger pricing, better cost control, or better operating performance.
4. When disclosures show a tax change. Your job is to ask, “Why did this move, and can it repeat?” That is the whole game here.

> [!ABSTRACT] MEMORISE
> - **Effective tax rate = Income tax expense / Earnings before tax.**
> - This is usually the more useful comparison than tax expense as a percentage of sales.
> - A lower effective tax rate means the company keeps a bigger share of pretax profit.
> - But that does **not** automatically mean the core business improved.
> - A drop in the effective tax rate can happen because profit is earned in a lower-tax jurisdiction, because tax law changed, or because of another explanation that you must investigate from disclosures.
> - In DuPont language, a lower average tax rate means a **higher tax burden ratio**, so the company keeps more of its pretax profit.

5. Think about two shops that each earn pretax profit of USD 100. The first shop pays USD 30 in tax, so it keeps USD 70. The second shop pays USD 20, so it keeps USD 80. Same pretax profit. Same business performance before tax. But one looks better after tax just because the tax bite is smaller. That is the core intuition here.

6. Apple could sell the same iPhone to the same customer, but if more of the profit was routed through a lower-tax place like Ireland, net income could look stronger even when the basic business engine had not suddenly become better. The same logic is why people kept staring at large companies like Google, Meta, or General Electric and asking how profits could look so huge while tax expense looked so light. For the analyst, the right question is never “wow, net income jumped.” The right question is “did operations improve, or did the tax structure improve?”


> [!question] EFFECTIVE TAX RATE
> Problem: A company’s income tax provision falls from 15% of sales to 8% of sales. At the same time, earnings before tax fall from 42% of sales to 34% of sales. What happened to the effective tax rate?
> Solution:
> $$ \text{Period 1 effective tax rate} = \frac{15}{42} \approx 35.7\% $$
> $$ \text{Period 2 effective tax rate} = \frac{8}{34} \approx 23.5\% $$
> So the effective tax rate fell sharply.

### MODULE 10: FINANCIAL REPORTING QUALITY

> [!info] HOW TO READ THIS MODULE
> This is the “do I trust the numbers?” module.
> The learning outcomes cover reporting quality versus earnings quality, the quality spectrum, conservative versus aggressive accounting, fraud incentives, discipline mechanisms, presentation choices, accounting estimates, and warning signs.
> Read it like a detective: motive, method, opportunity, evidence.

#### Financial Reporting Quality

1. **Do not confuse financial reporting quality with earnings quality.** Financial reporting quality asks: “Can I trust this report as a map of the business?” Earnings quality asks: “Even if the map is accurate, is the business itself producing profits and cash that can repeat?”
2. **Generally accepted accounting principles (GAAP) compliance is only the floor.** A company can follow the rules and still choose estimates, classifications, and presentation tricks that make the business look cleaner than it really is.
3. **Decision-useful reporting rests on two pillars: relevance and faithful representation.** Relevance means the information can change a user’s decision. Faithful representation means the information is complete, neutral, and free from error.
4. **The best report is both clean and economically strong.** It follows GAAP, is useful for decisions, and shows earnings and cash flows that are sustainable and earn an adequate return on investment.
5. **The worst report is fiction.** Once the numbers are fabricated, earnings quality cannot even be assessed. You are no longer analyzing a business; you are analyzing a story someone made up.
6. **Conservative accounting depresses today and helps tomorrow. Aggressive accounting helps today and hurts tomorrow.** Both are biases. The exam loves asking this because students wrongly think conservative automatically means “high quality.”
7. **The fraud triangle is motivation, opportunity, and rationalization.** Pressure creates the desire, weak controls create the path, and self-justification lets the manager sleep at night.
8. **Non-generally accepted accounting principles (non-GAAP) measures are not automatically bad, but they are never innocent.** If management shows “adjusted earnings” louder than net income, ask what bad news got adjusted away.
9. **Accounting choices are the steering wheel.** Revenue timing, depreciation lives, inventory methods, bad-debt estimates, deferred tax asset allowances, capitalization, and cash flow classification can all move the reported numbers.
10. **Warning signs usually leave footprints in ratios.** Receivables growing faster than revenue, inventory piling up, net income beating cash flow from operations, and “one-time” charges recurring again and again are the classic tracks.

> [!abstract] MEMORISE THIS FOR EFFICIENCY
> - **Financial reporting quality** = quality of the information in the report.
> - **Earnings quality** = sustainability and economic usefulness of the reported results.
> - Highest quality = **GAAP-compliant + decision-useful + sustainable earnings + adequate return**.
> - Lowest quality = **fictitious transactions**.
> - Generally accepted accounting principles (GAAP) allow managerial discretion, so GAAP compliance alone does not prove high quality.
> - Decision-useful reporting needs **relevance** and **faithful representation**.
> - Faithful representation means **complete, neutral, and free from error**.
> - Conservative accounting understates current performance. Aggressive accounting overstates current performance.
> - Poor reporting usually needs **motivation + opportunity + rationalization**.
> - Audits help, but an audit is not a guarantee against fraud.

> [!info] FINANCIAL REPORTING QUALITY VS EARNINGS QUALITY (intuition first)
> Imagine you are buying a second-hand car. Financial reporting quality is whether the seller gives you honest paperwork: service history, accident record, mileage, and loan status. Earnings quality is whether the car itself is actually good: engine condition, fuel efficiency, and whether it can run reliably for the next five years.
> 
> Toyota once reported a huge jump in operating profit even though vehicle sales were weak, because a weaker Japanese yen helped translation and exports. The reporting could be honest, but the earnings source was less repeatable than simply selling more cars at better margins.
> 
> Now compare that with Satyam, where cash balances were fabricated. In Toyota’s case, you can analyze the business and say, “This profit source may not last.” In Satyam’s case, the map itself is fake.
> 
> **So what:** first ask whether the report is trustworthy; only then ask whether the earnings are sustainable.

#### Learning Outcome 1: compare financial reporting quality with quality of reported results

1. **Financial reporting quality is about information quality.** The report should help you understand what really happened during the period and what the company’s financial condition is at period-end.
2. **High-quality financial reporting is decision-useful.** It is relevant and faithfully represents the economics of the business.
3. **Low-quality financial reporting blocks analysis.** If the numbers are incomplete, biased, or wrong, you cannot properly judge past performance or forecast future performance.
4. **Quality of reported results, often called earnings quality, is about the actual business results.** High-quality earnings come from activities that are likely to continue and that earn an adequate return on investment.
5. **High-quality reports can show low-quality earnings.** A company may clearly disclose that profit came from selling a division, currency gains, or another non-recurring source. The reporting is clean, but the earnings are not very repeatable.
6. **Low-quality reports can hide either good or bad economics.** If disclosure is poor, the analyst cannot confidently assess earnings quality.
7. **Valuation implication:** one dollar of sustainable earnings is worth more than one dollar of one-time earnings, because valuation is driven by expected future cash flows, not just today’s headline profit.

> [!tip] QUICK EXAMPLE
> Apple selling more iPhones because customers love the product is more sustainable than Apple reporting a gain from selling an office building. Both can increase profit this year, but only one tells you the core business engine is stronger.
> 
> That is why you do not stop at net income. You ask, “Where did this profit come from, and can it happen again?”

#### Learning Outcome 2: describe a spectrum for assessing financial reporting quality

1. **Top of the spectrum:** GAAP-compliant, decision-useful reports, with sustainable earnings and adequate returns.
2. **Next level:** GAAP-compliant and decision-useful reports, but earnings are not sustainable or do not earn enough return.
3. **Next level:** within GAAP, but biased accounting choices. The company is still inside the rulebook, but it is leaning the numbers in a preferred direction.
4. **Next level:** within GAAP, but earnings management. Management deliberately takes real actions or accounting actions to influence reported earnings.
5. **Next level:** non-compliant accounting. Real business activity may exist, but accounting rules are violated.
6. **Bottom of the spectrum:** fictitious transactions. The company records events that did not happen.

> [!abstract] QUALITY SPECTRUM
> 1. **Best:** GAAP, decision-useful, sustainable earnings, adequate returns.
> 2. **Clean report, weak economics:** GAAP and decision-useful, but earnings may not continue.
> 3. **Biased but still within GAAP:** aggressive or conservative choices distort the picture.
> 4. **Earnings management:** intentional bias through real actions or accounting choices.
> 5. **Non-compliant accounting:** GAAP is violated.
> 6. **Worst:** fictitious transactions.

> [!info] WHY THE SPECTRUM MATTERS (intuition first)
> Think of the spectrum like food labels. At the top, the label is accurate and the food is healthy. One level down, the label is accurate but the food is junk. Lower down, the label uses legal tricks like “no added sugar” while hiding other bad ingredients. At the bottom, the label lies about what is inside the packet.
> 
> A company can honestly report weak results. That is bad business quality, not necessarily bad reporting quality. But if the company starts hiding, smoothing, misclassifying, or inventing numbers, your analysis becomes less and less useful.
> 
> **So what:** always locate the company on the spectrum before trusting trend analysis or valuation multiples.

> [!tip] REAL-WORLD MEMORY HOOKS
> - **Toyota:** sales volume was not the hero; currency helped profits. Clean reporting can still reveal lower earnings quality.
> - **Enron:** off-balance-sheet structures understated debt and overstated profit and operating cash flow. This is non-compliant accounting territory.
> - **WorldCom:** ordinary line costs were capitalized, which understated expenses and overstated operating income.
> - **Parmalat and Satyam:** cash balances were fabricated. That is the bottom of the spectrum.

#### Learning Outcome 3: explain the difference between conservative and aggressive accounting

1. **Aggressive accounting increases current reported performance or financial position.** It can increase revenue, earnings, operating cash flow, or assets; it can also reduce expenses or debt.
2. **Aggressive accounting usually borrows from the future.** If revenue is pulled into this year or expenses are pushed out, future periods become weaker.
3. **Conservative accounting decreases current reported performance or financial position.** It can lower revenue, earnings, operating cash flow, or assets; it can increase expenses or debt.
4. **Conservative accounting can store profits for later.** If management takes a large expense today, future periods may look better because some bad news has already been absorbed.
5. **Conservative does not mean neutral.** Neutral reporting is the ideal. Conservative reporting is still biased; it is just biased downward today.
6. **Conservatism can come from standards or from management judgment.** Some standards require conservative treatment, and managers may also choose cautious estimates.
7. **Accounting standards can differ in conservatism.** For long-lived asset impairment, International Financial Reporting Standards (IFRS) may recognize impairment earlier than United States generally accepted accounting principles (US GAAP) in some cases because the tests differ.
8. **Common conservative standard treatments:** research costs are expensed because future benefits are uncertain, probable litigation losses are recognized, and insurance recoveries are usually not recognized until acknowledged.
9. **Big bath accounting is fake “conservatism.”** A new chief executive officer may take a huge restructuring charge early, making the starting year look terrible so later years look cleaner.
10. **Cookie jar reserves are fake stability.** Management overestimates expenses or reserves in good years and releases them in bad years, making earnings look smoother than the business really is.

> [!tip] HAMMER THIS INTO YOUR HEAD
> - Aggressive accounting = **today looks better, tomorrow may look worse**.
> - Conservative accounting = **today looks worse, tomorrow may look better**.
> - Neutral accounting = **the report shows reality without leaning either way**.

> [!info] CONSERVATIVE VS AGGRESSIVE (intuition first)
> Suppose two restaurants both expect some customers not to pay. Restaurant A assumes 2 percent will not pay even though history says 5 percent. Its bad-debt expense is too low, profit is too high, and receivables look too strong. That is aggressive.
> 
> Restaurant B assumes 10 percent will not pay even though history says 5 percent. Its profit looks too low today. Later, if actual losses are only 5 percent, it can release the extra reserve and make the future look better. That is conservative.
> 
> Neither restaurant is showing the cleanest picture. The cleanest estimate is the one best supported by evidence.

#### Learning Outcome 4: describe motivations and conditions that cause low-quality or fraudulent reports

1. **Managers may issue low-quality reports to hide poor performance.** If market share is falling or margins are weaker than competitors, aggressive reporting can buy time.
2. **Managers may want to meet or beat forecasts.** Missing analyst expectations can hurt stock price, credibility, and career reputation.
3. **Bonuses and stock-based compensation create pressure.** If pay depends on earnings or share price, reported numbers become personal.
4. **Debt covenants create pressure.** A loan agreement may require minimum profitability, maximum leverage, or minimum interest coverage. If the company is close to breach, managers may inflate earnings.
5. **Strong performance can also motivate conservative bias.** If the company has already beaten targets, management may delay revenue or accelerate expenses to “bank” earnings for the next period.
6. **The fraud triangle explains the setup:** motivation, opportunity, and rationalization.
7. **Opportunity comes from weak internal controls, ineffective boards, complex transactions, flexible accounting standards, or weak enforcement.**
8. **Rationalization is the story management tells itself.** “We will reverse it next quarter,” “Everyone does this,” or “The business will recover soon.”
9. **The reporting environment matters.** Weak regulation, limited capital market discipline, less transparent cultural norms, and strong book-tax conformity can make low-quality reporting easier.

> [!abstract] FRAUD TRIANGLE
> - **Motivation:** “I need the number.”
> - **Opportunity:** “I can make the number.”
> - **Rationalization:** “It is okay because I have a reason.”

> [!tip] REAL-WORLD MEMORY HOOK
> At Enron, Andrew Fastow later said he knew what he was doing was wrong, but he had approvals, opinions, and procedures around him. That is rationalization in action. Paperwork can make a bad decision feel official, but it does not make it honest.

#### Learning Outcome 5: describe mechanisms that discipline financial reporting quality and their limitations

1. **Capital markets discipline reporting quality.** If investors think the reports are risky, they demand a higher return, which raises the company’s cost of capital.
2. **Regulators discipline reporting quality.** Securities regulators require registration, periodic disclosures, audits, management commentary, responsibility statements, filing reviews, and enforcement.
3. **Standard setters write accounting standards; regulators enforce them.** The International Accounting Standards Board sets International Financial Reporting Standards, and the Financial Accounting Standards Board sets United States generally accepted accounting principles. Regulators give those standards legal force in their markets.
4. **Auditors discipline reporting quality by giving assurance.** An unqualified audit opinion means the auditor believes the statements present fairly in accordance with the relevant standards.
5. **Auditors may also opine on internal controls.** A company can have clean financial statements and still have weak internal controls, which raises future reporting risk.
6. **Private contracts discipline reporting quality.** Loan covenants and investment agreements can punish misreporting or require specific financial reporting behavior.
7. **But every discipline mechanism has limits.** Markets can be fooled, regulators review only samples, audits use sampling, and contracts may create new incentives to manage numbers.
8. **An audit is not designed primarily to detect fraud.** It provides reasonable assurance that statements are fairly presented, not a guarantee that every trick was caught.
9. **Audit incentives can be imperfect.** The company being audited pays the audit fee, and the audit firm may want to retain the client.

> [!tip] AUDIT OPINION CHECK
> - **Unqualified opinion** means “clean opinion.”
> - Clean opinion does not mean “fraud is impossible.”
> - Internal control weakness does not automatically mean the financial statements are misstated, but it means the system is easier to break.

#### Learning Outcome 6: describe presentation choices, including non-GAAP measures, that can influence an analyst’s opinion

1. **Presentation choices affect what the reader notices first.** Management can highlight flattering measures and bury unpleasant ones.
2. **Non-GAAP financial measures adjust reported earnings or cash flow.** They may be called adjusted earnings, underlying earnings, recurring earnings, core earnings, adjusted earnings before interest, taxes, depreciation, and amortization, or similar names.
3. **Non-GAAP operating measures are industry metrics.** Examples include subscriber numbers, active users, or hotel occupancy. They may be useful, but they do not come straight from the financial statements.
4. **Non-GAAP measures reduce comparability.** Each company can define “adjusted” differently, so two companies using the same label may not be measuring the same thing.
5. **Aggressive presentation often excludes bad items.** If management excludes restructuring costs, litigation costs, stock-based compensation, impairment charges, or acquisition costs every year, ask whether these are truly unusual.
6. **Regulators require reconciliation.** If a company uses a non-GAAP financial measure in a United States Securities and Exchange Commission filing, it must show the comparable GAAP measure with equal prominence and reconcile the two.
7. **International Financial Reporting Standards management commentary also requires definition, explanation, and reconciliation for non-IFRS measures.**
8. **The danger is attention management.** The company may not be changing the accounting number; it may be changing your focus.

> [!info] NON-GAAP MEASURES (intuition first)
> Imagine a student says, “My adjusted exam score is 92.” Then you learn the actual score was 61, but the student added back marks lost for silly mistakes, tough questions, and bad sleep. Some adjustments may help you understand ability, but if every bad thing is excluded, the adjusted score becomes a sales pitch.
> 
> Groupon once excluded online marketing costs from a performance measure even though marketing was a recurring part of the business. Without that exclusion, the picture looked much weaker.
> 
> Convatec reported a large net loss under International Financial Reporting Standards, but highlighted adjusted earnings before interest, taxes, depreciation, and amortization. The issue is not that adjusted numbers are useless. The issue is that the analyst must reconcile them back to the official numbers and ask what got removed.

> [!warning] NON-GAAP RED FLAGS
> - The non-GAAP number is shown more prominently than the GAAP number.
> - The company excludes normal recurring expenses.
> - “One-time” adjustments keep appearing.
> - The reconciliation is hard to follow.
> - The definition changes across periods.

#### Learning Outcome 7: describe accounting methods, choices, and estimates that manage earnings, cash flow, and balance sheet items

1. **Revenue recognition choices can pull sales forward.** Free on board shipping point means title passes when goods leave the seller. Free on board destination means title passes when goods arrive at the customer.
2. **Channel stuffing is pushing too much product into distributors.** Revenue rises now, but returns or weak future sales may expose the trick.
3. **Bill-and-hold transactions are risky.** The customer buys goods but asks the seller to hold them. This can be legitimate, but it can also create fake period-end sales.
4. **Inventory methods affect profit and balance sheet values.** In rising prices, first-in, first-out usually gives lower cost of goods sold, higher gross profit, and inventory closer to current cost than weighted-average cost.
5. **Bad-debt estimates affect earnings and receivables.** Lower estimated uncollectible accounts means lower expense, higher profit, and higher net receivables.
6. **Deferred tax asset valuation allowances affect earnings.** Reducing the allowance increases the deferred tax asset and boosts income.
7. **Depreciation choices affect expense timing.** Longer useful lives, higher salvage values, and slower depreciation methods reduce current depreciation expense.
8. **Capitalization shifts expense into assets.** If a cost is capitalized, current earnings rise because the cost is expensed later through depreciation or amortization.
9. **Goodwill impairment depends on estimates.** Optimistic cash flow forecasts or discount rates can delay impairment charges.
10. **Cash flow from operations can be managed.** Stretching accounts payable delays supplier payments and temporarily increases operating cash flow.
11. **Cash flow classification can change the operating cash flow story.** Under International Financial Reporting Standards, interest paid and dividends can have classification flexibility. Moving interest paid from operating cash flow to financing cash flow can make operations look stronger.

> [!abstract] COMMON ACCOUNTING LEVERS
> - **Revenue:** free on board shipping point, channel stuffing, bill-and-hold, rebates, multiple deliverables.
> - **Expenses:** bad-debt allowance, warranty reserves, restructuring charges, capitalization versus expensing.
> - **Assets:** inventory method, useful life, salvage value, deferred tax asset allowance, goodwill impairment.
> - **Liabilities:** reserves, warranty obligations, litigation accruals, debt presentation.
> - **Cash flow:** stretching payables, interest classification, capitalized interest, misclassifying operating outflows.

> [!question] SIMPLE NUMERICAL: BAD-DEBT ESTIMATE
> Problem: A company records credit sales of USD 1,000,000. History says 3 percent will not be collected, but management uses 2 percent. How much extra profit is created before tax?
> 
> ---
> 
> Solution:
> 
> \[
> \text{Proper bad-debt expense} = 3\% \times USD\ 1,000,000 = USD\ 30,000
> \]
> 
> \[
> \text{Managed bad-debt expense} = 2\% \times USD\ 1,000,000 = USD\ 20,000
> \]
> 
> \[
> \text{Extra profit before tax} = USD\ 30,000 - USD\ 20,000 = USD\ 10,000
> \]
> 
> Explanation: Nothing magical happened in the business. Management simply used a more optimistic estimate, so expense fell and profit rose.

> [!tip] WORLDCOM MEMORY HOOK
> WorldCom capitalized telecom line costs that should have been treated as operating expenses. That moved costs away from the income statement today and boosted operating income by billions of United States dollars. If you remember one capitalization scandal, remember this one.

#### Learning Outcome 8: describe warning signs and methods for detecting manipulation

1. **Start with revenue.** Revenue is the biggest line for many companies and the classic fraud playground.
2. **Read the revenue recognition policy.** Ask whether the policy allows early recognition through shipment terms, bill-and-hold arrangements, barter transactions, rebates, or multiple deliverables.
3. **Compare revenue growth with peers.** If one company is growing far faster than the industry without a clear business reason, be skeptical.
4. **Compare receivables with revenue.** If receivables grow faster than revenue, customers may not be paying, sales may be premature, or sales may be fictitious.
5. **Watch days sales outstanding.** Rising days sales outstanding means cash collection is slowing.
6. **Watch inventory.** Inventory growing faster than sales can signal obsolete goods, weak demand, or delayed write-downs.
7. **Watch inventory turnover.** Declining inventory turnover means inventory is sitting longer.
8. **Compare net income with cash flow from operations.** Net income repeatedly above operating cash flow can signal aggressive accrual accounting.
9. **Watch for recurring “non-recurring” charges.** A company that keeps taking one-time restructuring charges may be using them as an earnings management tool.
10. **Read the footnotes and management commentary together.** If management commentary sounds optimistic but allowances, impairments, or working capital tell a different story, slow down.
11. **Look for related-party transactions.** Deals with management-controlled private companies can move profits or losses around.
12. **Look for unusual changes in estimates.** Longer useful lives, lower warranty reserves, lower bad-debt allowances, or sudden deferred tax optimism can all boost earnings.

> [!abstract] WARNING-SIGN FORMULAS
> \[
> \text{Receivables Turnover} = \frac{\text{Revenue}}{\text{Average Receivables}}
> \]
> 
> \[
> \text{Days Sales Outstanding} = \frac{365}{\text{Receivables Turnover}}
> \]
> 
> \[
> \text{Inventory Turnover} = \frac{\text{Cost of Goods Sold}}{\text{Average Inventory}}
> \]
> 
> \[
> \text{Asset Turnover} = \frac{\text{Revenue}}{\text{Average Total Assets}}
> \]
> 
> \[
> \text{Cash Flow Quality Ratio} = \frac{\text{Cash Flow from Operations}}{\text{Net Income}}
> \]
> 
> Notation in simple language:
> - **Revenue:** sales recognized during the period.
> - **Average receivables:** average money customers owe the company.
> - **Cost of goods sold:** inventory cost charged to the income statement.
> - **Average inventory:** average inventory held during the period.
> - **Average total assets:** average asset base used to generate revenue.
> - **Cash flow from operations:** cash generated by normal operations.
> - **Net income:** accounting profit after expenses and taxes.

> [!tip] QUICK CHECKS
> - Revenue up but receivables up even faster? Check for premature revenue or collection problems.
> - Revenue up but inventory also piling up? Check for weak demand or obsolete inventory.
> - Net income up but cash flow from operations down? Check accruals and working capital.
> - Adjusted profit up but GAAP profit down? Reconcile every adjustment.
> - Big “one-time” charges every year? Treat them as part of the business until proven otherwise.

> [!info] HOW TO READ THIS LIKE A DETECTIVE (intuition first)
> Do not try to catch fraud by staring at net income. Fraud rarely walks in wearing a name tag. It shows up as weird relationships.
> 
> If a clothing company says sales are booming, cash should eventually come in and inventory should move out. If sales rise 20 percent, receivables rise 70 percent, and inventory rises 60 percent, the story has a leak.
> 
> Compare this with a clean business like a strong retailer: sales rise, receivables stay controlled because customers pay quickly, and inventory turnover remains healthy. The ratios are boring, and boring is good.
> 
> **So what:** manipulation usually creates imbalance. Your job is to find the line item that did not move the way the business story says it should.

#### Accounting Choices and Estimates

1. **REVENUE:**
	1. **Free-on-board (FOB) shipping point vs FOB destination** changes when control passes and revenue is booked (at shipment vs at delivery); example: an automaker using FOB shipping point can record quarter-end sales as soon as cars leave the factory, even if dealers receive them next period.
	2. **Channel stuffing** records sales by pushing excess goods to intermediaries before real end-customer demand exists; example: Bristol-Myers Squibb shipped unusually large drug volumes to wholesalers to hit revenue targets, later reversing sales when inventories did not clear.
	3. **Bill-and-hold arrangements** book revenue before goods/services are delivered or performance is complete; example: Byju's recognized the full value of multi-year course subscriptions upfront rather than over the teaching period, so when auditors forced deferral over the contract life, reported income dropped sharply, revealing timing-driven earnings.
2. **INVENTORY:**
	1. **FIFO vs weighted-average affects earnings mechanically through COGS timing**: in rising price environments FIFO reports lower COGS and higher profits because older, cheaper inventory flows to the income statement first, a tailwind seen in commodity retailers and refiners during inflationary cycles (e.g., post-2021 energy and metals price spikes).	
	2. **Balance sheet relevance vs income statement realism trade-off**: Under FIFO, ending inventory consists of the most recent purchases, so its book value reflects near-current replacement cost, making the balance sheet closer to what the firm would actually pay to restock today. FIFO produces inventory values closer to current replacement cost, making the balance sheet more relevant, while weighted-average produces COGS closer to current costs, making gross margin more economically meaningful and less inflated by price-level gains.	
	3. **Earnings quality implication**: ==FIFO profits embed hidden holding gains (or losses) from price changes rather than operating performance==, so analysts prefer weighted-average margins for performance analysis and FIFO inventory for asset valuation, especially during volatile input-cost regimes.

3. **OTHER WAYS TO GAME THE SYSTEM:**
	 1. **Stretching payables** inflates operating cash flow by delaying supplier payments across reporting periods, improving CFO today but reversing it later with no impact on earnings; example: retailers and manufacturers under liquidity stress have repeatedly been flagged in earnings calls for rising days payable outstanding used to “support cash flow.”
	2. **Capitalizing interest expense** shifts cash outflows from CFO to CFI and smooths earnings by spreading costs via depreciation instead of expensing immediately; example: real estate developers and infrastructure firms capitalize borrowing costs during construction to boost reported operating cash flow.
	3. **Cash flow classification flexibility (IFRS)** allows interest and dividends to be classified across CFO, CFI, or CFF, letting firms cosmetically raise CFO without changing total cash; example: European firms often classify interest paid as financing cash flow to report stronger operating cash generation than US GAAP peers.
	4. **Show straight-line depreciation** to inflate income.
	5. **Delay impairment of goodwill** as it is subjective.
	6. **Do not create VA to reduce DTA**

> [!TIP] HAMMER THIS INTO YOUR HEAD
> 1. Under **IFRS**, interest paid can be classified as CFO or CFF, interest received as CFO or CFI, dividends paid as CFO or CFF, and dividends received as CFO or CFI, giving management flexibility to boost reported operating cash flow.
> 2. Under **US GAAP**, interest paid and interest received must be classified as CFO, dividends received as CFO, and dividends paid as CFF, leaving no discretion to reclassify these items to manage CFO.

#### Warning Signs

1. Warning signs are not proof of fraud. Think of them like footprints in sand. One footprint alone proves nothing. But if you see a whole trail, you stop trusting the story management is selling.

2. Almost all manipulation comes from the same two dirty levers: **biased revenue recognition** or **biased expense recognition**. Management either pulls revenue forward, delays expenses, or hides the bad stuff in a friendlier place like other comprehensive income or directly in equity.

> [!ABSTRACT] MEMORISE
> - Revenue is the first place to look because it is the biggest number on the income statement and a recurring source of manipulation.
> - If receivables rise faster than revenue, ask whether sales quality is weakening.
> - Rising days sales outstanding (DSO) or falling receivables turnover can mean premature or fictitious revenue, or an insufficient allowance for doubtful accounts.
> - Inventory growing without matching sales growth can mean poor inventory management, unrecognized obsolescence, or overstated inventory.
> - Declining inventory turnover is a bad smell. Under United States Generally Accepted Accounting Principles, last in, first out (LIFO) liquidation can also artificially boost profit.
> - If a company capitalizes costs that peers expense, treat it as a red flag.
> - If cash flow from operations stays below net income, aggressive accrual accounting may be doing the heavy lifting.
> - Related-party transactions, one-time gains hidden inside revenue, serial “non-recurring” charges, minimalist disclosure, and management obsession with earnings are all warning signs.

3. Start with revenue. Do not just ask whether revenue is higher than last year. Ask how it got there. Read the revenue recognition policy note and look for places where management has room to get cute, such as recognizing revenue on shipment, using bill-and-hold arrangements, valuing barter transactions, estimating rebate programs, or splitting multiple-deliverable contracts in a way that flatters timing.

4. None of those choices automatically breaks the rules. That is exactly why they are dangerous. They sit in the gray zone where judgement lives. If other warning signs are already showing up, these judgment-heavy policies deserve much closer attention.

5. Compare revenue growth with competitors, the industry, and the economy. If one company is suddenly growing much faster than everything around it, maybe it is genuinely better. But maybe not. The point is that outperformance is not evidence by itself. It is a prompt to investigate.

6. Then move straight to receivables. If receivables are climbing as a share of revenue, you should immediately hear an alarm bell. The curriculum specifically says this can point to channel stuffing or even fictitious sales.

7. Run the simple checks: compare receivables with revenue over several years, calculate receivables turnover, and compare days sales outstanding with peers. If days sales outstanding rises or receivables turnover falls, one ugly possibility is that revenue was recorded too early. Another is that the allowance for doubtful accounts is too small, which means profit looks better only because expected bad debts were not fully recognized.

8. Inventory is the next place management can hide trouble. If inventory growth is out of line with peers and there is no matching sales growth, the company may just be managing inventory badly. But it may also be sitting on obsolete inventory that has not yet been written down, which means gross profit and net profit are being flattered by an overstated asset.

9. Declining inventory turnover is another bad smell because it can point to the same obsolescence problem. Under United States Generally Accepted Accounting Principles, if a company uses last in, first out (LIFO) in an inflationary environment, old low-cost layers can flow through earnings and make gross, operating, and net profit look artificially strong. So sometimes even “good margins” need to be cross-examined.

10. Expense suppression usually shows up through capitalization. If a company is capitalizing costs that its peers expense, do not give it the benefit of the doubt. Treat it as a red flag and cross-check whether its asset turnover and margins look suspiciously flattering. WorldCom is the curriculum’s reminder here: capitalizing the wrong costs can massively misstate performance.

11. The cash flow check is brutally simple and very powerful: **net income can impress investors, but cash flow pays bills.** If net income keeps running ahead of cash flow from operations, and especially if the ratio of cash flow from operations to net income stays below 1.0 or keeps falling, aggressive accrual accounting may be shifting today’s expenses into later periods.

12. There are also broader warning signs outside the obvious line items. Be cautious when you see lenient depreciation methods or long useful lives relative to peers, weird fourth-quarter surprises without seasonal reason, related-party transactions, one-time gains mixed into revenue, “special” charges that keep showing up every year, or margins that are far away from industry norms.

13. The examples in the text are there to make this stick. Sunbeam included one-time disposal of product lines inside sales, which made revenue look more sustainable than it really was. Sony hid weak acquired businesses inside a larger entertainment segment, which blurred the real trend. General Electric’s culture around “sharing” profits across units is the kind of mindset that should make you worry that teamwork has crossed the line into financial statement gamesmanship.

14. Context matters. A young company with a hot new product can genuinely grow faster than everyone else for a while. So do not act like a machine and scream “fraud” at every unusual number. But when growth starts fading, that is exactly when the earnings games can begin: aggressive estimates, cookie-jar reserves, asset sales for accounting gains, excess leverage, and transactions that seem to exist mainly for window dressing.

15. Disclosure quality itself is a warning signal. If management gives minimalist disclosure, keeps commentary vague, claims everything belongs in one giant segment, or seems obsessed with adjusted earnings and non-Generally Accepted Accounting Principles measures, your confidence in reporting quality should drop.

16. Final exam rule: warning signs must be read **together**, not one by one. One odd ratio may be harmless. A cluster of revenue weirdness, receivables growth, weak operating cash flow, aggressive capitalization, and poor disclosure is the kind of pattern that tells you to get very skeptical or walk away.

### MODULE 11: FINANCIAL ANALYSIS TECHNIQUES

> [!info] HOW TO READ THIS MODULE
> Ratios are compression tools, not magic truth machines.
> The learning outcomes are: use analytical tools, calculate activity, liquidity, solvency, and profitability ratios, connect ratios, apply DuPont analysis, use industry-specific ratios, and model earnings.
> Always ask: compared with what, and for what business model?

#### Introduction to Financial Ratios

1. Financial analysis starts with a problem: raw statements are too messy to compare, so you first adjust them for your purpose → that makes the numbers usable → but adjusted numbers still do not explain themselves → so the next step is to pass them through tools like ratios, common-size statements, graphs, and regression analysis (a method that estimates how one variable moves with another).

2. Ratios come first because they compress two numbers into one relationship → that helps you project earnings and cash flow, judge flexibility, assess management, track change, and compare firms → but a ratio by itself is weak because different accounting methods, mixed-industry firms, and shifting business conditions distort the comparison → so a ratio only tells you where to look next, not what the final answer is.

3. Once ratios tell you where the tension is, common-size statements show you exactly where it sits inside the accounts → a vertical balance sheet turns every item into a share of total assets, and a vertical income statement turns every item into a share of sales → but this still has a limit because percentages reveal pattern, not cause → so you use common-size analysis to separate “this changed” from “why it changed,” which pushes you into deeper investigation.

4. If you want the pattern to become even easier to see, you move from percentages to pictures and statistical links → graphs highlight composition shifts over time, and regression analysis (a method that links variables for forecasting) helps estimate outputs like sales from inputs like Gross Domestic Product (GDP) → but neither a graph nor a regression proves the business reason behind the movement → so they work best as early warning systems that tell you which line items deserve real analysis.

5. Put it together with the PDF’s example: net profit margin rose about 5% in 20X6, but cost of goods sold improved only 0.48% and Selling, General, and Administrative expense (SG&A) improved only about 0.5% → that pushes you to the next layer, where common-size analysis shows most of the jump came from lower amortization and lower interest and other debt expense → but lower amortization is non-cash and lower interest may not last → so the correct conclusion is not “profitability is permanently better,” but “you now know exactly which items must be tested before trusting future cash flow.”

#### Turnover and Liquidity Ratios

> [!WARNING] Remember
> To memorise all the ratios and **most importantly their implications**



> [!NOTE] MEMORISE THIS FOR EFFICIENCY
> 
> **TURNOVER RATIOS**
> 
> INVENTORY TURNOVER = REVENUE / AVERAGE INVENTORY
> AR TURNOVER = REVENUE / AVERAGE AR
> AP TURNOVER = COGS / AVERAGE AP
> DOI = 365 / INVENTORY TURNOVER
> DSO = 365 / AR TURNOVER
> DPO = 365 / AP TURNOVER
> CCC = DIO + DSO - DPO
> 
> **LIQUIDITY RATIOS**
> CR = CA / CL
> CASH RATIO = (CASH + MARKETABLE SECURITIES) / CL
> QUICK RATIO = (CASH + AR + MARKETABLE SECURITIES) / CL
> DEFENSIVE INTERVAL RATIO = (CASH + AR + MARKETABLE SECURITIES) / DAILY OPERATING EXPENSES

1. Turnover means how quickly something is replaced or replenished, inventory turnover ratio (ITR) would be COGS / Avg. Inventory, AR turnover (ART) would be Sales / Avg. AR, AP turnover would be COGS / Avg. AP. So think intuitively, for one unit of inventory, I have ITR units of COGS, so my inventory gets replenished ITR times. 

> [!Danger] DO NOT MAKE THIS MISTAKE
> ITR is COGS / Avg Inventory, APR is COGS / Avg. AP, ART is Sale / Avg AR. 

2. Divide any turnover ratio by 365 and you get Days of that thing. For example, Days of Inventory (DIO) = 365 / ITR, Days of AP (DPO) = 365 / APR, Days Sales Outstanding (DSO) = 365 / ART
3. JIT maufacturing makes ITR go very high often unusable especially for software companies.
4. Current Ratio =  Current Assets / Current Liabilities. In liquidity ratios, the denominator will usually be CL. 

###### HOW TO GAME CURRENT RATIO?
- Have aggressive sales on credit (AR goes up, CA goes up)
- Do not pay creditors (AP goes down, CL goes down)
- Sell a fixed asset. (Cash goes up, CA goes up)
- Take a long term loan (Cash goes up, CA goes up; Long term debt goes up, CL does not change)
- Issue shares (Cash goes up, CA goes up; Equity goes up, CL does not change)

4. Cash Ratio =  (Cash + Marketable Securities) / Current Liabilities. Marketable Securities are anything that you can quickly sell and generate cash. 
5. Quick Ratio =  (Cash + Marketable Securities + AR) / Current Liabilities. 
6. Cash Conversion Cycle (CCC) = DSO + DIO - DPO. Assets are plus (Inventory and AR), Liability (AP) is minus. It measures how quickly inventory turns into cash. You can crank this up by aggressively demanding payments, not paying your suppliers. If it is negative then you require short term financing to cover the period. If it is positive, then you are sitting on cash that can be used in other parts of business. You can afford (CA < CL).
7. The quick ratio reflects the fact that certain current assets—such as prepaid expenses, some taxes, and employee-related prepayments—represent costs of the current period that have been paid in advance and cannot usually be converted back into cash.

#### Solvency and Profitability Ratios

1. Debt to Equity ratio = Total Debt / Total Shareholder Equity. All interest bearing instruments **except leases** are part of total debt. If question is silent, treat Preference shares as Total Shareholder Equity.
2. Debt to Capital Ratio = Total Debt / (Total Debt + Total Shareholder Equity)
3. Debt to Asset Ratio = Total Debt / Total Assets
4. Debt to EBITDA Ratio = Total Debt / EBITDA
5. Financial Leverage = Avg Total Assets / Avg Total Equity. *How much of shareholder equity has been used to finance the assets*
6. Interest Coverage = EBIT / Interest Payments **(Always EBIT, not EBITDA,  not PBT, and not PAT)**. Suppose I earn (EBIT) 100 and I have to pay 10 as interest, I can cover interest 10 times. 

> [!danger] DEBT ALWAYS MEANS TOTAL DEBT
> 
> Debt to Equity Ratio = (Long Term Debt + Short Term Debt) / Total Shareholder Equity
> 
> Total Shareholder Equity = Common Stock + Preference Shares (if question states that)


> [!danger] RETURN ON ASSETS
> 
> ALWAYS ADD BACK INTEREST AFTER TAX TO NET INCOME TO CALCULATE ROA
> 
> ROA = Net Income + Interest Expense (1-Tax) / Avg Total Assets
> 
> Interest is tax deductible. So we add back interest after adjusting for tax.
> 
> 


> [!WARNING] Remember
> Any kind of margin is always calculated on Revenue

##### DUPONT ANALYSIS

7. Dupont Analysis breaks ROE into its drivers.

> [!NOTE] MEMORISE THIS FOR EFFICIENCY
> #memorise TIMEL (Tax Interest Margin Efficiency Leverage)
> ROE = PAT Margin × Asset Turnover × Financial Leverage
> ROE = ROA × Financial Leverage
> ROA = PAT / Avg Total Assets
> Asset Turnover = Revenue / Avg Total Assets
> PAT Margin = PAT / Revenue
> 
> Financial Leverage = Avg Total Assets / Avg Total Equity


NET INCOME MARGIN = EAT / REVENUE
Tax Burden = EBT / EAT
Interest Burden = EBT / EBIT 
EBIT Margin = EBIT / Sales 

$$ \boxed {\mathrm{ROE} = \frac{\text{EAT}}{\text{EBT}} \times \frac{\text{EBT}}{\text{EBIT}} \times \frac{\text{EBIT}}{\text{Sales}} \times \frac{\text{Sales}}{\text{Avg. Assets}} \times \frac{\text{Avg. Assets}}{\text{Avg. Equity}}} $$

##### INDUSTRY SPECIFIC RATIOS
8. Net income per employee and sales per employee are used in the analysis and valuation of service and consulting companies and software companies which usually have intangible assets such as employee skills. Steam has a $3.5 million to over $10 million in profit per employee.
9. For Walmart, average revenue per square foot is the metric.
10. For Spotify, average revenue per user is the metric.

#### DuPont Analysis

> [!abstract] MEMORISE
> - ROE has no meaning on its own → you must split it into drivers → DuPont does exactly this by writing ROE as a product of simpler ratios.
> - Two-way: **ROE = ROA × Leverage**. Three-way: **ROE = Net profit margin × Total asset turnover × Leverage**. Five-way: **ROE = Tax burden × Interest burden × EBIT margin × Total asset turnover × Leverage**.
> - Leverage ratio has a floor of **1.0** (all-equity firm), never zero.
> - Tax burden = 1 − average tax rate. Higher tax burden → company keeps more of its pretax profit.
> - Interest burden = EBT / EBIT. Higher borrowing cost → lower interest burden → lower ROE.
> - Leverage helps ROE only when the firm borrows at a rate **below** what it earns on the borrowed funds; otherwise leverage drags ROE down.

> [!tip] LOOK BEFORE EXAM
> 
> **EF PEF TIMEL:**
> 
> Two-way (EF) → isolates *operating efficiency vs. financing*.
> Three-way (PEF) → isolates *profitability vs. efficiency vs. financing*.
> Five-way (TIMEL) → isolates *taxes, interest, operating margin, efficiency, leverage* — this is the Bloomberg-style decomposition.

1. ROE alone tells you *how much* return equity holders earned → but it does not tell you *why* → DuPont splits ROE into component ratios so that each slice maps to a distinct driver (efficiency, profitability, taxes, interest, leverage) → but the decomposition is an algebraic identity, not causation → so DuPont tells you *where* the change came from, not *whether* it will persist.

2. Start from the definition and multiply by a clever "1":

$$ \text{ROE} = \frac{\text{Net income}}{\text{Avg. shareholders' equity}} = \frac{\text{Net income}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. shareholders' equity}} $$

$$ \boxed{\text{ROE} = \text{ROA} \times \text{Leverage}} $$

> [!tip] Notation in simple language
> - ROA = Net income / Average total assets → return generated per unit of assets.
> - Leverage = Average total assets / Average shareholders' equity → how many dollars of assets are supported by each dollar of equity.
> - All-equity firm → assets = equity → leverage = 1.0 → ROE = ROA.

3. Push one layer further by splitting ROA into margin × turnover:

$$ \text{ROE} = \frac{\text{Net income}}{\text{Revenue}} \times \frac{\text{Revenue}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. shareholders' equity}} $$

$$ \boxed{\text{ROE} = \text{Net profit margin} \times \text{Total asset turnover} \times \text{Leverage}} $$

> [!tip] Notation in simple language
> - Net profit margin = Net income / Revenue → profitability per unit of sales.
> - Total asset turnover = Revenue / Average total assets → how hard the assets are working.
> - Leverage = Average total assets / Average shareholders' equity → solvency dimension.

4. Split net profit margin once more to separate the effect of taxes, interest, and operating profitability:

$$ \boxed{\text{ROE} = \frac{\text{Net income}}{\text{EBT}} \times \frac{\text{EBT}}{\text{EBIT}} \times \frac{\text{EBIT}}{\text{Revenue}} \times \frac{\text{Revenue}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. shareholders' equity}} } $$

> [!tip] Notation in simple language
> - Tax burden = Net income / EBT = 1 − average tax rate → fraction of pretax profit retained after tax.
> - Interest burden = EBT / EBIT → fraction of operating profit left after interest expense.
> - EBIT margin = EBIT / Revenue → operating profitability per unit of sales.
> - Total asset turnover = Revenue / Average total assets → efficiency.
> - Leverage = Average total assets / Average shareholders' equity → financing choice.

5. Leverage is a two-edged sword → increasing leverage multiplies ROE when ROA is positive and the firm borrows below its marginal return on invested funds → but if borrowing cost exceeds the return earned on the borrowed money, extra leverage *depresses* ROA and ROE falls as leverage rises → so leverage is not "free return," it is a magnifier of whatever ROA already exists.

Reliance Jio took on massive debt at launch, but its network assets earn more than its cost of debt, so leverage multiplied the equity return. Vodafone Idea carries over INR 2 lakh crore of net debt on a loss-making operation, so each extra rupee of leverage just magnifies the loss per rupee of equity. Same "company took on debt" headline, opposite effect — DuPont is where the difference shows up.

6. Tax burden and interest burden both sit between 0 and 1 → a *fall* in tax burden means the firm paid a higher average tax rate (kept less pretax profit) → a *fall* in interest burden means interest expense ate a bigger share of operating profit → both show up as a drop in net profit margin in the three-way form, but the five-way form tells you *which* of the two caused it.

Infosys historically earned tax-exempt profits inside Special Economic Zones — when those holidays expire, its tax burden (net income divided by earnings before tax) drops even though the operating business is unchanged. Tata Steel carries heavy debt from blast-furnace spending and the Corus acquisition, so a rate rise or a rating slip pushes its interest burden (earnings before tax divided by earnings before interest and tax) down instead. Same "margin fell" headline, but only the five-way DuPont tells you whether it was the tax authority or the bond market.

7. Use DuPont to compare firms or to trace a single firm's trend → if two firms have the same ROE but very different decompositions (one via margin, one via leverage), their risk profiles are not the same → leverage-driven ROE is more fragile because it depends on continued access to debt at a favourable rate.

Walmart runs on a net profit margin of only 2–3% but spins its inventory hard enough to hit a total asset turnover around 2.5×, with little financial leverage — its return on equity comes from operating efficiency. HDFC Bank runs on a thin interest margin with structural leverage of roughly 7–10× because deposits sit against a small sliver of equity — its return on equity comes from leverage by regulatory design. Two similar-looking return-on-equity numbers, but Walmart's survives a credit cycle and the bank's does not.

> [!warning] COMMON TRAP
> Leverage ratio is **Assets / Equity**, not Debt / Equity. For an all-equity firm it equals **1.0**, never 0. A firm with debt always has leverage > 1.

> [!info] WHAT EACH DUPONT TERM ACTUALLY IS 
> Picture a bucket of money. Revenue comes in at the top. By the time it reaches the equity holders at the bottom, it has passed through several leaks and one magnifier. DuPont just names each one.
> 
> Imagine a shop called **Anna's Bakery**. She sells USD 1,000 worth of bread this year.
> 
> - **EBIT margin = EBIT / Revenue.** Out of that USD 1,000 of sales, how much is left after paying bakers, flour, rent, and electricity? Say USD 100. Her EBIT margin is 10%. This is the pure *operating* skill of the business — before the bank gets paid, before the taxman gets paid. It answers: **"Is the core business any good?"**
> 
> - **Interest burden = EBT / EBIT.** Anna borrowed money to buy her ovens. She owes USD 10 of interest. EBT = 100 − 10 = 90. Interest burden = 90/100 = 0.90. The number is **how much of operating profit she *keeps* after the bank's cut.** 0.90 means the bank takes 10%. If Anna had no debt, interest burden would be 1.0. If she borrowed too much and interest ate half her profit, it would be 0.50. **Higher is better.** (This is the bit people flip — it is a "kept" fraction, not a "cost" fraction.)
> 
> - **Tax burden = Net income / EBT.** The taxman takes 30% of the USD 90, leaving USD 63. Tax burden = 63/90 = 0.70. Same idea: **how much she *keeps* after tax.** 0.70 means she keeps 70 cents of every pretax dollar. A 0% tax regime would give tax burden = 1.0. **Higher is better.**
> 
> - **Total asset turnover = Revenue / Avg. total assets.** Anna owns USD 500 in ovens, mixers, and van. She generated USD 1,000 of sales from USD 500 of assets → turnover = 2.0. **This measures how hard the assets sweat.** A grocery chain has turnover around 2–4 (assets spin fast, tiny margin). A luxury hotel has turnover around 0.3 (huge real estate, low sales per unit of asset). Neither is "good" or "bad" — it is a business model fingerprint.
> 
> - **Leverage = Avg. total assets / Avg. shareholders' equity.** Anna's USD 500 of assets is funded by USD 250 of her own equity and USD 250 of bank debt. Leverage = 500/250 = 2.0. **This is the magnifier.** Every rupee of equity controls two rupees of assets. Leverage cannot be less than 1.0 — even an all-equity firm has leverage = 1, because assets still equal equity.
> 
> Now watch the chain come alive. Anna's ROE is:
> 
> $$ \text{ROE} = \underbrace{0.70}_{\text{tax}} \times \underbrace{0.90}_{\text{interest}} \times \underbrace{0.10}_{\text{EBIT margin}} \times \underbrace{2.0}_{\text{turnover}} \times \underbrace{2.0}_{\text{leverage}} = 25.2\% $$
> 
> Read it as a story: **"Out of every dollar of sales, Anna keeps 10 cents after operations, then 90% of that after interest, then 70% of that after tax (= 6.3 cents of net income per dollar of sales). Her assets turn over twice a year, so each dollar of assets produces 12.6 cents of net income. And each dollar of equity controls two dollars of assets, so each dollar of equity produces 25.2 cents."** That *is* the 25.2% ROE — just told slowly.
> 
> **Why decompose at all?** Because when Anna's ROE drops from 25% to 15% next year, you do not want to say "ROE fell." You want to say "ROE fell because EBIT margin dropped from 10% to 6%, and here is why — flour prices spiked." DuPont gives you a surgical tool, not a thermometer. Two firms can both have ROE = 15% and be utterly different businesses — one a thin-margin grocer with huge turnover and leverage, one a fat-margin luxury brand with modest turnover and no debt. They do not face the same risks, and the component breakdown is the only way to see it.
> 
> **One last trap.** Leverage *does not always help.* It multiplies whatever ROA already is. If Anna's business earns 8% on assets and she borrows at 12%, every extra dollar borrowed destroys value — leverage in the formula goes up, but ROA drops faster, and ROE falls. Leverage is a magnifier, not a generator. If the core engine (EBIT margin × turnover) is broken, stacking debt on top just makes the crash louder.

> [!question] QUESTION — Three-way DuPont
> Problem: A firm reports net profit margin of 10%, total asset turnover of 2.0, and financial leverage of 1.5. Compute ROE.
> 
> ---
> 
> - ROE = 0.10 × 2.0 × 1.5 = **0.30 or 30%**.
> 
> Explanation: The three-way decomposition multiplies profitability, efficiency, and leverage. Stopping at margin × turnover (= 20%) gives only ROA; multiplying by leverage (×1.5) lifts it to ROE.

> [!question] QUESTION — Tax burden from a tax rate
> Problem: The firm's average tax rate is 20%. What is the tax burden in the five-way DuPont?
> 
> ---
> 
> - Tax burden = 1 − 0.20 = **0.80**.
> 
> Explanation: Tax burden equals Net income / EBT, which is exactly one minus the average tax rate. A tax burden of 0.80 means the firm keeps 80 cents of every pretax dollar.

> [!question] QUESTION — Which driver moved ROE?
> Problem: Over two years, net profit margin and total asset turnover were unchanged, but leverage rose from 1.5 to 2.0. The firm borrows below the return earned on the borrowed funds. What most likely happened to ROE?
> 
> ---
> 
> - Under the three-way form, ROE is proportional to leverage when margin and turnover are held constant.
> - Leverage rose by a factor of 2.0 / 1.5 ≈ 1.33, so **ROE rose by about 33%**.
> 
> Explanation: Because borrowing cost is below the marginal return on invested funds, additional leverage is effective and ROE increases. If borrowing cost had exceeded that return, leverage would have reduced ROA and ROE would have fallen.

> [!question] QUESTION — Five-way decomposition
> Problem: Tax burden = 0.70, interest burden = 0.90, EBIT margin = 5%, total asset turnover = 1.1, leverage = 1.6. Compute ROE.
> 
> ---
> 
> - ROE = 0.70 × 0.90 × 0.05 × 1.1 × 1.6.
> - = 0.63 × 0.05 × 1.76 = 0.0315 × 1.76 ≈ **5.55%**.
> 
> Explanation: The product of tax burden and interest burden (0.63) collapses into the "retention after tax and interest." Multiply by EBIT margin to get net profit margin, by turnover to get ROA, and finally by leverage to get ROE. This is the Bloomberg-style view used to pinpoint which of the five levers moved.

> [!tip] Quick checks
> - ==Leverage ≥ 1 always==. If you computed leverage < 1, you flipped the ratio.
> - Tax burden and interest burden each lie in (0, 1]. Values above 1 mean you used the wrong numerator/denominator.
> - Three-way collapse test: Tax burden × Interest burden × EBIT margin should equal net profit margin. If it does not, the inputs are inconsistent.
> - All-equity firm → ROE = ROA. Use this as a sanity check when leverage = 1.

#### Industry-Specific Financial Ratios

> [!abstract] MEMORISE
> - No universal ratio definition exists → ratios are indicators, and what matters in one industry may be irrelevant in another.
> - Industry-specific ratios exist because the business model defines what to measure: stores for retailers, rooms for hotels, subscribers for streaming, employees for services, deposits for banks.
> - Regulated industries (especially banking) carry ratios that are not optional — they are regulatory thresholds.
> - Early-stage, pre-profit firms are often valued on industry-specific operating metrics rather than earnings ratios.

1. Ratios are tools, not definitions → the same label can mean different things across analysts, so the point is to pick ratios that indicate something important about *this* industry → that is why aspects irrelevant to one business (same-store sales for a bank) become central in another (same-store sales for a retailer).
2. Business risk is measured by coefficient of variation (CV) — standard deviation scaled by the mean → it tells you how volatile the line is relative to its typical level, which lets you compare firms of different sizes. Three common forms:
$$ \text{CV of Net Income} = \frac{\sigma(\text{Net Income})}{\text{Avg. Net Income}} $$
$$ \text{CV of Revenues} = \frac{\sigma(\text{Revenue})}{\text{Avg. Revenue}} $$

> [!tip] Notation in simple language
> - σ(·) = standard deviation of the series across years.
> - Avg. = arithmetic mean of the series across the same years.
> - Higher CV → more business risk relative to size.

> [!info] WHY CV, AND WHY HIGHER CV = MORE RISK
> Forget the formula. Two chai stalls:
>
> * **Ramesh**: avg USD 1,000, swings ±50
> * **Suresh**: avg USD 10,000, swings ±500
>
> Raw volatility says Suresh is riskier. Wrong. Both swing **5%** around their own scale:
>
> $$ \text{CV}*{R} = \frac{50}{1{,}000} = 5\% \qquad \text{CV}*{S} = \frac{500}{10{,}000} = 5\% $$
>
> Same CV → same *relative* risk. CV removes size and compares variability per unit of business.
>
> Risk = **unpredictability around the mean**:
>
> * **Low CV (≈5%)** → earnings stay close to average → forecastable → lower risk
> * **High CV (≈60%)** → earnings swing widely → average loses meaning → higher risk
>
> Example:
>
> * Utility → stable → low CV
> * Semiconductor → cyclical → high CV
>
> Same average possible, but very different risk.
>
> CV works because it scales volatility by the mean, giving a unit-free measure across firms. **Higher CV → more risk relative to size.** 


3. Financial sector ratios exist because banks are regulated on liquidity and solvency, not just profitability:
   - **Capital adequacy** = Components of capital ÷ risk-weighted assets (or market/operational risk exposure) → ties solvency to risk exposure.
   - **Monetary reserve requirement (cash reserve ratio)** = Reserves held at the central bank ÷ specified deposit liabilities → indicates banking liquidity under monetary rules.
   - **Liquid asset requirement** = Approved “readily marketable” securities ÷ specified deposit liabilities.
   - **Net interest margin (NIM)** = Net interest income ÷ total interest-earning assets → the spread earned on the asset base that actually generates interest.


> [!info] WHY BANKS NEED FOUR RATIOS, NOT ONE (intuition first)
> A bank borrows short (deposits) and lends long (mortgages). That mismatch *is* banking risk, and a bank can die in four independent ways — each ratio guards one door.
>
> Take **Lehmann Brothers Bank**: USD 1,000 of deposits, lent as USD 400 govt bonds + USD 400 corporate loans + USD 200 risky loans.
>
> - **Capital adequacy — "can you absorb losses?"** Weight loans by risk (0% / 100% / 150%) → RWA = USD 700. Against that, Lehmann Brothers holds USD 70 of its own capital → **10%** (Basel minimum ~8%). Capital takes the hit before depositors. **Denominator is risk-weighted, not total** — a bond-heavy bank needs little capital, a credit-card bank needs a lot.
>
> - **Cash reserve ratio — "can you meet today's withdrawals?"** Central bank forces Lehmann Brothers to park, say, 4% of deposits (USD 40) at the RBI — dead money, no yield. This can also be used a s monetary policy lever to control money supply. 
>
> - **Liquid asset requirement — "what if a run beats CRR?"** Second wall of assets you can dump in a day (T-bills, govt bonds). Say USD 200 → 20%. **CRR is dead money at the central bank; LAR is alive money in the bond market.**
>
> - **Net interest margin — "are you any good at the day job?"** Pay depositors 3%, lend at 8%, keep the spread. 
> - Net interest income (USD 50) ÷ *interest-earning* assets (USD 900) ≈ **5.6%**. Denominator excludes buildings and ATMs (they don't earn interest). ==Higher NIM isn't automatically better — often just means riskier borrowers.==
>
> **The picture.** Capital adequacy = survive losses. CRR + LAR = survive a run. NIM = earn in normal times. All four must pass independently.
>
> **Denominator rule.** Divide by *what can walk out the door* (deposits) or *what can blow up* (risky assets). Pick the fear, and the denominator writes itself.

4. Retail ratios focus on where retail growth actually comes from:
   - **Same (or comparable) store sales** = average revenue growth year over year for stores open in both periods → isolates organic growth from new-store growth. No denom
   - inator in the classical sense; it is a growth metric, not a stock metric.
     - *Remember this:* If Starbucks says total revenue grew 12% but same-store sales grew only 2%, it means the existing stores barely grew. The extra growth came from opening new stores. That is why analysts watch same-store sales — it tells you whether the business itself is getting stronger, or whether the company is only buying growth by opening new outlets.
   - **Sales per square meter (or square foot)** = Revenue ÷ total retail space → a productivity-of-space metric.
     - *Remember this:* An Apple Store earns about USD 5,500 of sales per square foot every year. A Walmart earns about USD 400. Both are called "retailers," but one square foot of floor space is doing completely different work in each. The ratio shows you how much money the shop squeezes out of every bit of floor it pays rent on.

5. Service companies are measured on human-capital productivity because their assets are skill-based:
   - **Revenue per employee** = Revenue ÷ total number of employees.
   - **Net income per employee** = Net income ÷ total number of employees.
     - *Remember this:* Valve, the company that runs the Steam gaming store, has only about 350 employees but serves more than 100 million gamers. It reportedly earns between USD 3.5 million and over USD 10 million of profit *per employee*. A normal consulting firm earns around USD 300,000 of revenue per employee. For service and software companies, the people are the factory, so this number tells you how much output each person produces.

6. Hotels are measured on room utilisation and pricing:
   - **Average daily rate (ADR)** = Room revenue ÷ number of rooms sold → pricing power per occupied room.
   - **Occupancy rate** = Number of rooms sold ÷ number of rooms available → how intensively capacity is used.
     - *Remember this:* The Taj in Mumbai might charge USD 400 per night and fill 70% of its rooms. A budget hotel like OYO might charge USD 30 and fill 95%. Both are hotels, but one makes its money from high prices and the other from filling rooms. Because of this, hotel analysts multiply the two ratios together to get **Revenue per Available Room** (the standard industry number): average price per room sold × fraction of rooms sold. This single number lets you compare a luxury hotel and a budget hotel fairly.

7. Subscription / relationship-based businesses are measured on the customer base:
   - **Average revenue per user (ARPU)** = Revenue ÷ average number of subscribers or users → the monetisation intensity of each relationship.
     - *Remember this:* Spotify earns roughly USD 5 per user per month. Netflix earns about USD 12. Both stream content, but each Netflix customer is worth more than twice a Spotify customer. When Reliance Jio launched in India, it deliberately kept this number near zero to pull in hundreds of millions of users, then slowly raised prices. Average revenue per user is the number subscription businesses live and die by — it tells you whether each customer relationship is actually worth something.

> [!question] QUESTION — Occupancy and ADR
> Problem: A hotel has 200 rooms available, sells 150 rooms on a given night, and earns room revenue of USD 30,000 that night.
> 
> ---
> 
> - Occupancy rate = 150 / 200 = **75%**.
> - ADR = USD 30,000 / 150 = **USD 200 per occupied room**.
> 
> Explanation: Occupancy uses *rooms available* as the denominator (capacity utilisation), while ADR uses *rooms sold* as the denominator (price realised per occupied room). Confusing the two denominators is the most common mistake.

> [!question] QUESTION — Sales per square meter
> Problem: A retailer reports revenue of USD 20 million across 2,000 square meters of retail space.
> 
> ---
> 
> - Sales per square meter = USD 20,000,000 / 2,000 = **USD 10,000**.
> 
> Explanation: This is a space-productivity ratio — revenue divided by physical selling area. It is distinct from same-store sales, which measures *growth* across periods for stores open in both.

> [!warning] EASY TO FORGET
> - Same-store sales has **no denominator** in the usual sense — it is a year-over-year growth figure restricted to stores open in both periods.
> - Net interest margin scales by **interest-earning assets**, not total assets and not deposits.
> - Cash reserve ratio uses **central-bank reserves ÷ deposits**, not marketable securities ÷ deposits (that is the liquid asset requirement).
> - Coefficient of variation = σ ÷ mean, **not** mean ÷ σ.

8. The scope limit: Exhibit 36 is illustrative, not exhaustive → many industries have their own ratios outside this module (for example, Standard and Poor’s Industry Surveys and industry bodies publish more) → so the exam-relevant point is the *principle*: the ratio must reflect what actually drives value in that industry.

### MODULE 12: INTRODUCTION TO FINANCIAL STATEMENT MODELING

> [!info] HOW TO READ THIS MODULE
> Modeling is disciplined storytelling with numbers.
> The learning outcomes are: build sales-based pro forma models, control analyst bias, use Porter’s five forces, model inflation and deflation, choose a forecast horizon, and make long-term projections.
> The model is not the truth. It is your assumptions wearing a spreadsheet.

#### Financial Statement Modeling

1. A sales-based pro forma model usually starts with revenue. Forecast sales, then connect costs, margins, working capital, capital expenditures, debt, taxes, and cash flow to that sales forecast.
2. The danger is false precision. A model saying revenue will be USD 10,342 million does not mean you know the future to the nearest million. It means your assumptions produced that number.
3. Behavioral biases matter. Anchoring makes you cling to last year’s forecast. Confirmation bias makes you notice only facts that support your story. Overconfidence makes a fragile model look scientific.
4. Porter’s five forces affect forecasts because competition changes price and cost power. If suppliers are strong, margins get squeezed. If customers are powerful, price increases may fail. If substitutes are easy, growth forecasts deserve suspicion.
5. Inflation and deflation matter because revenue growth can be price, volume, or both. A company may grow sales 8% only because prices rose 8%, not because customers bought more.
6. Forecast horizon matters because detailed forecasts become nonsense if stretched too far. Use explicit forecasts while you can reasonably model drivers, then shift to a terminal assumption.

> [!info] MODELING LIKE A HUMAN (intuition first)
> Imagine forecasting Netflix.
> You do not start with net income. You start with subscribers, average revenue per user, churn, content spending, marketing, and pricing power.
> Then you ask the annoying questions: can Disney, Amazon, and YouTube steal attention? Can Netflix raise prices without losing users? Does content spending grow slower than revenue?
> That is modeling. You are not filling cells; you are turning business reality into a financial story.

> [!tip] REAL-WORLD HOOK
> WeWork’s old projections looked beautiful because the model assumed growth, occupancy, and pricing would keep working. The real business had long lease obligations and uncertain tenant demand. A model can look elegant while the business underneath is fragile.

### MODULE 4: Fixed-Income Markets for Corporate Issuers

> Source module: `/home/karma/CFAPractice/mcq/quiz/AI/PDF/FixedIncome/module_04_fixed_income_markets_for_corporate_issuers.txt`


1. Uncommitted line = no legal obligation on the bank → holds zero capital → costs you nothing upfront but bank can say no anytime. _e.g. a small retailer uses this to cover a 30-day inventory gap - works fine in calm markets, bank pulls it the moment the economy wobbles._ 
2. "Anytime" means exactly when markets are stressed and you need it most → can't build a funding plan around it → you need something the bank is contractually stuck with. _e.g. 2008 - firms relying on uncommitted lines found them gone overnight, forced into panic asset sales._  
3. Committed line = bank signs a legal promise → must hold capital against it → charges you ~0.50% commitment fee to recover that cost, drawn or not. _e.g. a mid-size manufacturer keeps a $50M committed line as a liquidity buffer - pays $250K/year just to have it available._    
4. Large borrowers make the capital burden on one bank too big → banks syndicate, each taking a fixed slice → spreads burden without reducing your access. _e.g. a $2B committed facility for a multinational split across 10 banks, each holding $200M - no single bank breaks a sweat._
5. Revolver = committed line made multiyear + covenants added → lender locks in control before things go wrong → you give up flexibility but finally have funding you can budget around. _e.g. Apple's $10B revolver sits undrawn as a backstop - the covenant structure means lenders get early warning, Apple gets certainty._
6. Unsecured credit requires credit quality you might not have → secured loans solve this by pledging assets (receivables, inventory, fixed assets) → lender files a lien → you get the loan but your balance sheet now advertises the pledge to every future creditor.
7. Receivables can either be _assigned_ (you keep collecting, asset is just collateral) or _sold to a factor_ (factor takes over collections at a discount) → factoring is faster cash but costlier → discount size depends on receivable quality and collection difficulty. _e.g. a mid-size supplier factors $10M in invoices at 5% discount → gets $9.5M today instead of waiting 90 days._
8. Strong companies skip bank loans entirely → issue commercial paper (CP) in public markets → matures in <3 months → cheaper than bank debt but creates rollover risk (can't always reissue at maturity). _e.g. GE Capital rolled CP continuously pre-2008 - when markets froze, it couldn't roll → needed emergency Fed support._
9. Rollover risk on CP → investors demand a committed backup line as a condition → now you're paying bank commitment fees _and_ CP issuance costs → the backup line is the safety net that makes CP viable. _e.g. Apple issues CP backed by its revolver - if markets seize up, it draws the revolver to repay maturing paper instead._
10. Demand deposits = withdrawable anytime (meaning the bank could lose the funding any given day) → but fee rebates and credit lines keep commercial clients sticky → so banks treat this as reliable base funding despite the theoretical daily withdrawal risk.
11. Certificates of deposit (CDs) solve the stability problem formally → fixed maturity + fixed rate locks the depositor in → non-negotiable CD penalizes early exit → negotiable CD trades in open market so the depositor can exit without breaking the contract → large-denomination CDs become wholesale funding from institutional investors, same role as commercial paper (CP) but in deposit form.
12. The interbank market fills daily reserve gaps (banks are legally required to hold minimum reserves at the central bank - some have too much, some too little) → surplus banks lend to deficit banks at the central bank funds rate → if a bank can't borrow even here, it goes to the central bank's discount window, which costs more, requires collateral, and invites regulatory scrutiny.
13. Banks also fund themselves using asset-backed commercial paper (ABCP - short-term notes backed by a pool of loans, not the bank's own creditworthiness) → the bank sells its loans to a special purpose entity (SPE - a legally separate shell company created just to hold those loans) → the SPE issues ABCP to investors and repays them from loan cash flows → the bank gets cash today without the loans sitting on its balance sheet.
14. _Example. a bank holds $500M in car loans → sells them to an SPE → SPE issues ABCP to money market funds → money market funds get short-term paper backed by car loan repayments → bank gets $500M cash immediately → if the car loan pool performs badly or investors stop buying ABCP at maturity, the SPE can't roll the paper → bank's backup liquidity line gets drawn → the risk the bank thought it had moved off its books comes straight back._
#### REPURCHASE AGREEMENTS

1. Repo = you sell a security today and contractually agree to buy it back tomorrow at a higher price → the price difference is the interest → the security itself is the collateral → it's just a collateralized short-term loan dressed in sale language.
2. Repo rate = annualized interest implied by the gap between sell price and buyback price → lower than unsecured borrowing rates because the lender holds your security as protection.
3. Repo has two legs → opening leg: lender sends cash, borrower sends securities → closing leg: borrower sends back more cash than received and gets securities back → the extra cash paid at closing is the interest.    
4. Lender doesn't lend the full market value of the security → divides by initial margin (>1) to create a buffer: $$\text{Purchase Price} = \frac{\text{Market Value}}{\text{Initial Margin}}$$ $$= \frac{$1{,}000{,}000}{1.03} = $970{,}874$$ _Initial margin > 1 means you always get less cash than your collateral is worth - the lender keeps a cushion._
    
5. Haircut = the percentage chunk the lender shaves off your collateral value: $$\text{Haircut} = 1 - \frac{1}{\text{Initial Margin}} = 1 - \frac{1}{1.03} = 2.91 $$_Haircut and initial margin say the same thing - haircut is the loss percentage, margin is the ratio form of it._
    
6. Repurchase price = loan amount grown at the repo rate, scaled down for the actual number of days: $$\text{Repurchase Price} = \text{Purchase Price} \times \left[1 + \text{Repo Rate} \times \frac{\text{Days}}{360}\right]$$ $$= $970{,}874 \times \left[1 + 0.02 \times \frac{90}{360}\right] = $975{,}728$$ _Same as simple interest on a loan - rate times time, no compounding._
    
7. If collateral market value drops during the repo term → the cushion the lender built in via initial margin starts eroding → lender issues a variation margin call (a demand for additional collateral to restore the original buffer) → failure to post means the lender can seize and sell the collateral immediately.
8. _e.g. you repo a bond worth $1,000,000 at 103% initial margin → lender gives you $970,874 → bond price falls to $950,000 → required loan value is now $\frac{$950{,}000}{1.03} = $922{,}330$ → your outstanding loan of $970,874 now exceeds this → lender demands $970,874 − $922,330 = $48,544 in additional collateral immediately.
9. Repo serves three players differently → banks and financial institutions use it to borrow cash against securities they already hold → institutional investors (mutual funds, pension funds) use it to earn the repo rate on idle cash → central banks use it to control money supply (buying securities injects cash, selling pulls it back).    
10. Hedge funds use repo in reverse → they lend cash to borrow a specific security (called a "special trade") → immediately sell that security in the open market → buy it back cheaper later → return it to the repo counterparty at maturity → profit = price drop on the security minus the repo rate they paid; if the security is very hard to borrow, the hedge fund may accept a negative repo rate just to get their hands on it._
11. Repo rate moves with four levers → higher when money market rates rise (repo competes with alternatives) → higher when repo term is longer → lower when collateral is high quality or in short supply (lender wants that security) → higher when collateral is not actually delivered to the lender (undercollateralized = more risk = more compensation demanded).


> [!tip] HAMMER THIS INTO YOUR HEAD
> 
> WHEN REPO RATES ARE HIGHER?
> 
> One question covers everything: what's my risk, what are my alternatives, and how badly do I want that collateral?
> 
> Imagine yourself as the lender, you're handing over cash and holding a security as protection. If market rates are high, you have better places to put that cash, so you demand more to stay. If the term is long, more can go wrong, so again you charge more. If the borrower keeps the security at their end without delivering it to you, you can't sell it if they default means higher rate. The one exception: if the collateral is a scarce, in-demand security, you actually _want_ it on your books temporarily, so you're willing to accept less. 

12. Tri-party repo solves the operational risks but not credit risk → a third party custodian (usually a large bank or clearinghouse) sits between the two sides → handles collateral valuation, margining, and settlement → reduces margining and netting risk → bilateral repo (no third party) is cheaper but leaves both sides managing all of this themselves.

#### Extracted Notes 2

1. Weak credit → secured borrowing. Firms with low credit ratings must pledge collateral. Strong credit firms issue commercial paper (CP) → unsecured, typically < 3 months maturity, used for working capital or temporary/bridge funding.
2. **Factoring** Firm sells receivables to a lender at a discount. Lender takes over credit risk + collection. Example: ₹100 invoice sold for ₹95 today → instant liquidity.
3. Bridge Financing refers to short-term funding used until permanent financing (bonds, equity) is arranged. A company plans to issue a 10-year bond in 3 months but needs cash now to run operations → it issues 3-month commercial paper today → when the bond is issued, the proceeds are used to repay the CP.
4. **Rollover** = repaying old short-term debt by issuing new short-term debt instead of using cash. ==The risk that the company would not be able to sell a new commercial paper to repay the old one is known as rollover risk.==
5. Banks fund short-term mainly through deposits: checking, operational corporate deposits, savings, and certificates of deposit (CDs). For example, fixed deposits in India.
6.  Asset Backed Commercial Paper: A bank sets up a vehicle that buys car loans, then issues 30-day asset-backed commercial paper to investors, and keeps issuing new 30-day ABCP every month to repay the old ABCP, with the car loans as collateral. Cash to repay ABCP comes from loan EMIs first, new ABCP issuance next, money from sponsoring bank during bad days, and asset sales only as last resort.
7. Repo = collateralised borrowing where one party sells a security today and agrees to buy it back later at a higher price; that price difference is the repo rate, i.e. the interest on the loan embedded in prices, not quoted separately.
8. Example (India): An Indian bank needs overnight cash → it sells government bonds to the RBI for ₹100 today and agrees to repurchase them tomorrow for ₹100.02 → the ₹0.02 difference is the repo interest, and the bonds are the collateral.
9.   Collateral protection: lender demands collateral worth more than the cash lent to protect against price drops.
10. **Initial margin (haircut)** = gap between collateral market value and loan amount → loan amount is a discount to collateral value. Collateral worth ₹105 is posted, but the lender gives only ₹100 cash → the ₹5 gap is the initial margin (haircut) protecting the lender if collateral prices fall.
11. During the repo’s life, if collateral value falls, borrower must post extra collateral → this top-up demand is variation margin.
12. Overnight repo = one-day repo; term repo = repo longer than one day. Repo rates are usually lower than unsecured bank loans because the loan is backed by high-quality collateral (often government bonds).
13.  Repo rates are usually lower when the collateral liquidity is high and the collateral is physically delivered to the lender. Repo rates are usually higher when the term is high and when interest rates for alternative sources of funds are higher.
14.  Tri-party repo = repo where a third party (clearing bank/CCP) handles collateral custody, valuation, and margining; example: an Indian bank borrows overnight via repo using G-secs, while CCIL sits in the middle holding the bonds and settling cash.
15. Reverse repo = the lender’s side of a repo; example: a bank parks excess cash with the RBI, receives G-secs as collateral, and earns the reverse repo rate as interest.
16.  Tri Party repos protect against the following kinds of risks:
	- Default risk = the borrower takes cash today and fails to repurchase the collateral later, forcing the lender to sell the collateral to recover money.
	- Collateral risk = the value of the collateral falls sharply before it can be sold, so even after liquidation it does not fully cover the cash lent.
	- Margining risk = collateral prices move faster than margin calls, so the lender is exposed during the time gap between a price fall and posting of additional collateral.
	- Legal risk = in stress or bankruptcy, the repo is not enforced as expected, and courts may freeze or delay access to collateral by treating the repo like a normal loan.
	- Netting risk = when a counterparty defaults, you cannot offset what you owe against what you are owed, so you must pay all obligations in full while recovering only partially on claims.
	- Settlement risk = cash and securities do not settle simultaneously, so one party delivers cash while the collateral delivery fails or is delayed.

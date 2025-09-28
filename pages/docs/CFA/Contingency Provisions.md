Based on contingency provisions, bonds can be categorised into two types:
1. Straight or Option free bonds:
2. Option  Embedded bonds:
	- Callable bonds are bonds the issuer can pull back before maturity. You buy a 10-year paying 6%. After 5 years, rates drop to 4%. The issuer calls it, pays you back, and refinances cheaper.
	- In Puttable bond, you can “put” the bond back to the issuer at par (or a preset price) on certain dates before maturity. Example: You buy a 10-year bond at 5%, but it’s puttable after year 3. If rates spike to 7% in year 3, you don’t have to sit on a bad deal—you exercise the put, redeem at par, and reinvest at higher yields.

It’s downside protection for the holder, paid for with a lower coupon.

!!! warning
    Unlike equities, bonds and call options do not trade seprately. The option is baked into the contract.

3. **Convertible bonds:**

A **convertible bond with a warrant attached** is debt with 
two sweeteners stacked on top:
 
	1. **Convertible bond** → lets you swap your bond into equity of the issuing company at a set price.
    
	2. **Warrant** → a separate, detachable option to buy more shares later at a fixed strike. The warrant is just a free call option stapled to the bond. It gives you the right (not obligation) to buy stock at a preset strike.

Difference is: the convertible feature consumes the bond itself—you give up the bond when you convert. The warrant is separate and detachable—you can sell it, trade it, or exercise it without touching the bond.

So you’re lending money, earning coupons, and holding optionality twice: you can convert your bond into stock *and* you can keep (or even sell) the warrant.
**Example:** A company issues a 5-year 5% bond. You can convert it into shares at \$50 each. On top, you get a warrant giving you the right to buy more shares at \$55 anytime in the next 3 years.

!!! warning
    Unlike Callable Bonds, Warrants on Convertible Bonds can be traded seprately. In case of warrants, you will get **new shares** from the company, unlike a call option where existing shares are exchanged.

It’s debt, equity, and options stitched together.

4. Contingent Convertible Bonds (COCO Bonds):  
Contingent Convertible Bonds (**CoCos**) are bank debt designed to flip under stress. They pay coupons like normal bonds, but if the bank’s capital ratio falls below a set trigger, the bond either converts into equity or gets written down.

Example: a bank issues a \$1,000 CoCo at 8%. As long as capital stays above the threshold, you collect coupons. If it drops below, your bond turns into shares at a preset price or loses part of its value.
CoCos exist to give banks an automatic capital buffer when conditions deteriorate.
- Suppose you $1000, 10 year, 8% semi annual coupons
- They are trading at $1250, convertible to 40 equity shares each. 
> This means if you give convertible bond back to the company, you will get 40 new equity shares in return.
- Current market price of Equity = $47

The yield-to-maturity for similar non-convertible bonds is 7.8%.  So we can use this information to calculate the price of this bond has it been non-convertible.

Given:
FV = $1000
PMT = 1000 * 0.08 / 2 = $40
N = 10 * 2  = 20
r = i/y = 7.8/2 = 3.9

The PV of the similar non-convertible bond should be:

PV of coupons = $40 \times (1 - (1+r)^{-N}) / y$ = 548.46
PV of FV = $1000 / (1+r)^N$ = 465.25

Adding these gives us \$1013.71

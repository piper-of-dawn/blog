## Variant: Match the Cash Flow, Discount Rate, and Value

**Abstract:** *First identify who gets the cash. FCFF belongs to all capital providers and uses WACC; FCFE belongs only to common shareholders and uses the required return on equity.*

> An analyst has forecasts of both FCFF and FCFE. Which cash flow and discount rate should be used to estimate firm value and equity value?

**FCFF. What is FCFF?** Free cash flow to the firm is cash available to debt and equity investors after operations and reinvestment. **FCFE. What is FCFE?** Free cash flow to equity is cash left for common shareholders after reinvestment and net debt financing. **WACC. What is WACC?** The weighted average cost of capital is the required return demanded by all capital providers.

**1. Match each cash stream to its owner**

$$
\boxed{\text{Firm value}=PV(FCFF\text{ discounted at WACC})}
$$

*Carry that checkpoint into the next step.*

$$
\boxed{\text{Equity value}=PV(FCFE\text{ discounted at }r)}
$$

Here, $r$ is the required return on common equity. The discount rate must belong to the same people who receive the cash.

> [!NOTE]
> **FCFF → WACC → firm value. FCFE → equity return → equity value.** Mixing the lanes breaks the valuation.

---

## Variant: Discount a Finite FCFF Stream

**Abstract:** *Discount each FCFF to today, add the pieces, then subtract debt. Do not subtract debt before valuing the operating business.*

> A firm will produce FCFF of $100 million, $110 million, and $120 million over the next three years. WACC is 10%, debt is worth $50 million, and 10 million shares are outstanding. Ignore cash flows after Year 3. Find value per share.

**Present value. What is present value?** It is future cash translated into today’s money: $PV=CF_t/(1+k)^t$, where $CF_t$ is the Year-$t$ cash flow, $k$ is the discount rate, and $t$ is years away.

**1. Discount the operating cash flows**

$$
V_{firm}=\frac{100}{1.10}+\frac{110}{1.10^2}+\frac{120}{1.10^3}=\boxed{\$271.98\text{m}}
$$

**2. Move from the whole firm to common equity**

$$
V_{share}=\frac{271.98-50}{10}=\boxed{\$22.20}
$$

> [!NOTE]
> FCFF first gives operating firm value. Debt gets paid before common shareholders, so subtract debt afterward.

---

## Variant: Discount a Finite FCFE Stream

**Abstract:** *FCFE already belongs to common shareholders, so discount it at the equity return and divide by shares—no second debt subtraction.*

> Forecast FCFE is $50 million, $55 million, and $60 million in Years 1–3. The required return on equity is 12%, 10 million shares exist, and there is no terminal value. Find value per share.

**Required return on equity. What is it?** It is the return common shareholders demand for bearing the stock’s risk. **FCFE valuation. What is it?** $V_{equity}=\sum FCFE_t/(1+r)^t$, where $r$ is that required equity return.

**1. Bring each FCFE home to today**

$$
V_{equity}=\frac{50}{1.12}+\frac{55}{1.12^2}+\frac{60}{1.12^3}=\boxed{\$131.20\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
V_{share}=\frac{131.20}{10}=\boxed{\$13.12}
$$

Debt is already reflected through interest and net borrowing inside FCFE.

> [!NOTE]
> Do not subtract debt again from an FCFE valuation. That would charge shareholders for the same debt twice.

---

## Variant: Calculate WACC with Market-Value Weights

**Abstract:** *Weight debt and equity by market value, tax-adjust only debt, and add the pieces.*

> A company is financed with 40% debt and 60% equity. Its before-tax cost of debt is 6%, required equity return is 10%, and tax rate is 25%. Calculate WACC.

**Market-value weight. What is it?** It is each funding source’s current market-value share. **Tax shield. What is it?** Interest reduces taxable income, so after-tax debt cost is $r_d(1-T)$, where $r_d$ is debt cost and $T$ is the tax rate. **WACC. What is WACC?** $WACC=w_dr_d(1-T)+w_er_e$.

**1. Tax-adjust debt, then weight both sources**

$$
WACC=0.40(0.06)(1-0.25)+0.60(0.10)=\boxed{7.80\%}
$$

The weights add to 100%, which is our quick debugger.

> [!NOTE]
> Use market or target weights—not book weights—and never tax-adjust the common-equity return.

---

## Variant: Value Equity with the Constant-Growth FCFF Model

**Abstract:** *Grow FCFF once to Year 1, divide by WACC minus growth, then remove debt and divide by shares.*

> FCFF just ended at $100 million. It will grow forever at 4%. WACC is 9%, debt is $500 million, and 100 million shares exist. Estimate value per share.

**Constant growth. What does it mean?** Cash flow grows forever at one sustainable rate $g$. **FCFF model. What is the formula?** $V_{firm}=FCFF_1/(WACC-g)=FCFF_0(1+g)/(WACC-g)$.

**1. Value the operating firm**

$$
V_{firm}=\frac{100(1.04)}{0.09-0.04}=\boxed{\$2{,}080\text{m}}
$$

**2. Pay debt, then spread equity across shares**

$$
V_{share}=\frac{2{,}080-500}{100}=\boxed{\$15.80}
$$

> [!NOTE]
> The numerator is next year’s $FCFF_1$, not the cash flow that just ended at Time 0.

---

## Variant: Value a Share with the Constant-Growth FCFE Model

**Abstract:** *FCFE is already shareholder cash. Grow it once, divide by equity return minus growth, and stop.*

> FCFE per share just ended at $3.20. It should grow forever at 5%, and shareholders require 11%. Estimate intrinsic value per share.

**Intrinsic value. What is it?** It is the model’s estimate of what the share is worth. **Constant-growth FCFE model. What is it?** $V_0=FCFE_1/(r-g)=FCFE_0(1+g)/(r-g)$, where $r$ is the equity return and $g$ is growth.

**1. Grow once and capitalize forever**

$$
V_0=\frac{3.20(1.05)}{0.11-0.05}=\boxed{\$56.00}
$$

The model says the entire future stream is worth $56 today.

> [!NOTE]
> FCFE per share goes straight to value per share. Do not subtract debt or divide by shares again.

---

## Variant: Solve Backward for the Implied Growth Rate

**Abstract:** *When price, cash flow, and return are known, rearrange the constant-growth model to discover the growth rate baked into price.*

> A stock sells for $50. FCFE per share just ended at $3, and the required return is 10%. What perpetual FCFE growth rate does the price imply?

**Implied growth. What is it?** It is the growth assumption hidden inside the market price. Starting from $V_0=FCFE_0(1+g)/(r-g)$, solve for $g$ rather than value.

**1. Rearrange without guessing**

$$
50=\frac{3(1+g)}{0.10-g}
$$

*Carry that checkpoint into the next step.*

$$
5-50g=3+3g\quad\Rightarrow\quad g=\frac{2}{53}=\boxed{3.77\%}
$$

The answer is below 10%, so the denominator stays positive.

> [!NOTE]
> Back-solving exposes the market’s assumption; it does not prove that assumption is sensible.

---

## Variant: Reject an Impossible Perpetual-Growth Input

**Abstract:** *A perpetuity only works when the discount rate beats growth. If growth catches or passes it, the denominator hits zero or turns negative.*

> An analyst uses $FCFE_1=5$, required return $r=9\%$, and perpetual growth $g=10\%$. Calculate value and assess the model.

**Perpetuity. What is it?** A cash-flow stream assumed to continue forever. **No-growth boundary. What is the rule?** The constant-growth formula $V_0=FCFE_1/(r-g)$ requires $r>g$.

**1. Check the denominator before touching the calculator**

$$
r-g=0.09-0.10=-0.01
$$

A negative denominator produces $-500$, which is not a valid equity value here.

$$
\boxed{\text{Model invalid because }g\ge r}
$$

> [!NOTE]
> Always run the $r>g$ check first. A calculator can print a number even when the economics are broken.

---

## Variant: Calculate FCFF from Net Income

**Abstract:** *Start with shareholder earnings, add back noncash charges and after-tax interest, then subtract money reinvested in fixed and working capital.*

> Net income is $120 million, noncash charges are $20 million, interest is $30 million, tax is 25%, fixed-capital investment is $80 million, and working-capital investment is $10 million. Calculate FCFF.

**Noncash charges, or NCC. What are they?** Expenses that lowered profit without using cash. **FCInv and WCInv. What are they?** Investment in long-lived operating assets and net operating working capital. **FCFF formula. What is it?** $FCFF=NI+NCC+Int(1-T)-FCInv-WCInv$.

**1. Rebuild cash available to every investor**

$$
FCFF=120+20+30(1-0.25)-80-10=\boxed{\$72.50\text{m}}
$$

> [!NOTE]
> Add **after-tax** interest because net income removed a lender cash flow, while FCFF belongs to lenders and shareholders together.

---

## Variant: Build Net Noncash Charges with Gains and Losses

**Abstract:** *Add back noncash expenses and losses; subtract noncash gains. The sign follows what each item did to net income.*

> Net income includes $20 million depreciation, an $8 million gain on an asset sale, and a $5 million noncash impairment loss. Calculate net noncash charges.

**Depreciation. What is it?** A noncash expense spreading an asset’s cost across years. **Gain. What is it?** Income already included in net income but not an operating cash inflow. **Impairment. What is it?** A write-down that reduces profit without current cash leaving.

**1. Reverse the accounting effects**

$$
NCC=20-8+5=\boxed{\$17\text{m}}
$$

Depreciation and the loss reduced profit, so add them back. The gain raised profit, so subtract it.

> [!NOTE]
> Debug the sign by asking: “Did this noncash item push net income up or down?” Then reverse that push.

---

## Variant: Calculate FCFF from CFO

**Abstract:** *CFO already contains net income, noncash adjustments, and working-capital changes. Add after-tax interest and subtract fixed-capital investment.*

> CFO is $150 million, interest expense is $30 million, tax is 25%, and fixed-capital investment is $70 million. Interest was classified inside CFO. Calculate FCFF.

**CFO. What is CFO?** Cash flow from operations is operating cash reported on the cash-flow statement. **FCFF from CFO. What is the formula?** $FCFF=CFO+Int(1-T)-FCInv$ when CFO already deducts interest paid.

**1. Restore lender cash, then pay for fixed assets**

$$
FCFF=150+30(1-0.25)-70=\boxed{\$102.50\text{m}}
$$

There is no separate $WCInv$ subtraction because CFO already captured it.

> [!NOTE]
> Starting from CFO and subtracting working-capital investment again is a classic double-count.

---

## Variant: Handle IFRS Interest Classified as Financing

**Abstract:** *The usual CFO formula assumes interest was deducted inside CFO. Under IFRS, if interest paid sits in financing cash flow, do not add it back again.*

> An IFRS company reports CFO of $120 million, classifies $20 million interest paid as financing, and invests $50 million in fixed capital. Calculate FCFF.

**IFRS classification. What does it mean?** IFRS may place interest paid in operating or financing cash flow. **Classification check. Why does it matter?** $FCFF=CFO+Int(1-T)-FCInv$ adds interest back only when CFO first deducted it.

**1. Follow what is already inside CFO**

Because this CFO never lost the financing-classified interest, adding it would count the same cash twice.

$$
FCFF=120-50=\boxed{\$70\text{m}}
$$

> [!NOTE]
> Read the cash-flow classification before using a memorized formula. The statement’s plumbing controls the adjustment.

---

## Variant: Derive Fixed-Capital Investment from Net PPE

**Abstract:** *Ending net PPE equals beginning net PPE plus purchases minus depreciation, so solve backward for purchases.*

> Net property, plant, and equipment rose from $550 million to $620 million. Depreciation was $50 million, and there were no disposals or acquisitions. Calculate fixed-capital investment.

**Net PPE. What is it?** Long-lived operating assets after accumulated depreciation. **FCInv. What is it?** Cash invested in those fixed operating assets. With no disposals, $FCInv=Ending\ net\ PPE-Beginning\ net\ PPE+Depreciation$.

**1. Reconstruct the asset roll-forward**

$$
FCInv=620-550+50=\boxed{\$120\text{m}}
$$

The company needed $50 million just to replace the accounting wear plus $70 million to grow net PPE.

> [!NOTE]
> A $70 million rise in net PPE is not the capex answer; depreciation hid another $50 million of purchases.

---

## Variant: Calculate Investment in Operating Working Capital

**Abstract:** *Use noncash operating current assets minus non-debt operating current liabilities. Cash and borrowings stay outside the pipe.*

> Noncash operating current assets rise from $180 million to $220 million. Operating current liabilities rise from $110 million to $130 million. Calculate working-capital investment.

**Operating working capital. What is it?** Short-term operating assets financed after short-term operating liabilities: $OWC=Operating\ CA-Operating\ CL$. **WCInv. What is it?** The period’s increase, $WCInv=\Delta OWC$.

**1. Find how much extra cash got tied up**

$$
WCInv=(220-130)-(180-110)=90-70=\boxed{\$20\text{m}}
$$

An increase uses cash, so it will be subtracted in FCFF and FCFE.

> [!NOTE]
> Exclude cash, marketable securities, notes payable, and short-term debt unless the question explicitly treats them as operating.

---

## Variant: Convert FCFF into FCFE

**Abstract:** *Move from all-investor cash to shareholder cash by removing after-tax interest and adding net new borrowing.*

> FCFF is $150 million, interest is $30 million, tax is 25%, and net borrowing is $10 million. Calculate FCFE.

**Net borrowing. What is it?** New debt issued minus debt repaid. **FCFF-to-FCFE bridge. What is it?** $FCFE=FCFF-Int(1-T)+Net\ borrowing$.

**1. Remove the lender’s after-tax slice**

$$
FCFE=150-30(1-0.25)+10=\boxed{\$137.50\text{m}}
$$

Interest belongs to lenders, not common shareholders; new debt supplies fresh cash that can support shareholder cash flow.

> [!NOTE]
> New borrowing raises current FCFE; debt repayment lowers it. Use **net** borrowing, not gross issuance.

---

## Variant: Calculate FCFE from Net Income

**Abstract:** *Net income is the shareholder starting point: reverse noncash charges, pay for reinvestment, and add net debt financing.*

> Net income is $100 million, noncash charges are $20 million, fixed-capital investment is $70 million, working-capital investment is $15 million, and net borrowing is $25 million. Calculate FCFE.

**FCFE from net income. What is the formula?** $FCFE=NI+NCC-FCInv-WCInv+Net\ borrowing$. Each symbol is a cash adjustment needed to move from accounting profit to shareholder cash.

**1. Run the cash pipeline**

$$
FCFE=100+20-70-15+25=\boxed{\$60\text{m}}
$$

The $25 million borrowing funds part of the $85 million investment burden.

> [!NOTE]
> Common dividends are not subtracted. FCFE is cash **available** for distribution, whether or not the board distributes it.

---

## Variant: Calculate FCFE from CFO

**Abstract:** *CFO has already absorbed operating working capital. Subtract fixed investment and add net borrowing.*

> CFO is $130 million, fixed-capital investment is $60 million, and net borrowing is $15 million. Calculate FCFE.

**FCFE from CFO. What is the formula?** $FCFE=CFO-FCInv+Net\ borrowing$. **Why no interest adjustment?** CFO begins after the interest treatment relevant to common-equity cash, while FCFE keeps debt financing through net borrowing.

**1. Pay for long-lived assets and add fresh debt cash**

$$
FCFE=130-60+15=\boxed{\$85\text{m}}
$$

The units remain millions of currency per year.

> [!NOTE]
> From CFO to FCFE: subtract fixed investment, add net borrowing, and do not subtract working capital twice.

---

## Variant: Calculate FCFF from EBIT

**Abstract:** *Turn operating profit into after-tax operating profit, restore depreciation, then subtract fixed and working-capital investment.*

> EBIT is $200 million, tax is 25%, depreciation is $40 million, fixed-capital investment is $90 million, and working-capital investment is $15 million. Calculate FCFF.

**EBIT. What is EBIT?** Earnings before interest and taxes is operating profit before lender financing. **FCFF from EBIT. What is the formula?** $FCFF=EBIT(1-T)+Dep-FCInv-WCInv$.

**1. Convert operating profit into operating cash**

$$
FCFF=200(1-0.25)+40-90-15=\boxed{\$85\text{m}}
$$

Depreciation reduced EBIT but did not spend current cash, so it comes back.

> [!NOTE]
> EBIT is before interest already. Do not add interest again when starting from EBIT.

---

## Variant: Calculate FCFF from EBITDA

**Abstract:** *Tax EBITDA, restore the depreciation tax shield, then subtract both kinds of reinvestment.*

> EBITDA is $250 million, depreciation is $40 million, tax is 25%, fixed-capital investment is $90 million, and working-capital investment is $15 million. Calculate FCFF.

**EBITDA. What is EBITDA?** Earnings before interest, taxes, depreciation, and amortization. **Depreciation tax shield. What is it?** Depreciation saves taxes even though it uses no cash: $Dep\times T$. **FCFF formula. What is it?** $FCFF=EBITDA(1-T)+Dep(T)-FCInv-WCInv$.

**1. Build after-tax operating cash**

$$
FCFF=250(0.75)+40(0.25)-90-15=\boxed{\$92.50\text{m}}
$$

> [!NOTE]
> Do not simply use $EBITDA(1-T)$. Depreciation still created a real tax saving.

---

## Variant: Reconcile FCFF and FCFE by Two Routes

**Abstract:** *Equivalent formulas should land on the same number. Use the bridge as a checksum, not as another fact to memorize blindly.*

> Net income is $100 million, depreciation is $20 million, interest is $20 million, tax is 25%, fixed investment is $50 million, working-capital investment is $10 million, and net borrowing is $5 million. Calculate FCFF and FCFE, then verify the bridge.

**Reconciliation. What is it?** An independent route used to check the same answer. **Bridge. What is it?** $FCFE=FCFF-Int(1-T)+Net\ borrowing$.

**1. Calculate both cash flows**

$$
FCFF=100+20+20(0.75)-50-10=\boxed{\$75\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
FCFE=100+20-50-10+5=\boxed{\$65\text{m}}
$$

**2. Check the bridge**

$$
75-20(0.75)+5=65
$$

> [!NOTE]
> If the direct FCFE and bridged FCFE disagree, a sign or tax adjustment is wrong.

---

## Variant: Use the Target Debt-Ratio Shortcut

**Abstract:** *If debt finances a fixed fraction of reinvestment, shareholders fund only the leftover fraction.*

> Net income is $120 million. Net fixed-capital investment plus working-capital investment is $50 million, and debt finances 40% of that investment. Calculate FCFE.

**Debt ratio, or DR. What is it?** The fraction of new operating investment financed with debt. **Net investment. What is it?** $FCInv-Dep+WCInv$. **Shortcut. What is it?** $FCFE=NI-(1-DR)(FCInv-Dep)-(1-DR)WCInv$.

**1. Charge equity only for its 60% share**

$$
FCFE=120-(1-0.40)(50)=\boxed{\$90\text{m}}
$$

Debt supplies $20 million and equity absorbs $30 million.

> [!NOTE]
> Apply the target debt ratio to **net** fixed investment plus working-capital investment, not to gross capex blindly.

---

## Variant: Solve Backward for Net Borrowing

**Abstract:** *When FCFE is given, rearrange the net-income formula and let net borrowing be the balancing cash source.*

> FCFE is $95 million, net income is $110 million, noncash charges are $10 million, fixed investment is $40 million, and working-capital investment is $5 million. Find net borrowing.

**Net borrowing. What is it?** Debt issued minus debt repaid. From $FCFE=NI+NCC-FCInv-WCInv+Net\ borrowing$, isolate the unknown.

**1. See what cash exists before financing**

$$
110+10-40-5=75
$$

**2. Fill the gap to the reported FCFE**

$$
Net\ borrowing=95-75=\boxed{\$20\text{m}}
$$

> [!NOTE]
> A positive answer means net debt issuance; a negative answer means the company repaid more debt than it issued.

---

## Variant: Forecast FCFE from Sales Growth

**Abstract:** *Forecast profit from next year’s sales, forecast reinvestment from the sales increase, then leave equity only its share of that bill.*

> Sales rise from $1,000 million to $1,100 million. Net margin is 8%. Net fixed investment equals 30% of the sales increase, working-capital investment equals 10%, and debt finances 40% of total investment. Forecast FCFE.

**Net margin. What is it?** Net income divided by sales: $NI=Sales\times margin$. **Incremental investment. What is it?** New investment tied to the change in sales, not total sales.

**1. Forecast income and reinvestment**

$$
NI_1=1{,}100(0.08)=88
$$

*Carry that checkpoint into the next step.*

$$
Investment=(0.30+0.10)(1{,}100-1{,}000)=40
$$

*Carry that checkpoint into the next step.*

$$
FCFE_1=88-(1-0.40)(40)=\boxed{\$64\text{m}}
$$

> [!NOTE]
> Margin uses total forecast sales; incremental investment ratios use the **increase** in sales.

---

## Variant: Forecast FCFF Component by Component

**Abstract:** *Forecasting from sales means each operating component gets its own driver. This is safer than pretending one historical cash-flow number grows forever.*

> Next-year sales are $1,080 million, EBIT margin is 15%, depreciation is 4% of sales, fixed investment is 6% of sales, working-capital investment is 10% of the $80 million sales increase, and tax is 25%. Forecast FCFF.

**Component forecast. What is it?** Each FCFF input is forecast separately from its economic driver. **EBIT margin. What is it?** $EBIT/Sales$.

**1. Build the pieces**

$$
FCFF=1{,}080(0.15)(0.75)+1{,}080(0.04)-1{,}080(0.06)-80(0.10)
$$

*Carry that checkpoint into the next step.*

$$
FCFF=121.50+43.20-64.80-8.00=\boxed{\$91.90\text{m}}
$$

> [!NOTE]
> State what each percentage applies to. “10% working capital” is useless unless you know whether the base is sales or the sales change.

---

## Variant: Separate FCFE from Dividends and Repurchases

**Abstract:** *FCFE measures cash available to shareholders; dividends and buybacks describe how management uses it afterward.*

> A company generates FCFE of $100 million, pays $40 million of dividends, and repurchases $30 million of shares. What happens to FCFE, and how much remains undistributed?

**Dividend. What is it?** Cash paid directly to shareholders. **Share repurchase. What is it?** Company cash used to buy back its own shares. **Distribution. What is it?** A use of FCFE, not an ingredient in the FCFE formula.

**1. Keep generation separate from payout**

$$
FCFE=\boxed{\$100\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
Undistributed\ FCFE=100-40-30=\boxed{\$30\text{m}}
$$

> [!NOTE]
> Dividends, repurchases, and common-share issuance do not directly change current FCFF or FCFE; they allocate or raise equity cash afterward.

---

## Variant: Measure the Current FCFE Effect of More Debt Financing

**Abstract:** *For the same investment bill, more debt financing means shareholders supply less cash now, so current FCFE rises by the extra borrowing.*

> A $100 million operating investment was going to be financed with 30% debt. Management changes the plan to 60% debt. Holding everything else fixed, how does current FCFE change?

**Leverage. What is leverage?** The use of debt financing. **Net borrowing. What is it?** New debt minus repayments, and it enters FCFE with a plus sign.

**1. Compare the debt cash supplied**

$$
Net\ borrowing_{old}=100(0.30)=30
$$

*Carry that checkpoint into the next step.*

$$
Net\ borrowing_{new}=100(0.60)=60
$$

*Carry that checkpoint into the next step.*

$$
\Delta FCFE=60-30=\boxed{+\$30\text{m}}
$$

> [!NOTE]
> More borrowing boosts current FCFE but also changes future interest, risk, and required return. It is financing, not free wealth.

---

## Variant: Identify When Net Income Equals FCFE

**Abstract:** *Net income becomes a valid FCFE shortcut only when reinvestment after depreciation is exactly financed and working-capital and debt effects net to zero.*

> Net income is $80 million, depreciation is $50 million, fixed investment is $70 million, working-capital investment is $10 million, and net borrowing is $30 million. Calculate FCFE and assess net income as a proxy.

**Proxy. What is a proxy?** A shortcut used in place of the actual measure. **FCFE formula. What is it?** $FCFE=NI+Dep-FCInv-WCInv+Net\ borrowing$ here.

**1. Test the shortcut instead of assuming it**

$$
FCFE=80+50-70-10+30=\boxed{\$80\text{m}}
$$

Net investment is $70-50+10=30$, exactly matched by net borrowing.

> [!NOTE]
> Net income equals FCFE only in a special balancing case. It is not the general definition of shareholder cash flow.

---

## Variant: Quantify Why EBITDA Is a Bad FCFF Proxy

**Abstract:** *EBITDA skips taxes and reinvestment. Convert it properly, then measure how badly the shortcut overstates cash.*

> EBITDA is $200 million, depreciation is $30 million, tax is 25%, fixed investment is $60 million, and working-capital investment is $10 million. Calculate FCFF and EBITDA’s overstatement.

**EBITDA proxy. What does that mean?** Treating EBITDA as if it were distributable firm cash. **Correct conversion. What is it?** $FCFF=EBITDA(1-T)+Dep(T)-FCInv-WCInv$.

**1. Calculate actual firm cash**

$$
FCFF=200(0.75)+30(0.25)-60-10=\boxed{\$87.50\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
Overstatement=200-87.50=\boxed{\$112.50\text{m}}
$$

> [!NOTE]
> EBITDA ignores the tax bill, the depreciation tax shield, fixed investment, and working-capital investment.

---

## Variant: Include Preferred Stock in WACC and FCFF

**Abstract:** *Preferred stock is a third capital provider: weight its required return in WACC and add preferred dividends back when FCFF starts from common net income.*

> Debt, preferred stock, and common equity have market values of $400 million, $100 million, and $500 million. Their required returns are 8%, 8%, and 12%; tax is 30%. Common net income is $110 million, interest $32 million, preferred dividends $8 million, depreciation $40 million, fixed investment $70 million, and working-capital investment $20 million. Find WACC and FCFF.

**Preferred stock. What is it?** Equity with a stated dividend paid before common shareholders. **Preferred cost. What is it?** Its required return, not tax-deductible.

$$
WACC=0.40(0.08)(0.70)+0.10(0.08)+0.50(0.12)=\boxed{9.04\%}
$$

*Carry that checkpoint into the next step.*

$$
FCFF=110+40+32(0.70)+8-70-20=\boxed{\$90.40\text{m}}
$$

> [!NOTE]
> Add preferred dividends to common net income for FCFF because that cash belongs to another firm capital provider.

---

## Variant: Add Preferred Issuance to Common FCFE

**Abstract:** *Preferred dividends are already removed from common net income, but net preferred issuance is another financing cash source for common holders.*

> Common net income is $60 million, depreciation is $10 million, fixed investment is $20 million, working-capital investment is $5 million, net debt borrowing is zero, and net preferred issuance is $15 million. Calculate FCFE to common shareholders.

**Net preferred issuance. What is it?** Preferred shares issued minus preferred shares redeemed. Like new debt, positive issuance supplies financing cash.

**1. Start from income already after preferred dividends**

$$
FCFE=60+10-20-5+0+15=\boxed{\$60\text{m}}
$$

Without the preferred issuance, FCFE would have been $45 million.

> [!NOTE]
> Do not add preferred dividends back to FCFE when starting from net income available to common shareholders.

---

## Variant: Complete a Constant-Growth FCFF Valuation with Preferred Stock

**Abstract:** *Value operating assets with FCFF, then remove every senior capital claim before common equity gets the remainder.*

> FCFF just ended at £28 million and grows forever at 4%. WACC is 8.435%. Debt is £145 million, preferred stock is £65 million, 8 million common shares exist, and market price is £32.50. Estimate value per share and classify the stock.

**Senior claims. What are they?** Debt and preferred stock claims paid before common equity. **Classification. What is it?** Compare intrinsic value with market price.

$$
V_{firm}=\frac{28(1.04)}{0.08435-0.04}=\boxed{£656.60\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
V_{share}=\frac{656.60-145-65}{8}=\boxed{£55.82}
$$

Because £55.82 exceeds £32.50, the shares are undervalued by the model.

> [!NOTE]
> In an FCFF bridge, subtract both debt and preferred stock before dividing common equity by common shares.

---

## Variant: Value a Two-Stage FCFE Stream with Fixed Growth Rates

**Abstract:** *Forecast the high-growth cash flows, calculate terminal value at the handoff date, then discount every piece to today.*

> FCFE per share is $2.00 now, grows 15% for three years, then 5% forever. The required equity return is 11%. Estimate value per share.

**Two-stage model. What is it?** A high-growth period followed by perpetual stable growth. **Terminal value. What is it?** All cash flows after Year 3 compressed into $TV_3=FCFE_4/(r-g)$.

$$
FCFE_1=2.30,\quad FCFE_2=2.645,\quad FCFE_3=3.04175
$$

*Carry that checkpoint into the next step.*

$$
TV_3=\frac{3.04175(1.05)}{0.11-0.05}=53.2306
$$

*Carry that checkpoint into the next step.*

$$
V_0=\frac{2.30}{1.11}+\frac{2.645}{1.11^2}+\frac{3.04175+53.2306}{1.11^3}=\boxed{\$45.36}
$$

> [!NOTE]
> Terminal value sits at the **end of Year 3**, so discount it three periods—not four.

---

## Variant: Value a Two-Stage FCFF Stream

**Abstract:** *Discount high-growth FCFF plus terminal firm value, then bridge from firm value to equity value.*

> FCFF is $100 million now, grows 12% for two years, then 4% forever. WACC is 9%, debt is $400 million, and 50 million shares exist. Find value per share.

**Terminal firm value. What is it?** $TV_2=FCFF_3/(WACC-g)$. **Equity bridge. What is it?** $V_{equity}=V_{firm}-Debt$.

$$
FCFF_1=112,\quad FCFF_2=125.44,\quad FCFF_3=130.4576
$$

*Carry that checkpoint into the next step.*

$$
V_{firm}=\frac{112}{1.09}+\frac{125.44+130.4576/(0.09-0.04)}{1.09^2}=\boxed{\$2{,}404.40\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
V_{share}=\frac{2{,}404.40-400}{50}=\boxed{\$40.09}
$$

> [!NOTE]
> The stable-growth numerator is $FCFF_3$, the first cash flow **after** the explicit forecast period.

---

## Variant: Value a Declining-Growth FCFE Stream

**Abstract:** *When growth fades gradually, forecast each year separately. A two-stage jump shortcut would erase the transition the question gave you.*

> FCFE per share is $1.50 now. Growth declines through 20%, 15%, 10%, and 5% over Years 1–4, then remains 5%. The required return is 12%. Estimate value.

**Declining growth. What is it?** A transition in which each year has a different growth rate. **Stable stage. What is it?** The perpetual phase beginning after Year 4.

$$
FCFE_1=1.80,\ FCFE_2=2.07,\ FCFE_3=2.277,\ FCFE_4=2.39085
$$

*Carry that checkpoint into the next step.*

$$
TV_4=\frac{2.39085(1.05)}{0.12-0.05}=35.86275
$$

*Carry that checkpoint into the next step.*

$$
V_0=\sum_{t=1}^{4}\frac{FCFE_t}{1.12^t}+\frac{TV_4}{1.12^4}=\boxed{\$29.19}
$$

> [!NOTE]
> Apply each year’s growth to the previous year’s cash flow; do not apply all rates to $FCFE_0$.

---

## Variant: Value a Three-Stage FCFE Stream

**Abstract:** *Three-stage means three growth regimes. Build the timeline first, then discount; otherwise it is easy to apply the right rate in the wrong year.*

> FCFE per share is $0.75 now. It grows 10% in Year 1, 26% in Years 2–4, and 6% from Year 5 onward. Beta is 2.0, the risk-free rate is 4.5%, and the equity risk premium is 5%. Estimate value per share.

**CAPM. What is CAPM?** It estimates the equity return as $r=R_f+\beta ERP$, where $R_f$ is the risk-free rate, $\beta$ is market sensitivity, and $ERP$ is the equity risk premium. **Three-stage model. What is it?** Three distinct growth phases before the last phase continues forever.

$$
r=4.5\%+2.0(5\%)=14.5\%
$$

*Carry that checkpoint into the next step.*

$$
FCFE_1=0.825,\ FCFE_2=1.0395,\ FCFE_3=1.30977,\ FCFE_4=1.65031
$$

*Carry that checkpoint into the next step.*

$$
TV_4=\frac{1.65031(1.06)}{0.145-0.06}=20.5804
$$

*Carry that checkpoint into the next step.*

$$
V_0=\sum_{t=1}^{4}\frac{FCFE_t}{1.145^t}+\frac{TV_4}{1.145^4}=\boxed{\$15.32}
$$

> [!NOTE]
> Growth changes when moving **into** a year. Mark the rate above each timeline arrow before multiplying.

---

## Variant: Use a Price Multiple for Terminal Value

**Abstract:** *A terminal multiple prices the company at the end of the forecast period. Discount that future sale price back along with the interim cash flows.*

> A company is expected to earn $4.00 per share in Year 5. A justified terminal P/E is 18, and the required return is 12%. Ignoring interim FCFE, find the present value of the terminal stock price.

**P/E. What is P/E?** Price divided by earnings per share. **Terminal multiple. What is it?** A valuation multiple applied to a forecast fundamental at the horizon: $P_5=(P/E)_5\times EPS_5$.

$$
P_5=18(4.00)=\boxed{\$72.00}
$$

*Carry that checkpoint into the next step.*

$$
PV(P_5)=\frac{72}{1.12^5}=\boxed{\$40.86}
$$

> [!NOTE]
> A terminal multiple creates a **future** price. It is not today’s value until it has been discounted back.

---

## Variant: Place Gordon Terminal Value on the Correct Date

**Abstract:** *Terminal value at Year 5 begins with Year 6 cash flow. Grow the Year 5 cash once, capitalize it, then discount five years.*

> FCFE per share is $4.00 in Year 5. Stable growth from Year 6 onward is 5%, and the required return is 10%. Find terminal value at Year 5 and its present value.

**Gordon terminal value. What is it?** $TV_n=FCFE_{n+1}/(r-g)$, where $n$ is the last explicit forecast year.

$$
TV_5=\frac{4.00(1.05)}{0.10-0.05}=\boxed{\$84.00}
$$

*Carry that checkpoint into the next step.*

$$
PV(TV_5)=\frac{84}{1.10^5}=\boxed{\$52.16}
$$

> [!NOTE]
> The most common timing bug is using $FCFE_5$ in the numerator instead of $FCFE_6$.

---

## Variant: Measure How Much Value Comes from Terminal Value

**Abstract:** *Terminal value often carries most of the model. Measure its present-value share so you know where fragile assumptions are hiding.*

> A model gives present value of explicit FCFE of $18 million and present value of terminal value of $72 million. What percentage of equity value comes from terminal value?

**Terminal-value weight. What is it?** The fraction of total estimated value coming from cash flows beyond the explicit forecast: $Weight=PV(TV)/(PV(Explicit)+PV(TV))$.

**1. Divide the long-tail value by total value**

$$
Weight=\frac{72}{18+72}=\boxed{80\%}
$$

Only 20% comes from individually forecast years.

> [!NOTE]
> A high terminal-value weight is not automatically wrong, but it makes $r$, $g$, and the terminal multiple the model’s pressure points.

---

## Variant: Run a Single-Variable Sensitivity Analysis

**Abstract:** *Change one input while freezing the rest. That isolates which assumption is moving the valuation.*

> FCFE per share is $2.00, required return is 10%, and perpetual growth is 4%. Find base value, then change growth alone to 5%.

**Sensitivity analysis. What is it?** Recalculating value after changing one assumption. **Base case. What is it?** The central set of assumptions used for comparison.

$$
V_{base}=\frac{2(1.04)}{0.10-0.04}=\boxed{\$34.67}
$$

*Carry that checkpoint into the next step.*

$$
V_{g=5\%}=\frac{2(1.05)}{0.10-0.05}=\boxed{\$42.00}
$$

*Carry that checkpoint into the next step.*

$$
\Delta V=42.00-34.67=\boxed{+\$7.33}
$$

> [!NOTE]
> Change one input at a time for sensitivity analysis; changing several inputs creates a scenario, not a clean sensitivity test.

---

## Variant: Rank Inputs by Valuation Sensitivity

**Abstract:** *Compare each input’s low-to-high price range. The widest range marks the assumption that deserves the most scrutiny.*

> A one-variable sensitivity table gives price ranges of £18.50 for FCFE, £2.89 for the risk-free rate, £22.18 for the equity risk premium, £16.89 for beta, and £30.23 for growth. Rank the inputs from most to least sensitive.

**Sensitivity range. What is it?** $Range=Highest\ value-Lowest\ value$ while other inputs remain at base case.

**1. Sort the ranges, biggest first**

$$
30.23>22.18>18.50>16.89>2.89
$$

*Carry that checkpoint into the next step.*

$$
\boxed{Growth>ERP>FCFE_0>Beta>Risk\!\!-free\ rate}
$$

> [!NOTE]
> Rank the resulting **price ranges**, not the numerical sizes of the input changes.

---

## Variant: Value a Stock with Real Cash Flows and Real Rates

**Abstract:** *Real cash flows must travel with real discount and growth rates. Add justified real-risk adjustments, then use the familiar stable-growth model.*

> Normalized real FCFE per share is KRW1,300. The real country return is 6.50%, with industry +0.60%, size −0.10%, and leverage +0.25% adjustments. Real growth is 3.50%. Estimate value.

**Real rate. What is it?** A rate with inflation stripped out. **Build-up return. What is it?** $r_{real}=Country+Industry+Size+Leverage$.

$$
r_{real}=6.50\%+0.60\%-0.10\%+0.25\%=\boxed{7.25\%}
$$

*Carry that checkpoint into the next step.*

$$
V_0=\frac{1{,}300(1.035)}{0.0725-0.035}=\boxed{KRW35{,}880}
$$

> [!NOTE]
> Real FCFE goes with real $r$ and real $g$. Nominal FCFE goes with nominal rates. Never cross the wires.

---

## Variant: Convert a Nominal Return to a Real Return

**Abstract:** *Use the Fisher relation when cash flows are stated in real purchasing power but the discount rate includes inflation.*

> The nominal required return is 12% and expected inflation is 5%. Calculate the exact real required return.

**Nominal return. What is it?** A return including inflation. **Real return. What is it?** Growth in purchasing power. **Fisher relation. What is it?** $1+r_{nominal}=(1+r_{real})(1+\pi)$, where $\pi$ is inflation.

$$
r_{real}=\frac{1.12}{1.05}-1=\boxed{6.67\%}
$$

The quick subtraction $12\%-5\%=7\%$ is only an approximation.

> [!NOTE]
> Use the exact Fisher relation when precision matters; the subtraction shortcut is rough.

---

## Variant: Classify a Stock from Model Value and Market Price

**Abstract:** *The model supplies intrinsic value; the market supplies price. Their direction tells you under- or overvaluation.*

> A free-cash-flow model estimates value at $45 per share while the stock trades at $52. Classify it and calculate the percentage overvaluation relative to intrinsic value.

**Overvalued. What does it mean?** Market price is above model value. **Percentage gap. What is it?** $(Market-Intrinsic)/Intrinsic$.

$$
Gap=52-45=\boxed{\$7}
$$

*Carry that checkpoint into the next step.*

$$
Percentage\ overvaluation=\frac{52-45}{45}=\boxed{15.56\%}
$$

> [!NOTE]
> “Overvalued” is conditional on the model and assumptions; it is not a guaranteed trading profit.

---

## Variant: Add Non-Operating Assets before Finding Equity Value

**Abstract:** *FCFF values operating assets. Add assets outside operations at market value, subtract debt, then divide by shares.*

> Operating assets are worth SEK720 million. Excess cash is SEK60 million, noncurrent investments have market value SEK45 million, a pension surplus is SEK40 million, debt is SEK215 million, and 100 million shares exist. Find value per share.

**Non-operating asset. What is it?** An asset not required to produce forecast operating FCFF. **Pension surplus. What is it?** Plan assets above pension liabilities.

$$
Total\ firm\ value=720+60+45+40=\boxed{SEK865\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
Equity\ value=865-215=650
$$

*Carry that checkpoint into the next step.*

$$
V_{share}=\frac{650}{100}=\boxed{SEK6.50}
$$

> [!NOTE]
> Use market value for separately valued assets. Do not add operating cash already needed to generate FCFF.

---

## Variant: Choose FCFF When FCFE Is Negative

**Abstract:** *Negative FCFE can be noisy when debt financing is heavy. FCFF may expose the operating business more cleanly.*

> A levered company has FCFF of $40 million, after-tax interest of $18 million, and net debt repayment of $30 million. Calculate FCFE and choose the cleaner valuation approach.

**Levered company. What is it?** A company using debt. **Negative FCFE. What is it?** Shareholder cash is below zero after investment and debt financing effects.

$$
FCFE=FCFF-After\!\!-tax\ interest+Net\ borrowing
$$

Debt repayment means net borrowing is $-30$ million:

$$
FCFE=40-18-30=\boxed{-\$8\text{m}}
$$

FCFF is the cleaner starting point because it separates operations from the large financing swing.

> [!NOTE]
> Negative FCFE does not automatically mean a worthless firm; debt repayment can drag FCFE below zero.

---

## Variant: Choose FCFF When Capital Structure Is Changing

**Abstract:** *When leverage moves sharply, FCFE and the equity discount rate move with it. FCFF is usually the steadier lane.*

> A firm’s debt ratio will fall from 70% to 30% over five years. Operating forecasts are reliable, but annual net borrowing and equity risk will swing. Which model is more defensible?

**Capital structure. What is it?** The mix of debt and equity financing. **Changing leverage. What does it mean?** That mix is moving, altering net borrowing and common-equity risk.

**1. Identify which cash stream is less contaminated by financing changes**

$$
\boxed{\text{Prefer FCFF discounted with a consistent forecast of WACC}}
$$

FCFE would require forecasting volatile net borrowing and a changing required equity return.

> [!NOTE]
> FCFE is usually simplest with stable leverage; FCFF is often cleaner with negative FCFE or major capital-structure change.

---

## Variant: Compare FCFE and Dividend Values for a Control Investor

**Abstract:** *Dividends are what the board chooses to pay; FCFE is what could be paid without damaging operations. Control makes that distinction matter.*

> Dividends per share are $2 and FCFE per share is $5. Both grow at 4%, and the required return is 10%. Compare the two stable-growth values and choose the relevant measure for an acquirer.

**Control investor. What is it?** An owner able to influence payout and operating decisions. **Dividend capacity. What is it?** FCFE available for distribution, whether paid or retained.

$$
V_{DDM}=\frac{2(1.04)}{0.10-0.04}=\boxed{\$34.67}
$$

*Carry that checkpoint into the next step.*

$$
V_{FCFE}=\frac{5(1.04)}{0.10-0.04}=\boxed{\$86.67}
$$

The control investor focuses on FCFE because payout policy can be changed.

> [!NOTE]
> Low dividends do not prove low capacity to pay. For control valuation, FCFE usually exposes that hidden capacity.

---

## Variant: Cap a Working-Capital Release at Its Economic Floor

**Abstract:** *A forecast cannot release more inventory cash than the inventory balance available to unwind.*

> A forecast assumes a $30 million cash inflow from reducing inventory, but only $10 million of inventory exists. What is the maximum inventory-related reduction in working-capital investment?

**Working-capital release. What is it?** A decrease in operating working capital, recorded as negative $WCInv$, which increases free cash flow. **Economic floor. What is it?** Inventory cannot fall below zero.

$$
Minimum\ inventory\ WCInv=-\$10\text{m}
$$

*Carry that checkpoint into the next step.*

$$
\boxed{\text{Maximum cash release from inventory}=\$10\text{m}}
$$

The extra $20 million assumed release is impossible unless another working-capital account supplies it.

> [!NOTE]
> Negative $WCInv$ can boost cash, but balance-sheet accounts have real floors. Check the available stock before forecasting a release.

---

## Variant: Remove Acquisition Inventory from Operating WCInv

**Abstract:** *A balance-sheet change may include inventory bought inside an acquisition. Only the operating part belongs in operating working-capital investment.*

> Inventory rises by $30 million during the year, but $12 million arrived with an acquired subsidiary rather than through ordinary purchases. Holding other working-capital accounts constant, estimate operating WCInv.

**Non-articulation. What is it?** Balance-sheet changes do not match cash-flow-statement changes because acquisitions, disposals, or currency translation moved the accounts. **Operating WCInv. What is it?** The cash tied up through normal operations.

$$
Operating\ WCInv=30-12=\boxed{\$18\text{m}}
$$

The acquisition amount belongs to the investing transaction, not ordinary operating cash flow.

> [!NOTE]
> Do not blindly use balance-sheet differences when acquisitions, divestitures, or foreign-currency translation break articulation.

---

## Variant: Compare Gordon and Multiple-Based Terminal Values

**Abstract:** *Two terminal methods can disagree because they encode different assumptions. Compute both and investigate the gap instead of averaging blindly.*

> At Year 5, FCFE per share is $4.00 and EPS is $5.00. Required return is 10%, stable growth is 5%, and a justified terminal P/E is 18. Calculate both terminal values.

**Fundamental terminal value. What is it?** $TV_5=FCFE_6/(r-g)$. **Multiple terminal value. What is it?** $P_5=(P/E)_5EPS_5$.

$$
TV_{Gordon}=\frac{4(1.05)}{0.10-0.05}=\boxed{\$84}
$$

*Carry that checkpoint into the next step.*

$$
TV_{multiple}=18(5)=\boxed{\$90}
$$

The $6 difference comes from the multiple’s embedded profitability and growth assumptions.

> [!NOTE]
> A terminal multiple is a cross-check, not magic. Make sure it is consistent with the stable-stage fundamentals.

---

## Variant: Solve for the Required Return Implied by Price

**Abstract:** *Rearrange the stable-growth FCFE model to find the return that makes the model equal the observed price.*

> FCFE per share just ended at $3.00, perpetual growth is 4%, and market price is $39.00. What required return is implied?

**Implied required return. What is it?** The discount rate consistent with price. From $V_0=FCFE_0(1+g)/(r-g)$, rearrange to $r=FCFE_1/V_0+g$.

$$
r=\frac{3(1.04)}{39}+0.04=0.08+0.04=\boxed{12.00\%}
$$

The 8% cash-flow yield plus 4% growth produces the 12% required return.

> [!NOTE]
> In a stable-growth model, expected return decomposes into next-period FCFE yield plus growth.

---

## Variant: Reject a Vendor’s Mislabelled Free Cash Flow

**Abstract:** *A number called “free cash flow” is not automatically valuation FCFF or FCFE. Reconcile its definition before discounting it.*

> A data vendor defines FCF as $NI+Dep-Dividends-FCInv$. Given net income $100 million, depreciation $20 million, dividends $30 million, fixed investment $50 million, working-capital investment $10 million, interest $12 million, tax 25%, and no net borrowing, calculate the vendor FCF, FCFF, and FCFE.

**Vendor FCF. What is it?** A provider-specific label that may omit required items. **Reconciliation. What is it?** Comparing the definition line by line.

$$
FCF_{vendor}=100+20-30-50=\boxed{40}
$$

*Carry that checkpoint into the next step.*

$$
FCFF=100+20+12(0.75)-50-10=\boxed{69}
$$

*Carry that checkpoint into the next step.*

$$
FCFE=100+20-50-10=\boxed{60}
$$

> [!NOTE]
> Never discount a database field until you know exactly which cash flows it adds and subtracts.

---

## Variant: Revalue FCFF under an ESG Cost Scenario

**Abstract:** *An ESG issue matters numerically only through forecast cash flows, growth, or risk. Put the effect into the model rather than adding a vague premium by feel.*

> A mine’s next-year FCFF is $120 million before a recurring $15 million environmental-compliance cost. WACC is 9% and stable growth is 3%. Calculate firm value before and after the cost.

**ESG scenario. What is it?** A forecast translating environmental, social, or governance effects into financial inputs. **Recurring cost. What is it?** A cost expected every year and therefore embedded in sustainable FCFF.

$$
V_{before}=\frac{120}{0.09-0.03}=\boxed{\$2{,}000\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
V_{after}=\frac{120-15}{0.09-0.03}=\boxed{\$1{,}750\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
Value\ impact=\boxed{-\$250\text{m}}
$$

> [!NOTE]
> Avoid double-counting an ESG risk in both cash flow and WACC unless the source assumptions genuinely require both effects.

---

## Variant: Trace a $100 Change through FCFF and FCFE

**Abstract:** *Shock one input, hold everything else fixed, and follow the cash-flow formula. Taxes soften income-statement shocks; financing and payout items split FCFF from FCFE.*

> With a 40% tax rate, show the isolated change in FCFF and FCFE caused by a $100 increase in each listed item.

**Isolated change. What is it?** One input moves while every other input is frozen. **After-tax effect. What is it?** A deductible $100 expense changes after-tax income by $100(1-0.40)=\$60$.

**1. Trace each shock**

| $100 increase in | $\Delta FCFF$ | $\Delta FCFE$ | Why? |
|---|---:|---:|---|
| Net income | +$100 | +$100 | starting cash proxy rises |
| Cash operating expense | −$60 | −$60 | after-tax operating cash falls |
| Depreciation | +$40 | +$40 | $100 add-back minus $60 income loss |
| Interest expense | $0 | −$60 | FCFF adds after-tax interest back |
| EBIT | +$60 | +$60 | after-tax operating income rises |
| Accounts receivable | −$100 | −$100 | more cash is tied up |
| Accounts payable | +$100 | +$100 | suppliers fund more operations |
| PP&E purchases | −$100 | −$100 | fixed investment uses cash |
| Notes payable | $0 | +$100 | debt financing affects FCFE only |
| Dividends, common issuance, or buybacks | $0 | $0 | distributions or equity financing |

The row that most cleanly separates the two cash flows is the debt-financing shock:

$$
\boxed{+\$100\text{ notes payable}\Rightarrow\Delta FCFF=0,\quad\Delta FCFE=+\$100}
$$

> [!NOTE]
> Operations and investment hit both measures; debt financing separates FCFE from FCFF; shareholder distributions hit neither current measure.

---

## Variant: Build Multistage FCFE from Earnings and Reinvestment

**Abstract:** *When earnings and investment follow different paths, forecast them separately. FCFE growth cannot be hard-coded from EPS growth.*

> EPS is $3.00 now and grows 20%, 15%, and 10% in Years 1–3. Net capital expenditure per share is $4, $3, and $2; working-capital investment is 25% of net capex; debt finances 40% of both. In Year 4, EPS grows 5%, net capex is $1.50, and all components then grow 5% forever. Required return is 12%. Estimate value per share.

**Net capex. What is it?** Capital expenditure minus depreciation. **Reinvestment charge to equity. What is it?** Equity funds $1-DR=60\%$ of net capex plus working-capital investment. Thus $FCFE=EPS-(1-DR)(Net\ capex+WCInv)$.

$$
FCFE_1=3.60-0.60(4+1)=0.60
$$

*Carry that checkpoint into the next step.*

$$
FCFE_2=4.14-0.60(3+0.75)=1.89,\quad FCFE_3=4.554-0.60(2+0.50)=3.054
$$

*Carry that checkpoint into the next step.*

$$
FCFE_4=4.7817-0.60(1.50+0.375)=3.6567
$$

*Carry that checkpoint into the next step.*

$$
V_0=\frac{0.60}{1.12}+\frac{1.89}{1.12^2}+\frac{3.054+3.6567/(0.12-0.05)}{1.12^3}=\boxed{\$41.40}
$$

> [!NOTE]
> Falling reinvestment can make FCFE grow much faster than EPS. Forecast the ingredients before valuing the stream.

---

## Variant: Finish a Multi-Stage FCFF Scenario from Operations to Share Price

**Abstract:** *A scenario is not finished at operating value. Add separate non-operating assets, remove senior claims, divide by shares, then compare with the market.*

> FCFF just ended at €100 million, grows 2% for three years, then 1% forever. WACC is 8%. Non-operating land is worth €50 million, debt is €400 million, preferred stock is €50 million, and 50 million common shares exist. The market price is €18. Estimate intrinsic value and classify the shares.

**Scenario valuation. What is it?** A complete valuation under one coherent set of assumptions. **Operating value. What is it?** Present value of FCFF generated by operations; separately valued assets are added later.

$$
FCFF_1=102,\quad FCFF_2=104.04,\quad FCFF_3=106.1208,\quad FCFF_4=107.1820
$$

*Carry that checkpoint into the next step.*

$$
V_{operations}=\frac{102}{1.08}+\frac{104.04}{1.08^2}+\frac{106.1208+107.1820/(0.08-0.01)}{1.08^3}=\boxed{€1{,}483.38\text{m}}
$$

*Carry that checkpoint into the next step.*

$$
V_{share}=\frac{1{,}483.38+50-400-50}{50}=\boxed{€21.67}
$$

Because €21.67 exceeds €18, the shares are undervalued under this scenario.

> [!NOTE]
> Compare market price only after completing the full operating-assets-to-common-equity bridge.

<!--
SOURCE-COVERAGE AUDIT

Primary authority: CFA Institute, CFA Level II Equity Valuation, Learning Module 3,
"Free Cash Flow Valuation," printed pp. 125-221. Reviewed all 13 learning outcomes,
Equations 1-18, Examples 1-19, Practice Problems 1-52, and official solutions.

Secondary check only: Schweser Equity, Reading 19, Modules 19.1-19.3. Schweser was
used to check exam-shaped coverage and did not override the official curriculum.

Learning outcomes:
a-b -> variants 1-3, 44-46
c-d -> variants 8-22, 28-30, 48-49, 52
e-f -> variants 23-26, 48-49, 53, 55-56
g-h -> variants 27-28, 46, 52
i -> variants 38-40
j-l -> variants 5-8, 31-37, 41, 47, 50-51, 55-56
m -> variants 31, 42, 56

Official examples:
1 -> variants 4-6, 31
2 -> variants 9-10
3 -> variants 11-12
4 -> variants 10, 13-14, 49
5 -> variants 8, 11, 15-17, 20
6 -> variants 18-20
7 -> variants 21-22
8-10 -> variants 23-24
11 -> variants 27-28, 52
12 -> variants 29-30
13 -> variants 41-42
14 -> variants 38-40
15 -> variants 32-33
16 -> variant 34
17 -> variants 23-24, 34, 55
18 -> variant 35
19 -> variant 53

Practice problems:
1-6 -> variants 4-6, 31
7-13 -> variants 1, 10, 16, 23-24, 32-33, 44-46
14-15 -> variant 52
16-18 -> variants 8, 11, 15-20
19-22 -> variants 18-24, 32-33
23-29 -> variants 21, 25-28, 44-49, 54
30-32 -> variants 32, 34, 46
33-39 -> variants 16, 19-20, 25-26, 31, 38-40, 42, 53, 56
40-41 -> variants 28, 32, 52
42-44 -> variants 32, 46
45-46 -> variants 38-40
47-48 -> variants 41-42
49 -> variants 23-24, 35-36
50 -> variants 21, 34, 55
51 -> variant 35
52 -> variant 43

Source-supported inverse and edge forms added: implied growth, implied required
return, invalid perpetual growth, route reconciliation, debt-ratio inversion,
terminal-date placement, terminal-value concentration, working-capital floor,
non-articulation, real/nominal consistency, and terminal-method cross-check.
-->

1. Forward pricing rests on one rule: identical future cash flows must have the same price today. If they do not, arbitrage exists.
2. For a forward starting at time A and ending at time B:
$$ \begin{aligned} DF_B &= DF_A × F_{A,B-A} \\  F_{A,B-A} &= DF_B / DF_A \end{aligned}$$
 3. So the forward **price** $B,A$ is the ratio of two discount factors that is B over A.
 4. Consider two routes to the same payoff after two years. Route one: buy a two-year zero-coupon bond for 0.93. Route two: buy a one-year zero-coupon bond for 0.95, then enter a one-year forward contract.

> [!NOTE] What is the forward rate? 
> The forward discount factor tells us that:
> $$
> F_{2,4}
> $$
> invested at Year 2 becomes €1 at Year 6.
> Since this is a 4-year period:
> $$
> F_{2,4}=\frac{1}{(1+f_{2,4})^4}
> $$
> Therefore:
> $$
> \boxed{  
> f_{2,4}
> 
> \left(\frac{DF_2}{DF_6}\right)^{1/4}-1  
> }
> $$
> With:
> $$
> DF_2=0.943,\qquad DF_6=0.772
> $$
> we get:
>  $$
> f_{2,4}\approx5.13%
> $$

> [!note] Why is Forward rate, a ratio of discount factors?
> A **forward rate** is the interest rate agreed today for borrowing or investing over a period that starts in the future.
> Example: 
> $$
> f_{2,4}
> $$
> 
> means the **4-year interest rate starting at Year 2 and ending at Year 6**.
> 
> ***Build it from discount factors***
> 
> **What are discount factors?**  
> A discount factor tells us **how much €1 received in the future is worth today**.
> 
> For example:
> 
> $$
> DF_2=0.943
> $$
> 
> means:
> 
> > €1 received at Year 2 is worth €0.943 today.
> 
> And:
> 
> $$
> DF_6=0.772
> $$
> 
> means:
> 
> > €1 received at Year 6 is worth €0.772 today.
> 
> ### What is the ratio of discount factors?
> 
> We want to know:
> 
> > How much money must I have at Year 2 so that it grows to €1 at Year 6?
> 
> Call that amount $F_{2,4}$.
> 
> There are two ways to guarantee €1 at Year 6:
> 
> 4. **Direct route:** pay $DF_6$ today and receive €1 at Year 6.
>     
> 5. **Year-2 route:** arrange today to have $F_{2,4}$ at Year 2, then invest it until Year 6.
>     
> 
> Getting $F_{2,4}$ at Year 2 costs today:
> 
> $$
> DF_2 \times F_{2,4}
> $$
> 
> Both strategies produce exactly €1 at Year 6, so by no-arbitrage:
> 
> $$
> DF_6=DF_2F_{2,4}
> $$
> 
> Therefore:
> 
> $$
> \boxed{  
> F_{2,4}=\frac{DF_6}{DF_2}  
> }
> $$
> 
> So the **ratio of discount factors gives the discount factor for only the future period from Year 2 to Year 6**.
> 
> So the **forward rate is the annual interest rate implied today for investing from Year 2 to Year 6**.


4. Both routes produce the same payoff. Their initial costs must therefore match:
$$
\begin{aligned}
0.93 &= 0.95 × F_{1,1} \\

F_{1,1} &= 0.93 / 0.95 = 0.9789
\end{aligned}
$$
6. Any other forward price leaves free money on the table. Sell the expensive route. Buy the cheap one. Pocket the difference without taking risk.
7. If spot rates are rising with the term structure, the forward rate must be rising. If spot rates are falling with the term structure, the forward rate must be falling.
8. Think of spot rates as cumulative GPA, and forward rates as the grade earned in the next semester. Suppose your first-year GPA is 3.0, while your two-year cumulative GPA rises to 3.5. Your second-year GPA must exceed 3.5. A mediocre 3.5 would leave the cumulative average below 3.5. The new grade must pull the old average upward.
9. The same logic runs backward. If your first-year GPA is 4.0 and the two-year cumulative GPA falls to 3.5, your second-year GPA must sit below 3.5.
10. If the spot curve is rising, forward rates sit above spot rates. A later initiation date usually pushes the forward rate further above the spot curve, provided the curve keeps rising at the same pace or becomes steeper.

#### BOOTSTRAPPING

6. Bootstrapping converts observed par rates into zero-coupon rates, one maturity at a time. The curve does not arrive fully formed. You build each point from the points already solved.    
7. Assume every bond has a face value of 1 and pays annual coupons. A par bond trades at 1, so the present value of every coupon and the principal must equal 1.
8. The one-year bond has only one cash flow. Therefore, its par rate and zero rate are identical: $z_1 = 5\%$  

> [!example] HAMMER THIS EXAMPLE INTO YOUR HEAD
> Given: One-year par rate = 5%, two-year par rate = 5.97%, three-year par rate = 6.91%, four-year par rate = 7.81%. From these data, we can bootstrap zero-coupon rates.
> The two-year bond pays a coupon of 0.0597 after one year, followed by the principal and final coupon of 1.0597 after two years:
> $$1=\frac{0.0597}{1.05}+\frac{1.0597}{(1+z_2)^2}$$
> The first cash flow uses the known one-year zero rate:    
> $$  
> \frac{0.0597}{1.05}=0.05686  
> $$
> The remaining value belongs to the two-year cash flow:
> Therefore:
> $$  
> \begin{aligned}  
> 0.94314 &= \frac{1.0597}{(1+z_2)^2}\  
> (1+z_2)^2 &= \frac{1.0597}{0.94314}\  
> z_2 &\approx 6%  
> \end{aligned}  
> $$
> The three-year bond uses the zero rates already found for years one and two. Only the third-year rate remains unknown:$$  
> 1=\frac{0.0691}{1.05}  
> +\frac{0.0691}{(1.06)^2}  
> +\frac{1.0691}{(1+z_3)^3}  
> $$Solving gives: $z_3 \approx 7\%$  
> The four-year bond repeats the same process:$$  
> 1=\frac{0.0781}{1.05}  
> +\frac{0.0781}{(1.06)^2}  
> +\frac{0.0781}{(1.07)^3}  
> +\frac{1.0781}{(1+z_4)^4}  
> $$Solving gives: $z_4 \approx 8\%$

9. The underlying transaction is simple. Buying one four-year coupon bond is economically equivalent to buying four zero-coupon bonds, one maturing each year. The first three repay the annual coupons. The fourth repays the final coupon plus principal. Bootstrapping prices these hidden zero-coupon bonds one by one.

### YIELD TO MATURITY
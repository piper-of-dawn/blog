
#### Writing One Call + Hedge + Financing

| Strategy                    |               Time 0 | Time 1: Down |  Time 1: Up |
| --------------------------- | -------------------: | -----------: | ----------: |
| Write one call              |                 $+c$ |       $-c^-$ |      $-c^+$ |
| Buy $h$ units of underlying |                $-hS$ |      $+hS^-$ |     $+hS^+$ |
| Borrow/lend                 |     $-PV(-hS^-+c^-)$ |  $-hS^-+c^-$ | $-hS^++c^+$ |
| **Net cash flow**           | $c-hS-PV(-hS^-+c^-)$ |        **0** |       **0** |

1. **Start with the call.** You **write one call**, meaning you sell it. You receive $+c$ today. But at Time 1, you owe the buyer the call payoff: $-c^-$ if the stock falls or $-c^+$ if it rises.
    
2. **What is the problem?** The short call has price risk. If the stock rises, the call becomes more valuable and you owe more. You need something that makes money precisely when the call hurts you.
    
3. So you **buy $h$ units of the underlying**. This costs $-hS$ today. At Time 1, those shares are worth $+hS^-$ in the down state or $+hS^+$ in the up state.
    
4. After the first two trades, your Time 1 cash flows are:
    

$$  
-c^-+hS^-  
$$

and

$$  
-c^++hS^+  
$$

These are still risky because they may be different.

5. **What is $h$ trying to accomplish?** Choose $h$ so those two numbers become identical:
    

$$  
-c^-+hS^-=-c^++hS^+  
$$

Solving gives:

$$  
h=\frac{c^+-c^-}{S^+-S^-}  
$$

6. **Why does equalising them remove price risk?** Because now you literally do not care which branch occurs. Up or down, your portfolio produces the same amount. The market can flip the coin; your payoff does not move.
    
7. But there is still a second problem. Suppose that identical future cash flow is EUR20. You still receive EUR20 at Time 1. If it is EUR−20, you still owe EUR20. The uncertainty is gone, but the cash flow itself remains.
    
8. This is what the **third row—borrow or lend—kills**. Take a financing position whose Time 1 cash flow is exactly the negative of the first two trades.
    

If the hedge produces:

$$  
-c^-+hS^-  
$$

then financing produces:

$$  
+c^--hS^-  
$$

Add them:

$$  
(-c^-+hS^-)+(c^--hS^-)=0  
$$

9. The exact same cancellation occurs in the up state:
    

$$  
(-c^++hS^+)+(c^+-hS^+)=0  
$$

10. **Why is there a $PV$ at Time 0?** Because the financing payment happens at Time 1. You must translate that future amount into today's money using the risk-free rate.
    

$$  
PV(X)=\frac{X}{1+r}  
$$

11. So if you need a particular cash flow at Time 1, its Time 0 financing value is its present value with the **opposite sign**:
    

$$  
-PV(-hS^-+c^-)  
$$

If you lend money today, cash leaves today and returns later. If you borrow today, cash enters today and must be repaid later. Same pipe, water flowing in opposite directions.

12. After all three trades, the Time 1 result is beautifully boring:
    

$$  
CF_{\text{down}}=0  
$$

$$  
CF_{\text{up}}=0  
$$

13. That means **all future obligations cancel**. The only thing left is the Time 0 cash flow:
    

$$  
c-hS-PV(-hS^-+c^-)  
$$

14. Now the no-arbitrage knife comes out. If this Time 0 amount were positive, you would receive money today and owe **nothing in either future state**. That would be pure arbitrage.
    
15. Therefore, in an arbitrage-free market:
    

$$  
c-hS-PV(-hS^-+c^-)=0  
$$

The entire table is just three moves: **sell the call, use $h$ shares to kill uncertainty, then use borrowing/lending to kill the remaining certain cash flow.** Once both future branches are reduced to zero, today's option price has nowhere left to hide.

#### Writing One Put + Hedge + Financing



|Strategy|Time 0|Time 1: Down|Time 1: Up|
|---|--:|--:|--:|
|Write one put|$+p$|$-p^-$|$-p^+$|
|Hold $h$ units of underlying|$-hS$|$+hS^-$|$+hS^+$|
|Borrow/lend|$-PV(-hS^-+p^-)$|$-hS^-+p^-$|$-hS^++p^+$|
|**Net cash flow**|$p-hS-PV(-hS^-+p^-)$|**0**|**0**|

1. Start by **writing one put**, meaning selling it. You receive $+p$ today. At Time 1, you owe the put payoff: $-p^-$ if the underlying falls and $-p^+$ if it rises.
    
2. **What is the problem?** A put becomes more valuable when the underlying falls. Therefore, a **short put loses money when the underlying falls**.
    
3. We need something that does the opposite: **makes money when the underlying falls**. That means shorting the underlying.
    
4. We still write the position as $h$ units of the underlying, but for a put:
    

$$  
h<0  
$$

So a negative $h$ simply means **short the underlying**.

5. After the first two trades, the Time 1 cash flows are:
    

$$  
-p^-+hS^-  
$$

in the down state, and

$$  
-p^++hS^+  
$$

in the up state.

6. These are still risky because they may be different. So choose $h$ such that both states produce exactly the same cash flow:
    

$$  
-p^-+hS^-=-p^++hS^+  
$$

7. Solving gives the hedge ratio:
    

$$  
h=\frac{p^+-p^-}{S^+-S^-}  
$$

8. **Why is $h$ negative for a put?** When the underlying rises, put value falls:
    

$$  
p^+<p^-  
$$

while:

$$  
S^+>S^-  
$$

Therefore the numerator is negative and the denominator positive, giving $h<0$.

9. **What does that mean economically?** The short put loses when the stock falls, while the short-stock position gains when the stock falls. One plugs the hole created by the other.
    
10. Once $h$ is chosen correctly, the portfolio gives the **same cash flow whether the underlying rises or falls**. Price uncertainty has now been removed.
    
11. But that identical future cash flow may still be non-zero. Suppose the first two trades produce EUR20 in either state. The EUR20 is certain, but it still exists.
    
12. So the third trade is **financing**. Borrow or lend an amount whose Time 1 payoff exactly cancels that certain cash flow.
    

If the first two positions produce:

$$  
-p^-+hS^-  
$$

the financing position produces:

$$  
p^--hS^-  
$$

Adding them gives:

$$  
(-p^-+hS^-)+(p^--hS^-)=0  
$$

13. The same cancellation occurs in the up state. Therefore:
    

$$  
CF_{\text{down}}=0  
$$

and

$$  
CF_{\text{up}}=0  
$$

14. The financing amount at Time 0 is the present value of that future payment, with the opposite sign:
    

$$  
-PV(-hS^-+p^-)  
$$

15. After all three trades, only the Time 0 cash flow remains:
    

$$  
p-hS-PV(-hS^-+p^-)  
$$

16. In an arbitrage-free market, this must equal zero:
    

$$  
p-hS-PV(-hS^-+p^-)=0  
$$

Otherwise, you could receive money today while having zero cash flow later in **both** states. That is free money, and markets do not leave it lying on the pavement for long.

17. The put version is therefore the mirror image of the call:
    

**sell the put → short the underlying → choose $h$ to kill price risk → use financing to kill the remaining certain cash flow.**

18. The easiest way to remember the hedge direction:
    

- **Short call loses when stock rises → buy stock.**
    
- **Short put loses when stock falls → short stock.**
    

The option tells you where the wound is; the underlying position is the bandage.
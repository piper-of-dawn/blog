
1. Assume there are **no costs or benefits from owning the underlying**.
    
2. First trade: **write one call option**. Writing means selling the option. **Why do this?** Because the arbitrageur receives the option price today. **What is the catch?** At Time 1, the short call owes the option payoff: $-c^+$ if the underlying rises and $-c^-$ if it falls.
    
3. **Why is the short call risky?** Because a call and its underlying move in the same direction. If the underlying rises, the call becomes more valuable, which is bad when you are short it.
    
4. So the second trade is to **buy $h$ units of the underlying**. **Why?** The long underlying gains when the underlying price rises, offsetting the loss on the short call.
    
5. After these two trades, the future cash flow is:
    

$$  
-c^+ + hS^+  
$$

in the up state, and

$$  
-c^- + hS^-  
$$

in the down state.

131. We still do not have arbitrage. These two cash flows may differ, which means the portfolio still cares whether the market goes up or down. Price risk is still alive.
    
132. **How do we kill that price risk?** Choose $h$ so both states produce exactly the same cash flow:
    

$$  
-c^+ + hS^+ = -c^- + hS^-  
$$

133. Solving gives the **hedge ratio**:
    

$$  
h=\frac{c^+-c^-}{S^+-S^-}  
$$

134. **What is the hedge ratio?** The number of underlying units needed to hedge one short call.
    
135. **Why does this formula make sense?** The numerator asks how much the **call value changes** between the two states. The denominator asks how much the **underlying changes**:
    

$$  
h=  
\frac{\text{change in call value}}  
{\text{change in underlying value}}  
$$

136. For a call, $h\geq0$ because call value and underlying price move in the same direction.
    
137. Once $h$ is chosen correctly, the portfolio becomes indifferent to the underlying going up or down. The uncertainty has been strangled out of the trade.
    
138. But one problem remains. The identical future cash flow may still be positive or negative. So **Rule 2 is satisfied, but Rule 1 is not yet finished**.
    
139. The third trade is therefore **financing**. Borrow or lend enough today so that the remaining certain Time 1 cash flow is exactly offset.
    
140. If $r$ is the one-period risk-free rate, the present-value factor is:
    

$$  
PV=\frac{1}{1+r}  
$$

141. **Why use the risk-free rate?** Once the hedge makes the future payoff identical in every state, that payoff is no longer risky. A certain future cash flow must therefore be financed or discounted at the risk-free rate.
    
142. Depending on the signs of $c$, $h$, and $S$, the financing position may be borrowing or lending.
    
143. The sequence is the whole model in miniature:
    

**short the call → buy $h$ units of the underlying → choose $h$ to kill price risk → use financing to kill the remaining certain cash flow.**

The hedge removes uncertainty first. Financing cleans up what is left.
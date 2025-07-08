

> You are given 8 fair coins and flip all of them at once. Afterwards, you are allowed to reflip as many coins as you would like one time each. At the end, you are given $1 for each head that appears. Assuming optimal play, find the fair value of this game.

Each coin's state (H or T) can be treated **independently**.So for a single coin:
#### Decision:
- If the coin is **Head (H)**:    
    - Keep: get $1        
    - Reflip: 50% H, 50% T → EV = $0.5        
    - **Best choice: keep it** (since $1 > $0.5)
        
- If the coin is **Tail (T)**:    
    - Keep: $0        
    - Reflip: EV = $0.5        
    - **Best choice: reflip it** (since $0.5 > $0)      

This decision is **independent** for each coin → meaning we solve a **subproblem for each coin**, and just **sum up** the optimal outcomes.


## **What is a runtime?**

Tokio is **the** async runtime for Rust.

- Think: thread pool + task scheduler + event loop.    
- It drives your futures to completion.    
- It gives you `#[tokio::main]` to start your async `main()`.    
- It provides async I/O (files, network, timers, etc.).
### **Tokio's Job:**
- **Poll** your futures **repeatedly**.    
- Wait for external events (e.g., HTTP done, file ready).    
- Wake up your future and call `poll()` again **only when needed**.

### **One-liner intuition:**

`poll()` = "Are you done yet?"   	
Future: "No." → `Pending`  
Future: "Yes!" → `Ready(output)`

### FuturesUnordered


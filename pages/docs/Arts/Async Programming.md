
## Event Loop
At the heart of async is something called the event loop. Think of it as a super-organized waiter in a restaurant. This waiter doesn’t hover at one table until the food’s eaten—they zip around, checking which tables need attention. The event loop does the same: it’s a constant cycle that monitors tasks, schedules them when they’re ready to run, and handles their results when they’re done. 

 
 Why is it called a loop?
```ad=tip
> while true 
	{ 
	1. Check for ready tasks 
	  2. Run them 
	  3. Check for new events (network data, timers, etc.) 
	  4. Go back to step 1 
	}
```

_What happens if no events are ready?_ The loop blocks in the kernel, consuming zero CPU.



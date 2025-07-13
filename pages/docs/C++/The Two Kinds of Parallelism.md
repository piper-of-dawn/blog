
Parallelism boils down to two core ideas. Both might make your code faster, but let’s be real—most of the time, we’re just praying it doesn’t crash harder.

1. **Data Parallelism:**  
    You’ve got a pile of potatoes and two people (P1 and P2). So you say,  
    **“P1, take the first half. P2, take the second.”**  
    Both are doing the same task—just on different chunks. That’s data parallelism.  
    Same code runs everywhere (_SPMD: Single Program, Multiple Data_), only the data changes.
    
2. **Functional Parallelism:**  
    Same potatoes, same two people. But now you say,  
    **“P1, wash them. Then hand them to P2 to chop.”**  
    Different tasks for different people. That’s functional parallelism.  
    Work is split by function, not by data.
	
## Data Parallelism: Do the same thing to everything
Data parallelism is about doing one thing, perfectly, across many pieces of data. You take an operation—say, addition—and you apply it across an entire array, not by looping, but by letting hardware chew through many elements at once. This kind of parallelism shines when operations on elements are independent of each other i.e. P1 chopping potato 1 doesn't impact P2 chopping potato 2.

```cpp
// Let us multiply a C++ vector with a scalar.
#include <vector>
#include <omp.h>
using namespace std;
vector<double> multiply_vec_with_scalar (const vector<double>& V, double s) {
	vector<double> vec(V.size());
	#pragma omp parallel for
	for (size_t i=0; i<V.size(); ++i) {
		vec[i] = V[i] * scalar;
	}
	return vec;	
}
```
## Task Parallelism: Different tasks run at the same time
Each task is a distinct thing that runs simultaneously, each act independent yet part of the same grand spectacle. They might touch shared memory. They might have side-effects. They might even compete with each other. They might blow-up. At the system level, the CPU spins up threads or processes. It schedules them across cores. It juggles context switches, locks, semaphores.

Taking this idea a notch further, we can also think of data based parallelism  

Under the hood, the CPU doesn’t think in individual numbers anymore. It packs data into wide vector registers: 128 bits, 256 bits, even 512 bits wide. Instead of adding two numbers, it adds eight numbers (256 bit register can accommodate 8 32-bit floats), or sixteen, in a single breath. This is what SIMD (Single Instruction, Multiple Data) is. It's minimal. It's elegant. You don't multiply effort; you **multiply throughput**.

```cpp
#include <immintrin.h>

void scalar_multiply(double* data, size_t size, double scalar) {
    __m256d scalar_vec = _mm256_set1_pd(scalar); // Load scalar into 4 slots
    size_t i;
    for (i = 0; i < size - 3; i += 4) {
        __m256d data_vec = _mm256_loadu_pd(&data[i]); // Load 4 elements
        __m256d result = _mm256_mul_pd(data_vec, scalar_vec); // Multiply
        _mm256_storeu_pd(&data[i], result); // Store back
    }
    // Handle remaining elements
    for (; i < size; ++i) {
        data[i] *= scalar;
    }
    }
```


# Task Parallelism: Different tasks run at the same time

Each task is a distinct thing that runs simultaneously, each act independent yet part of the same grand spectacle. They might touch shared memory. They might have side-effects. They might even compete with each other. They might blow-up. At the system level, the CPU spins up threads or processes. It schedules them across cores. It juggles context switches, locks, semaphores.

### Core Ingredients -> if you are new to CUDA
In CUDA's mental model: CPU (host) and GPU (device) are **separate environments**.It’s called `__global__` because **the function becomes globally visible** across two different "worlds":

- It is **defined** on the **GPU**.
    
- It can be **called** from the **CPU**.
A **CUDA kernel** is a **function** that runs **on the GPU**. When you call a kernel, **thousands of lightweight threads** are launched to execute it **in parallel** — each thread usually works on a small piece of data.
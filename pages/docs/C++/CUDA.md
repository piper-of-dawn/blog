```cpp
#include <iostream>

// CUDA kernel: runs on GPU
__global__ void multiply_scalar(float* vec, float scalar, int n) {
	int idx = threadIdx.x + blockDim.x * blockIdx.x;
    if (idx < n) {
        vec[idx] *= scalar;
    }
}

int main() {
    const int N = 8;
    float h_vec[N] = {1, 2, 3, 4, 5, 6, 7, 8};  // Host vector

    float* d_vec;
    cudaMalloc(&d_vec, N * sizeof(float));      // Allocate GPU memory
    cudaMemcpy(d_vec, h_vec, N * sizeof(float), cudaMemcpyHostToDevice);  // Copy to GPU

    int blockSize = 4;
    int numBlocks = (N + blockSize - 1) / blockSize;
    multiply_scalar<<<numBlocks, blockSize>>>(d_vec, 2.0f, N);  // Launch kernel

    cudaMemcpy(h_vec, d_vec, N * sizeof(float), cudaMemcpyDeviceToHost);  // Copy back to CPU

    cudaFree(d_vec);  // Free GPU memory

    // Print result
    for (int i = 0; i < N; ++i) {
        std::cout << h_vec[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}

```

In CUDA's mental model: CPU (host) and GPU (device) are **separate environments*. It’s called `__global__` because **the function becomes globally visible ** across two different "worlds". 

A **block** is a **group of threads** that run together on the GPU. Suppose there are 3 blocks and you have 3 threads per block. To access the index of the element that 33rd thread should work upon is:
`
```cpp
int idx = threadIdx.x + blockDim.x * blockIdx.x;
```
`.x` picks the first (horizontal) dimension of a CUDA thread or block.  
That's why you see `threadIdx.x`, `blockIdx.x`, `blockDim.x`. In CUDA, many things (like `threadIdx`, `blockIdx`, `blockDim`) are **3D structures** — they have `.x`, `.y`, and `.z`.
- `.x` → along the width    
- `.y` → along the height    
- `.z` → along the depth
``
"Allocate Create, Spawn, Collect, Free**"

Allocate memory -> Copy to GPU -> Spawn kernel with block size and number of blocks parameterized -> Copy the result back to CPU -> Free the memory
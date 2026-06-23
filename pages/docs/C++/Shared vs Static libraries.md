
**Shared Libraries**:

- **Definition**: Dynamically linked libraries (`.so` on Unix, `.dll` on Windows) **loaded at runtime**.
 
- **Size**: Smaller executable size; library code is not embedded in the binary.

- **Linking**: Linked at runtime via dynamic linker; requires library presence on the system.
 
- **Updates**: Can be updated independently without recompiling the executable.

- **Performance**: Slight runtime overhead due to dynamic linking.

- **Distribution**: Must be distributed with the executable or installed on the target system.

- **Memory**: Shared across multiple processes, reducing memory usage. **Example**: `libc.so` on Linux.

**Static Libraries**:
- **Definition**: Archives (`.a` on Unix, `.lib` on Windows) **embedded into the executable at compile time.**

- **Size**: Larger executable size; library code is included in the binary.

- **Linking**: Linked at compile time; no external dependencies at runtime.

- **Updates**: Requires recompilation of the executable to incorporate library updates.

- **Performance**: Faster at runtime; no dynamic linking overhead.

- **Distribution**: Self-contained executable; no need to distribute the library separately.

- **Memory**: Each executable has its own copy, increasing memory usage.

- **Example**: `libc.a` on Linux.

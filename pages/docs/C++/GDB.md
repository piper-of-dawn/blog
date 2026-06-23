## Logging

```bash
set logging on
set logging file gdb_output.txt
set logging overwrite on      # optional, overwrites existing file
set logging redirect on       # No echoing on terminal
set logging off
```

## Breaking Execution
### Function Call

```gdb
break function_name
```

```gdb
break file.c:function_name
```

```gdb
break 'Class::Method(Type)'
```

```gdb
set breakpoint pending on
break function_name
```

---

### Specific Line

```gdb
break file.c:42
```

```gdb
break 42
```

---

### When Symbol Comes into Scope

```gdb
rbreak symbol_name
```

---

### When Symbol Changes Value

```gdb
watch variable        # on write
rwatch variable       # on read
awatch variable       # on read/write
```

> Requires variable to have a stable memory address (e.g., global or in-scope local).

## I/O 

### Set Pretty Printing

```gdb
set print pretty on
```

```gdb
set print elements N
```

Limits number of elements printed (default: 200).

### Dump Binary Memory

```gdb
dump binary memory filename start_addr end_addr
```

Example:

```gdb
dump binary memory dump.bin 0x600000 0x601000
```

> [!NOTE]
> - *Use pointer arithmetic to calculate start and end addresses*
> - A useful use-case is that you can dump containers to read them back into python

```gdb
set $start = &v[0]
set $end = $start + v.size()
dump binary memory <FILE_NAME>.bin $start $end
```

### TL;DR (First Principles):
When GDB executes a program, it maps your variables—including arrays and matrices—into memory. You can tell GDB to **dump raw memory** of any variable to a binary file. This lets you **analyze the data outside GDB** (e.g., with Python + NumPy) without GDB choking on printing large data inline.
#### 1. **Understand What You're Dumping**
You need:
- The **starting memory address** (`&my_matrix`)
- The **exact byte size** to dump (`sizeof(my_matrix)`)
-
Example: for a `float my_matrix[100][100]`:
```cpp
sizeof(my_matrix) = 100 * 100 * sizeof(float) = 40000 bytes
```
#### 2. **Basic Syntax**
```gdb
dump binary memory <filename> <start_address> <end_address>
```

Or if you know the size:
```gdb
dump binary memory matrix.bin &my_matrix &my_matrix + sizeof(my_matrix)
```

But GDB doesn't support pointer arithmetic like that directly on `sizeof`. Instead:
```gdb
dump binary memory matrix.bin &my_matrix (&my_matrix)+40000
```
(You can replace `40000` with any exact byte count)

Or calculate in GDB: 
```
gdb p sizeof(my_matrix)
```

Then manually use the value:
```gdb
dump binary memory matrix.bin &my_matrix (&my_matrix)+40000
```

### What Happens Internally
- GDB interprets the address `&my_matrix` as a raw memory location.
- It writes the raw byte sequence (just 1s and 0s) to `matrix.bin`.
###  Load It in Python (Post-GDB)

```python
import numpy as np

data = np.fromfile("matrix.bin", dtype=np.float32)
matrix = data.reshape((100, 100))
print(matrix)
```

Make sure `dtype` and shape match your C++ matrix layout.
### 🧪 Sanity Check in GDB

Want to confirm it’s dumping the correct values?

```gdb
x/10f &my_matrix[0][0]   # examine 10 floats
```

Then check if those match the first line of `matrix[0][:10]` in NumPy.


> [!WARNING] Pitfalls
> - Don’t dump pointers unless they point to **contiguous** memory blocks. 
> - Avoid structs with padding unless you understand layout.
> - Beware of endian issues if moving between architectures.



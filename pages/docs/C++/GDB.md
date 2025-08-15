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

!!! note
    - *Use pointer arithmetic to calculate start and end addresses*
    - A useful use-case is that you can dump containers to read them back into python

```gdb
set $start = &v[0]
set $end = $start + v.size()
dump binary memory <FILE_NAME>.bin $start $end
```


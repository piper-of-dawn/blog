##### What is argc and argv?
* `argc`: number of command-line arguments.
* `argv`: array of C-strings holding those arguments.
* `argv[0]` is the program name (the executable's name used to start the program).
* `argv[1]` to `argv[argc-1]` are the actual command-line arguments.
  Example: running `./myapp arg1 arg2` sets `argv[0]="./myapp"`, `argv[1]="arg1"`, `argv[2]="arg2"`.


```cpp
int main (int argc, char* argv[]) {
    
}
```

`char*` is a pointer to a character or to the first character in a C-string (null-terminated array of chars).


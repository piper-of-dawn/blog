```cpp
[capture](params) mutable noexcept(spec) -> return_type { body }
```

- `capture`: captures the variables from the outer scope.
- `mutable`: Allows you to change the captured variables. By default, it is const.
- `noexcept`: Force lambda to never throw an exception. Crashes like SEGFAULT can still occur.
- `spec`: `noexcept` only fires if a condition is met. `noexcept(true)` will always fire.

In C++, each lambda expression generates a unique closure type based on its full signature (parameters, return type) and body (even if bodies differ semantically). Always assign a lambda expression with an `auto` keyword.

```cpp
auto l1 = [](int x) { return x + 1; };
auto l2 = [](int x) { return x + 2; };  // Same type as l1 (body ignored for type equality)

using T1 = decltype([](int x) { return x + 1; });  // Body included for exact match
using T2 = decltype([](int x) { return x + 2; });  // Different type from T1
static_assert(!std::is_same_v<T1, T2>);  // True: bodies differ
int y = 10;
auto f = [y](int x) -> int { return x + y; }
```

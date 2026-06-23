Functional programming is awesome. The concept of a function is so pure. You have this elegant thing that takes an input and gives you an output, and no matter what, the same input always gives you the same output. The key thing hat ensures that it gives you the same answer always for infinity is that there's no state and hence no side-effects.

Higher-order functions are beautiful. They take the idea of a function—this clean little input-output machine—and elevate it. Instead of just working with numbers or strings, now functions can take in other functions. They can return functions. They can build behaviour out of behaviour. And suddenly, your functions are composable, modular, and expressive and still the logic and the essence of a function remains pure, untouched.

Let's create one that measures execution time. We will write this simple wrapper that takes any arbitrary function as input and gives you an enhanced function as output. The key thing that makes this approach so clean is that we're not touching the original function's logic or introducing side-effects.

Suppose you have a function which generates a sequence of `n` integers starting from `start`, increasing by `step`. It returns the result as a pre-allocated `std::vector<int>` for performance.

```cpp
std::vector<int> generate_sequence(int start, int n, int step) {
    std::vector<int> result;
    result.reserve(n);
    for (int i = 0; i < n; ++i)
        result.push_back(start + i * step);
    return result;
}
```

Now here come the fun part:

```cpp
template<typename Func>
auto timed(Func f) {
    return [f](auto&&... args) {
        auto start = std::chrono::high_resolution_clock::now();
        auto result = f(std::forward<decltype(args)>(args)...);
        auto end = std::chrono::high_resolution_clock::now();
        std::chrono::duration<double> elapsed = end - start;
        std::cout << "Elapsed time: " << elapsed.count() << " seconds\n";
        return result;
    };
}
```


Let’s unpack what’s happening inside.

`auto&&... args` is what makes the wrapper flexible. It says: give me any number of inputs, of any type—whether they’re temporary values flying in, or persistent references you want to preserve.

`decltype(args)` captures the true nature of each argument. It doesn’t just look at the value—it remembers how it was passed in: was it moveable? Was it a reference?

And then comes the real hero: `std::forward<decltype(args)>(args)...`. This is a bit tricky! It makes sure each argument is forwarded exactly as it arrived—if it was an rvalue, it stays one; if it was an lvalue, we respect that. No surprises. If like me, you also find lvalue and rvalue intimidating to comprehend, here's a simple example to distinguish lvalues and rvalues:

```cpp
int x = 5;      // 'x' is an lvalue - it has a name and storage location
int y = x + 1;  // 'x' is an lvalue, but 'x + 1' is an rvalue (temporary result)

int& ref = x;   // Works: can bind lvalue reference to lvalue
// int& ref2 = x + 1;  // Error: can't bind lvalue reference to rvalue

int&& rref = x + 1;  // Works: can bind rvalue reference to rvalue
// int&& rref2 = x;   // Error: can't bind rvalue reference to lvalue

// Function that takes rvalue reference
void process(int&& val) { 
    // Can modify val since we know it's a temporary
}

process(10);    // Works: 10 is an rvalue
// process(x);  // Error: x is an lvalue

// This works - std::move converts lvalue to rvalue
process(std::move(x));
```


```cpp
int main() {
    auto timed_gen = timed(generate_sequence);
    auto result = timed_gen(0, 10, 2);
}

```
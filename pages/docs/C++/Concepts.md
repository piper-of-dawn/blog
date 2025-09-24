
## Difference between Pointers and References

### Pointers `Typename*`
It doesn’t hold an object, it holds an address. A mailbox, not the letter. To use what’s inside, you dereference it with `*` or `->`. That’s why you see it in linked lists, tries, or anything that needs “maybe there, maybe not” semantics. You can reassign it. You can set it to `nullptr`. You can leak memory if you forget to clean up. Example:

```cpp
TypeName* ptr = new TypeName();
ptr->data = 5;
```

Here you carved out memory on the heap, stashed its address in `ptr`, and poked at it with `->`. Pass `&obj` into a function expecting a `TypeName*` and you’re literally saying: here’s where the object lives.
### References `TypeName&`
`TypeName&` is stricter. It’s a reference, an alias welded onto one existing object. No nulls, no rebinding. You treat it like the object itself—just `obj.data`, no pointer gymnastics. That makes it perfect for function parameters:

```cpp
void update(TypeName& obj) { obj.data = 10; }
```

The compiler guarantees you’re not dealing with a ghost. No null checks, no dangling reassignments.

The confusion comes from the symbols: `*` and `&` moonlight as both declaration operators and runtime operators. `*` means “this is a pointer type” and also “dereference this pointer.” `&` means “this is a reference type” and also “give me the address of this object.” Same glyph, different roles.

```cpp
int n = 0
int& r = n; // You have direct access to r through n.
int* p = &n; // You need to deref p to access n.
```
## Uninitialized Locals = Garbage

In c++, a local variable without an initializer doesn’t start at zero — it just inherits whatever junk was left in that memory slot.

```cpp
#include <iostream>
using namespace std;

int main() {
    int x;          // uninitialized
    cout << x;      // prints garbage (leftover stack data)

    int y = 0;      // explicitly initialized
    cout << "\n" << y; // always prints 0
}
```

locals live on the stack, and the compiler won’t wipe the stack clean for you. that’s why `x` can look like a random number. globals/statics get zeroed by the runtime, but locals are your responsibility.

**rule:** if you care about the value, initialize it. always.

---
## Operator Overloading

Operator overloading is just teaching C++ what everyday symbols mean for your custom types. By default, `+` works on ints, not on your `Vector2D`.

```cpp
Vector2D operator+(const Vector2D& a, const Vector2D& b) {
    return {a.x + b.x, a.y + b.y};
}
```

* `Vector2D` at the start → this function spits out a `Vector2D`. That’s the result of `a + b`.
* `operator+` → the magic name. You’re telling the compiler “when someone writes `+` between two `Vector2D`s, call this.”
* `(const Vector2D& a, const Vector2D& b)` → both operands come in as references (no copying), locked as `const` (you promise not to mutate them).
* Inside: `return {a.x + b.x, a.y + b.y};` → builds a new `Vector2D` whose components are just the sum of the inputs.
* No side effects, no hidden tricks. You give it two vectors, you get back their sum. Exactly how `+` should feel.

---
## Static Members — One Definition, Always Global

In C++, static data members are a two-step ritual.
You **declare them inside the class** to announce their existence. But that’s just a promise, not storage. To actually give them memory, you must **define them once in the global scope** — outside any function, method, or class body.

The declaration says *“every object shares this.”*
The definition says *“here’s where it actually lives.”*

```cpp
#include <string>;
struct Human {
    static std::string species;   // declared inside class
};

std::string Human::species = "Homo Sapien";   // defined once, in global scope
```

Every `Coord` points to the same `len_x`. No duplication, no per-object copies.

Static methods obey the same law. Declared inside the class, defined outside with `ClassName::`. One definition, global, or the linker will scream.

This is not optional. It’s the rule.

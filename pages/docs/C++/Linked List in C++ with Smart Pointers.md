
## 1. Node Structure

### Raw Pointer Version
```cpp
template<typename T>
struct Node {
    T data;
    Node* next;

    Node(T value) : data(value), next(nullptr) {}
};
````

### Smart Pointer Version (`std::unique_ptr`)

```cpp
#include <memory>

template<typename T>
struct Node {
    T data;
    std::unique_ptr<Node<T>> next;

    Node(T value) : data(value), next(nullptr) {}
};
```

## 2. Pointer Access
- `->` is used to access members through a pointer.    
- `.` is used to access members of an object.
    
- Example:    
    ```cpp
    Node<int>* p = new Node<int>(10);
    p->data = 20; // modifies value via pointer
    ```

## 3. Why `nullptr`?
- Safer than `NULL` or `0`.    
- Type-safe and prevents uninitialised access.    

## 4. `std::unique_ptr` Benefits
- Manages memory automatically through reference counting.    
- Enforces single ownership.    
- Prevents memory leaks.    
- Use `.get()` to obtain raw pointer without transferring ownership.   

## 5. Creating a Linked List with 5 Elements
```cpp
auto head = std::make_unique<Node<int>>(1);
Node<int>* current = head.get();

for (int i = 2; i <= 5; ++i) {
    current->next = std::make_unique<Node<int>>(i);
    current = current->next.get();
}
```

- `head` owns the list.    
- `current` is a non-owning raw pointer used to traverse and build the list.
- 
## 6. `.get()` Explained
- Returns raw pointer from `unique_ptr` without giving up ownership.    
- Use it when you need temporary access:    
    ```cpp
    current = current->next.get();
    ```

## Final List

Constructed list: `1 -> 2 -> 3 -> 4 -> 5` (automatically cleaned up when `head` goes out of scope).

Every method in this trait that hands out or consumes references is chained to a specific borrow duration.

```rust
struct Person<'a> {
    name: &'a str,
}

trait Named {
    fn name(&self) -> &str;
} // Compiler will shout an error if you implement Named on person

```


```rust
trait Named<'a> {
    fn name(&self) -> &'a str;
}

```

Now the methods in the trait are parameterized with a lifetime parameter. Now we’re saying: “When something implements `Named<'a>`, its `name()` method gives back a string slice that lives as long as `'a`.”

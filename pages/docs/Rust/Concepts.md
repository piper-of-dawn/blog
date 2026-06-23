## Semicolons

**Q**: What do semicolons do in Rust?
**A**: Think of it this way: Rust forces you to pick a side. Are you producing a value, or are you just doing something?

**Q**: So an expression produces a value, like `1 + 2` → `3`?
**A**: Exactly. A statement is the opposite—it’s an action with no return value. `let x = 5;` or `println!()` don’t yield anything useful, they just *do*.

**Q**: And blocks like `{ 1 + 2 }`?
**A**: That’s an expression. The block evaluates to whatever its last line evaluates to. `{ let x = 5; x + 1 }` → `6`.

**Q**: So what happens if I slap a semicolon on the end: `{ let x = 5; x + 1; }`?
**A**: You just killed it. The semicolon discards the value. It converts an expression into a statement. No return, no value, nothing to pass back.

**Q**: So semicolons are basically Rust’s way of saying: “shut up, I don’t care about your result.”
**A**: That’s it. And this matters, because Rust won’t let you be vague. A function must either return something or not—no half-measures. That’s why you drop the semicolon in function bodies, `async` blocks, and `match` arms when you *do* want the value to flow out.

---
## `derive` keyword

#[derive(TraitName)] is a compile-time code generation mechanism that uses attributes to automatically implement specific, common traits for your data structures. It's a significant productivity booster and a core feature for writing idiomatic Rust.
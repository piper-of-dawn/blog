**What do we mean by “same” array?**
* **Not bit‑exact:** Small floating-point differences (from platform, precision, or computation order) are acceptable—we care about *numerical closeness*, not binary identity.
* **Hashing is non-trivial:** Reducing an entire float array to one value must balance *tolerance* (ignore harmless noise) and *discrimination* (preserve meaningful differences).


**Slide 3: What is a Polynomial Hash?**
* **A rolling fingerprint for sequences:**  $$
  h(S) = \left( \sum_{i=0}^{n-1} x_i \cdot b^{n-1-i} \right) \bmod M
  $$* **Intuition:** Treat each element as a digit in base *b*.
* **Example (base = 10, large *M*):**
  * `[3, 7]` → $(3 \cdot 10^1 + 7) \bmod M = 37$
  * `[3.000001, 7]` → $(3.000001 \cdot 10 + 7) \bmod M = 37.00001$


**Slide 4: Capabilities of Polynomial Hash**
* **Order-aware:** Changing the order of elements changes the hash.
  `h([3, 7]) ≠ h([7, 3])`
* **Magnitude-sensitive:** Small numerical changes produce proportionally small hash changes.
  `h([3.0, 7]) ≈ h([3.000001, 7])`
* **Streaming-friendly:** Hash can be updated incrementally as new values arrive.
  $h_{\text{new}} = (h_{\text{old}} \cdot b + x) \bmod M$
* **Easily replicable:** Easy to compute by hand or on a calculator for small arrays — not a black box.

**Slide 5: Limitations — What We Have to Live With**

* **Magnitude bias:**
  Arrays with large values and tiny noise can produce *larger* hash shifts than small arrays with bigger relative differences.
  → Polynomial hash is sensitive to *absolute*, not *relative*, changes.

---

**Example (base = 10, no mod for clarity):**
Let’s compute:
```python
a = [1_000_000.0, 2_000_000.0]
b = [1_000_000.1, 2_000_000.0]

c = [0.1, 0.2]
d = [0.15, 0.2]
```

Using:
$$
h(x_0, x_1) = x_0 \cdot 10^1 + x_1
$$
Hashes:
* $h(a) = 1{,}000{,}000.0 \cdot 10 + 2{,}000{,}000.0 = 12{,}000{,}000.0$
* $h(b) = 1{,}000{,}000.1 \cdot 10 + 2{,}000{,}000.0 = 12{,}000{,}001.0$
  → **Diff = 1.0** (tiny change in value, large magnitude)

* $h(c) = 0.1 \cdot 10 + 0.2 = 1.0 + 0.2 = 1.2$

* $h(d) = 0.15 \cdot 10 + 0.2 = 1.5 + 0.2 = 1.7$
  → **Diff = 0.5** (large relative change, smaller hash diff)nnv

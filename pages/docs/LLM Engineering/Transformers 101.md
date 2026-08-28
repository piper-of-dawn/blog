

## TL;DR

A Transformer translation model does this:

```text
German sentence
      ↓
token IDs
      ↓
embeddings + positions
      ↓
ENCODER
      ↓
context-rich representation
      ↓
DECODER ← words generated so far
      ↓
probability for next word
      ↓
choose one word
      ↓
repeat
      ↓
English sentence
```

Five ideas make this work:

1. **Embeddings** turn token IDs into vectors of numbers.
2. **Positional encoding** tells the model where each token occurs.
3. **Self-attention** lets tokens exchange information with other tokens.
4. **Encoder–decoder attention** lets the decoder consult the encoded source sentence.
5. **Shifted targets + greedy decoding** teach and later use the model to predict one next token at a time.

That is the entire story. Everything below unpacks it.

---

# 1. First: What Problem Are We Solving?

Suppose we want:

```text
German:  Ich liebe Hunde.
English: I love dogs.
```

A neural network cannot directly manipulate the symbols:

```text
Ich
liebe
Hunde
```

It ultimately operates on **numbers**.

So we need a pipeline:

```text
words
 ↓
tokens
 ↓
token IDs
 ↓
vectors
 ↓
Transformer
 ↓
numbers representing probabilities
 ↓
tokens
 ↓
words
```

A **token** is simply one unit of text processed by the model. It could eventually be a whole word, part of a word, punctuation, etc.

A **token ID** is an integer assigned to that token.

For a toy vocabulary:

```text
0 → <pad>
1 → <s>
2 → I
3 → love
4 → dogs
5 → </s>
```

then:

```text
I love dogs
```

might become:

```text
[2, 3, 4]
```

The number `3` does **not** mean "love".

It is merely an index saying:

> Go to row 3 of the vocabulary/embedding table.

The teacher explicitly emphasized in the latest class that tokenization produces token IDs and **embeddings are generated from those IDs**.

---

# 2. Embeddings: Turning IDs into Useful Numbers

## What is an embedding?

An embedding is a list of numbers representing a token.

Instead of:

```text
love → 3
```

the model might internally represent `love` as:

```text
love → [0.61, -0.12, 0.83, 0.27]
```

This list is called a **vector**.

A vector is nothing mysterious. It is simply an ordered list of numbers.

```text
[0.61, -0.12, 0.83, 0.27]
```

has **4 dimensions**, because it contains four numbers.

Real Transformers use hundreds or thousands of dimensions.

Your project notebook implements this directly:

```python
class Embeddings(nn.Module):
    def __init__(self, d_model, vocab):
        self.lut = nn.Embedding(vocab, d_model)

    def forward(self, x):
        return self.lut(x) * math.sqrt(self.d_model)
```

So if:

```text
vocabulary size = 10,000
d_model         = 512
```

the embedding table conceptually has shape:

```text
10,000 × 512
```

meaning:

```text
10,000 tokens
×
512 numbers per token
```

Your earlier notebook begins the Transformer sequence precisely with word embeddings and then moves into attention and self-attention.

---

# 3. But Embeddings Have a Serious Problem: They Don't Know Order

Consider:

```text
Dog bites man.
Man bites dog.
```

The words are nearly identical.

The **order** changes the meaning completely.

Yet basic self-attention does not automatically know that one token came first and another came second.

Your teacher specifically highlighted this:

> In self-attention, order itself has no influence; positional encoding is introduced because we need order.

This is why the Transformer adds another vector.

---

# 4. Positional Encoding: Giving Every Token an Address

The model creates:

```text
token embedding
       +
position vector
       =
input to Transformer
```

Suppose the embedding of `love` were:

```text
[0.60, 0.70, 0.80, 0.90]
```

and its positional encoding were:

```text
[0.84, 0.54, 0.01, 1.00]
```

then the actual input becomes approximately:

```text
[0.60, 0.70, 0.80, 0.90]
+
[0.84, 0.54, 0.01, 1.00]

=

[1.44, 1.24, 0.81, 1.90]
```

Now the vector contains information about both:

```text
WHAT token is this?
+
WHERE is it?
```

Your notebook explicitly draws this addition between the original embedding and positional vector.

---

# 5. Where Do the Positional Numbers Come From?

The original Transformer uses sine and cosine functions.

Your notebook gives:

$$
PE(pos,2i)
=
\sin\left(
\frac{pos}{10000^{2i/d_{model}}}
\right)
$$

and:

$$
PE(pos,2i+1)
=
\cos\left(
\frac{pos}{10000^{2i/d_{model}}}
\right)
$$

Let's unpack **every symbol**.

### `PE`

Positional Encoding.

The number we are trying to calculate.

### `pos`

The location of the token.

For example:

```text
I     love    dogs
0       1       2
```

For `love`:

```text
pos = 1
```

### `d_model`

The number of dimensions in each token vector.

Our toy example might use:

```text
d_model = 4
```

The original Transformer implementation in your notebook uses:

```text
d_model = 512
```

### `i`

Controls which pair of embedding dimensions we are currently calculating.

Dimensions alternate:

```text
dimension 0 → sin
dimension 1 → cos

dimension 2 → sin
dimension 3 → cos

dimension 4 → sin
dimension 5 → cos
...
```

Your notebook works through exactly this alternating sine/cosine structure and explains dimensions as pairs.

---

# 6. Tiny Positional-Encoding Calculation

Take:

```text
pos = 1
d_model = 4
```

For dimensions 0 and 1:

```text
i = 0
```

Therefore:

$$
10000^{2(0)/4}=1
$$

So:

$$
PE(1,0)=\sin(1)\approx0.841
$$

and:

$$
PE(1,1)=\cos(1)\approx0.540
$$

For dimensions 2 and 3:

```text
i = 1
```

Then:

$$
10000^{2/4}
=
10000^{1/2}
=
100
$$

Therefore:

$$
PE(1,2)=\sin(1/100)\approx0.010
$$

$$
PE(1,3)=\cos(1/100)\approx0.99995
$$

So:

```text
Position 1 ≈

[0.841, 0.540, 0.010, 0.99995]
```

Your handwritten notebook performs essentially this same calculation. One handwritten approximation gives the final value near `0.995`; direct evaluation gives approximately `0.99995`.

### Core intuition

Different dimensions oscillate at different speeds.

Think of several clocks:

```text
fast clock
medium clock
slow clock
very slow clock
```

Together, their readings provide a distinctive numerical signature for each position.

The teacher also noted in the latest class that this original sinusoidal positional encoding is not the final word; later the course will replace/upgrade it, including discussion of **RoPE**.

---

# 7. Now We Have Vectors. What Does Self-Attention Do?

Suppose the sentence is:

```text
The animal did not cross the road because it was tired.
```

What does `it` refer to?

Understanding `it` requires information from another part of the sentence.

An isolated embedding for `it` cannot solve this very well.

So the model lets every token examine other tokens.

That operation is **self-attention**.

Your notes describe self-attention as creating increasingly **contextual** vectors: each new output vector contains information gathered from other relevant vectors.

The teacher's phrasing was similar:

> The purpose is to make better vectors.

That is an excellent mental model.

```text
Before self-attention:

token vector
≈ information about token

After self-attention:

token vector
≈ token + relevant surrounding context
```

---

# 8. Query, Key and Value — Without Jargon

Self-attention creates three versions of every token vector:

```text
Query
Key
Value
```

Your self-attention notebook develops exactly these three objects before moving into multi-head attention.

A useful interpretation is:

```text
Query = What am I looking for?

Key   = What information do I contain?

Value = What information can I contribute?
```

Suppose we are processing:

```text
I gave my dog Tommy some food.
```

The teacher used this sentence while discussing different attention relationships.

For the word `gave`, one attention pattern might strongly care about:

```text
Who gave?
```

Another might care about:

```text
What was given?
```

Another:

```text
Who received it?
```

That intuition later motivates **multi-head attention**.

But first we need one attention head.

---

# 9. Where Do Q, K and V Come From?

Start with a token vector:

$$
x
$$

Then multiply it by three learned matrices:

$$
Q=XW_Q
$$

$$
K=XW_K
$$

$$
V=XW_V
$$

### `X`

All input token vectors.

If we have:

```text
4 tokens
3 numbers per token
```

then:

```text
X shape = 4 × 3
```

### `W_Q`

A learned matrix used to create Queries.

### `W_K`

A learned matrix used to create Keys.

### `W_V`

A learned matrix used to create Values.

**Learned** means the numbers inside these matrices are adjusted during training using backpropagation.

The notes explicitly transition from untrained/raw vector relationships to these trainable Q/K/V projections.

---

# 10. The Complete Attention Equation

Your course uses the standard scaled dot-product attention equation:

$$
Attention(Q,K,V)
=
softmax
\left(
\frac{QK^T}{\sqrt{d_k}}
\right)V
$$

The same equation appears directly in your multi-head-attention notes.

It looks intimidating.

It is actually four simple operations.

```text
1. Compare Q with K
2. Scale the scores
3. Turn scores into weights
4. Mix the V vectors using those weights
```

Let's build it.

---

# 11. Step 1 — Compare Query and Key

The comparison is made using a **dot product**.

For two vectors:

```text
a = [a₁, a₂]
b = [b₁, b₂]
```

the dot product is:

$$
a\cdot b
=
a_1b_1+a_2b_2
$$

Example:

```text
a = [1, 2]
b = [3, 1]
```

then:

$$
1(3)+2(1)=5
$$

The result is one number.

That number is used as a compatibility/similarity score.

For many tokens at once, all those dot products become:

$$
QK^T
$$

`T` means **transpose**: rows and columns are exchanged so the matrix dimensions line up correctly for matrix multiplication.

---

# 12. A Complete Tiny Self-Attention Example

Use two tokens with extremely simple vectors:

```text
x₁ = [1, 0]
x₂ = [0, 1]
```

For teaching purposes, suppose:

```text
Q = K = V = X
```

So:

```text
Q = [[1,0],
     [0,1]]

K = [[1,0],
     [0,1]]

V = [[1,0],
     [0,1]]
```

Calculate:

$$
QK^T
$$

The four dot products are:

```text
x₁ · x₁ = 1
x₁ · x₂ = 0
x₂ · x₁ = 0
x₂ · x₂ = 1
```

Therefore:

$$
QK^T
=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

---

# 13. Step 2 — Why Divide by $\sqrt{d_k}$?

Here:

```text
d_k = 2
```

because each Key contains two numbers.

So:

$$
\sqrt{d_k}
=
\sqrt2
\approx1.414
$$

Our scores become:

$$
\begin{bmatrix}
0.707&0\\
0&0.707
\end{bmatrix}
$$

The teacher's notes explain the motivation: without scaling, some dot products can become much larger than others, making softmax extremely concentrated and producing high variance.

---

# 14. Step 3 — Softmax

Softmax turns arbitrary scores into positive weights that sum to 1.

For numbers:

```text
[z₁, z₂]
```

softmax computes:

$$
P_i
=
\frac{e^{z_i}}
{e^{z_1}+e^{z_2}}
$$

For:

```text
[0.707, 0]
```

we get approximately:

```text
[0.67, 0.33]
```

Interpretation:

```text
67% attention to token 1
33% attention to token 2
```

The notebook explicitly notes that softmax produces values whose total is 1.

---

# 15. Step 4 — Use Those Weights to Mix the Values

For token 1:

```text
0.67 × [1,0]
+
0.33 × [0,1]
```

equals:

```text
[0.67, 0.33]
```

Originally token 1 was:

```text
[1,0]
```

After attention:

```text
[0.67,0.33]
```

It now contains some information from token 2.

That is the fundamental Transformer operation.

## Forget the equation

Remember this:

> **Attention asks every token: "Which other tokens matter to me, and how much of their information should I absorb?"**

---

# 16. What Is the Encoder?

Now we can finally understand the Transformer architecture.

For translation:

```text
German → Encoder → Decoder → English
```

The **encoder** reads the source sentence.

Example:

```text
Ich liebe Hunde.
```

It does roughly:

```text
token IDs
   ↓
embeddings
   ↓
+ positional encodings
   ↓
self-attention
   ↓
feed-forward network
   ↓
repeat several times
   ↓
encoder output
```

The teacher's latest recap explicitly lists the encoder as:

```text
self-attention
→ feed-forward component
→ residual/layer-normalization machinery
```

and your project notebook implements:

```python
def encode(self, src, src_mask):
    return self.encoder(
        self.src_embed(src),
        src_mask
    )
```

The source is first embedded and then fed to the encoder.

---

# 17. What Does the Encoder Produce?

It does **not** directly produce English.

It produces a contextual representation of the German sentence.

The code later calls this:

```python
memory
```

Do not interpret `memory` as ordinary computer RAM.

Here `memory` simply means:

> the encoder's contextualized numerical representation of the source sentence.

Suppose the input contained four source tokens.

Then conceptually:

```text
German tokens

x₁
x₂
x₃
x₄

 ↓ ENCODER

m₁
m₂
m₃
m₄
```

Each `m` is now context-aware.

---

# 18. What Is the Decoder?

The decoder has a different job.

The encoder asks:

> What does the source sentence mean in context?

The decoder asks:

> Given the source sentence **and the target words generated so far**, what should come next?

That requires **two different attention operations**.

Your latest transcript explicitly says the decoder contains:

1. its own self-attention;
2. attention over the information received from the encoder.

The teacher calls the second one **source attention** in parts of the transcript.

Your notebook/code calls it:

```python
src_attn
```

and your handwritten notes describe it as **cross attention / encoder-decoder attention**.

These refer to the same role in this architecture.

---

# 19. Decoder Attention #1: Masked Self-Attention

Imagine we are translating and currently have:

```text
I love
```

The decoder should predict:

```text
dogs
```

It may examine:

```text
I
love
```

but it must **not** examine the correct future answer:

```text
dogs
```

Otherwise training would be cheating.

So decoder self-attention is **causal** or **masked**.

Your notebook explicitly writes:

```text
Masked Attention = Causal Attention
```

and builds the decoder's mask matrix.

---

# 20. The Causal Mask

For four target positions:

```text
1 2 3 4
```

the allowed attention pattern is:

```text
        KEY POSITION
        1    2    3    4

Q 1     ✓    X    X    X
U 2     ✓    ✓    X    X
E 3     ✓    ✓    ✓    X
R 4     ✓    ✓    ✓    ✓
Y
```

Numerically, the course implements a mask conceptually like:

```text
[ 0   -∞   -∞   -∞ ]
[ 0    0   -∞   -∞ ]
[ 0    0    0   -∞ ]
[ 0    0    0    0 ]
```

Why `-∞`?

Because:

$$
e^{-\infty}=0
$$

Softmax therefore gives masked positions probability:

```text
0
```

So the future becomes mathematically invisible.

The notebook works through this exact "scores + mask → softmax" process.

---

# 21. Decoder Attention #2: Encoder–Decoder Attention

Now the decoder also needs the German sentence.

Suppose it currently has:

```text
I love
```

It must determine the next English word while consulting:

```text
Ich liebe Hunde.
```

This is **cross-attention**.

The crucial arrangement is:

```text
Query  → Decoder
Key    → Encoder output
Value  → Encoder output
```

Your notebook writes exactly this relationship:

```text
Q     → Decoder
K, V  → Encoder
```

and describes cross-attention as alignment/fusion between source and target sequences.

So:

```text
DECODER:
"What source information do I need right now?"
       ↓ Query

ENCODER:
"Here is everything I understood about the source."
       ↓ Keys + Values
```

This is the bridge between the two halves of the Transformer.

---

# 22. Self-Attention vs Cross-Attention

This distinction is worth memorizing.

| Attention                       | Q comes from | K comes from | V comes from |
| ------------------------------- | ------------ | ------------ | ------------ |
| Encoder self-attention          | Encoder      | Encoder      | Encoder      |
| Decoder masked self-attention   | Decoder      | Decoder      | Decoder      |
| Encoder–decoder/cross-attention | Decoder      | Encoder      | Encoder      |

### Core intuition

**Self-attention**

```text
Talk to others in my own sequence.
```

**Cross-attention**

```text
Talk to the other sequence.
```

## Your earlier notes use "attention" and "self-attention" somewhat interchangeably while first building intuition. Later notebooks distinguish decoder self-attention from cross/source attention explicitly.

# 23. The Encoder–Decoder Class Now Becomes Obvious

Your actual notebook contains:

```python
def forward(self, src, tgt, src_mask, tgt_mask):
    return self.decode(
        self.encode(src, src_mask),
        src_mask,
        tgt,
        tgt_mask
    )
```

Read it literally:

```text
1. Encode source.
2. Give encoded source to decoder.
3. Give decoder the target-so-far.
4. Produce decoder output.
```

The full implementation separates this into:

```python
def encode(self, src, src_mask):
    return self.encoder(
        self.src_embed(src),
        src_mask
    )
```

and:

```python
def decode(self, memory, src_mask, tgt, tgt_mask):
    return self.decoder(
        self.tgt_embed(tgt),
        memory,
        src_mask,
        tgt_mask
    )
```

So the architecture is:

```text
SOURCE
  │
  ▼
src_embed
  │
  ▼
ENCODER
  │
  └────────────── memory ───────────────┐
                                       │
TARGET-SO-FAR                          │
  │                                    │
  ▼                                    │
tgt_embed                              │
  │                                    │
  ▼                                    │
DECODER ◄──────────────────────────────┘
  │
  ▼
GENERATOR
  │
  ▼
next-token scores
```

---

# 24. Why Do We Need Shifted Target Sequences?

This is one of the easiest Transformer ideas to misunderstand.

Suppose the correct English target sentence is:

```text
<s> I love dogs </s>
```

where:

```text
<s>   = start token
</s>  = end token
```

During training we need:

```text
INPUT TO DECODER             CORRECT ANSWER

<s>                      →   I
<s> I                    →   love
<s> I love               →   dogs
<s> I love dogs          →   </s>
```

That is next-token prediction.

But we do not construct four completely separate sequences manually.

Instead, we shift one sequence.

---

# 25. Shift Left and Shift Right

Starting with:

```text
[<s>, I, love, dogs, </s>]
```

the notebook does:

```python
self.tgt = tgt[:, :-1]
self.tgt_y = tgt[:, 1:]
```

Let's translate that Python.

### `tgt[:, :-1]`

Keep everything **except the last token**.

Result:

```text
[<s>, I, love, dogs]
```

This goes **into the decoder**.

### `tgt[:, 1:]`

Keep everything **except the first token**.

Result:

```text
[I, love, dogs, </s>]
```

These are the correct answers.

Your annotated Transformer notes explicitly illustrate these shifted-left and shifted-right versions and their alignment.

The teacher also recapped these two operations in the missed class before moving into the final training loop.

---

# 26. Why Does the Shift Work?

Place them vertically:

```text
DECODER INPUT       TARGET

<s>            →    I
I              →    love
love           →    dogs
dogs           →    </s>
```

Each position asks:

> Given everything available up through this position, what comes next?

This is why:

```text
input length = target length
```

after the two slices.

The teacher explicitly mentioned that the shifting is done so the two versions remain aligned with the same shape.

---

# 27. Important: Training Is Not Literally One Word at a Time

This is a common mistake.

You may look at:

```text
<s> → I
I   → love
...
```

and imagine the model performs four completely separate forward passes.

It does not have to.

During training, the target sequence can be processed **in parallel**:

```text
[<s>, I, love, dogs]
```

The causal mask prevents each position from seeing its future.

So:

```text
parallel computation
+
causal mask
=
correct autoregressive training
```

**Autoregressive** simply means:

> each prediction depends on earlier generated tokens.

---

# 28. Training vs Inference

This distinction is critical.

## Training

We already know the correct sentence.

```text
German:
Ich liebe Hunde.

Correct English:
I love dogs.
```

So the decoder receives shifted versions of the correct target.

This is sometimes called **teacher forcing**.

The supplied notebook itself focuses on the shifted target mechanics rather than emphasizing that term.

---

## Inference

Now suppose a real user gives:

```text
Ich liebe Hunde.
```

There is **no correct English target available**.

The model must create it.

So generation looks like:

```text
<s>
 ↓
I
 ↓
love
 ↓
dogs
 ↓
</s>
```

This is where **greedy decoding** enters.

---

# 29. Greedy Decoding

Greedy decoding follows one extremely simple rule:

> At each step, choose the token with the largest predicted score/probability.

Suppose the model predicts:

```text
dog      0.07
love     0.04
I        0.03
dogs     0.79
banana   0.01
...
```

Greedy decoding chooses:

```text
dogs
```

because:

```text
0.79
```

is largest.

Then `dogs` is appended to the decoder input and the process repeats.

The teacher explicitly described the course implementation as using `torch.max` to select the highest-scoring index for the next word.

---

# 30. Greedy Decoding Step by Step

Assume the source is:

```text
Ich liebe Hunde.
```

### Step 1 — Encode source once

```text
Ich liebe Hunde
       ↓
    ENCODER
       ↓
     memory
```

### Step 2 — Start the decoder

```text
ys = [<s>]
```

`ys` means the target sequence generated so far.

### Step 3 — Decode

The decoder gets:

```text
memory
+
[<s>]
```

and predicts:

```text
I
```

Now:

```text
ys = [<s>, I]
```

### Step 4

Feed:

```text
[<s>, I]
```

Predict:

```text
love
```

Now:

```text
ys = [<s>, I, love]
```

### Step 5

Predict:

```text
dogs
```

Now:

```text
ys = [<s>, I, love, dogs]
```

And so on.

---

# 31. The Actual Greedy-Decoding Code

Your project notebook contains essentially:

```python
def greedy_decode(model, src, src_mask, max_len, start_symbol):

    memory = model.encode(src, src_mask)

    ys = torch.zeros(1, 1)\
        .fill_(start_symbol)\
        .type_as(src.data)

    for i in range(max_len - 1):

        out = model.decode(
            memory,
            src_mask,
            ys,
            subsequent_mask(ys.size(1))
        )

        prob = model.generator(out[:, -1])

        _, next_word = torch.max(prob, dim=1)

        ys = torch.cat(
            [ys, next_word],
            dim=1
        )

    return ys
```

Conceptually:

```text
encode source once

START

repeat:
    look at generated tokens
    ↓
    decoder
    ↓
    calculate next-token scores
    ↓
    choose largest
    ↓
    append it
```

The teacher used this initially with dummy data to verify that the full Transformer backbone worked and later applied it to validation examples from the translation task.

In the latest class, the real inference helper used a hard-coded maximum generation length of **72 tokens**.

---

# 32. One Technical Detail About “Probability”

The teacher describes greedy decoding as choosing the token with the highest probability.

That is the correct intuition.

The supplied `Generator` actually performs:

```python
log_softmax(...)
```

so the values in the code are technically **log-probabilities**.

This does not change the greedy choice.

Why?

Because logarithm preserves ordering.

If:

```text
P(A) > P(B)
```

then:

```text
log P(A) > log P(B)
```

so `torch.max` chooses the same token.

This is an additional mathematical clarification of the supplied implementation.

---

# 33. Another Detail: When Does Generation Stop?

The provided `greedy_decode` helper loops:

```python
for i in range(max_len - 1):
```

so this implementation is fundamentally bounded by:

```text
max_len
```

The helper shown in the project does not itself contain an explicit:

```text
if next_word == EOS:
    break
```

A production-style decoder can stop early on an end-of-sequence token, but that is an **additional implementation improvement**, not something present in this particular helper.

---

# 34. Why Is It Called “Greedy”?

Suppose at one step the model has:

```text
A = 45%
B = 40%
C = 15%
```

Greedy decoding chooses:

```text
A
```

immediately.

It does not ask:

> Maybe choosing B now produces a much better complete sentence five words later?

It only grabs the locally best option.

Hence **greedy**.

The teacher noted that later the course would move beyond this to approaches such as **beam search**.

---

# 35. Put Everything Together

We can now trace one complete translation.

```text
SOURCE:
"Ich liebe Hunde"
```

## Encoder side

```text
text
 ↓
tokens
 ↓
token IDs
 ↓
embeddings
 ↓
+ positional encoding
 ↓
self-attention
 ↓
feed-forward
 ↓
repeat encoder layers
 ↓
ENCODER MEMORY
```

## Decoder generation

Start with:

```text
<s>
```

Then:

```text
target embedding
+
target positional encoding
        ↓
masked self-attention
        ↓
cross-attention
        ↑
   encoder memory
        ↓
feed-forward
        ↓
generator
        ↓
next-token distribution
        ↓
argmax
        ↓
"I"
```

Append `I`.

Run again:

```text
<s> I
 ↓
"love"
```

Again:

```text
<s> I love
 ↓
"dogs"
```

Again:

```text
<s> I love dogs
 ↓
</s>
```

Final result:

```text
I love dogs.
```

---

# 36. The Whole Transformer in One Diagram

```text
                  SOURCE SENTENCE
                  "Ich liebe Hunde"
                         │
                         ▼
                    Token IDs
                         │
                         ▼
                     Embedding
                         │
                         +
                 Positional Encoding
                         │
                         ▼
              ┌────────────────────┐
              │      ENCODER       │
              │                    │
              │   Self-Attention   │
              │         ↓          │
              │   Feed Forward     │
              │         ↓          │
              │      repeat        │
              └─────────┬──────────┘
                        │
                        │ Encoder memory
                        │
                        ▼
                  ┌───────────────┐
                  │    DECODER    │
                  │               │
Generated so far │ Masked Self   │
<s> I love ─────►│ Attention      │
                  │       ↓       │
Encoder memory ─►│ Cross-Attn     │
                  │       ↓       │
                  │ Feed Forward  │
                  └───────┬───────┘
                          │
                          ▼
                      Generator
                          │
                          ▼
                scores over vocabulary
                          │
                          ▼
                       argmax
                          │
                          ▼
                        "dogs"
                          │
                          ▼
                     append token
                          │
                          └──────► repeat
```

---

# 37. Shapes: What Is Actually Moving Through the Model?

Suppose:

```text
B = batch size
S = source sequence length
T = target sequence length
D = d_model
V = vocabulary size
```

A **batch** means several examples processed together.

Then:

| Object                  | Shape       |
| ----------------------- | ----------- |
| Source token IDs        | `B × S`     |
| Source embeddings       | `B × S × D` |
| Encoder output / memory | `B × S × D` |
| Target token IDs        | `B × T`     |
| Target embeddings       | `B × T × D` |
| Decoder output          | `B × T × D` |
| Generator output        | `B × T × V` |

Why does the final dimension become `V`?

Because for every target position the model needs one score for **every possible vocabulary token**.

If:

```text
V = 32,000
```

the model effectively asks:

```text
How plausible is token 0?
How plausible is token 1?
...
How plausible is token 31,999?
```

Then greedy decoding takes the maximum.

---

# 38. What Multi-Head Attention Adds

Your teacher's notebooks then take single self-attention and split it into multiple **heads**.

The original configuration shown in the course uses:

```text
d_model = 512
heads   = 8
```

Therefore each head receives:

$$
512/8=64
$$

dimensions.

Your multi-head-attention notebook explicitly performs this calculation.

Why multiple heads?

Because different heads can learn different relationships.

For:

```text
I gave my dog Tommy some food
```

one head might concentrate on:

```text
gave ↔ I
```

another:

```text
gave ↔ food
```

another:

```text
dog ↔ Tommy
```

The individual head outputs are then:

```text
concatenated
→ passed through another linear layer
```

The teacher presented the motivation as giving the model more ways of extracting context rather than relying on only one attention relationship.

---

# 39. Teacher Said vs Notebook Says

## Teacher said

Across the classes and especially the latest recap:

* Start with a core **EncoderDecoder** architecture.
* The encoder contains self-attention and feed-forward components.
* The decoder needs **two attention operations**:

  * decoder self-attention;
  * source/encoder attention.
* Embeddings are followed by positional encodings.
* Positional information matters because plain self-attention does not encode sequence order.
* The original sinusoidal positional encoding will later be upgraded.
* The decoder uses causal masking.
* Training batches use shifted-left and shifted-right target sequences.
* Greedy decoding predicts the next word using the maximum output score.
* During inference the source is encoded and tokens are generated autoregressively.
* The implementation was first tested with dummy data and then applied to German→English translation.
* Later decoding methods such as beam search will be explored.

## Notebook says

The supplied notebooks make the same architecture concrete:

**Embeddings and early self-attention intuition** are developed in *Note.pdf*.

**Trainable Q/K/V self-attention** and the transition toward multiple heads appear in *self2.pdf*.

**Multi-head attention**, scaled dot-product attention and the `512 / 8 = 64` head dimension appear in *MHA.pdf*.

**Shifted target sequences** are explicitly illustrated in *Annotated TF.pdf*.

**Causal masking, positional encoding and cross-attention** are developed in *Note 2.pdf*.

The supplied `AnnotatedTransformer.ipynb` then connects those concepts mechanically through:

```text
EncoderDecoder
EncoderLayer
DecoderLayer
MultiHeadedAttention
Embeddings
PositionalEncoding
Batch
subsequent_mask
greedy_decode
```

---

# 40. Common Mistakes

## Mistake 1: “Token ID 42 is an embedding.”

No.

```text
42
```

is an index.

The embedding lookup turns it into something like:

```text
[0.51, -0.73, ...]
```

---

## Mistake 2: “Positional encoding replaces embeddings.”

No.

They are added:

```text
embedding + positional encoding
```

---

## Mistake 3: “Self-attention means the token only looks at itself.”

No.

The name means the sequence attends **within itself**.

A token can look at itself **and other tokens in the same sequence**.

---

## Mistake 4: “Cross-attention uses Q, K and V from the encoder.”

No.

In encoder–decoder attention:

```text
Q → decoder
K → encoder
V → encoder
```

---

## Mistake 5: “The decoder can see the correct future words.”

Not through masked self-attention.

Future positions are blocked by the causal mask.

---

## Mistake 6: “Shifted targets mean the model trains one token in a separate forward pass.”

No.

Training can process positions in parallel.

The mask preserves the autoregressive restriction.

---

## Mistake 7: “Greedy decoding examines every possible future sentence.”

No.

It selects the best **next** token at each individual step.

---

## Mistake 8: “The encoder generates the translation.”

No.

The encoder constructs contextual source representations.

The decoder generates the target.

---

# 41. The Five Ideas to Memorize

If all the equations disappear from memory, retain this:

### 1. Embedding

> Turn a token ID into a useful vector.

```text
token → numbers
```

### 2. Positional encoding

> Tell that vector where the token occurred.

```text
what + where
```

### 3. Self-attention

> Let tokens gather relevant information from their own sequence.

```text
my sequence → better contextual vectors
```

### 4. Cross-attention

> Let the decoder consult what the encoder understood.

```text
decoder question → encoder information
```

### 5. Shift + greedy decoding

During training:

```text
words so far → correct next word
```

During inference:

```text
words so far → choose highest-scoring next word → append → repeat
```

---

# 42. Final Mental Model

Forget the term *Transformer* for a moment.

Imagine two people.

The **encoder** is a reader.

It receives the entire German sentence and writes extremely detailed numerical notes about what every part means in context.

The **decoder** is a writer.

It has:

```text
1. the reader's notes;
2. the English words it has written so far.
```

Before writing each new word, it asks two questions:

```text
What have I already written?
        ↓
masked self-attention

What part of the German sentence matters now?
        ↓
cross-attention
```

Then it calculates:

```text
P(next word | source sentence, words generated so far)
```

Greedy decoding takes the largest probability.

Append the word.

Repeat.

That loop is the core mechanism connecting the **encoder–decoder architecture, embeddings, positional encoding, self-attention, cross-attention, shifted targets, and greedy decoding** into one working translation Transformer.

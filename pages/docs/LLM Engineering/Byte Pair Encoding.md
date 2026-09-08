

 Its basic move is almost suspiciously simple: start with small units, find the neighboring pair that appears most often, mash it into one piece, and repeat.

Imagine a tiny corpus containing many examples of:

```text
low
lower
lowest
```

At first, each word is broken into small pieces:

```text
l | o | w
l | o | w | e | r
l | o | w | e | s | t
```

The pair `l | o` appears repeatedly, so BPE may merge it:

```text
lo | w
lo | w | e | r
lo | w | e | s | t
```

If `lo | w` remains frequent, the next merge produces `low`:

```text
low
low | e | r
low | e | s | t
```

Repeat this across a much larger corpus and frequent sequences gradually earn their own tokens. Rare sequences remain combinations of smaller pieces.

Notice what BPE has and has not learned. It has discovered that keeping `low` together is useful for compressing the training text. It has not sat there contemplating the meaning of low. Meaning is learned later by the language model from how tokens occur in context.

That produces another distinction I initially found easy to blur: **training a tokenizer is not the same as using one.** They sound like adjacent details. They are different events.

During tokenizer training, the system examines a corpus and builds its vocabulary and merge rules. During ordinary encoding, it applies those frozen rules to new text. The model does not normally invent a new token because you typed a word it has never seen.

BPE is not the only subword method. **WordPiece**, associated especially with BERT, chooses pieces using a different scoring rule. **Unigram tokenization** begins with many candidate pieces and removes the less useful ones. The machinery differs, but the question is the same: which finite collection of fragments can cover an effectively unlimited stream of language?

And what happens if even the smallest learned fragment is not enough?

## What sits below a character?

A byte. There is always another floor in the basement.

Computers ultimately store text as bytes, and many modern tokenizers use bytes either as their starting units or as a fallback. A familiar word may be one token, an unusual word may become several subwords, and a truly unfamiliar symbol may fall all the way down to its bytes.

That is how byte-level BPE can represent almost any input without resorting to `<UNK>`. The tokenizer does not need to understand something new. It just keeps cutting until it reaches units already present in its vocabulary.

Coverage, however, is not the same as efficiency. A language or notation poorly represented in the training corpus may take many more tokens than familiar English text. The model can read it, but the same thought occupies more of its context window.

Meta's **Byte Latent Transformer (BLT)** takes this further. It works directly with bytes and dynamically groups them rather than relying on a conventional fixed subword vocabulary. It is an interesting research direction, but it makes more sense once the subword compromise is clear: tokenization is still an engineering choice, not a solved one-size-fits-all problem.

Which brings us to the practical question: **why should any of this matter to the person using the model?**

## Why do the cuts matter after tokenization?

Because the model's context window is measured in tokens, not words. The meter is running on the cuts.

If one tokenizer represents a passage in 700 tokens and another needs 1,100, the second version consumes more of the available context. API usage is also commonly metered in tokens. The cuts influence how much text fits, how much it costs to process, and how far apart related pieces sit inside the sequence.

They can also explain some model oddities. A model may stumble over the spelling of a name because that name arrives as a strange collection of fragments. Arithmetic can be awkward when numbers are split inconsistently. The same paragraph can cost more tokens in one language than another.

So tokenization is not the intern tidying up text before the real work begins. It decides what the pieces of the real work will be.

The complete path is:

```text
raw text
   ↓
ordinary tokens + any special tokens
   ↓
token IDs
   ↓
embeddings
   ↓
language model
```

On the way out, generated token IDs are mapped back to text pieces and joined into readable text.

And that returns us to the first sentence. The model never receives **The car is running.** in the form in which we see it. It receives a sequence of addresses, probably wrapped in bits of stage direction, each pointing to a learned embedding.

That is the entire bargain. Do not store every possible word. Do not make the model crawl through every character. Give it a finite vocabulary of reusable subwords, then let those pieces stretch far enough to handle language they have never met before.

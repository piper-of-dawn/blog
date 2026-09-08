
*How LLMs Cut Language Down to Its Building Blocks*

Take one sentence:

> **The car is running.**

To us, that is already meaningful language. The model is not so lucky. Underneath all the impressive conversation, it is still a neural network, and neural networks work with numbers. So before anything intelligent can happen, there is a boring plumbing problem: the sentence has to become numerical input.

Tokenization is where that conversion begins. It takes the open-ended mess of language and chops it into a finite box of reusable pieces.

But that immediately raises another question: **what exactly counts as one piece?**

## First: what is a token?

A **token** is one piece of text that a tokenizer decides to treat as a unit.

For our sentence, one tokenizer might produce:

```text
["The", " car", " is", " running", "."]
```

Another might produce:

```text
["The", " car", " is", " run", "ning", "."]
```

In the first version, `running` is one token. In the second, it is built from two. Neither version is *the* natural answer. Both are perfectly possible because:

> **Token does not mean word. Token means piece.**

Even the spaces can be part of those pieces. Many tokenizers distinguish between `"car"` and `" car"`, storing the space together with the word that follows it.

Which is a slightly annoying answer, because now we have to ask: who decides where those cuts go?

## What is the tokenizer?

The **tokenizer** is the system that applies the cutting rules. Roughly, it does this:

```text
┌─────────────────────┐
│ The car is running. │
└──────────┬──────────┘
           │ tokenizer
           ▼
┌─────────────────────────────────────────────────┐
│ ["The", " car", " is", " run", "ning", "."]     │
└─────────────────────────────────────────────────┘
```

That still leaves us with text. The model needs numbers, so each piece is assigned a stored number:

```text
"The"      → 464
" car"     → 1097
" is"      → 318
" run"     → 1057
"ning"     → 278
"."        → 13
```

Our sentence can now travel into the model as:

```text
[464, 1097, 318, 1057, 278, 13]
```

The numbers here are illustrative. Different tokenizers have different vocabularies and therefore different IDs. There is no sacred international registry in which `car` has been assigned number 1097 for all time.

Fine—but **what is a token ID actually telling the model?**

## What is a token ID?

A **token ID** is the numerical label assigned to a token. The number itself usually has no semantic meaning. `1097` is not more car-like than `278`, just as locker 1097 is not more athletic than locker 278. It is an address. That is all. The model uses that address to look up a learned list of numbers called an **embedding**. That embedding—not the bare ID—is what enters the neural network. So the path is already longer than it first appeared:

```text
┌──────┐   ┌────────┐   ┌───────────┐   ┌────────────┐
│ text │ → │ tokens │ → │ token IDs │ → │ embeddings │
└──────┘   └────────┘   └───────────┘   └────────────┘
```

This is where a seemingly fussy question turns out not to be fussy at all. Our example ends with a full stop, but punctuation is not the same thing as an instruction to stop. **What token follows the sentence?**
## Why not simply make every word a token?

Because that is the obvious starting point. Split on spaces, keep every word whole, go home early:

```text
The | car | is | running | .
```

Easy. Then English shows up with a baseball bat.

Consider:

```text
run | ran | running
low | lower | lowest
```

With strict word-level tokenization, each form needs its own vocabulary entry. Do this across tens of thousands of base words, then add names, companies, technical terms, plurals, misspellings, slang, compound words, and other languages. The neat little vocabulary starts looking less like a toolbox and more like a warehouse whose owner has lost control of the inventory.

And after building that warehouse, an unfamiliar word can still arrive tomorrow. Older word-level systems often replaced anything outside their vocabulary with `<UNK>`, the **unknown token**. This is the **out-of-vocabulary (OOV)** problem.

Once different unfamiliar words collapse into the same `<UNK>` token, the model effectively goes blind to the differences between them. `Kraków`, `PyTorch`, and a newly named drug become identical at the input. That is a brutal loss of information. The fixed vocabulary is a Procrustean bed: whatever does not fit gets hacked down to the same anonymous symbol.

Fine. If whole words are too rigid, **why not use individual characters?** Then almost nothing is unknown:

```text
running → r | u | n | n | i | n | g
```

A brand-new word can be assembled from characters the tokenizer already knows. Great. We have solved the coverage problem.

We have also created a length problem. `running` now occupies seven positions instead of one. Every familiar pattern has to be rebuilt character by character, and a fixed context window fills much faster. Individual characters are weak carriers of meaning: `r` tells us almost nothing; `run` is already getting somewhere. Word-level tokenization is compact but brittle. Character-level tokenization is flexible but verbose. So is there something betwzen a whole word and a single character?

Yes. And this is the part that makes the whole story click. Modern language models generally use **subword tokenization**. A common word may remain whole. A less common word can be assembled from fragments. A very unusual sequence can fall back to still smaller pieces.

For example:

```text
the          → the
running      → run | ning
tokenization → token | ization
```

The exact cuts are not universal. One tokenizer may store `running` whole; another may split it into `run` and `ning`; another may do something uglier. Each tokenizer learned from a different body of text and made a different trade-off. Language does not arrive with dotted lines showing us where to cut.

The important idea is that the vocabulary no longer needs a separate entry for every possible word. It needs a set of pieces from which words can be built. `walk`, `walking`, and `walked` may reuse `walk`. A name the tokenizer has never seen can still survive as several smaller tokens rather than disappearing into `<UNK>`.

Subwords sit in the middle because they balance three competing pressures:

1. Can the tokenizer represent unfamiliar text?
2. Can it keep the vocabulary to a manageable size?
3. Can it avoid turning every sentence into a very long sequence?

There is no free lunch hiding here. Larger pieces shorten the sequence but enlarge the vocabulary. Smaller pieces improve coverage but consume more positions. Tokenizer design is mostly the art of deciding which bill you would rather receive. But where do these subwords come from? Does somebody sit down and write a list of useful fragments?

Usually, the pieces are learned from a large collection of text. **Byte Pair Encoding (BPE)** is one widely used method in industry, especially in GPT class of models. 

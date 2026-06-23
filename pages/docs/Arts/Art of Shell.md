## xargs

`xargs` is plumbing. It takes a stream of text, splits it on whitespace, and bolts the pieces onto another command. By default it spits them into `echo`, but the moment you point it at something real — `rm`, `git`, whatever — it turns into a batch-launcher.  For example:

```bash
git diff --name-only --diff-filter=U | xargs -I {} git checkout --ours {}
```

This one-liner pulls out every conflicted file and runs `git checkout --ours` on each.

---


## Resolve-All-Conflicts-by-Choosing-Ours (Cherry-Pick)

Tell Git: list conflicted files, keep **our** side in every one, stage the lot, and push the cherry-pick forward

**What it does, step by step**

1. `git diff --name-only --diff-filter=U` — list files currently in conflict.
2. For each file, `git checkout --ours` — discard “theirs,” keep **ours**.
3. `git add -A` — mark all as resolved.
4. `git cherry-pick --continue` — resume the cherry-pick as if nothing happened.

Use this when you *intentionally* want your branch to win every conflict. If you don’t mean it, don’t run it.

## PowerShell

```powershell
git diff --name-only --diff-filter=U | ForEach-Object { git checkout --ours $_ }
git add -A
git cherry-pick --continue
```

## Bash

```bash
git diff --name-only --diff-filter=U | xargs -I{} git checkout --ours "{}"
git add -A
git cherry-pick --continue
```

## Difference between `merge` and `rebase`

The key distinction is that **merge preserves history**, while **rebase rewrites it**.


> [!INFO] What is history?
> In Git, history refers to the complete record of all commits and the relationships between them. It's the chronological sequence of changes that have been made to a repository over time.

### Merge vs Rebase — The Only Difference That Matters

* **Merge**: preserves history. Adds a merge commit.
* **Rebase**: rewrites history. Pretends your work always started on the new base.
### Git Merge — Preserves History

* Takes the common ancestor, slams both branches together, makes a new merge commit.
* History becomes a fork and join. Messy, but transparent.
* Use when the branch is shared — you want a paper trail.

### Visual

**Merge (messy but honest):**

```
A---B---C  (main)
     \
      D---E  (feature)
             \
              F   (merge commit)
```

**Rebase (clean but fake):**

```
A---B---C  (main)
          \
           D'---E'  (feature rebased)
```

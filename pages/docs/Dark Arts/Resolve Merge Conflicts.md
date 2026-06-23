To resolve merge conflicts with `master` so that **your changes override** the conflicting changes from `master`, follow these steps:
### **1. Fetch and merge `master`**

```bash
git fetch origin
git merge origin/master
```

If there are conflicts, Git will pause and mark the conflicting files.

> [!TIP] What is the difference between `git fetch` and `git pull`? 
> `git fetch` downloads objects/refs from another repository (or remote) but doesn't merge them into your working directory. `git pull` does both: it fetches and then merges.


---

### **2. Overwrite conflicts with your version**

For each conflicted file:

```bash
git checkout --ours <file>
```

> `--ours` = your branch (i.e., your changes override `master`)

Repeat this for all conflicted files or run:

```bash
git diff --name-only --diff-filter=U | xargs git checkout --ours
```

---

### **3. Mark conflicts resolved**

```bash
git add .
```

---

### **4. Complete the merge**

```bash
git commit
```

---

### Alternative: Rebase with your changes overriding `master`

```bash
git rebase origin/master
```

Then during each conflict:

```bash
git checkout --ours <file>
git add <file>
git rebase --continue
```

---

**Warning:** This strategy discards all changes made in `master` for the conflicted files, so use it only when you're sure your changes must prevail.

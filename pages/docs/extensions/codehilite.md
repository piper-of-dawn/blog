---
title: Codehilite
summary: Syntax highlighting for code blocks
external_links:
    Reference: https://python-markdown.github.io/extensions/code_hilite/
---

The CodeHilite extension adds code/syntax highlighting to standard Python-Markdown code blocks using [Pygments](http://pygments.org/).

## [CONFIGURATION]

```yaml
# [MKDOCS.YML]

markdown_extensions:
  - codehilite
```

## [SYNTAX]

With the colon syntax (don't forget to indent the block).

    :::md
        :::python
        import numpy as np

or backticks syntax

~~~ markdown 
```python
import numpy as np
```
~~~


```python
import numpy as np
```

both give

    :::python
    import numpy as np
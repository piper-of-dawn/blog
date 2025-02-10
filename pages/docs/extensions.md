---
title: Extensions
summary: List of supported markdown extensions
---

<!-- # Extensions

List of supported markdown extensions
{: .summary }

> OK -->

## Admonitions

The Admonition extension adds rST-style admonitions to Markdown documents.

    :::md {.light}
    !!! note "Note:"
        We notice that

    !!! warning "Warning:"
        There is a risk doing that

    !!! danger "Danger:"
        Don't do that please!


!!! note "Note:"
    We notice that

!!! warning "Warning:"
    There is a risk doing that

!!! danger "Danger:"
    Don't do that please!

## Codehilite

The CodeHilite extension adds code/syntax highlighting to standard Python-Markdown code blocks using [Pygments](http://pygments.org/).

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

both give

    :::python
    import numpy as np

## Fenced code

The Fenced Code Blocks extension adds a secondary way to define code blocks, which overcomes a few limitations of indented code blocks.

~~~ md
``` { .python linenos=true hl_lines="4 5" }
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)
```
~~~


``` { .python linenos=true hl_lines="4 5" }
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)
```

## pymdownx.tabbed

~~~ md
=== "`pip`"

        :::bash
        pip install mkdocs-shadcn


=== "uv"

        :::bash
        uv add mkdocs-shadcn

=== "poetry"

        :::bash
        poetry add mkdocs-shadcn
~~~

=== "`pip`"

        :::bash
        pip install mkdocs-shadcn


=== "uv"

        :::bash
        uv add mkdocs-shadcn

=== "poetry"

        :::bash
        poetry add mkdocs-shadcn

## pymdownx.blocks.details

```md
### FAQ

/// details | Why copy/paste and not packaged as a dependency?
The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.

Start with some sensible defaults, then customize the components to your needs.

*One of the drawbacks of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.*
///

/// details | Do you plan to publish it as an npm package?
No. I have no plans to publish it as an npm package.
///

/// details | Which frameworks are supported?
You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.
///
```

### FAQ

/// details | Why copy/paste and not packaged as a dependency?
The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.

Start with some sensible defaults, then customize the components to your needs.

*One of the drawbacks of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.*
///

/// details | Do you plan to publish it as an npm package?
No. I have no plans to publish it as an npm package.
///

/// details | Which frameworks are supported?
You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.
///




## Attribute Lists

The theme may provide some pre-computed classes. The `attr_list` extension allows to customize the attribute of the output html. Here is a example with the `reference` class.

```md
[Reference](https://python-markdown.github.io/extensions/attr_list/){: class="reference" }
```


[Reference](https://python-markdown.github.io/extensions/attr_list/){: class="reference" }
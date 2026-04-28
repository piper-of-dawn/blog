import markdown


def render(text: str) -> str:
    return markdown.Markdown(
        extensions=[
            "admonition",
            "pymdownx.details",
            "shadcn.extensions.obsidian_callouts",
        ]
    ).convert(text)


def test_obsidian_callout_renders_as_admonition():
    html = render(
        "> [!tip] Quick checks\n"
        "> Keep the source vault untouched.\n"
        ">\n"
        "> Reuse MkDocs admonition styling.\n"
    )

    assert '<div class="admonition success">' in html
    assert '<p class="admonition-title">Quick checks</p>' in html
    assert "<p>Keep the source vault untouched.</p>" in html
    assert "<p>Reuse MkDocs admonition styling.</p>" in html


def test_obsidian_folded_callout_uses_details_syntax():
    html = render(
        "> [!abstract]- TLDR\n"
        "> Summary line.\n"
    )

    assert "<details" in html
    assert "<summary>TLDR</summary>" in html
    assert "<p>Summary line.</p>" in html

from pathlib import Path

import markdown
from playwright.sync_api import Page


ROOT = Path(__file__).parents[1]
EDITORIAL_CSS = (ROOT / "shadcn/css/editorial.css").read_text()
PRINT_CSS = (ROOT / "shadcn/css/print.css").read_text()


HTML = """
<article>
  <div class="typography">
    <p id="body-copy">The sentence begins <span id="jargon" class="jargon-unlock">A short explanation of the jargon.</span> and continues after the annotation.</p>
  </div>
</article>
"""


def load_fixture(page: Page) -> None:
    page.set_content(HTML)
    page.add_style_tag(content=EDITORIAL_CSS)
    page.add_style_tag(content=PRINT_CSS)


def test_jargon_unlock_span_survives_markdown_rendering():
    html = markdown.Markdown(extensions=["extra"]).convert(
        'A sentence with <span class="jargon-unlock">an explanation</span>.'
    )

    assert '<span class="jargon-unlock">an explanation</span>' in html


def test_jargon_unlock_uses_desktop_margin_rail(page: Page):
    page.set_viewport_size({"width": 1280, "height": 900})
    load_fixture(page)

    jargon = page.locator("#jargon")
    body_copy = page.locator("#body-copy")
    jargon_box = jargon.bounding_box()
    body_box = body_copy.bounding_box()

    assert jargon.evaluate("el => getComputedStyle(el).float") == "left"
    assert "Libre Bodoni" in jargon.evaluate(
        "el => getComputedStyle(el).fontFamily"
    )
    assert jargon_box is not None and body_box is not None
    assert jargon_box["x"] < body_box["x"]


def test_jargon_unlock_stays_inline_on_narrow_screens(page: Page):
    page.set_viewport_size({"width": 700, "height": 900})
    load_fixture(page)

    jargon = page.locator("#jargon")

    assert jargon.evaluate("el => getComputedStyle(el).float") == "none"
    assert "Libre Bodoni" in jargon.evaluate(
        "el => getComputedStyle(el).fontFamily"
    )


def test_jargon_unlock_uses_print_margin_rail(page: Page):
    page.set_viewport_size({"width": 1280, "height": 900})
    page.emulate_media(media="print")
    load_fixture(page)

    jargon = page.locator("#jargon")
    body_copy = page.locator("#body-copy")
    jargon_box = jargon.bounding_box()
    body_box = body_copy.bounding_box()

    assert jargon.evaluate("el => getComputedStyle(el).float") == "left"
    assert "Libre Bodoni" in jargon.evaluate(
        "el => getComputedStyle(el).fontFamily"
    )
    assert jargon_box is not None and body_box is not None
    assert jargon_box["x"] < body_box["x"]

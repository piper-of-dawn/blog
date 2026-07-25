import importlib.util
from pathlib import Path


SCRIPT = Path(__file__).parents[1] / "scripts" / "sync-notes.py"
SPEC = importlib.util.spec_from_file_location("sync_notes", SCRIPT)
assert SPEC and SPEC.loader
SYNC_NOTES = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(SYNC_NOTES)


def test_private_directories_are_excluded(tmp_path):
    diary_note = tmp_path / "Diary" / "journal.md"
    diary_note.parent.mkdir()
    diary_note.write_text("private", encoding="utf-8")

    assert not SYNC_NOTES.should_copy(diary_note, tmp_path)


def test_root_image_embed_is_rewritten_relative_to_note(tmp_path):
    image = tmp_path / "Pasted image.png"
    image.write_bytes(b"image")
    note = tmp_path / "WRITINGS" / "article.md"
    note.parent.mkdir()

    rewritten = SYNC_NOTES.rewrite_obsidian_images(
        "![[Pasted image.png]]",
        note,
        tmp_path,
        {image.name: image},
    )

    assert rewritten == "![Pasted image](../Pasted%20image.png)"

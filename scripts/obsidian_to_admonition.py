import os
import re

DOCS_DIR = "../pages/docs"


def convert_obsidian_to_admonition(content):
    """
    Convert Obsidian style admonition blocks to MkDocs/shadcn admonition style.

    Obsidian style:
    ::: type Title
    content...
    :::

    MkDocs/shadcn style:
    !!! type "Title:"
        content...

    Handles only top-level blocks starting with ::: and ending with :::.
    """
    lines = content.splitlines()
    output_lines = []

    inside_admonition = False
    admonition_type = ""
    admonition_title = ""
    admonition_content = []

    # Pattern to match start of Obsidian admonition: ::: type Title
    start_pattern = re.compile(r"^::: (\w+)(?: (.+))?$")

    for line in lines:
        if not inside_admonition:
            m = start_pattern.match(line)
            if m:
                # start of admonition block
                inside_admonition = True
                admonition_type = m.group(1)
                admonition_title = m.group(2).strip() if m.group(2) else ""
                admonition_content = []
            else:
                output_lines.append(line)
        else:
            # inside admonition block
            if line.strip() == ":::":  # end of admonition block
                # convert to admonition style
                title_str = f' "{admonition_title}:"' if admonition_title else ""
                output_lines.append(f"!!! {admonition_type}{title_str}")
                for content_line in admonition_content:
                    # indent content lines with 4 spaces
                    if content_line.strip() == "":
                        output_lines.append("")
                    else:
                        output_lines.append("    " + content_line)
                inside_admonition = False
                admonition_type = ""
                admonition_title = ""
                admonition_content = []
            else:
                admonition_content.append(line)

    # In case file ends without closing admonition block, treat remaining lines normally (no conversion)
    if inside_admonition:
        output_lines.append(f"::: {admonition_type} {admonition_title}")
        output_lines.extend(admonition_content)

    return "\n".join(output_lines) + "\n"


def convert_files_in_docs():
    for root, _, files in os.walk(DOCS_DIR):
        for filename in files:
            if filename.endswith(".md"):
                file_path = os.path.join(root, filename)
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                new_content = convert_obsidian_to_admonition(content)
                if new_content != content:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Converted admonitions in {file_path}")


if __name__ == "__main__":
    convert_files_in_docs()

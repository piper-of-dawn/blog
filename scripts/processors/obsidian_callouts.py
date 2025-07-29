"""
Processor for converting Obsidian-style callouts to MkDocs admonitions.
"""

import re
from . import MarkdownProcessor


class ObsidianCalloutProcessor(MarkdownProcessor):
    """Convert Obsidian > [!type] callouts to MkDocs !!! admonitions."""
    
    def name(self) -> str:
        return "Obsidian Callout Converter"
    
    def process(self, content: str) -> str:
        """
        Convert Obsidian callouts to MkDocs admonitions.
        
        Obsidian format:
        > [!type] Title
        > content line 1
        > content line 2
        
        MkDocs format:
        !!! type "Title:"
            content line 1
            content line 2
        """
        lines = content.splitlines()
        output_lines = []
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Check if this line starts a callout
            callout_match = re.match(r'^>\s*\[!(\w+)\]\s*(.*)$', line)
            if callout_match:
                callout_type = callout_match.group(1).lower()
                title = callout_match.group(2).strip()
                
                # Process the callout block
                callout_content = []
                i += 1
                
                # Collect all subsequent lines that start with '>'
                while i < len(lines) and lines[i].startswith('>'):
                    content_line = lines[i][1:].strip()  # Remove '>' and leading space
                    callout_content.append(content_line)
                    i += 1
                
                # Generate the admonition
                title_str = f' "{title}:"' if title else ""
                output_lines.append(f"!!! {callout_type}{title_str}")
                
                for content_line in callout_content:
                    if content_line.strip() == "":
                        output_lines.append("")
                    else:
                        output_lines.append("    " + content_line)
                
                # Don't increment i since we've already processed ahead
                continue
            else:
                output_lines.append(line)
                i += 1
        
        return "\n".join(output_lines) + "\n"
"""
Markdown preprocessing plugins for the blog automation system.
"""

from abc import ABC, abstractmethod
from typing import List, Optional
from pathlib import Path


class MarkdownProcessor(ABC):
    """Base class for markdown processors."""
    
    @abstractmethod
    def process(self, content: str) -> str:
        """Process markdown content and return the transformed content."""
        pass
    
    @abstractmethod
    def name(self) -> str:
        """Return the name of this processor."""
        pass

    # Optional: processors can override this to receive file path context
    def process_with_path(self, content: str, file_path: Path, docs_root: Path) -> str:
        return self.process(content)


def get_all_processors() -> List[MarkdownProcessor]:
    """Return all available processors."""
    from .obsidian_callouts import ObsidianCalloutProcessor
    from .obsidian_admonitions import ObsidianAdmonitionProcessor
    from .obsidian_links import ObsidianLinksProcessor
    
    return [
        ObsidianCalloutProcessor(),
        ObsidianAdmonitionProcessor(),
        ObsidianLinksProcessor(),
    ]

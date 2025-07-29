"""
Markdown preprocessing plugins for the blog automation system.
"""

from abc import ABC, abstractmethod
from typing import List


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


def get_all_processors() -> List[MarkdownProcessor]:
    """Return all available processors."""
    from .obsidian_callouts import ObsidianCalloutProcessor
    from .obsidian_admonitions import ObsidianAdmonitionProcessor
    
    return [
        ObsidianCalloutProcessor(),
        ObsidianAdmonitionProcessor(),
    ]
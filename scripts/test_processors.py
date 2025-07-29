#!/usr/bin/env python3
"""
Test script for the markdown processors.
"""

import sys
import os

# Add the scripts directory to the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from processors.obsidian_callouts import ObsidianCalloutProcessor
from processors.obsidian_admonitions import ObsidianAdmonitionProcessor


def test_obsidian_callouts():
    """Test the Obsidian callout processor."""
    print("Testing Obsidian Callout Processor...")
    
    processor = ObsidianCalloutProcessor()
    
    # Test case 1: Basic callout with title
    test_input = """Some text before.

> [!tldr] TLDR
> For any Markov chain problem, Always ask: _What's my state? Where does it end? How does it move?_ That's the recipe for modeling any Markov problem.

Some text after."""
    
    expected_output = """Some text before.

!!! tldr "TLDR:"
    For any Markov chain problem, Always ask: _What's my state? Where does it end? How does it move?_ That's the recipe for modeling any Markov problem.

Some text after.
"""
    
    result = processor.process(test_input)
    print("Input:")
    print(test_input)
    print("\nOutput:")
    print(result)
    print("\nExpected:")
    print(expected_output)
    print(f"Test 1 passed: {result == expected_output}")
    
    # Test case 2: Callout without title
    test_input2 = """> [!note]
> This is a note without a title.
> Multiple lines here.

Regular text."""
    
    expected_output2 = """!!! note
    This is a note without a title.
    Multiple lines here.

Regular text.
"""
    
    result2 = processor.process(test_input2)
    print(f"\nTest 2 passed: {result2 == expected_output2}")
    
    # Test case 3: Multiple callouts
    test_input3 = """> [!warning] Warning
> This is a warning.

> [!info] Information
> This is info."""
    
    expected_output3 = """!!! warning "Warning:"
    This is a warning.

!!! info "Information:"
    This is info.
"""
    
    result3 = processor.process(test_input3)
    print(f"Test 3 passed: {result3 == expected_output3}")
    
    return True


def test_obsidian_admonitions():
    """Test the Obsidian admonition processor."""
    print("\n\nTesting Obsidian Admonition Processor...")
    
    processor = ObsidianAdmonitionProcessor()
    
    # Test case: Basic admonition
    test_input = """Some text before.

::: note My Note
This is the content of the note.
Multiple lines here.
:::

Some text after."""
    
    expected_output = """Some text before.

!!! note "My Note:"
    This is the content of the note.
    Multiple lines here.

Some text after.
"""
    
    result = processor.process(test_input)
    print("Input:")
    print(test_input)
    print("\nOutput:")
    print(result)
    print("\nExpected:")
    print(expected_output)
    print(f"Test passed: {result == expected_output}")
    
    return True


def main():
    """Run all tests."""
    print("Running processor tests...\n")
    
    success = True
    success &= test_obsidian_callouts()
    success &= test_obsidian_admonitions()
    
    if success:
        print("\n✅ All tests passed!")
    else:
        print("\n❌ Some tests failed!")
    
    return success


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
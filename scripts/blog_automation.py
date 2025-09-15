#!/usr/bin/env python3
"""
Blog automation script that syncs content from Google Drive and preprocesses it.
"""

import os
import subprocess
import sys
import argparse
from pathlib import Path

# Add the scripts directory to the path so we can import processors
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from processors import get_all_processors


class BlogAutomation:
    def __init__(self, source_dir: str, target_dir: str, verbose: bool = False):
        self.source_dir = Path(source_dir)
        self.target_dir = Path(target_dir)
        self.verbose = verbose
        self.processors = get_all_processors()

    def log(self, message: str):
        """Log message if verbose mode is enabled."""
        if self.verbose:
            print(f"[INFO] {message}")

    def sync_content(self, dry_run: bool = False) -> bool:
        """Sync content from source to target using rsync."""
        self.log(f"Syncing content from {self.source_dir} to {self.target_dir}")

        # Build rsync command
        cmd = [
            "rsync",
            "-av",
            f"--exclude-from={str(self.source_dir)}/.gitignore",
            str(self.source_dir) + "/",  # Trailing slash is important for rsync
            str(self.target_dir),
        ]

        if dry_run:
            cmd.append("--dry-run")
            self.log("Running in dry-run mode")

        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)

            if self.verbose:
                print("RSYNC OUTPUT:")
                print(result.stdout)
                if result.stderr:
                    print("RSYNC STDERR:")
                    print(result.stderr)

            self.log("Content sync completed successfully")
            return True

        except subprocess.CalledProcessError as e:
            print(f"Error during rsync: {e}")
            print(f"STDOUT: {e.stdout}")
            print(f"STDERR: {e.stderr}")
            return False

    def process_markdown_files(self, dry_run: bool = False) -> bool:
        """Process all markdown files in the target directory."""
        self.log(f"Processing markdown files in {self.target_dir}")

        if not self.target_dir.exists():
            print(f"Error: Target directory {self.target_dir} does not exist")
            return False

        processed_files = 0
        modified_files = 0

        # Walk through all markdown files
        for md_file in self.target_dir.rglob("*.md"):
            self.log(f"Processing {md_file}")
            processed_files += 1

            try:
                # Read the original content
                with open(md_file, "r", encoding="utf-8") as f:
                    original_content = f.read()

                # Apply all processors
                content = original_content
                for processor in self.processors:
                    self.log(f"  Applying {processor.name()}")
                    content = processor.process(content)

                # Write back if content changed
                if content != original_content:
                    if not dry_run:
                        with open(md_file, "w", encoding="utf-8") as f:
                            f.write(content)
                        self.log(f"  Modified {md_file}")
                    else:
                        self.log(f"  Would modify {md_file}")
                    modified_files += 1
                else:
                    self.log(f"  No changes needed for {md_file}")

            except Exception as e:
                print(f"Error processing {md_file}: {e}")
                return False

        self.log(
            f"Processing complete: {processed_files} files processed, {modified_files} files modified"
        )
        return True

    def run_build(self, dry_run: bool = False) -> bool:
        """Run the mkdocs build command."""
        self.log("Running mkdocs build")

        if dry_run:
            self.log("Would run: mkdocs build")
            return True

        try:
            # Change to the pages directory where mkdocs.yml is located
            pages_dir = Path(self.target_dir).parent
            if not pages_dir.exists():
                print(f"Error: Pages directory {pages_dir} does not exist")
                return False
            result = subprocess.run(
                ["mkdocs", "build"],
                cwd=pages_dir,
                capture_output=True,
                text=True,
                check=True,
            )

            if self.verbose:
                print("MKDOCS BUILD OUTPUT:")
                print(result.stdout)
                if result.stderr:
                    print("MKDOCS BUILD STDERR:")
                    print(result.stderr)

            self.log("Build completed successfully")
            return True

        except subprocess.CalledProcessError as e:
            print(f"Error during mkdocs build: {e}")
            print(f"STDOUT: {e.stdout}")
            print(f"STDERR: {e.stderr}")
            return False

    def run_full_pipeline(
        self, dry_run: bool = False, skip_build: bool = False
    ) -> bool:
        """Run the complete automation pipeline."""
        self.log("Starting full blog automation pipeline")

        # Step 1: Sync content
        if not self.sync_content(dry_run):
            print("Failed to sync content")
            return False

        # Step 2: Process markdown files
        if not self.process_markdown_files(dry_run):
            print("Failed to process markdown files")
            return False

        # Step 3: Build (optional)
        if not skip_build:
            if not self.run_build(dry_run):
                print("Failed to build site")
                return False

        self.log("Blog automation pipeline completed successfully")
        return True


def main():
    parser = argparse.ArgumentParser(
        description="Automate blog content sync and preprocessing"
    )
    parser.add_argument(
        "--source",
        default="/home/piperofthedawn/Insync/kumarshan25@gmail.com/Google Drive/KumarsNotes/",
        help="Source directory (Google Drive path)",
    )
    parser.add_argument(
        "--target",
        default="/home/karma/blog/pages/docs",
        help="Target directory (blog docs path)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be done without making changes",
    )
    parser.add_argument(
        "--verbose", "-v", action="store_true", help="Enable verbose output"
    )
    parser.add_argument(
        "--skip-build", action="store_true", help="Skip the mkdocs build step"
    )
    parser.add_argument(
        "--sync-only",
        action="store_true",
        help="Only sync content, don't process or build",
    )
    parser.add_argument(
        "--process-only",
        action="store_true",
        help="Only process existing files, don't sync or build",
    )

    args = parser.parse_args()

    # Create automation instance
    automation = BlogAutomation(args.source, args.target, args.verbose)

    success = True

    if args.sync_only:
        success = automation.sync_content(args.dry_run)
    elif args.process_only:
        success = automation.process_markdown_files(args.dry_run)
    else:
        success = automation.run_full_pipeline(args.dry_run, args.skip_build)

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()

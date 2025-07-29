#!/bin/bash

# Simple wrapper script for blog automation
# This script automates the process of syncing content from Google Drive,
# preprocessing it, and building the site.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_SCRIPT="$SCRIPT_DIR/scripts/blog_automation.py"

# Default arguments
ARGS="--verbose"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run)
            ARGS="$ARGS --dry-run"
            shift
            ;;
        --sync-only)
            ARGS="$ARGS --sync-only"
            shift
            ;;
        --process-only)
            ARGS="$ARGS --process-only"
            shift
            ;;
        --skip-build)
            ARGS="$ARGS --skip-build"
            shift
            ;;
        --help|-h)
            echo "Blog automation wrapper script"
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "OPTIONS:"
            echo "  --dry-run       Show what would be done without making changes"
            echo "  --sync-only     Only sync content, don't process or build"
            echo "  --process-only  Only process existing files, don't sync or build"
            echo "  --skip-build    Skip the mkdocs build step"
            echo "  --help, -h      Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0                    # Full sync, process, and build"
            echo "  $0 --dry-run          # Preview what would be done"
            echo "  $0 --sync-only        # Only sync from Google Drive"
            echo "  $0 --process-only     # Only process existing files"
            echo "  $0 --skip-build       # Sync and process but don't build"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

# Run the automation script
python "$AUTOMATION_SCRIPT" $ARGS
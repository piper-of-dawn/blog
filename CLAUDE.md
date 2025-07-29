# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/documentation site built with MkDocs and a custom shadcn/ui-inspired theme. The site contains technical content in various categories including C++, Rust, competitive programming, linear algebra, quantitative finance, and more.

## Key Architecture Components

### MkDocs Theme (`shadcn/`)
- **Custom theme package**: A complete MkDocs theme inspired by shadcn/ui design
- **Plugin system**: Custom plugins for search and excalidraw integration
- **Extension system**: Markdown extensions for enhanced functionality
- **Template system**: Jinja2 templates in `shadcn/templates/` for all UI components

### Content Structure (`pages/`)
- **Documentation source**: All markdown content lives in `pages/docs/`
- **Static assets**: Images, JavaScript, and other assets in `pages/docs/assets/`
- **Excalidraw integration**: Interactive diagrams stored in `pages/excalidraw/`
- **Site configuration**: Main MkDocs config at `pages/mkdocs.yml`

### Build System
- **Python-based**: Uses pyproject.toml for dependency management
- **Node.js integration**: package.json for build scripts
- **Vercel deployment**: Configured for static site deployment

## Development Commands

### Blog Automation (Recommended)
```bash
# Full pipeline: sync from Google Drive, preprocess, and build
./sync_and_build.sh

# Preview what would be done without making changes
./sync_and_build.sh --dry-run

# Only sync content from Google Drive
./sync_and_build.sh --sync-only

# Only process existing files
./sync_and_build.sh --process-only

# Sync and process but skip build
./sync_and_build.sh --skip-build

# Direct Python script usage with more options
python scripts/blog_automation.py --verbose --dry-run
```

### Manual Build and Serve
```bash
# Build the site
npm run build
# or
mkdocs build

# Serve locally (with live reload)
mkdocs serve --dev-addr=127.0.0.1:8080

# Working directory for MkDocs commands
cd pages/
```

### Legacy Content Management
```bash
# Legacy: Convert Obsidian-style admonitions to MkDocs format
python scripts/obsidian_to_admonition.py

# Update base URLs (deployment script)
./update_base_url.sh
```

### Dependencies
```bash
# Install Python dependencies
pip install -r requirements.txt

# Install development dependencies
pip install -e .[dev]
```

## Content Authoring

### Automated Content Processing
The blog automation system includes preprocessing for:
- **Obsidian callouts**: `> [!type] Title` → `!!! type "Title:"`
- **Obsidian admonitions**: `::: type Title` → `!!! type "Title:"`
- **Extensible plugin system**: Easy to add new processors in `scripts/processors/`

### Markdown Extensions
The site supports advanced markdown features:
- **Admonitions**: `!!! type "Title"` for callout boxes
- **Code highlighting**: With line numbers and syntax highlighting
- **Math rendering**: KaTeX for mathematical expressions
- **Tabbed content**: Using `pymdownx.tabbed` extension
- **Progress bars**: Using `pymdownx.progressbar`
- **ECharts**: Custom charts via `shadcn.extensions.echarts.alpha`

### Excalidraw Integration
- **Interactive editing**: In development mode, diagrams can be edited inline
- **Static rendering**: At build time, diagrams are converted to SVG
- **Syntax**: `~{Title}(filename.json "Description")` to embed diagrams
- **Storage**: Diagrams stored in `pages/excalidraw/` directory

### Navigation and Structure
- **Automatic ordering**: Pages get automatic order based on creation sequence
- **Folder prefixes**: Folders with numeric prefixes (e.g., "01_folder") have numbers stripped in navigation
- **Breadcrumbs**: Automatic breadcrumb navigation
- **Table of contents**: Right sidebar with page TOC
- **Search**: Full-text search with custom indexing

## File Organization

### Theme Development
- `shadcn/main.html`: Main template file
- `shadcn/templates/`: Individual component templates
- `shadcn/css/`: Base styles and pygments themes
- `shadcn/js/`: JavaScript functionality
- `shadcn/plugins/`: Custom MkDocs plugins
- `shadcn/extensions/`: Custom markdown extensions

### Content Areas
- `pages/docs/`: All documentation content
- `pages/docs/assets/`: Static assets (images, js, etc.)
- `pages/excalidraw/`: Interactive diagram files
- `pages/site/`: Built site output (git ignored)

## Development Notes

### Working Directory
Most MkDocs commands should be run from the `pages/` directory where `mkdocs.yml` is located.

### Custom Features
- **Dark mode**: Toggle-able theme with system preference detection
- **Responsive design**: Mobile-first responsive layout
- **Copy buttons**: For code blocks
- **Custom search**: Enhanced search with result highlighting
- **Author parsing**: Email extraction from site_author config

### Deployment
- **Vercel**: Configured for automatic deployment
- **Static build**: Outputs to `pages/site/` directory
- **Base URL handling**: Script to update URLs for different deployment environments

## Content Categories

The site covers technical content in these main areas:
- **Programming**: C++, Rust, general programming concepts
- **Mathematics**: Linear algebra, competitive probability
- **Finance**: Quantitative finance, portfolio management
- **Tools**: Development tools, system administration
- **Languages**: Polish language learning content
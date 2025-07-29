#!/bin/bash

# Script to update base_url in all HTML files
# Changes from "https://asiffer.github.io/mkdocs-shadcn/" to "/"

echo "Updating base_url in HTML files..."

# Find all HTML files in the pages/site directory
find pages/site -type f -name "*.html" | while read -r file; do
  echo "Processing $file"
  # Use sed to replace the base_url
  sed -i 's|const base_url = "https://asiffer.github.io/mkdocs-shadcn/";|const base_url = "/";|g' "$file"
done

echo "Update complete!"
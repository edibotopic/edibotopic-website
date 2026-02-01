#!/bin/bash

# Interactive content manager using gum
set -e

REPO_ROOT="/home/edibo/dev/gh-me/edibotopic-website"
TODAY=$(date +%Y-%m-%d)

# Choose content type
CONTENT_TYPE=$(gum choose "notes" "blog")

if [ "$CONTENT_TYPE" = "notes" ]; then
    CONTENT_DIR="$REPO_ROOT/content/notes"
else
    CONTENT_DIR="$REPO_ROOT/content/blog"
fi

# Choose action
ACTION=$(gum choose "create" "edit" "delete")

case $ACTION in
    create)
        # Ask for name
        NAME=$(gum input --placeholder "Enter name (e.g., my-topic)")
        
        if [ -z "$NAME" ]; then
            gum style --foreground 196 "Error: Name cannot be empty"
            exit 1
        fi
        
        FILENAME="$CONTENT_DIR/${NAME}.md"
        
        if [ -f "$FILENAME" ]; then
            gum style --foreground 196 "Error: File already exists: $FILENAME"
            exit 1
        fi
        
        # Ask for description
        DESCRIPTION=$(gum input --placeholder "Enter description")
        
        # Create file with frontmatter
        cat > "$FILENAME" << EOF
+++
title = "${NAME}"
description = "${DESCRIPTION}"
draft = true
date = ${TODAY}
[taxonomies]
tags = []
+++

EOF
        
        gum style --foreground 42 "✓ Created: $FILENAME"
        
        # Ask if they want to edit it now
        if gum confirm "Open in editor?"; then
            ${EDITOR:-vim} "$FILENAME"
        fi
        ;;
        
    edit)
        # List existing files
        cd "$CONTENT_DIR"
        FILE=$(ls -1 *.md | grep -v "^_index.md$" | gum filter --placeholder "Search for file...")
        
        if [ -z "$FILE" ]; then
            gum style --foreground 196 "No file selected"
            exit 1
        fi
        
        ${EDITOR:-vim} "$CONTENT_DIR/$FILE"
        ;;
        
    delete)
        # List existing files
        cd "$CONTENT_DIR"
        FILE=$(ls -1 *.md | grep -v "^_index.md$" | gum filter --placeholder "Search for file to delete...")
        
        if [ -z "$FILE" ]; then
            gum style --foreground 196 "No file selected"
            exit 1
        fi
        
        gum style --foreground 214 "You are about to delete: $FILE"
        
        if gum confirm "Are you sure?"; then
            rm "$CONTENT_DIR/$FILE"
            gum style --foreground 42 "✓ Deleted: $FILE"
        else
            gum style --foreground 244 "Cancelled"
        fi
        ;;
esac

# Edibotopic website 

[![Netlify Status](https://api.netlify.com/api/v1/badges/61b73a12-e645-4f74-9d50-6d182b6a26ae/deploy-status)](https://app.netlify.com/projects/edibotopic/deploys)

## Content Types

### Blog posts

Long-form articles stored in `content/blog/`. Use for essays, tutorials, and
narrative content.

```toml
tags = ["software", "writing"]
categories = ["Notable"]
```

### Notes

Short, atomic concepts in `content/notes/`. Displayed in a visual tree structure.

```toml
tags = ["philosophy"]                   # Single tag: top-level entry
tags = ["philosophy", "epistemology"]   # Two tags: nested under parent
```

The first tag is a top-level category.
The second tag is a parent topic within that category.

Don't overdo it!

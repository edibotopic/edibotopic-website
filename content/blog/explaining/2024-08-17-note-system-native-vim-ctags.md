+++
title = "Note-taking System with Native Vim Commands, Ctags, No Plugins"
date = 2024-08-17
# updated = 2023-05-18
draft = false
weight = 1

[taxonomies]
categories = ["explaining"]
tags = ["vim", "ctags", "note-taking"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

It's possible to have a decent note-taking system using
native Vim features and ctags.

<!-- more -->

# Setup

Create a `notes` directory containing a single `index.md`:

```bash
cd ~/Dropbox
mkdir notes && touch notes/index.md
```

This will be the home directory and the `index.md` will link to
other index files in subdirectories for specific topics of interest.

Divide the home `index.md` into sections for some topics:

```markdown
- [Git](#git) 
- [Tmux](#tmux) 
- [Vim](#vim) 

## Git
~/Dropbox/notes/git/index.md

## Tmux
~/Dropbox/notes/tmux/index.md

## Vim
~/Dropbox/notes/vim/index.md
```

Here there is a table of contents (toc) corresponding to
sections that each contain an absolute path to an index file.

# Moving through paths

Navigating to one of these index files only requires
hovering on the path and — in Vim — typing `g f` in normal mode.

Any child `index.md` file has the following structure, with
a link back to the parent at the top, allowing a fast return home
from anywhere with `g g` then `g f`:

```markdown
~/Dropbox/notes/index.md

Vim

- [Go to file](#go_to_file_through_link)
- [Go to url](#go_to_url_through_link)

# Go_to_file_through_link

The keybinding `g f` goes to the file under the cursor.

If you want to open in a new window use `<c-w f>`.

# Go_to_url_through_link

The keybinding `g x` goes to the link under the cursor.
```

Note that words are separated using underscores in the section titles here.
Ctags does not play nicely with spaces or dashes in this context.

# Navigating the toc with ctags

In the above examples, the toc in each `index.md` file is written using markdown links.
It would be nice to hover on a link and use a keybind to move to the relevant section
_within a file_.

For this functionality `ctags` can be used.
Vim has native support for ctags but a tags generator needs to be installed on the system:

```bash
snap install universal-ctags
```

Running the following command within the home directory will create a `tags` file
that Vim will recognise:

```bash
universal-ctags --languages=markdown .
```

It's now possible to move back-and-forth between the toc and the various sections it references
using built-in Vim keybinds.

In normal mode:

- `c-]` on a toc link will take you to that section
- `c-t` on a section title will take you back to the toc

For convenience, it's nice to be able to rebuild the tags file
when the toc is updated.
Create a `makefile` in the home directory with the following
contents:

```makefile
CTAGS=universal-ctags
CTAGS_FLAGS=-R --languages=markdown
ROOT= .

.PHONY: all clean

all: clean tags 

tags:
	@echo "generating tags file..."; \
	$(CTAGS) $(CTAGS_FLAGS) $(ROOT) $<

clean:
	@if [ -f tags ]; then \
		echo "removing tags file..."; \
		rm tags; \
	fi
```

Now running `:make` in command mode within Vim will update the tags file.

This command is recursive.
If it is run in the home directory tags will be generated for sections in
all child directories.
In addition, if `:make` is run within a child directory the global tags
file will be updated with any changes to the toc in that file.

# Why do this?

I have tried different note-taking tools and none have ever really stuck.
Tools like Obsidian are undoubtedly fantastic but not if you want to primarily use Neo(Vim).

Plugins that create Obsidian-like functionality, such as vimwiki and obsidian.nvim,
have too many extra features that I dislike and — like Obsidian — can be quite opinionated in 
how notes should be structured.

Using native Vim features it is possible to navigate rapidly through a set of notes.
When supplemented a fuzzyfinder (not described here) the experience is quite snappy.
It has the added benefit of not introducing overhead with loading, updating and maintaining plugins.

This also helps ensure that the YouTube algorithm does not recommend more
procrastination fuel by the note-taking and productivity movements on YouTube.

# Next steps

What's described here is a basic implementation.
It doesn't review some of the other built-in functionality
for ctags in Vim and it doesn't attempt to introduce much
automation.

It would be useful to create a global `links.md` file that is populated
with links to every section throughout the notes.
I wrote a script for that and deleted it by accident when organising my files!
An important reminder to always version control everything.

As notes files get more complex it's helpful to include a modeline at the bottom
of each file to auto-fold content under each section header.

Lastly, the simplicity of using such a system is greatly aided by the appropriate use
of aliases and templates.

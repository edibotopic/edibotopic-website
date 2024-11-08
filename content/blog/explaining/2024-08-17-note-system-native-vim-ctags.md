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

It's possible to make a decent note-taking system using
native Vim features and ctags.

<!-- more -->

# Setup

Create a `notes` directory containing a single `index.md`:

```bash
cd ~/Dropbox
mkdir notes && touch notes/index.md
```

This `index.md` will link to other index files in subdirectories of `notes`,
each focusing on a specific topics of interest.

Divide `notes/index.md` into sections for some topics:

```markdown
- [Git](#git)
- [Tmux](#tmux)
- [Vim](#vim)

## Git
./git/index.md

## Tmux
./tmux/index.md

## Vim
./vim/index.md
```

Native vim commands can be used to navigate from the TOC
to the relevant section, and from a relative path to the
appropriate note.

# Moving through paths

To navigate to a note, hover on a path and — in normal mode — type `g f`
for g(o) (to) f(ile).

Each child `index.md` file linked out from `notes/index.md` contains a
link back to the parent at the top, allowing a fast return to the main index
from anywhere with `g g` (go to top) then `g f` (go to file):

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
This is a limitation, as Ctags does not work well with spaces or dashes.

# Navigating the toc with ctags

In the above examples, the TOC in a `index.md` file is written using markdown links.
It is useful to hover on a TOC link and use a keybind to move to the relevant section
_within that file_.

For this functionality `ctags` can be used.
Vim has native support for ctags but a tags generator needs to be installed first:

```bash
snap install universal-ctags
```

Running the following command within the `notes` directory will create a `tags` file
that Vim will recognise:

```bash
universal-ctags --languages=markdown .
```

It's now possible to move back-and-forth between the toc and the various sections it references
using built-in Vim keybinds.

In normal mode:

- `c-]` on a TOC link will take you to that section
- `c-t` on a section title will take you back to the TOC

For convenience, create a `makefile` in the `notes` directory with the following
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

Now running `:make` in command mode within Vim will update the tags file
after you add or remove sections.

This command is recursive.
If it is run in the `notes` directory tags will be generated for sections in
all child directories.
In addition, if `:make` is run within a child directory the global tags
file will be updated with any changes to the toc in that file.

The value of navigating between TOC and sections with tags may be limited
with a long TOC or if you are proficient with grepping.

# Why do this?

I have tried different note-taking tools and none have ever really stuck.
Tools like Obsidian are fantastic but not if you want to primarily use Neo(Vim).

Using native Vim features it is possible to navigate rapidly through a set of notes.
When supplemented a fuzzyfinder (not described here) the experience is quite snappy.
It has the added benefit of not introducing overhead with loading, updating and maintaining plugins.

This approach works well for small, self-contained notes, if you don't want to use additional plugins or software.
For more larger sets of notes I generally resort to vimwiki.

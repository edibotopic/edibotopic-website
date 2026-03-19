+++
title = "Wiki"
description = "Collaborative platform with strong inter-connections"
draft = false
date = 2025-11-17

[extra]
stage = "short"

[taxonomies]
tags = ["writing", "Knowledge management"]
+++

A platform for collaborating on writing that is characterised by its
openness, speed of contribution, and heavy reliance on internal links.

For documentation, it's useful to distinguish between a wiki and a static
site generator (SSG), like Sphinx.

On its face, an SSG seems to have the same benefits: the source can be open on
GitHub; pages can be cross-linked; an edit button can be added to pages for
less technical users.

This comparison is usually shallow. When a user clicks "edit", they are typically
taken to a second website (e.g., GitHub). They are then immediately presented with
language that could be unfamiliar:

> You need to fork this repository to propose changes.
>
> _Sorry, you’re not able to edit this repository directly—you need to fork it
> and propose your changes from there instead._

If they proceed, they need to commit changes to their new fork. Where is this
"new fork"? What does it mean to "commit"?? How will the changes get from their
fork back into the project??? Each point of confusion risks losing a contributor.

In contrast, the editing experience in a wiki goes like this:

* Click "edit"
* Edit in place
* Save the edits

At least that's how it ideally works. In reality, wikis often have additional
restrictions. You may need to become a trusted contributor for your edits to be
public. There are even wikis that require contributors to go through the GitHub
interface, so the edits can be formally reviewed, and, rejected if necessary.
At that point, the wiki can begin to feel less like a wiki.

That an SSG can contain internal links does also not fully capture the role of
linking in a wiki. Consider some of the features related to links alone in a
popular wiki engine like MediaWiki:

* Wanted links: links that have been created but don't point to a real page
* Creating pages through wanted pages: only requires clicking on the link
* Autocompletion for links: typing `[[` will suggest links within the site
* Link-based indexing: indexes of wanted pages, orphan pages (no links from), dead-end pages (no links to)

Linking is a deeply integrated feature of the wiki editing experience. Linking
with another page is made easy and fast. Links become a quality parameter: why
is nobody linking to this page? Wanted links are a prompt to create more pages.

In recent years, there has been growth in personal wiki technologies, like Obsidian.
Many of the features that people love in a tool like Obsidian can be found in older
technology, like MediaWiki.

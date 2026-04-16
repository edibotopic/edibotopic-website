+++
title = "Wiki"
description = "Collaborative platform with strong inter-connections"
draft = false
date = 2025-11-17
updated = 2026-04-16

[extra]
stage = "short"

[taxonomies]
tags = ["writing", "Knowledge management"]
+++

An online platform for collaborating on published information. It is characterised by its
openness, speed/ease of contribution, and heavy internal cross-linking.

In the context of documentation, it's useful to distinguish between a wiki and a static
site generator (SSG), like Sphinx.

On its face, an SSG seems to offer similar benefits if configured appropriately. Openness: the source can be available in a repository. Speed/ease: an edit button can be added for less technical users. Cross-linking: internal links can also be used heavily on conventional documentation sites.

A static docs site can be furnished with wiki-like affordances, while not fully replicating the wiki experience. When a user clicks "edit", they are
taken to a second website (e.g., GitHub). They are then immediately presented with
language that could be unfamiliar:

> You need to fork this repository to propose changes.
>
> _Sorry, you’re not able to edit this repository directly—you need to fork it
> and propose your changes from there instead._

If they proceed, they need to commit changes to their new fork. Where is this
"new fork"? What does it mean to "commit"?? How will the changes get from their
fork back into the project???

In contrast, the editing experience in a wiki is essentially:

* Click "edit"
* Edit in place
* Save the edits

At least that's how it ideally works. In reality, wikis often have additional
restrictions. You may need to become a trusted contributor for your edits to be
public. There are even wikis that require contributors to go through a GitHub
interface, so the edits can be formally reviewed.

That an SSG can contain internal links does not fully capture the role of
links in a wiki and the features available to support good linking. In a popular wiki engine like MediaWiki, there is:

* The wanted link: links that have been created but don't point to a real page
* Page-creation through wanted pages: only requires clicking on the link
* Autocompletion for links: typing `[[` will suggest links within the site
* Link-based indexing: indexes of wanted pages, orphan pages (no links from), dead-end pages (no links to)

Linking is a deeply integrated feature of the wiki editor and administrator experience. Linking
with another page is made easy and fast. Links become a quality parameter: why
is nobody linking to a specific page? There are types of links with specific functions: wanted links are a prompt to create new pages.

In recent years, there has been growth in personal, offline wiki technologies, like Obsidian.
Many of the features that people love in a tool like Obsidian can also be found in older
technology, like MediaWiki.

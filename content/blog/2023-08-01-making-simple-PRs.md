+++
title = "Get Started with a Few Simple Pull Requests"
date = 2023-09-20
# updated = 2023-05-18
draft = false

[taxonomies]
categories = ["technical"]
tags = ["git", "tutorial", "software"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

Making a Pull Request doesn't have to be a complex or stressful process.

<!-- more -->

I have been posting [my own code](https://github.com/edibotopic) on GitHub for several years. Until
recently I had never submitted a Pull Request (PR). There was a PR
submitted to one of my repos that I reviewed but I never made an
original contribution to another developer's repo.

One week over the Summer I was moving apartments and in my down-time
submitted a PR at a rate of about one per day. PRs were soon
demystified. It is [easier than you might
think](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
and well worth getting started if you haven't already.

You may have been directed to submit "simple" PRs before but might
have had difficulty finding examples. There are [helpful
repos](https://github.com/mgienow/TNS-Pull-Request-Practice) that
allow beginners to learn the mechanics of *how* to submit a PR but not
necessarily *what* a real PR might contain. Here I give an overview of
my PRs so far in the hope that they might be demystified for you too.

# Where to Start

You probably want to start with a project that interests you. The best
way to find such a project is to use and enjoy free and open-source
software. If you find an issue in software that you use then try to
determine how you might fix it.

It is often recommended that beginners look into improving
documentation. I think that this is good advice. Documentation can
often be an afterthought in open-source projects. Highly-skilled
developers might have limited interest, time or ability to devote
to good documentation.

Most — though not all — of the examples in this post involve docs.

Many developers are not necessarily strong writers, but many users
also do not read enough documentation! To improve docs you should
first get in the habit of reading docs. It also helps if you have
a pedantic nature, and here my academic background served me well.

# Simple PRs

At time of writing I have submitted six PRs in about three months.
Even though I am a fan of the command line, and manage all my own
repos from the terminal, these PRs were all generated directly through
GitHub's web interface.

Doc and code files in GitHub have an `edit` button. Clicking this will
trigger a prompt to fork the repo. After you fork the repo you will be
able to make edits to the code and commit the changes to your fork. A
`Compare & Pull Request` button will then appear — click it and you
can give your PR a title and description before submitting.

For the small changes described below it is likely that the reviewer
of your PR will merge the changes after a quick review. Anything more
substantial may require further dialogue, additional justification and
possibly some edits to the original PR, all of which is outside the
scope of this post.

## Theme Colours

Lately I have been using [DOOM
Emacs](https://github.com/doomemacs/doomemacs) for taking notes with
the wonderful org-mode. I use a lovely theme
([naysayer](https://github.com/nickav/naysayer-theme.el)) that had a
small issue with the colour of text being difficult to read over a
particular window region in Emacs.

To attempt a fix I changed two lines in the theme definition, tested
the changes on two devices (Doom and Vanilla Emacs) and submitted a
PR. Here was the explanation I wrote on submission; it might seem like
overkill, but if there were to be any problem subsequently then this
might provide helpful context:

> These changes aim to improve text legibility in the modeline for
> both the project directory and the file path in a modified buffer
> when using Naysayer with DOOM Emacs (a very popular Emacs
> framework). Previously the project directory colour defaulted to a
> blueish-green that was difficult to read against Naysayer's
> tan-coloured modeline; in addition, the file path in a modified
> buffer changed to a light pink that was particularly illegible
> against the tan colour.
>
> The text colour will now be the same as the rest of the foreground
> text in the modeline, which is the theme's behavior in Vanilla
> Emacs, and the text weighting will change in a modified buffer to
> subtly signify any unsaved changes.
>
> The revised theme was tested on both Doom Emacs (28.1) and Vanilla
> Emacs (28.1) - no issues were observed in either case. Some of these
> problems were discussed in issue #5.

## Rephrase

This one is going to seem annoying and pedantic but I think it was
worthwhile. If even one reader is anything like me they might be
thrown by inconsistent phrasing. I was reading about the child-parent
relationship for elements in the excellent [Motion
Canvas](https://motioncanvas.io/) animation library. When reading the
docs I became distracted by the phrase "relatively to". This seemed a
little awkward and far less common than "relative to". The more common
phrase was also the one used elsewhere in the docs.

For the sake of consistency, and to prevent the likes of me from
getting distracted when learning programmatic animation, I recommended
a change in phrasing:

> This is a small change to phrasing in the docs that substitutes the
> phrase "relatively to" with "relative to".
>
> The latter is more conventional/idiomatic and is also consistent
> with similar usage contexts in the rest of the docs.
>
> The purpose of the change is to minimise any ambiguity for the user
> when interpreting the technical content.

## Typo

This PR is the most simple of all! It's often easier to spot typos
when you haven't been working closely on the code or documentation for
a project. Some people think typos signal a lack of professionalism,
which I personally think is unfair. Nonetheless, typos bother some
people and it's wortwhile fixing them. If you have a GitHub account
and some time on your hands there's really no excuse for not lending a
hand in these cases. I spotted this typo for the [Manim
Slides](https://eertmans.be/manim-slides/) project, a really
convenient application for making slides in the style of 3Blue1Brown's
explanatory mathematics videos.

> Change link titled "HTML Presenetation" (typo) to "HTML
> Presentation".
> 
> Description: Proposes a fix to a small typo in the docs.

## Explicitness

This next PR attempted to reduce ambiguity due to a lack of
explicitness. I was using the excellent [Quarto](https://quarto.org/)
publishing system to create material for a university class. In a set
of notes I had included code for a Mermaid flow diagram but now I
wanted to use the same diagram in a slidedeck. Quarto allows Mermaid
diagrams to be defined in a source file that can then be referenced in
other files, preventing duplication. This would allow me to code the
diagram once and then refer to it as many times as I want.

I could not tell from the relevant section of the Diagram docs (`File
Include`) what the filetype was supposed to be when including Mermaid
diagrams in a different file. I tried using a `.mmd` filetype, which
is mentioned elsewhere in the Quarto docs, and it worked. In my view,
this should be made clear and obvious in the section of the docs that
describes how to include externally-defined Mermaid diagrams:

> Makes more explicit that an .mmd file can be used as an external
> source when including a Mermaid diagram in a .qmd document, as this
> is made more explicit for .dot files in the current version of the
> docs.
>
> Mermaid and Graphviz diagrams can be included in .qmd documents from
> external files.
>
> In the docs an example is given for how to achieve this using a
> Graphviz diagram defined in a .dot file.
>
> This minor change makes it more explicit that an appropriate
> filetype that would achieve the same for a Mermaid diagram is .mmd.
>
> The .mmd filetype is mentioned two sections previous in the context
> of specific editors (RStudio, VS Code). Readers of the docs are
> likely to benefit from seeing the relevant filetypes close to their
> implementation in the File Include section of the docs, especially
> if they are not users of RStudio or VS Code and may miss those
> previous sections.

## My Website's Theme

This blog is built using the Zola static site generator and a
modification of the lovely [Serene
theme](https://github.com/isunjn/serene). While working on the website
I was following instructions from Serene's repo and noticed that there
was an error in the file paths that were cited. My PR description:

> In `USAGE.md` instructions are provided to copy the theme's
> `/highlight_themes/` folder to `/myblog/static/highlight_themes/`.
> 
> The instructions indicate that `/highlight_themes/` is found in
> `myblog/themes/serene/static/` but it is found one directory up in
> the theme root.
> 
> This changes `USAGE.md` so that the instructions are to copy
> `myblog/themes/serene/highlight_themes/` to
> `myblog/highlight_themes`, which is presumably the intention.

## Commenting Style

Many of these PRs have involved documentation and this last one
relates to documentation in the form of in-line code comments. A new
programming language that I really like is
[Odin](https://odin-lang.org/). I like it so much I made a 
[Pong clone](https://github.com/edibotopic/sqong) with it. There's a
lot of really smart people working on Odin. So smart in fact that I
would hesitate to mess with their pristine code until I understand the
language better.

However, I did notice that there was some inconsistency in the
commenting style in the Overview of the language. This Overview is the
first encounter many people will have with the language, so it's
better not to introduce any subtle confusion in the explanatory
comments.

When writing in markdown, in-line code blocks are conventionally
signified with backticks, but here a mixture of backticks and quotes
was being used. Quotes are more appropriate when signifiying strings,
which was how they were used elsewhere in the comments. In addition, I
spotted some other issues that were too small to include in a separate
PR. The PR description:

> Code comments used single quotes, double quotes and back-ticks
> interchangeably to signify an in-line code block. Periods were
> infrequently used to terminate a comment.
> 
> These changes use back-ticks for all in-line code blocks and remove
> all terminating periods to improve consistency of the commenting
> style.
> 
> In addition, a few phrases were given slight rewrites to increase
> clarity or remove typos.

[This last PR hasn't been merged yet.](https://github.com/odin-lang/odin-lang.org/pull/153)

# Conclusion

Most of my experience with open-source software has involved making my
own projects and using software made by others. After getting a few
PRs merged I feel like more of a well-rounded *contributor* to
the open-source ecosystem. It is easy to get started if you don't set
the bar too high.

Start simple.

Use some software with a narrow scope (a theme) and note down any
issues you have. Pay attention to anything in software documentation
that trips up or confuses you. Look at the *closed* PRs in a repo and
try to find small ones that you can understand.

Helping people out with these tasks can be very satisfying and could
help prepare you for bigger contributions in the future.

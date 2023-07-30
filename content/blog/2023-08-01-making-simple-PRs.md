+++
title = "Making Simple Pull Requests"
date = 2023-08-01
# updated = 2023-05-18
draft = true

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

Making a Pull Request doesn't have to be a complex process.

<!-- more -->

I have been posting code on GitHub for several years.
Until this week I have never submitted a Pull request (PR),
There was a PR submitted to one of my repos that I reviewed,
but I never made an original contribution to another developer's repo.

This week I was moving apartments and
during that time I submitted a PR
at a rate of about one per day.
It is easier than you might think and
well worth getting started if you
haven't already.

In this post I will show where I got started,
my own unspectacular PRs and how I got them merged

# Where to Start

You probably want to start with a project that that interests you.
The best way to find such a project is to use and enjoy Open-source software.
If you find an issue try to determine how you can fix it.

It is often recommended that beginners look into improving documentation and I think that this is good advice.
Documentation can often be an afterthought in Open-source projects.
Highly-skilled developers might have limited interest, time or ability to prepare good documentation.

Many developers are not necessarily strong writers,
but many users also do not read enough documentation.
To help out with a PR in this area you should appreciate well-written documentation but also engage the text with a critical eye.
If you are a programmer this might also be an effective way of learning more about the relevant code.

# My Simple PRs

At time of writing I have submitted four PRs in about as many days.
Even though I am a fan of the command line, and manage all my own repos
from the terminal, these PRs were all generated directly through
a web interface.
Online docs often have an 'edit this page' button and
code in GitHub repos has the same.
Clicking either will trigger a prompt stating that you need to
fork the repo to make edits.

After you fork the repo you will then be able to make your edits
to the code and commit the changes.
A Pull Request button will then appear - click it and your work
will be done for now.

For the small changes described below it is likely that the
reviewer of your PR will simply merge the changes after a
quick review.
Anything more substantial may require a more extensive
dialogue, including additional justifications and possible
edits to your suggested changes.

## Theme Colours

I prefer to say 'I like text editors' than 'I like $x$ text editor'.
My favourite is probably (Neo)Vim but I also enjoy VS Code and Emacs occasionally.
Lately I have been using DOOM Emacs for taking notes with the wonderful org-mode.
I use a lovely theme (naysayer) that had a small issue with the colour of text
being difficult to read over a particular background in Emacs.

To attempt a fix I changed two lines in the theme definition, tested the changes on two devices (Doom and Vanilla Emacs) and submitted a PR.
Here was the explanation I wrote on submission;
it might seem like overkill, but if there were
to be any problem subsequently then this might provide helpful context:

    These changes aim to improve text legibility in the modeline for both the project directory and the file path in a modified buffer when using Naysayer with DOOM Emacs (a very popular Emacs framework). Previously the project directory colour defaulted to a blueish-green that was difficult to read against Naysayer's tan-coloured modeline; in addition, the file path in a modified buffer changed to a light pink that was particularly illegible against the tan colour.

    The text colour will now be the same as the rest of the foreground text in the modeline, which is the theme's behavior in Vanilla Emacs, and the text weighting will change in a modified buffer to subtly signify any unsaved changes.

    The revised theme was tested on both Doom Emacs (28.1) and Vanilla Emacs (28.1) - no issues were observed in either case.

    Some of these problems were discussed in issue #5.

## Rephrase

This one is going to seem quite pedantic but I think it was worthwhile.
I was reading about the child-parent relationship for elements in the
excellent Motion Canvas animation library.
When reading the docs I became distracted by the phrase "relatively to".
This seemed a little awkward and far less common than "relative to".
The more common phrase was also the one used elsewhere in the docs.

For the sake of consistency, and to prevent the likes of me from
getting distracted again, I recommended a change in phrasing:

    This is a small change to phrasing in the docs that substitutes the phrase "relatively to" with "relative to".

    The latter is more conventional/idiomatic and is also consistent with similar usage contexts in the rest of the docs.

    The purpose of the change is to minimise any ambiguity for the user when interpreting the technical content.

## Typo

This PR is the most simple of all!
It's often easier to spot typos when you
haven't been working closely on the code or documentation for a project.
If you have a GitHub account and some time on
your hands there's really no excuse for not lending a hand in these cases.
I spotted this typo for the Manim-slides project, a really
convenient application for making slides in the style of 3Blue1Brown's
explanatory mathematics videos.

    Change link titled "HTML Presenetation" (typo) to "HTML Presentation".

    Description: Proposes a fix to a small typo in the docs.

## Explicitness

This last PR is still open and might be a matter of opinion.
I was using the excellent Quarto publishing system to create material for a university class.
In a set of course notes I had included code for a Mermaid diagram but
now I also wanted to use the same diagram in a Quarto slidedeck.
Quarto allows Mermaid diagrams to be defined in a separate file that
can then be referenced in Quarto slides and notes.
This would allow me to code the diagram once and
then refer to it as many times as I want.

I could not tell from the relevant section of the Diagram docs (`File Include`)
what the filetype was supposed to be for Mermaid diagrams.
When Mermaid diagrams are defined in-line in Quarto docs it is using a `mermaid` cell.
Examples of diagrams in the official Mermaid docs usually define them within HTML `div` tags.
I tried using a `.mmd` filetype, which is mentioned elsewhere in the Quarto docs, and it worked.
In my view, this should be made clear and obvious when including externally-defined Mermaid
diagrams is being discussed in the docs:

    Makes more explicit that an .mmd file can be used as an external source when including a Mermaid diagram in a .qmd document, as this is made more explicit for .dot files in the current version of the docs.

    Mermaid and Graphviz diagrams can be included in .qmd documents from external files.

    In the docs an example is given for how to achieve this
    using a Graphviz diagram defined in a .dot file.

    This minor change makes it more explicit that an appropriate filetype
    that would achieve the same for a Mermaid diagram is .mmd.

    The .mmd filetype is mentioned two sections previous
    in the context of specific editors (RStudio, VS Code).
    Readers of the docs are likely to benefit from seeing
    the relevant filetypes close to their implementation in the File Include section of the docs,
    especially if they are not users of RStudio or VS Code and
    may miss those previous sections.

# Some Advice

- Write and edit your PR off-line.
  The immediacy of the GitHub interface is nice,
  but try to hold off until you have written down
  the problem you wish to identify and read through
  it yourself.
  The reviewer of your PR should not have to struggle
  to understand what you are trying to communicate.

- Keep your suggestions short and focused.
  Especially if you are a beginner, try to
  avoid changing multiple things across
  multiple lines/files.
  Certainly if you find twelve typos in a single
  file you can suggest that they be corrected.
  However, do not correct typos and also add
  a sequence diagram - this should be two
  separate PRs with two different goals.

- Use 'edit this page' buttons where available.
  The most versatile and powerful way of interacting
  with Git(Hub) is the command line.
  If you spot a grammatical mistake in docs, however,
  and there is an 'edit this page' button on that page,
  it is quick-and-easy to click that button and
  submit your PR directly through GitHub.

- Read other PRs
  Some GitHub repos have Contributor guidelines.
  If you want to submit a PR to a repo that has these
  then you should read them.
  Many repos do not have such guidelines.
  In general, it is a good idea to have a read
  through some successfully-merged PRs to get
  an idea of the kind of problems contributors
  are trying to solve, how they approach solving
  them and the way they describe their solution.

# Conclusion

Most of my experience with open-source software has involved
making my own projects and using software made by others.
After getting a few simple PRs merged I feel like more of
well-rounded *contributor* to the open-source ecosystem.
It is easy to get started if you don't set the bar too high.

Tutorials on making PRs are often needlessly complex.
Many advise you to start simple (correcting typos) while attempting to teach you the mechanics necessary to solve harder problems (making potentially breaking changes to codebases).

Start simple.

Use some software with a narrow scope (a theme) and note down any
issues you have.
Pay attention to anything in software documentation that trips up or
confuses you.
See if you can do better and then suggest a change.
If you see an edit button then use it; you can figure
out how to achieve the same from the terminal later,
perhaps using one of your own repos.

Helping people out with these small tasks can be very
satisfying and could help prepare you for bigger contributions
in the future.

# Postscript

Endeavouring to submit PRs can help you develop a critical eye.
In my experience of working in science there is a similar trajectory.
At the beginning, junior scientists think every published article is perfect.
It takes some deliberate experience, finding errors in other work, and even
publishing one's own error-ridden work, before the process is demystified.
Then the scientist can begin to critically engage with scientific work.

It took me 4 years before I submitted a PR and then I seemingly couldn't
stop finding problems in software and its docs!

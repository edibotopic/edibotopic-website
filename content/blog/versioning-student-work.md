+++
title = "Versioning for student work"
description = "Using versioning in student assignments"
aliases = ["/blog/explaining/versioning-student-work/"]
date = 2023-07-15
updated = 2025-09-13
draft = false

[taxonomies]
categories = ["Archived"]
tags = ["teaching", "instruction"]
+++

Version control is a powerful tool commonly used in large software
projects. It is valuable for other types of project too, including
academic writing.

<!-- more -->

This blog is cited in a short guide on [Assessment in the Age of
AI](https://www.ucc.ie/en/cirtl/resources/shortguides/shortguide9assessmentintheageofai/)
by University College Cork.

Probably more useful than the blog is this [handout](/docs/VersioningHandout.pdf
'Click to download pdf') I provide to students and academics who are interested
in versioning but may not be familiar with the concept.

## Motivation

Students are asked to write because writing is considered useful.
Muddled thoughts can be clarified once an attempt is made to write
them down. Extracting key information on a topic and combining them
into an overview is often far more effective than merely reading about
the topic.

Although writing is a process, student work is often corrected as a
static artifact. The final version is assessed and deemed a reflection
of that underlying process. In an era of Large Language Models, there
is an increasing probability that this final version is the only
version and it was drafted by an undetectable AI.

Perhaps then the process of writing — the thing that we value — needs to be
re-emphasised. An analog solution is simply to require students to perform
their writing in-person. However, this is not always a fair, accessible or
practical approach. Serious essays, literature reviews and group projects often
involve many hours of work, dead-ends and revisions. It is not feasible to
translate this process to an in-person scenario, and it is also not aligned
with a workplace that is increasinly digitalised and dispersed.

To work effectively, student and teachers alike have to buy into the idea that
versioning helps them both. It helps students to structure their writing
process, protects them against lost work, and keeps track of their
collaborations. It helps teachers gain insights into the student's writing
process and uncovers opportunities for feedback.

## Background

Working on any large project often demands working with versions. When
writing a paper, you typically have multiple drafts. It can be
useful to distinguish these with appropriate names. For example:
`myDraft1.docx`, `myDraft2.docx`, and so on. This is a simple form of
version control, although it gets messy. The first scientific paper that
I published had 13 drafts!

Another problem with this approach is that it becomes difficult to actually
compare across the versions. If draft 12 and 13 each have dozens of pages
and numerous changes, how can you actually find what you changed?

Version control systems — in simple terms — allow you to edit only a single
file while storing a history of its different versions, any of which can be
restored at a later time.

## Getting started with versioning

Git is probably the most popular version control system among writers of
computer programs and technical documentation. Git is typically used in
conjunction with GitHub, a web-based platform for hosting versioned projects
and structuring collaboration. Git, however, has a steep learning curve.

[Google Docs](https://docs.google.com/) is one of the easiest ways to get
started with versioning. It may not be _the best_ system — especially compared to
a dedicated tool like [Git](https://git-scm.com/) — but
it works and is easy-to-use. 

Two immediate advantages of versioning student work are:

1. **Structure:** the expectation that writing projects should have multiple,
   dated versions can reduce the tendency to write (or copy) everything in one
big draft, encouraging instead a more deliberate approach to writing.
2. **Transparency:** the contributions of individual students to groupwork are
   highlighted clearly, alerting the group and the teacher to any
disparaties in effort.

Versioning is not a general solution for plagiarism and AI usage, although it
can be considered a hurdle — to be combined with others — against
ineffective approaches to writing.

## Use versioning as a student

Create a new Google Docs file and give it an appropriate name, such as
`AIandFoodPaper`.

Decide what your first task will be; for example, it could be _write a
rough draft of the project structure_. When you have written this
draft, select:

`File > Version History > Name Current Version`

Give a **descriptive name** to the version [^1]. In this case, it
could be:

> Drafted a project structure for AI and Food paper

Your next version might be:

> Drafted an introduction, focusing on AI in data analysis

Each time you create a version, it is saved to the _version history_.
This can be viewed by you or anyone else with edit access:

`File > Version History > View Version History`

Versions are grouped by month and include details, such as the version
name, date/time saved and version author. Contributions by different
authors to the same file will be highlighted in a unique colour [^2].

When you select a version, any edits (additions, deletions) are
 displayed.

If a major error is introduced in a project, a previous version can be restored
at any time.

### Examples of versioning

Named versions should typically involve a substantial, self-contained
change.

Here are some **good** examples:

`Drafted a structure for the project`

```diff
+ Title: AI Technology in the food industry
+ 1. Introduction
+ 2. Data Analysis
+ 3. Product Design
+ 4. Computer Vision
+ 5. Conclusions

```

`Clarified and developed statement regarding new AI technology`

```diff
- AI technologies like ChatGPT display human-like intelligence
- and may allow the automation of tasks normally done by humans.
+ AI technologies like ChatGPT are based on Large Language Models
+ (LLMs), which — although powerful — have limitations.
+ Currently, for example, they have limited capacity
+ to problem-solve when presented with novel scenarios (TODO: add ref).

```

`Added reference to support claim regarding AI limitations`

```diff
- Currently, for example, they have limited capacity
- to problem-solve when presented with novel scenarios (TODO: add ref).
+ For example, Crowley (2042), compared humans with an AI in a
+ series of problem-solving activities and found that humans
+ out-performed the AI in 20% of the activities.

```

**Bad** examples come in broadly two forms.

The first is a large set of trivial versions. For example, 10 different
versions that correct individual typos, which could have been grouped into one
version if handled together. Every change or new sentence does not necessarily
warrant its own version.

The previous example above could have been longer, while still being one
version:

```diff,hl_lines=6-9
- Currently, for example, they have limited capacity
- to problem-solve when presented with novel scenarios (TODO: add ref).
+ For example, Crowley (2042), compared humans with an AI in a
+ series of problem-solving activities and found that humans
+ out-performed the AI in 20% of the activities.
+ This suggests that there is still a role for
+ humans in the performance of these tasks.
+ However, there was one key limitation of Crowley's work...
+ ...

```

The second **bad** example is a single version with a complex set of unrelated
changes. This might be a version that includes the deletion of one section, the
addition of two others, a change in the title, the addition of images, and a
restatement of the central thesis. These changes could probably have been
sub-divided and given their own versions.

Inevitably there are occasions where different types of change have been made,
which can be referred to in a single description:

`Updated figure 3 and corrected typos in main text`

However, an effort should be made to avoid doing a substantial amount
of unstructured work across the entire paper that is then grouped into
one version. Each time you approach your project, you should be
thinking: "What specific task am I focusing on now".

## Use versioning as a teacher

To make the version history accessible, students need to share the actual
Google Docs file. 

If the file needs to be passed through a plagiarism-detector, they can also
download the file in an appropriate format suitable for upload.

To share the Docs file, select:

`File > Share > Share with Others`

To ensure there are no issues with file access, the _General Access_
setting in the popup dialog can be changed from "Restricted" to
"Anyone with a Link". This is important primarily for cases where a
teacher does not have a Gmail account (rare).

When you receive this link, you should be able to access the version
history as described earlier.

If you also require students to upload the file to an LMS like Canvas
or Blackboard, they will first need to download the file in a
suitable format.

In `File > Download` both Word (.docx) and .pdf formats are available.

### Reviewing work

The version history is a supplement to the assessment process. A good
version history might be expected to demonstrate:

- Consistent work on the project over time
- Evidence of iteration and editing of own writing
- Descriptive version names that identify major changes
- Solutions to different writing problems (referencing, logic,
organisation, visualisations, editing)
- Balance of workload across collaborators (group projects)

If you are suspicious that a project has been plagiarised or
AI-generated, the version history is another tool for you to
evaluate the process behind the writing.

When feedback on writing is a part of your assessment process, the version
history provides a useful reference point for both student and teacher.

---

Students might ask the question:

> How many versions will I need to get a good mark?

Similar questions are often asked about _numbers of citations_ and
_numbers of words_ — they all usually miss the point. 

Any significant writing project will consist of more than one version, usually
many more, but a precise number cannot be given. It is possible for there to be
100 versions that each only make trivial changes (typos, spelling) — the high
number does not necessarily reflect strong writing. 

In comparison, 10 or 20 versions, which showcase a range of activities,
including additions, deletions, rewordings, citations and clarifications, might
be more compelling evidence of effort. If the students get the impression that
they are trying to hit a number, rather than approach their writing in a
structured manner, then the exercise is a waste of everyone's time.

---

[^1]: Google Docs limits users to _40 named versions_. They should be
used judiciously, especially on collaborative projects.

[^2]: Office365's browser-based Word has version history features
similar to Google Docs. At time-of-writing, however, Word does not
support _named versions_.

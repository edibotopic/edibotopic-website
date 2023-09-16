+++
title = "Versioning Student Work to Emphasise Process"
date = 2023-07-15
draft = false

[taxonomies]
categories = ["technical"]
tags = ["documentation", "how-to", "writing"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

Version control is a powerful tool commonly used in large software
projects.
It is valuable for other types of project too, including student
writing.

<!-- more -->

{% note(header="Update") %}
After publication this blog was cited in a short guide on 
[Assessment in the Age of AI](https://www.ucc.ie/en/cirtl/resources/shortguides/shortguide9assessmentintheageofai/) by University College Cork.

The blog was originally written in a *conceptual* style.
If you want a more step-by-step guide with explanatory 
images you can download the handout I give
to my students 
[here](/docs/VersioningHandout.pdf "Click to download pdf").
{% end %}

# Motivation

Here I will outline how versioning can be used for student writing projects.
The version control system I recommend comes built-in with 
[Google Docs](https://docs.google.com/).
It is probably not *the best* system — compared to something
like [Git](https://git-scm.com/) — but it works and is easy-to-use.
Two advantages of versioning student work can be identified at the
outset:

1. **Structure:** the expectation that writing projects should have
   multiple, dated versions can reduce the tendency of students to write
   (or copy) everything in one rushed draft, encouraging instead a more 
   deliberate approach to writing.
2. **Transparency:** for group-work, the contributions of individual group
   members will be highlighted clearly, alerting the group and the teacher to
   any disparaties in effort.

I am not suggesting that versioning is a general solution for plagiarism, AI and laziness.
It is just one hurdle (to be combined with others) against ineffective approaches to writing.

Using Google Docs also exposes students to one of the major Cloud-based
writing platforms, which are increasingly common in collaborative projects.
While students might be more familiar with Microsoft Word, Google Docs
is virtually indistinguishable at a functional level, and arguably simpler
in design.

# How-To

## Student

Create a new Google Docs file and give it an appropriate name,
such as `AIandFoodPaper`.

Decide what your first task will be; for example, it could be
_write a rough draft of the project structure_.
When you have written this draft, select:

`File > Version History > Name Current Version`

Give a **descriptive name** to the version.
In this case, it could be:

> Drafted a project structure for AI and Food paper

While every writing project is different, the principle of
_divide-and-conquer_ usually applies.
In many cases, your next version will likely be:

> Drafted an introduction, focusing on AI in data analysis

Each time you create a version it is saved to the _version history_.
This can be viewed by you or anyone who you share the file with:

`File > Version History > View Version History`

Versions are grouped by month and include details, such as
the version name, date/time saved and version author.
Contributions by different authors to the same file will
be highlighted in a unique colour.

When you select a version then any edits (additions, deletions) will
be displayed; if necessary, a previous version can be restored for
editing.

### Examples

Named versions should typically involve a substantial,
self-contained change.

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

The first is a large set of trivial versions.
For example, 10 different versions that correct
individual typos, which could have been grouped
into one version if handled together.
Every individual change or new sentence does
not necessarily warrant its own version.

The previous example above could well have been longer,
containing more sentences while still being self-contained:

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

The second **bad** example is a single version with
a complex set of unrelated changes.
This might be a version that includes the deletion of
one section, the addition of two others, a change in
the title, the addition of images, and so on.
These changes could probably have been sub-divided
and given their own versions.

Inevitably there will be occasions where different types
of change will have been made, which can be named appropriately:

`Updated figure 3 and corrected typos in main text`

However, an effort should be made to avoid doing
a substantial amount of unstructured work across 
the entire paper that is then grouped into one version.
Each time you approach your project you should be thinking:
"What specific task will I focus on now".

## Teacher

### Submission

Students can be asked to submit their project in two forms.
For access to the version history they will need to share 
the actual Google Docs file.
If the file needs to be passed through a plagiarism-detector they can
download the file in an appropriate format suitable for upload.

To share the Docs file select:

`File > Share > Share with Others`

To ensure there are no issues with file access the _General Access_
setting in the popup dialog should be changed from "Restricted"
to "Anyone with a Link".
This is important primarily for cases where a teacher does not
have a Gmail account.

When you receive this link you should be able to access the version
history as described earlier.

If you also require students to upload the file to an LMS like Canvas
or Blackboard then they will first need to download the file in a
suitable format.

In `File > Download` both Word (.docx) and .pdf formats are available.

### Review

The version history is a supplement to the assessment process.
A good version history might include:

- Consistent work on the project over time
- Evidence of iteration and editing of own writing
- Descriptive version names that identify major changes
- Multiple aspects of writing (references, logic, organisation, editing)
- Balance of workload in group projects (where relevant)

If you are suspicious that a project has been plagiarised or
AI-generated then the version history is another tool for you to
evaluate the process by which the writing was generated.

When feedback on student writing is a part of your assessment
process the version history — again — provides a useful means
of inspecting how the student(s) approached their writing.

### "How Many Versions?"

It can be expected that students will ask the question:

> How many versions will I need to get a good mark?

Similar questions are often asked about numbers of citations and
numbers of words — they usually miss the point.
Any significant writing project will consist of more than
one version, usually many more, but a precise number cannot
be given.
It is possible for there to be 100 versions that each only make
trivial changes (typos, spelling) — the high number does not
reflect good practice in this case.
In comparison, 10 or 20 versions, which showcase a range of
activities, including additions, deletions, rewordings, citations
and clarifications, is preferable.
If the students get the impression that they are trying to
hit a number, rather than approach their writing in a structured
manner, then the exercise will be futile for all involved.

# Background

## Version Control Systems

There are version control _systems_, _tools_ and _philosophies_.
To keep things simple: version control involves assigning a unique
number to different versions of your project.

When you update your computer or phone you move from an older to
a newer version of the operating system.
A move from Windows 10 to 11 or Android 12 to 13 usually involves
several major changes to the underlying code that users are advised
to adopt.
Behind-the-scenes, programmers usually have more intricate versioning
systems, with many minor versions existing between major releases.

Git is probably the most popular version control system among writers
of computer programs and technical documentation.
Git is typically used in conjunction with GitHub, a web-based
platform for hosting versioned projects and structuring collaboration.

## Projects are Iterative

Working on any large project often demands working with versions.
If writing a paper you will typically have multiple drafts.
It can be useful to distinguish these with appropriate names.
For example: myDraft1.docx, myDraft2.docx, and so on.
This is a simple form of version control, even if it is
not referred to as such, although it can get quite
messy as the drafts accumulate in a folder.

It is also possible to just modify a single file but this can cause problems.
At some point, you might need to reduce the wordcount by 500 words, so you decide
to delete a section in myDraftTheOnlyVersion.docx, only to later realise it is
absolutely crucial to the project.
In such cases it is helpful if the retrieval of an earlier version is possible.
The undo button can usually only take us so far.

Version control systems — in simple terms — allow you to edit only a single
file while storing a recoverable history of the different versions of that file.

# Conclusion

Students are asked to write because writing is considered useful.
Muddled thoughts can be clarified once an attempt is made to write them down.
Extracting key information on a topic and combining them into an overview
is often far more effective than merely reading about the topic.

Although writing is a process, student work is often corrected as a static artifact.
The final version is assessed and deemed a reflection of that underlying process.
In an era of Large Language Models, there is an increasing probability that this
final version is the only version and it was drafted by an undetectable AI.

Perhaps then the **process of writing** — what is often valued — needs to be re-emphasised.
An analog solution is simply to require students to perform their writing in-person.
However, this is not always a fair, accessible or practical approach.
Serious essays, literature reviews and group projects often
involve many hours of work, dead-ends and revisions.
It is not feasible to migrate such projects to the classroom, and
it is also not aligned with an increasingly digitalised and
distributed workplace.

To be implemented effectively versioning has to be explained to students and to teachers.
Students have to approach their work in a disciplined, considered manner.
Teachers need to account for how the work was produced and
not merely how it appears in its final form.
The structure and transparency that this can introduce
may create more clear expectations for student writing and
improve how it is assessed.

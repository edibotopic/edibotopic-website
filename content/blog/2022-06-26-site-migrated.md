+++
title = "Moving from WordPress"
date = 2022-01-01
updated = 2023-05-17
draft = false

[taxonomies]
categories = ["notes"]
tags = ["writing", "web", "experience"]

[extra]
lang = "en"
toc = true
show_comment = true
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

I moved from WordPress to GitHub to host my blog.

<!-- more -->

{% info(header="Update") %} This was originally about switching from WordPress to GitHub but also —  by extension — to a Static Site Generator (SSG) in the form of Eleventy. In 2023 I changed from the SSG discussed here — Eleventy (JavaScript) — to Zola (Rust). {% end %}

I made a website when my academic job began to require more online teaching. The idea was to craft a space for exploring my personal and scholarly interests in a more integrated and informal way. Under time pressure, with little programming experience and a minimal amount of research, I chose _WordPress_ as a publishing platform. This choice made it quick and easy to get a functioning site up-and-running, but creating the content soon became a chore. In parallel, I became a more proficient user of GitHub. For every incomplete blog post there was a new software project in a GitHub repository. For these and other reasons I have decided to migrate the website to GitHub. This post serves to outline my motivations and get this blog started.


# **Why a Website?**

I developed a _somewhat_ undeserved reputation as a "tech person" among my university colleagues during the era of Covid lockdowns. Admittedly, it was a period of frantic digital exploration. I sunk countless hours into music, programming and 3D design, among other activities. This was partially motivated by a sense of deep panic: having previously been an _occasionally_ boring lecturer in some of my in-person classes, how could I now avoid giving boring online lectures? The blurry ambition was to model myself on the content creators that I had come to recognise as _effective_ teachers (at least for me _personally_). There were plans for Youtube videos, personal blogs, bespoke soundtracks, software tools for teaching and a food-themed podcast. _Some_ of these things materialised, and of those that _did_ the website was probably the least successful.

The original [edibotopic.com](https://edibotopic.com) — in some way — was an attempt to (re)integrate aspects of my own personality that had been cut adrift during the intense and specialised work characteristic of early-stage academia. My pre-academic life was defined mostly by writing $+$ music (creatively) and sport $+$ gaming (casually). If the creative projects were materially _unsuccessful_ and the casual hobbies pleasant _distractions_ they were still rewarding. During the initial years in my academic position (_in food science_) I earned a philosophy degree — much to the confusion of my colleagues — adding another node in my web of interests. I believe there are many productive and enlightening connections to be made between ideas across different domains of human knowledge, and I needed a place to explore these connections when the structures of academia did not make that possible.

# **Bad Friction**

[WordPress](https://wordpress.org) is often recommended to beginners who want to make a website. It has a lot to offer. Choose a name, choose a theme and you're on your way. There is a large ecosystem of **plugins**, which is also very attractive. For example, I was exploring the [Babylon.js](https://www.babylonjs.com/) game engine for making 3D content for the web and WordPress had a plugin for displaying those scenes. I thought that people might comment on my blog posts and there was a plugin for handling those user interactions. _What if someone wanted to make a donation_ I thought and — sure enough — there was a plugin for that too.

Later, I began to find these plugins more troublesome for a few reasons:

1. Some of the features these plugins add are relatively trivial to implement in a standard website, _if_ you know what you're doing. How they often seem to function on WordPress is overcoming the constraints imposed by WordPress itself. Adding interactivity (through scripts) or styling (through CSS) is routine practice when tweaking a website but it is decidedly _awkward_ on WordPress. Plugins overcome this awkwardness but at a cost.

2. Plugins often reduce site performance. Say you want to add support for a photo gallery. As a beginner, you might find some code samples online where this feature is implemented in a few lines of JavaScript and CSS. WordPress, however, makes it difficult to add the necessary code. So, someone recommends a gallery plugin, which you then install. Several weeks later you notice a dip in site performance. The common practice at this point is to uninstall each plugin one-by-one to identify the root cause. Even if this time-consuming, iterative process leads you to identify the culprit you are then left with the hard decision of whether to cull the offending plugin(s) to benefit performance, or sacrifice that performance for the desired functionality.

3. The plugin ecosystem is very much a _marketplace_. You will be surprised to find that seemingly basic features are behind a paywall. You will be prompted for reviews. Your choice to stop using a plugin will be queried. The creators of these plugins are entitled to seek feedback and remuneration for their efforts but if you are using multiple plugins this process can add unnecessary friction to the simple act of writing a blog post.

4. Many of the plugins that are attractive may not be necessary for meagre use-cases like my own. Writing blogs about niche academic topics was unlikely to attract donations. People were probably not going to fall in love having first met each other in the comments section of one of my blog posts. The ease with which you can add functionalities like these ones can very easily lead to you overpowering your website.

5. The answer to these problems is often simply to "use less plugins", but if the diversity and easy-implementation of plugins were what attracted you in the first place then a major benefit of the platform seems to be undermined by this line of reasoning.

All this I know with the benefit of hindsight. The "trivial implementations" I refer to were not trivial for me _at the time_. I did not know what functionality my site would require. In retrospect, I could only ever have started with a tool like WordPress and if I had more complex requirements (e-commerce) then maybe I never would have left. I had chosen `wordpress.org` as opposed to `wordpress.com` as the former seemed to offer more immediate possibilities for customisation. This required me to **pay for web hosting**. Similar functionality can be accessed in the `.com` option if you enter one of WordPress.com's **paid tiers**. While I was *paying* a significant amount of money for a website that was painful to customise and maintain, my [GitHub profile](https://github.com/edibotopic) swelled with freely-hosted web applications.

The alternative for *me-as-beginner* was building a site from scratch or using a static site generator. These options were beyond my skill-set at the time, or at least beyond my capacity to understand what I was directly manipulating when building the site. So I maintained my unproductive blog, which largely involved the drudgery of updating plugins to prevent security problems. At the same time I was increasingly productive with small software projects on GitHub. Creating these projects on GitHub was _more difficult_ on its face (it involved actual coding), yet it was where I seemed to be making the most ground.

# **Plugging Out**

My personal grievances with WordPress came to head when I was writing my final blog post, which was a summary of some recent software projects.

In the intervening years I had become a fan of editing plain text/markdown using (Neo)Vim as my text editor. I would then copy the text and paste it into the WordPress editor. Inevitably this would cause unforeseen formatting issues that would take a considerable amount of time to fix. I had enabled markdown editing in WordPress _via_ a plugin but the post still came out jumbled. I had specific, enraging problems while trying to add a code block, a feature common to most markdown editors/previewers that looks like this:

```javascript
// code goes here
let a = 2
let b = 6

console.log(b / a)
// returns 3
```

I ended up installing three different plugins before I found something that worked and the results _still_ looked bad. Due to these and other issues, every time I sat down to write something there was a little bit of dread associated with the publishing stage. As writing is already difficult enough, the (bad) friction introduced by the WordPress editor was a problem.

# **Good Friction**

Plain text. The terminal. Text editors. Version control.

Terms that are superficially bland but that are known to excite many programmers. Like most _non-programmers_, I was originally mystified as to why these were interesting or useful, not to mind _exciting_. I gradually came to understand their appeal, and I hope to discuss these topics in more depth in future posts. For now, it is enough to say that I greatly value the customisability and speed of a good text editor, as well as the structured and transparent nature of a version-controlled project. When creating material for a website I wanted to leverage these tools. Like [others before me](https://noelle.dev/meta/about) I decided to make the switch from WordPress to a static site generator.

This website took longer to setup than if I was using WordPress. Like most static site generators the idea is simple: to take content written in markdown and convert it into web pages. The site is *static* as opposed to *dynamic* because I want to show all users the same content rather than tailor the site based on data from individual users — as a result, the static version of [edibotopic.com](https://edibotopic.com) is faster then the dynamic WordPress version and I am prevented from adding annoying/unnecessary features that "personalise" the user experience. Most of my interaction with the site should basically proceed as follows:

1. Open a terminal
2. Write `.md` file 
3. Run `npm run build`
4. `Push` changes to GitHub

The markdown is a straightforward way of formatting text:

```markdown
# Good Friction

Plain text. The terminal...

Terms that are...

1. Open terminal
2. Write markdown...

The markdown is a straightforward way of formatting text:
```

The `build` process, however, involves multiple interacting parts:

-   **Site generator**: eleventy
-   **Bundler**: Vite
-   **Markdown parser**: markdown-it
-   **CSS tools/frameworks**: tailwind, PostCSS
-   **Package manager**: NPM

Besides obvious tasks like styling the website to my preferences, there were innumerable tiny problems to solve associated with these different parts.

The original bundler had been deprecated so I had to migrate to Vite. List numbers/bullets were being rendered incorrectly and I needed to learn Tailwind configuration to fix them. Several issues were associated with outdated dependencies that needed to be updated or upgraded through `NPM`. My *production build* did not behave like my *development build* because of how GitHub handles relative paths.

Even when addressing these issues took time the solution usually _made sense_, rather than being some _deus ex machina_ in the form of a plugin. While I _do_ use plugins on this site they are less abundant and often merely implement small adjustments to how an `.md` file is converted into `.html`.

My major gripe with static site generators is how they appear _as a code base_ to the uninitiated. In the other software projects I have worked on I like the idea that someone can look at the code and see a simple directory structure like so:

```
+--scripts
+--styles
+--index.html
```

Static site generators create relatively complex directory structures. In addition, different people use different JAM (JavaScript APIs Markup) [stacks](https://jamstack.org/). While I use [Eleventy](https://www.11ty.dev/) another will use [Hugo](https://gohugo.io/), with subtly different APIs, dependencies and directory structures in each case. If you like a feature of a static site and want to study it there can be a lot of detective work involved. From a pedagogical standpoint this is undesirable, especially if a prospective student is not already a web developer.

Regardless, I needed something compact that I could manage and understand _if only in principle_. When something breaks it would be within my power to investigate and fix it, rather than endlessly searching forums for workarounds.

While my instinct for colour schemes might not be perfect — you can be the judge — this site looks _at least as good_ as the WordPress one to my eyes, and I am in more control of how that might change in the future.

# **The Plan**

Many people have a difficulty with _starting writing_, while I have a difficulty _stopping writing_. I have a natural tendency to write articles that are long, verbose and that try to do too much.

- **Example 1**: my final blog on the previous site, which attempted to summarise 6-7 software projects I had worked on. Of course, this could have simply been 6-7 shorter and more self-contained blog posts.

- **Example 2**: this very post.

Coming from academia, I am also a prodigious editor. An article requiring 5 or even 12 drafts is _normal_ to me. This, however, is not sustainable when maintaining a "casual" blog. The whole idea here is to write more freely and fluently, even if a post ends up on _Hacker News_ and its exacting users decry the state of internet writing.

A major goal of mine with this site is to write more regularly but also more concisely, with this blog perhaps being a bad start in that respect! In addition, it will function as a reference for my recent and active projects in music, software and technology. Lastly, if my nascent multimedia projects (video, podcasting) come to fruition then I will incorporate them into this site.

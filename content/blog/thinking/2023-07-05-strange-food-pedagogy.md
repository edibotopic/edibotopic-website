+++
title = "Making Things Strange: An Inverse Problem in Teaching"
date = 2023-07-05
draft = false
weight = 2

[taxonomies]
categories = ["thinking"]
tags = ["teaching", "food", "defamiliarisation"]

[extra]
lang = "en"
toc = true
show_comment = false
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

It is common to explain the unfamiliar by reference to the
familiar, but when teaching a quotidian science (*of the everyday*) this explanatory mode is
inverted.

<!-- more -->

## Strange Ideas

Many are mystified and threatened by the *algorithm*.
This word is most typically invoked in discussions about 
the black boxes that digest our data and spit out personalised
feeds, advertisements and recommendations.
The inner workings of the black box are complex
and often proprietary, maintaining their distance
and strangeness.

$$input \xrightarrow{black \ box} output$$

The *algorithm* is a more general tool than the discourse suggests,
with applications that extend far beyond e-commerce and social media.
Students of programming usually take a course in algorithms.
Here they learn how to write code that prints sequences of
characters to the screen or calculates statistics for a dataset.
Later they encounter more complex algorithms that can help
simulate enemy movement in video games or — indeed — generate
personalised recommendations for a vast social network.

The generality of a tool like the algorithm lies in its abstractness.
Conceptual and underspecified, its implementations apply to a broad
class of particular cases.
Mathematical operations like `sum` are similarly abstract.
We can conceive of _summing_ a collection of physical objects,
_summing_ a set of integers or _summing_ millilitres of liquid.
In a computer program, a simple algorithm would be employed to
implement the concept of a`sum`.

When teaching there is tendency to appeal first to concrete 
instances rather than directly engaging with an abstract concept.
The first model of the algorithm that many encounter is the recipe.
To develop an understanding we direct knowledge
from a familiar, concrete *source* (recipes) to an unfamiliar, abstract *target*
(algorithms)
through the invocation of metaphor (or analogy):

$$source \xrightarrow{metaphor} target$$

## Appealing to the Familiar

In *The Art of Computer Programming* the computer scientist
Donald Knuth (1968) explained how an algorithm is analogous to a recipe.
Just like a recipe, it takes a finite amount of inputs and produces
a specific output.
This transformation requires that a sequence of steps be first
defined and then carried out in a particular order.
It can be expected that Knuth's analogy (like all analogies) will
crumble at some point; for now, it is enough for us to "grasp"
at the abstract concept in a useful way.

Just as a cook follows a recipe to produce a meal, a computer
processes code to produce a desired output, which could be a
successful calculation or a graphical representation.
For some computer scientists, the salient distinction between these
two kinds of procedures is the degree to which the instructions can 
be said to have precision.
A recipe — they assume — is prone to ambiguity and may yield
different results depending on who interprets its steps.
The education of a programmer then places a strong emphasis on
achieving precision when defining the goals of a program,
articulating clearly the structure of the requisite code and
testing effectively the reliability of its performance.
As a teacher I am fascinated by this bait-and-switch
as pedagogical rhetoric.
*Coding is like cooking.*
*This is a model of cooking and how it maps to our concept of programming.*
*You are programmers not cooks*.
*Here is why our programs must never be merely like recipes.*

Most programs are composed of functions,
small self-contained procedures that transform
a set of inputs into an output.
A calculator is a program that can perform
different kinds of mathematical operations,
each defined by an appropriate function (sum, multiply, divide).
"Pure" functions in programming are essentially
the same as mathematical functions.
They map a set of inputs from a source domain
to a target codomain.
In a pure function, like `sum_two_numbers`,
given multiple inputs (`2, 3`) there is only
one output (`5`).
The function `sum_two_numbers` should achieve
the same transformation in all contexts.
It will always map the same two numbers
in the source domain to one number in the
codomain.

$$domain \xrightarrow{function} codomain$$

The process of cooking a meal can also be understood
as being composed of smaller procedures.
A meal consists a combination of materials,
each of which has been transformed by an
appropriate procedure (peeling, mixing, heating).
However, a cooking procedure may yield different
outputs dependent on context.
For example, two people may have varying degrees
of skill and/or may interpret the instructions
differently.
On this limited account, a cooking procedure is further
from the Platonic ideal of a mathematical function than a computer
program, assuming that such programs consist strictly of *pure* functions 
(and most — in fact — do not).

$$recipe \xrightarrow{interpret \ \\& \ act} meal$$

As an aside, it should be noted that the distinction between technical
(computational) and nontechnical (culinary) procedures that
privileges the former as more **effective** has been challenged by
some theoretical computer scientists (see Cleland, 2001).
In addition, practitioners in fields like molecular
gastronomy assert that great precision
can be achieved when cooking, if certain rules and principles are
followed, perhaps resulting in a more *algorithmic* cookery.
As Dan Cox suggests in a blog in
[Digital
Ephemera](https://videlais.com/2020/08/15/code-stories-recipe/),
understanding through metaphor might
operate in a bidirectional manner, rather
than the strictly unidirectional $source \to target$ scheme:

> Across the **bridge** of metaphor,
> recipe and algorithm might have
> more to **offer each other** in comparison 
> than appears at first glance.

The *bridge* here is an apt (meta)metaphor itself, in that
we may return from a destination via the
same route that we have travelled there.
Thinking of *algorithms as recipes* prompts
us to consider *recipes as algorithms*.
Laying a metaphor between two domains
implies the formation of a
[loop of interpretation](https://en.wikipedia.org/wiki/Hermeneutic_circle) through which there is 
the possibility of better understanding both. 

## Making Things Weird

The challenge for the teacher of abstract concepts
is the translation of the strange to the familiar (at least initially).
Food, ingredients and recipes are common sources of analogy and
metaphor in these cases, and not only with algorithms as the target (Crowley, 2022).
An everyday concept is leveraged to transform
the strange or abstract new idea into something
more familiar.

$$strange \xrightarrow{pedagogy} familiar$$

I think that this transformation is often inverted when teaching a 
quotidian science.
By "quotidian science" I mean a science that has an everyday
object as its focus.
My specialisation — food science — is such a quotidian science.
The inverse problem involves transforming the
familiar objects of daily life into something
strange and new.
Achieving this transformation may coincide
with the overcoming of significant resistance,
due to these familiar ideas being so *baked in*.

A novice student of food science has a high degree of familiarity
with the material that they intend to study.
Eating, cooking and dieting are mundane concepts.
When learning the science of food they experience the familiar becoming
strange, which can be a disturbing process.
While explaining the strange in terms of the familiar is
a common pedagogical tool, a disturbing rendering of the familiar as
strange has more often been associated with artistic work. 
On one interpretation (Shklovsky, 1917), this is the fundamental goal of art: to show 
us the objects of reality in an altered form, such that we return
to the world with a more enriched sense of the objects *as they are*. 

Shklovsky's idea — known as **defamiliarisation** — is an arcane concept borrowed from
art criticism, yet I think it is close in spirit
to how many scientific educators and communicators conceive of their role.
Scientists can be sensitive to the claim (scientism) that they are iconoclasts,
who destroy everyday symbols that comfort and enthrall us.
Richard Feynman famously rejected the idea that his scientific
worldview ruined the beauty of a flower, suggesting instead that
[science only served to enrich his appreciation of that beauty](https://www.themarginalian.org/2013/01/01/ode-to-a-flower-richard-feynman/).
This is a useful reminder that new theoretical knowledge can
enrich — rather than displace — everyday intuition.
A two-step process (or loop) can be imagined, in which the familiar is made
strange (conceptually) before we return to the familiar (in
reality) and appreciate it in a new aspect.

$$1. \ familiar \xrightarrow{defamiliarisation} strange$$

$$2. \ familiar \xleftarrow{enrichment} strange$$

The scientific and the everyday coexist and interact productively.

## Defamiliarisers

Scientists, like artists, can alter how we perceive the world.
As communicators, they often play the role of defamiliarisers.
Their lessons can enrich our experience and intellect, or they can 
damage our sense of how we relate to reality, leading to a rejection
of science or even a descent into conspiracy theories.
The outcome may depend on how effectively the scientist
communicates and how their audience understands their motives.

Tools that move us between the familiar and the strange — like
metaphor and analogy — are
central to explanation, whether through artistic epiphany or
scientific discovery.
Understanding art as a force for defamiliarisation does not necessarily
mean that artists destroy everyday conceptions of the
world.
Instead, through art (and science) such intuitions can be retained while being enriched.
It is possible to know the pain of bureaucracy without reading
[Kafka](https://en.wikipedia.org/wiki/Franz_Kafka), but reading 
*The Trial* will certainly make you experience
that same pain in new and interesting ways!

In science communication, there is perhaps a greater
rhetorical emphasis on actively changing minds and
correcting falsities.
Sometimes this clarity of focus is demanded in the
context of a live crisis.
In more normal times, it might be wise to use our scientific truths
to enrich the everyday and mundane and not seek to displace them.

## References

Cleland, C. (2001). Recipes, algorithms, and programs. *Minds and
Machines*, 11, 219-237.

Crowley, S. V. (2022). Alchemical and cyborgian imaginings in technoscientific discourse relating to holistic turns in food processing and personalised nutrition. In *Metaphor, Sustainability, Transformation*. I. Hughes, E. Byrne, G. Mullaly., & C. Sage (Eds.). Routledge. 65-97.

Knuth, D. E. (1997/1968). *The Art of Computer Programming* (3rd ed). Addison-Wesley.

Shklovsky, V. (1988/1917). Art as Device. In *Modern Criticism and Theory:
A Reader*. L. T. Lemon and M. J. Reis (Trans.), David Lodge (Ed.). Longmans. 16-30.

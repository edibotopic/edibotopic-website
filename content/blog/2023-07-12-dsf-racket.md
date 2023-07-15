+++
title = "Drawing Structures with a Formalism"
date = 2023-07-16
# updated = 2023-05-18
draft = true

[taxonomies]
categories = ["experiments"]
tags = ["science", "programming", "teaching"]

[extra]
lang = "en"
toc = true
show_comment = true
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

I have been using the Racket language to make diagrams of structures 
that can be described based on connection and parthood.

<!-- more -->

# Background (rough draft)

Several years ago I noticed an interesting overlap between two
niche areas of research.
In food science I encountered the Dispersed System Formalism (DSF),
a symbolic notation for describing emulsions, foams and gels.
Later, in philosophy, I found the broader field of spatial logics,
which attempt to rigorously define methods of symbolically
representing space.
DSF frequently appeals, somewhat informally, to notions like
parthood and connection.
For works in spatial logics these are foundational ideas.

In any case, we can get very far describing space based
on what is a part and what is connected.
Ingenious symbolic representations can be used to 
describe these arrangements; however, we frequently
appeal to diagrams to get our heads straight on such
matters.

# Logic, Notation and Diagrams

Spatial representations can come in three forms:

1. Systems of axioms and derivation rules
2. Notational devices
3. Diagrams

Some — though not all — use all three.
Many works of pure logic focus on 1.
Works in food science focus on 2.
Both areas will occasionally use 3
to aid the intuition of the reader.

It seems to me that it would be useful
to be able to write the symbols and have
them generate the diagram.
If you were learning the notation
system this would give immediate feedback.
Even better, if the procedures by which the
notation generates the diagrams were transparent
then the underlying logic would be clear.

# Link Symbols and Diagrams with Racket

TODO

## Appendix: Dispersed System Formalisms in Science

In food science there was something called the Dispersed
System Formalism (DSF).
DSF is a shorthand notation for describing structures 
commonly encountered in food, such as foams and emulsions.
An emulsion, for example, consists of a set of liquid
droplets dispersed in a continuous liquid medium.
"Dispersed" here means *undissolved*, with a
dispersion of oil-in-water being a paradigmatic case.
For decades, scientists use the following formula
for such an emulsion (in obvious symbols):

$$O/W$$

The developer of DSF took this basic format — a
binary operator that describes the spatial relation
between phases — and extended it to account for more 
systems.
The internal structure of bread can be described as
a foam, with gas bubbles dispersed in a solid:

$$G/S$$

To indicate that this foam is contained within a solid
crust the inclusion operator $@$ could be used:

$$(G/S)@S$$

In this way, DSF was extended to account for a greater
number of cases.

# Spatial Logics in Philosophy

The papers that described DSF were unlike anything I had
read as a food scientist.
Rather than a by-the-numbers description of meagre
experimental work this described a notation that 
offered a new expressive power for describing structure.

I wondered if anyone had ever tried to develop 
a general system to describe all structures,
not just food.
To my surprise there seemed to be a large
body of work on this topic in the philosophy
literature.
More specifically, these works fell within
forbidding sub-genres with names like:

- Mereotopology
- Spatial logic
- Formal ontology

Distinctions can be made between them, but
I will not do so here.

In essence, papers in this broad area focus
on establishing logical foundations for 
defining structures based on the notions
of parthood and connection.

# Degrees of Formality?

Earlier we encountered DSF.
In a DSF paper the author, writing to
an audience of domain experts (e.g., food scientists), says in effect:

> You all know what an emulsion is, right?
>
> Here is a diagram to remind you.
>
> Now here is a more convenient notation.
>
> If we all agree on the meaning of this
> notation we can continue to use it together.

The binary operator used to define an emulsion ($/$)
could be called the "dispersion operator" and
we are told that this tells us that the thing
to its left is dispersed in the thing on the right.
It is assumed we know what dispersion means.

The philosophical works are different in this respect.
They attempt to establish a definition for such operators.
Starting with a simple idea, like connection, they attempt
to define other ideas that might be less concrete.
In theory, shown the same axioms and derivation rules, we
would agree on the definitions provided by the system.


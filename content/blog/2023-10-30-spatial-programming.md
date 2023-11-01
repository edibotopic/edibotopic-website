+++
title = "Spatial Programming: Connecting Across Disciplines"
date = 2023-10-30
draft = false

[taxonomies]
categories = ["notes"]
tags = ["programming", "teaching", "design"]

[extra]
lang = "en"
toc = true
show_comment = false
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

Since encountering _spatial programming_ I have wanted to explore some
tentative connections with similar projects in other fields, for the sake of sheer
curiosity and cultivating a shared sense of purpose.

<!-- more -->

## Hello Tode

{% warning(header="Draft") %} 

This is a draft published after a frenzied period of writing that I
needed to end.

I published it so that I could move on with my life but do intend to
revisit and edit at some point in the future.

{% end %}

Have you heard of [TodePond](https://github.com/TodePond)?
They're great.
You should watch their YouTube [videos](https://www.youtube.com/@TodePond) and play with
their [software](https://github.com/TodePond).

A general theme of [Lu(ke)](https://www.todepond.com/wikiblogarden/my-name/)'s work is _spatial programming_.

In [SandPond](https://github.com/TodePond/SandPond) complex
particle-based physics simulations can be generated using a 
spatial programming language named [SpaceTode](https://github.com/TodePond/SpaceTode).
SpaceTode has [symbols](https://youtu.be/Tpvcy1gt5yU?si=SDZbp509Y8WeLORZ&t=77) that each represent things like 
atoms, space and transitions.
SpaceTode [was inspired by](m/watch?v=L2U_Sd1qMJ4&t=2580s) the graphical programming environment [Stagecast Creator](http://acypher.com/creator/) and the spatial programming language [SPLAT](https://github.com/DaveAckley/SPLAT).

Consider the following _rule_:

> When an atom (`@`) is above an empty space (`_`)
> a transition (`=>`) will follow in which the
> atom falls below that space.

This is encoded as:

```go
@ => _
_    @
```

From a set of such rules **elements** can be defined, such as sand,
rock and water, which can then be [dropped into a 3D environment to
create complex visualisations](https://sandpond.cool/).

There is also [CellPond](https://cellpond.cool/), which presents a
drag-and-drop interface for creating your own rules for generating 2D
visualisations.

## Iconic Signs

Programming has been used to make visualisations
of space for many years.

When I wanted to make [a
simulation](https://edibotopic.github.io/stokes-law/) to show what
affects the rate at which particles sink and float I wrote the code in a
conventional style:

```js
class Ball {
  constructor(x, y, dx, dy, r, colour) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.base_r = r;
    this.colour = colour;
  }

  draw() {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    canvas.closePath();
    canvas.fillStyle = this.colour;
    canvas.fill();
    canvas.stroke();
  }
```

While this code (in part) generates a spatial visualisation,
it cannot be considered an example of spatial programming.

The code is an abstract **symbolic** representation that bears no _salient_
resemblance to the spatial arrangement that it generates.

Contrast this with a rule in SpaceTode, which encodes that an
atom has a tendency to move to the left:

```go
_@ => @_
```

Such rules are **iconic**, in they immediately
offer us the possibility of a spatial interpretation.

_In spatial programming, the rule **looks like** the result_.

Spatial programming then does not just concern the use of code to
generate interesting spatial visualisations, although that is an
obvious use-case. 
Spatial programming fosters an intuitive connection between the
_signifier_ (some iconic representation) and the _signified_ (a useful
result that is generated).

## Spatial Logics

The concept of spatial programming reminds me of
_spatial logic_, a field that I take to
encompass mereotopology[^1] and formal ontology[^2].

Philosophers, logicians and computer scientists
in this field attempt to develop formal systems
for describing **regions**.
Typically these regions are _spatial_ but they are occasionally
temporal, spatiotemporal or — most broadly of all — metaphysical.

Mereotopology begins with some primitive
relation, typically parthood ($P$) or connection ($C$).
To signify $x$ is connected to $y$ we can write:

$$xCy$$

Then axioms are constructed using this notion of connection;
for example, it can be stipulated that _for all x_ ($\forall x$) this relation is _reflexive_:

$$\forall x(xCx)$$

_Every thing is connected to itself._

It can also be stipulated that connection is _symmetric_:

$$\forall xy (xCy \to yCx)$$

_If a thing connects to a second thing, then
that second thing must connect to the first._

The arrow here stands for **logical implication**.
Arrows in SpaceTode might instead be understood to signify a **causal
implication**, by virtue of their generating a side-effect in the real
world (a cool visualisation).

In [a spatial logic](https://www.researchgate.net/publication/221393453_A_Spatial_Logic_based_on_Regions_and_Connection) a set of these simple axioms are used to define ($:=$)
other spatial relations, including disconnection ($DC$) and parthood ($P$):

$$xDCy \ := \ \neg xCy$$

_A thing is disconnected from another if they are not ($\neg$) connected._

$$xPy \ := \ \forall z(zCx \to zCy)$$

_An x is part of a y if anything that connects to x must also connect to y._

In this way all descriptions of space can be reduced to
the idea of connection.
Likewise, in SandPond complex spatial visualisations are
generated from simple rules.

Spatial logics are like spatial programming languages in that they
attempt to encode the concept of spaces in symbols.
Unlike spatial programming languages, however, spatial logics emphasise 
symbolic rather than iconic representations.
The formulas $xCy$, $zDCk$ and $jPi$ are just strings of characters.
They each represent different topological spaces
(x connected to y, z is disconnected from y, j is part of i) but 
do not resemble them.

Another key distinction between the two is that spatial programming
is oriented towards the generative.
Spatial programming languages are designed with a view to creating 
interesting things, whereas spatial logics are designed to clarify
the underlying logic of our spatial descriptions.

## Dispersed Systems

Like spatial logic, the Dispersed System Formalism ([DSF](https://www.sciencedirect.com/science/article/abs/pii/S0378517307006527)) 
aims to find a concise symbolic language for describing 
complex spaces in a consistent way.

DSF, however, is also a bit like spatial programming.
Firstly, it is intended to be used as a tool to create interesting
things, like food structures.
Secondly, in its choice of symbols it is arguably more _iconic_ than
symbolic [^3].

In DSF the symbol $@$ represents a relation, equivalent to 
the notion of parthood (topological enclosure).
To say $x$ is enclosed in $y$ we write:

$$x@y$$

Look at that $@$: it resembles a thing (the character 'a')
enclosed in another thing (a circle).
It is *iconic*, like the symbols we saw in SpaceTode.
The symbol resembles the spatial relation it represents.

Unusually for the area of science from which it emerged, papers on DSF
include actual (symbolic) code, which can be used to generate DSF formulas.
Unfortunately the code is written in the proprietary Maple software,
but I have slapped together a basic version in Python below.
The code basically loops through a list of atoms and relations
to create the possible binary formulas that result:

```py
# Components of DSF formulas 
atoms_left = ['x', 'y', 'z']
relations = ['@', '+', '/']
atoms_right = ['x', 'y', 'z']

# Generate binary DSF formulas
for atomL in atoms_left:
    for relation in relations:
        for atomR in atoms_right:
            print(atomL + relation + atomR)

# Prints: x@x x@y x@z x+x x+y x+z x/x x/y x/z y@x ...

```

Here is how a rule might be written in DSF for a
system that has an emulsion (oil-in-water) structure:

```
O / W => O σ W
```

{% important(header="Aside") %} 
In DSF, the symbols $/$ and $\sigma$ mean "dispersed in" (think: oil
droplets in water) and
"on top of" (think: icing on cake), respectively.

The $\sigma$ looks like a cap on top of an 'o' (iconic),
while the $/$ signifies the mathematical notion of division 
(symbolic).

The use of $/$ is conventional for dispersed systems in science; given that it refers to discrete particles ($ n \geq 2$) the colon symbol 
"$:$" might be a suitable iconic alternative.

{% end %}

The rule states that if oil is dispersed in water the
oil will transition to a state in which it is floating on
top of the water.

In SpaceTode, this would be something like:

```go
W => O
O    W
```

I am reminded that people in seemingly-distant areas
of inquiry often work on similar problems with analogous tools[^4].

## Paper Tools

The historian Ursula Klein [has written](https://www.amazon.com/Experiments-Models-Paper-Tools-Nineteenth/dp/0804743592) extensively
on the role of **Paper Tools** in science.

A paper tool is anything that can be put on paper,
or any other surface, which helps us think about
difficult things and imagine new possibilities.

When scientists are asked about the importance of
something like a chemical equation they tend to
speak about accuracy, precision and quantification.

While these are important features, Klein thinks
that such _paper tools_ also enhance our capacity
to imagine and invent.

Going to back to TodePond for a moment, once we
understand that the rule for sinking is:

```
@ => _
_    @
```

then it is easy to imagine the rule for floating:


```
_ => @
@    _
```

The spatial nature of the language both eases the cognitive 
leap to the resultant visualisation but also the creative
progression to new rule-sets.
These are positive features of SpaceTode _as a paper tool_.

Another paper tool — the chemical equation — is not simply a 
tool for labelling things that already exist in the world, 
it also allows us to question and imagine how they might be combined.

Once we acknowledge the existence of the elements carbon, hydrogen and
oxygen we can formulate a question as follows:

$$C + H + O = \ ?$$

A synthetic chemist recognises the creative potential of such
equations, yet they are unlike spatial programming languages
in that they are symbolic and not iconic.

_Things could have been different..._

What we now recognise as standard chemical notation has its origins in symbolic
innovations made by chemists from Sweden (Berzelius) and France 
(Lavoisier).

The English chemist Dalton had presented an alternative notation that 
was more [iconic](https://www.compoundchem.com/2016/09/06/dalton/) in nature. 
He was especially focused on representing the spatial arrangements of
atoms, having just proposed an influential atomic model.

The reasons behind the ultimate rejection of his icons in favour of
the modern symbolic version were often prosaic.
For example, Dalton's icons were more difficult to
type-set using the technology of the time.

Later developments in chemistry, such as the
[discovery of the benzene ring structure](https://www.nature.com/articles/465036a), relied
greatly on a _spatial intuition_ that could not be
realised through a strict adherence to the symbolic
notation that was available to chemists at the time.


## End

While symbolic systems can be very powerful — see mathematics,
chemistry and programming — they can sometimes present barriers to
learning and creation.

Spatial programmers like TodePond are showing how effective and
joyful
more _iconic_ languages can be when designing visual effects.

[Others have proposed](https://www.frontiersin.org/articles/10.3389/fpsyg.2022.890362/full)
that teaching with
concrete _icons_ rather than abstract symbols may benefit learners
who typically struggle with mathematics.

Spatial programming could be a generative topic for thinkers and
practitioners from different fields to explore alternative means
of representing space.

---

## Notes

[^1]: Mereotopology is a combination of mereology (the study of
_parts_) and topology (the study of _connection_).

[^2]: Formal ontology combines the classical philosophical
study of _being_ with the formal apparatus of _logic_, usually
with a view to developing coherent systems of classification
(formal ontologies).

[^3]: The repeated distinction I make between the _iconic_ and the _symbolic_ broadly follows the [semiotics of Peirce](https://plato.stanford.edu/entries/peirce-semiotics/).

[^4]: There is no DSF tool that generates visualisations of the structures its formulas represent.
This is why I made [DSF-racket](@/blog/2023-07-16-dsf-racket.md).
While less visually-enthralling than TodePond's creations it is similar conceptually and attempts to make salient the connection between iconic formulas and the visualisations they generate.

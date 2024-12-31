+++
title = "Iconic Programming"
date = 2024-12-29
updated = 2024-12-31
draft = false

[taxonomies]
categories = ["notes"]
tags = ["programming", "semiotics"]

[extra]
lang = "en"
toc = false
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

# Iconic Programming

Programming in which the program **resembles** what it does.

{% note(header='Note on usage of the term "icon"') %} 
In [semiotics](https://en.wikipedia.org/wiki/Semiotics), a distinction is made
between icons and symbols. Symbols are associated with what they reference by
convention, while icons are associated through resemblance.

This is the sense in which I will be using these terms throughout this note.
{% end %}

## Symbols and icons

Unlike
[icons](https://en.wikipedia.org/wiki/Semiotic_theory_of_Charles_Sanders_Peirce#II._Icon,_index,_symbol),
symbols are abstract. They don't necessarily resemble any concrete thing. Their
meaning emerges through convention, as in the rules of a language.

There is nothing about the following set of symbols that immediately suggests a
circle. If we have studied geometry, speak English and understand JavaScript
then we can interpret that `drawBigCircle(3)` will draw a circle of radius `9`.

```js
let drawBigCircle = (r) => {
   draw.circle(r**2)
}
```

## Pointers are pointy

Icons can bear a resemblance to a non-physical concept.

The Odin language uses `^` for its pointers:

```c
pointer_to_int: ^int
```

In C, `*` is instead used:

```c
int *pointer_to_int
```

The [Odin](https://odin-lang.org/) documentation states that:

> Odin borrows the ^ syntax for pointers from the Pascal family, because it is pointy [...]

The syntax for pointer in Odin and Pascal resembles the concept of what a
pointer does: _it is pointy because it points_.

Neither language is fully iconic, as they use combinations of both symbols and
icons, and that's perfectly fine!

{% tip(header="Icons in context") %} 
The meaning of an icon depends on the context of its use. We can use `^` to
represent a pointer to a memory location or to represent the roof of a house.
In another context, it may function as a symbol, such as its use in `2^3`,
where it represents the abstract idea of mathematical exponentiation.
We need to know the context of an icon's use to understand its meaning.
{% end %}

## Sand falls down

Icons can be used to write programs where the input resembles the output.
The following syntax is from [SPLAT](https://github.com/DaveAckley/SPLAT/):

```go
@ => _
_    @
```

It is a rule: if a particle is above empty space it will fall into that space.
The `@` is a particle and the `_` is empty space. In
[SpaceTode](https://github.com/TodePond/SpaceTode), this rule yields a visual
output: particles that fall.

Taken together, the *set* of characters is itself iconic: the rule resembles
what it generates. It is a spatial arrangement of characters that resembles the
resulting spatial arrangement of particles.

The (genius) creators of SPLAT and SpaceTode rightly emphasise the _spatial_
aspect of their work, but I also think _resemblance_ is a salient factor.

{% important(header="The shape of programs") %} 
Through the use of indentation, text can be made to more
closely resemble the data structure it represents, such
as when a hierarchical tree-like structure is encoded
in JSON:

```json
{
  "name": "root branch",
  "subbranches": [
    {
      "name": "subbranch 1",
      "subbranches": [
        {
          "name": "leaf 1",
          "leaves": []
        },
        {
          "name": "leaf 2",
          "leaves": []
        }
      ]
    },
    {
      "name": "subbranch 2",
      "subbranches": [
        {
          "name": "leaf 3",
          "leaves": []
        }
      ]
    }
  ]
}
```
{% end %}

## Comments illuminate

In [APL](https://en.wikipedia.org/wiki/APL_(programming_language)), comments
are prefixed with the `⍝` or "lamp" symbol:

```apl
⍝ this is a comment
```

The intention is that comments _illuminate_ the code. Comments should resemble
a (metaphorical) illumination, rather than — for example — a mere recapitulation.
This icon is a reminder to the programmer, but not a guarantee of illumination.

Like Odin and Pascal, APL is not strictly iconic, as it contains a mixture of
icons and more abstract symbols. If you find APL code inscrutable, it's probably not
strictly owing to its use of icons.

## Iconic programming and visual programming

Visual programming is often contrasted with conventional, text-based
programming. Visual programs typically rely on graphical elements (boxes,
nodes, blocks), which can be dragged and connected. These interfaces can be
more convenient for specific users or for particular use-cases.

In semiotic terms, icons _resemble what they represent_.
The concept of "resemblance" is not strictly visual.

> Mary resembles her father in her temperament

> The stimulatory effects of coffee resemble that of tea

> All games share a family resemblance with each other

> The dog-owner's hand gesture resembles where the dog should be next

Consider also that:

* Programming visually/graphically does not require any icons (`nodes` are not iconic).
* Programming with icons does not require a graphical user interface (`^` can be typed).
* Programming with icons does not require a spatial interpretation (`⍝` is a metaphor).

Here are some icons that I can type, and how they might be interpreted in a given domain:

* `^` pointer
* `!` filter
* `()` container
* `(())` nested containers
* `o` circle
* `#` grid
* `/` gradient

## Why icons?

I might like to program with icons because they have an immediate conceptual
similarity to what I am trying to make. I might like to leverage this
similarity while still using a keyboard and plain text. Whether such a language
is readable or effective depends on the language design.

A needless multiplication of symbols does not need to result. One difficulty
would be in selecting a finite set of icons for highly generalisable ideas.
Ideas like parthood, connection and enclosure are highly general, span many
contexts and can be combined in many ways.

A language does not need to be fully iconic, but can leverage icons to make
abstract concepts more concrete. An excellent example here is the use of the
pointy `^` for pointers in Odin and Pascal.

{% tip(header="Pipes can be pipey") %} 
Just as pointers can be pointy, pipes can be pipey.
In Unix-like systems, the `|` or "pipe" is used to compose
a pipeline of commands.

```bash
cat log.txt | grep "error" | sort | uniq
```

The `|` certainly resembles a pipe, although I could not find any
evidence of this being a reason for its original selection.
{% end %}

{% question(header="") %} 
There is something powerful about the idea of "resemblance".
How can programs be made to look and feel more like what they do?
What important non-visual resemblances exist and can they be captured?
{% end %}

## References

* [Future of Coding episode 72](https://futureofcoding.org/episodes/072.html):
podcast about Pygmalion, a prototype for a programming environment that uses
"icons", although the original author does not use the term in the strict,
semiotic sense.
* [Ivan Reese's visual programming
Codex](https://github.com/ivanreese/visual-programming-codex): organised
collection of visual programming tools, concepts and discussions.
* [Dave Ackley's Splat](https://github.com/DaveAckley/SPLAT/): **S**patial
**P**rogramming **L**anguage, **A**SCII **T**ext, which I think has some
iconic aspects.
* [Lu Wilson's SpaceTode](https://github.com/TodePond/SpaceTode): a spatial
programming language, which I think has some iconic aspects.

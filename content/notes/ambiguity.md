+++
title = "On ambiguity"
description = "Types and uses of ambiguity"
draft = false
date = 2025-11-19
updated = 2025-11-23
[taxonomies]
tags = ["ambiguity", "language", "design"]
[extra]
math = false
+++

We perceive something as ambiguous when it allows for two or more plausible interpretations.

{% note(title="Draft") %} 
This is a draft and is subject to revision.
{% end %}

## Ambiguity in language

The causes of ambiguity are not restricted to language, but types of
ambiguity are well-defined in that domain, so it's a good place to start.

**Lexical** ambiguity occurs when a word has multiple meanings. In the case
of homonyms, a word can have multiple, unrelated meanings (river _bank_, money
_bank_). In polysemy, a word can have multiple related meanings (tree _branch_,
git _branch_).

**Syntactic** ambiguity arises from an arrangement of words that generates multiple
possible meanings: _the program loads files from the server during startup_
(startup of the program, the server, or both?).

**Semantic** ambiguity comes from a sentence with multiple meanings, which can
be due to many factors: _update the app after the window closes_ (does the user
close the window or does it happen automatically?).

**Endophoric** ambiguity is due to a reference that could refer to multiple
independent parts: _from the example above..._ (which of the preceding examples?).

Some of these cases are related; for example, lexical and syntactic ambiguity can contribute to semantic ambiguity.

## Ambiguity beyond language

Anything that we perceive, and are capable of interpreting, can be ambiguous.

What does this button do? How did the audience respond to my talk? What did
the ending of the movie mean? Why did they wear that particular outfit? What is
causing that smoke in the distance?

In general, an ambiguity involves a one-to-many relationship between what is
perceived and the set of its possible interpretations [^1].

Ambiguity can arise in different phases of learning and discovery:

* Identifying a new ambiguity to investigate (increased ambiguity)
* Mapping a perception to a finite set of valid interpretations (reduced ambiguity)
* Accepting one valid interpretation (resolved ambiguity)
* Introducing alternatives to the accepted interpretation (restored ambiguity)

## Ambiguity as harmful

Ambiguity can be dangerous. When operating industrial machinery, an ambiguous
instruction can be fatal.

Not all ambiguous instructions are so consequential. When a recipe prompts
us to add seasoning "to taste", the instruction is ambiguous with respect to the
quantity, but it is unlikely to harm us. Moreover, it grants us the agency to
experiment and determine our preferred quantity.

Similarly, critics talk of artistic works that "respect their audience", often
meaning that an artist acknowledges that their audience has some degree of tolerance
for ambiguity.

## Ambiguity for discovery

Ambiguity can be understood as a necessary stage in the activity of discovery.

Scientific discovery is often initiated by the recognition of an ambiguity —
a phenomenon that admits of multiple possible interpretations. This prompts the
scientist to seek the interpretation that has the highest probability of being
correct.

Great scientists seek an ambiguity with just as much vigor as they do the
resolution of that ambiguity.

##  Ambiguity in technology

Technology can be ambiguous in different ways. There can be ambiguity of:

* **Function**: multiple interpretations of _what it does_
* **Procedure**: multiple interpretations of _how to use it_
* **Mechanism**: multiple interpretations of _how it works_

A technology may have multiple valid functions and different valid procedures
for its use. This can result in that technology being experienced as ambiguous
by the user, even if the design is intentional and useful. As one becomes
skilled, the sense of ambiguity may be replaced with a sense of possibility.

A technology is discoverable when it enables the resolution of its own
ambiguity. This may coincide with the user recognising the intention of
the designer.

> [The] machine’s complexity was tied less to its esoteric technical
characteristics than to mundane difficulties of interpretation characteristic of
any unfamiliar artifact. [^2]

## Ambiguity in reality

Things that exist in reality have been referred to as "ambiguous".

Enzymes were classically considered to be specific to one substrate, a kind of
lock-and-key relationship. In other words: an enzyme had a one-to-one binding
relationship with its substrate. It is now known that some enzymes exhibit
what scientists call "substrate ambiguity", in which an enzyme can potentially
interact with multiple different substrates.

It should be noted that this is a kind of real ambiguity. When an enzyme
has been demonstrated to bind with multiple enzymes then that is its actual
behaviour. If a new enzyme exhibits substrate ambiguity then it is ambiguous for
the observer, who may have expected more narrow binding behaviour.
Forcing the enzyme's behaviour into the classical lock-and-key model to reduce
ambiguity could well result in a flawed account of reality.

## Ambiguity and generalisation

Both ambiguity and generalisation involve one-to-many relationships:

* **Ambiguity**: one perception with many possible interpretations
* **Generalisation**: one class with many possible instances

The distinction is that the interpretations in a case of ambiguity are mutually
independent, whereas the instances in a generalisation are members of some
class.

<!-- $$A: a \rightarrow \\{x, y,..., z\\}$$ -->
<!-- $$G: g \rightarrow C, \ C = \\{g_1, g_2,..., g_n\\}$$ -->

A generalisation assumes some model that explains the class and its membership.
Without an understanding of the model, a generalisation may have the appearance
of an ambiguity.

## Ambiguity and indeterminacy

An indeterminate expression refers to a thing without specifying all of its
properties [^3].

> You need a Windows 11 machine to follow this tutorial.

— does not specify whether the Windows 11 machine is physical or virtual

> Click "Save" to persist the data from your session.

— does not specify where the session data is persisted

In both cases, there is no obvious ambiguity with respect to the Windows 11
machine or the session data, they are just not exhaustively described.

## Ambiguity in documentation

The general view is that ambiguity in documentation should be eliminated, so
that the user can reliably and safely follow a given document. This is almost
certainly good advice in most cases.

### Relative ambiguity

It may not be possible to eliminate ambiguity (or indeterminacy) from a user
interface or its documentation.

Documentation can, however, be written in a way that is less ambiguous relative to
the user interface.

This frees designers to leverage the virtues of ambiguity, such as efficiency of representation, while respecting user agency.

Documentation balances against, and allows for, ambiguities in an interface.

### Dynamic ambiguity

Another way of thinking of a technical document, is that its reading should
result in a progressive reduction in ambiguity; thus, for example, a document may
introduce a possible failure state that creates ambiguity for the user, before
guiding the user towards a level of understanding that resolves that ambiguity.

There may not always be a linear reduction in ambiguity as a reader navigates a
document. For example, a tutorial may introduce an ambiguous learning situation,
which is resolved as the user develops competence. Then, the tutorial may
prompt the user to apply their new skills in unfamiliar scenarios, reintroducing
ambiguity, and thereby empowering the user to explore new possibilities.

---

> Tell all the truth but tell it slant
>
> — Emily Dickinson

## References

[^1]: Garcia, A., & Medinilla, N. (2007). The ambiguity criterion in software design.
Retrieved from author's [ResearchGate](https://www.researchgate.net/publication/228853962_The_ambiguity_criterion_in_software_design)

[^2]: Suchman, L. A. (2007). _Human-Machine Reconfigurations_. New York: Cambridge. pp. 9.

[^3]: Gillon, B. S. (1990). Ambiguity, generality, and indeterminacy: tests and definitions. _Synthese_, 85: 391-416

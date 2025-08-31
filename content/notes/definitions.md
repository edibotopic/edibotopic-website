+++
title = "Definitions and fixedness"
description = "On different kinds of definition"
draft = false
date = 2025-04-27
aliases = ["/notes/definitions/"]
[taxonomies]
tags = ["philosophy", "communication"]
[extra]
accent_color = "#609f7a"
accent_color_dark = "#88b48e"
banner = "atoms.gif"
toc = true
+++

Sometimes we have a fear of _fixing_ the meaning of an idea. We
think that while our idea remains unfixed, it has maximum
potential and scope.

Everyone else is left with the problem of interpreting our idea. When trying to
build things together, this ambiguity can be a significant impediment to
progress.

This problem often manifests as a discomfort with definitions.
The worry is that a definition can fix an idea in the wrong
state, or deprive us of access to many (implicit) definitions at
once.

It's generally better to know what we're communicating about.
There are many kinds of definition that can help us achieve
this, and any particular definition does not have to remain
fixed.

## Pointing

When I worked on construction sites with my brother — a painter — he would say
things like:

"Sand the _architrave_[^1]."

"Paint the _plinth_[^2]."

At first, I didn't know what he was talking about. He would then just **point**
at the thing and say: "That." In this way, he connected the term and the
concept. This was sufficient for me to get the work done.

My brother had given an **ostensive** definition. 

Not every thing is as easy to point at, like invisible atoms, abstract concepts
and future solutions. Even if we can point at something, we may not have
sufficient understanding to solve certain problems relating to that thing.

If I can sand an architrave it does not mean I can design an algorithm for
creating varied architrave designs. For that, I would need a more precise
formulation of the idea.

An ostensive definition can sometimes take the form of _exemplars_:

> My definition of "robust" is _that codebase_

An exemplar of a concept (good writing) is not the same as a concrete
instantiation (sanded architrave). It exemplifies by adhering to some profile
of attributes that we value, which may go unstated:

> ...it has stood the test of time... it is used in production... it hasn't had
> a serious bug in years...

We might find it easier to agree on our exemplars if we have been explicit
about our notion of "goodness", which takes us beyond mere pointing.

## Dictioneering

The concept of a _definition_ is often associated with the **lexical** definition.
This is the kind of definition that we find in a dictionary.

When I taught science at university, I would sometimes ask students to define a
technical concept like "micelle".

This would prompt a non-trivial number of students to report back a dictionary
definition, like this one from Merriam-Webster:

> Unit of structure built up from polymeric molecules or ions, such as:
> * an ordered region in a fiber (as of cellulose or rayon)
> * a molecular aggregate that constitutes a colloidal particle

Of course, I was asking for something _more_ than a dictionary definition.

Armed with a dictionary definition, someone has a basic idea of what is being
referred to when a term is used in a conventional way.

A university graduate or skilled professional usually has knowledge of a
particular subject far beyond the conventional meaning. The usage of an expert
or craftsperson may even deviate substantially from the everyday sense of a
term[^3].

The best students defined the concept of a micelle in relation to the
coursework that was being examined. They needed to develop a definition that
was more precise to our shared context.

## Precising

When building something — like a new technology — we might ask for it to be
made more "simple".

What does "simple" mean here? We could refer to the entries in
[Merriam-Webster](https://www.merriam-webster.com/dictionary/simple) and they
wouldn't help us very much.

We need a **precising** definition. This makes some general
definition more precise to our specific context. We might want a
_simple_ technology to conform to some of the following
precising definitions:

1. A simple technology has the minimum necessary components, to improve our
   capacity to maintain it
2. A simple technology hides the internal complexity of the system, to provide
   an accessible user interface
4. (1) and (2): A simple technology has the minimum necessary components, to improve our capacity to maintain it and so it is accessible to the user

Many other definitions could be imagined and combined.

Precising definitions — and others: like stipulations — are
often _ameliorative_. They make an idea more suited to our purpose
or more useful to achieve some goal.

Forming a definition may therefore be a normative act, not
merely a descriptive one.

{% note(title="Normativity") %}
An act is normative when it relates to values. For example, we might opt for
something more beautiful, moral or useful.
{% end %}

Milk can be defined conventionally as a _nutritious white liquid_ or in the language of colloid science an _oil-in-water emulsion_. When a food scientist knows that milk can be precisely defined as an emulsion, they can apply general principles from colloid science to understand that system - this is valuable because the scientist values specific ends over others, like measurement, prediction and understanding.

## Stipulating

To overcome obstacles we sometimes need a **stipulative** definition.

Conceptual obstacles can include:

* Not knowing how or why to begin a project
* Lacking a shared understanding of a system
* A philosophical impasse about our goals

A stipulation can be provisional and even false but still valuable. The value
of the stipulation is as much about the process that it initiates and its
foundational role in the building of a cohesive structure or paradigm.

If someone confuses your stipulation for an absolute definition then the
exchange of ideas may prematurely collapse, so you need to communicate
your intention.

Stipulating a flat world could be an interesting design prompt.
It should be minimally controversial as long as people know that
you are talking about game development and not geophysics.

```javascript
let world_is_flat = true // this is fine

let gravitational_acceleration_on_earth = 0 // so is this

world_is_flat = false // it's OK to change your mind
```

A stipulation can be thought of as a _What if?_ question:

> What if x? What follows when x? What can we build, given x?

## Operationalising

When I worked in food science laboratories, I said things like:

> For the sample vegan cheese replacers, "melted" was defined as
> the state when the G" value is observed to exceed the G' value
> during oscillatory shear

This is an operational definition, which makes a concept easier
to measure and/or quantify. In this case, it makes it easy for
those versed in rheology[^4], who know that G" and G' represent
liquid-like and solid-like behaviour, to quantify melting.

One of the most famous operational definitions is associated with Alan Turing,
and can be stated as:

> A machine is intelligent if and only if a human evaluator cannot distinguish between the machine and its human interlocutor when reviewing a text transcript of their conversation

Turing devised his theoretical test of machine intelligence
because he considered the contemporary philosophical debates on
the matter to be unproductive.

The Turing test has now been passed many times. This doesn't
mean that machines have become intelligent, only that some meet
Turing's operational definition of machine intelligence.

The value in any operational definition is that it helps us grasp clearly that
an idea can be tested, and that the justification for that test is sensible.

As we encounter such machine "intelligence", and become aware of
its limitations, we should seek better operational definitions.

---

Acknowledging that definitions are subject to revision or correction can
replace one fear in us with another. Instead of an anxiety of fixedness, there
is a nihilism of definition, in which we reject the possibility that anything
can ever truly be defined.

In either case, this will make us difficult collaborators, and we should become
more comforable with the range and limits of definitions.

---

[^1]: Architrave is the decorative interior moulding that frames doorways.
[^2]: Plinth is the lowest part of a column or wall, which may be decorated
    differently to the rest.
[^3]: An expert's use of a term may become so specific or
    granular that it warrants the use of a different term
entirely, as occurs in the process of what philosophers call
"explication".
[^4]: Rheology is the science of the flow and deformation of
    matter. It can be used to understand and measure
properties like viscosity, hardness and melting.

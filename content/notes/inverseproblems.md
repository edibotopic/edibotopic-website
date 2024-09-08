+++
title = "Inverse Problems"
date = 2024-09-08
draft = false

[taxonomies]
categories = ["notes"]
tags = ["art", "criticism", "literature"]

[extra]
lang = "en"
toc = false
show_comment = false
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

# Forward and Inverse Problems

It is not difficult to make an observation — we do it all the time.
What's difficult is explaining what has been reliably observed.

Much of scientific work involves contriving reliable observations.
An interesting phenomenon deviates from what is typically observed.
This provokes a curiosity that demands an explanation.

## Forward Problems

[Mario Bunge](https://en.wikipedia.org/wiki/Mario_Bunge) used a notation like the following to signify a
question of the form "what y does x cause?":

$$x \to \ ?y$$

This is a _forward problem_.

Bunge gives the example of medical prognosis, which proceeds from an
observation of some condition to a forecast of the symptom development: 

$$condition \to symptoms$$

If a flesh wound is identified it is relatively trivial for
a trained doctor to determine what the consequences will be if
the wound is not appropriately treated.

## Inverse Problems

The corresponding _inverse problem_ is "what x is the cause of y?"

$$?x \to \ y$$

Bunge gives medical diagnosis as a concrete example:

$$symptoms \to condition$$

Anyone who has attempted self-diagnosis understands the
difficulty here.
There can be many symptoms (e.g., cough, sweating, itchiness), of varying degrees of severity, which
often overlap as possible symptoms for many diseases.

{% note(header="Forward and Inverse Problems") %} 
- **Forward**: what observation results from a given set of conditions
- **Inverse**: what are the conditions that result in a given observation
{% end %}

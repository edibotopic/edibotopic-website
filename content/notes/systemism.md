+++
title = "Systemism"
description = "Merging holism and reductionism"
draft = false
date = 2025-09-13
[taxonomies]
tags = ["systems", "philosophy", "epistemology", "science"]
[extra]
math = true
+++

{% note(title="Draft") %} 
This post is a work-in-progress and is subject to revision.
{% end %}

We can experience a system as a whole or analyse it into its constituent parts.
A worldview that privileges the former is called "holism", and the latter
"reductionism". In everyday conversation, holism typically carries a positive
connotation, whereas reductionism is often levelled as a criticism.

Domains that are interpreted as emphasising analysis, most notably science, are
labelled "reductionist", when their approach is taken to be missing something.
In recent years, a critique of food and nutritional science which argued that
they were guilty of "nutritional reductionism", gained significant traction.
The critics instead advocated for various kinds of holism.

The dichotomy between holism and reductionism may be false. A scientist who
appreciates the beauty of plants is more likely to become interested in their
analysis. An artist that is aware of the geometrical patterns in nature may
incorporate them into their artwork. While there are scientific disciplines
that focus on parts (molecular biology), there are also those focused on wholes
(synthetic biology), and many scientists that move between these poles.

There is a verticality in how we contrast holism and reductionism. We imagine
experiencing the whole at a "high level" and the parts at a "low level". At the
higher level, we can "take everything in" but at the low level we "miss the big
picture.". Even stronger, some argue that analysis risks _destroying_ the
whole, with our immediate experience being displaced by a symbolic language of
atoms, bits, molecules, and nutrients.

Instead, reductionism can be thought of as a narrowing of perspective. In that
sense, holism itself is a kind of reductionism, as it narrows our perspective
to the whole, a particular level of analysis. Just as we can be "nutritional
reductionists" (reducing food to nutrients), we can also be "sensory
reductionists" (reducing food to sense experience) or "cultural reductionists"
(reducing food to its socio-cultural role). Each of these is a legimitimate way
to analyse food but none of them is total.

To be more clear, we can think of two general kinds of reduction:

* **Macro-reduction**: from parts to wholes (holism)
* **Micro-reduction**: from wholes to parts (reductionism)

Science often begins with the experience of an interesting phenomenon. A
scientist then attempts to study its underlying causes. When the analysis is
complete, they build a model that connects the causes to the experience. The
investigation not only includes considerations of parts and wholes, but also
attempts to integrate them together in the form of an explanation.

An engineer who develops software moves between writing the code and debugging
the program. They experience a problem with the user interface and then must
analyse the causes of that problem. The development process is a continuous
loop between the parts that make up the program and that whole experience that
the user encounters.

The Argentian philosopher Mario Bunge used the term "systemism" to refer to an
epistemology of systematic explanations that bridges holism and reductionism.
Bunge was skeptical of both holism and reductionism when used in isolation:
reductionists are at risk of irrelevance, while holists are prone to
superficiality.

Imagine that you have made a _causal_ observation of some kind. This could be that:

- Clicking the button made the software crash
- Mixing the chemicals made the solution blue

This is the `macro` level. It is at the top of this diagram and is signified by
$A_0 \to B_0$:

<!--NOTE: three LaTeX (t-b) are Macro, Transition, Micro -->
$$ \Huge
{{{A_0 \atop \downarrow} \atop A_1}
{{\to \atop \ } \atop \to} 
{{B_0 \atop \uparrow} \atop B_1}}
$$

At the bottom there is another causal relation $A_1 \to B_1$ occupying the
`micro` level. The micro is less salient or immediate, and may require deep
reasoning or the use of instruments:

- How is the button implemented and does it produce the bug?
- Which type of chemicals did I mix and what reaction was generated?

Moving between the two levels — micro and macro — is characteristic of:

* **Analysis**: determining the micro-level causes responsible for macro-level
   effects
* **Synthesis**: creating macro-level effects through manipulation of
   micro-level components

It is possible to restrict ourselves to a single level, which may result in the
formation of a narrow worldview:

- **Micro-reduction**: "there is no society, only individuals"
- **Macro-reduction**: "there are no individuals, only groups" 

While the former is commonly referred to as "reductionism", in
contra-distinction to the "holism" of the latter, both are related as
being _kinds of reduction_, requiring a narrowing of perspective and a
denial of systematic relations.

The "macro" does not always refer to a definite level or scale in a physical
sense. It depends on the context of an investigation. The elevated position of
the macro in the diagram should also not be understood as establishing its
priority, just as the lower position of the micro does not always prioritise it
as foundational.

What delineates levels of analysis may be determined
by a specific domain of inquiry, with many levels lying either side
of the given `macro` level.

| Domain    | Micro     | Macro      | Mega            |
|---------- | :---------: | :----------: | :---------------: |
| Economics    | Individuals| Groups      | Societies         |
| Technology  | Components | Sub-assemblies | Interfaces  |
| Software  | Low-level code | High-level code | User interfaces  |

When there is an explanatory gap between two or more levels, the ontological
concept of "emergence" may be invoked. Here, there are a set of coincident
events but no established relation between them. Crucially, this does not mean
that the relation will never be known, only that it remains to be discovered.

In summary, we often have questions of the form "what $x_1$ is the cause of $x_0$?":

$$x_1? \to x_0$$

The $x_0$ could be a scientific observation, a personal goal, or a problem to
fix at the `macro` level.

In **analysis**, the causes or preconditions at the micro-level are identified.
For example, a specimen known to exhibit an effect of interest is scrutinised
with special instruments. To explain why salt has an associated taste we might
measure its chemical dissociation in saliva, which enables the transmission of
signals to the brain. Salts may be observed to have different intensities of
saltiness, prompting measurement of conductivity as the different salts
dissolve into solution.

<!--NOTE: three LaTeX (t-b) are Macro, Transition, Micro -->
$$ \Huge 
{{Salt \atop \downarrow} \atop Na^+ }
{{\to \atop \ } \atop \to}
{{taste \atop \uparrow} \atop signal}
$$

In **synthesis**, the effect (or outcome) is generated under specific
conditions. Inventing technology can help society make progress. Such progress
is bolstered further when an invention has a concrete implementation as a
product. This facilitates exposure to the market, which initiates mechanisms of
feedback that can improve the implementation. Accelerating progress is not just
about getting products to market, it's also about creating conditions for
invention and feedback.

<!--NOTE: three LaTeX (t-b) are Macro, Transition, Micro -->
$$ \Huge 
{{Product \atop \uparrow} \atop Invent }
{{\to \atop \ } \atop \to}
{{Market \atop \downarrow} \atop Progress}
$$

The appearance of emergent properties may highlight an inappropriate conceptual
or methodological framing. For example, water can be interpreted on a strictly
molecular basis as being composed of two kinds of elements existing in a
certain relative proportion and structured by particular forces. This is the
`micro` level. Yet, at the macro level, water has properties like viscosity and
turbulence, which are difficult to predict based on strict appeals to molecular
chemistry. For this reason, scientific fields like rheology are oriented
towards developing specific methodologies appropriate to a relatively `macro`
level.

We are not confined to the any one level. The study of any complex system often
requires moving between analysis and synthesis.

<!--NOTE: three LaTeX (t-b) are Macro, Transition, Micro -->
$$\Large
\overbrace{{{A_0 \atop \downarrow} \atop A_1}
{{\to \atop \ } \atop \to} 
{{B_0 \atop \uparrow} \atop B_1}}^{\text{analysis}} \iff
\overbrace{{{A_0 \atop \uparrow} \atop A_1}
{{\to \atop \ } \atop \to} {{B_0 \atop \downarrow} \atop B_1}}^{\text{synthesis}}
$$

The utility of having a deeper explanation of a phenomenon is not always clear.
When learning chemistry, we might hear about some everyday phenomenon and then
be provided with a chemical explanation. While it is nice to learn new
information, what power does it give us?

Consider the case of pink tea. With some varieties of green tea, it is possible
to generate a bright pink colour if it is brewed with baking soda and milk.
Recipes typically report that baking soda is needed to generate the colour,
without specifying _why_.

At the _micro_ level, baking soda is just an alkalising agent. It elevates pH
resulting in chemical reactions involving tea polyphenols that cause a change
in colour. When milk is heated, there is also a chemical reaction between its
sugars and proteins, which contribute a browning effect that is accelerated
in alkaline conditions.

$$ \Huge {{NaHCO_3 \atop \downarrow} \atop OH^-} {{\to \atop \ } \atop \to}
{{pink \atop \uparrow} \atop rxn} $$

The original macro observation is still valid and may be perfectly sufficient
if we want to make pink tea for friends. Once we have a micro explanation we do
not discard the macro one. Both levels can function together in an explanatory
_system_. In addition, the explanation gives us more power to act.

For example, someone may want to drink pink tea but is concerned about their
sodium intake. We have learned that the recipe does not require baking soda,
however, only something from the _general class_ of alkalising agents. To
increase pH we need something that releases $OH^-$ ions. It is therefore
possible to substitute baking soda for a sodium-free alternative as long as it
releases $OH^-$, like potassium hydroxide ($KOH$).

Imagine that a significant market for pink tea has emerged and there is a
demand to manufacture it at industrial scale. The problem is that there is
significant inter-batch variation in colour and an immediate need to better
control the process. We have learned that a change in pH is critical for
determining the final colour of the tea. Installing a pH measuring device to
ensure that the correct pH is consistently reached would seem prudent.

Finally, changes in colour induced by chemical reactions involving polyphenols,
sugars and proteins are unlikely to be restricted to the peculiar case of pink
tea. Knowledge of the link between chemical reactions and colour changes can be
generalised to many other systems. For example, the browning reaction mentioned
earlier can also be an indicator of the reduced availability of some amino
acids to the body.

---

Bunge, M. (2014/2003). _Emergence and Convergence: Qualitative
Novelty and the Unity of Knowledge_. Toronto: University of
Toronto Press.

Bunge, M. (1979). _Treatise on Basic Philosophy Volume 4, Ontology
II: A World of Systems_. Dordrecht: D. Reidel publishing
Company.

+++
title = "Converting Images to 3D Models"
date = 2023-06-12
update = 2023-10-12
draft = false
weight = 1

[taxonomies]
categories = ["doing"]
tags = ["3D", "programming", "modelling", "learning"]

[extra]
lang = "en"
toc = true
show_comment = true
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

I made a simple web-based tool for converting greyscale images to 3D models.

<!-- more -->

Far more powerful software than this tool — *WriteHeight* — exists but their complexity often presents a significant barrier to newcomers.
Based solely on heightmaps, WriteHeight only requires the user to upload or draw greyscale images.
The 2D image is then converted into a 3D model that can be inspected or downloaded.
This post explains the motivation behind WriteHeight, what it can do and why it still needs a lot of work.

Play around with [WriteHeight](https://edibotopic.github.io/write-height/) or [read the source code](https://github.com/edibotopic/write-height).

## Making 3D Easier

While not everyone self-identifies as an artist people still draw in a variety of contexts.
I work mostly with scientists who — while not usually artistically-trained — routinely produce drawings in the form of flow diagrams and graphical abstracts.
Whether generated on paper or on a screen, these drawings are an important method of thinking through our ideas and communicating them to others. Concepts can also be represented in 3D, but this traditionally requires a mastery of techniques like shading and perspective.
Today, powerful (and free) software like [Blender](www.blender.com) allows the direct manipulation of models in 3D space, and there is an endless supply of online learning resources to get people started.

My initial forays into 3D were prompted by online teaching.
The difficulty in the remote delivery of STEM content lies more with the laboratory practicals than the lectures, and I wanted to learn how to make interactive 3D versions of these labs.
At the same time, I was involved in research projects on the 3D printing of food.
Whether in the context of teaching or research, I found that scientists were reluctant to engage with 3D modelling.
Research papers on topics like 3D food printing often give minimal attention to the design of a given model or the specific purpose of its structure.
The apparent discomfort with 3D design is perhaps unsurprising, given that the transition from 2D to 3D introduces marked complexity.
A 3D scene can require the management of new kinds of elements — like cameras and lights — that are not required when making a 2D image.
Well-constructed scenes can look ugly if the lighting is wrong.
A model may not render or print correctly if the topology is flawed. 
There are different paradigms of modelling, including the direct modelling approach favoured by digital artists and the parametric approach used by mechanical engineers.
Blender is also a hybrid application — combining (at a minimum) a 3D modeller, animation suite, video editor and compositor — and this vast range of functionality is evident in its interface.
Despite all these complexities, much can be learned about 3D modelling from adept teenagers with small YouTube channels.

![UI of WriteHeight](/figs/writeHeightUI.png "UI of WriteHeight") *User interface of WriteHeight showing the 2D heightmap (top-left, inset) and the resultant 3D mesh (main).*

For me, one of the most intuitive paths for transitioning from drawing in 2D to modelling in 3D is the **heightmap**.
While this approach has its limitations, I think it is a good entry-point to 3D that can produce interesting results.
A heightmap is simply a 2D greyscale image, with an x- and a y-axis.
The relative lightness of pixels in that 2D image can be converted to vertex heights in a 3D model, yielding the third z-axis.
Black pixels become the lowest regions in the model and white pixels the highest regions.

## Existing Software

Most software with 3D capabilities, including dedicated modellers like Blender and game engines like [Unity](https://unity.com/), can generate models from heightmaps; however, if this is all that you want to achieve they are probably overkill.

A separate application is usually required to make the greyscale image that will be transformed into a 3D model.
There are dedicated applications for generating heightmaps from real terrain elevation data, such as [Tangram Heightmapper](https://tangrams.github.io/heightmapper/). Another approach is that of
[JSplacement](https://archive.org/details/jsplacement-1.3.0-allplatforms_202108), which generates random heightmaps from *greebles*, smaller greyscale parts that are arranged and combined into larger heightmaps.
With a modern digital drawing app like [Krita](https://krita.org/en/) the range of possible heightmaps is only limited by your skill and imagination.

Ephtracy's [Aerialod](https://ephtracy.github.io/index.html?page=aerialod) is dedicated to the specific task of rendering 3D models from heightmaps and comes with a range of options to generate beautiful renders.
Most of my initial heightmap experimentation started with Aerialod, due to its elegance and simplicity.
However, I am now a Linux-user and at time-of-writing Aerialod is only available as a Windows-only download.

For my purposes, I wanted something that was:

1. Dedicated to making 3D models from heightmaps
2. Accessible on any device (computer, tablet, phone)
3. Useable in a browser with no app download required

## WriteHeight

As an application WriteHeight is simple.
It opens with a viewport showing a random 3D model, which can be inspected using mouse, touch or arrow keys.
The corresponding 2D image from which the model was generated is shown inset.
The 3D model is rendered using the [babylon.js](https://www.babylonjs.com/) game engine.
Buttons are included below the viewport, one allows for the generation of further random models from a finite collection.
Another allows a user to upload their own heightmap image, which will then be rendered into an inspectable 3D model.
Models can then be downloaded in different formats, including `.stl` (good for 3D printing) and `.glb` (good for 3D rendering).

{% warning(header="Warning") %} 
The drawing tools described below are deprecated as of `v0.1.2`.
{% end %}

For convenience, two *very basic* tools are provided with WriteHeight to generate and download heightmaps.
Clicking the `pencil` button opens a greyscale drawing tool — this reflects the initial goal of **Write**Height, which was to *write* heightmaps that could be converted into 3D.
Clicking the `walking` button opens a random walk visualisation that algorithmically generates a greyscale image — this reflects an ambition for WriteHeight to (eventually) offer a set of simple algorithms for the procedural design of 3D models.

## Fixing Downloads Bug (v0.1.2)

{% note(header="Update") %} 
The bug described in the original post in which multiple downloads were being
triggered has been resolved as of `v0.1.2`, as described below.
{% end %}

By v0.1.0 WriteHeight worked mostly as expected.
However, there was an annoying bug that caused multiple 3D model files
to download instead of a single model.

### Bug Description

Each time a user uploaded a greyscale image a 3D model was generated on
screen.
If another model was subsequently loaded the previous model would *visually* disappear, 
which is the intended result.
Then when a `download` button was clicked files for both the visible model and any previous models that had "disappeared" would be downloaded.

### Bug Fix

The problem was associated with the UI texture, which included the download
buttons, and how it was repainted each time a new model was generated.
A button labelled `STL` would trigger the download of an .stl file.
Uploading a second model repainted the UI over the existing UI.
This meant that there was actually **two** superimposed `STL` buttons.
Clicking then triggered download events associated with the first 
and second button, leading to the download of two models.

To prevent this from happening, each time a new model is loaded we need to
**get** the extant UI, **dispose** of that UI and **set** the `UI` variable to `null`:

```js
let guiCreate = () => {
    while (scene.getTextureByName('UI')) {
        let UI = scene.getTextureByName('UI')
        UI.dispose(false, true)
        UI = null
    }

    let advancedTexture =
        BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI')
    // UI code here
}
```

With these changes the download bug has been fixed and WriteHeight is
now *good enough* to again recommend as a convenient tool for creating and
downloading 3D models.

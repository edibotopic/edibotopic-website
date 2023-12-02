+++
title = "New Music: Leisure Sickness (made with Arroost)"
date = 2023-12-02
draft = false
weight = 0

[taxonomies]
categories = ["doing"]
tags = ["music", "art", "technology"]

[extra]
lang = "en"
toc = true
show_comment = false
math = true
mermaid = false
cc_license = false
outdate_warn = false
+++

There's a new Curtsy Rehearsed album called _Leisure Sick_.
I made it using an early-version of the node-based Arroost tool.
Several of the songs are built entirely from live-recorded vocal samples.

<!-- more -->

# New Ways to Do Things

<iframe width="100%" height="315"
    src="https://www.youtube.com/embed/S3FayhhCjNo?si=BoWw9tHqKhInDquD"
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen></iframe>

[Previously](@/blog/2023-07-08-curtsy-rehearsed.md) I wrote about my
[Curtsy Rehearsed](https://curtsyrehearsed.bandcamp.com/) project. 
I had been quietly releasing music under this name and was surprised
to have the [tiniest amount of local media
attention](https://www.echolive.ie/entertainment/whatson/arid-40902209.html)
last year.

The plan was — and still is — to wind down the Curtsy Rehearsed
project by the end of 2023.
In the meantime, my discovery of [Arroost](https://arroost.com/) led
to a surprise burst of music-making.

Arroost was a new way of making music for me.
It made the process more light and joyful than some
of my recent painstaking
[DAW](https://en.wikipedia.org/wiki/Digital_audio_workstation) sessions.
In the end, I became quite addicted to Arroost and
releasing a finished project was the only way for me to stop.

# Arrows to Sounds

Arroost consists of an infinite canvas on which nodes can be placed.
When a newly placed node is clicked it starts to record.
Make a sound then click the node again and the recording is complete.
That node will now play the recording each time it is triggered.

There are also special nodes for controlling the Canvas.
At time of writing, these _control nodes_ (my term) include:

- **Add**: adds a node to the canvas
- **Connect**: connects two nodes
- **Remove**: removes a node or connection
- **Annotate**: adds text next to a block

Individual nodes can be connected through arrows.
Nodes can be arranged in sequences using these arrows to create patterns.
Given three nodes $A$, $B$ and $C$, a loop can be created if there
are the arrows $A \to B$, $B \to C$ and $C \to A$.
Click a node in a loop and the loop will play continuously.

In the image below a loop can be seen connected by red arrows.
Currently the bottom node in the loop is being triggered.
This will be followed by the top-right node and so on.

![Arroost interface](/figs/arroostUI.webp "UI of Arroost") *User interface of Arroost showing control nodes (Add, Connect, Remove and Annotate) and example sound structures (single node, node sequence, node loop). Correct as of 2023-12-02.*

There are some other nuances in the design:
empty nodes can be used to create _rests_ within sequences;
the start time of a recorded sample can be offset;
arrows can be coloured to control the flow of sounds.
Many of these features can be discovered naturally through play.

[Watch the creator of Arroost — Lu Wilson — demo the tool at a live
event in London (includes a brief snippet of my first Arroost recording!)](https://www.youtube.com/watch?v=cF2OF75ivZM) 

The core of Arroost involves connecting nodes.
This makes Arroost an easy and intuitive live-looper.
By _easy_ I mean relative to using a DAW like Reaper:

![Reaper DAW with Super8 Looper](/figs/super8.webp "UI of Reaper with Super8") *User interface of Reaper DAW with four vocal tracks routed into an instance of its Super8 looper. This works great but it takes some setting up and the interface is busy.*

Despite its apparent simplicity, Arroost can be used to create
some complex sounds.
Only live vocal samples recorded into my microphone were used to
create the following video, in which you can see the nodes and
connections in action:

<iframe width="100%" height="315"
    src="https://www.youtube.com/embed/g_tYFdUn3G4?si=t2v4UdP_IrFdtY9d"
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen></iframe>

# Becoming Unlocked

_Cans in the Woods_ is included with eight other songs in _Leisure Sickness_.
The album is free to download but you can pay more if you'd like.

<div style="text-align: center">
<iframe style="border: 0; width: 360px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1240561687/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" seamless><a href="https://curtsyrehearsed.bandcamp.com/album/leisure-sickness">Leisure Sickness by Curtsy Rehearsed</a></iframe>
</div>

_Leisure Sickness_ is a bit of a departure from my other albums,
primarily because of its emphasis on live-looped vocals.
Three of the songs consist entirely of my sampled voice.

There are vocals strewn across all of my albums but usually
as minor details and often warped beyond recognition.
Arroost unlocked me with respect to vocals through its:

- **Emphasis on live recording**: it's possible to record samples using
Arroost — and I did — but it defaults to mic input.
It is not possible (currently) to upload pre-existing samples or use MIDI.
The quickest approach is to just sing, hum, chant, clap and bang.
I could record 5 seconds of singing with 4 dodgy seconds and only 
take the 1 second I liked for the rest of the song.
- **Limited control of mix quality**: one of the factors that makes 
recording vocals difficult is the need for noise-reduction.
Usually this requires recording some ambient noise and subtracting it
from the recording.
This needs continuous tweaking and can result in poor quality audio if
you're not in a good recording environment (I rarely am).
With Arroost I couldn't do noise reduction, so I stopped caring and
just recorded.
- **Coupling of audio and visuals**: I normally make songs that are built
from hundreds of samples and recordings.
When people listen I sometimes get the impression that they
don't know exactly _what I did_ — it's a black box.
Arroost generates a tightly-coupled combination of audio _and_ visuals.
Even if sharing a finished set of nodes and connections, there is
an embedded performance.
I probably couldn't sing at your wedding but I can put vocal snippets
together into an interesting structure — I think Arroost helps _show_ this.

# "Share Scrappy Fiddles"

Encouraged by the developer [Lu Wilson](https://www.todepond.com/) calling for everyone to 

> Normalise sharing scrappy fiddles

I initially shared the tracks on Mastodon as videos.
All in all, I recorded about 60 minutes of music in three weeks.
I took the best of the material shared on Mastodon and tried to improve the sound quality
_just a little_.
This mainly involved making the recordings slightly louder and removing some
annoying clicking noises.
For songs built from vocals I also added some reverb and saturation to
"fill out" the sound.
This is a little more obvious in the recording below:

<iframe width="100%" height="315"
    src="https://www.youtube.com/embed/Er_r70gzk-4?si=aAsVocxgyu8Ylj1j"
    title="YouTube video player" frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen></iframe>

Lu is continuing to work on Arroost.
From talking with them, the tool will likely evolve considerably.
While writing this post I setup some basic nodes and connections in
Arroost.
Soon after I realised that arrows could now be coloured and that
this affected the flow of sound!!!
This arrow-colouring novelty immediately made me want to stop writing
and start experimenting with Arroost again.

I'm not sure where Arroost will figure in my music-making future.
Right now, it is the best tool I have ever encountered for rapidly
iterating on song ideas in an experimental fashion.
This is invaluable for someone like me, who lacks any formal training
in music.

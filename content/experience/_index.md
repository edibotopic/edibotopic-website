+++
title = "Experience"
description = "Jobs, publications, and education."
template = "prose.html"

[extra]
title = "Experience"
subtitle = "Jobs, publications, and education."
+++

<input type="radio" name="experience-tab" id="tab-work" class="tab-radio" checked>
<input type="radio" name="experience-tab" id="tab-publications" class="tab-radio">
<input type="radio" name="experience-tab" id="tab-education" class="tab-radio">

<nav class="experience-tabs">
  <label for="tab-work" class="tab-button">Work History</label>
  <label for="tab-publications" class="tab-button">Publications</label>
  <label for="tab-education" class="tab-button">Education</label>
</nav>

<div class="tab-panel" data-tab="work">

## Work history

I've worked as a researcher, academic, and technical author.

{{ collection(file="work.toml") }}

For more information, have a look at my
[LinkedIn](https://ie.linkedin.com/in/shane-crowley-a43a6a6b).

</div>

<div class="tab-panel" data-tab="publications">

## Publications

I've published over 60 articles on topics ranging from educational software and
food science to philosophy. My publications have been cited over 1700 times.
Four of my articles have over 100 citations.

{{ collection(file="publications.toml") }}

For more, visit my [Google Scholar
profile](https://scholar.google.com/citations?hl=en&user=vWZ2uMAAAAAJ&view_op=list_works).

</div>

<div class="tab-panel" data-tab="education">

## Education

I have a PhD in food science and also have a degree in philosophy.

{{ collection(file="education.toml") }}

</div>



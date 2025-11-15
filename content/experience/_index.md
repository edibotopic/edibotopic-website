+++
title = "Experience"
description = "Jobs, publications, and education."
template = "prose.html"

[extra]
title = "Experience"
subtitle = "I've been a teacher, researcher, and technical author."
+++

<input type="radio" name="experience-tab" id="tab-career" class="tab-radio" checked>
<input type="radio" name="experience-tab" id="tab-publications" class="tab-radio">
<input type="radio" name="experience-tab" id="tab-education" class="tab-radio">

<nav class="experience-tabs">
  <label for="tab-career" class="tab-button">Career</label>
  <label for="tab-publications" class="tab-button">Publications</label>
  <label for="tab-education" class="tab-button">Education</label>
</nav>

<div class="tab-panel" data-tab="career">

I was a tenured University academic for almost eight years
before transitioning into the software industry.

{{ collection(file="career.toml") }}

For more information, have a look at my
[LinkedIn](https://ie.linkedin.com/in/shane-crowley-a43a6a6b).

</div>

<div class="tab-panel" data-tab="publications">

I've published over 60 articles on topics ranging from educational software and
food science to philosophy. My publications have been cited over 1800 times.
Four of my articles have over 100 citations.

Here are some examples:

{{ collection(file="publications.toml") }}

For more, visit my [Google Scholar
profile](https://scholar.google.com/citations?hl=en&user=vWZ2uMAAAAAJ&view_op=list_works).

</div>

<div class="tab-panel" data-tab="education">

My PhD is in food science but I have also pursued formal education in
philosophy, computer science, and education.

{{ collection(file="education.toml") }}

</div>



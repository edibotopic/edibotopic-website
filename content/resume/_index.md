+++
title = "Resume"
description = "Jobs, publications, and education."
template = "prose.html"

[extra]
title = "Resume"
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

I was a University academic for almost eight years
before transitioning into the software industry.

{{ collection(file="career.toml") }}

For more information, have a look at my
[LinkedIn](https://ie.linkedin.com/in/shane-crowley-a43a6a6b).

</div>

<div class="tab-panel" data-tab="publications">

I've published about 60 articles in journals and books. I have been cited over 1800 times, with four of my articles receiving over 100 citations.

For a full list, see my [Google Scholar
profile](https://scholar.google.com/citations?hl=en&user=vWZ2uMAAAAAJ&view_op=list_works).

{{ collection(file="publications.toml") }}

</div>

<div class="tab-panel" data-tab="education">

My PhD is in food science but I have also studied philosophy, computer science, and education.

{{ collection(file="education.toml") }}

</div>



+++
title = "Documentation strategy and coordination"
description = "I coordinated docs for Ubuntu projects."
date = 2026-01-01

[extra]
image = "/docs-sets.png"
publication_name = "Pictured: official docs for WSL, authd, and ADSys"
publication_url = "docs.ubuntu.com/"
tags = ["WSL", "authd", "ADSys", "docs"]
+++

{% tip(title="My role in developing this documentation") %} 
While embedded in multiple engineering teams, I developed
documentation strategy, implemented documentation tooling, and
contributed original documentation.
{% end %}

I was primarily responsible for three main documentation projects:

* [Ubuntu on WSL](https://documentation.ubuntu.com/wsl/stable/): the Ubuntu distribution for the Windows Subsystem for Linux (WSL)
* [authd](https://documentation.ubuntu.com/authd/stable-docs/): a tool for cloud authentication on Ubuntu
* [ADSys](https://documentation.ubuntu.com/adsys/latest/): a client for bridging Ubuntu systems with Active Directory

Each project used Sphinx with MyST-flavoured markdown.
The sources were hosted publically on GitHub.
The documentation was published using Read the Docs.

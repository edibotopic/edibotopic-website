+++
title = "Creating Pseudonyms on Code Forges"
date = 2023-12-08
# updated = 2023-05-18
draft = true
weight = 1

[taxonomies]
categories = ["explaining"]
tags = ["git", "code forge", "cli"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

This short post covers how to create a pseudonym on a code forge.
I will be using Codeberg — a non-profit platform — as an example.

<!-- more -->

# Your Complex Identity

Like me, you probably use GitHub to develop your software projects.
You might also use other popular code forges, like GitLab and
SourceHut.

A user profile on one of these services can become a big part of your
online identity.
It can also be a showcase for your work in a professional context.

Our identities are complex, however, and sometimes it might be
necessary to compartmentalise a little.
Maybe you don't want your open-source projects in personal blogging,
erotic fiction _and_ embedded systems programming to all be co-located.

# Maintaining Anonymity

What you might want to achieve is a complete separation between two or more
identities.

You want a _pseudonym_ and this requires some immediate actions:

- Use a different username
- Setup a new email address
- Don't reference personal details

There are some additional things to consider that are less obvious.

## Git User Name and Email

At some point you probably set a global configuration for `git` on your device(s):

```bash
git config --global user.name "myoldname"
git config --global user.email "myoldemail@gmail.com"
```

Let's say you've created a repo on Codeberg with the source code
for your new secret website.
You clone it to `secret-website` on your local machine:

```bash
git clone https://codeberg.org/mynewname/web-src.git secret-website

cd secret-website
```

Now you add something to your secret website that you don't want
anyone to see:

```bash
git add secret.html
git commit -m "added new secret post"
```

Before a `git push` to the Codeberg repo you prudently check the commit history:

```bash
git log

# commit 0242446c21a4b3dcefagcf22f232a91bac323b02
# Author: myoldname <myoldemail@gmail.com>
# Date:   Mon Nov 2 13:43:24 2023 +0000
#
#     added new secret post

```

Ah!
Your old identity is embedded in the commit history.
If you perform a `git push` your identity will now be visible in the
commit history on the <u>public</u>, remote repo.

Let's start again.

First reset to the previous commit:

```bash
git reset --hard <older-commit-hash-from-git-log>
```

Now change the user configuration details for the repo:

```bash
git config user.name "mynewname"
git config user.email "mynewname@gmail.com"
```
{% note(header="Global and Local") %} 
Note: a `--global` flag is not used in the above commands.
{% end %}

If you `git add secret.html && git commit "added new secret post"` you should now see something like this when you check the commit history:

```bash
git log

# commit 5253249d42f2c2dcfdbcdf35f144422fbd215a10
# Author: mynewname <mynewemail@gmail.com>
# Date:   Mon Nov 2 13:53:24 2023 +0000
#
#     added new secret post

```

Success!
Your identity won't be revealed through your commit history.

## Hosting on Codeberg

In addition to trying out a new identity you also wanted to try out a new
code forge.
Perhaps you don't trust mega corporations with your data and are
bothered by their tendency to feed your work into AI training
models.

After some research you settled on Codeberg and want to host your new
secret website of static content using Codeberg pages.
Setting up a profile on Codeberg is trivial and should be familiar
to anyone who has used GitHub or a similar site.
Hosting the website on Codeberg might be feel different, however.

Here I will outline one approach to doing this successfully but there
are others.

Before you do anything make sure you are in the `secret-website`
directory:

```bash
pwd #/home/<username>/dev/secret-website
```

Run `touch .gitignore && vim .gitignore` then add any directories that will contain build outputs:

```txt
/dist/
/pages/
```

I am assuming that there will be a static-site-generator in the
picture and that there will be a build step that is invoked with
`ssg build`:

```bash
ssg build #builds static files in /dist/
ls dist #icon.png index.html style.css
```

What we want to do is copy the files from `dist` into a directory
called `pages`.
We then want to push the contents of `pages` into a 
Codeberg repo that is _distinct from the one holding the source
code of the website_.

On Codeberg create a separate repo called `web-pages`, give it a `readme` and then clone it
into your `secret-website` directory:

```bash
pwd #/home/<username>/dev/secret-website
git clone https://codeberg.org/mynewname/web-pages.git pages
```

You should now have a parent directory (`secret-website`) containing the source
files and a child directory (`pages`) that will hold the output of `ssg build`.
Both are `git` repos that will have separate commit histories
and Codeberg remotes.

Check that your user name and email in the `pages` directory
are correct:

```bash
cd pages
git config user.name #mynewname
git config user.email #mynewemail@gmail.com
```
Now move back to the parent directory and do a recursive copy from `dist` to `pages`:

```bash
cd ..
pwd #/home/<username>/dev/secret-website
cp -R dist/* pages
```
Run `git -u push origin main` to push your **source code** to _https://codeberg.org/mynewname/web-src.git_

Change to the `pages` directory and commit the **static files** to _https://codeberg.org/mynewname/pages.git_


```bash
cd pages
git add secret.html
git commit -m "add secret post to website"
git push -u origin main
```

If you access the `pages` repo on Codeberg you should see a **visit
page** button that will take you to a site with the url _mynewname.codeberg.page_

## Domain Privacy Protection

If you want a custom domain for your secret website then you need
to add a `.domains` file to your `pages` repo.

This is a plaintext file.
The first entry is the address of your custom domain.
Subsequent entries will be redirected to the custom domain.
It might look something like this:

```txt
nynewname.com
www.mynewname.com
mynewname.codeberg.page
```

When you are buying a domain make sure that the domain name registrar
provides **domain privacy protection**.
If you register a domain _without_ privacy protection then
identifying details you entered during registration can be found by
anyone using a service like [Whois Lookup](https://www.namecheap.com/domains/whois/).

Buying a domain with [namecheap](https://www.namecheap.com/) comes
with free privacy protection, for example.

You will need to set up DNS for your new domain.
This is normally done through your user profile on a service like namecheap.
This is outside the scope of this post but you can refer to the
official [Codeberg pages docs](https://docs.codeberg.org/codeberg-pages/) for more information.

# Postscript

I completed the above steps when creating a personal website
recently.

My experience with Codeberg has been positive so far.

The most difficult aspect was getting Codeberg pages working,
as I am used to simply building into a `/docs/` folder at the root
of a GitHub repo.
Only a few changes in the settings for a GitHub repo are then required
to get the website live.

While the initial setup on Codeberg is more awkward it is not too
difficult and gets easier thereafter.

It's too early to compare Codeberg and GitHub — aside from my greater
level of comfort with the former's data policy.

The most immediate thing I noticed was the reduced visual noise, as
there are far fewer advertisements and social media features.

The second thing is that once you push the code for a website to
Codeberg changes appear on the website almost instantly (at least for
me).

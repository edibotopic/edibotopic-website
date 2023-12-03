+++
title = "Rethinking How I Manage Calendars"
date = 2023-10-25
draft = true

[taxonomies]
categories = ["technical"]
tags = ["productivity", "time management", "plaintext"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

This weekend I spent a surprising amount of time
rethinking my approach to calendars.

<!-- more -->

## Over-relying on a work calendar

My current workplace — a university — relies heavily on 
the Microsoft productivity suite.
During my time here I have relied mostly on Outlook
for scheduling and time-management.

This setup has not been optimal and I wanted a change
for the following reasons:

- **Maintaining boundaries:** Outside of work, I want to 
avoid opening work emails when checking my schedule
- **Avoiding clutter:** People at my organisation routinely 
clog my calendar with events that aren't relevant to me
- **Lowering friction:** The Outlook UI is slow to load 
and cumbersome to use
- **Consolidating agendas:** I maintain a todo.md file
separately to the Outlook calendar, which causes some
duplication and wasted effort
- **Respecting non-work:** I wanted to decouple my 
personal life and hobbies from the work schedule 

I settled on a plaintext solution (.org files) that is
integrated with local and remote GUI applications.

## Plaintext agenda with GUI calendar

I write agenda files using Emacs' Org-mode.
An example looks like this:

```md
#+TITLE: Agenda: Work

* Admin
** TODO 📅 Finalise Schedule
SCHEDULE: <2023-10-22 Mon 15:00-16:00>

* Meetings
** TODO 🤝 Final-year student 
Wants to discuss PhD opportunities
SCHEDULE: <2023-10-23 Mon 12:00-13:00>

* Lectures
** Food ETC
*** TODO 🏛️ Session 5
Epistemology: nutritional reductionism
SCHEDULE: <2023-10-25 Wed 16:00-17:00>
```

In my Emacs config, the following ensures
that each time I save an `.org` file in my
`/agenda/` directory it is exported to an
`.ics` file.
This "iCalendar" format is standardised and
can be integrated with multiple calendar
applications.

```lisp
;; Config org-agenda calendar for export
(defun export-org-to-ics ()
  "Export Org agenda file to ICS format."
  (let ((org-file (buffer-file-name)))
    (when (and org-file
               (string-suffix-p ".org" org-file)
               (string-prefix-p "/home/user/Dropbox/path/to/agenda/" org-file))
      (let* ((base-dir (file-name-directory org-file))
             (export-dir (concat base-dir "export/"))
             (file-name-no-ext (file-name-sans-extension (file-name-nondirectory org-file)))
             (ics-file (concat export-dir file-name-no-ext ".ics")))
        (make-directory export-dir t) ; Create export dir if not there
        (org-export-to-file 'icalendar ics-file)))))

(add-hook 'after-save-hook 'export-org-to-ics)
```

The default agenda view in my Doom Emacs can be accessed with 
`spc o A a`.
It's acceptable but does not support time blocks, which is a
basic feature found in most modern calendar GUIs.

I am using Ubuntu as my OS.
The default Gnome calendar is a nice, minimal GUI application
that supports `.ics` calendar imports.

Select `Manage your calendars > Manage calendars > Add Calendar...`.
Navigate to a local `.ics` file, then give the calendar a name and colour.

With this setup, editing one or more agenda files will instantly
update the calendars shown in the GUI.

## Integration with remote calendars

If you want to access your calendar across multiple devices you
can use Google calendar.
I like this option because there are Google calendar widgets
for Android that are really convenient.
The steps are as follows:

1. Go to a Google calendar
2. Scroll to **Other calendars**
3. Click **+** icon to **add other calendars**
4. Choose the **From URL** option
5. Copy the url of an .ics file from Dropbox
6. Change the **df=0** suffix to **raw=1**
7. Paste the modified url and add the calendar

There are special Emacs plugins for managing calendar integrations
but I did not find them to be necessary.

If you want an alternative to Google then I highly recommend
Open Web Calendars, which also allows self-hosting.

## Rejecting the SaaS alternatives

I briefly trialled about six dedicated calendar and productivity apps
before settling on the approach described above.

Each had a swanky website and came heavily-recommended by
posters on Reddit and HackerNews.

Here are some of the reasons I rejected the apps:

- **No support for .ics imports**. 
Some apps emphasised their integration with other
calendar software but not this standardised calendar format.
This meant I could not sync with files exported from emacs.
- **Poor mobile integration**.
In one app I could import an `.ics` file to their desktop
app but not the mobile app, and any file uploaded 
to the former would not be visible on the latter.
- **Basic features behind a paywall**.
Another app, which had a beautiful UI and a tonne of
features I didn't need, required me to pay monthly
if I wanted to do something as simple as set the 
duration of an agenda item.

The majority of the apps I encountered had a tiered
pricing system with a subscription-based payment model.
Paying the subscription is probably justified if you
have the money and want advanced productivity features.

It's disappointing that there is an abundance of SaaS
productivity tools with data-tracking capabilities and
AI-enhanced schedule organisation but so few calendar apps
that just work really well as calendars.

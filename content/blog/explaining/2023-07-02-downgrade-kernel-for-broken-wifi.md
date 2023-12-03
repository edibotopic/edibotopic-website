+++
title = "Resolving Wi-fi Adapter Issues After a Linux Upgrade"
date = 2023-07-02
# updated = 2023-05-18
draft = false
weight = 1

[taxonomies]
categories = ["explaining"]
tags = ["linux", "how-to", "troubleshooting"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

Downgrading the kernel on Linux can help get your internet back.

<!-- more -->

## Problem

These days I do all of my work on Linux (Ubuntu).
For wi-fi I use a cheap USB adapter.
This last Friday the adapter stopped working.
I had several remote meetings scheduled for the following
Monday, so I needed a relatively quick solution.

Eventually I took the approach of downgrading my [kernel](https://ubuntu.com/kernel).
A summary of the relevant terminal commands is included below:

```bash
# check what kernel is used by the system
uname -r
# list all installed kernels
apt list --installed | grep linux-image
# find info on the kernel module for your wi-fi adapter
dkms status
# reboot, hold SHIFT and change kernel from the Grub menu
reboot
# remove unneeded kernel to persist the change
sudo apt remove linux-image-your-unneeded-kernel-id-here
```

## Troubleshooting

Initially, I went through a number of conventional troubleshooting steps that were unsuccessful:

1. Plug the adapter into different USB ports
2. Reboot the computer
3. Run updates

At this point I contemplated buying a
replacement adapter, but they are more 
expensive than I thought, so
I returned to troubleshooting.

What was the root cause of this problem?
I had recently upgraded to
[Ubuntu 22.04.2 LTS (Jammy Jellyfish)](https://www.releases.ubuntu.com/jammy/)
on two devices: a laptop and a PC.
The upgrade caused no issues on the laptop but on PC it degraded the wi-fi;
ultimately, the wi-fi stopped functioning altogether.
As I only use an external wi-fi adapter on the PC, I figured there
was a driver compatibility issue introduced during the upgrade on that
device.
So I tried another approach:

4. Attempt reinstallation of drivers

The company that sold the adapter had a driver installation script on
their website for my exact adapter. 
Every attempt to use this script failed,
however, presumably because it was outdated.

I then opted to:

5. **Downgrade the Linux kernel**

## Downgrading

First I identified the active kernel on the system:

```bash
uname -r
```

This outputted 5.19.
The presence of any other installed kernel (images) could also be checked with:

```bash
apt list --installed | grep linux-image
```

This showed that an older kernel — 5.15 — was installed, in addition to 5.19.
*Note: the output was more verbose than stated above (i.e., 5.15.0-76-generic) but you get the idea.*

The following command listed the kernel modules and their installation status:

```bash
dkms status
```

One of the modules was for a wi-fi adapter:
`rtl8821CU/5.4.1, 5.15.0-76-generic, x86_64: installed`.
The code beginning `5.15` indicated that the module was built for the older
kernel, which was not currently running on my system.

To downgrade the kernel the computer first needed to be rebooted:

```bash
reboot
```
Holding `shift` during the reboot opened the 
[Grub](https://adamtheautomator.com/ubuntu-grub/) menu.
This is a minimalistic text-based interface that enables switching
between different kernels installed on the system.

After selecting `Advanced options for Ubuntu` I saw that
the two kernels were listed as expected — 5.19 (active) and 5.15 (desired).

The desired version could be selected using the arrow keys and activated
with the `return` key.

This booted me back into the login screen and — much to my
relief — the wi-fi connected automatically after login.

## Removing a Kernel

Rebooting again at this point would have reverted the system to the newer kernel
(in this case 5.19), which would cause the same wi-fi connection issues to recur.

To prevent this from happening the newer kernel needed to be removed,
at least for now.

This was achieved using the following command, with the full kernel
name taken from the output of `apt list --installed | grep linux-image`:

```bash
sudo apt remove linux-image-5.19.0-46-generic
```

After a fresh `reboot`, checking the active kernel again with `uname -r`
confirmed that the 5.15 kernel was still being used.

## "First Download X"

If trying to troubleshoot this kind of problem yourself you might be
frustrated to find that many of the available help guides require you to have
internet access on your device.
For example, you might be asked to run a command like `sudo apt
update` or to `git clone` an online repo, neither of which will
be possible with your faulty wi-fi.

In my case, the wi-fi router was located downstairs,
the PC was too large to move and the ethernet cable
was too short to connect.
There were no alternative wi-fi adapters in the house 
and no obvious retailer nearby that might supply one.
My only option was a *wi-fi hotspot*.

I was able to do this using an Android phone via bluetooth.
Without going into the details — as they may vary by device — I 
activated bluetooth on my phone and then made it available as a 
hotspot through the *Network and Internet* settings.
I already had [Blueman](https://github.com/blueman-project/blueman) 
Bluetooth manager installed on my PC, so running `blueman-manager` 
opened a GUI that included my phone as a selectable device.
Once a connection was made wi-fi was now accessible on my PC through
the phone (albeit with a crawlingly-slow internet speed).
 
## Alternative Solutions

The above solution was adequate for *me*, as I urgently needed a 
quick fix over the weekend so that I could fulfill work 
responsibilities by Monday morning.

If you have more time on your hands and do not wish to downgrade
your kernel you might want to try to find an appropriate
driver for your adapter.

If you search for drivers by their code (i.e., rtl8821CU) you might
find [GitHub repos](https://github.com/morrownr/) with drivers and
installation instructions.
The supplier for your specific adapter might also provide drivers on
their company website (though these might be outdated).

Unfortunately, a driver may not be currently available for your adapter/kernel until someone
(or a future you) eventually uploads a patched version.
In that case you might need to buy a new plug-and-play adapter after first
[double-checking that it is Linux-compatible](https://github.com/morrownr/USB-WiFi/blob/main/home/USB_WiFi_Adapters_that_are_supported_with_Linux_in-kernel_drivers.md).

If you do not have time for these explorations, 
if a driver is not readily available online or if
you don't want to purchase a new adapter then
downgrading your kernel might be the most immediately-viable option.

+++
title = "Virtual Machines: Configure, Share and Automate"
date = 2023-07-31
updated = 2023-09-16
draft = false

[taxonomies]
categories = ["technical"]
tags = ["how-to", "virtualisation", "Ansible", "software"]

[extra]
lang = "en"
toc = true
show_comment = false
math = false
mermaid = false
cc_license = false
outdate_warn = false
+++

Creating and using virtual machines is 
pretty easy with Vagrant, VirtualBox and
Ansible.


<!-- more -->

# Introduction

[Virtualisation](https://www.redhat.com/en/topics/virtualization/what-is-virtualization)
describes a broad range of approaches to creating a simulated version
of a computing environment. It is a key tool in modern software
development, allowing the creation of virtual instances of file
systems and even physical devices.

On the _host_ computer a virtual operating system (OS) can be generated
as _guest_, which is abstracted away from the computer's underlying
hardware. This allows the development and testing of software in an
isolated environment. 

Virtualisation — and related technologies like containerisation — are
often discussed in the context of large-scale, enterprise-level
applications. For the prospective learner it can be difficult to know
where to start. This how-to will demonstrate the use of
[Vagrant](https://www.vagrantup.com/),
[VirtualBox](https://www.virtualbox.org/) and
[Ansible](https://www.ansible.com/) to create and manage a virtual
machine (VM) on Linux.

After reading, you will be able to run a command to generate a VM that
shares files with your computer and comes with a game (the classic Zork)
pre-installed. The general use-case is one in which it is necessary to
repeatably create a computing environment that can run particular
software, with optional sharing or logging of persistent information
between the host and guest machine.

# Install Vagrant

Vagrant makes the process of setting up and managing
VMs quick and painless.
On a Debian-based distribution — like Ubuntu — run the following
commands to install:

```bash
wget https://releases.hashicorp.com/vagrant/2.2.19/vagrant_2.2.19_x86_64.deb
sudo apt install ./vagrant_2.2.19_x86_64.deb
vagrant --version # Vagrant 2.2.19
```

# Install VirtualBox

VirtualBox will provide the virtual environments that
Vagrant initialises and configures:

```bash
sudo apt install virtualbox
```

# Install Ansible

Ansible will enable automation of tasks in the VM.
It can be run on the host or guest machine.
If it is to be run on the host it will need
to be installed first.

The [Ansible documentation](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) 
states that a regular `pip install` may not work and this was true for
me on Ubuntu.
In this is the case, first install `pipx` before invoking it
to install Ansible as follows:

```bash
python3 -m pip install --user pipx
pipx --version
pipx install --include-deps ansible
```

# Create a VM

To set up a VM first create some directories
to organise your VM(s).
The VMs on my computer are kept in `/vagrant_projects/`.
I will be using [CentOS](https://www.centos.org/)
for this test project so
the working directory is named `/centOS_test/`.

```bash
mkdir vagrant_projects && cd vagrant_projects
mkdir centOS_test && cd centOS_test
```

Running the following commands will first
initialise a Vagrant environment, generating
a `Vagrantfile`, and then create the CentOS
VM according to the configuration specified
in that file.

```bash
vagrant init generic/centos7
vagrant up
```

Note that the `generic/centos7` is one of many
"Vagrant Boxes" that can be found at the link below:

[https://app.vagrantup.com/boxes/search](https://app.vagrantup.com/boxes/search)

# Run the VM

To use the VM run Vagrants's `ssh` command
and a centos7 prompt should appear:

```bash
vagrant ssh
# [vagrant@centos7 ~]$
```

It should now be possible to update packages using
the default package manager YUM:

```bash
# [vagrant@centos7 ~]$
yum update
```

Python is installed by default
and should work right away:

```bash
# [vagrant@centos7 ~]$
echo "print(2+3)" > test.py
ls # test.py
python test.py # prints 5
```

You can also install additional packages like
the classic text adventure [Zork](https://en.wikipedia.org/wiki/Zork). 
*This task will later be automated using Ansible.*

```bash
# [vagrant@centos7 ~]$
sudo yum install zork
zork

# Welcome to Dungeon.			This version created 11-MAR-91.
# You are in an open field west of a big white house with a boarded
# front door.
# There is a small mailbox here.
```

If you have trouble using regular terminal commands like `clear` then you
might need to change the active terminal type.
This was the case with my default `Kitty` terminal
but was easily resolved with:

```bash
# [vagrant@centos7 ~]$
TERM=xterm-256color
```

# Exit and Destroy

To exit CentOS press **\<ctrl\>**+**\<D\>** or
type `exit` and press **\<return\>**.
The VM can be re-entered at any time
from the vagrant environment
using `vagrant ssh`.
The state upon exiting will be preserved, 
including any installed packages and saved files.

If you want to destroy the VM to free
up space on your host machine then run 
`vagrant destroy` after exiting the VM.

Note, that the `Vagrantfile` will remain
in the `/centOS_test/` directory.
This means that if you `cd` into that vagrant environment
and run `vagrant up` you will again create the VM
according to the configuration `Vagrantfile` specifies.

# Configure the VM with Vagrant

Each time `vagrant up` is run the VM is
created according to the configuration 
specified in the `Vagrantfile`.
By default this file is documented with
helpful comments that explain several useful
configuration options.

For the purpose of this article the
configuration will be modified to
achieve two basic things:

1. **Share** files between the host and guest in a dedicated folder
2. **Automate** a YUM package installation with Ansible

# Share between guest and host

This is an example of the current directory structure on
the host machine:

```txt
vagrant_projects
├── centOS_test
│   └── Vagrantfile
└── shared
    └── hello.md
```

I created a `shared` folder containing
a markdown file with a basic greeting.
To access this file in the virtual machine
add the following line to `Vagrantfile`:

```ruby
# Vagrantfile
config.vm.synced_folder "../shared/", "/home/vagrant/shared_data"
```

The first argument string is the relative path to the shared folder
on the host machine.
The second argument is the name of the shared folder that
will be placed in the home directory in the virtual machine.

Run `vagrant up`, check that you are in the home directory
and display its contents:

```bash
# [vagrant@centos7 ~]$
pwd # /home/vagrant/
ls # shared_data
cat shared_data/hello.md # Hello from the host machine!!!
```

Still in the VM, change the name of the file 
and edit its contents in `Vim`;
for example, you may want to save notes from old Zork
runs that will help you in future adventures. 
The changes you make in the file should be
reflected in the `/shared/` folder on your
host machine.

```bash
# [vagrant@centos7 ~]$
mv shared_data/hello.md shared_data/zorkNotes.md
vim shared_data/zorkNotes
# write notes on zork and save with :wq
# this will update the file on host
```

If the VM is later destroyed and recreated
the contents of the file will remain as they
will be shared from the host.

# Automate with Ansible

If there is a specific task that needs to be run
each time that the VM is created Ansible will help.

In `centOS_test` create `playbook.yml` and reference it
in `Vagrantfile`:

```ruby
# Vagrantfile
config.vm.provision "ansible" do |ansible|
  ansible.playbook = "playbook.yml"
end
```

Imagine you want a VM specifically for the purpose
of playing Zork but you want to destroy the VM after
each game to free up space on your computer.
For convenience, you want Zork to be automatically installed every
time you (re)create that VM.

In `playbook.yml` a task is defined that checks
if a **YUM** package with the **NAME** Zork is **PRESENT** in the VM.
When the user logs in to the VM, it will **BECOME** a
user with `sudo` privileges.
If the package *is not* present it will be sudo installed using yum.
If it *is* installed then no installation will be performed.
This is the playbook:

```yml
# playbook.yml
---
- name: Testing Ansible Automation with Zork
  hosts: all
  become: yes
  tasks:
    - name: Ensure Zork is installed
      yum: name=zork state=present
```

After `vagrant up` is run check if Zork has been automatically installed:

```bash
which zork # /usr/bin/zork
```

Success! You can run `zork` and start playing:

```bash
# [vagrant@centos7 ~]$
# You are in an open field west of a big white house with a boarded
# front door.
# There is a small mailbox here.
# > mailbox
# What should I do with the mailbox?
# > open
# Opening the mailbox reveals:
# A leaflet.
# > leaflet
# What should I do with the leaflet?
# > take
# Taken.
# > eat leaflet
# I don't think that the leaflet would agree with you.
# > take
# You already have it.
# ...
```

Dispose of the VM as usual with `vagrant destroy`.

Both `playbook.yml` and `Vagrantfile`
still remain in the `/centOS_test/` directory.
Each time `vagrant up` is run subsequently the VM
will be created with the shared folder
and a version of Zork pre-installed.

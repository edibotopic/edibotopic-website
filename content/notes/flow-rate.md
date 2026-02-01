+++
title = "Flow Rate"
description = "Volume of material flowing through a system per unit time"
draft = false
date = 2023-11-12

[extra]
stage = "mature"
math = true

[taxonomies]
tags = ["science", "Colloids"]
+++

Processes consist of a series of operations, each with an input and output. Materials flow between operations, and in modern factories this flow is often continuous.

A high rate of flow is usually desired because it helps ensure high productivity.

Changes in flow-rate --- especially decreases --- can indicate a problem, such as equipment blockage or material supply issues.

The flow of liquids is complex and involves an interplay between equipment properties (pipe geometry), food characteristics (viscosity) and flow dynamics (turbulence).

## Quantities

### Volumetric Flow-rate

The flow-rate of a liquid is conventionally given the symbol $Q$ and is defined as:

$$Q = \frac{V}{t}$$

The units are most commonly $L \ h^{-1}$ or $m^3 \ h^{-1}$.

A common method of measuring flow-rate in a laboratory is to periodically measure the volume of liquid collected over a certain period of time.

This quantity is known sometimes as the "volumetric flow-rate". If units for mass (e.g., kg) are used instead it is the "mass flow rate".

### Velocity of flow

The volumetric flow-rate ($Q$) has the units $m^3 \ s^{-1}$.

We can calculate velocity of flow by dividing the volumetric flow rate ($Q$) by the area of flow $A$:

$$v = \frac{Q}{A}$$

This is usually the area of a disc because pipes are widely used in the transport of liquids.

The velocity here represents an `average` value, meaning that it represents the statistical average of a range of individual velocities. This is normally visualised as a moving fluid consisting of individual `stream-lines`, each flowing in a specific direction and with a specific velocity. In `laminar` (non-turbulent) flow the maximum velocity occurs towards the centre of the flowing liquid and the velocity close to the pipe wall approaches $0$. This means that liquids flows in a "curved" fashion. Velocity decreases from center to wall.

## Turbulence

A high degree of turbulence is often preferred because of useful effects, including:

- Decreasing the tendency of deposits to form on equipment surfaces
- Increasing the rate of heat transfer during thermal processing
- Accelerating the disintegration of agglomerated particles

Turbulence is calculated using the Re(ynold's) number:

$$Re = \frac{v \rho D}{\mu}$$

Turbulence increases with velocity and decreases with viscosity.

Related: [Stokes' Law](/notes/stokes-law)

+++
title = "Stokes' Law"
description = "On the sinking and floating of particles"
draft = false
date = 2025-09-21
[taxonomies]
tags = ["science", "teaching", "colloids", "simulation"]
[extra]
math = true
+++

Stokes' Law describes the sedimentation of particles in suspensions (fruit pulp
in orange juice). It is also used to model the flotation of droplets in
emulsions (creaming of milk fat).

## Equation

The equation below describes the separation velocity ($v$) of particles with
diameter $D$ in a solvent with viscosity $\mu$ when subject to acceleration due
to gravity $g$. The $\Delta \rho$ means the difference ($\Delta$) between the
density ($\rho$) of the particle and the solvent.

$$v = \frac{D^2 \cdot(\Delta \rho) \cdot g }{18 \cdot \mu}$$

## Measurement of viscosity

The equation can be rearranged to solve for viscosity:

$$\mu = \frac{D^2 \cdot (\rho_{ball} - \rho_{liquid}) \cdot g }{18 \cdot v}$$

With a ball of known physical dimensions and a liquid of known density, the viscosity can be calculated based on
measurement of the ball's velocity with a stopwatch and ruler.

This is known as the "falling ball" method.

## Practical uses

The equation can be used to identify the key parameters that influence how a
group of particles fall or rise due to gravity. This can be used to develop
strategies to make the separation of a material from a liquid happen more
quickly or slowly.

In manufacturing, some processes are designed to either promote *or*
prevent the physical separation of particles from liquids, for example:

* Homogenisation: reduces the size of particles to prevent destabilisation,
increasing the stability of a commercial beverage
* Flocculation: aggregates particles together to increase destabilisation,
enabling the removal of impurities from water

## Simulation

I developed a [simulation](https://edibotopic.github.io/stokes-law/) in
JavaScript for teaching Stokes' law.

In the simulation, you can use sliders to visualise the effect of adjusting the
following parameters:

* Average particle size
* Solvent viscosity
* Density difference
* Centrifugal force

I published a [paper](https://pubs.acs.org/doi/10.1021/acs.jchemed.2c01201) on
the simulation in _The Journal of Chemical Education_.

The paper is free to read and includes tips on using the simulation in the
classroom and steps to embed it in your LMS.

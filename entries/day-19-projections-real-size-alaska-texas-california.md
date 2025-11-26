---
title: "Day 19 – Projections – Real Size: Alaska, Texas, California"
permalink: day-19-projections-real-size-alaska-texas-california
date: 2025-11-19T23:25:24-05:00
tags:
  - 30DayMapChallenge
  - Python
  - DataViz
  - Maps
---

### Day 19 – Projections
**[Challenge Description](https://30daymapchallenge.com/#:~:text=(GIS%20Day)%20Focus%20entirely%20on%20map%20projections.%20Choose%20an%20unusual%20or%20misunderstood%20projection%20to%20highlight%20a%20theme%2C%20or%20visualize%20distortion.%20(See%20xkcd.com/977)):** 	(GIS Day) Focus entirely on map projections. Choose an unusual or misunderstood projection to highlight a theme, or visualize distortion. (See [xkcd.com/977](xkcd.com/977))
### My Submission

**Quick Quiz:** Which US state is the largest?

You probably know the answer is **Alaska**. In real life, Alaska is bigger than Texas and California combined.

But on many maps, Alaska looks **way too big**. Sometimes it looks like a massive continent the size of Brazil (check [Google Maps](https://www.google.com/maps/@35.8599321,-125.8898253,3z/data=!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D) now). Why?

**The Problem: Earth is Round, Screens are Flat.**
Imagine trying to flatten an orange peel onto a table. You can't do it without tearing it or stretching it. Mapmakers have the same problem. They have to choose between two things:
1.  **True Size:** Keep the area correct, but the shape looks squashed.
2.  **True Shape:** Keep the shape correct, but the size gets stretched.

For today's map, I plotted the "Big Three" states side-by-side using different rules to show just how much the map changes.

![Comparison of Alaska, Texas, and California across Albers, Mercator, and Mollweide projections](../assets/Alaska,%20Texas,%20California%20Projections.png)

[Click here to view high-quality PDF ⬆️](../assets/Alaska,%20Texas,%20California%20Projections.pdf)

### What am I looking at?

1.  **Albers Equal Area (The Truth):**
    This is the standard for government data. It prioritizes **Size**.
    * *The Reality:* Alaska is huge (2.5x bigger than Texas), but not a giant monster.

2.  **Web Mercator (The Google Maps View):**
    This is what we use for navigation. It prioritizes **Angles** (directions). To keep lines straight, it stretches everything near the North Pole.
    * *The Distortion:* Alaska is stretched to look **4x or 5x** bigger than it actually is.

3.  **Mollweide (The Global View):**
    This is used for world maps. It keeps the **Size** right, but it squashes the **Shape** into an oval to fit the whole planet in one view.


### References
* [Compare Map Projections](https://map-projections.net/compare.php)  


*Made by [Matt Zhu](https://mattzhu.net) for the [#30DayMapChallenge](https://30daymapchallenge.com/).*
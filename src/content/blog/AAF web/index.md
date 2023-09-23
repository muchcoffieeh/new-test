---
title: Alliance of American Football
slug: /aaf-web
date: "2019-05-08"
tags: [All, Applications]
category: "aaf-work"
thumbnail: ./game-time_web.jpg
description: "Design Sprint: Web Platform"
role: Product Design
team:
  - Director of Product
  - Web Platform Engineering
overview: |
  The Alliance of American Football league offered fans an immersive digital experience where they could interact on a play-by-play level through the mobile app and web platform. The web platform team was assembled 2 weeks before the kickoff of the season. The platform had to launch at the start to be iterated on through the season. 
  
  The AAF was founded by Charlie Ebersol and Bill Polian in 2019. The league was scheduled to have a 10-week regular season and conclude with a championship game on April 27. After eight weeks of play, however, the league's football operations were suspended by controlling owner Thomas Dundon on April 2.
macbookImage: /images/aaf-macbook.png
gifImage: /images/empty.png
---

import { getImage, GatsbyImage } from 'gatsby-plugin-image';

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![Example-screens](./screens-on-display.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Example-screens](./top_screen_mobile.jpg)

</div>

## Research

Given the tight delivery timeline of the project, I had to find the fastest approach to conduct just enough research – obtain the key insights for design execution towards the two large, but somewhat vague objectives communicated to me. 

<div className="mdx-file bullet-box-container">
  <div className="bullet-box">
    <h7>Boosting Viewership</h7>
    <p>Our goal was to encourage fans to watch the games on our web platform instead of traditional broadcast TV. This strategic move allowed us to build a captive audience, setting the stage for future initiatives such as introducing additional in-game features and monetization options.</p>
  </div>
  <div className="bullet-box">
    <h7>Driving Ticket Sales </h7>

    <p>Ticket sales constituted a crucial source of revenue for us. Given that we were in the process of establishing a dedicated fanbase for the league, our primary objective was to encourage fans to purchase tickets for upcoming games, with the expectation that this would pave the way for season pass purchases in subsequent seasons.</p>
  </div>
</div>

I digested prior research from the larger organization and filled in a few gaps by sitting in bars during NFL games, reading sports blogs, and speaking to my sports fanatic friends. I relied on references from existing sports platforms and looked for similarities in key areas:

> - Features and functionality
> - Information architecture
> - Visual hierarchy

## Execution

I mapped out the full user flow and created spreadsheets to detail the data from the back end. I worked with my PM to prioritize features and functionality based on:

> - User impact
> - Technical feasibility or readiness
> - Time required for implementation

<div className="kg-card kg-image-card kg-width-full">

![TICKETS](./serenaXu_aaf_userFlow.jpg)

</div>

From there, a pared-down user flow with just the information architecture was given to the engineers to start building.

<div className="kg-card kg-image-card kg-width-wide">

![IA](./IA-simple.jpg)

</div>

I strategized with our 2 frontend engineers on how to tackle the design system. We had to set up the foundations in the 2 quick weeks to enable ourselves to work efficiently but ensure that it was solid enough to iterate upon after meeting the major launch milestone.

<div className="kg-card kg-image-card kg-width-full">

![DESIGN SYSTEM](./DesignSystem.jpg)

</div>

Before the new web platform went live for the first game, I set up our Google Analytics and Tag Manager with custom tags. Typically not filed under a designer’s responsibilities, but it was necessary for tracking granular user behavior.

<div className="kg-card kg-image-card kg-width-med">

![WEB FLOW](./GA_user_behavior.jpg)

</div>

The platform went through 3 main iterations. The first iteration (left) that equally weighted the navigation for tickets and shopping was clearly obstructing the purchasing funnel. That version also buried the stats. We were all asking why we allowed the useless hero image to take up so much valuable real estate. However, because of the code structure, we had to design around that layout for the second iteration.

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![LANDING](./serenaXu_aaf_desktopLandingPageVerisons.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![LANDING](./landing_mobile_1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![LANDING](./landing_mobile_2.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![LANDING](./landing_mobile_3.jpg)

</div>

## Iterations

My product leader and I examined GA metrics week after week. 3 key insights helped my design thinking to iterate on the experience towards the platform goals.
- Users were not buying tickets for upcoming games right after watching a game. Rather, the majority of tickets were sold when users returned on their mobile device.
- The most common action preceding purchasing tickets was reviewing team standings. 
- Users that viewed team standings and highlights were 67% more likely to complete the tickets purchase flow.

We first turned our focus to mobile web. Rather than having the ticketing call-to-action as the first component after the hero image, I brought standings into the landing page and moved the CTA below that. When the 3rd insight surfaced, I converted the highlights section into a tab view with standings. 

## Results

After 3 major iterations, we saw roughly a **20% increase in ticket sales**. As for the viewership objective, we unfortunately didn't have accurate broadcast metrics to measure against. However, we were able to see an increase of viewers game after game – **8,565 in the 1st game** and reaching **22,875 by the 5th** (and last) game.

<div className="kg-card kg-image-card kg-width-wide">

![MOBILELAND](./serenaXu_aaf_mobileLandingPageVerisons.jpg)

</div>

## Roadmap

In analyzing metrics from GA and mining our social media threads, we saw that our users wanted more interactivity during games. The existing gametime mode is below. Users could either view the 3D telemetry field or the video feeds. The play stats were automatically generated into a long scrolling list.

<div className="kg-card kg-image-card kg-width-wide kg-desktop">

![Live stats video](./serenaXu_aaf_liveStats.jpg)

</div>

My Director of Product and I brainstormed ideas for enhancing interactivity during our downtime.

There were a large number of attempted interaction on select spots:

- Clicks on the play stat card
- Clicks on player caps on the telemetry field (We deduced this. The 3D field was built in webGL. Granular tracking was not set up.)
- Video scrubbing

Some of our ideas

<div className="kg-card kg-image-card kg-width-wide kg-desktop">

![3d click field](./serenaXu_aaf_3dField.jpg)

</div>

We stumbled on another interesting insight from our Google Analytics. The users that flowed through both the stats and news pages were much more likely to complete the purchase of tickets or merchandise. We hypothesized that we needed more elements to keep users delighted and spend time on the web in-between games. I sifted through our Reddit and Twitter to see if it would spark ideas (we had creative fans that posted some top-notch artwork). One question surfaced numerous times. “Why do they take the game broadcast down during the week?”

Our replay idea was born.

<div className="kg-card kg-image-card kg-width-med kg-desktop">

![Replay](./serenaXu_aaf_interactiveReplayHighlights.jpg)

</div>

<div className="kg-card kg-image-card kg-width-wide kg-desktop">

![Replay](./serenaXu_aaf_interactiveReplayNotes.jpg)

</div>

Unfortunately, we never got the chance to build these or the team operations tool. Would’ve been some fun challenges there.

---

My ad to draw fans to the web platform during gametime. Created in Photoshop:

<div className="kg-card kg-image-card kg-width-full">

![GAMETIME](./game-time_web.jpg)

</div>

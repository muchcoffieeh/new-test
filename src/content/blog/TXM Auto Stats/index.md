---
title: TXM Auto Stats
slug: /txm-auto-stats
date: "2019-04-08"
tags: [All, Applications]
category: "txm-work"
description: "Streamlining Game Stats Operations"
thumbnail: ./TXM_auto_thumb.jpg
---

import { getImage, GatsbyImage } from 'gatsby-plugin-image';

Tempus Ex provides a data platform to serve real-time sports analytics, allowing leagues to implement automatic in-game stats and offer play-by-play betting for their fans. The company is currently working with various major sports leagues and the technology is used in stadiums across America. I worked on the first version of the auto stats product that was piloted at Pro Bowl 2020.

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![Screenshots](./first_view.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./first-view-1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./first-view-2.jpg)

</div>

## Overview

<div className="overview">
  <div className="left">
    <div className="label-w-desc">
      <h3>Role</h3>
      <p>Product Design</p>
    </div>

    <div className="label-w-desc">
      <h3>Team</h3>
      <p>VP of Product</p>
      <p>Engineering</p>
    </div>
  </div>

  <div className="right">
    <h3> Overview </h3>
    <p>
    Every NFL game employs a stats team of 10-20 people. The crew is situated in a suite in the press box with each member views the game through binoculars. Stats are manually determined and entered into the GSIS system. Delays in reporting stats or incorrect stats results in angry fans.

    Our product team solved for this problem by creating a real-time automatic stats reporting system.  
  </p>
  </div>
</div>

<div className="mdx-file bullet-box-container">
  <div className="bullet-box business-perspective">
    <h6>Real-Time</h6>
        <div className="tag">Business Perspective</div>
    <p>Bring stats reporting into real-time to decrease the time between each play </p>

  </div>
  <div className="bullet-box business-perspective">
    <h6>Efficiency</h6>
        <div className="tag">Business Perspective</div>
    <p>Increase operational efficiency of the league by empowering a smaller stats reporting crew</p>
  </div>
  <div className="bullet-box customer-perspective">
    <h6>Simplicity</h6>
        <div className="tag">User Perspective</div>
    <p>Less manual evalation, making it easier to produce accurate results </p>

  </div>
</div>

## Research
#### Understanding pain points of the status quo

At the start, I knew very little about football. “What is GSIS?” I spent the 2 months attending games and exploring GSIS to understand the pain points from the league’s perspective. I made sketches of the user environment and took screenshots of the software in action.

<div className="kg-card kg-image-card kg-width-wide">

![sketches](./crew_sketches.jpg)
![sketches](./gsis-screen.jpg)

</div>

Understanding that our pilot product would be part of a proposal for a larger contract, I then worked closely with management to understand their narrative to ensure that I’d design a product that demonstrates the value propositions they noted.

<div className="kg-card kg-image-card kg-width-full">

![WHITEBOARD](./whiteboard.jpg)

</div>

Then I organized a series of meetings with our team of engineers to learn the sources of data, how we’re ingesting each, layers of inference, and where the computation was taking place. I had a good idea of what we were capable of displaying after the meetings.

My management was keen on nailing the visual feel so I went straight into iterations in high-fidelity.

<div className="kg-card kg-image-card kg-width-full">

![ITERATIONS](./iterations.jpg)

</div>

I created reference documents for the engineers to correlate my intention for the visual activity as certain events are triggered during a game.

<div className="kg-card kg-image-card kg-width-full">

![ENG DOCS](./engineering_docs.jpg)

</div>

## Design Solution
#### A glanceable display console

<div className="kg-card kg-image-card kg-width-full">

![qt_summary](./final_designs_1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-med">

![qt_summary](./quarter-summary.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full">

![qt_summary](./final_designs_2.jpg)

</div>

In the event that a call on a play is contested, a manual override would be performed by an auditor. Currently, the NFL has a replay team on the field re-determining the play. They use apps that a to scrub back, zoom in, and closely examine any video feed necessary to make a more accurate determination. Our auto stats product embeds the functionality of the replay apps. The auditor would make a new determination and the change would propagate up the inference tree.

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![AUDITOR](./auditor-desktop-view1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![AUDITOR](./auditor-desktop-view2.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view2.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view3.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![AUDITOR](./auditor-view4.jpg)

</div>

## Constraints

The 5 weeks leading up to the ProBowl was crunch time. It came time to pare down the design. Not the first time it happened to me at a startup – can’t say I didn’t expect it.

<div className="kg-card kg-image-card kg-width-full">

![PARE DOWN](./pare_down.jpg)

</div>

In addition to creating videos for simulated product action, guide documents were also made for the developers to have easy reference to the intended interaction of the product during a live game.

## Buy-In

Amid the product development, we needed to continue the engagement with our clients. I animated a video simulation of a live game and created a guide to help them better understand the elements on the console. Below are some select pages from the guide document.

<div className="kg-card kg-image-card kg-width-full">

![Hotspots Doc](./sales_guide_1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full">

![Hotspots Doc](./sales_guide_2.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full">

![Hotspots Doc](./sales_guide_3.jpg)

</div>

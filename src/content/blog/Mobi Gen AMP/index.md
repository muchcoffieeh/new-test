---
title: Mobi Gen AMP
slug: /mobi-gen-amp
date: "2018-01-05"
tags: [All, Applications]
category: "freewire-tech-work"
thumbnail: ./MobiGenAMP_thumb.jpg
description: "Simplifying Asset Management"
role: Product Design, Project Management
team:
  - VP of Product
  - App Development Agency
overview: |
  The power crew at the job site need to know the status of their power delivery units at all times. They also need to set up and power down quickly. Our existing version of AMP wasn't meeting their needs – rather than enabling efficiency, it added confusion in their workflow. The pain was severe enough that most of our pilot customers stop the units they purchased.

  Our product team revamped the experience to address the problem.
macbookImage: /images/amp-mac-desktop.png
gifImage: /images/empty.png
---

import { getImage, GatsbyImage } from 'gatsby-plugin-image';

FreeWire Technologies builds cloud-connected battery systems for on-site power – the cleaner alternative to a traditional diesel generator. AMP (Asset Management Platform) allows for remote control and monitoring with a mobile app and web platform. 

<div>
<div className="kg-card kg-image-card kg-width-sm">

![User Flow](./serenaXu_mobiGen_ampMobile_dashboard.jpg)

</div>

<div className="kg-card kg-image-card kg-width-sm">

![User Flow](./serenaXu_mobiGen_ampMobile_info.jpg)

</div>

<div className="kg-card kg-image-card kg-width-sm">

![User Flow](./serenaXu_mobiGen_ampMobile_map.jpg)

</div>
</div>


## Business Case

The first step was to understand how the power usage differs across discrete scenarios. We needed to determine how the Mobi Gen fits into each and which use cases we wanted to serve. We analyzed setup logistics, power requirements, ease of recharging, and a host of other factors.

<div className="kg-card kg-image-card kg-width-full">

![Whiteboard](./MobiGenUses.jpg)

</div>

I created many living documents for reference by the product team and to deliver the insights to other stakeholders. I created presentations of diagrams, charts, and fully illustrated user stories of select hypothetical scenarios.

<div className="kg-card kg-image-card kg-width-full">

![Product Shot](./MobiGenAMP_business-1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full">

![Product Shot](./MobiGenAMP_business-2.jpg)

</div>

## Persona Analysis

After the high-level examination of the use cases, we honed in on the key questions that would guide the design of the platform.

- What personas would be using the platform and with what frequency?
- What data is important to each of them?
- What are their objectives and what order should the data be displayed to help them accomplish those quickly?

12 interviews and 5 field observations later, we were able to identify 2 broad persona categories.

<div className="mdx-file bullet-box-container three">
    <div className="bullet-box tech-perspective">
    <h6>Genny Operator</h6>
    <hr></hr>
    <p>Responsible for efficient setup and teardown of power units as well as ongoing monitoring. </p>
  </div>
  <div className="bullet-box tech-perspective">
    <h6>Fleet Manager</h6>
    <hr></hr>
    <p>Views all assets on all active jobsites at a networks level to assist on-the-ground crew members. </p>
  </div>
</div>


It was time to bring in the viewpoint from the firmware engineers.

- What data we can offer?
- How close to real-time can we display each piece?

We put together a spreadsheet of available values, lag time, and conditions to consider. We also diagrammed the architecture of the battery system and the state machine so I could get a better understanding of potential faults in the data collection.

<div className="kg-card kg-image-card kg-width-wide">

![State Machine](./state_architecture.jpg)

</div>

## User Flow Iteration

I created wireframes and clickable prototypes. I did a series of user testing and iterated on the user flow. The development of the app was to be done by our trusted offshore team. I packaged up the user flow, a styling guide, and a pdf summarizing our findings on user personas and use case scenarios.

<div className="kg-card kg-image-card kg-width-wide">

![User Flow](./serenaXu_mobiGen_amp_userFlow.jpg)

</div>

We iterated numerous times – analyzing the task flow for each iteration, we identified key opportunities for the operators to meet their main objectives.

<div className="kg-card kg-image-card kg-width-full">

![User Flow](./Task-Flow-before.jpg)

</div>

After:

<div className="kg-card kg-image-card kg-width-full">

![User Flow](./Task-Flow-after.jpg)

</div>

## Design Solution

<div className="kg-card kg-image-card kg-width-full">

![User Flow](./mobiGen-amp2view1.jpg)

</div>


<div className="kg-card kg-image-card kg-width-full">

![User Flow](./mobiGen-amp2view2.jpg)

</div>

## Results
The revamped version of the mobile resulted in a **30% decrease in setup and teardown** time. With the boost in their workflow, the overall usage of our power units **increased 3x**.

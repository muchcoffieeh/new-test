---
title: Pantheon Edge
slug: /pantheon-edge
date: "2023-04-01"
tags: [All, Applications]
category: "pantheon-work"
templateKey: "public-post"
thumbnail: ./thumb.jpg
description: "0-1 Product Design For Scaling Operations"
---

import { getImage, GatsbyImage } from 'gatsby-plugin-image';

<div className="mdx-file kg-card kg-image-card kg-width-wide" >

![Screenshots](/images/agcdn-verify-med.gif)

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
      <p>Sr. Director of Product</p>
      <p>Tech Lead</p>
      <p>Edge Routing Engineering</p>
    </div>
  </div>

  <div className="right">
    <h3> Overview </h3>
    <p>
    High performance websites, serving millions of visitors a day utilize technologies at the edge for improved reliability and security.

  Pantheon customers tap into the power of the edge is through our Advanced Global CDN. However, it’s a managed service that customers cannot access by themselves. The workflow is unsatisfactory as customers have the strong desire to configure features on their own. To solve this major pain point, our product team created a product suite, allowing customers to self-service edge capabilities.
  </p>
  </div>
</div>

## Unpacking The Needs
#### Both sides of the workflow challenges

<div className="mdx-file bullet-box-container">
  <div className="bullet-box business-perspective">
    <h6>Not Scalable</h6>
    <div className="tag">Business Perspective</div>
    <p>Operationally expensive with extreme inefficiencies resulted from nonstandard workflows with manual components</p>
    
  </div>
  <div className="bullet-box business-perspective">
    <h6>Hidden Value</h6>
    <div className="tag">Business Perspective</div>
    <p>Lacking transparency, customers didn't understand the impact of their implementations and they questioned the value</p>
  </div>
  <div className="bullet-box customer-perspective">
    <h6>Inconvenience</h6>
    <div className="tag">Customer Perspective</div>
    <p>Customers submitted tickets for all changes, often blocked on other work until the tickets are resolved</p>
    
  </div>
  <div className="bullet-box customer-perspective">
    <h6>Confusion</h6>
    <div className="tag">Customer Perspective</div>
    <p>With no reference point, customers struggled to articulate their needs clearly, requiring additional conversations</p>
  </div>
</div>

<hr></hr>

#### Auditing customer interactions to spot the inefficiencies 
After receiving the brief from our executives, I needed to better understand both the business and customer perspective to pinpoint where the inefficiencies are. I started by auditing recorded customer calls and support ticket chains. Key insights I found along the way
- **Customer Confusion:** Certain features are harder to grasp than others where customers would conflate the functionality, leading to customer requests asking for the wrong feature. 
- **Vague Objectives:** Customers may submit tickets describing their end objective with little idea of the combination of features they needed to achieve the objectives, causing communication gaps and additional interactions. 
- **Frustration:** Straightforward features caused the most customer frustration –  customers felt insulted in needing to submit tickets for tasks they could implement by themselves.
- **High Variance:** Our implementation approach has evolved and improved over time. However, this result in numerous ways to handle each feature.
- **Edifying:** Repeated engagement with our edge implementation team provided the opportunity for customers to be educated on proper feature use. Customers were grateful for the education and for discussions becoming more efficient.

Each feature would have to be untangled individually. To start synthesizing my insights, I organized the insights by feature and contextualized it against the stage of the conversation. Examining the interactions at every stage of the conversation allowed my team and I to catalog all the user stories beyond the ones revolving around achieving edge functionality.

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![Screenshots](./features-stage.jpg)

</div>

<div className="mdx-file kg-card kg-image-card kg-width-wide kg-desktop">

![Screenshots](./user-stories.jpg)

</div>

After this analysis, we found the mental models of our customers that led us to uncover the value proposition we could uniquely deliver.

<div className="kg-card kg-image-card kg-width-med kg-desktop">

![Screenshots](./edge-reframe.jpg)

</div>

## Unraveling the Complexity
#### Systematically deriving insights for priority features

Kicking off the design process, we needed to **prioritize the features** to deliver – the optimal combination of initial features to effectively address customers needs and encourage adoption of the self-service product.

1. **Audit** of existing customer edge configurations
2. **Field study** to shadow our edge implementation team in live customer interactions
3. **Workshop** to leverage the edge team's collective knowledge of customer insights
4. **Synthesis** with my team to identify the highest priority features 

<div className="kg-card kg-image-card kg-width-wide">

![external-survey-analysis](./features-prioritize.jpg)

</div>

Combining results from the workshop and a questionnaire sent to external participants, my team and I were able to narrow down to the **top 3 features** to prioritize for the initial release.
> - **URL Redirects**
> - **Header Modification**
> - **Access Rules**

## Governing Architecture
#### Ensuring user-centricity from the ground up
As we proceeded towards execution, we needed to lock down key architectural decisions. 
> How do we structure the relationship between our platform entities and edge entities?

I took a two-pronged in my research effort – a series of interviews with customers and a revealing workshop with our edge implementation team. In the workshop, I presented simulated customer scenarios ready for implementation and ask them to relate the entities accordingly.

<div className="kg-card kg-image-card kg-width-xs">

![Screenshots](./edge-site-entities.jpg)

</div>

The initial interviews with select customers confirmed their preference for individual site-level control of edge logic, which aligned with their immediate needs. However, interviews and the workshop with the edge implementation team revealed otherwise.
They unveiled a more complex landscape – the preferred configuration involved a combination of governing multiple sites with a single edge configuration, while still allowing each site to have multiple configurations. I collaborated with my tech lead to assess this structural feasibility and other options. We weighed the pros and cons of each architectural structure.

<div className="kg-card kg-image-card kg-width-full">

![Screenshots](./site-config-edited.jpeg)

</div>

We also explored the information architecture stemming from each structure.

<div className="kg-card kg-image-card kg-width-wide">

![Screenshots](./IA-explore.jpg)

</div>

After careful consideration, we landed on an option that was initially straightforward but provided the flexibility for building into the more advanced structure later in the product roadmap. We made the decision to have edge configurations controlling multiple sites but each site can only be connected to one configuration.

## Co-Design Workshops

Following the results of the initial investigative sessions, it was time to delve into the user experience design. I facilitated a series of co-design sessions involving cross-functional teams – sales engineering, product engineering, and the edge implementation team. These sessions aimed to achieve a full 360-degree view of the product to obtain clarity on how we deliver the unique value proposition. I organized two sessions with the larger group of 15 participants, fostering collaborative discussions through hands-on exercises. 

I continued with roughly 7 deeper co-design sessions that included one key sales engineer, implementation specialist, and the tech lead from our edge engineering team (lost count of session numbers). The flexibility and spontaneous nature of these sessions allowed for deeper exploration and generated breakthrough ideas that honed in on the optimal product experience.

<div className="kg-card kg-image-card kg-width-full">

![Screenshots](./working-task-flow-main.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full">

![Screenshots](./working-task-flow-features.jpg)

</div>

## Iterations

I iterated on the designs in low fidelity, maintaining nearly daily check-ins with my product leader and tech lead for feedback to ensure alignment. At this point, we also began to test with customers and external participants.

<div className="kg-card kg-image-card kg-width-full kg-desktop">

![Screenshots](./low-fi-main.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./low-fi-mobile1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./low-fi-mobile2.jpg)

</div>

We moved into mid-fidelity prototyping to increase the frequency of the feedback loops. These mid-fidelity prototypes wer identifiable as our Pantheon dashboard, striking a balance between similarity and mid-fidelity design. By omitting colors and other embellishments, to ensured that the focus remained on the functionality and core features of the product.

During prototype testing, participants were asked to complete a series of tasks and we documented their success, points of friction, and any open feedback they gave through out the process. 

<div className="kg-card kg-image-card kg-width-med kg-desktop">

![Config setup video](/images/config-setup.gif)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./mid-fi-mobile1.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./mid-fi-mobile2.jpg)

</div>

<div className="kg-card kg-image-card kg-width-full kg-mobile">

![Screenshots](./mid-fi-mobile3.jpg)

</div>

## Results
I distilled the results from the final prototype testing into a comprehensive report to inform my immediate team and cross-functional partners. Nobody likes long slide decks so I strategically crafted a slide deck that peeled back like an onion (or a good Twitter thread). The first section of just 8 slides covered the key insights, respective details and recommendations, and a quick context of the research methodology. For anyone with the bandwidth to dive in, the details of the study were pulled into the appendix.

<div className="mdx-file bullet-box-container">
  <div className="bullet-box">
    <h7>Excitement expressed when seeing edge features with pre-production environments</h7>
    <div className="label-block">Unique Value Prop</div>
    <p>Participants reacted extremely positively to seeing the capability, some even noting it as a unique differentiator from other edge tooling.</p>
  </div>
  <div className="bullet-box">
    <h7>One edge configuration governing multiple sites is the most extensible structure </h7>
    <div className="label-block">Governing Architecture</div>
    <p>While participants took a moment to reorient their mental model, they successfully completed all tasks and remarked favorably on the reduction of redundancy. </p>
  </div>
  <div className="bullet-box">
    <h7>Additional functionality is required – missing functionality will hinder adoption </h7>
    <div className="label-block red">Prioritized Features</div>
    <p>60% of participants noted they need more features and functionality for the edge suite to be usable. However, specific requests were wide-ranging.</p>
  </div>
</div>

Thank you for reading this super long case study.


<div className="video">
    <iframe
      width="854" height="480"
      src="https://www.youtube.com/embed/DTBuaNOrT3I"
      title="Advanced Global CDN Demo"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      autoplay="1"
      loop="1"
      rel="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>

  <hr></hr>


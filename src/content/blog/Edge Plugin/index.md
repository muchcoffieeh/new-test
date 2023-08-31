---
title: Edge Plugin
slug: /edge-plugin
date: "2021-02-01"
tags: [All, Applications]
category: "pantheon-work"
templateKey: "public-post"
thumbnail: ./thumb.jpg
description: "ROLE: PRODUCT CONCEPTUALIZATION & DESIGN, UX RESEARCH"
---

import { getImage, GatsbyImage } from 'gatsby-plugin-image';

<div className="kg-card kg-image-card kg-width-wide">

![sreenshot](/images/plugin-entry-720.gif)

</div>

In today's digital landscape, high-traffic websites are increasingly leveraging not only content delivery networks (CDNs) but also custom logic to manipulate behavior at the edge. This plays a crucial role in enhancing website performance, security, and reliability, enabling seamless delivery to millions of daily visitors, and efficiently handling sudden spikes in traffic.

### Setup

Pantheon, the platform for managing high-performance websites, currently offers a suite of tools for customizing edge logic – Advanced Global CDN. However, this is a managed service that faced numerous operational challenges.
> **This is the highest selling add-on. But we sell it as SaaS when it’s really an unstandardized managed service. Customers are blocked by a queue of support tickets and we can't scale.**

My team was tasked to devise a short-term solution to increase operational efficiency and drive revenue. I went to work with my product leader and tech lead. 

### Challenge

The implementation of a self-service Advanced Global CDN through the main Pantheon dashboard presented a multifaceted challenge. Advanced Global CDN operated as an entirely separate system, rendering the platform unaware of which customers were utilizing which Advanced Global CDN features. And worse – the platform didn't even know whether a customer had purchased Advanced Global CDN. Consequently, integrating direct dashboard control for edge features proved unattainable, necessitating users to rely on support tickets for even the smallest change to their site's edge behavior.

A critical blocker in addressing this challenge was the ongoing development of a microservice by the engineering team, intended to serve as the source of truth for customers' access to different services. While this solution promised to establish the necessary connection, it was projected to require considerable time for completion, leaving us in urgent need of a shorter-term remedy to alleviate the mounting backlog of Advanced Global CDN support tickets.

<div className="kg-card kg-image-card kg-width-med">

![microservice-diagram](./microservices.jpg)

</div>

### Proposal
Collaborating with the product leader and tech lead, we proposed building a WordPress/Drupal plugin to link with our CDN vendor's services to empower users to self-serve edge behavior changes. We discovered a pre-existing plugin, abandoned due to engineering resource limitations, serving as a perfect starting point.
<div className="kg-card kg-image-card kg-width-med">

![plugin-before](./old-plugin.jpg)

</div>

### Evaluation
For building out the Advanced Global CDN Self-Service Plugin, we needed to determine both the feasibility and the approach for its implementation.

<div className="mdx-file bullet-box-container three">
  <div className="bullet-box tech-perspective">
    <hr></hr>
    <p>What functionality can be built into this plugin? Will it be sufficient?</p>
    <div className="tag">Feasibility</div>
  </div>
  <div className="bullet-box business-perspective">
    <hr></hr>
    <p>What level of customer impact will the investment in the plugin have? </p>
    <div className="tag">Customer Impact</div>
  </div>
  <div className="bullet-box customer-perspective">
    <hr></hr>
    <p>High operational costs and inefficiencies from high-touch operations with manual components.</p>
    <div className="tag">Business Impact</div>
  </div>
</div>

#### Functionality Selection
The first step was to identify the discrete functionalities to include in the plugin. Beyond understanding the features most heavily used by customers, we had to know critical technical limitations with the way edge logic was written and stored with our CDN vendor. In unraveling select customer configurations with our edge implementation team, we discovered the main criteria for the feasibility of a feature to be revealed in the plugin. The achievable features were ones using purely a key value pair to achieve the intended edge behavior – a dictionary or ACL (access control list) format. 

<div className="kg-card kg-image-card kg-width-med">

![standardization-diagram](./feature-impact-effort.jpg)

</div>

The potential list of features to be delivered was narrowed down significantly
>- **URL redirects**
>- **IP blocking/allowing**
>- **Geo blocking/allowing**
>- **Forwarding edge logs**

#### Customer and Business Impact
Next, we needed to determine which customers would be eligible to leverage the plugin. We focused on customers whose configurations utilized one of the four features we could reveal within the plugin. For some customers, while the feature is implemented in their configuration, the methodology was not through the dictionary/ACL format. 
<div className="kg-card kg-image-card kg-width-wide">

![standardization-diagram](./config-framework.jpg)

</div>

To accommodate them, a standardization process was to be required, converting their features into the dictionary/ACL format compatible to be revealed in the plugin. Through this assessment, we identified a smaller but still substantial number of existing eligible customers, with additional potential customers attainable through light standardization.


### Design Process
For the plugin's design, we adopted a pragmatic approach, acknowledging its interim nature. We conducted UX comparative analysis to identify effective patterns utilized in similar solutions and relied heavily on those insights. (see image below - taken from our information architecture and UI interactions examination)

<div className="kg-card kg-image-card kg-width-full">

![standardization-diagram](./IA_interactions.jpg)

</div>

We then designed and iteratively tested prototypes. We received overwhelmingly positive feedback from customers and the edge implementation team. They were just delighted at the prospect of not being blocked by a queue of support tickets. As much I wanted to pry for specific UX-related insights, the group of customers I spoke to simply just wanted to apply pressure for us to release the plugin ASAP.
> **Just give us some GUI. It doesn't have to be perfect. Because right now we have no access!**

### Scalability Challenges
As the implementation phase approached, we encountered crucial challenges regarding scalability and integration with the CDN vendor's services. The plugin would be accessible to customers through a custom API key. Custom API keys generated through our vendor posed scalability issues, especially during simultaneous usage. We considered limiting the number of keys as a potential mitigation strategy but recognized that it would inadvertently constrain the customer impact.

Additionally, we discovered that porting control into the plugin would eliminate the version control provided by our CDN vendor, potentially leading to misconfigurations and increased support tickets. This posed a significant risk to the project's primary objective of streamlining user interactions and minimizing reliance on support for Advanced Global CDN changes.

### The Way Forward
Given the identified challenges and their potential implications, my product leader, tech lead, and I transparently presented the benefits and risks associated with the AGCDN Self-Service Plugin to our executive team. After a comprehensive evaluation, it was determined that the risks outweighed the advantages for the proposed implementation. While not proceeding to build out the plugin, the valuable design thinking and interaction patterns developed during this project will not go to waste. Instead, they will serve as a foundational groundwork and provide a jumpstart for the future productized version, which will be seamlessly integrated into the dashboard once the two essential microservices are completed.
<div className="kg-card kg-image-card kg-width-full">

![risk-reward-chart](./edge-plugin-screens.jpg)

</div>



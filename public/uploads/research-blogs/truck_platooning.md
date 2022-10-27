---
title: Routing and Platooning of Mixed Autonomous Truck Fleet
order: 9
thumbnailURL: /images/research-blogs/truck.jpg
thumbnailAlt: Autonomous Truck
description: Autonomous Truck brings new opportunity to the freight system. How can we integrate it into the current fleet?
---

# Routing and Platooning of a Mixed Autonomous Truck Fleet under Capacity and Time Window Constraints
This blog is based on an ongoing research project
# 1. Introduction
Logistic service provider (LSP) is usually tasked with delivering packages from everywhere across the country. Figure 1 below shows the freight demand between major cities in the United States. Thicker and darker lines represent more freight volume needed to be transported between the two end cities. 

<p align="center">
  <img src="/images/research-blogs/image1.png" width = 1000/>
  <br>
	<b>Figure 1. Freight Demand between Cities in the US</b>
</p>

Thus, LSP is looking to dispatch a set of trucks to deliver all of these demands while minimizing operational cost and this problem is referred to as Vehicle Routing Problem and has gained a lot of interest as early as the 1960s. In most cases, customer requires the product to be delivered within certain time frame, which is time window constraints. The truck also can only carry certain amount of volume, which is capacity constraint. Figure 2 below shows where freight volume is mixed and consolidated, and the dispatch plan minimizes the number of trucks and distance traveled needed. Thicker and darker lines represent more truck traveling between the two end cities.
<p align="center">
  <img src="/images/research-blogs/image2.png" width = 1000/>
  <br>
	<b>Figure 2. Truck Volume between Lanes</b>
</p>

In recent developments in the automotive industry, autonomous vehicle (AV) trucks are gaining traction and company (such as Tesla) are planning on introducing them to the market very soon. This benefits TSP in reducing the cost-per-mile operational cost since these AV truck saves on driver wages. However, the current automation level is such that government are likely to regulate AV truck to platoon behind a human-driven truck for safety reasons. LSP can still dispatch these AV trucks with normal driver and turn on the autonomous driving whenever there is an opportunity for platooning. Therefore, this research’s objective is:

*Given a set of freight demand where each demand has the origin, destination, volume, and time window, this research develops a methodology to determine the routing and platooning for a fleet of truck that minimizes total system operational cost while satisfying time window and capacity constraints.*

This research aims to use Multi-agent reinforcement learning to find the optimal routing and platooning plan. The basic concept is each truck will be a single agent deciding on where to start and where and when to go next. There will be multiple agents for multiple trucks. Agents have different observation and gradient descent. Howeverm agents share the same architecture of the policy function. Cooperating action between agent is encouraged such as platooning because these agents share the total reward. An Encoder-decoder architecture is used to calculate the probability of choosing the next location. In addition, several methods such as optimization and graph matching are also employed to increase the model’s accuracy.

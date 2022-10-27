---
title: Using New York Taxi Data To Estimate Traffic
order: 7
thumbnailURL: /images/research-blogs/tgcn/taxi-2729864_1280.jpg
thumbnailAlt: Wrong Way Driving
description: What are the technologies to prevent wrong way driving?
---

# Using New York Taxi Data To Estimate Traffic

This blog is based on an ongoing research project.

# Introduction

With the advancement of technology penetrating into several aspect of life, the amount of data generated is growing as fast as ever. In 2013, it is estimated that 90% of the world data was created during 2011-2012 alone. In addition, research in artificial intelligence have been gaining traction with numerous success application, such as computer vision, natural language processing, or neural network, and these framework benefits greatly from the data. These trends are accompanied by the advancement in computing power, which is being more powerful and accessible to researchers compare to several years before when such algorithm is considered infeasible. Therefore, data has been identified as a new resource that is as impactful to the economy as the traditional one (e.g., minerals, oils, etc…).In the transportation field, one such data is the New York taxi data where there are upwards of 1.1 billion taxi trips recorded from 2009 to 2015. This data is generated as part of the Open Data Law and recorded by the New York Taxi & Limousine Commission (NYC-TLC). With such enormous size, this data is perfectly capable of fueling a deep learning model. Figure 1 shows the Manhattan road network, pickup, and dropoff density.

 <p align="center">
  <img src="/images/research-blogs/tgcn/OElhy4i.png" width = 1000/>
  <br>
	Figure 1. Manhattan Road Network, Pickup, and Dropoff Density
</p>
In dense urban area, dynamic link travel time estimation (DU-LTE) is a problem where the objective is to find travel time of every road segment at every time of the day. DU-LTE is extremely beneficial for city dwellers since they can estimate their travel times, choose their shortest route, or monitoring the current traffic. Figure 2 shows an example of DU-LTE where a tourist may need to know the travel time from Times Square and the JFK International Airport. The path with the shortest distance may not be the ideal path since speed limit, facility type (highway vs normal road), and traffic condition all plays a role. Therefore, the link travel time at each time of the day is needed to have an accuracy estimation of the shortest path and its estimated travel time.

Taxi data provides an insight into this problem since for every taxi trip, we can know the pickup and dropoff point, the pickup time, total distance, and total travel time. Therefore the objective of this research is “to develop a sequential three step framework that use a single taxi dataset to estimate complete network link travel time, disaggregated by time of the day”. We believe this will be very beneficial to dense urban areas where travel time information is vital and taxi activities are frequent.

<p align="center">
  <img src="/images/research-blogs/tgcn/Image 26.png" width = 1000/>
  <br>
	Figure 3. Three Steps Framework
</p>

# Methodology

Taxi data only contains the pickup and dropoff point whereas the full trajectory is not available due to privacy reason. However, thanks to the excessive amount of taxi trip records, we propose the following three steps framework shown in Figure 3 below:

<p align="center">
  <img src="/images/research-blogs/tgcn/Image 29.png" width = 1000/>
  <br>
	Figure 3. Three Steps Framework
</p>
The three steps are (1) Path Choice Prediction, (2) Partial Link Travel Time Prediction, and (3) Dynamic Urban Link Travel Speed Estimation. Step 1 takes the raw input which is taxi trip data (pickup and dropoff location, travel time, and distance) and produces an output of predicted path choice for all taxi trips. This output is fed as an input to step 2 which then produces an output of partial link travel time estimation. Step 3 then takes the step 2 output as input and produces the ultimate result which is the dynamic link travel time estimation.

In step 3, we use a model called Traffic Graph Convolution Network (TGCN). In essence, the road network can be represented as a graph where each vertice is an intersection and the edge is the road segment connecting these intersections. These nodes can then learn information from its neighbor to estimates its own travel time. For example, in Figure 4, the node u can learn travel time from its neighbors v1, v2, v3,\_ and v4. By repeating the TGCN operation multiple times, node u not only can receive information from its nearest neighbors but also neighbors that are further away. The mathematical formulation behind TGCN operation is also simple and elegance which facilitates the ease of training.

<p align="center">
  <img src="/images/research-blogs/tgcn/Image 27.png" width = 400
  />
  <br>
	Figure 4. Representation of TGCN
</p>
Since this project is still under going, the results are not available at the moment.

## Author's Contribution in this project

The author is responsible for the problem concept, methodology, modeling in software, and writing of the paper. First, the taxi dataset is downloaded and stored in a PostgreSQL and geocoded with PostGIS. Second, OpenStreetMap data is used for New York city road network and the raw taxi data is mapped into the road network’s real node. Figure 5 shows an example of data mapping. Parrallel computing is used to accelerate this pre-proccessing process. The Traffic Graph Convolution Network is coded in a python script using Tensorflow Functional API. The predicted path is generated by the Yen’s kth-shortest path (KSP) algorithm from the pgRouting package of PostGIS.

 <p align="center">
  <img src="/images/research-blogs/tgcn/Image 28.png" width = 600/>
  <br>
	Figure 5. Example of data mapping
</p>

---
title: 2019 Seismic Design Competition in Vancouver, BC
order: 4
thumbnailURL: /images/research-blogs/sdc/20190309_053430570_iOS.jpg
thumbnailAlt: Seismic Design Competition
description: How the University of Memphis won the third place at the 2019 Seismic Design Competition?
---

# 2019 Seismic Design Competition

This blog is about the engineering behind a winning third place structure at the 2019 Seismic Design Competition in Vancouver, BC Canada.

# 1. Competition Problem Statement

The participating team is tasked with the design and construction of a structure made from Balsa Wood. The structure is then evaluated by the following criteria: (1) Annual Revenue based total floor area, (2) Annual Building Cost based on weight and adhering to structural requirements, and (3) Annual Seismic Cost based on the structure’s seismic performance and displacement prediction. The structure will be tested on a shaking board imitating an earthquake event and the ground motion details are given for the design. There are 2 ground motions representing a medium and heavy earthquake. Dead loads in form of steel rods and bolts are added to further test the structure. For more details on the rule of the competition, the readers can download this document.

The competition is held in Vancouver, British Columbia and includes a lot of excellent univeristies around the world (i.e., Stanford, Cornell, UC Berekely, etc..) and our team at the University of Memphis ranked third in the competition. For the full video of the events and our structure’s performance (starts at 35:34) on the earthquake, please follow this link: https://fb.watch/adztRYe8lL/

# 2. Structural Engineering

<b>Seismic Load Mechanism:</b>
Due to the acceleration of the ground relative to the structure itself, we can earthquake forces is a ficticious force acting horizontally on any object with significant mass. This force is very similar in direction and behavior to wind forces. Therefore, the building behaves much like a cantilever beam where the maximum moment is occuring at the bottom of the building.

<p align="center">
  <img src="/images/research-blogs/sdc/Picture1.png" width = 200/>
  <br>
	Figure 1. Illustration of Seismic Load
</p>
Since the lobby is twice as high as the remaining stories, its Euler Critical Buckling force is four times weaker than others column. The internal compression force are much greater as well due to the maximum moment explained earlier. Therefore, we reinforce the lobby and introduce middle and angle bracing to counteract this phenomena.
<p align="center">
  <img src="/images/research-blogs/sdc/Picture3.png" width = 700/>
  <br>
	Figure 2. Lobby Bracing
</p>

<b>Horizontal In-plan Bracing due to Structural Irregularity:</b>
The building maximum footprint as defined in the rule has a t-shape and thus, it introduces structural irregularity into the analysis. The center of diaphargm does not lie in the middle of the floor plan. Therefore, the earthquake will have an effect on the floor in the same way that a torsional force is applied on a T-beam. Therefore, we add diagonal bracing to the floor since the beams alone are not enough to withstand this force.

<p align="center">
  <img src="/images/research-blogs/sdc/Picture4.png" width = 200/>
  <br>
	Figure 3. Torsional Force
</p>

<b>Structural Bracing Topology Optimization:</b>
The term topology optimizationis a process of finding a better topology in increasing structural strength against a specific type of load (i.e., earthquake) with less material. The traditional bracing for lateral load is an X-frame. However, we use a different type of bracing namely super bracing. The analysis shows that it has twice the strength-to-weight ratio compared to X-bracing. The rationale of super bracing is to distribute less load to the outer columns since it is the member with the lowest Euler critical buckling load due to its longer length.

<p align="center">
  <img src="/images/research-blogs/sdc/Picture5.png" width = 700/>
  <br>
	Figure 4. Topology Optimization with X-bracing (left) and Super Bracing (right)
</p>

<b>Structural Analysis</b>
The building is first modeled in Revit Structure. Revit allows a 3D model of the structure and from which, several technical drawing plans are exported for the real construction. The architecture rendering is based on this 3D model too. In terms of structural analysis, the author used ETABS with the technique of Response spectra analysis. The results gathered are (1) would the structure survive the earthquake? (2) Rooftop displacement prediction, and (3) Structural members’ internal force. As expected, we see a lot of internal forces on the beams of the floor plan due to torsional and axial forces on the columns at the lower stories and lobby.

<p align="center">
  <img src="/images/research-blogs/sdc/Picture6.png" width = 1000/>
  <br>
	Figure 5. Result from ETAB Analysis
</p>
<b>Construction</b>
With the experience from last year, the team printed a 3D mold to fit the floor beams to ensure the accuracy in dimension. The floor beams are then constructed individually. On the base plate, several foundations (i.e., holes) are excavated and the lobby’s columns are fixated into these to ensure a full rigid connection. Then, the remaining columns and bracing are glued together to produce the final structure.
<p align="center">
  <img src="/images/research-blogs/sdc/Picture7.png" width = 300/>
  <br>
	Figure 6. Construction of the Building
</p>

## Author's Contribution in this project

The author is the main person that works on the structural design of this structure. This includes research on seismic load mechanism, reinforced lobby structural, horizontal inplan bracing, and topology optimization. The author also carries out the modeling in Revit and analyzing in ETABS. The poster and presentation are designed and presented by the authors. However, the construction of the structure relies on the other team members.

## Additional Resources

<a href="/pdf/SDC_2019_UofM_Poster.pdf">Link to Poster</a>
<a href="/pdf/SDC_2019_UofM_Presentation.pdf">Link to Presentation</a>
<a href="https://photos.app.goo.gl/tzYEt6n5qfowAR168">Photos from the competition</a>

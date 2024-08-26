---
sidebar_position: 2
---

# Enhancements 

The **ENHANCEMENTS** menu is displayed when clicking the second button on the left menu and it is collapsed when clicking the same button again. This menu lets you apply different layers to the existing process views, which highlight information that may be interesting for your analysis.

![enhancement_heat_map](/img/enhancement-numeros-heat-maps.png "enhancement_heat_maps")

Figure 1. ENHANCEMENT menu

## Maps (1)  

Depending on the option selected in the drop-down **_Map_**, heat maps or difference maps are applied on the process views represented in the **MAIN** perspective.

![enhancement_detail_heat_maps :small](/img/enhancement-detail-heat-maps.png "enhancement_detail_heat_maps")

Figure 2. Heat maps

### Heat map

When the **HEAT** option is selected, the options to apply the heat maps are displayed and then you can select the criteria with which the **_nodes_** and **_transitions_** are colored. Taking the **_Executions Number_** as an example, the maximum and minimum value of all the executions per transition is chosen and the correspondence with the colors is calculated, green being assigned to the minimum values and red to the maximum values as shown in figure 3.

When modifying the bars with the %, those nodes that have less than, for example, 20% of the total **_Executions Number_**, are colored in green; and those nodes that have more than, for example, 80% of the total, are colored in red.

![enhancement_legend_heat_map](/img/enhancement-leyenda-heat-map.png "enhancement_legend_heat_map")

Figure 3. Legend of Heat Map

Colors can be used to represent, for example, the time a patient has spent at each node or the number of patients who have transitioned.
*	In the case of nodes, if the default parameters are not modified, green means that patients have spent a short time in the node, while red represents that the time has been long.
*	Similarly, in the case of transitions, green by default means that few patients have gone through this transition, while red indicates a greater number of patients going through the transition.
*	This "enhancement" or improvement on the map, facilitates the understanding of cases that may occur, such as bottlenecks in the emergency service.
*	Within the drop-down with the criteria to apply to the nodes, there are the following options:
    *	**_Executions Number_**. The number of executions that have passed through that node.
    *	**_Traces Number_**. Number of traces that have passed through that node.
    *	**_Duration Summation_**. The sum of all the time of all the executions that have passed through this node.
    *	**_Duration by Trace_**. The duration per trace is the time spent in a node (e.g., in the emergency room), within the same episode. For instance, the time that a patient is in _Admission_ would be divided by the total trace time (or episode).
    *	**_Duration Average_**. Average duration of all executions that have passed through a node.
    *	**_Duration Median_**. This is the median duration of all executions that have passed through a node.

![transitions_statistics :medium](/img/calculo_transiciones.png "transitions_statistics")

Figure 4. Duration, transition and full transition

The drop-down with the criteria for transitions contains:
*	**_Executions Number_**. The number of executions that have undergone a transition.
*	**_Traces Number_**. The number of traces that go through a transition.
*	**_Duration Summation_**. The sum of all the durations of all the executions associated with that transition, counting the time spent at the node where the transition was born. For example, if we refer to figure 4, the existing transition between the _Triage_ node and _Wait1_ would have a duration equal to the time spent in the _Triage_ node.
*	**_Duration by Trace_**. Duration per trace is the time at the node of all runs associated with that transition, divided by the number of traces that pass through the transition.
*	**_Duration Average_**. Average length of time at the node of all executions associated with that transition.
*	**_Duration Median_**. Median length of time at the node of all executions associated with that transition.
*	**_Full Duration Average_**. Average duration of time at the node of all the executions associated with this transition, understanding the transition as the time between the beginning of node A and the beginning of node B (figure 4).
*	**_Full Duration Median_**. Median duration of time at the node of all the executions associated with that transition, understanding the transition as the time between the start of node A and the start of node B.

Changes are applied immediately.

### Differences between maps

![enhancement_detail_difference_maps :small](/img/enhancement-detail-difference-maps-numero.png "enhancement_detail_difference_maps")

Figure 5. Difference map

*	Another possible "enhancement" is the difference between process views (figure 5), which corresponds to the **_Difference_** option in the **_Map_** menu.
*	To do this, you must select the process view you want to make the comparison with (1). For example, if the difference maps are calculated taking as a reference the process view "Age: Kid" (as in figure 7), the comparison is made node by node; that is, the **_Executions Number_** of the _Arrival_ node in the reference process view is subtracted from the **_Executions Number_** of  the same node in the current process view.
*	As shown in figure 6, the legend indicates the view of the reference process the comparison is being made against.
*	The fewer the difference of **_Executions Numbers_** between both process views is, the greener it is shown; and the greater this difference is, the redder it is colored. On the other hand, if the difference is almost zero, the node is shown whiter.

![enhancement_legend_difference_map](/img/enhancement-leyenda-difference-map.png "enhancement_legend_difference_map")

Figure 6. Difference Maps legend

As an example, figure 7 shows the difference between the "Age: Kid" process view and the currently displayed process view. 

![enhancement_difference](/img/enhancement-difference.png "enhancement_difference")

Figure 7. Difference between process views

## Statistical significance (2)

Statistical significance is calculated between the process view selected in the **_Main View_** drop-down and the rest of the process views, and a node-by-node comparison of nodes with the same activity is made, comparing the duration of all executions between these two nodes. For example, the emergency process can be compared between men and women.
Parameters can be adjusted.
To finish this process, it is necessary to click on the **_Add statistical significance_** button (represented with a '+' sign).
The result will be displayed as it appears in figure 8, highlighting those nodes where there is a significant difference.
To "clean" the process views and stop showing statistical significance, click on the **_Delete statistical significance_** button (represented with a _trash can_).
If the tab with the map used to calculate statistical significance is closed, the statistical significance of the rest of the process views will be "cleaned up".

![enhancement_significance_stadistic](/img/enhancement-significance-stadistic.png "enhancement_significance_stadistic")

Figure 8. Statistical significance

## Abstractions (3)

Finally, we have the abstractions that, as in [Groups menu](./groups-menu), allows launching a new experiment of a % of the total data in a new PMApp.
With that said, it is not necessary to always extract such data. When selecting the % of the total data that we want to be shown, these are highlighted in the process view automatically, leaving the rest of the data that is discarded with a more subdued color, as shown in figure 9.

:::warning
The calculation of the data selected and highlighted in the process view is done by taking into account the number of executions in each node. For example, if a selection of 80% of the data is made, those nodes with less than 20% of executions are eliminated, keeping the most frequent paths.
:::

To carry out the extraction, you must choose the % of data to be extracted and click the **_Extract abstraction_** button _(represented with a square and a right arrow coming out of it)_.

![enhancement_extraction](/img/enhancement-extraction.png "enhancement_extraction")

Figure 9. Abstractions


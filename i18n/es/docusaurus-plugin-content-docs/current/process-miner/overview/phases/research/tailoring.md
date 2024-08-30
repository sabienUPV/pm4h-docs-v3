---
sidebar_position: 2
---

# Tailoring levels 

So far it has been explained the process until defining an IPI, from now on, it is explained how to configure this IPI to be provided to the health professionals. This configuration can take place at two tailoring levels:

*	**Level 1. Runner file**. The process miner designs an IPI based on health professionals indications. The result is a configuration file named [runner](../../glossary.md#runner). This configuration can be:
	*	**Basic**. it uses the available blocks in the [Experiment Designer](../../../ipmt/user-guide/experiment-designer/intro.md) and [Ingestor Editor](../../../ipmt/user-guide/experiment-designer/ingestor-editor.md) available in the IPMT that can be downloaded from [here](../../../ipmt/download.md#versions), and where the main elements are:
		*	**Line Validators and Filters** determine the final number of traces and executions among others. The warning messages defined in these blocks are listed in the [Ingestion Report](../../../ipmt/user-guide/pmapp/menu/more-options-menu.md#ingestion-report) available in PMApp for process miners.
		*	**Events** determine the nodes represented in the process.
		*	**Trace data** appear as categories and options in the [GROUPS menu](../../../ipmt/user-guide/pmapp/menu/groups-menu.md) of PMApp. Only **String** and **String[]** values are shown as categories and options in the GROUP menu.
		*	**Trace data** appear also as categories in the [STATISTICS & CHARTS menu](../../../ipmt/user-guide/pmapp/menu/statistics-and-charts-menu.md) of PMApp. In this case, **String**, **String[]** and **double** values are shown as categories.
	*	**Advanced**. it develops new blocks from scratch to be used in the **Experiment Designer** or **Ingestor Editor** as it is explained in the [create a block](../../../generaldocs/tutorials/create-a-block/intro.md) section. For going to this modality it is necessary to follow the instructions in [here](../../../generaldocs/tutorials/new-pmapp-project.md).

![How a runner customizes PMApp](/img/pmapp-customizated-runner.png "How a runner customizes PMApp")
Figure 8. How a runner customizes PMApp

*	**Level 2. PMApp customization**. This includes the possibility of adding new elements. For the moment this level of customization is not available. 


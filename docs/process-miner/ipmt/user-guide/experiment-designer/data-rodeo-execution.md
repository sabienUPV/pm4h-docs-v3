---
sidebar_position: 4
---

# Data rodeo execution

In this section is described what is been done with the data in each phase of a data rodeo.

![Data rodeo execution](/img/data-rodeo-execution.png "Data rodeo execution")
Figure 8. Data rodeo execution

*	**Factories**. During the ingestion process the data is treated row by row, then, after the ingestion process the data is ready to generate a Process Mining Log per ingestor. Each Log includes a unique trace per ID. Once the Log is ready filters can be applied to each one.
*	**Filters**. Filters can be applied to the logs generated during the ingestion process such as [split filters](../../../overview/glossary#split-filter) to cut the unique traces into several, [stratification filters](../../../overview/glossary#stratification-filter) to calculate new Trace and Event metadata, [corrective filters](../../../overview/glossary#corrective-filter) to correct or simplify the log according to the health professional criteria or [discretizer filters](../../../overview/glossary#discretizers-filter) to make more understandable numerical values.
*	**Log processors**. This phase is focused on applying the [discovery](../../../overview/glossary#discovery) process mining algorithms in order to identify the final log.
*	**TPA Processors**. In this phase, trace data can be used to calculate statistics, event and trace metadata and/or abstractions. 
*	**Renders**. In this phase, the process is presented including techniques of [conformance](../../../overview/glossary#conformance) and/or [enhancement](../../../overview/glossary#enhancement) that will help to highlight the especifities of the model.


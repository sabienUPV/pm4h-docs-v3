---
sidebar_position: 6
---

# Best practices

This section provides a set of recommendations for a better performance during data rodeos

*	Define a name for the runner file  that you are creating, and its version. It helps to have control of the changes applied into the runner file after each data rodeo.

*	Include a brief description of what is new in each version. It helps to have control of the changes applied into the runner file after each data rodeo.

*	Create a study case folder, which include sub folders for the different versions, where each includes a instalable, runner, data, and resources and manual (this last is not mandatory) folder. Examples of resources are process positions and process conformance files used by the runner. It helps to keep a version of each runner setup in case we need to roll back any change.

*	Once the runner is mature enough, launch the experiment, save a process conformance file (TPA One File Model \*.itpa). This file is used by the [Delete not Corforming Traces filter](../../../generaldocs/reference/api/blocks/filters/delete-not-conforming-traces-filter.md), which is in charge of deleting all traces that do not conform to a given TPA. After [phase 2. Filters](./intro.md#phases), this is a very useful block to deal with data quality. This file contains all the nodes and transitions that later on clean be cleaned with the [Process designer](../process-designer.md), together with the health professional, who will be able to discern between right or wrong transitions and events. It helps to make the health professional aware of the rare cases and the data quality.

*	Add warnings in the Line Validators blocks of the [Ingestor editor](./ingestor-editor.md#ingestion-area). It facilitates to identify data problems in the [Ingestion report](../pmapp/menu/more-options-menu.md#ingestion-report). It helps to make the health professional aware of how the data quality affects the final results.



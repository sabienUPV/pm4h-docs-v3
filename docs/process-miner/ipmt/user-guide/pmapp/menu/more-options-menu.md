---
sidebar_position: 5
---

# More Options 

The **MORE OPTIONS** menu accesses information related to the experiment.

## Save experiment

This menu allows saving the current experiment as a runner file in format "rnr.zip". This generates a file that saves the experiment configuration, the generated process views, and some pre-calculated data to speed up the loading process next time it is run.

![save_experiment](/img/salvar-experimento.png "save_experiment")

Figure 47. Save experiment

## Experiment configuration

This option opens a new perspective that displays the name of the experiment, description, and path to the used resources, as well as the data files (when this information is available).

![experiment_configuration](/img/experiment-configuration.png "experiment_configuration")

Figure 48. Experiment configuration

## Ingestion report

The ingestion report is available in the PMApp version included in the Interactive Process Mining Toolkit.

For each CSV file information is provided  about row data validation (1) and traces extraction (2) 

**(1) ITERATING LINES**	
*	In the **Summary** tab: analyzed, validated and rejected lines are the result of checking the rows and data format. For example, in the case of finding extra ";" or CR in the cells, the row will be rejected because those symbols are not allowed. Another example is: invalid rows that do not follow the CSV format.
*	In the **Skipped Data** tab the lines rejected can be consulted, and the reasons. Lines are numbered and can be checked directly in the csv files. Notice that some CSV editors like Excel may hide some of these not-allowed symbols. Instead, Notepad++ or similar editors are recommended.

**(2) EXTRACTING TRACES**
*	There is a second round of verifications based on the Line Validators at the Ingestor editor. For example, undesirable values for TimeStamps fields are NULL or EMPTY.
*	In the **Skipped Data** tab the lines rejected can be consulted and the Warning message included in the Line Validators of the [Ingestor editor](../../experiment-designer/ingestor-editor).

![Ingestor report 1](/img/ingestion-report-1.png "Ingestor report 1")

Figure 49. Ingestor report - detail 1


After processing all CSV files, filters are applied: filters located at the ingestor **(3)** and filters located at the data rodeo flow **(4)**. 
*	The Skipped Data tab shows the **traces** that have been rejected, for example because they are not formed according to the TPA defined in the Delete not Conforming Traces block

![Ingestor report 2](/img/ingestion-report-2.png "Ingestor report 2")

Figure 50. Ingestor report - detail 2


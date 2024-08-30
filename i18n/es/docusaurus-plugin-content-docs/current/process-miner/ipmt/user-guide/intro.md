---
sidebar_position: 1
---

# Interactive Process Mining Toolkit

The **Interactive Process Mining Toolkit** is composed of several tools that are presented below in the corresponding order of appearance (left sidebar menu). The starting point is the **HOME** window; from where, on opening the program, the user will be asked for login.

![New Interactive Process Mining Toolkit](/img/new_ipmt.png "New Interactive Process Mining Toolkit")
Figure 1. Interactive Process Mining Toolkit

*	**Home**. From here [experiments](../../overview/glossary.md#experiment) can be launched. 
*	[Experiment designer](./experiment-designer/intro.md). This is where the [data rodeo process](../../overview/phases/research/data-rodeo.md#data-rodeo-process) is implemented. The Experiment designer has several components —_drag and drop_ block elements— to allow the process miner to configure a [runner](../../overview/glossary.md#runner) file. *PMApp* automatically fills its containers with these runner elements to be customized. The first stage of a data rodeo is to define a [factory](./experiment-designer/factories/csv.md). Some of these factories require the creation of an *ingestor*, which is implemented in the [Ingestor Editor](./experiment-designer/ingestor-editor.md). The ingestor has several components that are created as drag and drop [block elements](../../generaldocs/reference/api/intro.md) to allow the process miner to configure the ingestion. However, new components can also be created as [runner block elements](../../generaldocs/tutorials/create-a-block/intro.md). *PMApp* automatically fills the blocks with the runner elements available in the app.
*	[Process designer](./process-designer.md). It allows editing or creating scratch processes (_TPA files – \*.itpa,\*.stpa_) that can later be used in specific runner blocks.
*	[Remote experiments](./remote-experiments.md). It allows executing experiments on a remote server. Some works may take longer or even block the computer, for that reason it is recommendable for heavier experiments to execute them remotely.
*	[Settings](./settings.md). It allows configuring some characteristics of the *IPMT*, such as the remote server to launch experiments on.
*	[PMApp](./pmapp/intro.md). The core element, where the analysis is carried out by the health experts or the process miners.


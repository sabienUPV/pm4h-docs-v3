---
sidebar_position: 1
---

# Introduction

If you are reading this tutorial is because you have PMApp. First step is to open and run an experiment. 

## Run an experiment

The new version of PMApp works with **_runners_**, which is a configuration file that defines the experiment to work with. To do so, follow the next steps:
*	Once the application is running, the **HOME** screen appears.

![home](/img/home.png "home")

Figure 1. HOME screen

*	In the **HOME** screen, click the **OPEN** button. This will open the wizard that will guide you in the process of launching an experiment.
    * Make sure to look for the right file type, usually with extension _"Runner file *.rjson"_ or _"ZIP Packed Runner *.rnr.zip"_, as shown in the next figure. 

![home_file_explorer](/img/home_explorador_de_archivos.png "home_file_explorer")

Figure 2. File explorer to select a runner file

*	The wizard is there because the **_runner_** file is prepared by the **_process mining_** expert with whom you have worked in the data rodeo.
*	This configuration displays the **name** and **description** of the experiment, which may have been defined by the **_process miner_**. If not, it will automatically pick the name of the selected file. Both the name and description of the experiment **can be modified**.
*   It also references several files that are needed to run the experiment. The path to some of these files must be updated, and the wizard will highlight them.

![wizard_home](/img/wizard_home.png "wizard_home")

Figure 3. Wizard screen

*	As shown in the previous figure, to update the mentioned file paths, you must click on **SEARCH**. This will open a file explorer to locate said file. Once all files are updated, click on **SAVE** in order to save these and other changes for later runs.

*	The **CANCEL** button closes the wizard and returns to the **HOME** screen.

*	In the next step, click on **RUN** to run the experiment. This opens the **MAIN** screen that displays information about the execution state, leaving the **HOME** screen in the background for running other experiments.

:::warning 
 Before running the experiment, check that the data files (.csv) are not currently open by another program, or else PMApp will not have access. **Data files must be closed when running the experiment.**
:::

![experiment_running](/img/ejecucion_del_experimento.png "experiment_running")

Figure 4. The screen while an experiment executes

## Update PMApp

*   When starting PMApp, a message will pop up reporting if a new version is available (figure 5).
*	To start the update to the new version, click on **YES**.

![new_version_1](/img/nueva_actualizacion_1.png "new_version_1")

Figure 5. Pop-up message when there is a new PMApp version

*	The update file must be downloaded first:
    *	You will be prompted where to download the update file, as shown in figure 6.
*	Once the update file is downloaded, **close the application** (this is a must). Run the update file and follow the on-screen instructions to complete the update.

![new_version_2](/img/nueva-actualizacion-2.png "new_version_2")

Figure 6. Save update file

Once the experiment execution is finished, PMApp is ready for work. For more information, check [Main window](./main-window) 


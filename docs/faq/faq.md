---
sidebar_position: 2
---

# Frequently Asked Questions

## Why is there an error when I execute my experiment?

Once PMApp starts, the **OPEN** button opens the wizard that will help you execute the experiment. Once the runner file is selected, the wizard will ask for the location of the necessary files to execute the experiment. If an error appears while trying to execute, it is probable that you forgot to update the file paths of some of these files. 

## I indicated the file paths in the wizard. Why is there still an error when running the experiment?

It is probable that one or more of the data files of the experiment are opened somewhere else by another program. Make sure they are closed and try again.

## Why do I need to indicate the file paths used in the experiment configuration every time I want to execute it?

Once PMApp starts, the **OPEN** button opens the wizard. Notice the **SAVE** button at the bottom. Next time you indicate the location of the file paths, remember clicking on the **SAVE** button before executing the experiment with the **RUN** button. This will save the changes so the paths will be preserved.

## I have organised the nodes the way I like. Why do not they show up in the same place the next time I run the experiment?

You can organise nodes in a process view as you wish. To make these changes permanent, you must save a position file. This option is available in the menu of each of the process view tabs. For more information about how to do this, check [Main perspective](../perspectives/main-perspective#menu-of-a-process-view).

## Why does PMApp stop responding sometimes?

It may be one of two reasons: 

1. It may be doing internal calculations, and at some point it requires more resources and appears to “freeze” for some seconds, even minutes. Give it some time and it should return to normal. 
2. You may have opened a secondary screen or dialog that requires your input, but it’s hidden behind the main screen. These dialogs usually block process elsewhere in the application. Once you locate that screen or dialog and provide the required input the application will run normally.

## What can I do so my experiment does not take so long every time I run it?

Once an experiment is run, you can save it with the **_Save Experiment_** option in the **MORE OPTIONS** menu ([More Options menu](../perspectives/menu/more-options-menu)). This way, the next time you run the experiment, you can use the saved file with extension ".rnr.zip". This file contains many of the calculations that are needed to run an experiment, so running from a .rnr.zip will speed up the process.

## Can I rename the tabs that appear when launching a new group?

Yes, each of these tabs show a process view, in which a menu is available, where one of the options is to show a screen with information about the process. On that screen there is a field called **_Name_** that can be modified to change the name of the tab. For more information see [Main perspective](../perspectives/main-perspective#menu-of-a-process-view).
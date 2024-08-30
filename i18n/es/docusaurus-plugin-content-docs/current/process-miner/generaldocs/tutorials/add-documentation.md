---
sidebar_position: 7
---

# Update documentation

In the case that new functionalities have been added to PMApp, the documentation should be updated before providing it to health experts.

This is possible by updating the documentation already available in [this independent .Net project](https://bitbucket.org/sabien/pm4h-help/src/docusaurus/).

## Install Docusaurus

After downloading the documentation project, it is needed to install Docusaurus. You can access to the instructions by clicking [here](https://docusaurus.io/docs/installation).

## Add content

The documentation is divided into perspectives, where each one describes the information related to the menu associated to that perspective.

*   In the case of adding a **new perspective**, a new Markdown (`.md`) file should be created, inside which this new perspective will be described.

*   In the case of adding a **new option in a menu**, it should be described in the corresponding perspective Markdown file (`.md`). 

    *   In the case of having a considerable number of options in the menu, it should be considered to add a folder named **menu**, where the different .md will be placed (as it is the case for the main perspective menu).

## Compile documentation

To compile the documentation follow the instructions [here](https://docusaurus.io/docs/installation#build).

## Upload the new version

After compiling, copy the contents generated within the `/build` folder into the corresponding web server or follow the next steps in case you are a PM4Health lab worker:

* Connect your professional VPN.

* Connect to the network share located at **`\\\\<PM4HLab_Server_IP>\help\PMApp`** and create _(if it does not exist)_ a folder for the documentation _(if you do not have access contact the administrator)_.

* Copy the contents generated within the `/build` folder to the new folder. To do this you can use either Windows Explorer or the **Robocopy** console command. The following command copies all new files to the server:

```
    robocopy "<Your_Folder_Path>\build" "\\<PM4HLab_Server_IP>\help\PMApp\<Your_App_Folder>" /e /xo /im /mt
```
## Update documentation link

If the documentation is placed in a new location, the `MainWindow.xaml.cs` file of the new PMApp project must be updated with the new URL of the documentation:

```
    PM4HWindowConfiguration.HelpUrl = new Uri("http://<PM4HLab_Server_IP>/help/pmapp/docs"); 
```
## Generate a PDF

If needed, a PDF file can be created with the feature available [here](https://docusaurus.io/community/resources#features). An example would be:

```
    npx mr-pdf --initialDocURLs="http://<PM4HLab_Server_IP>/help/pmapp/docs/docs/intro/" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a" --coverTitle="Interactive Process Mining Toolkit"    
```

But there are more examples available [here](https://www.npmjs.com/package/mr-pdf).

The generated file is named `mr-pdf.pdf`, and it should be renamed to `PMApp_doc_vX.pdf`, where "X" is the version of the new PMApp.

## Update documentation with a local file

In case the health organization where the new PMApp version is going to be installed does not have an internet connection, a generated PDF file can be included as documentation.

To do so, update the `MainWindow.xaml.cs` file of the new PMApp project with the new URL as follows:

```
    PM4HWindowConfiguration.HelpUrl = PM4HWindowConfiguration.CreateUriHelpToFile("\\Help\\PMApp_doc_vX.pdf"); // Local file help
```
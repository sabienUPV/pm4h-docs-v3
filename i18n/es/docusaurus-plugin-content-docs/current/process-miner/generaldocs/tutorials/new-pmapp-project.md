---
sidebar_position: 1
---

#  Create a new PMApp project

In order to create a PMApp for data rodeos you should follow the following steps:

* Start a new **WPF** Windows Application in Visual Studio (If you do not have installed Visual Studio click [here](https://visualstudio.microsoft.com/es/downloads/) to get the latest version)<br/><br/> ![WPF](/img/pmapp-project-wpf.jpg)
    * Make sure that the selected framework is `.NET Core 3.1`
    
    ![WPF](/img/pmapp-project-wpf-framework.jpg)

* Add the PM4H Nugets Repository in Visual Studio (http://158.42.166.249/NugetProduction/nuget)

* Install the `pm4h.PMApp.core` Nuget package

* Add a `pm4h.PMApp.core.PMAppControl` object in the MainWindow

```
   public partial class MainWindow : Window
    {
        PMAppControl pmappcontrol = new PMAppControl();
        public MainWindow()
        {
            pmappcontrol.Show();
            InitializeComponent();
            Content = pmappcontrol;
        }
    }

```

* To configure the application:

    * For **process miners**, add `PMAppWinConfig.ActiveConfig = new PMAppDataMinerWinConfig();` in the MainWindow
    
    * For **health professionals**, add `PMAppWinConfig.ActiveConfig = new  PMAppClientWinConfig();` in the MainWindow

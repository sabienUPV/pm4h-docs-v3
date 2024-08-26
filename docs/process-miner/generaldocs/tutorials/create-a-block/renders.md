---
sidebar_position: 7
---

# Renders

A Render is a class that modify visual features in a visual TPA. A variable operation follows the interface *pm4hlab.datarodeos.ITPARenderMap*.

```
   public interface ITPARenderMap
    {
        void Render(List<TPAViewerEngine> ViewerList, TPAViewerEngine SelectedViewer);
    }

```



The *Render* method will Apply the changes in the TPAs. An example of that is:

```
    [RunnerElement]
    public class StatsInfoLabelTrantitionsBlock : ITPARenderMap
    {
        [SelectionRunnerProperty (DataProvider = "pm4hlab.windows.ui.blocks.runnerelements.ExperimentTransitionStatsDataProvider")]
        public string Selected { get; set; }

        public void Render(List<TPAViewerEngine> ViewerList, TPAViewerEngine SelectedViewer)
        {
            StatsTransitionLayerRender res = new StatsTransitionLayerRender(Selected) { transitionaction = new TPATransitionTagActionRender() { DateTimeMode = true } };

            res.Render(ViewerList, SelectedViewer);
        }
    }
    }
```



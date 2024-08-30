---
sidebar_position: 6
---

# Model processors

The Model Processor phase is in charge of Update the Models inferred by the discovery algorithms adding maps, stats, node positions or other post-discovery algorithms

A Model Processor should follow the interface *pm4h.tpa.ipi.ITPAProcessor*. This is :

```
    public interface ITPAProcessor
    {
        IEnumerable<iTPAModel> ProcessTPA(IEnumerable<iTPAModel> tpa);
    }

```

The method *ProcessTPA* is in charge of update the *iTPAModel* collection


```
 [RunnerElement(Name = "Chart Series Reorder", Description = "Allows to define a basic order on chart series.")]
    public class ChartOrderSerieOperator : ITPAProcessor
    {

        [DataProviderRunner(DataProvider = "pm4hlab.windows.ui.blocks.runnerelements.ChartOrderSerie", Name = "Order")]
        public Dictionary<string, Dictionary<string, int>> Order { get; set; } = new Dictionary<string, Dictionary<string, int>>();

        public IEnumerable<iTPAModel> ProcessTPA(IEnumerable<iTPAModel> tpa)
        {
            if (Order.Count > 0)
            {
                foreach (var model in tpa)
                {
                    foreach (var variable in Order)
                    {
                        StatsTable table = model.getTraceStats().getStatTableByName(variable.Key);
                        foreach (var row in table.rows)
                        {
                            row.Value.order = variable.Value[row.Key];
                        }
                    }
                }
            }

            return tpa; 
        }
    }

```



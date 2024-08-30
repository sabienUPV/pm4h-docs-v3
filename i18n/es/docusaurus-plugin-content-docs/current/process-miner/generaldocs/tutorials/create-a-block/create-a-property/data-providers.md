---
sidebar_position: 6
---

# Data providers

This property allows the delegation of the population of a variable trough a user control. The user control indicated should implement the interface *IPMAppDataProvider*:

```
    public interface IPMAppDataProvider
    {
        object getData();
        void setData(object data);
    }
```

The method *getData* returns the object populated by the Data Provider, this method is called in case the Runner Engine needs the object to save the Runner or to be executed in PMApp. On the other hand, the method *setData* is called to provide a initialization of the data in the user control.

Example:

In the example we show a block that allows to define the order in a set of stats. The property *`Dictionary<string, Dictionary<string, int>>`* is provided by the user control *ChartOrderSerie* that are indicated in the *DataProvider* field that is in the *DataProviderRunner* annotation of the property.

```
    [RunnerElement(Name = "Chart Series Reorder", Description = "Allows to define a basic order on chart series.")]
    public class ChartOrderSerieOperator : ITPAProcessor
    {
        ...
        [DataProviderRunner(DataProvider = "pm4hlab.windows.ui.blocks.runnerelements.ChartOrderSerie", Name = "Order")]
        public Dictionary<string, Dictionary<string, int>> Order { get; set; } = new Dictionary<string, Dictionary<string, int>>();
        ...

```

```
    public partial class ChartOrderSerie : UserControl, IPMAppDataProvider
    {
        ...
        public Dictionary<string, Dictionary<string, int>> Order { get; set; } = new Dictionary<string, Dictionary<string, int>>();

        ...

        public object getData()
        {
            return Order;
        }
        ...
         public void setData(object data)
        {
            if (data is Dictionary<string, Dictionary<string, int>> obj)
            {
                Order = obj;
            }
            else
            {
                Order = new Dictionary<string, Dictionary<string, int>>();
            }
        }

```

Resultant Block

![Block](/img/DataProviderRunner.jpg)


Window after pressing the button

![Block](/img/DataProviderRunner2.jpg)

---
sidebar_position: 1
---

# Introduction

To create new blocks, classes should be annotated with the *pm4h.runner.RunnerElementAttribute* (**RunnerElement**).
Name and Description are optional.

Example:

```
 [RunnerElement(Name = "Chart Series Reorder", 
  Description = "Allows to define a basic order on chart series.")]
    public class ChartOrderSerieOperator : ITPAProcessor
    { ...

```

Each block has to implement an interface, and may derive from a base class. In the above example, the block "Chart Series Reorder" has to implement ITPAProcessor.


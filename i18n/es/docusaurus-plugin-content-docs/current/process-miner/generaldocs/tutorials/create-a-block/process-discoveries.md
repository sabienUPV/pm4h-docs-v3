---
sidebar_position: 5
---

# Process discoveries

The Process Discovery phase is in charge of creating a graphical model based on a Log

A Log Factory should follow the interface *pm4h.runner.IProcessDiscovery*. This is :

```

    public interface IProcessDiscovery
    {
        IEnumerable<iTPAModel> ProcessLog(IEnumerable<IPMLog> log);
    }

```

The method *ProcessLog* is in charge of providing the *iTPAModel* collection from each *IPMLog*.

```


    [RunnerElement(Name = "Memory PALIA Process Discovery")]
    public class PALIALogProcessor : IProcessDiscovery
    {
        public bool ComputeTraceStats = true;
        public IEnumerable<iTPAModel> ProcessLog(IEnumerable<IPMLog> log)
        {
            PALIAPlusAlgorithm palia = new PALIAPlusAlgorithm() { ParallelInference = false };



            return palia.ProcessDiscovery(log).ToList();
        }
    }


```


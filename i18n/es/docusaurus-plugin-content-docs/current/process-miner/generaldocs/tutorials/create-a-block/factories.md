---
sidebar_position: 3
---

# Factories

A Log Factory in is charge of providing the logs to the Application.

A Log Factory should follow the interface *pm4h.runner.ILogCreatorActionRunner*. This is:

```
    public interface ILogCreatorActionRunner
    {
        IEnumerable<IPMLog> getLog();
    }
```

The method *getLog* is in charge of providing the logs.


Example:

```

    [RunnerElement]
    public class ECSVLogCreator : ILogCreatorActionRunner
    {
        [RunnerExternalResourceFile(Default = "", Name = "eCSV data file", 
         Description = "eCSV file containing the data to use at the experiment.", 
         Domain = new string[] { "eCSV Files (*.ecsv)|*.ecsv" })
        ]
        public string ECSVPath { get; set; }


        public IEnumerable<IPMLog> getLog()
        {
            var res = new List<IPMLog>();
            res.Add(new EventCSVLog().LoadCSV(new PMLog(), ECSVPath));
            return res;
        }
    }

```

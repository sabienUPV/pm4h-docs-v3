---
sidebar_position: 4
---

# Filters

A filter is an object that can modify and select traces from the log and prepare it for the Discovery ([Log processor stage of the data rodeo process](../../../overview/phases/research/data-rodeo#data-rodeo-process)).

A filter follows the interface *IPMLogSafeFilter*, but in order to have a complete implementation it is highly recommended to build the filter inheriting from *pm4h.filter.PMLogParallelFilter* :

```
     public interface IPMLogSafeFilter : IPMLogFilter
    {
        Guid ExpId { get; set; }
        IEnumerable<IPMLog> ProcessLog(IEnumerable<IPMLog> _log);
        IEnumerable<IPMLog> ProcessLog(IPMLog _log, IPMLog target);
        IEnumerable<PMTrace> ProcessTrace(PMTrace _trace);
        IEnumerable<PMTrace> ProcessTrace(PMTrace _trace, TraceMetadata md);
        IEnumerable<PMEvent> ProcessEvent(PMEvent _event);
        IEnumerable<PMEvent> ProcessEvent(PMEvent _event, TraceMetadata md);
        IPMLogFilter Clone();
    }
```

The following figure shows the main properties of the Log, Traces and Events
![Main properties](/img/main-properties.png "Main properties")

This filter has some methods that can be overriden in order to change the behavior of the filter. 

- The *ProcessLog* method starts the filtering process, receiving a set of logs as input. Logs are processed sequentially.
- The *ProcessTrace* method is called for each trace inside a log. All the trace modifications should be performed in this method. The method receives as input:
    *   the trace to be processed, and a 
    *   threadsafe Metadata object called TraceMetadata that allows the sharing of data between Trace and Events. 

:::important
*PMLogParallelFilter* executes this method in several threads so it is **not possible to update data out** of this method. Otherwise a thread exception will be thrown.
:::

- The *ProcessEvent* method is called for each event inside a trace. Events are processed sequentially. All the event modifications should be performed in this method. The method receives as input 
    * the event, and a 
    * threadsafe Metadata object called TraceMetadata that allows the sharing of data between Trace and Events.

![Process log execution](/img/process-log-execution.png "Process log execution")

:::info
By default, the number of threads in the *PMLogParallelFilter* is 4, but it can be changed by modifying the *Maxthreads* property of the class.
:::

:::tip
For debugging *Maxthreads* can be changed to 1 in order to avoid parallelism during the execution.
:::

Example:

```
    public class DeleteVoidTracesFilter : PMLogParallelFilter
    {

        public override IEnumerable<IPMLog> ProcessLog(IEnumerable<IPMLog> _log)
        {
            foreach (var l in base.ProcessLog(_log))
            {
                if (l.Count() > 0)
                {
                    yield return l;
                }
            }

        }

        public override IEnumerable<PMTrace> ProcessTrace(PMTrace _trace)
        {
            foreach (var t in base.ProcessTrace(_trace))
            {
                if (t.Events.Count > 0)
                {
                    yield return t;
                }
            }
        }

        public override IEnumerable<PMEvent> ProcessEvent(PMEvent _event)
        {
            if (_event.ActivityName != null && _event.ActivityName != "")
            {
                yield return _event;
            }
        }
    }
```

## Emit messages in the Ingestor Report 

To emit messages in the ingestor report it is needed to call the static function **Warning** of the class **ExtractionReportDataWareHouse**


```
Sintaxis:
ExtractionReportDataWareHouse.Warning([Experiment ID], [WarningLevel], [Message]);


Example:
ExtractionReportDataWareHouse.Warning(ExpId, WarningLevel.SkippedData, $"Trace {t.SampleId} is not according the model: {t.ToTimeString()}");
```

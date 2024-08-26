---
sidebar_position: 11
---

# Trace data extractor

A Trace Data Extractor allows the selection of the Trace Data Associated in the log.

An Trace Daa extractor should be created inheriting from *pm4hlab.runner.ingestion.extractor.TraceDataExtractor*. 

For the *Extract* Method should be overrided for updating the log. The method *getTrace* provide the identified trace to modify.

Example

```

  [RunnerElement]
    public class TraceDataBaseExtractor : TraceDataExtractor, ITraceDataExtractor
    {


        [VariableRunnerProperty]
        public string Field { get; set; } = "";

        [RunnerProperty]
        public string Alias { get; set; } = "";


        public override void Extract(Dictionary<string, string> line, IPMLog target)
        {
            if (line.ContainsKey(Field))
            {
                var trace = getTrace(line,target);
                if (trace != null)
                {
                    if (Alias == null || Alias == "")
                    {
                        trace[Field] = line[Field];
                    }
                    else
                    {
                        trace[Alias] = line[Field];
                    }
                }
            }

           
        }
    }

```



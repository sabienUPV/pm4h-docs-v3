---
sidebar_position: 9
---

# Variable operations

A Variable Operation aims the creation of new variables that could be used in next stages of the ingestion. A variable operation follows the interface *pm4hlab.datarodeos.IVariableCompute*.

```
    public interface IVariableCompute
    {
        void Update(Dictionary<string, string> i);
    }
```

The *Update* method receive as input a dictionary with the name and values of all the fields. With that in your implementation you can add all the variables that you want to the dictionary to populate these variables to next stages.

Also, in order to create blocks, it is possible to create a variable operation by inheriting from *pm4hlab.runner.ingestion.variablecompute.BaseVariableOperation* that support a easier creation of blocks putting the assigned variable in a property.
In that case it is only needed to override the *getResult* method:

```
...

 public virtual string getResult(Dictionary<string, string> i)

...
```

With the *getResult* method only is needed to implemnt the computation of the variable, and the base object implement the variable asignation. An example of that is:

```
    [RunnerElement]
    public class YearsBetweenTwoDates : BaseVariableOperation, IVariableOperation
    {
        [VariableRunnerProperty]
        public string  Start { get; set; }
        [VariableRunnerProperty]
        public string End { get; set; }

        public override string getResult(Dictionary<string, string> i)
        {
            DateTime d0 = DateTime.Now;
            DateTime d1 = DateTime.Now;
            DateTime zeroTime = new DateTime(1, 1, 1);
            if (i.ContainsKey(Start) && DateTime.TryParse(i[Start], out d0))
            {
                if (i.ContainsKey(End) && DateTime.TryParse(i[End], out d1)) { }
                TimeSpan span = d1 - d0;
                var res = span.TotalDays / 365;

                return res.ToString();


            }
            return "-1";
        }
    }
```



---
sidebar_position: 8
---

# Line validators

Line Validators either accept or reject rows in the Ingestion.

An ingestor has a list of Line Validators that are processed sequentially, in the order they had in the Validation window area. When a Validator decides that a row either should be accepted or discarded then the process stops, passing to the next row. If the Line Validator did not make a decision (it returned *null*) the ingestor passes to the next validator.
Usually the last validator is an *AcceptbyDefault* or a *RejectbyDefault* validator that accepts or rejects, respectively, the rest of rows that none of the previous validators made a decision upon.

The Line Validator follows the interface *pm4hlab.datarodeos.ILineValidator*. Also, it is possible to create a custom lineValidator by inheriting from *pm4hlab.runner.ingestion.linevalidator*

```
public interface ILineValidator
{
    bool? Validate(Dictionary<string, string> line);
}

```

The *ILineValidator.Validate* method receives as input a dictionary with the name and values of all the fields in the row and returns a *bool?* that:
- If the result is *true* it accepts the row and the next validators are discarded for the same row/line.
- If the result is *false* it rejects the row and the next validators are discarded.
- If the result is *null* the next validator is invoked.

*BaseValidatorObject* has a Method called *EmitWarningMessage* that can write a message in the ingestion report. This method emits the custom message received as an input. If this method is called without arguments the warning gets emited by default (that is, the *Warning* property available as a block). 

Example:

```
    [RunnerElement]
    public class DateSequenceValidator : BaseValidatorObject, ILineValidator
    {
        [VariableRunnerProperty]
        public string[] Dates { get; set; }

        public override bool? Validate(Dictionary<string, string> line)
        {
            DateTime seqdate = DateTime.MinValue;

            foreach(var d in Dates)
            {
                DateTime d0;

                if (!DateTime.TryParse(line[d], out d0) || seqdate > d0)
                {
                    EmitWarningMessage("This is a custom warning");
                    return false;
                }
                seqdate = d0;
            }
            return null;
         
        }
    }
```


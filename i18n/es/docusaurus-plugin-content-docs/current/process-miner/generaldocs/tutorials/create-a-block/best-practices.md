---
sidebar_position: 2
---

# Best practices

This document teachs you how to create new runner blocks using the API in the IPMT and other resources.

The RunnerElement attributes are not mandatory but are highly encouraged. Let's take the Line Acceptor block as an example:

```
namespace pm4h.runner.ingestion.linevalidator
{
    [RunnerElement(Name ="Line Rejector", Description ="Removes lines with ANY Values (i.e. one or more) corresponding to the Field")]
    public class LineRejector : BaseValidatorObject, ILineValidator
    {
        [RunnerProperty(Behavior = RunnerPropertyBehavior.Variable)]
        public string Field { get; set; }

        [RunnerProperty(Behavior = RunnerPropertyBehavior.Array)]
        public string[] Values { get; set; }


        public override bool? Validate(Dictionary<string, string> line)
        {
            if (line.ContainsKey(Field))
            {
                if (Values.Contains(line[Field]))
                {
                    EmitWarningMessage();
                    return false;
                }
            }

            return null;
        }
    }


}
```




Let's now break it down:

## Name and Description

```[RunnerElement(Name ="Line Rejector", Description ="Removes lines with ANY Values (i.e. one or more) corresponding to the Field")]```

The Name will be shown instead of the class name. If no (RunnerElementAtribute) Name had been defined, the class name would be shown (in this case, LineRecjector is the class name).

The Description shows a text for the user when they hover over the block.

![Line Validator Name and Description](/img/best-practices-linevalidator-ui.png)

## Class definition

```public class LineRejector : BaseValidatorObject, ILineValidator```

This class inherits from an interface (ILineValidator) and a class (BaseValidatorObject) *(for more on inheritance, see [C# inheritance documentation in Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/inheritance))*.

Since there is an Interface, we need to implement it, specifically the ```Validate``` method, that inherits from the ILineValidator and that is implemented in BaseValidatorObject, so it needs to be overriden in the current class.

## Properties

```
[RunnerProperty(Behavior = RunnerPropertyBehavior.Variable)]
public string Field { get; set; }

[RunnerProperty(Behavior = RunnerPropertyBehavior.Array)]
public string[] Values { get; set; }
```

We define the Field, a Variable that will need to be filled in the block (behavior: ```Variable```).
And the different Values that will be processed (they are multiple, since the behavior is ```Array``` and it is an array of strings, ```string[]```)

The different property behaviors are:

```
public enum RunnerPropertyBehavior { Text, Array, Variable, Selection, Block, Unknown, MultilineText,
        SemanticObject, Assigned, ExternalResourceFile, EmbeddedResource, Wrapper, DataProvider }
```

Each behavior will create a different type of property (e.g. Array), that will need to be coherent with the property type (e.g. string[]).

## Methods

```
public override bool? Validate(Dictionary<string, string> line)
{
    if (line.ContainsKey(Field))
    {
        if (Values.Contains(line[Field]))
        {
            EmitWarningMessage();
            return false;
        }
    }

    return null;
}
```

As already mentioned, the method Validate overrides the Validate method in the class BaseValidatorObject and implements the ILineValidator.

Since the aim is to reject a line with a Field that contains any string in Values,
- The method has as input the current line that is being analyzed, as a `Dictionary<string,string>`.
- First we check that the line contains the Field
- Then we check the field's value
- We check if Values contains the field's value
- If that is the case, the warning message is emitted and false is returned (false acts as a rejector)
- If that is not the case, null is returned (null acts as a: keep going; true acts as acceptor).

It is important to check that the return value is correct: 
- If a line is validated (return true), it is accepted and not checked in other validators
- If a line is invalidated (return true), it is rejected (of course, it not checked in other validators)
- If a line is neither validater nor invalidated, it goes through to the next block.
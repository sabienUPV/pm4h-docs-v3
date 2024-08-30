---
sidebar_position: 2
---

# Runner properties

This annotation is the basic annotation that you can use for describing the data that can be used in the Experiment Designer screen. This annotation describe the behavior of the property allowing their configuration in design time. 

```
    public class RunnerPropertyAttribute : Attribute
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public object Default { get; set; }

        public RunnerPropertyLevel Level { get; set; } = RunnerPropertyLevel.Mandatory;
        public RunnerPropertyBehavior Behavior { get; set; } = RunnerPropertyBehavior.Text;

        public string[] Domain { get; set; }

    }

```

The Runner property attribute has some configuration posibilities that support you in the definition of their behaviour:

- **Name**: The Name indicates the name that the block will have in the block directory.
- **Description**: It is a short description of the functionality provided by the block.
- **Default**: It is the value that the property should have by default. This value should be **Constant**
- **Domain**: This allow to define a set of values that define the domain of the value, that is the posible values. (See [Selection](#selections))
- **Level**: It represents the position of the property in the block. There are several posibilities:
    - *PreviousContent*: This puts the property before the name of the block.
    - *Prepanel*: This puts the property inmediately after the name of the block.
    - *Mandatory*: This puts the property in the content panel of the block.(this is the **Default** value)
    - *Optional*: This puts the property in a collapsed panel that could be open for populate optional properties
    - *Hidden*: This represents a Hidden property that does not apperar in the fields.
- **Behavior**: This field indicates how the property should to behave for supporting process miners in the configuration of the block. The selection of the behavior defines the type of block used for populate the property. There are several posibilities:
    - *Text*: Uses a TextBox for populate the property. In primitives (string, double,...), the type is automatically converted, and also in Arrays. In arrays the values can be defined splited by *;* or, only in array case, allows the addition of multiple textbox in the same property.  This is the **Default** value.
    - *Variable*: In case of ingestion, this indicate that the value is not literal and represents a variable (See [Variables](#variables))
    - *Selection*: This allows use a Combo Box for selecting a specific value from a List (See [Selection](#selections))
    - *MultilineText*: Represents a long textbox and provide a multiline textbox for filling the text.
    - *ExternalResourceFile*: Allows the definition of external files to read or write information from de blocks (See [External resource files](#external-resource-files))
    - *DataProvider*: (See [Data providers](#data-providers))

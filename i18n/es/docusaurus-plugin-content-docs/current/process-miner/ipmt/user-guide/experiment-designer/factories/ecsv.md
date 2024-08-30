---
sidebar_position: 2
---

# ECSV format

![ecsv_example](/img/ejemplo_ecsv.png "ecsv_example")

ECSV files are text files with a specific format. Fields are separated by semicolons ";".
Line returns are not allowed within the fields.

The first line is the header of the available fields. 

These fields are:
1. **ID**. Trace identifier
2. **EID**. Event identifier
3. **START**. Start of the event
4. **END**. End of the event
5. **CODE**. Code that identifies the content of the VALUE column
6. **VALUE**. Data value
7. **TYPE**. The type of the VALUE column

Each line within the file can represent one of the three types of data (event, event property, trace property) that are listed below and depending on the type fields are filled in differently:

A) An **event** of the **trace**:

`1107253359;1107253359.2;11/03/2012 0:00:02;11/03/2012 0:00:03;ActivityName;FirstContact;`

B) A **property** associated to the **event**:

`1107253359;1107253359.2;11/03/2012 0:00:02;11/03/2012 0:00:03;DOCTOR;Peter;`

C) A **property** associated to the **trace**:

`1107253359;;;;Position;1;xs:long'`

## Description of each field

### ID

*	The trace identifier is a unique value that is repeated in all the events that conform a trace and allows them to be unified.

*	It is of type text. 

*	It is mandatory for the 3 types of data.

### EID

*	The event identifier allows identifying the different events within the same trace, it is not repeated within the same trace.

*	It is of type text. 

*	It is mandatory for data types A (event) and B (event property).

*	For type C (trace property) it is left blank.

*	By including the property of an event (B), the same EID for the event (A) is repeated.

### START

*	Indicates the date and time when the event starts or when it occurs. Three date formats are supported:

1. Use the proper format of the language of the operating system where the application is used
2.	`yyyy:MM:dd HH:mm:ss`
3.	`yyyy-MM-dd HH:mm:ss`

*	It is a mandatory field for formats A and B. For type C, it is left blank. By including the property of an event (B), the same START of the referenced event (A) is repeated.

### END

*	Indicates the date and time when the event ends. Three date formats are supported:

1. Use the proper format of the language of the operating system where the application is used
2. `yyyy:MM:dd HH:mm:ss`
3. `yyyy-MM-dd HH:mm:ss`

*	It is an optional field for formats A and B. For type C it is left blank. By including the property of an event (B), the same END of the referenced event has is repeated.

### CODE

*	Contains a code that identifies the content of the VALUE column.

*	It is mandatory for data type A and will always have the constant _ActivityName_ as a value, to indicate that the name of the activity or event is stored in the VALUE column.

*	It is mandatory for data type B and contains the name of the property of the event that contains said line.

*	It is mandatory for data type C and contains the name of the trace property that contains that line.

### VALUE 

*	It stores the value of each data type and is mandatory for all data types.

*	For data type A it contains the name of the event or activity.

*	For data type B it contains the value of the event property.

*	For data type C it contains the value of the trace property.

### TYPE 

*	It is a field that indicates the type of the content of the VALUE column.

*	In the case of the A data type, this column is left blank, since the event name is always considered a text.

*	In data type B and C it can be one of the following:

| TYPE                      | COLUMN TEXT | NOTES                                                                                                                                                                                                          |
|---------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text string           | xs:string           | This is the default type: When the column is left blank, <br /> it is considered as text. It is usually left blank, instead of introducing the type, <br />to reduce file size. |
| 16 bits decimal number | xs:float            | Floating point number dependent on the culture                                                                                                                                                                               |
| 32 bit integer         | xs:integer          |                                                                                                                                                                                                                       |
| 64 bit integer         | xs:long             |                                                                                                                                                                                                                       |
| Decimal 64 bit number | xs:double           |                                                                                                                                                                                                                       |
| Boolean value        | xs:boolean          |                                                                                                                                                                                                                       |
| String array         | xs:string[]         | The values in the string are concatenated with a separator <br />created with the characters "\|#\|" to create a string in the VALUE field.    



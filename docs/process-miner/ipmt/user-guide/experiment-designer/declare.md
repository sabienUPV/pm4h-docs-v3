---
sidebar_position: 6
---

# Declarative Structures 

## Declare Patterns

### Action Existence

Putting the name of the node represents that the node exists in the trace

```
Action : The node 'Action' exists
'First Action' : The node 'First Action' exists (' allows to have spaces in the action name)
```



### Action Constraints

It is possible to define restrictions to actions between brackets (*[]*). 
Constraints can be temporal:

```
Action[-1d] : Exists a node called 'Action' with a duration inferior to one day
Action[1h3m1s-5h2m3s] : Exists a node called 'Action' with a duration between 1:03:01 and 5:02:03
Action[2d2h-]: Exists a Node called 'Action' with a duration superior to 2 days and 2 hours
```

And parametrical: 

```
Action[var0=='value1'] : Exists an 'Action' which trace variable 'var0' is equal to 'value1'
Action[.var0=='value1']  : Exists an 'Action' which event variable 'var0' is equal to 'value1'. 
	The '.' denotes that is referred to an event variable
```

And a combination:

```
Action[.var0=='value1',vart=='val0',-1d]  : Exists an 'Action' which event variable 'var0' 
	is equal to 'value1', and trace variable 'vart' is equal to 'val0' with a 
	duration of less than 1 day 
```

### Sequence Operation (>)

Represents nodes that are sequentially followed

```
Action > ConsecutiveAction: There is an 'Action' and an immediately Consecutive 'ConsecutiveAction'
```

It is possible to add Constraints to Sequences:

```
(Action0>Action1)[-1d] : Exists and execution of 'Action1' and consecutively 'Action1' 
	where the timing difference is less than 1 day
```

### Derivation Operation (>>)

Represent nodes that are sequentially derivated. This means that the event will appear after the first node, but not necessarily immediately

```
Action0>>Action1 : Exists an 'Action1' that appears after an 'Action0'
```

It is possible to combine Derivations and sequences

```
Action0>Action1>>Action2>Action3: Exists a sequence of events that 
	have an 'Action0' and consecutively 'Action1' and after that 
	(not necessary to be consecutively) an 'Action2' consecutively followed by 'Action3'
```

It is also possible to add Constraints to Combinations

```
(Action0>Action1>>Action2>Action3)[3d-] : The previous sequence has a duration of more than 3 days.
```

### Action Not Existence (!)

The Action or Sequence not Exists

```
!Action : The event 'Action' does not exist in the trace
!(Action0>>Action1) : There is not an 'Action1' after any 'Action0' in the trace
```

### First Event (^)

The Event is the first of the trace

```
^'@Start': The Event '@Start' is the first of the trace
```

### Last Event ($)

The Event is the last of the trace

```
$'@End': The Event '@End' is the last of the trace
```

### Combination of Structures (& and |)

```
^'@Start' & ('@Start'>>Action2) : The event '@Start' is the first and exists a Derivation '@Start>>Action2' in the trace
Action0 | (Action1>>Action2) : There is an Action0 or a Derivation 'Action1>>Action2' in the trace
```

### Advanced Structures


#### Response `(->*)`

```
A->*B: If A occurs, then B occurs always after A
```

#### Alternate Response `(->+)`

```
A->+B: If A occurs, then B occurs always after A before another A occurs
```

#### Chain Response `(->)`

```
A->B : Immediately after each A there is a B
```

#### Precedence `(*<-)`

```
B*<-A: If there is a B then, always there is an A before
```

#### Alternate Precedence `(+<-)`

```
B+<-A: If there is a B then always there is an A before and none B in the middle
```

#### Chain Precedence `(<-)`

```
B<-A: If there is a B then always there are an A preceding immediately 
```

#### Succession `(=>*)`

```
`A=>*B`: A Occurs if and only if is followed by a B and B occurs if and only if is preceded by an A 
```

#### Alternate Succession `(=>+)`

```
A=>+B:  A Occurs if and only if is followed by a B and B occurs if and only if is preceded by an A, and never was a B in the middle
```

#### Chain Succession `(=>)`

```
A=>B: A occurs always immediately before B and B occurs always immediately after A 
```
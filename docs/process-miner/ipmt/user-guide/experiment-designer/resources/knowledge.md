---
sidebar_position: 1
---

# Knowledge file

**Knowledge.zconf** file contains general semantic concepts to be used across [PMApp](../../pmapp/intro.md). Concepts can be consumed in the [Experiment designer](../intro.md) and from the semantic picker option is available in the [Ingestor editor](../ingestor-editor.md).

The semantic picker is a drag and drop tool. The available concepts can be consumed in the Events ([SemanticEventMapperExtractor](../../../../generaldocs/reference/api/blocks/event-extractor/semantic-event-mapper-extractor.md) and [NamedEventExtractor](../../../../generaldocs/reference/api/blocks/event-extractor/named-event-extractor.md) blocks) and Trace Data ([SemanticDiscretizedData2](../../../../generaldocs/reference/api/blocks/trace-data-extractor/semantic-discretized-data2.md) and [SemanticMapperData2](../../../../generaldocs/reference/api/blocks/trace-data-extractor/semantic-mapper-data2.md) blocks) tabs of the Ingestor editor.

Semantic concepts in the Knowledge file can be:

*	**Concept**. It is a simple semantic concept with usually is defined by a **URI**, **name** and **Description**.
*	**Event**. It describes an event of the process, for example, in the emergency department it may be one of the attention levels. The event usually has associated a **URI**, **name**, **description**, and **type**.
*	**Discrete concept**. It discretizes the values of simple concepts, for example, in the case of patients' age. It is defined by a **URI**, **name** and **Description**.
*	**Mapper**. It is defined by a **URI**, **name**, **Description** and a **Concept**.
*	**Discretizer**. It is defined by a **URI**, **name**, **Description** and a **Concept**.
*	**Map**. It is defined by a **URI**, **name** and **Description**.

![Knowledge.zconf file](/img/knowledge-file.png "Knowledge.zconf file")

Figure 9. Knowledge.zconf file

## Other semantic information

*	**EventsMapperFilter**. After executing an experiment, the EventMapperFilter block identifies the different nodes name that have been generated in the experiment, and allows to edit the names. For further information go [EventsMapperFilter](../../../../generaldocs/reference/api/blocks/filters/events-mapper-filter.md).

![EventsMapperFilter](/img/events-mapper-filter.png "EventsMapperFilter")

Figure 10. EventsMapperFilter block

*	**Non-semantic order**. Non-semantic values come from the event and trace data from the ingestor. The Non-semantic order block allows to order these values. For further information go [Non-semantic order](../../../../generaldocs/reference/api/blocks/filters/non-semantic-order.md).

![Non-semantic order](/img/non-semantic-order.png "Non-semantic order")

Figure 11. Non-semantic order


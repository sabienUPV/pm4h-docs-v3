---
sidebar_position: 4
---

# ¿Qué puedo hacer en el menú Other Views?

El menú **OTHER VIEWS** se desplegará al hacer clic en el cuarto botón del menú de la izquierda. Se oculta al volver a hacer clic sobre este mismo botón.

## Clustering

En este menú aparecerán tantos desplegables como perspectivas existan, en este caso solo tenemos **_Clustering_ (1)**, que agrupa los datos en función del criterio elegido **(2)** y la configuración de los parámetros **(3)**.

*   Los criterios disponibles son los llamados algoritmos de distancias (**_Distance type_**), que pueden ser
    *   **_Topological_** (topológica), donde solo se tiene en cuenta la forma que tiene la vista de proceso.
    *   _**Heuristic**_ (heurística), donde se tiene en cuenta el tiempo empleado en cada evento, además de la forma de la vista del proceso.
    *   **_Levenshtein_**, no generaliza, no tiene en cuenta los autociclos, pero si el orden en el que se ejecutan los eventos.
*   Una vez configurados los parámetros **(2)**, hacer clic en el botón _**Run clustering.**_
*   Esto hará que se abra una nueva pestaña con la perspectiva de **clustering**. Para más información consultar [Perspectiva Clustering](../clustering-perspective.md).

![clustering - menu - numeros](/img/clustering-menu-numeros.png "clustering – menu – numeros")

Figura 1. Menú ADVANCED VIEWS


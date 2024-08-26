---
sidebar_position: 1
---

# ¿Qué puedo hacer en el menú Groups?

El menú **GROUPS** se desplegará al hacer clic en el primer botón del menú de la izquierda. Se oculta al volver a hacer clic sobre este mismo botón.

![menu groups](/img/menu-groups.png "menu groups")

Figura 1. Menú GROUPS

## Seleccionar

*   Este menú permite lanzar un nuevo grupo a partir del subconjunto de datos que se eligen en la sección de **_Categories_** **(2)**.
*   Si pinchamos en la cabecera de una de las categorías, ésta se expande y se muestran las opciones que utilizaremos como criterio para generar los nuevos grupos. Por defecto están todos seleccionados. 
*   Si pinchamos en (**_Select all_**), se (de)seleccionarán todas las opciones, en función de si estaban seleccionadas o no previamente.
*   Se pueden (de)seleccionar opciones clicando sobre éstas.

:::warning
Es obligatorio que al menos una opción por categoría esté seleccionada, sino el nombre de la categoría aparecerá en rojo.
:::

## Ejecutar

*   Para lanzar el nuevo grupo hay que hacer clic en el botón _**Run new group**_ en (1). Este nuevo grupo se mostrará en una nueva pestaña (superior), que estará identificada con el nombre de las categorías y las opciones seleccionadas. 
*   Si se cierra la nueva pestaña, solo se podrá recuperar si se vuelve a lanzar el grupo creado.
*   Al lado del nombre de cada categoría, hay un icono, si pinchas sobre éste, se lanza automáticamente un grupo por cada una de las opciones que contenga esa categoría. El nombre de la pestaña estará compuesto por la categoría y la opción correspondiente, como aparece en la figura 17.
*   La pestaña **PROCESS** muestra la vista de proceso generada a partir de todos los datos definidos en el runner. Esta pestaña se puede cerrar y luego recuperarla seleccionando todas las opciones de todas las categorías y haciendo clic en el botón **_Run new group_** en **(1)**. Esto añadirá una nueva pestaña llamada **PROCESS**, que de nuevo mostrará la vista de proceso generada a partir de todos los datos disponibles.

:::warning
Cada vez que se lance un nuevo grupo las estadísticas de cada grupo y las globales, se recalcularán automáticamente.
:::

![grupos - varios - process](/img/grupos-varios-process.png "grupos – varios – process")

Figura 2. Nuevas vistas de proceso (pestañas) basado en el nuevo grupo

## Extraer

*   También existe la posibilidad de extraer un grupo convirtiéndose en un nuevo experimento. Esto significa que al lanzar el grupo con el botón _**Extract group**,_ una nueva aplicación PMApp se abrirá, siendo totalmente independientes los experimentos que se ejecutan en ambas aplicaciones PMApp.

## Limpiar

*   Con el botón **_Delete groups_** se limpia la selección previamente hecha en **_Categories_**.

:::info
Los grupos pueden ser renombrados, lo que hará que el nombre que aparece en la pestaña cambie. Esto se puede hacer desde el menú que hay en cada vista de proceso (cada pestaña), pinchando sobre el botón de información se muestra una pantalla con información de la vista del proceso. Para más información ir a [¿Qué encontrar en la perspectiva Main?](../main-perspective)
:::
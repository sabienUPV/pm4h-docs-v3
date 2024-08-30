---
sidebar_position: 1
---

# ¿Qué encontrar en la perspectiva Main?

La perspectiva **MAIN**, es la principal de PMApp. Esta perspectiva muestra vistas de procesos y puede alojar uno o varios, disponibles en las diferentes pestañas que aparecen en la parte superior de la aplicación.

## Información sobre la vista de proceso

Cuando el ratón pasa sobre un nodo o transición, aparece información estadística detallada, con información sobre los promedios, la mediana, agregaciones, números, etc. de las ocurrencias (por ejemplo, pacientes) que atraviesan ese nodo o transición, como se muestra en las figuras 9.a y 9.b. En el caso concreto de los nodos, también se mostrará el nombre del nodo en la parte superior.

![info nodo - tooltip](/img/info-nodo-tooltip.png "info nodo – tooltip")

Figura 1.a. Información sobre el nodo (**_tooltip_**)

![info transicion - tooltip](/img/info-transicion-tooltip.png "info transicion – tooltip")

Figura 1.b Información sobre la transición (**_tooltip_**)

Además, haciendo clic con el botón derecho sobre un nodo o transición, aparece un menú contextual (o secundario) en el que aparecen dos opciones (figura 10).
*   **Show Information** (Mostrar información). Para más información consultar [Perspectiva Node Information](./node-information-perspective.md) o [Perspectiva Transition Information](./transition-information-perspective.md).
*   **Show Traces** (Mostrar trazas). Abre una nueva perspectiva con información de las trazas que atraviesan dicho nodo/transición. Para más información consultar [Perspectiva Trace Information](./trace-information-perspective.md)

![menu secundario](/img/menu-secundario.png "menu secundario")

Figura 2. Menú contextual para acceder a la información sobre el nodo o transición

### Menu de la vista de procesos

![menu vistas de proceso](/img/menu-modelos.png "menu vistas de proceso")

Figura 3. Menú disponible para cada vista de proceso

Las acciones que se pueden realizar en cada vista de proceso, es decir, por pestaña (figura 11) son:

*   **Zoom out/Zoom in (1)**. Reducir y ampliar la vista de proceso.
*   **Add background (2)**. Agregar una imagen de fondo.
*   **Delete background (3)**. Eliminar la imagen de fondo.
*   **Save as (4).** Ofrece la posibilidad de guardar diferente información de la vista de proceso. Como se muestra en la figura 12, existen varias opciones, donde las **más interesantes** son:
    *   **Imagen JPG (\*.JPG).** Guarda la vista de proceso como una imagen.
    *   Las siguientes opciones, guardan la vista de proceso como un archivo CSV, lo que permite abrirla en un archivo de Excel para hacer más cálculos:
        *   **TPA Node Stats (\*.csv)**. Estadísticas asociadas a los nodos de la vista de proceso
        *   **TPA Node Durations (\*.csv).** Duración de los nodos de la vista de proceso
        *   **TPA Trace Stats (\*.csv).** Estadísticas asociadas a las trazas de la vista de proceso

![save as](/img/save-as.png "save as")

Figura 4. Opción SAVE AS

*   **Disable/Enable floating information window (5).** Si se pincha sobre un nodo o una transición aparecerá una ventana flotante, con la misma información que aparece al pasar el ratón por encima del nodo o transición. El botón en el menú sirve para, una vez seleccionado un nodo o transición, mostrar u ocultar dichas ventanas flotantes. Un ejemplo de ventana flotante es la siguiente figura.

![Statistical information :small](/img/window_flotante.png "Statistical information")

Figura 5. Pantalla flotante con información estadística

*   **Disable/Enable legend (6).** Tanto los nodos como las transiciones aparecen coloreadas en las vistas de proceso. Para conocer el significado de dichos colores se muestra una leyenda que puede estar visible u oculta, en función de esta opción. 

*   **Process view information (7).** Esta opción muestra una pantalla en la que se pueden hacer anotaciones asociadas a la vista de proceso. En el caso concreto de la perspectiva **MAIN**, nombre de la vista de proceso que se genera al abrir PMApp y ejecutar el experimento, será este mismo, como se muestra en la figura 14, aunque en el caso de haber generado nuevos grupos, se listarían las opciones seleccionadas por categoría. En aquellas categorías en las que todas las opciones hayan sido seleccionadas, se mostrará como **PROCESS**. 

:::info
Desde esta pantalla se puede cambiar el nombre que aparece en la pestaña, modificándolo en **_Name_** y luego haciendo clic en el botón **SAVE**.
:::

![information - process](/img/information-process.png "information – process")

Figura 6. Pantalla con información de la vista del proceso

### Menu de la perspectiva principal

Por otra parte, esta perspectiva permite realizar ciertas acciones sobre las vistas de procesos, que se encuentran en el menú emplazado a la izquierda de la pantalla y que a continuación se describen:

![menu izquierda](/img/menu-izquierda.png "menu izquierda")

Figura 7. Menú izquierdo

*   **Groups (1)**. A partir de las opciones disponibles, se pueden hacer estratificaciones que generan nuevas vistas de proceso que permitan análisis más ágiles. Para más información consultar [¿Qué puedo hacer en el menú Groups?](./menu/groups-menu.md).
*   **Enhancements (2).** Aquí se permite agregar mapas de color a las vistas de proceso disponibles y que ayudarán a resaltar diferentes aspectos según el criterio elegido. Más información: [¿Qué puedo hacer en el menú Enhacements?](./menu/enhancement-menu.md).
*   **Statistics & Charts (3)**. En este menú se pueden configurar las estadísticas que se quieren mostrar, eligiendo el tipo de datos y la representación más adecuada (gráficos, tablas…). Más información: [¿Qué puedo hacer en el menú Statistics and Charts?](./menu/statistics-and-charts-menu.md).
*   **Other views (4).** Además de la perspectiva principal (**MAIN**), pueden existir otras, donde algunas de ellas estarán disponibles desde este menú. Más información: [¿Qué puedo hacer en el menú Other views?](./menu/other-views-menu.md).
*   **More options (5).** En este menú se muestra información relativa al experimento. Más información: [¿Qué puedo hacer en el menú More options?](./menu/more-options-menu.md).
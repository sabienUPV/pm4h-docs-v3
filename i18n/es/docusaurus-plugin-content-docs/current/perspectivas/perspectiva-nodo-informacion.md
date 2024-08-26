---
sidebar_position: 4
---

# Perspectiva Node Information

La perspectiva **NODE INFORMATION** (información de nodo) muestra estadísticas sobre las trazas (iguales a las que se enseñan en el **_tooltip_**), un histograma muestra el número de ejecuciones de traza y el tiempo empleado en cada una y la vista de proceso donde se hizo la selección de nodo, que como se muestra en la figura 1, aparece resaltado en amarillo.

![node information](/img/node-information.png "node information")

Figura 1. Información sobre el nodo

El significado de cada una de las estadísticas es el siguiente:

*   **Executions Number** (número de ejecuciones). Número de ejecuciones de ese nodo.
*   **Traces Number** (número de trazas). Número de trazas que pasan por ese nodo.
*   **Duration Average** (duración media). Duración media de todas las ejecuciones de ese nodo.
*   **Duration Median** (mediana de la duración). Mediana de la duración de todas las ejecuciones de ese nodo.
*   **Duration by Trace** (duración por traza). La duración por traza es el tiempo de todas las ejecuciones de ese nodo, dividido por número de trazas que pasan por ese nodo.
*   **Duration Max** (duración máxima). Duración máxima de entre todas las ejecuciones de ese nodo.
*   **Duration Min** (duración mínima). Duración mínima de entre todas las ejecuciones de ese nodo.
*   **Duration Variance** (Varianza de la duración). Varianza de la duración del tiempo de las ejecuciones de ese nodo. 
*   **Duration Standard Deviation** (Desviación estándar de la duración). Desviación estándar de la duración del tiempo de todas las ejecuciones de ese nodo. 
*   **Duration Summation** (sumatorio de duraciones). Sumatorio de todos los tiempos de todas las ejecuciones de ese nodo.

En la cabecera principal del histograma, hay dos opciones que permiten: 

1) comparar vistas de proceso (**_Compare process views_**) y 

2) calcular la gausiana (**_Calculate gausian mixture_**)

* Al hacer clic sobre la opción 1 aparece un pequeño cuadro de texto (figura 2) donde hay que seleccionar la vista de proceso contra la que se quiere comparar el proceso actual. 

![compare-process-views :small](/img/model-comparison.png "compare-process-views")

Figura 2. Opción Compare process views

*   Un ejemplo sería lo mostrado en la figura 3, desde donde se puede restaurar el histograma haciendo clic en el botón **_Restore histogram_**.

![comparison-results](/img/histograma-info-restore-1.png "comparison-results")

Figura 3. Opción Calculate gausian mixture

* Al hacer clic sobre la opción 2 aparece un pequeño cuadro de texto (figura 4) donde hay que indicar cuantas gausianas se quieren buscar

![calculate-gausian-mixture :small](/img/calculate-gausian.png "calculate-gausian-mixture")

Figura 4. Opción Calculate gausian mixture

Un ejemplo sería lo mostrado en la figura 5, desde donde se pueden realizar las siguientes acciones:

1) extraer los datos de las gausianas identificadas en un nuevo experimento, donde una nueva instancia de la aplicación PMApp se abriría,

2) modificar el número de gausianas mostradas,

3) restaurar el histograma a su estado original

Además, al igual que en el resto de gráficos de la aplicación, si se pasa el ratón por encima de la cabecera del gráfico, aparece un menú como muestra la figura 5.

![Menu graficos](/img/menu-graficos.png "Menu graficos")

Figura 5. Menú gráficos

Las opciones disponibles son similares: 

*   Exportar como PNG
*   Exportar los datos a un archivo CSV
*   Autoescalar el gráfico para que se ajuste al espacio disponible

Por último, el histograma representado permite: 

*   consultar un valor concreto representado por las columnas o gausiana, pinchando con el **botón izquierdo** del ratón sobre el área correspondiente,
*   haciendo clic sostenido con el **botón derecho** se desplaza el histograma hacia la izquierda o derecha,
*   con **Ctrl más botón derecho** del ratón, permite seleccionar un área para hacer zoom o también se puede hacer zoom (más y menos) directamente con **Ctrl más la rueda central** del ratón. Para restaurar el tamaño original del gráfico, como se ha comentado arriba, hacer clic en el botón **Autoscale** disponible en la parte superior derecho del recuadro de cada gráfico.


Esta perspectiva no tiene menú principal.

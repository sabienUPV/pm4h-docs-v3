---
sidebar_position: 3
---

# Perspectiva Transition Information

La perspectiva **TRANSITION INFORMATION** (información de transición) muestra estadísticas sobre los pacientes (iguales a las que se enseñan en el **_tooltip_**), un histograma que muestra el número de ejecuciones de traza y el tiempo empleado de cada una y el flujo donde se hizo la selección de transición, que como se muestra en la figura 1, aparece tenuemente resaltada en amarillo.

![transition information](/img/transition-information.png "transition information")

Figura 1. Información sobre la transición

El significado de cada una de las estadísticas es el siguiente:

*   **Executions Number** (número de ejecuciones). Número de ejecuciones que pasan por esa transición.
*   **Traces Number** (número de trazas). Número de trazas que pasan por esa transición.
*   **Duration Average** (duración media). Duración media del tiempo en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Duration Median** (mediana de la duración). Mediana de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Duration by Trace** (duración por traza). La duración por traza es el tiempo en el nodo de todas las ejecuciones asociadas a esa transición, dividido por número de trazas que pasan por la transición.
*   **Duration Max** (duración máxima). Duración máxima de entre todos los tiempos en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Duration Min** (duración mínima). Duración mínima de entre todos los tiempos en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Duration Variance** (Varianza de la duración). Varianza de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Duration Standard Deviation** (Desviación estándar de la duración). Desviación estándar de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Transition Duration Average** (media de la duración de la transición). Media de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición, entendiendo la transición como el tiempo entre el fin del nodo A y el inicio del nodo B (figura 2).
*   **Transition Duration Median** (mediana de la duración de la transición). Mediana de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición, entendiendo la transición como el tiempo entre el fin del nodo A y el inicio del nodo B (figura 2).
*   **Transition Duration Standard Deviation** (desviación estándar de la duración de la transición). Desviación estándar de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición. Es decir, cuanto más se aproxime la desviación a cero, menos dispersas están las duraciones con respecto a la duración media. Por contra, mientras mayor sea la desviación, más dispersas están estas duraciones con respecto a la media, entendiendo la transición como el tiempo entre el fin del nodo A y el inicio del nodo B (figura 2).
*   **Full Transition Duration Average** (media de la duración de la transición entera). Idem que la **_Transition Duration Average_**, pero entendiendo la **_full transition_** como el tiempo entre el inicio del nodo A y el inicio del nodo B (figura 2).
*   **Full Transition Duration Median** (mediana de la duración de la transición entera). Idem que la **_Transition Duration Median_**, pero entendiendo la **_full transition_** como el tiempo entre el inicio del nodo A y el inicio del nodo B (figura 2).
*   **Full transition Duration Standard Deviation** (desviación estándar de la duración de la transición entera). Idem que la **_Transition Duration Standard Deviation_**, pero entendiendo la **_full transition_** como el tiempo entre el inicio del nodo A y el inicio del nodo B (figura 2).
*   **Duration Summation** (sumatorio de duraciones). Sumatorio de todos los tiempos en el nodo de todas las ejecuciones asociadas a esa transición.
*   **Transition Probability** (probabilidad de transición). Es la probabilidad de que una ejecución pase por esta transición.

![calculo_transiciones](/img/calculo_transiciones.png "calculo_transiciones")

Figura 2. Duration, transition y full transition

Al igual que en **NODE INFORMATION**, en esta perspectiva estarán disponibles tanto las opciones en la cabecera principal del histograma, como las que aparecen al pasar el ratón por encima. 

Por último, el histograma representado permite: 

*   consultar un valor concreto representado en el gráfico, pinchando con el **botón izquierdo del ratón** sobre el área correspondiente,
*   haciendo clic sostenido con el **botón derecho** se desplaza el histograma hacia la izquierda o derecha,
*   con **Ctrl + botón derecho** del ratón, permite seleccionar un área para hacer zoom o también se puede hacer zoom (más y menos) directamente con **Ctrl + rueda central** del ratón. Para restaurar el tamaño original del gráfico, como se ha comentado arriba, hacer clic en el botón **Autoscale** disponible en la parte superior derecho del recuadro de cada gráfico.

Esta perspectiva no tiene menú principal.
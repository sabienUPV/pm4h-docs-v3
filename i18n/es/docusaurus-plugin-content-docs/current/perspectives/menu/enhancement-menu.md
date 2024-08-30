---
sidebar_position: 2
---

# ¿Qué puedo hacer en el menú Enhancements?

El menú **ENHANCEMENT** se desplegará al hacer clic en el segundo botón del menú de la izquierda y se oculta al volver a hacer clic sobre este mismo botón. Este menú permite aplicar diferentes capas, a las vistas de proceso existentes, que resaltan información de la que puede ser interesante su análisis.

![enhancement - numeros - heat maps](/img/enhancement-numeros-heat-maps.png "enhancement – numeros – heat maps")

Figura 1. Menú ENHANCEMENT

## Mapas (1)

Dependiendo de la opción seleccionada en el desplegable **_Map_**, se aplicarán los mapas de calor o mapas de diferencias sobre las vistas de proceso representadas en la perspectiva **MAIN**.

![enhancement-detail-heat-maps :small](/img/enhancement-detail-heat-maps.png "enhancement-detail-heat-maps")

Figura 2. Mapa de calor

### Mapa Heat

Si se selecciona la opción **HEAT**, se visualizan las opciones para aplicar los mapas de calor y donde se puede seleccionar el criterio con el cual, los **_nodes_** y **_transitions_** se colorearán. Cogiendo como ejemplo las **_Executions Number_**, se elige el valor máximo y mínimo de entre todas las ejecuciones por transición y se calcula la correspondencia con los colores, siendo el verde asignado a los valores mínimos y el rojo a los valores máximos como se muestra en la figura 20. 

Al modificar las barras con los %, aquellos nodos que tengan menos del, por ejemplo 20% del total de **_Executions Number_**, se colorearán en verde y aquellos nodos que tengan más de, por ejemplo 80% del total, se colorearán en rojo.

![enhancement-leyenda-heat-map  :small](/img/enhancement-leyenda-heat-map.png "enhancement-leyenda-heat-map")

Figura 3. Leyenda Heat Map

Los colores se pueden utilizar para representar, por ejemplo, el tiempo que un paciente ha pasado en cada nodo o el número de pacientes que han pasado por la transición. 
*   En el caso de los nodos, si no se modifican los parámetros por defecto, el verde significa que los pacientes han pasado poco tiempo en el nodo, mientras que el rojo representa que el tiempo ha sido alto. 
*   Igualmente, en el caso de las transiciones, el verde por defecto significa que pocos pacientes han pasado por esta transición, mientras que el rojo indica una mayor cantidad de pacientes pasando por la transición.  
    Este «_enhancement_» o mejora sobre el mapa, facilita la comprensión de casos que se pueden dar, como cuellos de botella en el servicio de urgencias. 
*   Dentro del desplegable con los criterios a aplicar a los nodos se encuentran:
    *   _**Executions Number**_ (Número de ejecuciones). El número de ejecuciones que han pasado por ese nodo.
    *   _**Traces Number**_ (Número de trazas). Número de trazas que han pasado por ese nodo. 
    *   _**Duration Summation**_ (Sumatorio de la duración). La suma de todo el tiempo de todas las ejecuciones que han pasado por este nodo.
    *   _**Duration by Trace**_ (Duración por traza). La duración por traza es el tiempo que se pasa en un nodo, es decir, por ejemplo, en urgencias, dentro del mismo episodio, el tiempo que un paciente está en _Admission_ (Admisión) se dividiría por el tiempo total de traza (o episodio).
    *   _**Duration Average**_ (Duración media). Duración media de todas las ejecuciones que han pasado por un nodo.
    *   _**Duration Median**_ (Mediana de la duración). Media de duración de todas las ejecuciones que han pasado a través de un nodo.

![calculo_transiciones :medium](/img/calculo_transiciones.png "calculo_transiciones")

Figura 4. Duration, transition y full transition

El desplegable con los criterios para las transiciones contiene:
*   _**Executions Number**_ (Número de ejecuciones). El número de ejecuciones que han pasado por una transición.
*   _**Traces Number**_ (Número de trazas). El número de trazas que pasan por una transición. 
*   _**Duration Summation**_ (Sumatorio de la duración). La suma de todas las duraciones de todas las ejecuciones asociadas a esa transición, contabilizándose el tiempo que se pasa en el nodo de donde nace la transición. Por ejemplo, si hacemos referencia a la figura 18, la transición existente entre el nodo _Triage_ (Triaje) y _Wait1_ (Espera1) tendría una duración igual al tiempo que se pasa en el nodo _Triage._
*   **_Duration by Trace_** (Duración por traza). La duración por traza es el tiempo en el nodo de todas las ejecuciones asociadas a esa transición, dividido por número de trazas que pasan por la transición.
*   _**Duration Average**_ (Duración media). Duración media del tiempo en el nodo de todas las ejecuciones asociadas a esa transición.
*   _**Duration Median**_ (Mediana de la duración). Media de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición.
*   _**Full Duration Average**_ (Duración media total). Media de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición, entendiendo la transición como el tiempo entre el inicio del nodo A y el inicio del nodo B (figura 21).
*   _**Full Duration Median**_ (Mediana de la duración total). Mediana de la duración del tiempo en el nodo de todas las ejecuciones asociadas a esa transición, entendiendo la transición como el tiempo entre el inicio del nodo A y el inicio del nodo B.

Los cambios se aplican de forma inmediata.

### Diferencias entre vistas de procesos

![enhancement - detail difference maps - numero :small](/img/enhancement-detail-difference-maps-numero.png "enhancement – detail difference maps – numero")

Figura 5. Difference map

*   Otro de los posibles “enhancements” es la diferencia entre vistas de procesos (figura 22), que corresponde a la opción **_Difference_** en el menú **_Map_**.
*   Para ello hay que seleccionar la vista de proceso por la cual se quiere hacer la comparativa (18). Por ejemplo, como en la figura 24, si se calcula la _difference maps_ cogiendo como referencia la vista de proceso «(Nivel de triaje:1)», se hará la comparativa nodo a nodo, es decir, de la vista de proceso «(Nivel de triaje:2)» a la **_Executions Number_** del nodo _Arrival_ se le restará la **_Executions Number_** de la vista del proceso de referencia.
*   Como muestra la figura 23, en la leyenda se indica la vista del proceso de referencia contra la que se está haciendo la comparativa.
*   Cuantas menos **_Executions Number_** hayan de diferencia entre ambas vistas de proceso, más verde se mostrará, en cambio, cuantas más **_Executions Number_** hayan de diferencia más rojo se coloreará. Por contra, si la diferencia es casi nula más blanco se mostrará el nodo.

![enhancement - leyenda difference map :small](/img/enhancement-leyenda-difference-map.png "enhancement – leyenda difference map")

Figura 6. Leyenda Difference Maps

Como ejemplo, la figura 24 muestra la diferencia entre la vista de proceso del "Nivel de Triaje: 1" y la vista de proceso con pacientes del "Nivel de Triaje: 4".

![enhancement difference](/img/enhancement-difference.png "enhancement difference")

Figura 7. Diferencia entre vistas de proceso

## Significancia estadística (2)

La significancia estadística se calcula a partir de la vista de proceso seleccionada en el desplegable **_Main View_** y el resto de vistas de proceso, y se hace una comparativa nodo a nodo de la misma actividad, comparando la duración de todas las ejecuciones entre esos dos nodos. Por ejemplo, se puede comparar el proceso de urgencias entre hombres y mujeres.
Los parámetros se pueden ajustar.
Para finalizar este proceso, es necesario hacer clic en el botón **_Add statistical significance_**.
El resultado se mostrará como aparece en la figura 25, resaltando con un círculo en amarillo, aquellos nodos donde haya una diferencia significativa.
Para "limpiar" las vistas de proceso y dejar de mostrar la significancia estadística, hay que hacer clic en el botón **_Delete statistical significance_**.
Si se cierra la pestaña con el mapa que se ha utilizado para calcular la significancia estadística, se "limpiará" la significancia estadística del resto de vistas de proceso.

![enhancement - significance stadistic](/img/enhancement-significance-stadistic.png "enhancement – significance stadistic")

Figura 8. Significancia estadística

### Abstracciones (3)

Por último tenemos las abstracciones que, al igual que en [¿Qué puedo hacer en el menú Groups?](./groups-menu.md), permite lanzar un nuevo experimento de un % de los datos totales en una nueva PMApp.
Aunque no es necesario extraer siempre esos datos, al seleccionar el % de los datos totales que queremos que se muestren, éstos se resaltarán en la vista de proceso automáticamente, quedando de un color más tenue el resto de datos que se descartan, como aparece en la figura 26.

:::warning    
El cálculo de cuales serán los datos seleccionados o que se resaltan en la vista de proceso, se hace teniendo en cuenta el número de ejecuciones en cada nodo. Por ejemplo, si se hace una selección del 80% de los datos, aquellos nodos con menos de un 20% de ejecuciones se eliminan, quedándose con los caminos más frecuentes.
:::

Para hacer la extracción efectiva, hay que elegir el % de datos que se quieren extraer y hacer clic en el botón _**Extract abstraction**_.

![enhancement - extraction](/img/enhancement-extraction.png "enhancement – extraction")

Figura 9. Abstractions
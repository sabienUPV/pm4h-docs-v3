---
sidebar_position: 1
---

# ¿Cómo se ejecuta un experimento en PMApp?

## Ejecutar un experimento

PMApp trabaja con los archivos que denominamos **_runners,_** que es un archivo de configuración que define el experimento con el que se va a trabajar, para lo cual necesitaremos seguir los siguientes pasos:

*   Una vez se ha abierto la aplicación, aparece la pantalla principal que denominamos **HOME**.

![home](/img/home.png "home")

Figura 1. Pantalla HOME

*   En la pantalla inicial, presionaremos el botón **OPEN**, que nos abrirá un asistente que nos guiará en el proceso para lanzar el experimento. Hay que asegurarse que estamos buscando el tipo de fichero correcto, siendo común los archivos con extensión _"Runner file *.rjson"_ o _"ZIP Packed Runner *.rnr.zip"_, como se muestra en la siguiente figura. 

![home_file_explorer](/img/home_explorador_de_archivos.png "home_file_explorer")

Figura 2. Pantalla con el explorador de archivos para seleccionar un runner

*   La necesidad de un asistente, viene dada por el hecho de que el runner es configurado por el experto en minería de procesos (**_process miner_**) durante los data rodeos. Esta configuración hace referencia a varios ficheros, necesarios para ejecutar el experimento, y de los que hay que actualizar la ruta donde originalmente la configuración hacía referencia a dichos ficheros. Así pues, el asistente listará aquellos ficheros de los cuales haya que actualizar la ruta de dónde se encuentran.
*   Además, mostrará el nombre del experimento y una breve descripción añadida por el **_process miner._** Si no es así, se mostrará el nombre del archivo seleccionado. Tanto el nombre del experimento como la descripción pueden modificarse.

![wizard - home](/img/wizard_home.png "wizard – home")

Figura 3. Pantalla asistente

*   Como se muestra en la figura anterior, para actualizar la ruta de dichos ficheros, hay que hacer clic en el botón **SEARCH**, el cual a su vez abre un explorador de archivos que nos permite navegar hasta localizar los archivos. Una vez actualizados todos ellos, se debe hacer clic en el botón **SAVE**, para que, tanto este como otros cambios queden guardados para posteriores ejecuciones.

:::warning 
Antes de lanzar el experimento, comprobar que los archivos de datos (.csv) no están abiertos, si no aparecerá un error indicando que PMApp no puede acceder a dichos ficheros. Por lo tanto **es necesario que los archivos de datos estén cerrados a la hora de ejecutar el experimento.**
:::

*   El siguiente paso es hacer clic en el botón **RUN** para lanzar el experimento, abriéndose la pantalla **MAIN** de PMApp donde se muestra información referente al estado de la ejecución del experimento y dejando en segundo plano la pantalla **HOME** por si fuera necesario lanzar otros experimentos más adelante.
*	El botón **CANCEL** cierra el asistente y nos devuelve a la pantalla **HOME**.

![ejecucion del experimento](/img/ejecucion_del_experimento.png "ejecucion del experimento")

Figura 4. Pantalla durante la ejecución del experimento

## Actualizar PMApp

*   Al iniciar PMApp, si existe una nueva versión disponible, aparece un mensaje informando sobre ello (figura 5).
*   Para iniciar la actualización, hacer clic en el botón **Sí**.

![nueva actualización - 1](/img/nueva_actualizacion_1.png "nueva actualización - 1")

Figura 5. Mensaje informando de la existencia de una nueva versión de PMApp

*   En primer lugar, se debe descargar el fichero y después cerrar la aplicación.
*   A continuación, nos pide que indiquemos donde queremos descargar el archivo de la nueva aplicación, como se muestra en la figura 6.
*   Una vez se ha descargado el fichero y haber cerrado la aplicación (**esto último es imprescindible para que funcione la actualización**), ejecutamos el fichero y seguimos los pasos en pantalla para completar la instalación de la actualización.

![nueva actualizacion - 2](/img/nueva-actualizacion-2.png "nueva actualizacion – 2")

Figura 6. Guardar como

Una vez finalizada la ejecución del experimento, PMApp estará lista para trabajar. Para más información consultar [¿Qué encontrar en la pantalla principal?](./main-window) 
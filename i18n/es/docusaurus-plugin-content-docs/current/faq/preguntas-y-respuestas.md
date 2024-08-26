---
sidebar_position: 2
---

# Preguntas y Respuestas

## ¿Por qué aparece un error al ejecutar mi experimento?

Una vez iniciado PMApp, desde el botón **OPEN** abres el asistente que te ayudará a ejecutar el experimento. Una vez seleccionado el runner, el asistente te pedirá que indiques donde están los archivos necesarios para ejecutar el experimento. Si te ha dado un error al intentar ejecutarlo, es muy probable que se te haya pasado actualizar la ubicación de uno de los archivos. Si no lo haces runner no sabe donde están estos ficheros en tu ordenador :).

## En el asistente ya he indicado donde están los archivos ¿por qué sigue dándome error al ejecutar el experimento?

No te preocupes, la aplicación funciona correctamente, lo más probable es que tengas abierto uno o varios de los archivos de datos que se utilizan en el experimento. Ciérralos y vuelve a lanzar el experimento.

## ¿Por qué tengo que indicar dónde están los archivos utilizados en el runner cada vez que quiero lanzarlo?

Si abres PMApp, haces clic en el botón **OPEN**, una vez en el asistente puedes observar que abajo hay un botón **SAVE**. La próxima vez que lances el experimento e indiques dónde están los archivos de configuración, recuerda hacer clic en el botón **SAVE** antes de lanzar el experimento con el botón **ACCEPT**. Eso hará que se guarden los cambios y no sea necesario que lo actualices cada vez que vayas a lanzar el experimento.

## ¿Por qué una vez he organizado los nodos, no se muestran en la misma posición la siguiente vez que lanzo el experimento?

Los nodos de una vista de proceso los puedes organizar de manera que te resulte visualmente más legible. Para que estos cambios sean permanentes, debes guardar un archivo de posiciones desde el menú ubicado en cada una de las pestañas de vista de proceso. Para más información de cómo hacerlo visita la página [¿Qué encontrar en la perspectiva MAIN?](../perspectivas/perspectiva-main)

## ¿Por qué a veces parece que PMApp no responde?

Pueden suceder dos cosas, la primera es que esté haciendo cálculos internamente y haya un momento puntual en el que requiera más recursos y se quede "congelado" por unos segundos, incluso algún minuto, si son muchos cálculos. Dale un momento y volverá a la vida. La segunda razón puede ser que hayas abierto una ventana para realizar alguna acción o que la aplicación necesite que confirmes alguna acción, y esa ventana esté "oculta" detrás de la pantalla principal. Normalmente estas ventanas de confirmación/acción bloquean el funcionamiento de la aplicación porque necesitan terminar lo que están haciendo antes de dejar al usuario continuar. Así pues, una vez concluyas la acción que pide que hagas esa ventana la aplicación volverá a la normalidad.

### ¿Puedo hacer algo para que no tarde tanto mi experimento cada vez que lo lanzo?

Una vez hayas lanzado un experimento, puedes guardarlo desde la opción **_Save Experiment_** del menú [¿Qué puedo hacer en el menú More Options?](../perspectivas/menu/More-options). Así, la siguiente vez que vayas a lanzar el experimento, puedes utilizar el archivo que se genera con extensión ".rnr.zip", y al cual le has dado nombre. Este archivo contiene muchos de los cálculos que se hacen al lanzar un experimento, lo que agilizará todo el proceso la próxima vez.

### ¿Puedo cambiarle el nombre a las pestañas que aparecen al lanzar un nuevo grupo?

Sí, cada una de estas pestañas muestran una vista de proceso, en el cual hay disponible un menú, dónde una de las opciones es mostrar una pantalla con información sobre el proceso. En esa pantalla hay un campo llamado **_Name_** que se puede modificar para cambiarle el nombre a dicha pestaña. Para más información consultar [¿Qué encontrar en la perspectiva Main?](../perspectivas/perspectiva-main).
# Taller de introducción a OpenRefine

Aquí encontrarán dos ejercicios para practicar el uso de funciones básicas con OpenRefine.

En este sitio pueden encontrar la documentación de las funciones de OpenRefine:

https://github.com/OpenRefine/OpenRefine/wiki/GREL-Functions

## Funciones a utilizar:

* Eliminar espacios (trim leading and trailing whitespaces)
* Eliminar espacios consecutivos (collapse consecutive whitespace)
* Pasar todo a titlecase (to titlecase)

* Crear columna a partir de otras columnas
* Renombrar columnas
* Eliminar columnas
* Reordenar columnas
* Transformar celdas masivamente
* Filtros de texto
* value.split()
* value.partition()

====

## Ejercicio 1

Tomar el archivo datasets/01_juntas_discapacidad.json

Generar un archivo separado por comas con las siguiente estuctura

* provincia
* localidad
* nombre
* direccion
* horario
* telefono

Normalizar el campo provincia y localidad.

### Consejos

Usar facetas y la opción cluster para arreglar el campo provincia.

El campo localidad tiene varias inconsistencias e información que está de más. Utiliza una faceta por este campo para localizar esos registros y ver qué fórmula aplicar para dejar solamente el nombre de la localidad.

Nota: la solución del ejercicio está en el archivo [ejercicio01.md]

====


## Ejercicio 2

Tomar el archivo datasets/02_personas.json

Generar un archivo separado por comas con las siguiente estuctura

* titulo: doctor, ingeniero, etc
* nombres
* apellido
* edad
* nacionalidad

Todos los campos deben estar normalizados.

### Consejos

Usar facetas y la opción cluster para arreglar la nacionalidad.
Las nacionalidades que deberían quedar son: Argentina, Brasileña, Chilena, Uruguaya, Otra y en blanco.

Los únicos títulos que deberían quedar son: Dr.,Ing.,Lic.,Prof. (Señor y Sr. los eliminamos)

Para ver cuáles son los títulos actualmente cargados resultará útil hacer una faceta por la primera palabra del campo nombre (Customized Facet)

Para separar el nombre del apellido, hay que tener en cuenta que algunos registros vienen en la forma "apellido, nombre" y otros como "nombre apellido". Utilizar el filtro de texto para tratar estos dos casos por separado. En el primer caso podremos usar split separando por el caracter coma y en el segundo separarndo por el caracter espacio.

Nota: la solución del ejercicio está en el archivo [ejercicio02.md]

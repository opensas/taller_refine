# Taller de introducción a OpenRefine

## Ejercicio 1

Tomar el archivo datasets/01_personas.json

Generar un archivo separado por comas con las siguiente estuctura

* titulo: doctor, ingeniero, etc
* nombres
* apellido
* edad
* nacionalidad

Todos los campos deben estar normalizados.

Funciones a utilizar:

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

Consejos

Usar facetas y la opción cluster para arreglar la nacionalidad.
Las nacionalidades que deberían quedar son: Argentina, Brasileña, Chilena, Uruguaya, Otra y en blanco.

Los únicos títulos que deberían quedar son: Dr.,Ing.,Lic.,Prof. (Señor y Sr. los eliminamos)

Para ver cuáles son los títulos actualmente cargados resultará útil hacer una faceta por la primera palabra del campo nombre (Customized Facet)

Para separar el nombre del apellido, hay que tener en cuenta que algunos registros vienen en la forma "apellido, nombre" y otros como "nombre apellido". Utilizar el filtro de texto para tratar estos dos casos por separado. En el primer caso podremos usar split separando por el caracter coma y en el segundo separarndo por el caracter espacio.

## Ejercicio 2

Tomar el archivo datasets/02_juntas_discapacidad.json

Generar un archivo separado por comas con las siguiente estuctura

* provincia
* localidad
* nombre
* direccion
* horario
* telefono

Normalizar el campo provincia y localidad.

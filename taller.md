# Taller de introducción a OpenRefine
=====================================

## Ejercicio 1
==============

Tomar el archivo datasets/01_personas.json

Generar un archivo separado por comas con las siguiente estuctura

titulo: doctor, ingenioro,
nombres
apellido
edad
nacionalidad

Todos los campos deben estar normalizados.

Funciones a utilizar:

Eliminar espacios (trim leading and trailing whitespaces)
Eliminar espacios consecutivos (collapse consecutive whitespace)
Pasar todo a titlecase (to titlecase)

Crear columna a partir de otras columnas
Renombrar columnas
Eliminar columnas
Reordenar columnas
Transformar celdas masivamente
Filtros de texto
value.split()
value.partition()

Consejos
========

Usar facetas y la opción cluster para arreglar la nacionalidad.
Las nacionalidades que deberían quedar son:
Argentina, Brasileña, Chilena, Uruguaya, Otra y en blanco.

Los únicos títulos que deberían quedar son: Dr.,Ing.,Lic.,Prof. (Señor y Sr. los eliminamos)

Para ver cuáles son los títulos actualmente cargados resultará útil hacer una faceta por la primera palabra del campo nombre (Customized Facet)

Para separar el nombre del apellido, hay que tener en cuenta que algunos registros vienen en la forma "apellido, nombre" y otros como "nombre apellido". Utilizar el filtro de texto para tratar estos dos casos por separado. En el primer caso podremos usar split separando por el caracter coma y en el segundo separarndo por el caracter espacio.


## Ejercicio 2
==============

Tomar el archivo datasets/02_juntas_discapacidad.json

Generar un archivo separado por comas con las siguiente estuctura

provincia
localidad
nombre
direccion
horario
telefono

Normalizar el campo provincia y localidad.




nombre,edad
Esteban Fernandez,23
Alberto Gutierrez,35
Julián Gomez,56

 value.split(" ")[1]

cells.nombre.value.split("")

base column

ejercicio 1

1.1 Columna con nombres y apellidos

Algunos tengo "Juan Ernesto Gomez" y en otros tengo "Gomez, Juan Ernesto"

1.2 Algunos tengo Sr. Juan Gomez / Sra. / Ing. / etc

sacar prefijo

Temas vistos:

filtar datos, facetas, funciones (split)

ejercicio 2

encontrar elementos erroneos

hacer una faceta por la longitud de una columna para encontrar columnas demasiado largas

facet by value.length()

2.1

if(value.length() > 10, "big string", "small string")





# Solución del ejercicio 02:

1. Renombramos todas las columnas
En cada columna, Edit column -> Rename this column

2. Arreglamos nacionalidad

  1. Facetamos por nacionalidad
  Click en nacionalidad, Facet, text face

  2. Eliminamos espacios:
  Click en nacionalidad -> Edit Cells -> Common transforms -> trim leading and trailing whitespaces

  2. Pasamos todo a titlecase:
  Click en nacionalidad -> Edit Cells -> Common transforms -> to titlecase

  3. Cluster
  Con la opción cluster vamos arreglando las nacionalidad para que queden de la siguiente manera:
  Argentina, Brasileña, Chilena, Uruguaya, Otra y en blanco.

  4. Editar manualmente las nacionalidad que no hayan sido resueltas mediante cluster


3. Creamos el titulo

  1. Creamos una faceta por la primera palabra del nombre, para ver cuáles son los titulos

  Click en nombre -> Facet -> Custom text facet
  value.split(' ')[0]

  2. Eliminamos espacios:
  Click en nacionalidad -> Edit Cells -> Common transforms -> trim leading and trailing whitespaces

  3. Eliminamos espacios consecutivos:
  Click en nacionalidad -> Edit Cells -> Common transforms -> collapse consecutive whitespace

  4. Pasamos todo a titlecase:
  Click en nacionalidad -> Edit Cells -> Common transforms -> to titlecase

  5. Seleccionamos manualmente cada una de las primeras palabras que son titulos
  Hacemos click en 'include' en cada una de ellas
  Doctor, Dr.,Ing, Ing., Ingeniero, Lic, Lic., Licenciado, Prof., Señor, Sr.

  6. Creamos una nueva columna llamada titulo, con la primera palabra

  Click en nombre -> Edit column -> Add column based on this column

  titulo
  value.partition(' ')[0]

  7. Eliminamos el titulo de la columna nombre

  Click en nombre -> Edit cells -> transform
  value.partition(' ')[2]

  8. Normalizamos titulo, facetamos por titulo
  Click en titulo -> Facet -> Text facet

  Con la opción cluster vamos arreglando el campo titulo para que queden de la siguiente manera:
  Dr., Ing., Lic., Prof. y en blanco.

  9. Editar manualmente las nacionalidad que no hayan sido resueltas mediante cluster

4. Separar el nombre del apellido

  1. Arreglar primero los que tienen el apellido seguido del nombre

  Filtrar por aquellos registros que contienen una coma

  Click en nombre -> Text Filter -> ingresar una coma

  Click en nombre -> Column -> Add column based on this column

  name: apellido
  value.split(',')[0]

  Click en nombre -> Column -> Add column based on this column

  name: nuevo_nombre
  value.split(',')[1].trim()

  Limpiamos el filtro

  2. Arreglamos luego los que tienen el nombre seguido del apellido

  Filtramos por los registros que tienen el apellido vacio (los que todavía no arreglamos)

  Click en apellido -> Facet -> Customized Facet -> Facet by blank -> include en true

  Completamos la columna nuevo nombre

  Click en nuevo_nombre -> Edit cells -> Transform ->

  cells.nombre.value.split(' ')[0]

  Click en apellido -> Edit cells -> Transform ->

  cells.nombre.value.split(' ')[1]

  Eliminamos la columna original nombre

  Click en nombre -> Edit column -> Remove this column

  Click en nuevo_nombre -> Edit column -> Rename this column

5. Cambiamos el orden de las columnas

All ->Edit columns -> Re-order / remove columns

titulo, nombres, apellido, edad, nacionalidad

6. Exportamos como archivo csv

Export -> Comma separated value

# Solución del ejercicio 01:

1. Renombramos todas las columnas
En cada columna, Edit column -> Rename this column

2. Reordenamos las columnas
All ->Edit columns -> Re-order / remove columns

3. Arreglamos provincia

  1. Facetamos por provincia
  Click en provincia, Facet, text face

  2. Eliminamos espacios:
  Click en provincia -> Edit Cells -> Common transforms -> trim leading and trailing whitespaces

  3. Pasamos todo a titlecase:
  Click en provincia -> Edit Cells -> Common transforms -> to titlecase

  4. Cluster
  Con la opción cluster vamos arreglando las provincias.

  5. Editar manualmente las provincias que no hayan sido resueltas mediante cluster. Deberían quedar sólo doce.

3. Arreglamos la localidad

  1. Facetamos por localidad
  Click en localidad, Facet, text face

  2. Eliminamos espacios:
  Click en localidad -> Edit Cells -> Common transforms -> trim leading and trailing whitespaces

  3. Pasamos todo a titlecase:
  Click en localidad -> Edit Cells -> Common transforms -> to titlecase


4. Arreglamos las que tienen textos entre paréntesis

Click en localidad -> Text filter -> ingresamos un paréntesis "("

Click en localidad -> Edit cells -> transform
value.split('(')[0].trim()

5. Arreglamos las que comienzan con "Junta Central Evaluadora"

Click en localidad -> Text filter -> ingresamos "Junta Central Evaluadora"
hacemos click en "case sensitive"

Click en localidad -> Edit cells -> transform
value.split('-')[1].trim()

6. Arreglamos las que comienzan con "de Personas"

Click en localidad -> Text filter -> ingresamos "de Personas"

Click en localidad -> Edit cells -> transform
value.split('-')[2].trim()

Hacemos lo mismo con los que empiezan con "Municipalidad de" y con los que contienen un guion "-"

Click en localidad -> Edit cells -> transform
value.replace('Municipalidad de', '').trim()

7. Cambiamos Gral por General

Click en localidad -> Edit cells -> transform
value.replace('Gral. ', 'General ').trim()
value.replace('Gral ', 'General ').trim()

8. Exportamos como archivo csv

Export -> Comma separated value

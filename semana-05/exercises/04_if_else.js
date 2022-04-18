console.log('--EXERCISE 4: IF ELSE')

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
 si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
  y sino un alerta con el mensaje “Lower than 0,5”. */

  console.log('Exercise 4.a:')

  var numberRandom = Math.random(0,1)

  console.log(numberRandom)

  if (numberRandom >= 0.5) {
      result = console.log('Greater than 0.5')
   }
    else {
      result = console.log('Lower than 0.5')
  }

  /* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/

console.log('Exercise 4.b:')

var numberInteger = 70

if (numberInteger < 2) {
  result = console.log('Bebé')
}
else if (numberInteger >= 2, numberInteger <= 12) {
  result = console.log('Niño')
}
else if (numberInteger >= 13, numberInteger <= 19) {
  result = console.log('Adolescente')
}
else if (numberInteger >= 20, numberInteger <= 30) {
  result = console.log('Joven')
}
else if (numberInteger >= 31, numberInteger <= 60) {
  result = console.log('Adulto')
}
else if (numberInteger >= 61, numberInteger <= 75) {
  result = console.log('Adulto mayor')
}
else
  result = console.log('Anciano')



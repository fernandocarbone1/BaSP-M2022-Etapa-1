console.log('--EXERCISE 3: ARRAYS')

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('Exercise 3.a:')

var monthsYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

console.log(monthsYear[4], monthsYear[10])

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('Exercise 3.b:')

var monthAlpha = monthsYear.sort()

console.log(monthAlpha)

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('Exercise 3.c:')

var newFirstMonths = monthsYear.unshift("Lunes")
var newLastMonths = monthsYear.push("Viernes")

console.log(monthsYear)

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('Exercise 3.d:')

var deleteFirstMonths = monthsYear.shift()
var deleteLastMonths = monthsYear.pop()

console.log(monthsYear)

/* e. Invertir el orden del array (utilizar reverse). */

console.log('Exercise 3.e:')

var reverseMonthsYear = monthsYear.reverse()

console.log(reverseMonthsYear)

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por 
un guión - (utilizar join). */

console.log('Exercise 3.f:')

var stringMonths = monthsYear.join('-')

console.log(stringMonths)

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('Exercise 3.g:')

var copyMonth = monthsYear.slice(0,5)

console.log(copyMonth)
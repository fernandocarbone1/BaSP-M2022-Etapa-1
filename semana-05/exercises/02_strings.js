console.log('--EXERCISE 2: STRINGS')

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
en mayúscula (utilizar toUpperCase). */

console.log('Exercise 2.a:')

var textUpper = 'Fonoaudiologo'

console.log(textUpper.toLocaleUpperCase())

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
 primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ('Excercise 2.b:')

var textWord = 'Fonoaudiologo'

var text5 = textWord.substring(0,5)

console.log(text5)

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log ('Exercise 2.c:')

var stringText = 'Fonoaudiologo'

var lastString = stringText.substring(10,14)

console.log(lastString)

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
 en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */

console.log ('Exercise 2.d:')

var strText = "meteorologo"

var strText1 = strText.substring(0,1).toUpperCase()

var strText2 = strText.substring(1,11)

var strText3 = strText1 + strText2

console.log(strText3)

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log ('Exercise 2.e:')

var textString = "Super estrella"

var textIndex = textString.indexOf(' ')

console.log(textIndex)

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +). */

console.log('Exercise 2.f:')

var spinettaText = "matandome lentamente"

var spinettaTextUpper = spinettaText.substring(0,1).toUpperCase()

var spinettaTextUpper02 = spinettaText.substring(10,11).toUpperCase()

var spinettaTextLower = spinettaText.substring(1,10)

var spinettaTextLower02 = spinettaText.substring(11,20)

var spinettaText01 = spinettaTextUpper + spinettaTextLower + spinettaTextUpper02 + spinettaTextLower02

console.log(spinettaText01)
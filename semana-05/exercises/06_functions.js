console.log('--EXERCISE 6: FUNCTIONS')

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar 
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('Exercise 6.a:')

function sumaNumbers (a, b) {
    console.log(a+b)
}
sumaNumbers(4,8)

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('Exercise 6.b:')

function sumaNumbers (a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b)
    }
    else {
        alert("One of the parameters has an error")
        console.log("NaN")
    }
}
sumaNumbers(4,5)

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('Exercise 6.c:')

function validate(a) {
    if (Number.isInteger(a)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
validate(2)

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('Exercise 6.d:')

function intNumber (a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        console.log(a+b)
    }
    else {
        alert(parseInt(a), parseInt(b))
    }
}

intNumber(5,8)

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
 que todo siga funcionando igual. */

console.log('Exercise 6.e:')

var sumInt = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
        if (intNumbers(a, b)) {
            return (a + b);
        } else {
            console.log(Math.round(a) + Math.round(b))
        }
    } else {
        alert("One of the parameters has an error")
        console.log("NaN");
    }
}
sumInt(1, 4)

function intNumbers(a, b) {
    return Number.isInteger(a) && Number.isInteger(b);
}

console.log(intNumbers(1,2));

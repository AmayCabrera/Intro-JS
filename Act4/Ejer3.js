// Ejercicio 2 con do while

var num = Number(prompt('Ingresa un número'))
var entero = 1;

do{entero ++
    if (entero % 5 == 0){
     console.log(`${entero} es un multiplo de 5`)
    }
}
while(entero <= num)
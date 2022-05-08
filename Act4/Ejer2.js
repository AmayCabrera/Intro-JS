// Preguntar numero, mostrar multiplos de 5 desde 1 hasta el numero ingresado.

var num = Number(prompt('Ingresa un número'))
var entero = 1;

while(entero <= num){
    entero ++
   if (entero % 5 == 0){
    console.log(`${entero} es un multiplo de 5`)
   }
}





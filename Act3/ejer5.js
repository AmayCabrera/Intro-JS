// Ingresar tres numeros y decir cual es el numero mayor. considerar que dos numeros son iguales.

var num = Number(prompt("Introduce el primer número:  "))
var num2 = Number(prompt("Introduce el segundo número:  "))
var num3 = Number(prompt("Introduce el tercer número:  "))
if(num == num2 && num > num3){
    console.log("El primer y segundo numero son los mayores y su valor es " + num)
}else if(num == num3 && num > num2){
    console.log("El primer y tercer numero son los mayores y su valor es " + num)
}else if(num2 == num3 && num2 > num){
    console.log("El segundo y tercer numero son los mayores y su valor es " + num2)
}else if(num > num2 && num > num3){
    console.log("El primer numero es el mayor y su valor es " + num)
}else if (num2 > num3){
    console.log("El segundo numero es el mayor y su valor es " + num2)
}else{
    console.log("El tercer numero es el mayor y su valor es " + num3)
}

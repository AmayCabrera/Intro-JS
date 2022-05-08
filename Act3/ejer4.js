//Introduce dos numeros y dice cual es menor que cual.

var num = Number(prompt("Introduce un número:  "))
var num2 = Number(prompt("Introduce otro número:  "))
if(num < num2)
{
    console.log(num+"  Es menor que "+num2)
}else if(num2 < num)
{
    console.log(num2+"  Es menor que "+num)
}
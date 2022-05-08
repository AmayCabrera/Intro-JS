// Imprimir numeros impares del 1 al 50

var num = 1
var num2 = 50

for (var i = num; i < num2; i++) {
    if (i % 2 != 0) {
        console.log(`Los numeros impares entre ${num}  y ${num2} son: ${i} `)
    }
}

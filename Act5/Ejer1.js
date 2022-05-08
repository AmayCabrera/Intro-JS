// Iterar arreglo con for e imprimir en consola los valores menores a 3

var arreglo = [1,4,6,10,22,55,46,2,5,0];

for (var index = 0; index < arreglo.length; index++){
    arreglo.sort(function(a,b){return a-b});
    arreglo.slice(3);
}

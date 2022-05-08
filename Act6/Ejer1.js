//Concatenar arreglos

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
var comingSoonAnimals = ['panter', 'dragon', 'turtle']
var unitedAnimals = animals.concat(comingSoonAnimals)

console.log(unitedAnimals);

// Arreglar de menor a mayor 

var arr = [4, 6, 1, 0, 8, 2]

arr.sort();

//Agregar 'cow' al arreglo de animals

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

animals.push('cow')
console.log(animals)

//Retirar el elemento 'eagle' de animals

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

animals.shift()
console.log(animals)

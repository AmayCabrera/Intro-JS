//Ingrser nombre y edad, ¿Puede acceder a la discoteca?, ¿Es miembro VIP?

var nombre = prompt("¿Cual es tu nombre?")
var edad = Number(prompt("¿Cual es tu edad?"))

if (edad >= 18 && nombre == 'Mario'){
    console.log("Bienvenido Mario puedes ingresar al área VIP")
}else if (edad >= 18 && nombre == 'Carlos'){
    console.log("Bienvenido Carlos puedes ingresar al área VIP")
}else if (edad >= 18){
    console.log("Bienvenido " +nombre ,", puedes ingresar a la discoteca")
}else if (edad < 18){
    console.log("Lo sentimos, no puedes ingresar a la discoteca")
}


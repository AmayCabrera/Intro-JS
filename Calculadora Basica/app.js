var operandoa;
var operandob;
var operacion;


//Click
function cero(){
    resultado.textContent = resultado.textContent  + "0";
}
function uno(){
    resultado.textContent = resultado.textContent  + "1";
}
function dos(){
    resultado.textContent = resultado.textContent  + "2";
}
function tres(){
    resultado.textContent = resultado.textContent  + "3";
}
function cuatro(){
    resultado.textContent = resultado.textContent  + "4";
}
function cinco(){
    resultado.textContent = resultado.textContent  + "5";
}
function seis(){
    resultado.textContent = resultado.textContent  + "6";
}
function siete(){
    resultado.textContent = resultado.textContent  + "7";
}
function ocho(){
    resultado.textContent = resultado.textContent  + "8";
}
function nueve(){
    resultado.textContent = resultado.textContent  + "9";
}
function diez(){
    resultado.textContent = resultado.textContent  + "0";
}
function punto(){
    resultado.textContent = resultado.textContent  + ".";
}
function reset(){
    resetear();
}
function suma(){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
function resta(){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
function multiplicacion(){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
function division(){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
function igual(){
    operandob = resultado.textContent;
    resolver();
}

//reset, limpiar

function borraruno(){
    var value = resultado.textContent;
    var newValue = value.substring(0,value.length - 1);
    resultado.textContent = newValue;
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

//Operaciones

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    reset();
    resultado.textContent = res;
  }
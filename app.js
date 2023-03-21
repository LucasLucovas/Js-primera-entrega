let operandoa;
let operandob;
let operacion;

function init(){
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
  }



  //Eventos de click
uno.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "1";
}
dos.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "2";
}
tres.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "3";
}
cuatro.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "4";
}
cinco.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "5";
}
seis.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "6";
}
siete.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "7";
}
ocho.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "8";
}
nueve.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "9";
}
cero.onclick = function(e){
    resultado.innerHTML = resultado.innerHTML  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.innerHTML;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.innerHTML;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.innerHTML;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.innerHTML;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.innerHTML;
    resolver();
}

function limpiar(){
    resultado.innerHTML = "";
  }
  
  function resetear(){
    resultado.innerHTML = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }


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
    resetear();
    resultado.innerHTML = res;
  }
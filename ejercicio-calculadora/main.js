
const input = document.querySelector("input");
const btnNumeros = document.querySelectorAll("button");
const btnClear = document.getElementById("clear");
const btnIgual = document.getElementById("igual");


function calcular (operando1, operando2, operacion){
    return operacion(operando1, operando2)
}

function sumar(operando1, operando2){
    let results = operando1 + operando2;
    return results;
}

function restar(operando1, operando2){
    let results = operando1 - operando2;
    return results;
}

function multiplicar(operando1, operando2){
    let results = operando1 * operando2;
    return results;
}

function dividir(operando1, operando2){
    if(operando2 === 0){
        return err
    }else{
        let results = operando1 / operando2;
        return results; 
    }   
}

function handleNumClick(e) {// escucha todos los eventos y le asigna  el valor a cda boton segun su textContent
    const btnValue = e.target.textContent;
    input.value += btnValue;
  }

btnNumeros.forEach(btn => {
    btn.addEventListener("click", handleNumClick)
})

btnIgual.addEventListener('click',() => {
    
    const cuenta = input.value;
    const operandos = cuenta.split(/[-+*/]/); //divide en subcadenas todo lo que ingresamos en el input(cuenta), usando como limites los singos y lo guarda en un array [[52][+][11]]
    const operador = cuenta.match(/[-+*/]/)[0];//devuelve el primer([0]) operador ingresado

/*La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve 
un número de coma flotante.*/
    const operando1 = parseFloat(operandos[0]);
    const operando2 = parseFloat(operandos[1]);
    
    let resultado;
    switch (operador) {
      case "+":
        resultado = calcular(operando1, operando2, sumar);
        break;
      case "-":
        resultado = calcular(operando1, operando2, restar);
        break;
      case "*":
        resultado = calcular(operando1, operando2, multiplicar);
        break;
      case "/":
        resultado = calcular(operando1, operando2, dividir);
        break;
    }
    
    input.value = resultado;
});

function clearInput() {
    input.value = "";
}

btnClear.addEventListener("click", clearInput);
 
  

  





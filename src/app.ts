import { Casino } from "./casino";
import { Dados } from "./dado";
import { Ruleta } from "./ruleta";
import { SlotLetras } from "./slotLetras";
import { SlotNumeros } from "./slotNumeros";

import readlineSync from "readline-sync";




const slotNumeros : SlotNumeros = new SlotNumeros(0,0,4)
const slotLetras : SlotLetras = new SlotLetras(0,0,3)
const ruleta : Ruleta = new Ruleta(0,0)
const dados : Dados = new Dados(0,0)
const casinoLasFlores : Casino = new Casino(dados, ruleta, slotLetras, slotNumeros);

const  nombreUsuario  = readlineSync.question( '¿ Puedo tener su nombre?  ' ) ; 
console.log(` Hola ${nombreUsuario} !!! ` );

const juegos : string[] = ["Dados", "Ruleta", "SlotLetras", "SlotNumeros"];
const index = readlineSync.keyInSelect(juegos, 'Elige el que deseas jugar:');

//habria que hacer algun bucle  while(index !== 0)
//mientras el indice sea dsitinto de 0 segui ejecutando esto....
if(juegos[index] == "Dados"){  //en vez de hacer tanto if anidados podriamos hacer un switch que evalue en cada caso si juegos[index] == "x juego"
    console.log(`Vamos a jugar, ${juegos[index]}`);
    const valor = readlineSync.questionFloat("Ingrese su apuesta:");
    //tambien habria que validar si lo que ingresa como apuesta es un numero
        if(valor >= 150){
            dados.jugar();  
         }else{
            console.log("Debe ingresar una apuesta mayor a $150");      
        };

    }else if(juegos[index] == "SlotLetras"){
        console.log(`Vamos a jugar, ${juegos[index]}`)
        const valor = readlineSync.questionFloat("Ingrese su apuesta:");
        slotLetras.jugar();
    }





import { Apuesta } from "./apuesta";


export class Ruleta extends Apuesta{
   

    public constructor(apuesta : number, saldo : number) {
        super(apuesta, saldo)
        }

    public jugar() : void {
            const resultado = Math.floor(Math.random() * 36);
            console.log(resultado);
            
          }
    } 







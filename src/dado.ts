
import { Apuesta } from "./apuesta";


export class Dados extends Apuesta{

    public constructor(apuesta : number, saldo : number){
        super(apuesta, saldo)
    }

    public jugar() : void {
        const dado1 : number =  Math.floor(Math.random()*6 + 1);
        const dado2 : number =  Math.floor(Math.random()*6 + 1);
        const resultado : number = dado1 + dado2;
        
        
            
        if((resultado) === 7 || (resultado) === 11){
         console.log(`Dado 1: ${dado1} Dado2: ${dado2} Su tirada dió ${resultado}. Usted ganó ${this.apuesta} pesos`);
        } else if((resultado) === 2||(resultado) === 3||(resultado) === 12){
            console.log(`Dado 1: ${dado1} Dado2: ${dado2} Su tirada dió ${resultado}. Usted perdió`);
        }else{
            console.log(`Usted saco: Dado 1: ${dado1} Dado2: ${dado2}, puede volver a tirar para seguir jugando.`);
        }
    }
    

    public apostar(apuesta: number): string {
        this.apuesta = apuesta;
        if(apuesta>=150){
            return `usted aposto ${this.apuesta} pesos a los dados`;
        }else{
            return `La apuesta minima es de $150, vuelva a apostar`;
        }
    }

    public probabilidadDeGanar(): void {
        const probabilidad:number = 1/12 * 100;
        console.log(`Tus probabilidades de ganar son: ${probabilidad} `);
            }   
}


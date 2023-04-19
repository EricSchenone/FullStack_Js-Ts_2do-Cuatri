import { Tragamonedas } from "./tragamoneda";

export class SlotNumeros extends Tragamonedas{
    private numeros : number[];
    
    public constructor(apuesta : number, saldo : number, reels : number) {
        super(apuesta,saldo,reels);
        this.numeros = [1,2,3,4];
    }
    
    public jugar() : void {
        let result : number[] = [];
            for (let i = 0; i < this.reels; i++) {
                const randomIndex = Math.floor(Math.random() * this.numeros.length);
                result.push(this.numeros[randomIndex]);
                }
                console.log(result);
            }
}


 


 

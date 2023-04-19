import { Tragamonedas } from "./tragamoneda";

export class SlotLetras extends Tragamonedas{
   protected letras : string[];
    
    constructor(apuesta : number, saldo : number, reels : number){
        super(apuesta, saldo, reels)
        this.letras = ["A","B","C"];
    }

    
    public jugar() : void {
        let result : string[] = [];
        for (let i = 0; i < this.reels; i++) {
            const randomIndex = Math.floor(Math.random() * this.letras.length);
            result.push(this.letras[randomIndex]);
            }
            console.log(result);
        } 
    }



     
import { Apuesta } from "./apuesta";

export class Tragamonedas extends Apuesta{
    protected reels : number;
   

    constructor(apuesta : number, saldo : number, reels : number){
        super(apuesta, saldo)
        this.reels = reels;
    }

    public jugar() : void {

    }


    public apostar(apuesta : number) : void {
        this.apuesta = apuesta;
        if(apuesta>=100){
            console.log( `usted aposto ${this.apuesta} pesos a los dados`);
            
        }else{
            console.log( `La apuesta minima es de $100, vuelva a apostar`);
    
        }
    }

}


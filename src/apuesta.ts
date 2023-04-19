import { iApuesta } from "./iApuesta";

export class Apuesta implements iApuesta{
    protected minBet : number = 0;
    protected apuesta : number;
    protected saldo : number;
    
     public constructor(apuesta : number, saldo : number){
        this.apuesta = apuesta;
        this.saldo = saldo;
    }
    mostrarSaldo(): string {
        throw new Error("Method not implemented.");
    }

    public jugar() : void{
        
    }

   

    public apostar(apuesta: number): void {
        this.apuesta = apuesta;
    }
}
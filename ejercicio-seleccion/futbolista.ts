import { Integrant } from "./integrantes";
import { CupWon } from "./copas";

export class SoccerPlayer extends Integrant{
    private position : string;
    private isHolder : boolean;
    private cupWon : CupWon;

    constructor(name : string, lastName : string, passport : number, birthday : string, position : string, isHolder : boolean, cupWon : CupWon) {
        super(name, lastName, passport, birthday)
        this.position = position;
        this.isHolder = isHolder;
        this.cupWon = cupWon;
    }

    public setPosition(position : string) : void {
        this.position = position;
    }

    public getPosition() : string {
        return this.position;
    }

    public setIsHolder(isHolder : boolean) : void {
        this.isHolder = isHolder;
    }

    public getIsHolder() : boolean {
        return this.isHolder;
    }

    public getInfo() : void {
        console.log(
            `Nombre y Apellido: ${this.name}, ${this.lastName}
             Posicion de juego: ${this.position}
             Titular: ${this.isHolder}`
        );
        
        
    }
}
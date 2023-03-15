import { JuegoDeCasino } from "./juegoDeCasino";

export class Slots extends JuegoDeCasino {
    private typeAnimation  : string;
    private jackpot : number;
    private lines : number;

    constructor(name : string, type : string, maxBet : number, minBet : number, typeMoney : string, typeAnimation : string, jackpot : number, lines : number) {
        super(name, type, maxBet, minBet, typeMoney)
        this.typeAnimation = typeAnimation;
        this.jackpot = jackpot;
        this.lines = lines;
    }

    public setTypeAnimation(typeAnimation : string) : void{
        this.typeAnimation = typeAnimation;
    }

    public getTypeAnimation() : string {
        return this.typeAnimation;
    }

    public setJackpot(jackpot : number) : void {
        this.jackpot = jackpot;
    }

    public getJackpot() : number {
        return this.jackpot;
    }

    public setLines(lines : number) : void {
        this.lines = lines;
    }

    public getLines() : number {
        return this.lines;
    }
    
}

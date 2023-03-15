import { JuegoDeCasino } from "./juegoDeCasino";

export class BlackJack extends JuegoDeCasino {
    private minPlayers : number;
    private maxPlayers : number;

    constructor(name : string, type : string, maxBet : number, minBet : number, typeMoney : string, minPlayers : number, maxPlayers : number) {
        super(name, type, maxBet, minBet, typeMoney)
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
    }

    public setMinPlayers(minPlayers : number) {
        this.minPlayers = minPlayers;
    }

    public getMinPlayers() : number {
        return this.minPlayers;
    }

    public setMaxPlayers(maxPlayers : number) {
        this.maxPlayers = maxPlayers;
    }

    public getMaxPlayers() : number {
        return this.maxPlayers;
    }

}
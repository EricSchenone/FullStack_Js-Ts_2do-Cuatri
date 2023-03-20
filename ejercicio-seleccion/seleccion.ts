import { Coach } from "./entrenador";
import { SoccerPlayer } from "./futbolista";
import { Massagist } from "./masajista";

export class SoccerTeam {
    private name : string;
    private soccerPlayers : SoccerPlayer [];
    private coach : Coach;
    private massagist : Massagist;

    constructor(name : string, soccerPlayers : SoccerPlayer[], coach : Coach, massagist : Massagist) {
        this.name = name;
        this.soccerPlayers = soccerPlayers;
        this.coach = coach;
        this.massagist = massagist;
    }

    public setName(name : string) : void {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setSoccerPlayers(soccerPlayers : SoccerPlayer[]) {
        this.soccerPlayers = soccerPlayers;
    }

    public getSoccerPlayers() : SoccerPlayer[] {
        return this.soccerPlayers;
    }

    public setCoach( coach : Coach) : void {
        this.coach = coach;
    }

    public getCoach() : Coach {
        return this.coach;
    }

    public setMassagist(massagist : Massagist) : void {
        this.massagist = massagist;
    }

    public getMassagist() : Massagist {
        return this.massagist;
    }
    
}
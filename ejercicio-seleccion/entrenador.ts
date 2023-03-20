import { Integrant } from "./integrantes";

export class Coach extends Integrant {
    private profession : string;
    private yearsExperience : number;

    constructor(name : string, lastName : string, passport : number, birthday : string, profession : string, yearsExperience : number) {
        super(name, lastName, passport, birthday)
        this.profession = profession;
        this.yearsExperience = yearsExperience;
    }

    public setProfession(profession : string) : void {
        this.profession = profession;
    }

    public getProfession() : string {
        return this.profession;
    }

    public setExperience(experience : number) : void {
        this.yearsExperience = experience;
    }

    public getExperience() : number {
        return this.yearsExperience;
    }

    public getInfo(): void {
        console.log(
            `Nombre y Apellido: ${this.name}, ${this.lastName}
             Profesion: ${this.profession}
             Años de Experiencia: ${this.yearsExperience}`
        )
    }
}
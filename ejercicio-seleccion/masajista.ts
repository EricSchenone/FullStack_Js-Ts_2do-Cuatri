import { Integrant } from "./integrantes";

export class Massagist extends Integrant {
    private degreeTitle : string;

    constructor(name : string, lastName : string, passport : number, birthday : string, degreeTitle : string) {
        super(name, lastName, passport, birthday)
        this.degreeTitle = degreeTitle;
    }

    public setDegree(degreeTitle : string) : void {
        this.degreeTitle = degreeTitle;
    }
    
    public getDegree() : string {
        return this.degreeTitle;
    }

    public getInfo(): void {
        console.log(
            `Nombre y Apellido : ${this.name}, ${this.lastName}
             Titulo de Grado : ${this.degreeTitle}`
        );
        
    }
}
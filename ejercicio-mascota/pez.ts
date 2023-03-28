import { Animal } from "./animal";
import { iPet } from "./mascota";

export class Fish extends Animal implements iPet{
    private name : string;

    constructor(name : string){
        super(0);
        this.name = name;
    }

    public getName(): string {
       return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public play(name: string): void {
        console.log(`${name} juega con otro pez.`);
    }

    public eat(): void {
        console.log("El pez come");   
    }

    public walk(paws: number): void {
        console.log(`El pez tiene ${paws} patas, no camina.`);
    }
    
}
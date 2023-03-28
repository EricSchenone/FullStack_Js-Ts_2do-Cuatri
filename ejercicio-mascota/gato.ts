import { Animal } from "./animal";
import { iPet } from "./mascota";


export class Cat extends Animal implements iPet{
    private name : string;

    constructor(name : string, paws : number){
        super(paws);
        this.name = name;
    }
    
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public play(name: string): void {
        console.log(`El gato ${this.name} está jugando.`);
    }

    public eat(): void {
        console.log("El gato está comiendo");
        
    }
    public walk(paws: number): void {
        console.log(`El gato de ${paws} está caminando`);
    }
    
}
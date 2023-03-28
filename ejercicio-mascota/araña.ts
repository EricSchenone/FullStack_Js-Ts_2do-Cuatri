import { Animal } from "./animal";

export class Spider extends Animal{
    
    public eat(): void {
        console.log("Esta comiendo");
    }

    public walk(paws: number): void {
        console.log("Esta caminando");
    }
    
}

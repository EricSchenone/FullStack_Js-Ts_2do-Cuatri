import { Animal } from "./animal";

export class ListOfAnimals{
    private animals : Animal[];

    constructor(animals : Animal[]){
        this.animals = animals;
    }

    public search(animal : Animal) : boolean {
        const aux = this.animals.find(element => element === animal)
        if(aux === animal) {
            return true;
        }else{
            return false;
        }
    }

    public addAnimal(animal : Animal) : void {
        this.animals.push(animal);
    }

    public removeAnimal(animal  : Animal) : void {
        const aux = this.animals.findIndex(element => element === animal);
        this.animals.splice(aux, 1);
    }
}
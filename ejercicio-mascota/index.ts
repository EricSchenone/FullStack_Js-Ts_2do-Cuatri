
import { Spider } from "./araña";
import { Cat } from "./gato";
import { ListOfAnimals } from "./listaDeAnimales";
import { Fish } from "./pez";


let cat01 : Cat = new Cat("Tito", 4);
let cat02 : Cat = new Cat("Mishu", 4);

const list01 : ListOfAnimals = new ListOfAnimals([cat01, cat02]);

let spider01 : Spider = new Spider(8);
let spider02 : Spider = new Spider(8);
let fish01 : Fish = new Fish("Nemo");
let fish02 : Fish = new Fish("Dory");

list01.addAnimal(spider01);
list01.addAnimal(fish01);
list01.addAnimal(fish02);

console.log(list01);

list01.removeAnimal(fish01);
console.log(list01);

console.log(list01.search(spider01));
console.log(list01.search(spider02));
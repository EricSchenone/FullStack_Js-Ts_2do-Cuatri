import { Casino } from "./casino";
import { Slots } from "./slots";
import { BlackJack } from "./blackjack";

const slotCleoprata : Slots = new Slots("Cleopatra", "Slosts", 100000, 10, "ARS", "Piramids", 1000000, 25)
const slotLucky : Slots = new Slots("LuckySlot", "Slot", 250000, 125, "ARS", "Clovers and coins", 2500000, 50)

const slots : Slots[] = [slotCleoprata, slotLucky]

const blackjack : BlackJack = new BlackJack("Blackjack", "Card Game", 10000, 100, "ARS", 4, 7)



const casinoLasFlores : Casino = new Casino("The Flowers", "San Martin y Rivadavia", "Las Flores, Bs. As.", slots, blackjack)

//console.log(casinoLasFlores.getInfo());
//console.log(slotCleoprata.getMaxBet());

slotCleoprata.setJackpot(10000000);
console.log(slotCleoprata.getJackpot());


 

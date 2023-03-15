import { Slots } from "./slots";
import { BlackJack } from "./blackjack";

export class Casino{
    private name : string;
    private address : string;
    private location : string;
    private slot : Slots[];
    private blackjack : BlackJack;

    constructor(name : string, address : string, location : string, slot : Slots[], blackjack : BlackJack) {
        this.name = name;
        this.address = address;
        this.location = location;
        this.slot = slot;
        this.blackjack = blackjack;
    }
    

    public setName(name : string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setAddress(address : string) {
        this.address = address;
    }

    public getAddress() : string {
        return this.address;
    }

    public setLocation(location : string) {
        this.location = location;
    }

    public getLocation() : string {
        return this.location;
    }

    public getInfo() : Casino {
        return this;
    }
}
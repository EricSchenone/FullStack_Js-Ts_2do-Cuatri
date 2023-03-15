export class JuegoDeCasino {
    protected name : string;
    protected type : string;
    protected maxBet : number;
    protected minBet : number;
    protected typeMoney : string;

    constructor(name : string, type : string, maxBet : number, minBet : number, typeMoney : string) {
        this.name = name;
        this.type = type;
        this.maxBet = maxBet;
        this.minBet = minBet;
        this.typeMoney = typeMoney;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setType(type : string) : void {
        this.type = type;
    }

    public getType() : string {
        return this.type;
    }

    public setMaxBat(maxBet : number) : void {
        this.maxBet = maxBet;
    }

    public getMaxBet() : number {
        return this.maxBet;
    }

    public setMinBet(minBet : number) {
        this.minBet = minBet;
    }

    public getMinBet() : number {
        return this.minBet;
    }

    public setTypeMoney(typeMoney : string) : void {
        this.typeMoney = typeMoney;
    }

    public getTypeMoney() : string {
        return this.typeMoney;
    }
}
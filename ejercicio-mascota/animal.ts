export abstract class Animal {
    protected paws : number;

    constructor(paws : number) {
        this.paws = paws;
    }

    public getPaws() : number {
        return this.paws;
    }

    public setPaws(paws : number) {
        this.paws = paws;
    }

    public abstract eat() : void;

    public abstract walk(paws : number) : void;

}
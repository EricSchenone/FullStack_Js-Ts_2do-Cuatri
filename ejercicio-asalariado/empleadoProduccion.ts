import { Salaried } from "./asalariado";

export class ProductionEmployee extends Salaried {
    private workShift : string;

    constructor(name : string, dni : number, holidays : number, baseSalary : number, workShift : string) {
        super(name, dni, holidays, baseSalary)
        this.workShift = workShift;

    }
    public setWorkShift(workShift : string) : void {
        this.workShift = workShift;
    }

    public getWorkShift() : string {
        return this.workShift;
    }

    public getSalary(): number {
        let salary = this.baseSalary + 10000;
        return salary;
    }
}
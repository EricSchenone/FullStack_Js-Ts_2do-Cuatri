import { Salaried } from "./asalariado";

export class DistributionEmployee extends Salaried {
    private zone : string;

    constructor(name : string, dni : number, holidays : number, baseSalary : number, zone : string) {
        super(name, dni, holidays, baseSalary);
        this.zone = zone;

    }
    
    public setZone(zone : string) : void {
        this.zone = zone;
    }

    public getZone() : string {
        return this.zone;
    }

    public getSalary(): number {
        let viaticos : number = 15000;
        let salary : number = this.baseSalary + viaticos;
        return salary;
    }
}
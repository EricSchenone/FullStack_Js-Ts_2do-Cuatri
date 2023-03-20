export class Salaried {
    protected name: string;
    protected dni : number;
    protected holidays : number;
    protected baseSalary : number;
    
    constructor(name : string, dni : number, holidays : number, baseSalary : number) {
        this.name = name;
        this.dni = dni;
        this.holidays = holidays;
        this.baseSalary = baseSalary;
    }

    public setName(name : string) : void {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setDni(dni : number) : void {
        this.dni = dni;
    }
    
    public getDni() : number {
        return this.dni;
    }

    public setHolidays(holidays : number) : void {
        this.holidays = holidays;
    }

    public getHolidays() : number {
        return this.holidays;
    }

    public getSalary() :number {
        return this.baseSalary;
    }
}
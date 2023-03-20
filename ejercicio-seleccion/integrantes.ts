export class Integrant {
    protected name : string;
    protected lastName : string;
    protected passport : number;
    protected birthday : string;

    constructor(name : string, lastName : string, passport : number, birthday : string) {
    this.name = name;
    this.lastName = lastName;
    this.passport = passport;
    this.birthday = birthday;
    }

    public setName(name : string) : void {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setLastName(lastName : string) : void {
        this.lastName = lastName;
    }

    public getLastName() : string {
        return this.lastName;
    }

    public setPassport(passport : number) : void {
        this.passport = passport;
    }

    public getPassport() : number {
        return this.passport;
    }

    public setBirthday(birthday : string) : void {
        this.birthday = birthday;
    }

    public getBirthday() : string {
        return this.birthday;
    }

    public getInfo() : void {
        console.log(
            `Nombre: ${this.name}
             Apellido: ${this.lastName}
             Pasaporte: ${this.passport}
             Fecha de Nac. : ${this.birthday}`
        );
        
    }
}
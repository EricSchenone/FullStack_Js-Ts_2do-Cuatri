class Electrodomestico {
    public nombre : string;
    public precioBase: number;
    public color : string;
    public consumoEnergetico : number;
    public peso : number;

    
    constructor(nombre : string, precioBase : number, color : string,
        consumoEnergetico : number, peso : number){
            this.nombre = nombre;
            this.precioBase = precioBase;
            this.color = color;
            this.consumoEnergetico = consumoEnergetico;
            this.peso = peso;
        }
        
    public medirConsumo():boolean{
        let bajoConsumo : boolean = false;
        if(this.consumoEnergetico < 100){
            bajoConsumo = true;
        }else{
            bajoConsumo = false;
        }
        return bajoConsumo;
    }

    public calcularBalance():number{
        let balance = this.precioBase / this.peso
        return balance;
    }

    public indicarAltaGama(balance : number):boolean{
        let altaGama: boolean = false;
        if(balance > 3){
            altaGama = true;
        }else{
            altaGama = false;
        }
        return altaGama;
    }

    public setNombre(nombre : string) : void {
        this.nombre = nombre;
    }

    public getnombre() : string {
        return this.nombre;
    }

    public setprecioBase(precioBase : number) : void {
        this.precioBase = precioBase;

    }
    
    public getprecioBase() : number {
        return this.precioBase;
    }

    public setcolor(color : string) : void {
        this.color = color;
    }

    public getcolor() : string {
        return this.color;
    }

    public setconsumoEnergetico(consumoEnergetico : number) : void {
        this.consumoEnergetico = consumoEnergetico;
    }

    public getconsumoenergetico() : number {
        return this.consumoEnergetico;
    }

    public setpeso(peso : number) : void {
        this.peso = peso;
    }

    public getpeso() : number {
        return this.peso;
    }
}

let heladera : Electrodomestico = new Electrodomestico ('heladera', 200000,  'blanca', 250, 80);
let lavarropas : Electrodomestico = new Electrodomestico ('lavarropas', 150000, 'gris', 200, 40);
let ventilador : Electrodomestico = new Electrodomestico ('ventilador', 40000, 'negro', 150, 20);

//console.log(heladera);
//console.log(lavarropas);
//console.log(ventilador);

/*let balanceHeladera : number = heladera.calcularBalance();
console.log(balanceHeladera);

console.log(heladera.indicarAltaGama(balanceHeladera));

let bajoConsumoLavarropas : boolean = lavarropas.medirConsumo();
console.log(bajoConsumoLavarropas);
*/
 
let consumoHeladera = heladera.getconsumoenergetico()
console.log(consumoHeladera);

console.log(lavarropas.getcolor());
console.log(ventilador.getnombre());
console.log(heladera.getprecioBase());





 




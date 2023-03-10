class Electrodomestico {
    private nombre : string;
    private precioBase: number;
    private color : string;
    private consumoEnergetico : number;
    private peso : number;

    
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

    public getNombre() : string {
        return this.nombre;
    }

    public setPrecioBase(precioBase : number) : void {
        this.precioBase = precioBase;

    }
    
    public getPrecioBase() : number {
        return this.precioBase;
    }

    public setColor(color : string) : void {
        this.color = color;
    }

    public getColor() : string {
        return this.color;
    }

    public setConsumoEnergetico(consumoEnergetico : number) : void {
        this.consumoEnergetico = consumoEnergetico;
    }

    public getConsumoenergetico() : number {
        return this.consumoEnergetico;
    }

    public setPeso(peso : number) : void {
        this.peso = peso;
    }

    public getPeso() : number {
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
 
let consumoHeladera = heladera.getConsumoenergetico()
console.log(consumoHeladera);

console.log(lavarropas.getColor());
console.log(ventilador.getNombre());
heladera.getPrecioBase();





 




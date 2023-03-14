export class Libro {
    private nombre : string;
    private autor : string;
    private categoria : string;
    private editorial : string;
    private codigo : number;
    private prestado : boolean;

    constructor(nombre : string,
                autor : string,
                categoria : string,
                editorial : string,
                codigo : number,
                prestado : boolean) {

                this.nombre = nombre;
                this.autor = autor;
                this.categoria = categoria;
                this.editorial = editorial;
                this.codigo = codigo;
                this.prestado = prestado;
    }

    public setNombre(nombre : string) : void {
        this.nombre = nombre;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setAutor(autor : string) : void {
        this.autor = autor;
    }

    public getAutor() : string {
        return this.autor;
    }

    public setCategoria(categoria : string) : void {
        this.categoria = categoria;
    }

    public getCategoria() : string {
        return this.categoria;
    }

    public setEditorial(editorial : string) : void {
        this.editorial = editorial;
    }

    public getEditorial() : string {
        return this.editorial;
    }

    public setCodigo(codigo : number) : void {
        this.codigo = codigo;
    }

    public getCodigo() : number {
        return this.codigo;
    }

    public setPrestado(prestado : boolean) : void {
        this.prestado = prestado;
    }

    public getPrestado() : boolean {
        return this.prestado;
    }
 
}



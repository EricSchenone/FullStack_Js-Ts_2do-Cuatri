//Crear clase biblioteca COMPLETA con 3 o 4 atributos que este compuesta por Libros

import { Libro } from "./libro";

export class Biblioteca {
    private nombre : string;
    private direccion : string;
    private localidad : string;
    private telefono : number;
    private libros : Libro[];

    constructor(nombre : string, direccion : string, localidad : string, telefono : number, libros : Libro[]) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.localidad = localidad;
        this.telefono = telefono;
        this.libros = libros;
    }

    public setNombre(nombre: string) : void {
        this.nombre = nombre;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setDireccion(direccion : string) : void {
        this.direccion = direccion;
    }

    public getDireccion() : string {
        return this.direccion;
    }

    public setLocalidad(localidad : string) : void {
        this.localidad = localidad;
    }

    public getLocalidad() : string {
        return this.localidad;
    }

    public setTelefono(telefono : number) : void {
        this.telefono = telefono;
    }

    public getTelefono() : number {
        return this.telefono;
    }
    
    public setLibro(libro : Libro[]) : void {
        this.libros = libro;
    }

    public getLibro() : Libro[] {
        return this.libros;
    }

}





import { Biblioteca } from "./biblioteca";
import { Libro } from "./libro";
import { Categorias } from "./categorias-libros";




const libros : Libro [] = [new Libro("Modulo 1: Matematicas", "Jorge lopez Crespo", Categorias.CAT.MATEMATICAS, "Paraninfo", 100212, true),

                            new Libro("Historia del Arte", "Ernst Gombrich", Categorias.CAT.ARTE, "Editorial Diana SA", 110255, false),

                            new Libro("Vivir entre lenguas", "Silvia Molloy", Categorias.CAT.FICCION, "Eterna Cadencia", 130145, true)]




const biblioDeMayo : Biblioteca = new Biblioteca("25 de Mayo","Rivadavia 350 ", "Las Flores", 452680, libros)

//console.log(libros[0]);
//console.log(libros[0].getNombre());
//console.log(libros[1].getCategoria();


 

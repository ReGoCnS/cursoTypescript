// Cualquier cosa que quiera ser una Persona TIENE que tener esto obligatoriamente".
interface Persona {
    nombre: string;
    edad: number;
    activo: boolean;
    
    // Estas son cosas que la persona SABE hacer (acciones).
    saludar(): void;
    caminar(): void;
    nadar(): void;
}

//Esta clase debe implementar todo lo declarado en Interface Persona
class usuario implements Persona {
    
    nombre: string;
    edad: number;
    activo: boolean;
    telefono?: string;//opcional

    constructor(nombre: string, edad: number, activo: boolean, telefono?: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.activo = activo;
    }

    saludar(): void {
        console.log(`hola soy `, this.nombre);
    }

    caminar(): void {
        console.log(`La persona que camina es `, this.nombre);
    }

    nadar(): void {
        console.log(`Esta persona nada siempre: `, this.nombre);
    }
}
//Se crea persona1 y debe cumplir los requisitos del constructor de Usuario
let persona1 = new usuario('riper', 20, true);
persona1.caminar();
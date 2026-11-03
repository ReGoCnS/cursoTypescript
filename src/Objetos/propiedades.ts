//Para el objeto que se le asignen datos directamente se coloca "=" 

let persona = {
    nombre: 'Reyli',//Si no tiene valor se coloca el tipo de dato deseado
    edad: 23,//Si no tiene valor se coloca el tipo de dato deseado
    esActivo: true//Si no tiene valor se coloca el tipo de dato deseado
}

//Para el objeto que NO se le asignen datos directamente se coloca ":" 

let persona2: {
    nombre: string,
    edad: number,
    esActivo: boolean
    telefono?: string//Esta es una propiedad opcional
    saludar(): void//este es un metodo
} = {
    nombre: 'string',
    edad: 1,
    esActivo: true,
    saludar(): void {
        console.log('saludo desde el metodo');

    }
}



console.log(persona.nombre);//imprimir nombre del objeto persona
console.log(persona.edad);//imprimir edad del objeto persona
console.log(persona.esActivo);//imprimir esActivo del objeto persona

persona.nombre = 'Cisneros'//Modificar valores del objeto
console.log(persona.nombre);

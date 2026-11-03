class persona{
    nombre: string

    constructor(elNombre:string){
        this.nombre=elNombre
    }
    public saludar():void{//public permite usar el metodo dentro de la clase persona
        console.log(`Hola soy ${this.nombre}`);
        
    }
}
let usuario=new persona('Reyli')
usuario.saludar()
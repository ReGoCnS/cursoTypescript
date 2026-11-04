class persona{
    nombre: string

    constructor(elNombre:string){
        this.nombre=elNombre
    }
    private saludar():void{
        console.log(`Hola soy ${this.nombre}`);
    }
    public usoSaludar():void{
        this.saludar
    }
}
let usuario=new persona('Reyli')
usuario.usoSaludar()
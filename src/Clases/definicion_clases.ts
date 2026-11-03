class auto{
    marca:string//atributo
    modelo:string//atributo
    anio:number//atributo

    constructor(marca:string,modelo:string,anio:number){
        this.marca=marca
        this.modelo=modelo
        this.anio=anio
    }

    public datosAutos(lamarca:string):void{
        this.marca=lamarca
        console.log('marca: ',lamarca);
        
    }
}
let auto1= new auto('Cupra','Leon',2026)
let auto2=new auto('Mustang','Camaro',2020)
console.log(auto1.anio);//anio del objeto 1
console.log(auto1.modelo);//modelo del objeto 1
console.log(auto1.marca);//marca del objeto 1
console.log('--------------------');
console.log('Auto 2');
//Muestra Anio,Marca y modelo del objeto 2
console.log(`Anio: ${auto2.anio}
Modelo: ${auto2.modelo}
Marca: ${auto2.marca}`)
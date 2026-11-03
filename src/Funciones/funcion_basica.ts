function saludo():void{
    let numero:number=100//Esta es una variable local
    console.log('Mensaje desde funcion');
    console.log('valor: ',numero);
}

let num:number=20//Esta es una variable global

function suma():void{
    console.log('suma: ', num);
    
}
saludo()


//-----------Funciones con retorno---------------

function dameEdad():number{
    return 25
}

let edad:number=dameEdad()
console.log(edad);

function dameNombre():String{
    return 'Reyli'
}

let nombre:String=dameNombre()
console.log(nombre);

function calcular():number{
    let valor1:number=10
    let valor2:number=5
    return valor1+valor2
}
let sumatoria:number=calcular()
console.log(sumatoria);

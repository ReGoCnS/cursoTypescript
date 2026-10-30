//-----------fUNCION STRING-------------
function saludar(nombre:string):void{
    console.log('hola: ',nombre);
    
}
saludar('reyli')

//-----------fUNCION NUMBER-----------------
function sumas(valor1:number,valor2:number):number{
return valor1+valor2
}

let resultado:number=sumas(3,2)
console.log(resultado);

//---------------PARAMETROS OPCIONALES---------------

function datosUsuario(nombre:string,apellido?:string):void{
    console.log('Nombre: ',nombre);
    console.log('Apellido: ',apellido);
    
}
datosUsuario('Reyli')
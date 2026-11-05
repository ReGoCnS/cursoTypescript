function DimeNumero(numero:number):number{
    return numero
}

function DimeNombre(nombre:string):string{
    return nombre
}

function DimeDatos<T>(valor: T):T{//Se define la funcion con "<T>" para que pueda manejar cualquier tipo de dato
    return valor
}

let numero=DimeNumero(15)
console.log(numero);

let palabra=DimeNombre('Luis')
console.log(palabra);
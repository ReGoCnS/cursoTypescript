//-----------NULL-----------
//Es un valor vacio

let nombre:string|null=null
let precio:number|null=null

nombre='Reyli'
precio=10

console.log(nombre);
console.log(precio);


//---------ANY-----------
//permite leer cualquier tipo de dato sin restricciones

let dato:any
dato='hola'
dato=20
dato=true

console.log(dato);

//-----------unknown---------
//acepta cualquier valor pero obligatoriamente valida el dato para usarlo

let informacion:unknown
informacion='adios'
informacion=99

console.log(informacion);

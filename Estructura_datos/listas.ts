let miLista:Array<String> =["hola","adios","Como estas"]
console.log(miLista);

//Se imprime el valor que tiene asignado en la posicion colocada
console.log(miLista[0]);
console.log(miLista[1]);
console.log(miLista[2]);

//Lista Inversa
//Despues del nombre de la lista se coloca .at 
console.log(miLista.at(-1));
console.log(miLista.at(-2));
console.log(miLista.at(-3));

//Metodos de lista
miLista.push('bye')//Push sirve para colocar algun valor al final de la lista
console.log(miLista);

miLista.splice(1,0,'continua')//Splice ayuda a insertar un valor dentro de la lista(posicion,removerValor,valor)
console.log(miLista);

//Eliminar un elemnto de la lista por su valor
const index=miLista.indexOf('adios')
if(index>-1){
miLista.splice(index,1)
}
console.log(miLista);

//elimina y obtiene el valor de la posicion
let palabraEliminada= miLista.splice(2,1)[0]
console.log(miLista);
console.log(palabraEliminada);

//Ordena alfabeticamente
miLista.sort()
console.log(miLista);

//Invierte el orden de la lista
miLista.reverse()
console.log(miLista);


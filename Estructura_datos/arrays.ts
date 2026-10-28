let frutas: string[]=['manzana','pera','uva']
let precios:number[]=[5,10,15]
let numeros:number[]=[5,3,6,2,1,9]
let tablero:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(frutas);
console.log(precios);
console.log(tablero);

//Elementos por posicion
console.log(frutas[0]);

//cantidad de elementos
console.log(precios.length);

//agregar al inicio
frutas.unshift('melon')
console.log(frutas);

//agregar elementos
frutas.push('sandia','papa')
precios.push(20,25)
console.log(frutas);
console.log(precios);

//eliminar primer elemento
precios.shift()
console.log(precios);

//eliminar elementos
frutas.pop()
console.log(frutas);

//Splice es para eliminar en una posicion especifica
frutas.splice(1,2)
console.log(frutas);

//Buscar elemento en especifico
console.log(frutas.includes('uva'));

//Saber elemento dentro del array
console.log(frutas.indexOf('sandia'));

//convertir array en texto
console.log(precios.join('/'));

//ver parte de un array
console.log(frutas.slice(1,3));

//ordenar un array
console.log(numeros.sort());

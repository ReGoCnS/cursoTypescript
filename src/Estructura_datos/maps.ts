let miMapa:Map<String,number>=new Map([["adios",20],["perro",15]])
miMapa.set("hola",10)

//has sirve para verificar si existe la clave o no
console.log(miMapa.has('adios'));

console.log(miMapa);

//Elimina la clave y su valor
miMapa.delete('perro')

//para saber el tamano del mapa
console.log(miMapa.size);

console.log(miMapa);

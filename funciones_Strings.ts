let nombre:string='Reyli Cisneros'
let espacios:string='    Hay espacios       '
console.log(nombre.length);//Saber longitud de caracteres
console.log(nombre.toUpperCase());//Hacer todo en mayuscula
console.log(nombre.toLowerCase());//Hacer todo en minusculas
console.log(nombre.includes('yl'));//buscar texto incluido
console.log(nombre.startsWith('R'));//para saber con que inicia
console.log(nombre.endsWith('os'));//para saber con lo que finaliza
console.log(nombre.indexOf('e'));//Sabere posicion de caracter
console.log(nombre.lastIndexOf('i'));//la ultima posicion del caracter
console.log(nombre.slice(0,5));//buscar carateres desde posicion, permite valores negativos
console.log(nombre.substring(0,5));//buscar caracteres desde posicion
console.log(nombre.replace('Reyli','Goethe'));//reemplazar caracteres
console.log(nombre.replaceAll('i','-'));//remplaza todas las coincidencias 
console.log(espacios.trim());//borra los espacios
console.log(espacios.trimStart());// borra unicamente los espacios del inicio
console.log(espacios.trimEnd());// borra unicamente los espacios del final
console.log(nombre.repeat(5));



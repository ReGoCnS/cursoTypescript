let lista:Array<String>=['Agua','limon','sal']


for(const value of lista){
    console.log(value);
}

console.log('SE IMPRIME CON WHILE');

let contador=0

while(contador<lista.length){
    console.log(lista[contador]);
    contador++
}
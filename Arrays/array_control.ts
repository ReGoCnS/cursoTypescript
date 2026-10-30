let precios:number[]=[10,20,30,40,50]

//---------For Each------------
console.log('---------Funcion con ForEach----------');

precios.forEach((num)=>{
    console.log(num);
})


//-----------For-----------------
console.log('---------Funcion con For----------');

for (let f = 0; f < precios.length; f++) {
    console.log(precios[f]);
    
}

//--------------Map------------------
console.log('---------Funcion con Map----------');

let resul:number[]=precios.map((numero)=>{//Map recorre ele array y devuleve uno nuevo aplicando la operacion
    return numero*2
})
console.log(resul);

//----------Filter--------------
console.log('---------Funcion con Filter----------');
let mayores:number[]=precios.filter((numero)=>{//FIlter arroja los valores mayores a la condicion
    return numero>10
})
console.log(mayores);

//------------Find---------------
console.log('---------Funcion con Find----------');

let buscar=precios.find(numero=>numero>10)//Find busca en el array el primer elemento que cumpla la condicion
console.log('Encontrado');

//----------Some-------------
console.log('---------Funcion con Some----------');
let alguno:boolean=precios.some(numero=>numero>10)//Some busca alguna coincidencia dentro del array
console.log(alguno);

//------------Every-----------------
console.log('---------Funcion con Every----------');
let todos:Boolean=precios.every(numero=>numero>=10)//Every si todos cumplen la condicion es true
console.log(todos);

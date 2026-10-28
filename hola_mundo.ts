console.log("Hola mundo desde TypeScript"); //Esto imprime un hola mundo

//---------variables------------

var myString="Esto es una cadena de texto"
console.log(myString);

let myString2:String="Esto es una cadena de texto"//Despues del nombre de la variable se indica que tipo de datos acepta
myString2="Aqui cambio el valor de la cadena de texto"
console.log(typeof myString2);//EL typeof nos menciona el tipo de variable

let myNumber=7
myNumber=myNumber+4
console.log(myNumber);
console.log(typeof myNumber);

let myBool=false
myBool=true
console.log(myBool);
console.log(typeof myBool);

let myUndefined=undefined
//myUndifined="myUndifined" Error
console.log(myUndefined);

//-----------Constantes----------------------

const MyConstant="Mi constante"
console.log(MyConstant);

//------------Control de flujo-----------------

if(myNumber == 10){
    console.log("El valor es 10");
}else if(myNumber==11){
console.log("El valor es 11");
}else{
    console.log("El valor no es 10 ni 11");
}

//-----------------Funciones-------------------

function myFunction(): string{
return "Mi funcion"
}

myFunction()

function sumNumeros(numero1:number, numero2:number):number{
    return numero1+ numero2
}

console.log(sumNumeros(5,10));

//----------------list-----------------

let myList:Array<String> =["hola","adios","Como estas"]
console.log(myList);

//-----------------set-------------------
let mySet:Set<String>=new Set(["hola","adios","Como estas","hola"])
console.log(mySet);

//---------------------map--------------------------
let myMap:Map<String,number>=new Map([["adios",20],["perro",15]])
myMap.set("hola",10)

//--------------------bucles------------------------

for(const value of myList){
    console.log(value);
}

let myConter=0

while(myConter<myList.length){
    console.log(myList[myConter]);
    myConter++
}

//--------------------clases----------------------

class myClass{
    name:String
    age:number

    constructor(name:String, age:number){
        this.name=name
        this.age=age
        
        
    }
}

let clase= new myClass("reyli",23)
console.log(clase.name);
console.log(clase);
let edad:number=21
let licencia:boolean=true

if(edad>=18){
    console.log('Es mayor de edad');
}else if(edad<18){
console.log('Eres menor de edad');
}else{
console.log('No se identifico la edad');
}

if (edad>=18 && licencia){
    console.log('Puede conducir');
}else{
    console.log('No puede conducir');
}
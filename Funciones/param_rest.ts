function muestraNumeros(...f: number[]): void {//Rest son los puntos y se pueden colocar los valores que quieras cuando se llama la funcion
    for (let i of f) {
        console.log(f);
    }
}
muestraNumeros(1,2,3,4,5,6,7,8)

let num2:number[]=[10,20,30,40,50]
let valores:number[]=[...num2]//Spread permite colocar mas valores dentro del arreglo
console.log(valores);

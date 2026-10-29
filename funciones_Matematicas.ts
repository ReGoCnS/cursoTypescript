//Funcion de redondeo
let numero:number=80.7
console.log(Math.round(numero));//Redondea al proximo numero si el decimal es mayor a 5
console.log(Math.floor(numero));//ELimina los decimales
console.log(Math.ceil(numero));//redondea sin importar el decimal


//valor absoluto
let num2:number=-10
console.log(Math.abs(num2));

//obtener potencia 
let num3:number=5
console.log(Math.pow(2,3));

//raiz cuadrada
console.log(Math.cbrt(num3));
console.log(Math.round(Math.cbrt(num3)));


//valor maximo
console.log(Math.max(1,2,3,4,5,6,7,8));

//valor minimo
console.log(Math.min(1,2,3,4,5,6,7,8));

//valor aleatorio
console.log(Math.random()*10);//random()*n es para declarar entre que numeros arroja el aleatorio

//signos de numero
let cantidad:number=1
console.log(Math.sign(cantidad));

//funciones trigonometricas
console.log(Math.sin(45));//seno
console.log(Math.cos(50));//coseno
console.log(Math.tan(70))//tangente


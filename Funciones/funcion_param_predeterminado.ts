function mostrar(nombre:string='Invitado'):void{
    console.log(nombre);
    
}
mostrar()//Se puede colocar o no informacion

function registroUsuario(name:string,edad?:string,pais:string='Mexico'):void{
console.log('Nombre : ',name);
console.log('edad: ',edad);
console.log('Pais: ',pais);

}
registroUsuario('REYLI','','Canada')
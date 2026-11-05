//Si cuando se declara un namespace obligatoriamente debe llevar el export
namespace utilidades{
    export const nombre='reyli'
    export function dimePuesto(){
        console.log(nombre, 'Seguridad');
        
    }
    export class Carro{
        marca:string
        constructor(marca:string){
            this.marca=marca
        }
    }
}

namespace empresas{
    export const nombre='Amazon'
}

console.log(utilidades.nombre);
console.log(empresas.nombre);

utilidades.dimePuesto()
let micarro1=new utilidades.Carro('Cupra')
console.log(micarro1);

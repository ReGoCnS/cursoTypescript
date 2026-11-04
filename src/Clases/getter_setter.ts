class Persona{
    private _edad:number=0

    get edad():number{
        return this._edad
    }
    set edad(valor: number){
        if(valor<0){
            console.log(`Error la edad no puede ser negativa`);
            
        }else{
            this._edad=valor
        }
    }
}
const persona1=new Persona()
persona1.edad=25
console.log(persona1.edad);


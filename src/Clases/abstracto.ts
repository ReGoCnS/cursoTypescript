abstract class vehiculo_ {
    constructor(public marca: string) {

    }
    encender(): void {
        console.log(`${this.marca} esta encendiendo`);

    }
    abstract moverse(): void

}
class carro extends vehiculo_ {
    moverse() {
        console.log(`${this.marca} movimiento mediante motor`);

    }
}

class bicicleta extends vehiculo_ {
    moverse() {
        console.log(`${this.marca} se mueve en pedaleo`);
    }
}

const micarro=new carro('Cupra')
micarro.encender()

const mibici=new bicicleta('De montana')
mibici.moverse()
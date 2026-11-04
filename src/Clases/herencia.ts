class Animal {
    nombre: string
    constructor(p_nombre: string) {
        this.nombre = p_nombre
    }
    hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`);

    }
}

class perro extends Animal {
    raza: string
    constructor(p_nombre: string, p_raza: string) {
        super(p_nombre)
        this.raza = p_raza
    }
    hacerSonido() {
        super.hacerSonido()
        console.log(`${this.nombre} es ladrador`);
    }
}

const perro1=new perro('Scooby','Gran Danes')
perro1.hacerSonido()


class producto {
//al ser private el constructor no se puede acceder a el fuera de la clase
//public detalle si podemos declararlo fuera de la clase al ser publico
    private constructor(public detalle: string) {
    }

    static DimeProducto(nombreProducto: string): producto {
        // Aquí adentro sí podemos usar "new producto" porque estamos dentro de la clase.
        return new producto(`Nombre: ${nombreProducto}`); 
    }
}

// para crear el producto, NO usamos "new". 
let producto1 = producto.DimeProducto('MOUSE');
console.log(producto1.detalle);


// Si intentas usar "new" desde afuera marca un error porque el constructor es privado.

// let articulo = new producto(`Computadora`); 
// console.log(articulo.detalle);
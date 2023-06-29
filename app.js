let nombre;
let edad;
let preferencias;
const blanco = " ";
const ficcion = 1;
const accion = 2;
const comedia = 3;
const romantica = 4;
let titulo;

let producto;

nombre = prompt("¿Cómo es tu nombre?");
console.log(nombre);
if (nombre != "") {
    edad = prompt("Hola" + blanco + nombre + blanco + "¿Cuántos años tenes?");
    console.log(edad);
    if (edad < 16) {
        console.log("Mostrar peliculas infantiles");
        if (edad < 12 && edad > 15) {
            console.log("No mostrar nada mas");
        } else {
            console.log("Mostrar tambien peliculas para adolescentes")
        }
    } else {
        console.log("Mostrar peliculas +16");
        preferencias = parseInt(
            prompt("¿Qué tipo de películas preferis? 1- Ficcion 2- Accion 3- Comedia 4- Romantica"));
        switch (preferencias) {
            case ficcion:
                console.log("Mostrar peliculas de ficcion");
                break;
            case accion:
                console.log("Mostrar peliculas de accion");
                break;
            case comedia:
                console.log("Mostrar peliculas de comedia");
                break;
            case romantica:
                console.log("Mostrar peliculas romanticas");
                break;
        }

    }


} else {
    alert("No ingreso los datos solicitados")
}


class Pelicula {

    titulo;
    horario;
    precio;


    constructor(titulo, horario, precio) {
        this.titulo = titulo;
        this.horario = horario;
        this.precio = precio;

    }
}


const producto1 = new Pelicula("La Sirenita", "14.50hs", 550);
const producto2 = new Pelicula("La Sirenita", "18.30hs", 550);
const producto3 = new Pelicula("Rapido y furioso", "17.50hs", 550);
const producto4 = new Pelicula("Rapido y furioso", "21.10hs", 550);




console.log(producto1, producto2, producto3, producto4);

const titulosPeliculas = ["La sirenita", "Rapido y furioso"]
console.log(titulosPeliculas);

let otroTitulo = "Mario Bross";

titulosPeliculas.push(otroTitulo);


const carrito = [];

function insertarProductosEnCarrito(producto) {
    carrito.push(producto);
}

function cargarProductosEnCarrito() {
    let seguir;
    let producto;
    do {
        producto = prompt("Ingrese titulo de la pelicula que desea adquirir ticket");
        insertarProductosEnCarrito(producto)
        seguir = prompt("Desea continuar? si/no");
    } while (seguir === "si");

}

function muestraCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
    }
}

function eliminarUnItemDelCarrito() {
    let indice;
    muestraCarrito();
    indice = prompt("Elija el indice donde se encuentra el elemento que desea eliminar");
    carrito.splice(indice, 1);
    alert("Elemento eliminado");
    muestraCarrito();
}

let cantidad;
let precio = 550;

    cantidad = prompt("Ingrese la cantidad de entradas que desea comprar");
 if (cantidad !== "") {
    alert("El costo a abonar es de: $" + precio * cantidad)
}

function muestraCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
    }
}


cargarProductosEnCarrito();
eliminarUnItemDelCarrito();


const fechaDeCompra = new Date(2023, 6, 29);
console.log(fechaDeCompra);
console.log(fechaDeCompra.toLocaleString)






let nombre;
let edad;
let preferencias;
const blanco = " ";
const ficcion = 1;
const accion = 2;
const comedia = 3;
const romantica = 4;
let titulo;
let cantidad;
let precio = 550;
let costoTotal;
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
   
        
}else {
    alert("No ingreso los datos solicitados")
}

const carrito = [];

function insertarProductosEnCarrito(producto) {
    carrito.push(producto);
}

function cargarProductosEnCarrito() {
let seguir;
let producto;
do {
    producto = prompt("Ingrese el titulo de la pelicula del cual quiera adquirir tickets");
    insertarProductosEnCarrito(producto);
    seguir = prompt ("¿Desea agregar algo mas? Si/No")
} while(seguir === "si");

} if (producto !== "") {
    cantidad = prompt("Ingrese la cantidad de entradas que desea comprar");
} if (cantidad !== "") {
    alert("El costo a abonar es de: $" + precio * cantidad)
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
    carrito.splice(indice,1);
    alert("Elemento eliminado");
    muestraCarrito();
}

cargarProductosEnCarrito();
eliminarUnItemDelCarrito();








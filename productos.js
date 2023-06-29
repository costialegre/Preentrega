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

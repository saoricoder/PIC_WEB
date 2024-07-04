class Jugador {
    constructor(nombre, posicion, numero) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.numero = numero;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}, Posición: ${this.posicion}, Número: ${this.numero}`;
    }
}

export default Jugador;

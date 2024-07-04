class Equipo {
    constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.jugadores = [];
    }

    agregarJugador(jugador) {
        this.jugadores.push(jugador);
    }

    mostrarDatos() {
        return `Equipo: ${this.nombre}, Ciudad: ${this.ciudad}, Jugadores: ${this.jugadores.length}`;
    }
}

export default Equipo;

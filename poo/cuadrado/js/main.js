import Equipo from '../clases/Equipo.js';
import Jugador from '../clases/Jugador.js';

const equipos = [];

window.guardarEquipo = function() {
    const nombre = document.getElementById('nombre').value;
    const ciudad = document.getElementById('ciudad').value;

    const equipo = new Equipo(nombre, ciudad);
    equipos.push(equipo);
    document.getElementById('resultado').innerText = equipo.mostrarDatos();
}

window.guardarJugador = function() {
    const nombre = document.getElementById('nombre').value;
    const posicion = document.getElementById('posicion').value;
    const numero = document.getElementById('numero').value;

    const jugador = new Jugador(nombre, posicion, numero);

    if (equipos.length > 0) {
        equipos[0].agregarJugador(jugador); // Aquí se asume que se agrega al primer equipo
        document.getElementById('resultado').innerText = jugador.mostrarDatos();
    } else {
        document.getElementById('resultado').innerText = 'No hay equipos disponibles para agregar el jugador.';
    }
}

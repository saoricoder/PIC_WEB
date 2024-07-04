class Medico {
    constructor(nombreMedico, especialidad) {
        this.nombreMedico = nombreMedico;
        this.especialidad = especialidad;
    }
}

class Gato {
    constructor(nombreGato, tipoGato) {
        this.nombreGato = nombreGato;
        this.tipoGato = tipoGato;
    }
}

class Dueño {
    constructor(nombreDueño) {
        this.nombreDueño = nombreDueño;
    }
}

class Consulta extends Medico {
    constructor(nombreMedico, especialidad, dueño, gato) {
        super(nombreMedico, especialidad);
        this.dueño = dueño;
        this.gato = gato;
    }
}

class GestorConsultas {
    constructor() {
        this.consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    }

    agregarConsulta(consulta) {
        this.consultas.push(consulta);
        this.actualizarLocalStorage();
    }

    eliminarConsulta(indice) {
        this.consultas.splice(indice, 1);
        this.actualizarLocalStorage();
    }

    actualizarConsulta(indice, consulta) {
        this.consultas[indice] = consulta;
        this.actualizarLocalStorage();
    }

    obtenerConsultas() {
        return this.consultas;
    }

    actualizarLocalStorage() {
        localStorage.setItem('consultas', JSON.stringify(this.consultas));
    }
}

const gestorConsultas = new GestorConsultas();

document.getElementById('formConsulta').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombreMedico = document.getElementById('nombreMedico').value;
    const especialidad = document.getElementById('especialidad').value;
    const nombreDueño = document.getElementById('nombreDueño').value;
    const nombreGato = document.getElementById('nombreGato').value;
    const tipoGato = document.getElementById('tipoGato').value;

    const dueño = new Dueño(nombreDueño);
    const gato = new Gato(nombreGato, tipoGato);
    const consulta = new Consulta(nombreMedico, especialidad, dueño, gato);

    gestorConsultas.agregarConsulta(consulta);
    renderizarConsultas();

    this.reset();
});

function renderizarConsultas() {
    const listaConsultas = document.getElementById('listaConsultas');
    listaConsultas.innerHTML = '';

    const consultas = gestorConsultas.obtenerConsultas();
    consultas.forEach((consulta, indice) => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${consulta.nombreMedico}</td>
            <td>${consulta.especialidad}</td>
            <td>${consulta.dueño.nombreDueño}</td>
            <td>${consulta.gato.nombreGato}</td>
            <td>${consulta.gato.tipoGato}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarConsulta(${indice})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarConsulta(${indice})">Eliminar</button>
            </td>
        `;

        listaConsultas.appendChild(fila);
    });
}

function eliminarConsulta(indice) {
    gestorConsultas.eliminarConsulta(indice);
    renderizarConsultas();
}

function editarConsulta(indice) {
    const consulta = gestorConsultas.obtenerConsultas()[indice];

    document.getElementById('nombreMedico').value = consulta.nombreMedico;
    document.getElementById('especialidad').value = consulta.especialidad;
    document.getElementById('nombreDueño').value = consulta.dueño.nombreDueño;
    document.getElementById('nombreGato').value = consulta.gato.nombreGato;
    document.getElementById('tipoGato').value = consulta.gato.tipoGato;

    document.getElementById('formConsulta').onsubmit = function(e) {
        e.preventDefault();

        const nombreMedico = document.getElementById('nombreMedico').value;
        const especialidad = document.getElementById('especialidad').value;
        const nombreDueño = document.getElementById('nombreDueño').value;
        const nombreGato = document.getElementById('nombreGato').value;
        const tipoGato = document.getElementById('tipoGato').value;

        const dueñoActualizado = new Dueño(nombreDueño);
        const gatoActualizado = new Gato(nombreGato, tipoGato);
        const consultaActualizada = new Consulta(nombreMedico, especialidad, dueñoActualizado, gatoActualizado);

        gestorConsultas.actualizarConsulta(indice, consultaActualizada);
        renderizarConsultas();

        this.reset();
        this.onsubmit = agregarNuevaConsulta;
    };
}

function agregarNuevaConsulta(e) {
    e.preventDefault();

    const nombreMedico = document.getElementById('nombreMedico').value;
    const especialidad = document.getElementById('especialidad').value;
    const nombreDueño = document.getElementById('nombreDueño').value;
    const nombreGato = document.getElementById('nombreGato').value;
    const tipoGato = document.getElementById('tipoGato').value;

    const dueño = new Dueño(nombreDueño);
    const gato = new Gato(nombreGato, tipoGato);
    const consulta = new Consulta(nombreMedico, especialidad, dueño, gato);

    gestorConsultas.agregarConsulta(consulta);
    renderizarConsultas();

    this.reset();
}

document.getElementById('formConsulta').onsubmit = agregarNuevaConsulta;

document.addEventListener('DOMContentLoaded', renderizarConsultas);

class Dueño {
    constructor(nombreDueño) {
        this.nombreDueño = nombreDueño;
    }
}

class Mascota {
    constructor(nombreMascota, tipoMascota) {
        this.nombreMascota = nombreMascota;
        this.tipoMascota = tipoMascota;
    }
}

class Paciente extends Dueño {
    constructor(nombreDueño, nombreMascota, tipoMascota) {
        super(nombreDueño);
        this.mascota = new Mascota(nombreMascota, tipoMascota);
    }
}

class GestorPacientes {
    constructor() {
        this.pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    }

    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
        this.actualizarLocalStorage();
    }

    eliminarPaciente(indice) {
        this.pacientes.splice(indice, 1);
        this.actualizarLocalStorage();
    }

    actualizarPaciente(indice, paciente) {
        this.pacientes[indice] = paciente;
        this.actualizarLocalStorage();
    }

    obtenerPacientes() {
        return this.pacientes;
    }

    actualizarLocalStorage() {
        localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
    }
}

const gestorPacientes = new GestorPacientes();

document.getElementById('formPaciente').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombreDueño = document.getElementById('nombreDueño').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const tipoMascota = document.getElementById('tipoMascota').value;

    const paciente = new Paciente(nombreDueño, nombreMascota, tipoMascota);

    gestorPacientes.agregarPaciente(paciente);
    renderizarPacientes();

    this.reset();
});

function renderizarPacientes() {
    const listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = '';

    const pacientes = gestorPacientes.obtenerPacientes();
    pacientes.forEach((paciente, indice) => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${paciente.nombreDueño}</td>
            <td>${paciente.mascota.nombreMascota}</td>
            <td>${paciente.mascota.tipoMascota}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarPaciente(${indice})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarPaciente(${indice})">Eliminar</button>
            </td>
        `;

        listaPacientes.appendChild(fila);
    });
}

function eliminarPaciente(indice) {
    gestorPacientes.eliminarPaciente(indice);
    renderizarPacientes();
}

function editarPaciente(indice) {
    const paciente = gestorPacientes.obtenerPacientes()[indice];

    document.getElementById('nombreDueño').value = paciente.nombreDueño;
    document.getElementById('nombreMascota').value = paciente.mascota.nombreMascota;
    document.getElementById('tipoMascota').value = paciente.mascota.tipoMascota;

    document.getElementById('formPaciente').onsubmit = function(e) {
        e.preventDefault();

        const nombreDueño = document.getElementById('nombreDueño').value;
        const nombreMascota = document.getElementById('nombreMascota').value;
        const tipoMascota = document.getElementById('tipoMascota').value;

        const pacienteActualizado = new Paciente(nombreDueño, nombreMascota, tipoMascota);

        gestorPacientes.actualizarPaciente(indice, pacienteActualizado);
        renderizarPacientes();

        this.reset();
        this.onsubmit = agregarNuevoPaciente;
    };
}

function agregarNuevoPaciente(e) {
    e.preventDefault();

    const nombreDueño = document.getElementById('nombreDueño').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const tipoMascota = document.getElementById('tipoMascota').value;

    const paciente = new Paciente(nombreDueño, nombreMascota, tipoMascota);

    gestorPacientes.agregarPaciente(paciente);
    renderizarPacientes();

    this.reset();
}

document.getElementById('formPaciente').onsubmit = agregarNuevoPaciente;

document.addEventListener('DOMContentLoaded', renderizarPacientes);

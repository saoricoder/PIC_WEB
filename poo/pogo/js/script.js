class Reserva {
    constructor(id, fecha, hora, numeroPersonas, estado, usuarioId, mesaId) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.numeroPersonas = numeroPersonas;
        this.estado = estado;
        this.usuarioId = usuarioId;
        this.mesaId = mesaId;
    }

    static reservas = [];

    static cargarReservas() {
        const reservasList = document.getElementById('reservas-list');
        reservasList.innerHTML = '';
        this.reservas.forEach(reserva => {
            reservasList.innerHTML += `
                <tr>
                    <td>${reserva.id}</td>
                    <td>${reserva.fecha}</td>
                    <td>${reserva.hora}</td>
                    <td>${reserva.numeroPersonas}</td>
                    <td>${reserva.estado}</td>
                    <td>
                        <button class="btn btn-warning" onclick="Reserva.mostrarFormulario(${reserva.id})">Editar</button>
                        <button class="btn btn-danger" onclick="Reserva.eliminarReserva(${reserva.id})">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    }

    static guardarReserva(event) {
        event.preventDefault();
        const id = document.getElementById('reserva-id').value;
        const fecha = document.getElementById('reserva-fecha').value;
        const hora = document.getElementById('reserva-hora').value;
        const numeroPersonas = document.getElementById('reserva-numeroPersonas').value;
        const estado = document.getElementById('reserva-estado').value;
        const usuarioId = document.getElementById('reserva-usuarioId').value;
        const mesaId = document.getElementById('reserva-mesaId').value;

        if (id) {
            const reserva = this.reservas.find(r => r.id === parseInt(id));
            reserva.fecha = fecha;
            reserva.hora = hora;
            reserva.numeroPersonas = numeroPersonas;
            reserva.estado = estado;
            reserva.usuarioId = usuarioId;
            reserva.mesaId = mesaId;
        } else {
            const newId = this.reservas.length > 0 ? this.reservas[this.reservas.length - 1].id + 1 : 1;
            const newReserva = new Reserva(newId, fecha, hora, numeroPersonas, estado, usuarioId, mesaId);
            this.reservas.push(newReserva);
        }
        this.ocultarFormulario();
        this.cargarReservas();
    }

    static eliminarReserva(id) {
        this.reservas = this.reservas.filter(r => r.id !== id);
        this.cargarReservas();
    }

    static mostrarFormulario(id) {
        const formulario = document.getElementById('formulario-reserva');
        const formTitulo = document.getElementById('form-titulo');
        if (id) {
            const reserva = this.reservas.find(r => r.id === id);
            document.getElementById('reserva-id').value = reserva.id;
            document.getElementById('reserva-fecha').value = reserva.fecha;
            document.getElementById('reserva-hora').value = reserva.hora;
            document.getElementById('reserva-numeroPersonas').value = reserva.numeroPersonas;
            document.getElementById('reserva-estado').value = reserva.estado;
            document.getElementById('reserva-usuarioId').value = reserva.usuarioId;
            document.getElementById('reserva-mesaId').value = reserva.mesaId;
            formTitulo.innerText = 'Editar Reserva';
        } else {
            document.getElementById('reserva-id').value = '';
            document.getElementById('form-reserva').reset();
            formTitulo.innerText = 'Crear Reserva';
        }
        formulario.style.display = 'block';
    }

    static ocultarFormulario() {
        const formulario = document.getElementById('formulario-reserva');
        formulario.style.display = 'none';
        document.getElementById('form-reserva').reset();
    }
}

class Mesa {
    constructor(id, numero, capacidad, ubicacion, restauranteId) {
        this.id = id;
        this.numero = numero;
        this.capacidad = capacidad;
        this.ubicacion = ubicacion;
        this.restauranteId = restauranteId;
    }

    static mesas = [];

    static cargarMesas() {
        const mesasList = document.getElementById('mesas-list');
        mesasList.innerHTML = '';
        this.mesas.forEach(mesa => {
            mesasList.innerHTML += `
                <tr>
                    <td>${mesa.id}</td>
                    <td>${mesa.numero}</td>
                    <td>${mesa.capacidad}</td>
                    <td>${mesa.ubicacion}</td>
                    <td>
                        <button class="btn btn-warning" onclick="Mesa.mostrarFormulario(${mesa.id})">Editar</button>
                        <button class="btn btn-danger" onclick="Mesa.eliminarMesa(${mesa.id})">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    }

    static guardarMesa(event) {
        event.preventDefault();
        const id = document.getElementById('mesa-id').value;
        const numero = document.getElementById('mesa-numero').value;
        const capacidad = document.getElementById('mesa-capacidad').value;
        const ubicacion = document.getElementById('mesa-ubicacion').value;
        const restauranteId = document.getElementById('mesa-restauranteId').value;

        if (id) {
            const mesa = this.mesas.find(m => m.id === parseInt(id));
            mesa.numero = numero;
            mesa.capacidad = capacidad;
            mesa.ubicacion = ubicacion;
            mesa.restauranteId = restauranteId;
        } else {
            const newId = this.mesas.length > 0 ? this.mesas[this.mesas.length - 1].id + 1 : 1;
            const newMesa = new Mesa(newId, numero, capacidad, ubicacion, restauranteId);
            this.mesas.push(newMesa);
        }
        this.ocultarFormulario();
        this.cargarMesas();
    }

    static eliminarMesa(id) {
        this.mesas = this.mesas.filter(m => m.id !== id);
        this.cargarMesas();
    }

    static mostrarFormulario(id) {
        const formulario = document.getElementById('formulario-mesa');
        const formTitulo = document.getElementById('form-titulo-mesa');
        if (id) {
            const mesa = this.mesas.find(m => m.id === id);
            document.getElementById('mesa-id').value = mesa.id;
            document.getElementById('mesa-numero').value = mesa.numero;
            document.getElementById('mesa-capacidad').value = mesa.capacidad;
            document.getElementById('mesa-ubicacion').value = mesa.ubicacion;
            document.getElementById('mesa-restauranteId').value = mesa.restauranteId;
            formTitulo.innerText = 'Editar Mesa';
        } else {
            document.getElementById('mesa-id').value = '';
            document.getElementById('form-mesa').reset();
            formTitulo.innerText = 'Crear Mesa';
        }
        formulario.style.display = 'block';
    }

    static ocultarFormulario() {
        const formulario = document.getElementById('formulario-mesa');
        formulario.style.display = 'none';
        document.getElementById('form-mesa').reset();
    }
}

// Event Listeners
document.getElementById('form-reserva').addEventListener('submit', Reserva.guardarReserva.bind(Reserva));
document.getElementById('form-mesa').addEventListener('submit', Mesa.guardarMesa.bind(Mesa));

// Cargar datos iniciales
window.onload = function() {
    Reserva.cargarReservas();
    Mesa.cargarMesas();
};

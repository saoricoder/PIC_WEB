class Reserva {
    // Constructor para crear una nueva reserva
    constructor(id, fecha, hora, numeroPersonas, estado) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.numeroPersonas = numeroPersonas;
        this.estado = estado;
    }
}

class ReservaManager {
    // Constructor para inicializar el administrador de reservas
    constructor() {
        // Cargar reservas desde el localStorage o inicializar una lista vacía
        this.reservas = JSON.parse(localStorage.getItem('reservas')) || [];

        // Obtener referencias a los elementos del DOM
        this.reservasList = document.getElementById('reservas-list');
        this.formReserva = document.getElementById('form-reserva');
        this.addReservaBtn = document.getElementById('addReservaBtn');
        this.cancelarReservaBtn = document.getElementById('cancelarReservaBtn');
        this.formularioReserva = document.getElementById('formulario-reserva');

        // Asignar eventos a los botones
        this.addReservaBtn.addEventListener('click', () => this.showForm());
        this.cancelarReservaBtn.addEventListener('click', () => this.hideForm());
        this.formReserva.addEventListener('submit', (event) => this.addReserva(event));

        // Renderizar las reservas al iniciar
        this.renderReservas();
    }

    // Método para renderizar la lista de reservas en la tabla
    renderReservas() {
        this.reservasList.innerHTML = ''; // Limpiar la lista actual
        this.reservas.forEach((reserva, index) => {
            const row = document.createElement('tr'); // Crear una nueva fila para cada reserva
            row.innerHTML = `
                <td>${reserva.id}</td>
                <td>${reserva.fecha}</td>
                <td>${reserva.hora}</td>
                <td>${reserva.numeroPersonas}</td>
                <td>${reserva.estado}</td>
                <td>
                    <button class="btn btn-warning" onclick="reservaManager.editReserva(${index})">Editar</button>
                    <button class="btn btn-danger" onclick="reservaManager.deleteReserva(${index})">Eliminar</button>
                </td>
            `;
            this.reservasList.appendChild(row); // Agregar la fila a la tabla
        });
    }

    // Método para mostrar el formulario de agregar/editar reserva
    showForm() {
        this.formReserva.reset(); // Resetear el formulario
        this.formularioReserva.style.display = 'block'; // Mostrar el formulario
    }

    // Método para ocultar el formulario de agregar/editar reserva
    hideForm() {
        this.formReserva.reset(); // Resetear el formulario
        this.formularioReserva.style.display = 'none'; // Ocultar el formulario
    }

    // Método para agregar o editar una reserva
    addReserva(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const id = document.getElementById('reserva-id').value;
        const fecha = document.getElementById('reserva-fecha').value;
        const hora = document.getElementById('reserva-hora').value;
        const numeroPersonas = document.getElementById('reserva-numeroPersonas').value;
        const estado = document.getElementById('reserva-estado').value;

        if (id) {
            // Si hay un ID, estamos editando una reserva existente
            const index = this.reservas.findIndex(r => r.id == id);
            this.reservas[index] = new Reserva(id, fecha, hora, numeroPersonas, estado);
        } else {
            // Si no hay ID, estamos agregando una nueva reserva
            const newId = this.reservas.length > 0 ? this.reservas[this.reservas.length - 1].id + 1 : 1;
            this.reservas.push(new Reserva(newId, fecha, hora, numeroPersonas, estado));
        }

        // Guardar las reservas en el localStorage
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
        // Renderizar las reservas actualizadas
        this.renderReservas();
        // Ocultar el formulario
        this.hideForm();
    }

    // Método para editar una reserva existente
    editReserva(index) {
        const reserva = this.reservas[index];
        document.getElementById('reserva-id').value = reserva.id;
        document.getElementById('reserva-fecha').value = reserva.fecha;
        document.getElementById('reserva-hora').value = reserva.hora;
        document.getElementById('reserva-numeroPersonas').value = reserva.numeroPersonas;
        document.getElementById('reserva-estado').value = reserva.estado;
        this.formularioReserva.style.display = 'block'; // Mostrar el formulario
    }

    // Método para eliminar una reserva
    deleteReserva(index) {
        this.reservas.splice(index, 1); // Eliminar la reserva del array
        localStorage.setItem('reservas', JSON.stringify(this.reservas)); // Actualizar el localStorage
        this.renderReservas(); // Renderizar las reservas actualizadas
    }
}

// Inicializar el administrador de reservas
const reservaManager = new ReservaManager();

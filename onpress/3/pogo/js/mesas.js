class Mesa {
    // Constructor para crear una nueva mesa
    constructor(id, numero, capacidad, ubicacion) {
        this.id = id;
        this.numero = numero;
        this.capacidad = capacidad;
        this.ubicacion = ubicacion;
    }
}

class MesaManager {
    // Constructor para inicializar el administrador de mesas
    constructor() {
        // Cargar mesas desde el localStorage o inicializar una lista vacía
        this.mesas = JSON.parse(localStorage.getItem('mesas')) || [];

        // Obtener referencias a los elementos del DOM
        this.mesasList = document.getElementById('mesas-list');
        this.formMesa = document.getElementById('form-mesa');
        this.addMesaBtn = document.getElementById('addMesaBtn');
        this.cancelarMesaBtn = document.getElementById('cancelarMesaBtn');
        this.formularioMesa = document.getElementById('formulario-mesa');

        // Asignar eventos a los botones
        this.addMesaBtn.addEventListener('click', () => this.showForm());
        this.cancelarMesaBtn.addEventListener('click', () => this.hideForm());
        this.formMesa.addEventListener('submit', (event) => this.addMesa(event));

        // Renderizar las mesas al iniciar
        this.renderMesas();
    }

    // Método para renderizar la lista de mesas en la tabla
    renderMesas() {
        this.mesasList.innerHTML = ''; // Limpiar la lista actual
        this.mesas.forEach((mesa, index) => {
            const row = document.createElement('tr'); // Crear una nueva fila para cada mesa
            row.innerHTML = `
                <td>${mesa.id}</td>
                <td>${mesa.numero}</td>
                <td>${mesa.capacidad}</td>
                <td>${mesa.ubicacion}</td>
                <td>
                    <button class="btn btn-warning" onclick="mesaManager.editMesa(${index})">Editar</button>
                    <button class="btn btn-danger" onclick="mesaManager.deleteMesa(${index})">Eliminar</button>
                </td>
            `;
            this.mesasList.appendChild(row); // Agregar la fila a la tabla
        });
    }

    // Método para mostrar el formulario de agregar/editar mesa
    showForm() {
        this.formMesa.reset(); // Resetear el formulario
        this.formularioMesa.style.display = 'block'; // Mostrar el formulario
    }

    // Método para ocultar el formulario de agregar/editar mesa
    hideForm() {
        this.formMesa.reset(); // Resetear el formulario
        this.formularioMesa.style.display = 'none'; // Ocultar el formulario
    }

    // Método para agregar o editar una mesa
    addMesa(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const id = document.getElementById('mesa-id').value;
        const numero = document.getElementById('mesa-numero').value;
        const capacidad = document.getElementById('mesa-capacidad').value;
        const ubicacion = document.getElementById('mesa-ubicacion').value;

        if (id) {
            // Si hay un ID, estamos editando una mesa existente
            const index = this.mesas.findIndex(m => m.id == id);
            this.mesas[index] = new Mesa(id, numero, capacidad, ubicacion);
        } else {
            // Si no hay ID, estamos agregando una nueva mesa
            const newId = this.mesas.length > 0 ? this.mesas[this.mesas.length - 1].id + 1 : 1;
            this.mesas.push(new Mesa(newId, numero, capacidad, ubicacion));
        }

        // Guardar las mesas en el localStorage
        localStorage.setItem('mesas', JSON.stringify(this.mesas));
        // Renderizar las mesas actualizadas
        this.renderMesas();
        // Ocultar el formulario
        this.hideForm();
    }

    // Método para editar una mesa existente
    editMesa(index) {
        const mesa = this.mesas[index];
        document.getElementById('mesa-id').value = mesa.id;
        document.getElementById('mesa-numero').value = mesa.numero;
        document.getElementById('mesa-capacidad').value = mesa.capacidad;
        document.getElementById('mesa-ubicacion').value = mesa.ubicacion;
        this.formularioMesa.style.display = 'block'; // Mostrar el formulario
    }

    // Método para eliminar una mesa
    deleteMesa(index) {
        this.mesas.splice(index, 1); // Eliminar la mesa del array
        localStorage.setItem('mesas', JSON.stringify(this.mesas)); // Actualizar el localStorage
        this.renderMesas(); // Renderizar las mesas actualizadas
    }
}

// Inicializar el administrador de mesas
const mesaManager = new MesaManager();

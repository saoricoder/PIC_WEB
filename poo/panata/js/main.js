
// Clase padre
let personal = [];

let idActual = null;


document.getElementById('personal-form').addEventListener('submit', agregarPersonal);
document.getElementById('actualizar-button').addEventListener('click', actualizarPersonal);

// Maneja la selección de tipo de personal
document.querySelectorAll('#personal-buttons button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('#personal-buttons button').forEach(btn => btn.classList.remove('btn-primary'));
        this.classList.add('btn-primary');

        const tipo = this.getAttribute('data-personal-type');
        document.getElementById('tipo-personal').value = tipo;
        mostrarCamposAdicionales(tipo);
    });
});
// Función para agregar personal
function agregarPersonal(e) {
    e.preventDefault();
    // Obtiene los valores de los campos del formulario
    const tipo = document.getElementById('tipo-personal').value;
    const nombre = document.getElementById('nombre-personal').value;
    const edad = document.getElementById('edad-personal').value;
    const id = new Date().getTime();
    // Crea una instancia de la clase correspondiente
    let persona;
    // Dependiendo del tipo de personal, se crea una instancia de la clase correspondiente
    switch (tipo) {
        case 'empleado':
            const departamento = document.getElementById('departamento-personal').value;
            persona = new Empleado(id, nombre, edad, departamento);
            break;
        case 'gerente':
            const area = document.getElementById('area-personal').value;
            persona = new Gerente(id, nombre, edad, area);
            break;
        case 'becario':
            const universidad = document.getElementById('universidad-personal').value;
            persona = new Becario(id, nombre, edad, universidad);
            break;
    }
    // Agrega la instancia al arreglo de personal
    personal.push(persona);
    renderizarPersonal();
    document.getElementById('personal-form').reset();
    document.getElementById('campos-adicionales').innerHTML = '';
    document.querySelectorAll('#personal-buttons button').forEach(btn => btn.classList.remove('btn-primary'));
}

// Función para renderizar el personal
function renderizarPersonal() {
    const empleadosList = document.getElementById('empleados-list');
    const gerentesList = document.getElementById('gerentes-list');
    const becariosList = document.getElementById('becarios-list');

    empleadosList.innerHTML = '';
    gerentesList.innerHTML = '';
    becariosList.innerHTML = '';
    // Recorre el arreglo de personal y crea una fila por cada elemento
    personal.forEach(persona => {
        const tr = document.createElement('tr');
        tr.id = `personal-${persona.id}`;
        let detalles = persona.obtenerDetalles().split(', ');
        
        detalles.forEach(detalle => {
            const td = document.createElement('td');
            td.textContent = detalle.split(': ')[1];
            tr.appendChild(td);
        });
        // Crea los botones de edición y eliminación
        const tdAcciones = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-warning', 'btn-sm');
        editButton.textContent = 'Editar';
        editButton.style.marginRight = '20px'; // Añade un margen a la derecha del botón de edición
        editButton.addEventListener('click', () => editarPersonal(persona.id));

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => eliminarPersonal(persona.id));

        tdAcciones.appendChild(editButton);
        tdAcciones.appendChild(deleteButton);
        tr.appendChild(tdAcciones);
        // Agrega la fila a la tabla correspondiente
        if (persona instanceof Empleado) {
            empleadosList.appendChild(tr);
        } else if (persona instanceof Gerente) {
            gerentesList.appendChild(tr);
        } else if (persona instanceof Becario) {
            becariosList.appendChild(tr);
        }
    });
}
// Función para editar personal
function editarPersonal(id) {
    const persona = personal.find(p => p.id === id);
    idActual = id;
    // Muestra los valores actuales en los campos del formulario
    document.getElementById('tipo-personal').value = obtenerTipoPersonal(persona);
    document.getElementById('nombre-personal').value = persona.nombre;
    document.getElementById('edad-personal').value = persona.edad;
    
    mostrarCamposAdicionales(persona);
    document.getElementById('actualizar-button').style.display = 'block';
    document.getElementById('actualizar-button').style.marginTop = '10px'; // Añade un margen superior al botón de actualización
    document.getElementById('personal-form button[type="submit"]').style.display = 'none';
}
// Función para resetear los campos del formulario
function resetearCampos() {
    document.getElementById('tipo-personal').value = '';
    document.getElementById('nombre-personal').value = '';
    document.getElementById('edad-personal').value = '';
    document.getElementById('campos-adicionales').innerHTML = '';
}
// Función para actualizar personal
function actualizarPersonal() {
    const tipo = document.getElementById('tipo-personal').value;
    const nombre = document.getElementById('nombre-personal').value;
    const edad = document.getElementById('edad-personal').value;
    // Busca el índice de la persona a actualizar
    let indicePersona = personal.findIndex(p => p.id === idActual);
    // Crea una instancia de la clase correspondiente
    let personaActualizada;
    // Dependiendo del tipo de personal, se crea una instancia de la clase correspondiente
    switch (tipo) {
        case 'empleado':
            const departamento = document.getElementById('departamento-personal').value;
            personaActualizada = new Empleado(idActual, nombre, edad, departamento);
            break;
        case 'gerente':
            const area = document.getElementById('area-personal').value;
            personaActualizada = new Gerente(idActual, nombre, edad, area);
            break;
        case 'becario':
            const universidad = document.getElementById('universidad-personal').value;
            personaActualizada = new Becario(idActual, nombre, edad, universidad);
            break;
    }
    // Actualiza el arreglo de personal
    personal[indicePersona] = personaActualizada;
    renderizarPersonal();
    document.getElementById('actualizar-button').style.display = 'none';
    document.getElementById('personal-form button[type="submit"]').style.display = 'block';
    resetearCampos();
    document.querySelectorAll('#personal-buttons button').forEach(btn => btn.classList.remove('btn-primary'));
}
// Función para eliminar personal
function eliminarPersonal(id) {
    personal = personal.filter(p => p.id !== id);
    renderizarPersonal();
}
// Función para mostrar los campos adicionales
function mostrarCamposAdicionales(persona) {
    const tipo = typeof persona === 'string' ? persona : obtenerTipoPersonal(persona);
    const contenedor = document.getElementById('campos-adicionales');
    // Dependiendo del tipo de personal, se muestra un campo adicional
    let campoAdicional = '';
    switch (tipo) {
        case 'empleado':
            campoAdicional = `
                <div class="form-group">
                    <label for="departamento-personal">Departamento:</label>
                    <input type="text" class="form-control" id="departamento-personal" value="${persona.departamento || ''}" required>
                </div>
            `;
            break;
        case 'gerente':
            campoAdicional = `
                <div class="form-group">
                    <label for="area-personal">Área:</label>
                    <input type="text" class="form-control" id="area-personal" value="${persona.area || ''}" required>
                </div>
            `;
            break;
        case 'becario':
            campoAdicional = `
                <div class="form-group">
                    <label for="universidad-personal">Universidad:</label>
                    <input type="text" class="form-control" id="universidad-personal" value="${persona.universidad || ''}" required>
                </div>
            `;
            break;
    }
    // Muestra el campo adicional en el formulario
    contenedor.innerHTML = campoAdicional;
}
// Función para obtener el tipo de personal
function obtenerTipoPersonal(persona) {
    if (persona instanceof Empleado) return 'empleado';
    if (persona instanceof Gerente) return 'gerente';
    if (persona instanceof Becario) return 'becario';
}

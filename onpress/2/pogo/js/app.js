document.addEventListener('DOMContentLoaded', () => {  // Esperamos que el DOM este completo
    const taskInput = document.getElementById('taskInput'); // Obtenemos Referencias a los elementos del DOM
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => { // Agregamos un evento al boton de agregar tarea
        const taskText = taskInput.value.trim(); //Obtiene el texto ingresado en el campo de entrada y elimina cualquier espacio en blanco al principio y al final
        if (taskText !== '') { //Verifica que no este vacio
            addTask(taskText); //agregar la tarea a la lista.
            taskInput.value = ''; //Limpia el campo de entrada después de agregar la tarea.
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-task')) { // Verifica si el elemento clicado (event.target) tiene la clase delete-task. Si es así, es el botón de eliminación.
            event.target.parentElement.remove(); //Elimina el elemento padre del botón de eliminación
        }
    });

    function addTask(taskText) { //funcion
        const li = document.createElement('li'); //rea un nuevo elemento <li>.
        li.className = 'list-group-item'; //Asigna la clase list-group-item al nuevo elemento <li> para aplicar los estilos CSS
        li.innerHTML = ` 
            ${taskText}
            <button class="btn btn-danger btn-sm delete-task">Eliminar</button>
        `;
        // Agrega el contenido HTML al nuevo elemento <li> con el texto de la tarea y un botón de eliminación.
        taskList.appendChild(li); // //Agrega el contenido HTML al nuevo elemento <li> con el texto de la tarea y un botón de eliminación.
    }
});
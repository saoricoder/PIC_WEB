import Tarea from './tarea.js';
import TareaSimple from './tareaSimple.js';
import TareaRecurrente from './tareaRecurrente.js';

document.addEventListener('DOMContentLoaded', function() {
    const formTarea = document.getElementById('form-tarea');
    const listaTareas = document.getElementById('lista-tareas');
    const tipoTareaSelect = document.getElementById('tipoTarea');
    const opcionesTareaSimple = document.getElementById('opciones-tarea-simple');
    const opcionesTareaRecurrente = document.getElementById('opciones-tarea-recurrente');

    tipoTareaSelect.addEventListener('change', function() {
        const tipoTarea = tipoTareaSelect.value;
        if (tipoTarea === 'simple') {
            opcionesTareaSimple.style.display = 'block';
            opcionesTareaRecurrente.style.display = 'none';
        } else if (tipoTarea === 'recurrente') {
            opcionesTareaSimple.style.display = 'none';
            opcionesTareaRecurrente.style.display = 'block';
        }
    });

    formTarea.addEventListener('submit', function(e) {
        e.preventDefault();

        const descripcion = document.getElementById('descripcion').value;
        const prioridad = document.getElementById('prioridad').value;
        const tipoTarea = tipoTareaSelect.value;

        let nuevaTarea;
        if (tipoTarea === 'simple') {
            const fechaLimite = document.getElementById('fechaLimite').value;
            nuevaTarea = new TareaSimple(1, descripcion, prioridad, fechaLimite);
        } else if (tipoTarea === 'recurrente') {
            const periodicidad = document.getElementById('periodicidad').value;
            nuevaTarea = new TareaRecurrente(1, descripcion, prioridad, periodicidad);
        }

        const tareaElemento = document.createElement('div');
        tareaElemento.innerHTML = `<p>${nuevaTarea.detalles()}</p>`;
        listaTareas.appendChild(tareaElemento);

        formTarea.reset();
        opcionesTareaSimple.style.display = 'none';
        opcionesTareaRecurrente.style.display = 'none';
    });
});

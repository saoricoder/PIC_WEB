import Estudiante from '../clases/estudiante.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('estudianteForm');
    const estudianteInfo = document.getElementById('estudianteInfo');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const cedula = event.target.cedula.value;
        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const edad = event.target.edad.value;
        const carrera = event.target.carrera.value;
        const nivel = event.target.nivel.value;

        const estudiante = new Estudiante(cedula, nombre, apellido, edad, carrera, nivel);
        estudianteInfo.textContent = estudiante.toString();
    });
});

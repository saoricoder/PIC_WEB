import Persona from '../clases/persona.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personaForm');
    const personaInfo = document.getElementById('personaInfo');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const cedula = event.target.cedula.value;
        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const edad = event.target.edad.value;

        const persona = new Persona(cedula, nombre, apellido, edad);
        personaInfo.textContent = persona.toString();
    });
});

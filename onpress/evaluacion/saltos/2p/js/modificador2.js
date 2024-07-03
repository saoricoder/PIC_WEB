document.addEventListener('DOMContentLoaded', function() {
    let elementosGuardados = JSON.parse(localStorage.getItem('elementosGuardados')) || {};

    // Obtener el ID del contenedor desde la URL
    let urlParams = new URLSearchParams(window.location.search);
    let contenedorId = urlParams.get('page');

    console.log('ID del contenedor:', contenedorId);

    // Agregar elementos guardados al contenedor correspondiente
    Object.keys(elementosGuardados).forEach(function(tipo) {
    let contenido = elementosGuardados[tipo];
    guardarElemento(tipo, contenido, contenedorId);
    });
});

function guardarElemento(tipo, contenido, contenedorId) {
    let elementosGuardados = JSON.parse(localStorage.getItem('elementosGuardados')) || {};

    elementosGuardados[tipo] = contenido;

    localStorage.setItem('elementosGuardados', JSON.stringify(elementosGuardados));

    // Redirigir a la página adecuada después de guardar
    window.location.href = 'deportes.html?page=' + contenedorId;

    // Obtener el contenedor correspondiente según el ID proporcionado
    let contenedor = document.getElementById(contenedorId);

    // Verificar si el contenedor existe
    if (contenedor) {
        let nuevoElemento;

        switch (tipo) {
            case 'texto':
                nuevoElemento = document.createElement('p');
                nuevoElemento.textContent = contenido;
                contenedor.appendChild(nuevoElemento);
                break;
            case 'imagen':
                nuevoElemento = document.createElement('img');
                nuevoElemento.src = contenido;
                contenedor.appendChild(nuevoElemento);
                break;
            case 'video':
                nuevoElemento = document.createElement('video');
                nuevoElemento.src = contenido;
                nuevoElemento.controls = true;
                contenedor.appendChild(nuevoElemento);
                break;
            case 'audio':
                nuevoElemento = document.createElement('audio');
                nuevoElemento.src = contenido;
                nuevoElemento.controls = true;
                contenedor.appendChild(nuevoElemento);
                break;
            default:
                // Tipo no reconocido
                return;
        }
    }
}

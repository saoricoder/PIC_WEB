function modificarTexto() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            let content = e.target.result;
            guardarElemento('texto', content);
        };

        reader.readAsText(file);
    };

    input.click();
}

function modificarImagen() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            guardarElemento('imagen', e.target.result);
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function modificarVideo() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            guardarElemento('video', e.target.result);
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function modificarAudio() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'audio/*';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            guardarElemento('audio', e.target.result);
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function guardarElemento(tipo, contenido) {
    let elementosGuardados = JSON.parse(localStorage.getItem('elementosGuardados')) || {};

    elementosGuardados[tipo] = contenido;

    localStorage.setItem('elementosGuardados', JSON.stringify(elementosGuardados));

    // Obtener la página seleccionada
    let pageSelect = document.getElementById('page-select');
    let selectedPage = pageSelect.options[pageSelect.selectedIndex].value;

    // Agregar el nuevo elemento al contenedor correspondiente en la página seleccionada
    switch (tipo) {
        case 'texto':
            nuevoElemento = document.createElement('p');
            nuevoElemento.textContent = contenido;
            document.getElementById(selectedPage.split('.')[0] + '-text-container').appendChild(nuevoElemento);
            break;
        case 'imagen':
            nuevoElemento = document.createElement('img');
            nuevoElemento.src = contenido;
            document.getElementById(selectedPage.split('.')[0] + '-img-container').appendChild(nuevoElemento);
            break;
        case 'video':
            nuevoElemento = document.createElement('video');
            nuevoElemento.src = contenido;
            nuevoElemento.controls = true;
            document.getElementById(selectedPage.split('.')[0] + '-video-container').appendChild(nuevoElemento);
            break;
        case 'audio':
            nuevoElemento = document.createElement('audio');
            nuevoElemento.src = contenido;
            nuevoElemento.controls = true;
            document.getElementById(selectedPage.split('.')[0] + '-audio-container').appendChild(nuevoElemento);
            break;
        default:
            // Tipo no reconocido
            return;
    }
}



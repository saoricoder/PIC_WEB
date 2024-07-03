function modificarHeader() {
    let nuevoContenido = prompt('Ingrese el nuevo contenido para el encabezado:');
    if (nuevoContenido !== null) {
        document.getElementById('header').innerHTML = `<h1>${nuevoContenido}</h1>`;
    }
}

function modificarFooter() {
    let nuevoContenido = prompt('Ingrese el nuevo contenido para el pie de página:');
    if (nuevoContenido !== null) {
        document.getElementById('footer').innerHTML = `<p>${nuevoContenido}</p>`;
    }
}

function modificarNav() {
    let nuevoContenido = prompt('Ingrese el nuevo contenido para la barra de navegación:');
    if (nuevoContenido !== null) {
        let lista = nuevoContenido.split(',').map(item => `<li>${item.trim()}</li>`).join('');
        document.getElementById('nav').innerHTML = `<ul>${lista}</ul>`;
    }
}

function modificarTexto() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            let content = e.target.result;
            document.getElementById('texto-section').textContent = content;
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
            document.getElementById('imagen-section').src = e.target.result;
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
            let video = document.getElementById('video-section');
            let source = video.getElementsByTagName('source')[0];
            source.src = e.target.result;
            video.load();
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
            let audio = document.getElementById('audio-section');
            let source = audio.getElementsByTagName('source')[0];
            source.src = e.target.result;
            audio.load();
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

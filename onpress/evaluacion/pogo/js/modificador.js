document.addEventListener('DOMContentLoaded', (event) => {
    // Cargar texto almacenado
    let storedText = localStorage.getItem('texto-section');
    if (storedText) {
        document.getElementById('texto-section').textContent = storedText;
    }

    // Cargar imagen almacenada
    let storedImage = localStorage.getItem('imagen-section');
    if (storedImage) {
        document.getElementById('imagen-section').src = storedImage;
    }

    // Cargar video almacenado
    let storedVideo = localStorage.getItem('video-section');
    if (storedVideo) {
        let video = document.getElementById('video-section');
        let source = video.getElementsByTagName('source')[0];
        source.src = storedVideo;
        video.load();
    }

    // Cargar audio almacenado
    let storedAudio = localStorage.getItem('audio-section');
    if (storedAudio) {
        let audio = document.getElementById('audio-section');
        let source = audio.getElementsByTagName('source')[0];
        source.src = storedAudio;
        audio.load();
    }
});

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

function guardarTexto() {
    let content = document.getElementById('texto-section').textContent;
    localStorage.setItem('texto-section', content);
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

function guardarImagen() {
    let src = document.getElementById('imagen-section').src;
    localStorage.setItem('imagen-section', src);
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
            video.src = URL.createObjectURL(file);
            video.load();
            guardarVideo(video.src);
        };
    };

    input.click();
}

function guardarVideo(videoURL) {
    localStorage.setItem('video-section', videoURL);
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
            audio.src = URL.createObjectURL(file);
            audio.load();
            guardarAudio(audio.src);
        };
    };

    input.click();
}

function guardarAudio(audioURL) {
    localStorage.setItem('audio-section', audioURL);
}

// Ejemplo de cómo agregar una nueva noticia (puedes adaptarlo según tus necesidades)
function agregarNoticia(titulo, contenido) {
    const listaNoticias = document.getElementById('lista-noticias');
    const nuevaNoticia = document.createElement('li');
    nuevaNoticia.innerHTML = `<h3>${titulo}</h3><p>${contenido}</p>`;
    listaNoticias.insertBefore(nuevaNoticia, listaNoticias.firstChild);
}

// Llamada de ejemplo (debes adaptarla según tus eventos de actualización de imágenes)
// Supongamos que tienes una función llamada cargarImagen() que se ejecuta cuando se carga una nueva imagen
cargarImagen(); // Llama a esta función cuando se cargue una nueva imagen
agregarNoticia('Nueva imagen', 'Se ha agregado una imagen interesante.');

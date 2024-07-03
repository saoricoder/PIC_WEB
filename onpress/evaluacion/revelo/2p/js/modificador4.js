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
            compartirContenido('texto-section', content);
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
            compartirContenido('imagen-section', e.target.result);
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
            compartirContenido('video-section', e.target.result);
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
            compartirContenido('audio-section', e.target.result);
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function agregarElemento(tipo) {
    let section = document.getElementById('main-section');
    let container = document.createElement('div');
    container.className = 'content-box';

    switch (tipo) {
        case 'texto':
            let texto = document.createElement('p');
            texto.textContent = 'Nuevo Texto';
            container.appendChild(texto);
            let botonTexto = document.createElement('button');
            botonTexto.textContent = 'Modificar Texto';
            botonTexto.onclick = modificarTexto;
            container.appendChild(botonTexto);
            compartirContenido('texto-section', 'Nuevo Texto');
            break;
        case 'imagen':
            let imagen = document.createElement('img');
            imagen.src = 'imagen-placeholder.jpg';
            imagen.alt = 'Nueva Imagen';
            imagen.style.maxWidth = '100%'; // Estilo añadido para asegurar que las imágenes sean responsivas
            container.appendChild(imagen);
            let botonImagen = document.createElement('button');
            botonImagen.textContent = 'Modificar Imagen';
            botonImagen.onclick = modificarImagen;
            container.appendChild(botonImagen);
            compartirContenido('imagen-section', 'imagen-placeholder.jpg');
            break;
        case 'video':
            let video = document.createElement('video');
            video.controls = true;
            let videoSource = document.createElement('source');
            videoSource.src = 'video-placeholder.mp4';
            videoSource.type = 'video/mp4';
            video.appendChild(videoSource);
            container.appendChild(video);
            let botonVideo = document.createElement('button');
            botonVideo.textContent = 'Modificar Video';
            botonVideo.onclick = modificarVideo;
            container.appendChild(botonVideo);
            compartirContenido('video-section', 'video-placeholder.mp4');
            break;
        case 'audio':
            let audio = document.createElement('audio');
            audio.controls = true;
            let audioSource = document.createElement('source');
            audioSource.src = 'audio-placeholder.mp3';
            audioSource.type = 'audio/mp3';
            audio.appendChild(audioSource);
            container.appendChild(audio);
            let botonAudio = document.createElement('button');
            botonAudio.textContent = 'Modificar Audio';
            botonAudio.onclick = modificarAudio;
            container.appendChild(botonAudio);
            compartirContenido('audio-section', 'audio-placeholder.mp3');
            break;
    }

    section.appendChild(container);
}

function compartirContenido(id, content) {
    // Simulación de compartir contenido entre archivos HTML
    localStorage.setItem(id, content);
}

// Función para cargar el contenido compartido al cargar la página
window.onload = function() {
    let ids = ['texto-section', 'imagen-section', 'video-section', 'audio-section'];
    ids.forEach(id => {
        let content = localStorage.getItem(id);
        if (content) {
            if (id === 'texto-section') {
                document.getElementById(id).textContent = content;
            } else if (id === 'imagen-section') {
                document.getElementById(id).src = content;
            } else if (id === 'video-section') {
                let video = document.getElementById('video-section');
                let source = video.getElementsByTagName('source')[0];
                source.src = content;
                video.load();
            } else if (id === 'audio-section') {
                let audio = document.getElementById('audio-section');
                let source = audio.getElementsByTagName('source')[0];
                source.src = content;
                audio.load();
            }
        }
    });
}

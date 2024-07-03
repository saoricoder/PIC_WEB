function crearPagina() {
    // Crear un nuevo iframe
    var nuevaPagina = document.createElement('iframe');
    nuevaPagina.classList.add('pagina');

    // Obtener el contenido de los campos
    var texto = document.getElementById('texto-section').textContent;
    var imagen = document.getElementById('imagen-section').src;
    var video = document.getElementById('video-section').src;
    var audio = document.getElementById('audio-section').src;

    // Construir el contenido de la nueva página
    var contenidoPagina = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nueva Página</title>
            <link rel="stylesheet" href="../css/styles.css">
        </head>
        <body>
            <header>
                <h1>Nueva Página</h1>
            </header>
            <section>
                <div class="container">
                    <div class="content-box">
                        <p>${texto}</p>
                    </div>
                    <div class="content-box">
                        <img src="${imagen}" alt="Imagen de la sección">
                    </div>
                    <div class="content-box">
                        <video controls>
                            <source src="${video}" type="video/mp4">
                            Tu navegador no soporta la etiqueta de video.
                        </video>
                    </div>
                    <div class="content-box">
                        <audio controls>
                            <source src="${audio}" type="audio/mp3">
                            Tu navegador no soporta la etiqueta de audio.
                        </audio>
                    </div>
                </div>
            </section>
        </body>
        </html>
    `;

    // Establecer el contenido HTML del iframe
    nuevaPagina.srcdoc = contenidoPagina;

    // Añadir el iframe a la sección de páginas
    document.getElementById('paginas').appendChild(nuevaPagina);
}

function limpiarCampos() {
    // Limpiar el texto de la sección
    document.getElementById('texto-section').textContent = '';

    // Limpiar la imagen de la sección
    document.getElementById('imagen-section').src = '';

    // Detener y resetear el video de la sección
    var video = document.getElementById('video-section');
    video.pause();
    video.currentTime = 0;

    // Detener y resetear el audio de la sección
    var audio = document.getElementById('audio-section');
    audio.pause();
    audio.currentTime = 0;
}

function modificarTexto() {
    var texto = prompt("Introduce el nuevo texto:");
    document.getElementById("texto-section").innerText = texto;
}

function modificarImagen() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function() {
            var imagen = document.getElementById('imagen-section');
            imagen.src = reader.result;
        };

        reader.readAsDataURL(file);
    };

    input.click();
}


function modificarVideo() {
    var url = prompt("Introduce la URL del nuevo video:");
    document.getElementById("video-section").src = url;
}

function modificarAudio() {
    var url = prompt("Introduce la URL del nuevo audio:");
    document.getElementById("audio-section").src = url;
}


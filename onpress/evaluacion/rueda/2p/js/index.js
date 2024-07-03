let notebook = [];

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
            document.getElementById('text-display').textContent = "Texto seleccionado: " + file.name;
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
            document.getElementById('image-display').textContent = "Imagen seleccionada: " + file.name;
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
            document.getElementById('video-display').textContent = "Video seleccionado: " + file.name;
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
            let audioSource = document.getElementById('audio-source');
            audioSource.src = e.target.result;
            document.getElementById('audio-section').load(); // Recargar el elemento audio para que cargue el nuevo origen
            document.getElementById('audio-display').textContent = "Audio seleccionado: " + file.name;
        };

        reader.readAsDataURL(file);
    };

    input.click();
}


function generarPagina() {
    let textContent = document.getElementById('texto-section').textContent;
    let imgSrc = document.getElementById('imagen-section').src;
    let videoSrc = document.getElementById('video-section').currentSrc;
    let audioSrc = document.getElementById('audio-section').currentSrc;

    let page = {
        text: textContent,
        image: imgSrc,
        video: videoSrc,
        audio: audioSrc
    };

    notebook.push(page);
    alert("Página generada exitosamente");
}

function mostrarPaginas() {
    let notebookSection = document.getElementById('notebook-section');
    notebookSection.innerHTML = '';
    notebookSection.style.display = 'block';
    document.getElementById('main-section').style.display = 'none';

    notebook.forEach((page, index) => {
        let pageLink = document.createElement('a');
        pageLink.href = "#";
        pageLink.textContent = `Página ${index + 1}`;
        pageLink.onclick = function() {
            mostrarPagina(index);
        };
        notebookSection.appendChild(pageLink);
        notebookSection.appendChild(document.createElement('br'));
    });
}

function mostrarPagina(index) {
    let page = notebook[index];
    let notebookSection = document.getElementById('notebook-section');
    notebookSection.innerHTML = '';

    let pageDiv = document.createElement('div');
    pageDiv.className = 'notebook-page';
    pageDiv.innerHTML = `
        <h2>Página ${index + 1}</h2>
        <p>${page.text}</p>
        <img src="${page.image}" alt="Imagen de la página" style="max-width: 100%;">
        <video controls>
            <source src="${page.video}" type="video/mp4">
            Tu navegador no soporta la etiqueta de video.
        </video>
        <audio controls>
            <source id="audio-source" src="${page.audio}" type="audio/mp3">
            Tu navegador no soporta la etiqueta de audio.
        </audio>
        <button onclick="mostrarPaginas()">Volver</button>
    `;
    notebookSection.appendChild(pageDiv);
}

function mostrarInicio() {
    document.getElementById('notebook-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
}

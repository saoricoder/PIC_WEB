

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
            localStorage.setItem('texto-section', content); // Guardar en localStorage
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
            localStorage.setItem('imagen-section', e.target.result); // Guardar en localStorage
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
            localStorage.setItem('video-section', e.target.result); // Guardar en localStorage
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
            localStorage.setItem('audio-section', e.target.result); // Guardar en localStorage
        };

        reader.readAsDataURL(file);
    };

    input.click();
}


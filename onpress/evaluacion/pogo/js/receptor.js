window.onload = function() {
    // Leer y aplicar el contenido guardado en localStorage
    let texto = localStorage.getItem('texto-section');
    if (texto) {
        document.getElementById('texto-section').textContent = texto;
    }

    let imagen = localStorage.getItem('imagen-section');
    if (imagen) {
        document.getElementById('imagen-section').src = imagen;
    }

    let video = localStorage.getItem('video-section');
    if (video) {
        let videoElement = document.getElementById('video-section');
        let source = videoElement.getElementsByTagName('source')[0];
        source.src = video;
        videoElement.load();
    }

    let audio = localStorage.getItem('audio-section');
    if (audio) {
        let audioElement = document.getElementById('audio-section');
        let source = audioElement.getElementsByTagName('source')[0];
        source.src = audio;
        audioElement.load();
    }
};
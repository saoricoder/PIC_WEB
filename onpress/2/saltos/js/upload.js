document.getElementById('foto').addEventListener('change', function(event) {
    var archivo = event.target.files[0];
    var tipoImagen = /^image\//;

    if (!archivo || !tipoImagen.test(archivo.type)) {
        alert('Por favor selecciona una imagen válida.');
        return;
    }

    if (archivo.size > 1024 * 1024) {
        alert('La imagen debe ser menor a 1MB.');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        var imagen = new Image();
        imagen.src = event.target.result;
        imagen.onload = function() {
            var preview = document.getElementById('fotoPreview');
            preview.innerHTML = ''; // Limpiar el contenedor de previsualización antes de agregar la nueva imagen
            preview.appendChild(imagen);
        };
    };
    reader.readAsDataURL(archivo);
});

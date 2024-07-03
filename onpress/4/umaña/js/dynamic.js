function modificarSeccion(numeroSeccion) {
    const sectionId = `section${numeroSeccion}`;
    const nuevaDescripcion = prompt(`Ingrese nueva descripción para la ${sectionId}`);
    if (nuevaDescripcion) {
        // Guardar los cambios en localStorage
        localStorage.setItem(sectionId, nuevaDescripcion);
        // Modificar la página en tiempo real si está abierta en un iframe
        const deportesIframe = document.querySelector('iframe');
        if (deportesIframe) {
            const section = deportesIframe.contentDocument.getElementById(sectionId);
            if (section) {
                section.textContent = nuevaDescripcion;
            }
        }
    }
}

// Aplicar cambios guardados en localStorage al cargar la página deportes.html
window.addEventListener('load', () => {
    if (document.body.contains(document.getElementById('section1'))) {
        for (let i = 1; i <= 4; i++) {
            const sectionId = `section${i}`;
            const descripcionGuardada = localStorage.getItem(sectionId);
            if (descripcionGuardada) {
                document.getElementById(sectionId).textContent = descripcionGuardada;
            }
        }
    }
});

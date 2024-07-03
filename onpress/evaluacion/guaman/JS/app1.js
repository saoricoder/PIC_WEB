// Función para modificar el contenido de una sección
function modifySection(sectionId, newTitle, newContent) {
    // Obtener la referencia al iframe de la página deportes.html
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '../HTML/deportes.html';
    
    iframe.onload = function() {
        // Acceder al contenido del iframe
        const section = iframe.contentDocument.getElementById(sectionId);
        if (section) {
            // Modificar el título y el contenido de la sección
            section.querySelector('h2').textContent = newTitle;
            section.querySelector('p').textContent = newContent;
            
            // Opcional: mostrar un mensaje de confirmación
            alert(`La sección ${sectionId} ha sido modificada.`);
        }
    };
    
    // Añadir el iframe al body para cargar la página deportes.html
    document.body.appendChild(iframe);
}

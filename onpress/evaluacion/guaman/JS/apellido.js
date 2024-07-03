// Función para modificar el contenido de una sección y almacenarlo en Local Storage
function modifySection(sectionId) {
    const title = document.getElementById(`title${sectionId.slice(-1)}`).value;
    const content = document.getElementById(`content${sectionId.slice(-1)}`).value;

    const sectionData = {
        title: title,
        content: content
    };

    localStorage.setItem(sectionId, JSON.stringify(sectionData));
    alert(`La sección ${sectionId} ha sido modificada. Vuelve a la página de deportes para ver los cambios.`);
    return false; // Para prevenir la recarga del formulario
}

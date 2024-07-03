// Aplicar las modificaciones almacenadas en Local Storage
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 4; i++) {
        const sectionId = `section${i}`;
        const sectionData = JSON.parse(localStorage.getItem(sectionId));

        if (sectionData) {
            const section = document.getElementById(sectionId);
            section.querySelector('h2').textContent = sectionData.title;
            section.querySelector('p').textContent = sectionData.content;
        }
    }
});

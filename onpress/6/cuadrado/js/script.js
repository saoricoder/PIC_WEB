document.addEventListener('DOMContentLoaded', function() {
    // Manejo de Mouse
    const mouseButton = document.getElementById('mouseButton');
    const mouseMessage = document.getElementById('mouseMessage');

    mouseButton.addEventListener('click', function() {
        mouseMessage.textContent = '¡Clic en el botón de mouse!';
    });

    // Manejo de Formulario
    const sampleForm = document.getElementById('sampleForm');

    sampleForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const nameValue = formData.get('name');
        alert('Hola, ' + nameValue + '!');
    });

    // Manejo de Teclado
    const textInput = document.getElementById('textInput');
    const keyboardMessage = document.getElementById('keyboardMessage');

    textInput.addEventListener('keyup', function() {
        keyboardMessage.textContent = 'Escribiendo: ' + textInput.value;
    });

    // Manipulación del DOM
    const addButton = document.getElementById('addButton');
    const domList = document.getElementById('domList');

    addButton.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = 'Nuevo elemento';
        domList.appendChild(newItem);
    });
});

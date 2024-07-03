// Función para mostrar la funcionalidad del mouse
function showMouse() {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Mueve el mouse dentro de este área.</p><div style="border: 1px solid #000; height: 200px;" onmousemove="mouseMove(event)"></div><p id="mouseOutput"></p>';
}

// Función que muestra las coordenadas del mouse
function mouseMove(event) {
    const output = document.getElementById('mouseOutput');
    output.textContent = `Coordenadas del mouse: X: ${event.clientX}, Y: ${event.clientY}`;
}

// Función para mostrar la funcionalidad del teclado
function showKeyboard() {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Presiona cualquier tecla para ver el resultado.</p><p id="keyOutput"></p>';
    document.addEventListener('keydown', keyDown);
}

// Función que muestra la tecla presionada
function keyDown(event) {
    const output = document.getElementById('keyOutput');
    output.textContent = `Tecla presionada: ${event.key}`;
}

// Función para mostrar la funcionalidad de manipulación del DOM
function showDOM() {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Haga clic en el botón para cambiar el color del fondo.</p><button onclick="changeColor()">Cambiar color</button>';
}

// Función que cambia el color de fondo de la página
function changeColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f0f0f0' : 'lightblue';
}

// Función para mostrar la funcionalidad personalizada (contador de clics)
function showCustom() {
    const content = document.getElementById('content');
    content.innerHTML = '<p>Personalizado: Contador de clics.</p><button onclick="incrementCounter()">Haz clic aquí</button><p id="clickCounter">0</p>';
}

// Variable para llevar la cuenta de los clics
let counter = 0;

// Función que incrementa el contador de clics
function incrementCounter() {
    counter++;
    document.getElementById('clickCounter').textContent = counter;
}

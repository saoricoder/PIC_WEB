// Cambiar el color de fondo al pasar el mouse sobre el cuerpo de la página
const body = document.querySelector('body');

body.addEventListener('mouseenter', () => {
    body.style.backgroundColor = '#ddd'; // Cambia el color de fondo al gris claro
});

body.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '#f0f0f0'; // Restaura el color de fondo original
});
//Seleccionar el boton y el parrafo por su ID
const button = document.getElementById('myButton');
const message = document.getElementById('message');

//Definir una función que se ejecutará cuando el botón sea clicado
function hanleClick() {
    message.textContent='¡Has hecho clic en el boton!';
}

//Asignar el evento de clic al botón
button.addEventListener('close',hanleClick);
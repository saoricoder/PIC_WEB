// Acceder a los elementos del DOM
const boton = document.getElementById('boton');
const parrafo=  document.getElementById('parrado');

//Añadir un evento de clic all boton
boton.addEventListener('click',function(){
    //Cambiar el contenido del parrafo
    parrafo.textContent='El texto a sido cambiado';
});
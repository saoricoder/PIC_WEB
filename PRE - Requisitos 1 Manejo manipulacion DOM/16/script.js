//Acceder al botón y a la lista en el DOM
const boton=document.getElementById('boton');
const lista=document.getElementById('lista');

//Añadir un evento de clic all botón
boton.addEventListener('click',function(){
    //Crear un nuevo elemento de lista
    const nuevoElemento=document.createElement('li');
    nuevoElemento.textContent='Nueva tarea';
    //Agregar el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
});
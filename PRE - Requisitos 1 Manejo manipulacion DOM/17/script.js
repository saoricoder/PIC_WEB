document.addEventListener("DOMContentLoaded",function () {
    const container= document.getElementById('container');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');


    addButton.addEventListener('click',function() {
        //Crear nuevo elemento div
        const newItem = document.createElement('div');
        newItem.className='Item';
        newItem.textContent='Nuevo Elemento';
        //Agregar el nuevo elemento al contenedor
        container.appendChild(newItem);
    });

    removeButton.addEventListener('click',function () {
        //Obtener el útimo elemento hijo del contenedor
        const lastItem=container.lastElementChild;
        //Verificar que el último elemento no sea el título
        if (lastItem && lastItem != container.firstElementChild) {
            //Eliminar el último elemento hijo
            container.removeChild(lastItem);
        }
    });
});
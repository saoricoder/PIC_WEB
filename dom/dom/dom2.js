function crearNuevoParrafo() {
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = "Este es un nuevo párrafo creado dinámicamente.";
    document.getElementById("div1").appendChild(nuevoParrafo);
}

function modificarEliminarImagen() {
    var imagen1 = document.getElementById("imagen1");
    if (imagen1) {
        imagen1.parentNode.removeChild(imagen1);
    } else {
        var nuevaImagen = document.createElement("img");
        nuevaImagen.id = "imagen1";
        nuevaImagen.src = "nueva_imagen.jpg";
        nuevaImagen.alt = "Nueva Imagen 1";
        nuevaImagen.width = 300;
        nuevaImagen.height = 200;
        document.getElementById("div2").appendChild(nuevaImagen);
    }
}

function agregarNuevaTabla() {
    var nuevaTabla = document.createElement("table");
    nuevaTabla.border = "1";
    nuevaTabla.innerHTML = `
        <tr>
            <th>Columna X</th>
            <th>Columna Y</th>
        </tr>
        <tr>
            <td>Dato X</td>
            <td>Dato Y</td>
        </tr>
    `;
    document.getElementById("div4").appendChild(nuevaTabla);
}

function reemplazarInputPorTextarea() {
    var inputTexto = document.getElementById("inputReemplazar");
    if (inputTexto) {
        var textarea = document.createElement("textarea");
        textarea.id = "textareaReemplazo";
        textarea.rows = 4;
        textarea.cols = 50;
        textarea.value = inputTexto.value;
        inputTexto.parentNode.replaceChild(textarea, inputTexto);
    }
}
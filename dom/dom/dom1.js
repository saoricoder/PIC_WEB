function cambiarContenido() {
    var parrafo1 = document.getElementById("parrafo1");
    parrafo1.innerHTML = "El contenido del primer párrafo ha sido cambiado.";
}

function cambiarAtributos() {
    var imagen1 = document.getElementById("imagen1");
    imagen1.src = "nueva_imagen.jpg";
    imagen1.alt = "Nueva Imagen";
    imagen1.width = 300;
    imagen1.height = 200;
}

function cambiarEstilos() {
    var parrafo2 = document.getElementById("parrafo2");
    parrafo2.style.color = "blue";
    parrafo2.style.fontFamily = "Arial, sans-serif";
    parrafo2.style.fontSize = "20px";

    var tabla1 = document.getElementById("tabla1");
    tabla1.style.border = "2px solid red";
    tabla1.style.fontFamily = "Courier New, monospace";
    tabla1.style.backgroundColor = "#f0f0f0";

    var tabla2 = document.getElementById("tabla2");
    tabla2.style.border = "2px solid green";
    tabla2.style.fontFamily = "Verdana, sans-serif";
    tabla2.style.backgroundColor = "#e0e0e0";
}
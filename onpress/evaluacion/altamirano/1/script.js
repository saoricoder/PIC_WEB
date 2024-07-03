function modificarDeporte(numero) {
    // Obtenemos el elemento seccion correspondiente al número recibido
    var seccion = document.getElementById("seccion" + numero);

    // Modificamos su contenido
    seccion.innerHTML = `
        <h2>Nuevo Deporte ${numero}</h2>
        <p>Descripción del nuevo deporte ${numero}</p>
    `;
}

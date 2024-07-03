document.addEventListener("DOMContentLoaded", () => {
    const listaJuegos = document.getElementById("juegos-lista");

    const juegos = JSON.parse(localStorage.getItem("juegos") || "[]");

    juegos.forEach((juego, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${juego.numero}</td>
            <td>${juego.nombre}</td>
            <td>${juego.año}</td>
            <td>${juego.categoria}</td>
            <td>${juego.genero}</td>
            <td>
                <button onclick="eliminarJuego(${index})">Eliminar</button>
            </td>
        `;
        listaJuegos.appendChild(row);
    });
});

function eliminarJuego(index) {
    let juegos = JSON.parse(localStorage.getItem("juegos") || "[]");
    juegos.splice(index, 1);
    localStorage.setItem("juegos", JSON.stringify(juegos));
    location.reload();
}

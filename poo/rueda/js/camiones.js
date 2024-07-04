document.addEventListener("DOMContentLoaded", () => {
    const listaCamiones = document.getElementById("camiones-lista");

    const camiones = JSON.parse(localStorage.getItem("camiones") || "[]");

    camiones.forEach((camion, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${camion.marca}</td>
            <td>${camion.modelo}</td>
            <td>${camion.año}</td>
            <td>${camion.velocidadMaxima}</td>
            <td>${camion.capacidadCarga}</td>
            <td>
                <button onclick="eliminarCamion(${index})">Eliminar</button>
            </td>
        `;
        listaCamiones.appendChild(row);
    });
});

function eliminarCamion(index) {
    let camiones = JSON.parse(localStorage.getItem("camiones") || "[]");
    camiones.splice(index, 1);
    localStorage.setItem("camiones", JSON.stringify(camiones));
    location.reload();
}
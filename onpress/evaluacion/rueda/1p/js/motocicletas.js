document.addEventListener("DOMContentLoaded", () => {
    const listaMotocicletas = document.getElementById("motocicletas-lista");

    const motocicletas = JSON.parse(localStorage.getItem("motocicletas") || "[]");

    motocicletas.forEach((motocicleta, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${motocicleta.marca}</td>
            <td>${motocicleta.modelo}</td>
            <td>${motocicleta.año}</td>
            <td>${motocicleta.velocidadMaxima}</td>
            <td>${motocicleta.tipoManillar}</td>
            <td>
                <button onclick="eliminarMotocicleta(${index})">Eliminar</button>
            </td>
        `;
        listaMotocicletas.appendChild(row);
    });
});

function eliminarMotocicleta(index) {
    let motocicletas = JSON.parse(localStorage.getItem("motocicletas") || "[]");
    motocicletas.splice(index, 1);
    localStorage.setItem("motocicletas", JSON.stringify(motocicletas));
    location.reload();
}
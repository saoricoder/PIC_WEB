document.addEventListener("DOMContentLoaded", () => {
    const listaAutomoviles = document.getElementById("automoviles-lista");

    const automoviles = JSON.parse(localStorage.getItem("automoviles") || "[]");

    automoviles.forEach((automovil, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${automovil.marca}</td>
            <td>${automovil.modelo}</td>
            <td>${automovil.año}</td>
            <td>${automovil.velocidadMaxima}</td>
            <td>${automovil.numeroPuertas}</td>
            <td>
                <button onclick="eliminarAutomovil(${index})">Eliminar</button>
                
            </td>
        `;
        listaAutomoviles.appendChild(row);
    });
});

function eliminarAutomovil(index) {
    let automoviles = JSON.parse(localStorage.getItem("automoviles") || "[]");
    automoviles.splice(index, 1);
    localStorage.setItem("automoviles", JSON.stringify(automoviles));
    location.reload();
}

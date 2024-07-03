document.addEventListener("DOMContentLoaded", () => {
    const listaPeliculas = document.getElementById("peliculas-lista");

    const peliculas = JSON.parse(localStorage.getItem("peliculas") || "[]");

    peliculas.forEach((pelicula, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pelicula.numero}</td>
            <td>${pelicula.nombre}</td>
            <td>${pelicula.año}</td>
            <td>${pelicula.categoria}</td>
            <td>${pelicula.tema}</td>
            <td>
                <button onclick="eliminarPelicula(${index})">Eliminar</button>
            </td>
        `;
        listaPeliculas.appendChild(row);
    });
});

function eliminarPelicula(index) {
    let peliculas = JSON.parse(localStorage.getItem("peliculas") || "[]");
    peliculas.splice(index, 1);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    location.reload();
}

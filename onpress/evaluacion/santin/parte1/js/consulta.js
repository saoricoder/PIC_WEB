document.addEventListener("DOMContentLoaded", () => {
    const formConsulta = document.getElementById("form-consulta");
    const resultadoConsulta = document.getElementById("resultado-consulta");

    formConsulta.addEventListener("submit", (event) => {
        event.preventDefault();

        const numero = formConsulta.numero.value.trim();
        const nombre = formConsulta.nombre.value.trim();

        if (!numero || !nombre) {
            alert("Por favor ingrese número y nombre.");
            return;
        }

        resultadoConsulta.innerHTML = "";

        const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
        const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

        const objetosFiltrados = [...juegos, ...peliculas].filter((objeto) => {
            return objeto.numero.toLowerCase().includes(numero.toLowerCase()) && objeto.nombre.toLowerCase().includes(nombre.toLowerCase());
        });

        if (objetosFiltrados.length === 0) {
            resultadoConsulta.innerHTML = "<p>No se encontraron objetos con los criterios de búsqueda.</p>";
        } else {
            objetosFiltrados.forEach((objeto) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h2>${objeto.numero} ${objeto.nombre}</h2>
                    <p>Año: ${objeto.año}, Categoria: ${objeto.categoria}</p>
                    ${objeto.genero ? `<p>Genero: ${objeto.genero}</p>` : ""}
                    ${objeto.tema ? `<p>Tema: ${objeto.tema}</p>` : ""}
                    <button class="btn eliminar" onclick="eliminarObjeto('${objeto.numero}')">Eliminar</button>
                `;
                resultadoConsulta.appendChild(card);
            });
        }
    });
});

function eliminarObjeto(numero) {
    let juegos = JSON.parse(localStorage.getItem("juegos") || "[]");
    let peliculas = JSON.parse(localStorage.getItem("peliculas") || "[]");

    juegos = juegos.filter(objeto => objeto.numero !== numero);
    peliculas = peliculas.filter(objeto => objeto.numero !== numero);

    localStorage.setItem("juegos", JSON.stringify(juegos));
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    alert("Objeto eliminado correctamente.");
    window.location.href = "../index.html";
}

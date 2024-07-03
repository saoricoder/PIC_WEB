document.addEventListener("DOMContentLoaded", () => {
    const btnRegistrarse = document.getElementById("btn-registrarse");
    const menuRegistro = document.getElementById("menu-registro");
    const formularioRegistro = document.getElementById("formulario-registro");

    const formJuego = `
        <h2>Agregar Juego</h2>
        <form id="form-juego">
            <label for="numero">NUMERO:</label>
            <input type="text" id="numero" name="numero" required>
            <label for="nombre">NOMBRE:</label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="año">AÑO:</label>
            <input type="number" id="año" name="año" required>
            <label for="categoria">CATEGORIA:</label>
            <input type="text" id="categoria" name="categoria" required>
            <label for="genero">GENERO:</label>
            <input type="text" id="genero" name="genero" required>
            <button type="submit" class="btn">Agregar</button>
        </form>
    `;

    const formPelicula = `
        <h2>Agregar Pelicula</h2>
        <form id="form-pelicula">
            <label for="numero">NUMERO:</label>
            <input type="text" id="numero" name="numero" required>
            <label for="nombre">NOMBRE:</label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="año">AÑO:</label>
            <input type="number" id="año" name="año" required>
            <label for="categoria">CATEGORIA:</label>
            <input type="text" id="categoria" name="categoria" required>
            <label for="tema">TEMA:</label>
            <input type="text" id="tema" name="tema" required>
            <button type="submit" class="btn">Agregar</button>
        </form>
    `;

    btnRegistrarse.addEventListener("click", () => {
        menuRegistro.classList.toggle("hidden");
    });

    document.getElementById("btn-juego").addEventListener("click", () => {
        formularioRegistro.innerHTML = formJuego;
        formularioRegistro.classList.remove("hidden");
    });

    document.getElementById("btn-pelicula").addEventListener("click", () => {
        formularioRegistro.innerHTML = formPelicula;
        formularioRegistro.classList.remove("hidden");
    });

    formularioRegistro.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const nuevoObjeto = {
            numero: form.numero.value,
            nombre: form.nombre.value,
            año: form.año.value,
            categoria: form.categoria.value,
        };

        if (form.id === "form-juego") {
            nuevoObjeto.genero = form.genero.value;
            localStorage.setItem("juegos", JSON.stringify([...JSON.parse(localStorage.getItem("juegos") || "[]"), nuevoObjeto]));
        } else if (form.id === "form-pelicula") {
            nuevoObjeto.tema = form.tema.value;
            localStorage.setItem("peliculas", JSON.stringify([...JSON.parse(localStorage.getItem("peliculas") || "[]"), nuevoObjeto]));
        }

        alert("Objeto agregado correctamente.");
        window.location.href = "../index.html";
    });
});

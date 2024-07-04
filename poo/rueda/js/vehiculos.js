document.addEventListener("DOMContentLoaded", () => {
    const btnRegistrarse = document.getElementById("btn-registrarse");
    const menuRegistro = document.getElementById("menu-registro");
    const formularioRegistro = document.getElementById("formulario-registro");

    const formAutomovil = `
        <h2>Agregar Automóvil</h2>
        <form id="form-automovil">
            <label for="marca">Marca:</label>
            <input type="text" id="marca" name="marca" required>
            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" required>
            <label for="año">Año:</label>
            <input type="number" id="año" name="año" required>
            <label for="velocidadMaxima">Velocidad Máxima (km/h):</label>
            <input type="number" step="0.01" id="velocidadMaxima" name="velocidadMaxima" required>
            <label for="numeroPuertas">Número de Puertas:</label>
            <input type="number" id="numeroPuertas" name="numeroPuertas" required>
            <button type="submit">Agregar</button>
        </form>
    `;

    const formMotocicleta = `
        <h2>Agregar Motocicleta</h2>
        <form id="form-motocicleta">
            <label for="marca">Marca:</label>
            <input type="text" id="marca" name="marca" required>
            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" required>
            <label for="año">Año:</label>
            <input type="number" id="año" name="año" required>
            <label for="velocidadMaxima">Velocidad Máxima (km/h):</label>
            <input type="number" step="0.01" id="velocidadMaxima" name="velocidadMaxima" required>
            <label for="tipoManillar">Tipo de Manillar:</label>
            <input type="text" id="tipoManillar" name="tipoManillar" required>
            <button type="submit">Agregar</button>
        </form>
    `;

    const formCamion = `
        <h2>Agregar Camión</h2>
        <form id="form-camion">
            <label for="marca">Marca:</label>
            <input type="text" id="marca" name="marca" required>
            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" required>
            <label for="año">Año:</label>
            <input type="number" id="año" name="año" required>
            <label for="velocidadMaxima">Velocidad Máxima (km/h):</label>
            <input type="number" step="0.01" id="velocidadMaxima" name="velocidadMaxima" required>
            <label for="capacidadCarga">Capacidad de Carga (kg):</label>
            <input type="number" step="0.01" id="capacidadCarga" name="capacidadCarga" required>
            <button type="submit">Agregar</button>
        </form>
    `;

    btnRegistrarse.addEventListener("click", () => {
        menuRegistro.classList.toggle("hidden");
    });

    document.getElementById("btn-automovil").addEventListener("click", () => {
        formularioRegistro.innerHTML = formAutomovil;
        formularioRegistro.classList.remove("hidden");
    });

    document.getElementById("btn-motocicleta").addEventListener("click", () => {
        formularioRegistro.innerHTML = formMotocicleta;
        formularioRegistro.classList.remove("hidden");
    });

    document.getElementById("btn-camion").addEventListener("click", () => {
        formularioRegistro.innerHTML = formCamion;
        formularioRegistro.classList.remove("hidden");
    });

    formularioRegistro.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;

        const nuevoVehiculo = {
            marca: form.marca.value,
            modelo: form.modelo.value,
            año: form.año.value,
            velocidadMaxima: form.velocidadMaxima.value,
        };

        if (form.id === "form-automovil") {
            nuevoVehiculo.numeroPuertas = form.numeroPuertas.value;
            localStorage.setItem("automoviles", JSON.stringify([...JSON.parse(localStorage.getItem("automoviles") || "[]"), nuevoVehiculo]));
        } else if (form.id === "form-motocicleta") {
            nuevoVehiculo.tipoManillar = form.tipoManillar.value;
            localStorage.setItem("motocicletas", JSON.stringify([...JSON.parse(localStorage.getItem("motocicletas") || "[]"), nuevoVehiculo]));
        } else if (form.id === "form-camion") {
            nuevoVehiculo.capacidadCarga = form.capacidadCarga.value;
            localStorage.setItem("camiones", JSON.stringify([...JSON.parse(localStorage.getItem("camiones") || "[]"), nuevoVehiculo]));
        }

        alert("Vehículo agregado correctamente.");
        window.location.href = "../index.html";
    });
});

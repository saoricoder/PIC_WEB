document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = new BaseDeDatos();
    const app = new Aplicacion(baseDeDatos);

    const formulario = document.getElementById('formulario');
    const lista = document.getElementById('lista');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const codigo = document.getElementById('codigo').value;
        const descripcion = document.getElementById('descripcion').value;
        const imagen = document.getElementById('imagen').files[0];

        if (imagen) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imagenURL = event.target.result;
                app.agregarRegistro(codigo, descripcion, imagenURL);
                mostrarRegistros();
                formulario.reset();
            };
            reader.readAsDataURL(imagen);
        }
    });

    lista.addEventListener('click', (e) => {
        if (e.target.classList.contains('modificar')) {
            const codigo = e.target.dataset.codigo;
            const nuevaDescripcion = prompt('Ingrese la nueva descripción:');
            const nuevaImagen = document.createElement('input');
            nuevaImagen.type = 'file';
            nuevaImagen.accept = 'image/*';
            nuevaImagen.onchange = () => {
                const archivo = nuevaImagen.files[0];
                if (archivo) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const nuevaImagenURL = event.target.result;
                        app.modificarRegistro(codigo, nuevaDescripcion, nuevaImagenURL);
                        mostrarRegistros();
                    };
                    reader.readAsDataURL(archivo);
                } else {
                    app.modificarRegistro(codigo, nuevaDescripcion, null);
                    mostrarRegistros();
                }
            };
            nuevaImagen.click();
        } else if (e.target.classList.contains('eliminar')) {
            const codigo = e.target.dataset.codigo;
            app.eliminarRegistro(codigo);
            mostrarRegistros();
        }
    });

    function mostrarRegistros() {
        lista.innerHTML = '';
        const registros = app.listarRegistros();
        registros.forEach(registro => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${registro.codigo}</td>
                <td>${registro.descripcion}</td>
                <td><img src="${registro.imagen}" alt="${registro.descripcion}"></td>
                <td>
                    <button class="modificar" data-codigo="${registro.codigo}">Modificar</button>
                    <button class="eliminar" data-codigo="${registro.codigo}">Eliminar</button>
                </td>
            `;
            lista.appendChild(tr);
        });
    }

    mostrarRegistros();
});

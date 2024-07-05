class Incidente {
    constructor(id, descripcion, fecha, usuario, activo) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.usuario = usuario;
        this.activo = activo;
    }
}

class SGSI {
    constructor() {
        this.incidentes = [];
        this.usuarios = []; // Se supone que los usuarios se cargan desde un servicio
        this.activos = []; // Se supone que los activos se cargan desde un servicio
    }

    agregarIncidente(incidente) {
        this.incidentes.push(incidente);
    }

    getUsuarios() {
        return this.usuarios;
    }

    getActivos() {
        return this.activos;
    }
}

const sgsi = new SGSI();

document.getElementById('incidentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = sgsi.incidentes.length + 1;
    const descripcion = document.getElementById('descripcionIncidente').value;
    const fecha = document.getElementById('fechaIncidente').value;
    const usuarioId = document.getElementById('usuario').value;
    const activoId = document.getElementById('activo').value;

    const usuario = sgsi.getUsuarios().find(u => u.id == usuarioId);
    const activo = sgsi.getActivos().find(a => a.id == activoId);

    const incidente = new Incidente(id, descripcion, fecha, usuario, activo);
    sgsi.agregarIncidente(incidente);

    alert('Incidente reportado con éxito!');
    this.reset();
});

function actualizarSelectUsuarios() {
    const selectUsuarios = document.getElementById('usuario');
    selectUsuarios.innerHTML = '';
    sgsi.getUsuarios().forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario.id;
        option.textContent = usuario.nombre;
        selectUsuarios.appendChild(option);
    });
}

function actualizarSelectActivos() {
    const selectActivos = document.getElementById('activo');
    selectActivos.innerHTML = '';
    sgsi.getActivos().forEach(activo => {
        const option = document.createElement('option');
        option.value = activo.id;
        option.textContent = activo.nombre;
        selectActivos.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarSelectUsuarios();
    actualizarSelectActivos();
});

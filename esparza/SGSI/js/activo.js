class Activo {
    constructor(id, nombre, descripcion, valor) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valor = valor;
    }
}

class SGSI {
    constructor() {
        this.activos = [];
    }

    agregarActivo(activo) {
        this.activos.push(activo);
    }
}

const sgsi = new SGSI();

document.getElementById('assetForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = sgsi.activos.length + 1;
    const nombre = document.getElementById('nombreActivo').value;
    const descripcion = document.getElementById('descripcionActivo').value;
    const valor = document.getElementById('valorActivo').value;

    const activo = new Activo(id, nombre, descripcion, valor);
    sgsi.agregarActivo(activo);

    alert('Activo registrado con éxito!');
    this.reset();
});

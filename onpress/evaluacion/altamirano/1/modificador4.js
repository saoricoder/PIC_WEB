class Datos {
    constructor(codigo, descripcion) {
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}

class ColeccionDatos {
    constructor() {
        this.datos = [];
    }

    agregar(dato) {
        this.datos.push(dato);
    }

    consultarPorCodigo(codigo) {
        return this.datos.find(dato => dato.codigo === codigo);
    }

    consultarPorDescripcion(descripcion) {
        return this.datos.filter(dato => dato.descripcion.includes(descripcion));
    }

    listar() {
        return this.datos;
    }

    modificar(codigo, nuevaDescripcion) {
        let dato = this.consultarPorCodigo(codigo);
        if (dato) {
            dato.descripcion = nuevaDescripcion;
        }
    }

    eliminar(codigo) {
        this.datos = this.datos.filter(dato => dato.codigo !== codigo);
    }
}

class Version {
    constructor(codigo, descripcion, datos, texto, imagen, video, audio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.datos = datos;
        this.texto = texto;
        this.imagen = imagen;
        this.video = video;
        this.audio = audio;
    }
}

class GestorVersiones {
    constructor() {
        this.versiones = [];
    }

    agregar(version) {
        this.versiones.push(version);
    }

    listar() {
        return this.versiones;
    }

    eliminar(codigo) {
        this.versiones = this.versiones.filter(version => version.codigo !== codigo);
    }

    consultarPorCodigo(codigo) {
        return this.versiones.find(version => version.codigo === codigo);
    }
}

let coleccion = new ColeccionDatos();
let gestorVersiones = new GestorVersiones();
let currentVersionIndex = -1;

document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let codigo = document.getElementById('codigo').value;
    let descripcion = document.getElementById('descripcion').value;
    let dato = new Datos(codigo, descripcion);
    coleccion.agregar(dato);
    alert('Datos guardados');
    listarDatos();
});

function listarDatos() {
    let lista = coleccion.listar();
    let dataList = document.getElementById('data-list');
    dataList.innerHTML = '';

    lista.forEach(dato => {
        let listItem = document.createElement('li');
        listItem.className = 'list-item';

        let text = document.createElement('span');
        text.textContent = `Código: ${dato.codigo}, Descripción: ${dato.descripcion}`;

        let modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modificar';
        modifyButton.onclick = () => modificarDato(dato.codigo);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => eliminarDato(dato.codigo);

        listItem.appendChild(text);
        listItem.appendChild(modifyButton);
        listItem.appendChild(deleteButton);
        dataList.appendChild(listItem);
    });
}

function modificarDato(codigo) {
    let nuevaDescripcion = prompt('Ingrese la nueva descripción:');
    if (nuevaDescripcion) {
        coleccion.modificar(codigo, nuevaDescripcion);
        listarDatos();
    }
}

function eliminarDato(codigo) {
    coleccion.eliminar(codigo);
    listarDatos();
}

function modificarTexto() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            let content = e.target.result;
            document.getElementById('texto-section').textContent = content;
            saveVersion();
        };

        reader.readAsText(file);
    };

    input.click();
}

function modificarImagen() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('imagen-section').src = e.target.result;
            saveVersion();
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function modificarVideo() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            let video = document.getElementById('video-section');
            let source = video.getElementsByTagName('source')[0];
            source.src = e.target.result;
            video.load();
            saveVersion();
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function modificarAudio() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'audio/*';

    input.onchange = function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(e) {
            let audio = document.getElementById('audio-section');
            let source = audio.getElementsByTagName('source')[0];
            source.src = e.target.result;
            audio.load();
            saveVersion();
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

function guardarVersion() {
    let codigo = prompt('Ingrese el código de la versión:');
    let descripcion = prompt('Ingrese la descripción de la versión:');
    if (codigo && descripcion) {
        let texto = document.getElementById('texto-section').textContent;
        let imagen = document.getElementById('imagen-section').src;
        let video = document.getElementById('video-section').getElementsByTagName('source')[0].src;
        let audio = document.getElementById('audio-section').getElementsByTagName('source')[0].src;
        let datos = coleccion.listar().slice();
        let version = new Version(codigo, descripcion, datos, texto, imagen, video, audio);
        gestorVersiones.agregar(version);
        listarVersiones();
    }
}

function listarVersiones() {
    let lista = gestorVersiones.listar();
    let versionList = document.getElementById('version-list');
    versionList.innerHTML = '';

    lista.forEach(version => {
        let listItem = document.createElement('li');
        listItem.className = 'version-item';

        let text = document.createElement('span');
        text.textContent = `Código: ${version.codigo}, Descripción: ${version.descripcion}`;

        let loadButton = document.createElement('button');
        loadButton.textContent = 'Cargar';
        loadButton.onclick = () => cargarVersion(version);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => eliminarVersion(version.codigo);

        listItem.appendChild(text);
        listItem.appendChild(loadButton);
        listItem.appendChild(deleteButton);
        versionList.appendChild(listItem);
    });
}

function cargarVersion(version) {
    coleccion.datos = version.datos.slice();
    document.getElementById('texto-section').textContent = version.texto;
    document.getElementById('imagen-section').src = version.imagen;
    document.getElementById('video-section').getElementsByTagName('source')[0].src = version.video;
    document.getElementById('audio-section').getElementsByTagName('source')[0].src = version.audio;
    currentVersionIndex = gestorVersiones.listar().indexOf(version);
    alert('Versión cargada');
}

function eliminarVersion(codigo) {
    gestorVersiones.eliminar(codigo);
    listarVersiones();
}

function saveVersion() {
    let version = gestorVersiones.consultarPorCodigo(coleccion.listar().length.toString());
    if (!version) {
        let texto = document.getElementById('texto-section').textContent;
        let imagen = document.getElementById('imagen-section').src;
        let video = document.getElementById('video-section').getElementsByTagName('source')[0].src;
        let audio = document.getElementById('audio-section').getElementsByTagName('source')[0].src;
        let datos = coleccion.listar().slice();
        version = new Version(coleccion.listar().length.toString(), "Versión " + coleccion.listar().length.toString(), datos, texto, imagen, video, audio);
        gestorVersiones.agregar(version);
        listarVersiones();
    }
}


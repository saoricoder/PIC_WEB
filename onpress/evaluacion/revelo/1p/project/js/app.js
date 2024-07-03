class Dato {
    constructor(codigo, descripcion) {
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}

class DataManager {
    constructor() {
        this.datos = this.loadData() || [];
    }

    addData(dato) {
        this.datos.push(dato);
        this.saveData();
    }

    removeData(codigo) {
        this.datos = this.datos.filter(dato => dato.codigo !== codigo);
        this.saveData();
    }

    updateData(codigo, nuevaDescripcion) {
        const dato = this.datos.find(dato => dato.codigo === codigo);
        if (dato) {
            dato.descripcion = nuevaDescripcion;
            this.saveData();
        }
    }

    getAllData() {
        return this.datos;
    }

    saveData() {
        localStorage.setItem('datos', JSON.stringify(this.datos));
    }

    loadData() {
        return JSON.parse(localStorage.getItem('datos'));
    }
}

const dataManager = new DataManager();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const inputCodigo = document.getElementById('input-codigo');
    const inputDescripcion = document.getElementById('input-descripcion');
    const list = document.getElementById('list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const codigo = inputCodigo.value;
        const descripcion = inputDescripcion.value;

        if (codigo && descripcion) {
            dataManager.addData(new Dato(codigo, descripcion));
            renderList();
            inputCodigo.value = '';
            inputDescripcion.value = '';
        }
    });

    const renderList = () => {
        list.innerHTML = '';
        dataManager.getAllData().forEach(dato => {
            const item = document.createElement('li');
            item.textContent = `${dato.codigo}: ${dato.descripcion}`;
            const button = document.createElement('button');
            button.textContent = 'Eliminar';
            button.addEventListener('click', () => {
                dataManager.removeData(dato.codigo);
                renderList();
            });
            item.appendChild(button);
            list.appendChild(item);
        });
    };

    renderList();
});
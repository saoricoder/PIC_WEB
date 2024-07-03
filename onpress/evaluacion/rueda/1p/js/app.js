class Vehiculo {
    constructor(id, marca, modelo, año, velocidadMaxima) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidadMaxima = velocidadMaxima;
    }

    obtenerDetalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Velocidad Máxima: ${this.velocidadMaxima} km/h`;
    }
}

class Automovil extends Vehiculo {
    constructor(id, marca, modelo, año, velocidadMaxima, numeroPuertas) {
        super(id, marca, modelo, año, velocidadMaxima);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Número de Puertas: ${this.numeroPuertas}`;
    }
}

class Motocicleta extends Vehiculo {
    constructor(id, marca, modelo, año, velocidadMaxima, tipoManillar) {
        super(id, marca, modelo, año, velocidadMaxima);
        this.tipoManillar = tipoManillar;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Tipo de Manillar: ${this.tipoManillar}`;
    }
}

class Camion extends Vehiculo {
    constructor(id, marca, modelo, año, velocidadMaxima, capacidadCarga) {
        super(id, marca, modelo, año, velocidadMaxima);
        this.capacidadCarga = capacidadCarga;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Capacidad de Carga: ${this.capacidadCarga} kg`;
    }
}

function agregarVehiculo(vehiculo, lista) {
    const vehiculoRow = document.createElement('tr');
    vehiculoRow.innerHTML = `
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.modelo}</td>
        <td>${vehiculo.año}</td>
        <td>${vehiculo.velocidadMaxima}</td>
        <td>
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
        </td>
    `;
    lista.appendChild(vehiculoRow);

    // Eliminar vehículo
    vehiculoRow.querySelector('.eliminar').addEventListener('click', () => {
        lista.removeChild(vehiculoRow);
    });

   
}

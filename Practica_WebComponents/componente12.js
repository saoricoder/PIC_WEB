
class Mensaje {
    constructor() {
        this.input = document.getElementById('entrada1');
        this.boton1 = document.getElementById('boton1');
        this.boton2 = document.getElementById('boton2');
        this.mensajeDiv1 = document.getElementById('mensajeDiv1');
        this.mensajeDiv2 = document.getElementById('mensajeDiv2');
        this.mensajeP1 = document.getElementById('mensajeP1');
        this.mensajeP2 = document.getElementById('mensajeP2');
        this.init();
    }

    init() {
        this.boton1.addEventListener('click', () => this.enviarMensaje());
        this.boton2.addEventListener('click', () => this.personalizarMensaje());
    }

    enviarMensaje() {
        const mensaje = this.input.value;
        this.mensajeDiv1.textContent = `Mensaje enviado: ${mensaje}`;
        this.mensajeP1.textContent = `Mensaje en el párrafo: ${mensaje}`;
    }

    personalizarMensaje() {
        const mensaje = this.input.value;
        this.mensajeDiv2.textContent = `Mensaje personalizado: ${mensaje}`;
        this.mensajeP2.textContent = `Mensaje en el párrafo personalizado: ${mensaje}`;
    }
}

// Inicializar la clase Mensaje cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new Mensaje();
});
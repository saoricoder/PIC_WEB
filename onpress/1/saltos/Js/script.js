class Licoreria {
    constructor() {
        this.containerEdad = document.getElementById('container-edad');
        this.productos = [
            { nombre: "Vodka", precio: 20 },
            { nombre: "Ron", precio: 15 },
            { nombre: "Whisky", precio: 30 },
            { nombre: "Tequila", precio: 25 },
            { nombre: "Ginebra", precio: 18 }
        ];
    }

    validarEdad() {
        var edad = parseInt(prompt("Por favor, ingresa tu edad:"));

        if (isNaN(edad) || edad <= 0) {
            alert("Por favor, ingresa una edad válida.");
            return;
        }

        if (edad >= 18) {
            this.mostrarProductos();
        } else {
            alert("Lo siento, debes ser mayor de edad para comprar productos en nuestra licorería.");
        }
    }

    mostrarProductos() {
        this.containerEdad.innerHTML = '';

        var selectProducto = document.createElement('select');
        selectProducto.id = "producto";
        this.productos.forEach(function(producto) {
            var option = document.createElement('option');
            option.value = producto.precio;
            option.text = producto.nombre + " - $" + producto.precio;
            selectProducto.appendChild(option);
        });

        var inputCantidad = document.createElement('input');
        inputCantidad.type = "text";
        inputCantidad.id = "num2";
        inputCantidad.placeholder = "Cantidad";

        var buttonComprar = document.createElement('button');
        buttonComprar.textContent = "Comprar";
        buttonComprar.onclick = this.comprar.bind(this);

        var buttonVolver = document.createElement('button');
        buttonVolver.textContent = "Volver a verificar edad";
        buttonVolver.onclick = this.validarEdad.bind(this);

        this.containerEdad.appendChild(selectProducto);
        this.containerEdad.appendChild(inputCantidad);
        this.containerEdad.appendChild(buttonComprar);
        this.containerEdad.appendChild(buttonVolver);
    }

    comprar() {
        alert("¡Gracias por su compra! Vuelva pronto.");
    }
}

const licoreria = new Licoreria();

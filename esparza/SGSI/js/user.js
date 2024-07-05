class Usuario {
    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }
}

class SGSI {
    constructor() {
        this.usuarios = [];
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
        this.actualizarTablaUsuarios();
    }

    actualizarTablaUsuarios() {
        const tbody = document.getElementById('usuariosTableBody');
        tbody.innerHTML = '';
        this.usuarios.forEach(usuario => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.rol}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

const sgsi = new SGSI();

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = sgsi.usuarios.length + 1;
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').value;

    const usuario = new Usuario(id, nombre, email, rol);
    sgsi.agregarUsuario(usuario);

    alert('Usuario registrado con éxito!');
    this.reset();
});


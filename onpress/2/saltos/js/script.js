document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    var mensaje = `¡Bienvenido, ${nombre}! Tu registro con email ${email} y teléfono ${telefono} ha sido exitoso.`;

    document.getElementById('resultado').innerText = mensaje;
});

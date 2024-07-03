document.addEventListener('DOMContentLoaded', function() {
    const btnSaludo = document.getElementById('btnSaludo');
    const mensajeSaludo = document.getElementById('mensajeSaludo');

    btnSaludo.addEventListener('click', function() {
        mensajeSaludo.textContent = '¡Hola! Bienvenido a mi Proyecto Web.';
    });
});

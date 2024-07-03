document.addEventListener('DOMContentLoaded', () => {
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');
    const item4 = document.getElementById('item4');

    // Evento de clic en botón
    item1.addEventListener('click', () => {
        item1.classList.add('active');
        setTimeout(() => item1.classList.remove('active'), 300);
    });

    // Evento de pasar el mouse por encima
    item2.addEventListener('mouseenter', () => {
        item2.style.backgroundColor = '#ffc107';
    });

    item2.addEventListener('mouseleave', () => {
        item2.style.backgroundColor = '#007BFF';
    });

    // Evento de hacer crecer al elemento 3 al pasar el mouse sobre él
    item3.addEventListener('mouseenter', () => {
        item3.classList.add('grow');
    });

    item3.addEventListener('mouseleave', () => {
        item3.classList.remove('grow');
    });

    // Evento de cambio en input
    item4.addEventListener('input', () => {
        if (item4.value !== '') {
            item4.classList.add('text-filled');
        } else {
            item4.classList.remove('text-filled');
        }
    });
});

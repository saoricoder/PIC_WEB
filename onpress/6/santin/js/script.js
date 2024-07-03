document.addEventListener('DOMContentLoaded', function() {
    // Evento Click
    document.getElementById('clickButton').addEventListener('click', function() {
        alert('Botón Clickeado');
    });

    // Evento Hover
    document.getElementById('hoverDiv').addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightgreen';
    });

    document.getElementById('hoverDiv').addEventListener('mouseout', function() {
        this.style.backgroundColor = 'lightgray';
    });

    // Evento Keypress
    document.getElementById('keypressInput').addEventListener('keypress', function(event) {
        console.log(`Tecla presionada: ${event.key}`);
    });

    // Evento Resize
    window.addEventListener('resize', function() {
        document.getElementById('resizeMessage').textContent = 'La ventana ha sido redimensionada';
    });

    // Mostrar/Ocultar Código
    document.getElementById('showCodeButton').addEventListener('click', function() {
        const codeExplanation = document.getElementById('codeExplanation');
        if (codeExplanation.style.display === 'none') {
            codeExplanation.style.display = 'block';
            this.textContent = 'Ocultar Código';
        } else {
            codeExplanation.style.display = 'none';
            this.textContent = 'Visualizar Código';
        }
    });
});

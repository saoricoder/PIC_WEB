// Manejo de eventos con JavaScript
document.getElementById('colorChanger').addEventListener('click', function() {
    document.body.style.backgroundColor = '#b19cd9'; // Cambia el color de fondo del body
  });
  
  // Evento de teclado
  document.addEventListener('keydown', function(event) {
    console.log('Tecla presionada:', event.key); // Muestra la tecla presionada en la consola
  });
  
  // Evento de formulario
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Simulación de guardar datos (aquí podrías realizar una petición AJAX)
    setTimeout(function() {
      // Mostrar mensaje de éxito después de 1 segundo (simulación de guardado)
      alert('Datos guardados correctamente.');
      // Limpiar el formulario después de guardar (opcional)
      document.getElementById('myForm').reset();
    }, 1000); // Simula un tiempo de respuesta del servidor de 1 segundo
  });
  
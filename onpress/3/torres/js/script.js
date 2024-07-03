// Definición de la clase base Persona
class Persona {
    // Constructor de la clase Persona que inicializa nombre y edad
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para obtener los detalles de la persona
    obtenerDetalles() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
  }
  
  // Definición de la clase Bibliotecario que hereda de Persona
  class Bibliotecario extends Persona {
    // Constructor de la clase Bibliotecario que inicializa nombre, edad e idEmpleado
    constructor(nombre, edad, idEmpleado) {
      super(nombre, edad); // Llama al constructor de la clase base (Persona)
      this.idEmpleado = idEmpleado;
    }
  
    // Método para gestionar libros (placeholder para lógica futura)
    gestionarLibro(libro, accion) {
      // Lógica para gestionar libros
    }
  }
  
  // Definición de la clase Usuario que hereda de Persona
  class Usuario extends Persona {
    // Constructor de la clase Usuario que inicializa nombre, edad e idUsuario
    constructor(nombre, edad, idUsuario) {
      super(nombre, edad); // Llama al constructor de la clase base (Persona)
      this.idUsuario = idUsuario;
      this.librosPrestados = []; // Inicializa la lista de libros prestados
    }
  
    // Método para prestar un libro y añadirlo a la lista de libros prestados
    prestarLibro(libro) {
      this.librosPrestados.push(libro);
    }
  
    // Método para devolver un libro y eliminarlo de la lista de libros prestados
    devolverLibro(libro) {
      const indice = this.librosPrestados.indexOf(libro);
      if (indice > -1) {
        this.librosPrestados.splice(indice, 1);
      }
    }
  
    // Método para obtener la lista de libros prestados
    obtenerLibrosPrestados() {
      return this.librosPrestados;
    }
  }
  
  // Definición de la clase Libro
  class Libro {
    // Constructor de la clase Libro que inicializa título, autor e ISBN
    constructor(titulo, autor, isbn) {
      this.titulo = titulo;
      this.autor = autor;
      this.isbn = isbn;
    }
  
    // Método para obtener los detalles del libro
    obtenerDetalles() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}`;
    }
  }
  
  // Definición de la clase Biblioteca
  class Biblioteca {
    // Constructor de la clase Biblioteca que inicializa nombre, lista de libros y lista de usuarios
    constructor(nombre) {
      this.nombre = nombre;
      this.libros = [];
      this.usuarios = [];
    }
  
    // Método para agregar un libro a la biblioteca
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    // Método para eliminar un libro de la biblioteca
    eliminarLibro(libro) {
      const indice = this.libros.indexOf(libro);
      if (indice > -1) {
        this.libros.splice(indice, 1);
      }
    }
  
    // Método para agregar un usuario a la biblioteca
    agregarUsuario(usuario) {
      this.usuarios.push(usuario);
    }
  
    // Método para obtener los detalles de la biblioteca
    obtenerDetalles() {
      return `Biblioteca: ${this.nombre}, Libros: ${this.libros.length}, Usuarios: ${this.usuarios.length}`;
    }
  
    // Método para obtener la lista de libros de la biblioteca
    obtenerLibros() {
      return this.libros;
    }
  
    // Método para obtener la lista de usuarios de la biblioteca
    obtenerUsuarios() {
      return this.usuarios;
    }
  }
  
  // Espera a que el documento esté completamente cargado
  document.addEventListener('DOMContentLoaded', () => {
    // Crea una instancia de la clase Biblioteca
    const biblioteca = new Biblioteca("Biblioteca Central");
  
    // Maneja el evento de envío del formulario para agregar un libro
    const agregarLibroForm = document.getElementById('agregarLibroForm');
    agregarLibroForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Previene el comportamiento por defecto del formulario
      const titulo = document.getElementById('titulo').value;
      const autor = document.getElementById('autor').value;
      const isbn = document.getElementById('isbn').value;
      const nuevoLibro = new Libro(titulo, autor, isbn); // Crea una instancia de la clase Libro
      biblioteca.agregarLibro(nuevoLibro); // Agrega el libro a la biblioteca
      actualizarDetallesBiblioteca(); // Actualiza los detalles mostrados de la biblioteca
    });
  
    // Maneja el evento de envío del formulario para agregar un usuario
    const agregarUsuarioForm = document.getElementById('agregarUsuarioForm');
    agregarUsuarioForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Previene el comportamiento por defecto del formulario
      const nombre = document.getElementById('nombreUsuario').value;
      const edad = document.getElementById('edadUsuario').value;
      const idUsuario = document.getElementById('idUsuario').value;
      const nuevoUsuario = new Usuario(nombre, edad, idUsuario); // Crea una instancia de la clase Usuario
      biblioteca.agregarUsuario(nuevoUsuario); // Agrega el usuario a la biblioteca
      actualizarDetallesUsuarios(); // Actualiza los detalles mostrados de los usuarios
    });
  
    // Función para actualizar los detalles de la biblioteca mostrados en la página
    function actualizarDetallesBiblioteca() {
      const detallesBiblioteca = document.getElementById('detallesBiblioteca');
      const libros = biblioteca.obtenerLibros().map(libro => libro.obtenerDetalles()).join('<br>');
      detallesBiblioteca.innerHTML = `Biblioteca: ${biblioteca.nombre}<br>Libros:<br>${libros}`;
    }
  
    // Función para actualizar los detalles de los usuarios mostrados en la página
    function actualizarDetallesUsuarios() {
      const detallesUsuarios = document.getElementById('detallesUsuarios');
      const usuarios = biblioteca.obtenerUsuarios().map(usuario => {
        const librosPrestados = usuario.obtenerLibrosPrestados().map(libro => libro.titulo).join(', ');
        return `Usuario: ${usuario.nombre}, Libros Prestados: ${librosPrestados}`;
      }).join('<br>');
      detallesUsuarios.innerHTML = `Usuarios:<br>${usuarios}`;
    }
  });
  
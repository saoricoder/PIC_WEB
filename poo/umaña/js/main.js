// Crear instancias de las clases y demostrar su funcionamiento
let biblioteca = new Biblioteca(1, "Biblioteca Central", "Av. Principal 123");
let autor1 = new Autor(1, "Juan Pérez");
let libro1 = new Libro(1, "La Odisea", autor1);
let usuario1 = new Usuario(1, "Ana García");
let prestamo1 = new Prestamo(1, usuario1, libro1, new Date(), null);

biblioteca.agregarLibro(libro1);
biblioteca.registrarUsuario(usuario1);

console.log(biblioteca);

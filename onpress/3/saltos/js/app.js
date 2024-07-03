document.addEventListener('DOMContentLoaded', () => {
    const biblioteca = new Biblioteca();

    const formLibro = document.getElementById('formLibro');
    const listaLibros = document.getElementById('listaLibros');

    formLibro.addEventListener('submit', (e) => {
        e.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const autoresTexto = document.getElementById('autores').value;
        const isbn = document.getElementById('isbn').value;
        const capitulosTexto = document.getElementById('capitulos').value;

        const autores = autoresTexto.split(',').map(nombre => {
            const [nombreAutor, apellidoAutor] = nombre.trim().split(' ');
            return new Autor(nombreAutor, apellidoAutor);
        });

        const capitulos = capitulosTexto.split(',').map(nombre => new Capitulo(nombre.trim()));

        const nuevoLibro = new Libro(titulo, autores, isbn, capitulos);
        biblioteca.agregarLibro(nuevoLibro);

        actualizarListaLibros();
    });

    function actualizarListaLibros() {
        listaLibros.innerHTML = '';
        biblioteca.libros.forEach((libro) => {
            const li = document.createElement('li');
            li.textContent = `${libro.titulo} por ${libro.autores.map(autor => `${autor.nombre} ${autor.apellido}`).join(', ')} (ISBN: ${libro.isbn})`;
            listaLibros.appendChild(li);
        });
    }
});

class Publicacion {
    constructor(titulo) {
        this.titulo = titulo;
    }
}

class Libro extends Publicacion {
    constructor(titulo, autores, isbn, capitulos) {
        super(titulo);
        this.autores = autores; // Asociación
        this.isbn = isbn;
        this.capitulos = capitulos; // Composición
    }
}

class Autor {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Capitulo {
    constructor(titulo) {
        this.titulo = titulo;
    }
}

class Biblioteca {
    constructor() {
        this.libros = []; // Agregación
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }
}

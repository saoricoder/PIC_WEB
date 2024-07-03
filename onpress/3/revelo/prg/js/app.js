// Clase Libro
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Clase Biblioteca
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.displayBooks();
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
        this.displayBooks();
    }

    displayBooks() {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';
        this.books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.addEventListener('click', () => {
                this.removeBook(book.title);
            });
            li.appendChild(deleteBtn);
            bookList.appendChild(li);
        });
    }
}

// Evento para agregar libros
document.addEventListener('DOMContentLoaded', () => {
    const library = new Library();

    document.getElementById('addBookBtn').addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;

        if (title && author) {
            const book = new Book(title, author);
            library.addBook(book);
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
        }
    });
});

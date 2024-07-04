class Book {
    constructor(code, title, author, status) {
      this.code = code;
      this.title = title;
      this.author = author;
      this.status = status;
    }
  
    showInfo() {
      return `Código: ${this.code}, Título: ${this.title}, Autor: ${this.author}, Estado: ${this.status}`;
    }
  }
  
  let bookList = [];
  
  function addBook() {
    const code = document.getElementById('bookCode').value;
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const status = document.getElementById('bookStatus').value;
  
    const book = new Book(code, title, author, status);
    bookList.push(book);
    showBooks();
  }
  function createBookRow(book, index) {
    const row = document.createElement('tr');
    const codeCell = document.createElement('td');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const statusCell = document.createElement('td');
    const deleteCell = document.createElement('td');
  
    codeCell.textContent = book.code;
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    statusCell.textContent = book.status;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elmininar';
    deleteButton.addEventListener('click', () => {
      removeBook(index);
    });
  
    deleteCell.appendChild(deleteButton);
  
    row.appendChild(codeCell);
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(statusCell);
    row.appendChild(deleteCell);
  
    return row;
  }
 
  function removeBook(index) {
    bookList.splice(index, 1);
    showBooks();
  }

  function removeClient(index) {
    clientList.splice(index, 1);
    showClients();
  }
  
  function showBooks() {
    const tableBody = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
  
    bookList.forEach((book) => {
      const row = createBookRow(book);
      tableBody.appendChild(row);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showBooks();
  });
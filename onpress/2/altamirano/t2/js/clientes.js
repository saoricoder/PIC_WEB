class Cliente {
    constructor(id, name, email, phone, bookCode) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.bookCode = bookCode;
    }
  
    showInfo() {
      return `ID: ${this.id}, Nombre: ${this.name}, Email: ${this.email}, Teléfono: ${this.phone}, Código de Libro: ${this.bookCode}`;
    }
  }
  
  let clientList = [];
  
  function addClient() {
    const id = document.getElementById('clientId').value;
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const bookCode = document.getElementById('clientBookCode').value;
  
    const client = new Cliente(id, name, email, phone, bookCode);
    clientList.push(client);
    showClients();
  }
  
  function createClientRow(client, index) {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    const phoneCell = document.createElement('td');
    const bookCodeCell = document.createElement('td');
    const actionCell = document.createElement('td');
  
    idCell.textContent = client.id;
    nameCell.textContent = client.name;
    emailCell.textContent = client.email;
    phoneCell.textContent = client.phone;
    bookCodeCell.textContent = client.bookCode;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => removeClient(index));
  
    actionCell.appendChild(deleteButton);
  
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    row.appendChild(bookCodeCell);
    row.appendChild(actionCell);
  
    return row;
  }
  
  function removeClient(index) {
    clientList.splice(index, 1);
    showClients();
  }
  
  function showClients() {
    const tableBody = document.getElementById('clientTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
  
    clientList.forEach((client, index) => {
      const row = createClientRow(client, index);
      tableBody.appendChild(row);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showClients();
  });
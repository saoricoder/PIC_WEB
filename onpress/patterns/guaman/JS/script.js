// Builder Pattern
class Message {
    constructor() {
        this.sender = '';
        this.recipient = '';
        this.content = '';
    }

    display() {
        return `Mensaje de ${this.sender} a ${this.recipient}: ${this.content}`;
    }
}

class MessageBuilder {
    constructor() {
        this.message = new Message();
    }

    setSender(sender) {
        this.message.sender = sender;
        return this;
    }

    setRecipient(recipient) {
        this.message.recipient = recipient;
        return this;
    }

    setContent(content) {
        this.message.content = content;
        return this;
    }

    build() {
        return this.message;
    }
}

// Mediator Pattern
class ChatRoom {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message) {
        this.users.forEach(user => user.receive(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    receive(message) {
        const output = document.getElementById('output');
        const p = document.createElement('p');
        p.textContent = `${this.name} recibió: ${message}`;
        output.appendChild(p);
    }
}

// Funcionalidad de la Aplicación
document.getElementById('createMessageBtn').addEventListener('click', () => {
    const builder = new MessageBuilder();
    const message = builder.setSender('Vinicio').setRecipient('Paul').setContent('Hola, ¿cómo estás?').build();
    const output = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message.display();
    output.appendChild(p);
});

document.getElementById('sendMessageBtn').addEventListener('click', () => {
    const chatRoom = new ChatRoom();
    const user1 = new User('Vinicio');
    const user2 = new User('Paul');
    chatRoom.addUser(user1);
    chatRoom.addUser(user2);
    chatRoom.sendMessage('Hola a todos desde el mediador');
});

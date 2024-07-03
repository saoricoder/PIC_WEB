class UI {
    static displayItems(items) {
        const output = document.getElementById('output');
        output.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.innerHTML = `
                <p>Código: ${item.code}</p>
                <p>Descripción: ${item.description}</p>
                <button class="delete-btn" data-code="${item.code}">Eliminar</button>
            `;
            output.appendChild(div);
        });
    }

    static clearForm() {
        document.getElementById('code').value = '';
        document.getElementById('description').value = '';
    }

    static showMessage(message) {
        const output = document.getElementById('output');
        output.innerHTML = `<p>${message}</p>`;
    }
}

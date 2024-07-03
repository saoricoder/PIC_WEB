const itemManager = new ItemManager();

document.getElementById('data-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const code = document.getElementById('code').value;
    const description = document.getElementById('description').value;

    const item = new Item(code, description);
    itemManager.addItem(item);

    UI.clearForm();
    UI.showMessage('Item agregado correctamente.');
});

document.getElementById('list-all').addEventListener('click', () => {
    const items = itemManager.getAllItems();
    UI.displayItems(items);
});

document.getElementById('search-code').addEventListener('click', () => {
    const code = prompt('Ingrese el código a buscar:');
    const item = itemManager.getItemByCode(code);
    if (item) {
        UI.displayItems([item]);
    } else {
        UI.showMessage('Item no encontrado.');
    }
});

document.getElementById('search-description').addEventListener('click', () => {
    const description = prompt('Ingrese la descripción a buscar:');
    const item = itemManager.getItemByDescription(description);
    if (item) {
        UI.displayItems([item]);
    } else {
        UI.showMessage('Item no encontrado.');
    }
});

document.getElementById('output').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const code = e.target.getAttribute('data-code');
        itemManager.deleteItem(code);
        UI.displayItems(itemManager.getAllItems());
    }
});

class Item {
    constructor(code, description) {
        this.code = code;
        this.description = description;
    }
}

class ItemManager {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItemByCode(code) {
        return this.items.find(item => item.code === code);
    }

    getItemByDescription(description) {
        return this.items.find(item => item.description === description);
    }

    getAllItems() {
        return this.items;
    }

    updateItem(code, newDescription) {
        const item = this.getItemByCode(code);
        if (item) {
            item.description = newDescription;
        }
    }

    deleteItem(code) {
        this.items = this.items.filter(item => item.code !== code);
    }
}

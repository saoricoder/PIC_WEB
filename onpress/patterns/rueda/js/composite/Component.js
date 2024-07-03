class Component {
    constructor(name) {
        this.name = name;
    }

    operation() {
        throw new Error('This method should be overwritten!');
    }
}

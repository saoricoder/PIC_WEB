class Composite extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }

    operation() {
        console.log(`Composite ${this.name} operation.`);
        for (const child of this.children) {
            child.operation();
        }
    }
}

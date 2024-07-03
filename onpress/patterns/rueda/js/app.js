// Composite Pattern Example
const root = new Composite('root');
const branch1 = new Composite('branch1');
const branch2 = new Composite('branch2');

const leaf1 = new Leaf('leaf1');
const leaf2 = new Leaf('leaf2');
const leaf3 = new Leaf('leaf3');

root.add(branch1);
root.add(branch2);
branch1.add(leaf1);
branch2.add(leaf2);
branch2.add(leaf3);

root.operation();

// Template Pattern Example
const instanceA = new ConcreteClassA();
const instanceB = new ConcreteClassB();

instanceA.templateMethod();
instanceB.templateMethod();

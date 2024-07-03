class TemplateClass {
    templateMethod() {
        this.step1();
        this.step2();
        this.step3();
    }

    step1() {
        console.log('Step 1');
    }

    step2() {
        throw new Error('You have to implement the method step2!');
    }

    step3() {
        console.log('Step 3');
    }
}

class ConcreteClassA extends TemplateClass {
    step2() {
        console.log('ConcreteClassA Step 2');
    }
}

class ConcreteClassB extends TemplateClass {
    step2() {
        console.log('ConcreteClassB Step 2');
    }
}

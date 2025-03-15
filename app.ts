// Static keyword is a non-access modifier used for methods and attributes

//static methods and atributes are associated with the class rather than with each instance of the class.

class Dog {
    static instanceCount: number = 0; //now this variable is associated with the class
    name: string; //this is an instance attribute. That is, each dog has a different name.

    constructor(name: string) {
        Dog.instanceCount++;
        this.name = name
    }

    static decreaseCount() {    // static method
        this.instanceCount--;   // it would be the same as Dog.instanceCount--; Here 'this' refers to the class, not the instance.
    }
}

const dog1 = new Dog("Bodoquito");  // 1
console.log(Dog.instanceCount)

const dog2 = new Dog("Nina");       // 2
console.log(Dog.instanceCount)

Dog.decreaseCount();
console.log(Dog.instanceCount);
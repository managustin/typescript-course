"use strict";
// Static keyword is a non-access modifier used for methods and attributes
//static methods and atributes are associated with the class rather than with each instance of the class.
class Dog {
    constructor(name) {
        Dog.instanceCount++;
        this.name = name;
    }
    static decreaseCount() {
        this.instanceCount--;
    }
}
Dog.instanceCount = 0; //now this variable is associated with the class
const dog1 = new Dog("Bodoquito"); // 1
console.log(Dog.instanceCount);
const dog2 = new Dog("Nina"); // 2
console.log(Dog.instanceCount);
Dog.decreaseCount();
console.log(Dog.instanceCount);

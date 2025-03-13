"use strict";
class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`I am ${this.name} and I am ${this.color}`);
    }
    test() {
        return 1;
    }
}
const dog = new Dog("Bodoquito", "Black"); //if we add the : Animal we now "view this dog through the lens of the animal interface". 
//this is helpful when we want to hide the complexity of a specific class and only use the properties of the interface
class Cat {
    speak() {
        console.log("Meow");
    }
}
const cat = new Cat();
const animals = [cat, dog]; //here the interface allows us to use both different objects and treat them as if they were of the same type 
function makeSound(animal) {
    animal.speak(); //it doesn't matter what the object is, as long as it implements the animal interface
}
makeSound(dog);
makeSound(cat);

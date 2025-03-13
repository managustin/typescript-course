interface Animal { //In contrast with an abstract class, an interface doesn't actually define any functionality or behavior.
    speak(): void   //so we define the types but not the implementations
}

class Dog implements Animal{ //it's not 'extends', it just implements the properties
    private name: string; 
    private color: string;

    constructor(name: string, color: string){
        this.name = name;
        this.color = color; 
    }
    speak() { //this must be public
        console.log(`I am ${this.name} and I am ${this.color}`);
    }
    test() {
        return 1;
    }
}

const dog: Animal = new Dog("Bodoquito","Black");   //if we add the : Animal we now "view this dog through the lens of the animal interface". 
                                                    //this is helpful when we want to hide the complexity of a specific class and only use the properties of the interface

class Cat implements Animal {
    speak(){
        console.log("Meow")
    }
}

const cat = new Cat()
const animals: Animal[] = [cat, dog]; //here the interface allows us to use both different objects and treat them as if they were of the same type 

function makeSound(animal: Animal) {
    animal.speak() //it doesn't matter what the object is, as long as it implements the animal interface
}

makeSound(dog);
makeSound(cat);

/* Main questions to ask myself:

    When to use an interface?
When there's no functionality that you want to define concretely. 
In this case, Animal is not defining or implementing anything that cat or dog are going to reuse. It simply says that an animal must have the speak().

When to use an abstract class?
When we want to write behavior that will be reused by one of the concrete classes.

When to use a base class?
When we only want to worry about the type of behavior that we care about in a specific implementation.
*/
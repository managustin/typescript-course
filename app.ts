class Person {
    protected name: string; //'private' is an access modifier. The default is Public (optional to specify). The other modifier is Protected.
    constructor(name: string) {
        this.name = name;
        this.greet();
    }
    private greet() { //this method is just meant for internal use.
        console.log(`Hello, my name is ${this.name}`);
    }
    getName() {
        if (this.name.length < 2) return "" //example of conditions
        return this.name
    }
    setName(name: string){
        if(name.length < 5) return
        this.name = name
    }
}

const p1 = new Person("Agustín");
p1.getName()

class Employee extends Person { //since the access is 'protected', a subclass can access the properties.
    callMe() {
        console.log(this.name)
    }
}


/*-------------ABSTRACT CLASS-------------*/
/* it is a restricted class that cannot be used to create objects and designed to be
specifically used as a base class*/

abstract class Animal {
    abstract makeSound(duration: number): void;
    move(duration: number) {
        console.log("Moving along...")
        this.makeSound(duration);
    }
}

class Dog extends Animal {
    makeSound(duration: number): void {
        console.log("Woof woof")
    }
}
class Cat extends Animal {
    makeSound(duration: number): void {
        console.log("Meow meow")
    }
}

const dog = new Dog()
dog.move(10)
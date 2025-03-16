//  we use type guards to provide something called type narrowing
// so we can narrow a more general type to a concrete type

type StringOrNumber = string | number;

function add1(value: StringOrNumber): StringOrNumber { 
    if(typeof value === "string"){                          // One way of doing it is with 'typeof'
        return value + "1"
    } else{
        return value + 1
    }
}

class Dog {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Cat {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

function getName(animal: Cat | Dog) {
    if(animal instanceof Cat){                          // Other way is with 'instanceof'
        console.log(`The name is ${animal.firstName}`)
    }else{
        console.log(`The name is ${animal.firstName} ${animal.lastName}`)
    }
}
function getNameWithIn(animal: Cat | Dog) {
    if("lastName" in animal){                          // Other way is with checking if a property is 'in' a specific class 
        console.log(`The name is ${animal.firstName} ${animal.lastName}`)
    }else{
        console.log(`The name is ${animal.firstName}`)
    }
}

function isDog(pet: Dog | Cat): pet is Dog {           // This returns wether or not the type is Dog  
    return (pet as Dog).lastName !== undefined;        // here we cast the pet as Dog and check if it has a lastName
}

function getNameWithIs(animal: Cat | Dog) {
    if(isDog(animal)){                          // Other way is with checking if a property is 'in' a specific class 
        console.log(`The name is ${animal.firstName} ${animal.lastName}`)
    }else{
        console.log(`The name is ${animal.firstName}`)
    }
}
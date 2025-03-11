interface Person { //Specify the different properties that an object of type Person would have.
    name: string;
    age: number;
    height?: number; //optional prop
    //hello: () => void;
}

const person: Person = {
    name: "Agustín",
    age: 23
    /*hello: function(){
        console.log(this.name + " says hi.");
    }*/
}
//person.hello();

interface Employee extends Person { //This interface inherits all of the properties from Person and add some more.
    employeeId: number;
}

const worker: Employee = {
    name: "Agustín",
    age: 23,
    height: 192,
    employeeId: 10
}

interface Manager extends Employee{
    employees: Person[]
}
/*
const manager: Manager = {
    
}*/

function getPerson(p: Person): Person {
    return{
        name: "Agustín",
        age: 23
    }
}
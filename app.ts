//rest parameter: it can take as many arguments as needed
function sum(str: string, ...numbers: number[]){
    for(let numero of numbers){
        console.log(numero);
    }
    numbers.forEach(numero => console.log(numero))
}
//sum("hello", 1, 2, 3);

//Overloaded function: a function that has different call signatures and can accept different types.
//function getItemLength (value: string | string[], value2: string | string[]) {}

//defining all the valid ways to call this function 
function getItemLength(name: string): number;   
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames: unknown): number {  //here is the definition of the general function, that handles all the types of inputs
    if(typeof nameOrNames === "string"){
        return nameOrNames.length
    } else if(Array.isArray(nameOrNames)){
        return nameOrNames.length
    }
    return 0
}
console.log(getItemLength(["nombre1","nombre2","nombre3"]))
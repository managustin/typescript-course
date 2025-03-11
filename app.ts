function add(x: number, y: number): number | string { //
    if (x===0){
        return "invalid"
    }
    return x + y
}
console.log(add(0,5));

function makeName(firstName: string, lastName: string, middleName?: string) {   //here the interrogation mark indicates that middleName is optional
    if (middleName) return firstName + " " + " " + middleName + " " + lastName
    return firstName + " " + lastName 
}
const fullName = makeName("Agustín", "Mango");
console.log(fullName);


function callFunc(func: (f: string, l: string, m?: string) => string,   // in this function, the first prop is also a function and all the types 
    param1: string,                                                     // need to be set.
    param2: string
    ) {
        func(param1,param2)     // here, it calls the func and passes the two parameters
}

callFunc(makeName, "Agustín","Mango")   // now we call the function that calls a function


function mul(x: number, y: number): number {
    return x*y;
}

function div(x: number, y: number): number {
    return x/y;
}


function applyFunc(
    funcs: ((a: number, b: number) => number)[], //the first argument is an array of functions that take two arguments that are numbers and returns a number.
    values: [number, number][]  //the second argument is an array of a tuple of numbers
): number[] {   // the applyFunc returns an array of numbers
    const results = [] as number[];
    for(let i=0; i < funcs.length; i++){
        const args = values[i]
        const result = funcs[i](args[0], args[1]);
        results.push(result)
    }
    return results;
}

applyFunc([mul, div], [[1,2], [4,5]])       //mul will have the tuple [1,2] as the different arguments.
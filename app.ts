let x = 2; //this implicitly sets the type of the variable to number

let y: number = 2; //this explicitly sets the type.

let z: number;
z = Infinity;
z = 67.2;

let cadena: string;
cadena = `The z variable is equal to ${z}`;
console.log(cadena);

let result0 = null; //null define explicitly something as empty or non-existent. by default the type is 'any'
let result1 = undefined; //is more used as a placeholder that means a variable has been declared but has not yet been assigned a value
result0 = 2;
result1= 'hello'

let result2: number | undefined = undefined;   //result2 can have either of the two types separated with the union.
result2 = 2;
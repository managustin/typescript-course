let x: any = 1; // 'any' allows to do some weird things with the variable, as follows
x();            // this is probably not gonna compile tho.
console.log(x.length);

let y: unknown = 1; // unknown type provides a way to handle values of uncertain types while maintaining type safety.

if (typeof y == 'number') { // here it was asserted that the type of y is number 
    const result = y + 1;
} else if (typeof y == "string") {
    const result = y.length
}

const result = (y as number) + 1 // type cast



/*Optional Chaining and Bang**/

const arr = [{name: 'robert'}, {name: 'joe'}, {name: 'ana'}]

const el0 = arr.pop()?.name // since the pop method could return 'undefined' (which would throw an error), a question mark is placed.
                            // the ? checks if the result from the statement is undefined or not. If it is, it will assign 'undefined' 
                            // to the variable el. If it's not, it will continue through the chain and look at the next property, i.e., name

const nestedArray = [[{name: "Juan"}]]
const el1 = nestedArray.pop()?.pop()?.name  // another example

const el2 = nestedArray.pop()!.pop()!.name  // the exclamation point operator tells the compiler to ignore the possibility of it being undefined.
"use strict";
//rest parameter: it can take as many arguments as needed
function sum(str, ...numbers) {
    for (let numero of numbers) {
        console.log(numero);
    }
    numbers.forEach(numero => console.log(numero));
}
function getItemLength(nameOrNames) {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    }
    else if (Array.isArray(nameOrNames)) {
        return nameOrNames.length;
    }
    return 0;
}
console.log(getItemLength(["nombre1", "nombre2", "nombre3"]));

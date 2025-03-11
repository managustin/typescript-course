"use strict";
function add(x, y) {
    if (x === 0) {
        return "invalid";
    }
    return x + y;
}
console.log(add(0, 5));
function makeName(firstName, lastName, middleName) {
    if (middleName)
        return firstName + " " + " " + middleName + " " + lastName;
    return firstName + " " + lastName;
}
const fullName = makeName("Agustín", "Mango");
console.log(fullName);

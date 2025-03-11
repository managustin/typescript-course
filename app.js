"use strict";
const person = {
    name: "Agustín",
    age: 23,
    hello: function () {
        console.log(this.name + "says hi");
    }
};
person.hello();

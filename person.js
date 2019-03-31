class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function() {
    console.log(`${this.name} is ${this.age} years old`);
};
*/

/*
    module wrapper function
    (function(exports, require, module, __filename, __dirname){

    })
*/
console.log(`
    Directory: ${__dirname}
    File: ${__filename}
`);

module.exports = Person;

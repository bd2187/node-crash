const referPath = require("./refer-path");
const fsDemo = require("./fs-demo");
const Person = require("./person");

const brandon = new Person("Brandon", 25);

brandon.greeting();

referPath();
fsDemo();

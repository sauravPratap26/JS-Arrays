const pipe =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const exclaim = (str) => str + "!";
const greet = (str) => `Hello, ${str}`;

const greetUser = pipe(capitalize, exclaim, greet);

console.log(greetUser("saurav")); // Hello, Saurav!

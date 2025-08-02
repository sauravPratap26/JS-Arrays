/**
 *  Uppercase names longer than 4 letters
From ["Sam", "Jonathan", "Amy", "Rebecca"] → ["JONATHAN", "REBECCA"]
 */

const upperCase = (x) => x.toUpperCase();
const isFourLetters = (x) => x.length >= 4;
const pushArray = (acc, val) => {
  acc.push(val);
  return acc;
};
const mapT = (fn) => (reducer) => (acc, val) => reducer(acc, fn(val));
const filterT = (fn) => (reducer) => (acc, val) => {
  return fn(val) ? reducer(acc, val) : acc;
};

const compose = (...fns) =>
  fns.reduceRight(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

const transducer = compose(mapT(upperCase), filterT(isFourLetters));

const data = Array.from({ length: 100000 }, (_, i) =>
  i % 3 === 0 ? "Jonathan" : i % 3 === 1 ? "Amy" : "Sam"
);
// const data = ["Sam", "Jonathan", "Amy", "Rebecca"];

const result = data.reduce(transducer(pushArray), []);

const result2 = data
  .filter((data) => isFourLetters(data))
  .map((data) => upperCase(data));
// console.log(result, "\n", result2);

/**
 * 1. Double the odd numbers
Using transducers, transform [1, 2, 3, 4, 5] into [2, 6, 10]
 */

const double = (x) => x * 2;
const filterOdd = (x) => x % 2 != 0;
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

const transducer = compose(mapT(double), filterT(filterOdd));
const data = [1, 2, 3, 4, 5, 6, 8, 15];

const result = data.reduce(transducer(pushArray), []);

console.log(result);

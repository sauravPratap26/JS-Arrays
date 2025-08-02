function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop, receiver) {
      const index = Number(prop);
      if (index < 0) {
        return Reflect.get(target, target.length + index, receiver);
        // return target[target.length + index]; //this works as well
      }
      return Reflect.get(target, index, receiver);
      //   return target[index];
    },

    set(target, prop, value, receiver) {
      const index = Number(prop);
      if (index < 0) {
        return Reflect.set(
          target,
          target.length + index,
          Number(value),
          receiver
        );
      }
      return Reflect.set(target, index, Number(value), receiver);
    },
  });
}

const array1 = [1, 2, 3, 4, 5];
const arr = negativeIndex(array1);
// array1[3] = 100;
// arr[-1] = 33;
// console.log(arr[-1]);
// console.log(arr[3]); //arr[3] = 100
// console.log(arr);

/*******************************************************************************************************************/
const object1 = {
  name: "saurav",
  getName: function () {
    console.log(this.name);
  },
};

function logProperty(obj) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      console.log(`Accessing ${prop}`);
      return Reflect.get(...arguments);
    },
  });
}

const newObj = logProperty(object1);
newObj.getName();

//output:
// Accessing getName
// Accessing name
// saurav
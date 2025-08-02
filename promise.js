function add(a, b) {
  return Promise.resolve(a + b);
}

async function Add(a, b) {
  return a + b;
}
function newAdd(a, b) {
  return a + b;
}
console.log(add(10, 30));
console.log(Add(3, 3));
console.log(newAdd(100, 200));
add(10, 30).then((data) => console.log(data));

/*
outputs:
Promise { 40 }
Promise { 6 }
300
40
**/

const person = {
  nationality: "Indian",
  speak: () => {
    console.log("Hello");
    return "inside parent";
  },
};

const user = Object.create(person); // user inherits from person
user.name = "Saurav";
user.age = 25;
user.doSomething = () => {
  return "doing fun";
};
// console.log(user) //{ name: 'Saurav', age: 25 }
// console.log(user.speak())

for (let entry in user) {
  console.log(entry, ":", user[entry]);
}

console.log("********");

for (let entry in user) {
  if (user.hasOwnProperty(entry)) {
    console.log(entry, ":", user[entry]);
  }
}

console.log("********");

Object.keys(user).forEach((entry) => {
  console.log(entry, ":", user[entry]);
});

console.log("********");

Object.values(user).forEach((entry) => console.log(entry));

console.log("********");
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});

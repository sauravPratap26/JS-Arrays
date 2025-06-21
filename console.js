const person = {
  nationality: "Indian",
  speak: () => {
    console.log("Hello");
    return "inside parent";
  },
};

let boolCheck = false;
let random1 = 10;
let random2 = 20;
console.assert(boolCheck,random1,random2);
// console.clear()
// console.log("okay")

console.dir(person) //dir is only helpful in the browser to see things properly

//the group and groupCollapsed mark the start and all the consoles after it and before groupEnd will appear structured
console.groupCollapsed("Info") //console.group("Info")
console.log("saurav")
console.log("singh")
console.groupEnd()

console.time("process");

setTimeout(() => {
  console.timeLog("process"); // Logs time since console.time("process") was called
}, 500);

setTimeout(() => {
  console.timeEnd("process"); // Stops the timer and logs final time
}, 1000);

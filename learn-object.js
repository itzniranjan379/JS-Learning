// object :- is a collection of data that holds key value pair.

/*let laptop = {
  name: "HP",
  model: "victus",
  generation: "i5",
  color: "blue",
  price: 70000,
};

console.log(laptop);

// 2 method to differentiate name

console.log(laptop.name); // method 1

console.log(laptop["name"]); // method 2*/

/*let employee = {
  name: "Niranjan",
};
console.log(employee);

// to add new property

employee.programming = "Harsha";

employee["id"] = 1234;

console.log(employee);*/

// let employee = {
//   name: "David",
//   id: 379,
// };

// console.log(Object.keys(employee));     // to print key
// console.log(Object.values(employee));      // to print values

let person1 = {
  name: "Niranjan",
};
let person2 = {
  name: "Harsha",
  number: 1234,
};
let output = Object.assign(person1, person2);
console.log(output);

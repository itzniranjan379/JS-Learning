// String conactenation

/*let first = "Niranjan";
let last = "Ramachandra";

let name = first + " " + last;
console.log(name);
console.log(first.length);           // length of string
console.log(first.repeat(3));*/ // to repeat string

// problem 1

let n = 5;

/*for (let i = 0; i <= n; i++) {
  let string = "*";
  console.log(string.repeat(i));
}*/

// Problem 2

/*for (let i = 1; i <= n; i++) {
  let str = "";
  str += " ".repeat((n - i) * 2);
  str += "* ".repeat(i);
  console.log(str);
}*/

// problem 3

for (let i = 1; i <= n; i++) {
  let str = "";
  str += " ".repeat(n - i);
  str += "* ".repeat(i);
  console.log(str);
}

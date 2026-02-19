/*let array = ["India", "Srilanka"];
console.log(array);

array.push("Australia");
console.log(array);

array.pop("Australia");
console.log(array);

array.unshift("zimbambwe");
console.log(array);

array.shift();
console.log(array);*/

/*let array = ["a", "z", "e", "b", "h"];
console.log(array);

console.log(array.sort());

console.log(array.reverse());

console.log(array.join(""));*/

// Problem 1 :- write a JS Program which access input array=[1,2,3,4,5,6];  final = 7;  output = [[0,5],[1,4],[2,3]];

/*let array = [1, 2, 3, 4, 5, 6];
let final = 7;
let output = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i] + array[j] === final) {
      output.push([i, j]);
    }
  }
}

console.log(output);*/

let arr = ["David", 28, false];

console.log(arr);

// Problem 2 :- write a JS Program to find out wheather your input string is a Palindrome ?

/*let str = "sir";

let output = str.split(" ").reverse().join(" ");
if (str === output) {
  console.log("Its a palindrome");
} else {
  console.log("Not a palindrome");
}*/

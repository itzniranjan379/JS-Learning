// Array is an object which ll be used to store the collection of data.

/*let array = ["1", "2", "3", "4"];

console.log(array);
console.log(array[0]);
console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log("value is", array[i]);
}*/

// question :- Write a JS Program to calculate the occurance of letter 'a' ?

let str = "I am in Bangalore";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    count++;
  }
}

console.log("Number of occurrences of 'a': " + count);

// question :- find a largest word in the string

let string = "I am in Bangalore";

let words = str.split(" ");

let largestword = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > largestword.length) {
    largestword = words[i];
  }
}

console.log("Largest word is: " + largestword);

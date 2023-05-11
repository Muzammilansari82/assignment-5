// 1 Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.
const array = [2, 7, 11, 15];
const target = 13;
const pair = findPair(array, target);


function findPair(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }

  return null;
}

console.log("1 Answer");
console.log(pair);

//2 Write a function that takes a string as input and returns the reverse of the string.

function reverseString(str) {
  return str.split("").reverse().join(" ");
}

console.log("2 Answer");
console.log(reverseString("bano qabil")); 


//3 Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

const number = [1, 2, 35, 4, 15, 6, 7, 10]
const sum = sumoftwo(number);


function sumoftwo(ppl) {
  ppl.sort(function(a, b) {
    return b - a;
  });
  return ppl[0] + ppl[1];

}

console.log("3 Answer");
console.log(sum)

//end

//4 Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

const strings = ["muzammil", "haseeb", "ali", "at"];
const filteredStrings = filterStrings(strings);

function filterStrings(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log("4 Answer");
console.log(filteredStrings); 

//end

//5 Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = EvenNumbers(numbers);

function EvenNumbers(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log("5 Answer");
console.log(evenNumbers);
//7 Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

const str1 = "racecar";
const str2 = "hello";

function pal(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  
  return true;
}

console.log("7 Answer");
console.log(pal(str1)); // Output: true
console.log(pal(str2)); // Output: false

//9 Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.
var arr1 = ["helloworld", "hey"]

function abc(arr) {
  let newarray = []
  for (let i = 0; i < arr.length; i++) {
    const l = arr1[i].length;
    newarray.push(l);
  }
  return newarray;
}

console.log("9 Answer");
console.log(abc(arr1))

//end 

//10 Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

const numberS = [2, 7, 12, 5, 9, 11];
const index = hello(numberS);

function hello(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      return i;
    }
  }
  return -1;
}

console.log("10 Answer");
console.log(index);


// Question 1
// Create an array with three elements and print out the second element.

// Ans 1.
// let arr = ["Shaad", "Farman", "Rashid"];
// let ans = arr.at(1);
// console.log(ans);
// console.log(arr[1]);

// Question 2
// Create an array with five elements and print out the length of the array.

// Ans 2.
// let arr = ["shaad", "shoreb", "farman", "rashid", "naruto"];
// console.log(arr.length);

// Question 3.
// Create an array with four elements and print out each element using a for loop.

// Ans 3.
// let arr = [0, 1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Question 4
// Create an array with six elements and print out each element using a forEach loop.

// Ans 4.
// let arr = ["shaad", "shoreb", "rashid", "farman", "kabir"];
// arr.forEach((value) => {
//   console.log(value);
// });

// Question 5
// Create an array with three elements and add a fourth element to the end of the array.

// Ans 5.
// let arr = ["shaad", "shoreb", "rashid"];
// arr.push("neha");
// console.log(arr);

// Question 6
// Create an array with four elements and remove the second element.

// Ans 6.

// let arr = ["shaad", "shoreb", "rashid", "riba"];
// arr.splice(1, 1);
// console.log(arr);

// Question 7
// Create an array with five elements and remove the last element.

// Ans 7
// let arr = ["shaad", "shoreb", "rashid", "riba", "shanaya"];
// arr.pop();
// console.log(arr);

// Question 8
// Create an array with three elements and check if the array includes a specific value.

// Ans 8.

// let arr = ["shaad", "shoreb", "rashid"];
// let ans = arr.includes("shoreb");
// console.log(ans);

// Question 9
// Create an array with five elements and sort the array in ascending order.

// Ans 9.
// let arr = [32, 5, 56, 67, 87];
// let ans = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(ans);

// Question 10
// Create an array with five elements and sort the array in descending order.

// Ans 10.
// let arr = [5, 9, 2, 3, 8];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);

// Question 11
// Create two arrays, concatenate them and print out the resulting array.

// Ans 11.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [32, 5, 56, 67, 87];

// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i]);
// }

// console.log(arr2);

// const arr = [10, 2, 9, 41, 35];
// const arr2 = [9, 45, 234, 56];
// console.log(arr.concat(arr2));
// console.log(arr2.concat(arr));

// Question 12
// Create an array with three elements and convert it to a string.

// Ans 12.
// let arr2 = [32, 5, 56];
// let ans = arr2.toString((value) => {
//   return value;
// });

// const arr = [10, 2, 9];
// arr.toString();
// console.log(arr);   ???????????????????????????????????????????????????

// console.log(ans);

// Question 13
// Create an array with four elements and reverse the order of the elements.

// Ans 13.
// let arr = ["shaad", "shoreb", "sana", "shreen"];
// arr.reverse();
// console.log(arr);

// Question 14
// Create an array with five elements and find the index of a specific value.

// Ans 14.
// let arr = ["shaad", "shoreb", "sana", "shreen", "saba"];
// let ans = arr.indexOf("shreen");
// console.log(ans); ?????????????????????????

// Question 15
// Create an array with six elements and slice the array to create a new array with the first three elements.

// Ans 15.
// let arr = ["shaad", "shoreb", "sana", "shreen", "saba", "saniya"];
// let ans = arr.slice(3, 6);
// console.log(ans);

// Question 16
// Create an array with six elements and use the map method to double each element.

// Ans 16.
// let arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.map((value) => {
//   return value * value;
// });
// console.log(ans);

// Question 17
// Create an array with four elements and use the while loop to calculate the sum of all elements.

// Ans 17.

// let arr = [2, 3, 4, 5];
// let sum = 0;
// let i = 0;
// while (i < arr.length) {
//   sum = sum + arr[i];
//   i++;
// }
// console.log(sum);

// Question 18
// Create an array with five elements and use the filter method to return only the even numbers.

// Ans 18.
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.filter((value) => {
//   return value % 2 === 0;
// });
// console.log(ans);

// Question 19
// Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

// Ans 19.
// let arr = ["shaad", "shoreb", "sehfeen"];
// let ans = arr.join("-");
// console.log(ans);

// Question 20
// Create two arrays with three elements each and use the concat method to combine them into a new array.

// Ans 20.
// let arr1 = ["shaad", "shoreb", "zubair"];
// let arr2 = ["shreen", "salima", "zack"];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i]);
// }

// for (let i = 0; i < arr2.length; i++) {
//   arr3.push(arr2[i]);
// }
// console.log(arr3);

// const arr = [10, 2, 9, 4];
// const arr2 = [4, 56, 234, 554];
// console.log(arr.concat(arr2));
// console.log(arr2.concat(arr));

// Question 1.
// Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

// Ans 1.
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("orange"));

// Question 2.
// Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

// Ans 2.

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(ans);

// Question 3.

// Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

// Ans 3.
// ???????????????????????

// Question 4.

// Given an array of strings, write a function that returns the longest string in the array.

// Ans 4.
let arr = ["shaad", "rohan", "nisha", "tousif", "danish"];
let ans = arr.forEach((prev, curr) => {
  return prev.length > curr.length;
}, 0);
console.log(ans);

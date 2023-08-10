// let arr = [1, 2, 3, 4, 5];
// let arr3 = [10, 20, 30];
// let arr2 = [...arr, ...arr3];
// console.log(arr2);

// let str = "wecode academy";
// let arr = [...str];
// console.log(arr);

// function sum(...arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }

// sum(1, 2, 3, 4, 5, 100, 3000);

// let arr = [1, [10, 20], 2, 3, 4, 5];
// let arr2 = [...arr];
// arr.push(10);
// arr2.push(1000);
// arr[1].push(500);
// console.log(arr);
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5];
// let [one, two, ...othrs] = arr;
// console.log(one, two, othrs);

// What is destructuring

// const arr = [1, 2, 3, 4, 5];
// const [one, two, , , five] = arr;
// console.log(one, two, five);

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [, , , , , , , , nintee] = arr;
// console.log(nintee);

// Reverse values using destructuring

// let a = 10;
// let b = 1000;
// [a, b] = [b, a];
// console.log(a, b);

// Return two values from function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function sum() {
//   return [1, 2, 3, 4, 5];
// }

// let ans = sum();
// console.log(sum());

// let arr = [1, 2, 3, [20, 30], 4, 5];
// let arr2 = [...arr];
// arr.push(100);
// arr2.push(500);
// arr[3].push(300);
// console.log(arr2, arr);

// let arr = [1, 2, 3, [20, 30], 4, 5];
// let arr2 = JSON.parse(JSON.stringify(arr));
// arr.push(100);
// arr2.push(500);
// arr[3].push(300);
// console.log(arr2, arr);

// Setting default values
// const arr = [1, 2, 3];
// const [one = 10, two = 20, three = 30] = arr;
// console.log(one, two, three);

// Return two values from function
// Destructuring of nested array
// Destructuring Objects
// Different property name
// Default values
// Nested Object
// In Function

// const arr = [1, 2, 3];
// const arr1 = [10, 20, 30];
// const arr3 = [1000, 2000, 3000];
// const arr2 = [...arr1, ...arr3, ...arr];
// console.log(arr2);

// let a = 10;
// let b = 20;
// let c = a;
// console.log(c);
// a = b;
// console.log(a);
// b = c;
// console.log(b)

// let arr = [1, 2, 3, [6, [10, 20, 30], 7], 5];
// let [one, , , [six, [, , thirty]], five] = arr;
// console.log(one, six, thirty, five);

// let obj = {
//   //   name: "shaad",
//   age: 40,
//   inspiration: "israel adesanya",
//   address: {
//     city: "indore",
//     pincode: 278392,
//   },
// };

// let {
//   name: myName = "israel",
//   age = 50,
//   address: { pincode },
// } = obj;
// console.log(myName, age, pincode);

// let obj = {
//   name: (myName = "shaad"),
//   age: 40,
//   number: 8236481287,
//   address: {
//     city: "indore",
//     pincode: 642667,
//   },
// };

// let {
//   name = "danish",
//   age = 78,
//   address: { city },
// } = obj;
// console.log(name, age, city);

// function printDetail({ age, number }) {
//   console.log(age, number);
// }

// printDetail(obj);

// let obj = {
//   name: "dada",
//   age: 22,
//   phoneNumber: 7975739753,
//   address: {
//     city: "indore",
//     state: "MP",
//     pincode: "302012",
//   },
// };

// function printObj({ name, age, address: { city } }) {
//   console.log(name, age, city);
// }
// printObj(obj);

// What is destructuring

// const arr = [1, 2, 3, 4];
// const [one, two, ...others] = arr;
// console.log(one, two, others);

// Reverse values using destructuring

// let a = 10;
// let b = 200;
// [a, b] = [b, a];
// console.log(a, b);

// Return two values from function

// function print() {
//   return [1, 2, 3, 4, 5, 6, 7, 88];
// }

// console.log(print());

// Destructuring of nested array

// const arr = [1, 2, [20, [400, 500], 30], 3, 4, 5];
// const [one, , [tweenty, [, fiveHundred]], three, ,] = arr;
// console.log(one, tweenty, fiveHundred, three);

// Setting default values
// const arr = [, 2, [, [400], 30], , 4, 5];
// const [one = 101, , [tweenty = 2020, [, fiveHundred = 5050]], three = 333, ,] =
//   arr;
// console.log(one, tweenty, fiveHundred, three);

// Destructuring Objects

// let obj = {
//   name: "shaad",
//   age: 22,
//   religion: "Muslim",
//   address: {
//     city: "indore",
//     pincode: 788745,
//   },
// };
// let {
//   name: myName = "sexy",
//   age,
//   address: { city },
// } = obj;
// console.log(myName, age, city);

// Extract value
// let arr = [1, 2, 3, 4, 5];
// let [one, two, ...other] = arr;
// console.log(one, two, other);

// Different property name

// Default values

// Nested Object
// let obj = {
//   name: "shaad",
//   age: 22,
//   religion: "Muslim",
//   address: {
//     city: "indore",
//     pincode: 788745,
//   },
// };

// let {
//   name: myName,
//   address: { pincode },
// } = obj;
// console.log(myName, pincode);

// In Function

// let obj = {
//   name: "shaad",
//   age: 22,
//   religion: "Muslim",
//   address: {
//     city: "indore",
//     pincode: 788745,
//   },
// };

// function print({ name, age, religion }) {
//   console.log(name, age, religion);
// }

// print(obj);

// ****************************************************

// The Spread Operator

// Assigning values

// Copy Array

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// console.log(arr2);

// Join 2 Arrays

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [10, 20, 30, 40];
// let ans = [...arr, ...arr1];
// console.log(ans);

// String tarray using spread

// let str = "wecode academy";
// console.log(...str);

// Passing arguments in function
// function sum(...arr) {
//   let sum = 0;
//   for (let i = 1; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }
// sum(1, 2, 3, 4, 5, 6);

// Shallow copy
// let arr = [1, 2, [50, 60], 3, 4, 5];
// let arr2 = [...arr];
// arr.push(100);
// arr2.push(900);
// arr[2].push(1000);
// console.log(arr, arr2);

// Assign values
// Rest element last element
// Assign values in object
// Variable arguments in function

// let arr = [1, 2, 3, 4, 5];
// let [one, two, ...others] = arr;
// console.log(one, two, others);

// let obj = {
//   name: "shaad",
//   age: 20,
//   email: "shaadalihashmi@gamil.com",
// };
// let { name, ...others } = obj;
// console.log(name, others);

// let arr = [1, 2, 3, 4, 5, 6];
// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// sum(...arr);

// let obj = {
//   name: "shaad",
//   sum(a, b) {
//     console.log(a + b);
//   },
// };

// obj.sum(1, 2);

// let age = 25;
// let name = "Wecode";
// let obj = {
//   name: name,
//   age: age,
// };

// console.log(name, age);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [100, 200];
// let arr3 = [90, 50];
// let ans = [...arr3, ...arr2, ...arr1];
// console.log(ans);

let arr = [, , 3, 4];
let [one = 200, two = 50, , , five = 100] = arr;
console.log(one, two, five);

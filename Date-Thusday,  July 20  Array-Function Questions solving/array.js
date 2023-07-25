//Question 1. Check if the array is sorted in ascending order.

// Ans 1.

// let arr = [1, 2, 3,  40, 4, 5, 6, 7, 8, 9];
// let flag = true;
// for (let i = 0; i < arr.length - 1; i++) {
//   let ascd = arr[i];
//   let ascd2 = arr[i + 1];
//   if (ascd < ascd2) {
//     continue;
//   } else {
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("In ascending ");
// } else {
//   console.log("not");
// }

// Question 2. Check if the array is sorted in descending order.

// Ans 2.

// let arr = [9, 8, 7, 6, 5, 20, 4, 3, 2, 1];
// let flag = true;
// for (let i = 0; i < arr.length - 1; i++) {
//   let des = arr[i];
//   let des1 = arr[i + 1];

//   if (des > des1) {
//     continue;
//   } else {
//     flag = false;
//     break;
//   }
// }

// if (flag) {
//   console.log("IN descending Order");
// } else {
//   console.log("Not in descending order");
// }

// Question 3. Concat two Arrays but without using concat function

// Ans 3.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr3.push(arr[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3.push(arr2[i]);
// }
// console.log(arr3);

// Question 4. Count the total number of odd numbers in the array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let countOdd = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     ++countOdd;
//   }
// }
// console.log(countOdd);

// Question 5. Count the total number of even numbers in the array

// Ans 5.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let countEven = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     countEven = countEven + 1;
//   }
// }
// console.log(countEven);

// Question 6. Create a new Array from existing Array using push function

// let arr = [1, 2, 3, 4, 5, 6, "shaad Papa", 7, 8, 9];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]);
// }
// console.log(arr2);

// Question 7. Find the average of the Array

// Ans 7.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// let avg = sum / arr.length;
// console.log(avg);

// Question 8. Find the largest word in the Array

// Ans 8. ???

// Question 9. Create an array of names and sort it using a sort function (do it for practice then we will discuss in the class)

// Ans 9.

// let arr = ["shaad", "wecode Academy", "Friend", "Zaid", "Hello"];

// Question 10. Now perform the below actions

// Push 3 numbers
// Unshift 3 numbers
// Pop 2 numbers
// Push 1 number
// Unshift 1 number
// Shift 2 numbers

// Now check the result and match

// Ans 10.
// let array = [];
// array.push(50);
// array.push(50);
// array.push(50);
// console.log(array);
// array.unshift(10);
// array.unshift(10);
// array.unshift(10);
// console.log(array);
// array.pop();
// array.pop();
// console.log(array);
// array.push(500);
// console.log(array);
// array.unshift(500);
// console.log(array);
// array.shift();
// array.shift();
// console.log(array);

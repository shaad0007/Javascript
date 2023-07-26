// 1. Find value greater than 20 using find function

// Ans 1.
// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let ans = arr.find(function test(value) {
//   return value > 20;
// });
// console.log(ans);

// 2. Find string length greater than 10 using find function

// Ans 2.
// let arr = ["shaad", "Wecode academy", "rohan", "soniya", "kritika"];

// let ans = arr.find((value) => {
//   return value.length > 10;
// });
// console.log(ans);

// 3. Filter all numbers less than 100

// Ans 3.
// let arr = [20, 50, 80, 100, 300, 500, 400];
// let ans = arr.filter(function test(value) {
//   return value < 100;
// });
// console.log(ans);

// 4. Filter all numbers greater than 50 and multiple of 5

// Ans 4.
// let arr = [20, 40, 50, 100, 200, 300, 353, 421, 420];
// let ans = arr.filter(function test(value) {
//   return value > 50 && value % 5 === 0;
// });
// console.log(ans);

// 5. Filter all words with length > 5 and contains world 'World' in itself for example Hello World, Computer World

// Ans 5.
// let arr = ["Shaad", "World of Heaven", "Wecode World", "Sabiha"];
// let ans = arr.filter(function test(value) {
//   return value.length > 5 && value.includes("World");
// });
// console.log(ans);

// 6. Calculate sum of all the numbers of array using reduce function

// Ans 6.
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.reduce(function test(prev, current) {
//   return prev + current;
// }, 0);
// console.log(ans);

// 7. Calculate total words with length > 5 in an array using reduce and filter function. Dono se krna hai alag alag

// Ans 7.
// let arr = ["shaad", "baba", "sabir", "arebaz", "tirth parsana"];
// let ans = arr.reduce(function test(prev, current) {
//   if (current.length > 5) {
//     return prev + current;
//   }
// }, 0);
// console.log(ans);   ????

// 8. Convert any odd number to even number using map function

// Ans 8.
// let arr = [3, 501];
// let ans = arr.map(function test(value) {
//   return value * 2;
// });
// console.log(ans);

// 9. Convert any even number to odd number using map function

// Ans 9.
// let arr = [2, 502, 2010];
// let ans = arr.map(function test(value) {
//   return value / 2;
// });
// console.log(ans);

// 10. Check if every number is multiple of 5 or not in the array using every function

// Ans 10.
// let arr = [5, 15, 20, 45, 65, 70];
// let ans = arr.every(function test(value) {
//   return value % 5 === 0;
// });

// console.log(ans);

// 11. Check if any number is multiple of 5 and less than 10 using some function

// Ans 11.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans = arr.some(function test(value) {
//   return value % 5 === 0 && value < 10;
// });
// console.log(ans)

// let arr = ["shaad", 1, 32, false, 0, true];
// let ans = arr.filter(function test(value) {
//   return true;
// });
// console.log(ans);

// let arr = ["shaad", true, false, 0, "nidhi", "simba"];
// let ans = arr.filter(function test(value) {
//   return true;
// });
// console.log(ans);

// let arr = ["shaad", true, "nidhi", "simba"];
// let ans = arr.forEach((value) => {
//   console.log(value);
// });
// console.log(ans);

// let arr = [20, 40, 1, 3, 6, 7, 34, 5];
// let ans = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(ans);

// let arr = [20, 40, 1, 3, 6, 7, 34, 5];
// let ans = arr.sort((a, b) => {
//   return b - a;
// });
// console.log(ans);

// let arr = [20, 40, 1, 3, 6, 7, 34, 5];
// let ans = arr.toString((value) => {
//   return value;
// });
// console.log(ans);

// let arr = [20, 40, 1, 3, 6, 7, 34, 5];
// let ans = arr.join((value) => {
//   return value;
// });
// console.log(ans);

const arr = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArr = arr.flat(5); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenedArr);

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

let arr = [1, 2, 3, 4, 5];
let [one, two, ...othrs] = arr;
console.log(one, two, othrs);

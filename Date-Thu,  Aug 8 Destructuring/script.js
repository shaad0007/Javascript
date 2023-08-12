// const arr = [1, 2, 3, 4, 5];

// const [one, two, , four] = arr;
// console.log(one, two, four);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const [, , , , , , , , , , , , , , fifteen] = arr;
// console.log(fifteen);

// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr;
// arr.push(100);
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, [10, 20], 4, 5];

// const arr2 = JSON.parse(JSON.stringify(arr));
// arr.push(500);
// arr2.push(300);
// arr2[3].push(800);
// console.log(arr);
// console.log(arr2);

// const arr = [100, 200, 300, 400, 500];
// const [one = 10, two = 20, three = 30] = arr;
// console.log(one, two, three);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [10, 20, 30, 40];
// const arr3 = [500, 600];

// const arr4 = [...arr2, ...arr3, ...arr1];
// console.log(arr4);

// let a = 10;
// let b = 20;
// let c = 50;
// let c = a;
// console.log(c);
// a = b;
// console.log(a);
// b = c;
// console.log(b);
// [a, b, c] = [c, b, a];
// console.log(a, b, c);

// function getDetail() {
//   return [1, 2];
// }
// console.log(getDetail());

// const arr = [1, 2, 3, [10, [20, 40], 20], 4, 5];
// const [one, , , [ten, [, fourty]], , five] = arr;
// console.log(one, ten, fourty, five);
// const [, , three, [, [, fourty], tweenty], , five] = arr;
// console.log(three, fourty, tweenty, five);

// let obj = {
//   name,
//   address: {
//     city: "jaipur",
//     country: "india",
//     pincode: "302012",
//   },
//   class: 10,
//   mobile: 823873298375,
// };
// let {
//   name = "shaad",
//   mobile,
//   address: { pincode },
// } = obj;
// console.log(name, mobile, pincode); //  ye const mein hi chl rhe hai sahi se ???????????????????????????????

// const arr1 = [1, 2, 3, 4];
// const arr2 = [10, 20, 30, 40];
// const arr3 = [100, 200, 300, 400];
// const arr = [...arr3, ...arr2, ...arr1];

// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const [one, two, three, four] = arr1;
// console.log(one, two, three, four, (five = 200));

// const person = {
//   name: "shaad",
//   age: 60,
//   address: {
//     pincode: 302012,
//   },
// };

// let arr = [
//   {
//     name: "rohan",
//     age: 3,
//     city: "udaipur",
//   },
//   {
//     name: "naveen",
//     age: 70,
//     city: "jaipur",
//   },
//   {
//     name: "sourabh",
//     age: 30,
//     city: "indore",
//   },
// ];
// let ans = arr.find((val) => {
//   return val.age === 70;
// });
// console.log(ans);

// let map = new Map();
// map.set({ name: "shaad" }, 100);
// map.set(1);
// map.set(2);
// map.set(3);
// map.set(4);
// console.log(map.get({ name: "shaad" }));

// const arr = [10, 20, 30, 40, 50];
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [100, 20, 3000, 40, 5];
// const arr3 = [1, 2, 3, 4, 5];
// const arr4 = [47, 50];

// const [one, two, , , fifty] = arr;
// const [one] = arr1;
// const [, , , , five] = arr2;
// const [, , three] = arr3;
// const [, two] = arr4;
// console.log(one, two, three, five);
// // const one = arr[0];
// const two = arr[1];
// const three = arr[2];
// const four = arr[3];
// console.log(one, two, three, four);
// const [one, two, , , five] = arr;
// console.log(one, two, five);

// const arr1 = [1, 2, 3, 4, 5, 6, [50, 60], 7, 8, 9];
// const arr2 = JSON.parse(JSON.stringify(arr1));
// arr1.push(100);
// arr2.push(900);
// arr2[6].push(500);
// console.log(arr2);
// console.log(arr1);

// const arr = [10];
// const [one = 100, two = 200, three = 300] = arr;
// console.log(one, two, three);

// const arr1 = [1, 2, 3, 4, 5];
// const arr3 = [500];
// const arr2 = [10, 20];
// const arr4 = [...arr2, ...arr3, ...arr1];
// console.log(arr4);

// let c = 1000;
// let v = 30000;
// [c, v] = [v, c];
// console.log(c, v);

// const arr1 = [1, 2, 3, 4, 5, [50, [1000, 2000, 3000], 60], 6, 7, 8, 9];
// const [, , , , , [fifty, [, , three]], , sev, ,] = arr1;
// console.log(fifty, three, sev);

// const obj = {
//   name: "shaad",
//   phone: 4124729749,
// age: 80,
//   address: {
//     city: "indore",
//     pincode: 4832627684,
//     singer: "randeep",
//   },
// };

// const {
//   age: myAge = 12,
//   phone: myPhone,
//   address: { pincode },
// } = obj;
// console.log(myAge, myPhone, pincode);

// const obj = {
//   name: "shaad",
//   phone: 4124729749,
//   age: 80,
//   address: {
//     city: "indore",
//     pincode: 4832627684,
//     singer: "randeep",
//   },
// };
// function printDetail({ name, age }) {
//   console.log(name, age);
// }

// printDetail(obj);

// const obj = {
//     name: "shaad",
//   mobileNumber: 4248464864,
//     email: "shaadalihashmi@gmail.com",
//   address: {
//     city: "jaipur",
//     pincode: 473432,
//   },
// };

// const { name: wow = "rishi", email: ruku = "jaya@gamil.com" } = obj;
// console.log(wow, ruku);

// The Spread Operator
// Assigning values
// Copy Array
// Join 2 Arrays
// String tarray using spread
// Passing arguments in function
// Shallow copy

// const arr = [1, 2, 3, 4, 5];
// const [one, two, ...other] = arr;
// console.log(one, two, other);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [10, 20, 30];
// let arr3 = [...arr, ...arr2];
// console.log(arr3);

// let str = "wecode academy";
// let ans = [...str];
// console.log(ans);

// function sum(...val) {
//   console.log(val);
//   let sum = 0;
//   for (let i = 0; i < val.length; i++) {
//     sum = sum + val[i];
//   }
//   console.log(sum);
// }

// sum(1, 2, 3, 4, 5, 2, 3, 54, 66, 56, 5, 65, 6);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// arr2.push(1000);
// console.log(arr2, arr);

// Assign values
// Rest element last element
// Assign values in object
// Variable arguments in function

// let obj = {
//   name: "shaad",
//   age: 35,
//   class: 10,
// };

// let { name, ...other } = obj;
// console.log(name, other);

// let arr = [1, 2, 100, 4, 5];
// function sum(a, b, c) {
//   console.log(a + b + c);
// }

// sum(...arr);

// Enhanced Object literals
// Exactly same name
// Function in object
// Computer property name

// let ans = +prompt("what is your age");
// let obj = {
//   name: "shaad",
//   ["age" + ans]: 34,
//   city: "jaipur",
// };

// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [100, 200];
// let arr3 = [99, 55, 33];
// let ans = [...arr3, ...arr1, ...arr2];
// console.log(ans);

// let arr = [, , 3, 4];
// let [one = 50, two = 150, , , five = 200] = arr;
// console.log(one, two, five);

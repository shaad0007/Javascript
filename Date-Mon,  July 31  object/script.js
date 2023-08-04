// let obj = {
//   bankName: "SBI",
//   mobileNo: 95327593475,
//   house: {
//     color: "white",
//     nest: "dense",
//   },
//   address: "jaipur",
//   accountHolderName: "shaad",
//   deposit: function () {
//     console.log("Deposit function");
//   },
//   withdraw: function () {
//     console.log("Withdraw function");
//   },

//   arr: [1, 2, 3, 4, 5, 6, 7, 8, , 9],
// };
// console.log(Object.keys(obj.house));
// console.log(Object.values(obj));
// console.log(Object.entries(obj.house));
// console.log(Object.entries(obj));
// console.log(obj);

// let student = {
//   name: "shaad",
//   sex: {
//     gender: "male",
//     friend: "tousif",
//     sex: {
//       gender: "male",
//       friend: "tousif",
//       sex: {
//         gender: "male",
//         friend: "tousif",
//       },
//     },
//   },

//   address: "indra nagar",
//   mobileNo: 7594375937,
//   feeDeposit: function () {
//     console.log("fee deposit");
//   },
//   takeClass: () => {
//     console.log("take class");
//   },
//   id: 101,
//   arr: [1, 2, 3, 4, 5, 6, 78, 8],
//   12: 2000,
//   age: 12,
//   age2: 100,
// };

// console.log(student.sex.sex.sex.friend);
// console.log(student["sex"]["sex"]["sex"]["friend"]);

// console.log(student["12"]);

// console.log(
//   student.name,
//   student.address,
//   student.mobileNo,
//   student.id,
//   student.arr
// );

// student.feeDeposit();
// student.takeClass();

// console.log(student);

// let obj = new Object();
// console.log(student.age + 2);
// console.log(student["age" + 2]);

// let age = +prompt("what is your age");

// let obj = {
//   ["age" + age]: 5000,
// };
// console.log(obj);
// console.log(obj["age" + age]);

// let arr = [1, 2, 3, 4, 5, 6];
// for (let value of Object.values(obj)) {
//   console.log(value);
// }
// for (let value of Object.keys(obj)) {
//   console.log(value);
// }
// for (let value of Object.entries(obj)) {
//   console.log(value[0], value[1]);
// }

// Question 3: How do you loop through the properties of an object in JavaScript?

// let obj = {
//   bankName: "SBI",
//   mobileNo: 95327593475,
//   house: {
//     color: "white",
//     nest: "dense",
//   },
//   address: "jaipur",
//   accountHolderName: "shaad",
//   deposit: function () {
//     console.log("Deposit function");
//   },
//   withdraw: function () {
//     console.log("Withdraw function");
//   },

//   arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
// };

// for (let value of Object.keys(obj)) {
//   console.log(value);
// }
// for (let value of Object.values(obj)) {
//   console.log(value);
// }
// for (let value of Object.entries(obj)) {
//   console.log(value[0], value[1]);
// }

// for (let value of Object.entries(obj)) {
//   console.log(value[0], value[1]);
// }

// let obj = {
//   bankName: "SBI",
//   house: "guadi",
//   color: "white",
//   nest: "dense",
// };

// let val = Object.keys(obj);
// val.sort((a, b) => {
//   return b - a;
// });

// console.log(val);

// let obj = {
//   name: "shaad",
//   car: "ciat",
//   color: "coper",
//   arr: [1, 2, 3, 4, 5],
//   feeDeposit: () => {
//     console.log("deposit fee");

//   },
// };

// console.log(obj.name);

// for (let value of Object.entries(obj)) {
//   console.log(value);
// }
// console.log(obj.feeDeposit());

// let set = new Set();
// set.add(1);
// set.add(1);
// set.add(2);
// set.add(2);
// set.clear();
// console.log(set);
// set.delete(2);
// set.delete(1);
// console.log(set.has(1));
// console.log(set.forEach());
// console.log(set);

// let obj = {
//   name: "shaad",
//   id: 101,
//   color: "black",
//   rollNo: 302012,
// };

// for (let value of Object.keys(obj)) {
//   console.log(value);
// }
// for (let value of Object.values(obj)) {
//   console.log(value);
// }
// for (let value of Object.entries(obj)) {
//   console.log(value);
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let obj = {
//   name: "shaad",
//   rollNumber: 748724724,
//   id: 7,
//   phone: 734723432,
//   school: "smart kids school",
//   friend: "tousif",
//   teacher: "sajid sir",
// };

// for (let value of Object.entries(obj)) {
//   console.log(value[0], value[1]);
// }
// for (let value of Object.keys(obj)) {
//   console.log(value);
// }
// for (let value of Object.values(obj)) {
//   console.log(value);
// }

// let obj = {
//   yourName: () => {
//     return "shaad";
//   },
// };

// console.log(obj.yourName());

// let obj = {
//   name: "shaad",
//   rollNumber: 748724724,
//   id: 7,
//   phone: 734723432,
//   school: "smart kids school",
//   friend: "tousif",
//   teacher: "sajid sir",
// };

// for (let value of Object.entries(obj)) {
//   console.log(value[0], value[1]);
// }

// Question 7.?????????????????????????????????????????????????????????
// let obj = {
//   name: "shaad",
//   school: "smart",
//   friend: "tousif",
//   teacher: "sajid",
// };
// for (let value of Object.keys(obj)) {
//   value.sort((a, b) => {
//     console.log(a - b);
//   });
//   console.log(obj.sort());
// }

// let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2];
// let set = new Set(arr);
// console.log(set);

// let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2];
// let arr1 = [];
// for (let value of arr) {
//   if (arr1.includes(value)) {
//     continue;
//   } else {
//     arr1.push(value);
//   }
// }
// console.log(arr1);

// let map = new Map();
// map.set("name", "shaad"),
//   map.set("  rollNumber", 748724724),
//   map.set("id", 7),
//   map.set("phone", 734723432),
//   map.set("school", "smart kids school"),
//   map.set("friend", "tousif"),
//   map.set("teacher", "sajid sir");

// console.log(map);

// let obj = {};
// map.forEach((val, key) => {
//   obj[key] = val;
// });
// console.log(obj);

// let arr = ["shaad", "sehfeen", "shoreb"];
// let ans = arr.flatMap((value) => {
//   return value.split("");
// });
// console.log(ans);

// let arr = [1, 2, 3, 40, 50, 6, 7, 8];
// let ans = arr.reduce((max, curr) => {
//   if (max < curr) {
//     return curr;
//   } else {
//     return max;
//   }
// });
// console.log(ans);

let arr = [1, 2, 2, 2, 3, 4, 5, 5, 6, 6];
let map = new Map();
for (let value of arr) {
  map.set(value, 1);
}
console.log(map);

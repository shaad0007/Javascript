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
//   value.sort((a,b)=>{
//     console.log(a-b)
//   });
//   console.log(obj.sort(value));
// }

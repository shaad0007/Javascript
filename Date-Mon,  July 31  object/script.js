let obj = {
  bankName: "SBI",
  mobileNo: 95327593475,
  house: {
    color: "white",
    nest: "dense",
  },
  address: "jaipur",
  accountHolderName: "shaad",
  deposit: function () {
    console.log("Deposit function");
  },
  withdraw: function () {
    console.log("Withdraw function");
  },

  arr: [1, 2, 3, 4, 5, 6, 7, 8, , 9],
};
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
for (let value of Object.values(obj)) {
  console.log(value);
}
// for (let value of Object.keys(obj)) {
//   console.log(value);
// }
// for (let value of Object.entries(obj)) {
//   console.log(value[0], value[1]);
// }

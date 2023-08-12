// if (10 || 20) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// Short Circuiting
// Use of ||
// Replace with ternary operator
// With non nullish values
// Use of &&
// Calling function using &&
// The Nullish Coalescing Operator ??
// Logical Assignment Operator
// ||=
// &&=
// ??=

// nullish coalescing operator

// console.log(null ?? 20);

// let a = 0;
// a = a || 100;
// a ||= 100;
// console.log(a); //100

// a = a && 100;
// a &&= 100;
// console.log(a); //0
// a = a ?? 100;
// a ??= 100;
// console.log(a); //0

// let obj = {
//   name: "shaad",
//   age: 34,
//   address: {
//     city: "mumbai",
//     pincode: 303655,
//   },
// };
// console.log(obj?.aaddress?.city);

// let obj = {
//   name: "shaad",
//   age: 34,
//   mobile: 4687645764,
//   address: {
//     city: "mumbai",
//     pincode: 303655,
//   },
// };

// function test(obj) {
//   return obj.mobile ?? null;
// }

// console.log(test(obj));

function print(...val) {
  let arr = [];
  for (let value of val) {
    arr = [...arr, ...value];
  }
  console.log(arr);
}

print([1, 2], [3, 4], [5, 6], [7, 8]);

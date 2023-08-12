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

let a = 0;
// a = a || 100;
// a ||= 100;
// console.log(a); //100

a = a && 20000;
a &&= 100;
console.log(a); //0
a = a ?? 100;
a ??= 100;
console.log(a); //0

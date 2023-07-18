// Question 1.
// HH:MM:SS me time print krvana hai. Ye question krlo sb phle using setInterval

// ANS 1.

// let HH = 0;
// let MM = 0;
// let SS = 0;
// let id = setInterval(function () {
//   ++SS;
//   if (SS === 60) {
//     ++MM;
//     SS = 1;
//   }
//   if (MM === 60) {
//     ++HH;
//     MM = 1;
//   }
//   console.log(`${HH}:${MM}:${SS}`);
// }, 1000);

// setTimeout(function () {
//   clearInterval(id);
// }, 10000);

// Question 2

// Hello World Print krvana hai 10 times using setInterval and 10 seconds bad print hona bad ho jana chahiye

// ANS 2.

// let id = setInterval(function () {
//   document.write("hello world" + "<br>");
// }, 1000);

// setTimeout(function () {
//   clearTimeout(id);
// }, 10000);

// Question 3.

// Using 2 setInterval functions ye print krvana hai output
// 1
// 2
// ==
// 3
// 4
// ====
// 5
// 6
// ======
// 7
// 8
// ========
// 9
// 10
// ==========

// Iske bad kuch b print ni hona chahiye and dono setInterval band hone chahiye

// ANS 3.
// let num = 0;
// let id = setInterval(function () {
//   ++num;
//   console.log(num);
//   if (num === 2) {
//     console.log("==");
//   } else if (num === 4) {
//     console.log("====");
//   } else if (num === 6) {
//     console.log("======");
//   } else if (num === 8) {
//     console.log("========");
//   } else if (num === 10) {
//     console.log("==========");
//   }
// }, 1000);

// setTimeout(function () {
//   clearInterval(id);
// }, 10000);

// Question 4

// Ek function bnana hai usme 1 number and 2 callback functions pass krne hia
// function test(num, cb1, cb2) {}
// Agar number odd hai to cb1 function call krna hia otherwise cb2 call krna hai

// ANS 4.

// function test(num, cb1, cb2) {
//   if (num % 2 === 1) {
//     cb1(num);
//   } else {
//     cb2(num);
//   }
// }

// test(1, known, unknown);

// function known() {
//   console.log("Odd");
// }

// function unknown() {
//   console.log("Even");
// }

// Question 5
// Ek function bnana hai jise 3 arguments pass krne hain
// function test(num1, num2, num3) {}

// Agar all 3 arguments undefined ni hai to ek function return krna hai jo max of 3 numbers btayega

// Otherwise ek function return krega jo only Hello World print krega

// ANS 5.

// function test(num1, num2, num3) {
//   console.log(num1, num2, num3);
//   if ((num1, num2, num3 !== undefined)) {
//     return function max(num1, num2, num3) {
//       if (num1 > num2 && num1 > num3) {
//         return num1;
//       } else if (num2 > num1 && num2 > num3) {
//         return num2;
//       } else if (num3 > num1 && num3 > num2) {
//         return num3;
//           } else {
//             function print() {
//               return "hello world";
//             }
//       }
//     };
//   }
// }

// let a = test(10, 11, 12);
// a();

// Question 6. Ek function bnana hai jise aap date of birth year pass kroge to vo apko age return krega

// ANS 6.
// function calculateAge(dateOfBirth) {
//   let currentYear = 2023;
//   let age = currentYear - dateOfBirth;
//   return age;
// }
// let dateOfBirth = 2009;
// let age = calculateAge(dateOfBirth);
// console.log(age);

let hour = 0;
let min = 0;
let sec = 0;

let id = setInterval(function () {
  ++sec;
  if (sec === 60) {
    ++min;
    sec = 1;
  }
  if (min === 60) {
    ++hour;
    min = 1;
  }

  console.log(`${addZero(hour)}:${addZero(min)}:${addZero(sec)}`);
}, 1000);

function addZero(timeunit) {
  let str = String(timeunit);
  if (str.length === 1) {
    return 0 + str;
  }
  return str;
}

setTimeout(function () {
  clearInterval(id);
}, 10000);

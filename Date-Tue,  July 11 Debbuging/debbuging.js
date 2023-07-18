// function one() {
//   console.log(1);
//   two();
//   three();
// }
// function two() {
//   console.log(2);
// }
// function three() {
//   console.log(3);
//   four();
// }
// function four() {
//   console.log(4);
// }

// one();

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// let day = Number(prompt("give me a num"));
// switch (day) {
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("tue");
//     break;

//   case 3:
//     console.log("wed");
//     break;

//   case 4:
//     console.log("thus");
//     break;

//   case 5:
//     console.log("fri");
//     break;
//   case 6:
//     console.log("sat");
//     break;
//   case 7:
//     console.log("sun");
//     break;
//   default:
//     console.log("error");
//     break;
// }

// let a = 10;
// let b = 20;
// console.log(a + b);

// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// setInterval(function () {
//   ++seconds;
//   if (seconds === 60) {
//     seconds = 0;
//     ++minutes;
//     if (minutes === 60) {
//       minutes = 0;
//       ++hours;
//     }
//   }
//   let time = hours <= 12 ? "AM" : "PM";
//   console.log(
//     `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${time}`
//   );
// }, 1000);
// function addZero(timeUnit) {
//   let timeUnitStr = String(timeUnit);
//   if (timeUnitStr.length === 1) {
//     return "0".concat(timeUnitStr);
//   }
//   return timeUnitStr;
// }

// let a = 10;
// let b = 20;
// sum(a, b);
// let c = 30;
// console.log(a + b + c);

// function sum(i, j) {
//   console.log(i + j);
// }

// function max(a, b) {
//   if (a > b) {
//     console.log("a is greater");
//   } else if (b > a) {
//     console.log("b is greater");
//   } else {
//     console.log("both are equal");
//   }
// }

// max(10, 10);

// console.log("hello");
// console.warn("warning: heavy load on site");
// console.error("Error: you are not connected to the internet");

function add(a, b) {
  console.log(b - a);
}

add(10, "20");

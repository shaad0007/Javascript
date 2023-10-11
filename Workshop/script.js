// 1. Marksheet print
//     -> Print marks in descending order with subject
//     -> 80 >= Distinction
//     -> All subject marks print
//     -> Total Marks
//     -> Percentage print
//     -> Father Name, Student Name, Roll no, school/college name, Class name print

// let Marksheet = {
//   fatherName: "khalid",
//   studentName: "shaad",
//   rollNo: 101,
//   collegeName: "Wecode",
//   className: "Javascript",
//   sub: {
//     sci: 90,
//     math: 50,
//     computer: 79,
//     hindi: 60,
//   },
// };

//     -> Print marks in descending order with subject

// for (let value of Object.values(Marksheet.sub)) {
//   console.log(value);
//   let ans = value.sort((a, b) => {
//     return b-a;
//   });
//   console.log(ans);
// }

//-> 80 >= Distinction

//     -> All subject marks print

// for (let value of Object.values(Marksheet.sub)) {
//   console.log(value);
// }

//     -> Total Marks

// for (let value of Object.values(Marksheet.sub)) {
//   console.log(value);
// }
// let ans = value.reduce((a, b) => {
//     return a
// });

//     -> Percentage print
//     -> Father Name, Student Name, Roll no, school/college name, Class name print

// Question 2.

// Ans 2. Take an Array
//     -> Filter all odd numbers

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.filter((value) => {
//   return value % 2 !== 0;
// });
// console.log(ans);

//     -> Filter all numbers greater than 30 and less than 200

// let arr = [100, 200, 30, 50, 75, 4, 500];
// let ans = arr.filter((value) => {
//   return value > 30 && value < 200;
// });
// console.log(ans);

//     -> Convert every odd number to even number

// let arr = [100, 200, 30, 50, 75, 17, 15, 4, 500];
// let ans = arr.filter((value) => {
//   return value % 2 === 1;
// });
// let convert = ans.map((value) => {
//   return value + 1;
// });
// console.log(convert);

//     -> Print sum of all the numbers
//FIRST
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(ans);
//SECOND
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let value of arr) {
//   sum = sum + value;
// }
// console.log(sum);

// 6. Print below pattern
//     1 2 3 4 5
//     6 7 8 9 1
//     1 2 3 4 5
//     6 7 8 9 1
//     1 1 1 1 1

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (i % 2 === 1) {
//       document.write(j + " ");
//     } else {
//       document.write(j + 5 + " ");
//     }
//   }
//   document.write("<br> ");
// }

// 5. Create a datetime counter and display in format dd-mm-yyyy hh:mm:ss

// let date = new Date();
// document.write(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} `);

// document.write(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

//Question 3.
// Ans 3.

// prompt ?????
// let eldestBrotherName = "Shaad";
// let fourthSon = "Naved";
// let thirdSon = "Jasim";
// let secondSon = "Nadim";
// let occupation = "Farmer";
let story = `Once upon a time, in a quaint village, lived four brothers - (${eldestBrotherName},${secondSon}, ${thirdSon}, ${fourthSon}). They were hardworking and compassionate (${occupation}), tilling the land their ancestors had tended for generations.

// One day, a severe drought struck the village, leaving the fields parched and the crops withering away. The brothers were worried about their livelihood and the well-being of their fellow villagers. Despite their own struggles, they decided to help their community.

//  [${eldestBrotherName}], the eldest brother, devised a plan to dig a well that would provide a consistent water source. [${secondSon}], with his engineering skills, designed a simple yet effective irrigation system. [${thirdSon}] used his persuasive nature to gather support from the village, while [${fourthSon}], the youngest, tirelessly worked alongside his brothers.

//  Their dedication paid off. With the well and irrigation system in place, the village began to flourish again. Crops grew, and the villagers no longer worried about scarcity. The brothers' unity and selflessness had saved the day.

//  This tale of four brothers and their unwavering commitment to their community serves as a reminder that compassion, innovation, and teamwork can overcome even the most challenging times.`;
// document.write(story);

// 7. Write below code to match a criteria and check a person matches how many criteria's
//     To solve this exercise create a persone object like below
//         {
//             name: "Sajid Ali Khan",
//             gender: "M",
//             age: 31,
//             address: {
//                 pincode: 302012,
//                 city: "Jaipur",
//                 state: "Rajasthan"
//             },
//             mobile: 9584354354
//         }

//     1. Check if person's name contain more than 2 words?
//     2. Gender female?
//     3. If person lives in Delhi or not?
//     4. Mobile number is present or not?
//     5. Is person older than 30 years?

// ANS 7.

// let person = {
//   name: "shaad Ali Madani",
//   gender: "Male",
//   age: 31,
//   address: {
//     pincode: 302012,
//     city: "Jaipur",
//     state: "Rajasthan",
//   },
//   mobile: 9584354354,
// };

// function check(person) {
//   let criteriaMatched = 0;

//   let nameWord = person.name.split(" ");
//   if (nameWord.length > 2) {
//     criteriaMatched++;
//   }
//   if (person.gender === "Male") {
//     criteriaMatched++;
//   }
//   if (person.address.city === "Delhi") {
//     criteriaMatched++;
//   }
//   if (person.mobile) {
//     criteriaMatched++;
//   }
//   if (person.age > 30) {
//     criteriaMatched++;
//   }
//   return criteriaMatched;
// }

// let ans = check(person);
// console.log(ans);
// console.log(Math.trunc(Math.random() * 10) + 1);

// setInterval(() => {
//   let date = new Date();

//   document.write(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `);
//   document.write(
//     `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//   );
//   document.write("<br>");
// }, 1000);

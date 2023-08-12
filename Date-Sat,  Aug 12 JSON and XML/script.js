// let obj = {
//   name: "shaad",
//   age: 40,
//   marks: [1, 2, 3, 4, 5, 6],
//   address: {
//     city: "indore ",
//     pincode: 2884383,
//   },
// };

// let json = JSON.stringify(obj);
// console.log(json);
// let obj2 = JSON.parse(json);
// console.log(obj2);

// <wecodeacademy>
//   <batches>
//     <javascript>
//       <id>1</id>
//       <name>Javascript batch 101</name>
//       <students>
//         <student>
//           <name>shaad</name>
//           <age>20</age>
//         </student>
//         <student>
//           <name>aarif</name>
//           <age>100</age>
//         </student>
//         <student>
//           <name>bilal</name>
//           <age>10</age>
//         </student>
//       </students>
//     </javascript>
//   </batches>
// </wecodeacademy>;

// let count = 1;
// function changeColor() {
//   if (count % 2 === 0) {
//     document.getElementById("test").style.backgroundColor = "cyan";
//   } else {
//     document.getElementById("test").style.backgroundColor = "black";
//   }
//   count++;
// }

//
let arr = ["red", "green", "pink", "cyan", "black", "brown"];
let count = 0;
setInterval(() => {
  document.getElementById("test").style.backgroundColor = count[arr];
  count++;
}, 1000);

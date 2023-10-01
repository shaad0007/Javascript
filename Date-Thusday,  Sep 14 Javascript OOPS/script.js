// function running(name) {
//   console.log(`${name} running`);
// }

// running("Dog");

// let animal = function (name, legs, color) {
//   console.log(name, legs, color);
//   this.name = name;
//   this.legs = legs;
//   this.color = color;
//   this.eat = function () {
//     console.log(`${this.name} eating`);
//   };
//   this.sleep = function () {
//     console.log(`${this.name} sleeping`);
//   };
// };

// let lion = new animal("lion", 4, "red");
// let parrot = new animal("parrot", 2, "green");
// let Dog = new animal("Dog", 6, "yellow");
// console.log(lion, parrot, Dog);

// let account = function (
//   name,
//   bankName,
//   addharcardNo,
//   mobile,
//   address,
//   currentbalance
// ) {
//   this.name = name;
//   this.bankName = bankName;
//   this.addharcardNo = addharcardNo;
//   this.mobile = mobile;
//   this.namaddress = address;
//   this.currentbalance = currentbalance;
// };

// let HDFC = new account("shaad", 89432798427, 2397498, "shanti nagar", 50000);
// console.log(HDFC);

// let print = +prompt("Give me a num");
// for (let i = 1; i <= print; i++) {
//   if (print % i === 0 && print % print === 0) {
//     console.log(i);
//   }

// }

// let a = 10;
// let b = 100 < 20 ? "hey" : "Fuck";
// console.log(b);

let arr = [1, 20, 3, 40, 5];
let arr1 = [1000, 200];
let arr3 = arr.join("*");
console.log(arr3);

console.log("shaad");

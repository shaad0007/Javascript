// let arr = [1, 2, 3, 4, 5];
// let arr3 = [10, 20, 30];
// let arr2 = [...arr, ...arr3];
// console.log(arr2);

// let str = "wecode academy";
// let arr = [...str];
// console.log(arr);

// function sum(...arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }

// sum(1, 2, 3, 4, 5, 100, 3000);

// let arr = [1, [10, 20], 2, 3, 4, 5];
// let arr2 = [...arr];
// arr.push(10);
// arr2.push(1000);
// arr[1].push(500);
// console.log(arr);
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5];
// let [one, two, ...othrs] = arr;
// console.log(one, two, othrs);

// What is destructuring

// const arr = [1, 2, 3, 4, 5];
// const [one, two, , , five] = arr;
// console.log(one, two, five);

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [, , , , , , , , nintee] = arr;
// console.log(nintee);

// Reverse values using destructuring

// let a = 10;
// let b = 1000;
// [a, b] = [b, a];
// console.log(a, b);

// Return two values from function
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function sum() {
//   return [1, 2, 3, 4, 5];
// }

// let ans = sum();
// console.log(sum());

// let arr = [1, 2, 3, [20, 30], 4, 5];
// let arr2 = [...arr];
// arr.push(100);
// arr2.push(500);
// arr[3].push(300);
// console.log(arr2, arr);

// let arr = [1, 2, 3, [20, 30], 4, 5];
// let arr2 = JSON.parse(JSON.stringify(arr));
// arr.push(100);
// arr2.push(500);
// arr[3].push(300);
// console.log(arr2, arr);

// Setting default values
// const arr = [1, 2, 3];
// const [one = 10, two = 20, three = 30] = arr;
// console.log(one, two, three);

// Return two values from function
// Destructuring of nested array
// Destructuring Objects
// Different property name
// Default values
// Nested Object
// In Function

// const arr = [1, 2, 3];
// const arr1 = [10, 20, 30];
// const arr3 = [1000, 2000, 3000];
// const arr2 = [...arr1, ...arr3, ...arr];
// console.log(arr2);

// let a = 10;
// let b = 20;
// let c = a;
// console.log(c);
// a = b;
// console.log(a);
// b = c;
// console.log(b)

// let arr = [1, 2, 3, [6, [10, 20, 30], 7], 5];
// let [one, , , [six, [, , thirty]], five] = arr;
// console.log(one, six, thirty, five);

let obj = {
  //   name: "shaad",
  age: 40,
  inspiration: "israel adesanya",
  address: {
    city: "indore",
    pincode: 278392,
  },
};

let {
  name: myName = "israel",
  age: myAge,
  address: { pincode },
} = obj;
console.log(myName, age, pincode);

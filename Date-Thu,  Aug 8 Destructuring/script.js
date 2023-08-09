// const arr = [1, 2, 3, 4, 5];

// const [one, two, , four] = arr;
// console.log(one, two, four);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const [, , , , , , , , , , , , , , fifteen] = arr;
// console.log(fifteen);

// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr;
// arr.push(100);
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, [10, 20], 4, 5];

// const arr2 = JSON.parse(JSON.stringify(arr));
// arr.push(500);
// arr2.push(300);
// arr2[3].push(800);
// console.log(arr);
// console.log(arr2);

// const arr = [100, 200, 300, 400, 500];
// const [one = 10, two = 20, three = 30] = arr;
// console.log(one, two, three);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [10, 20, 30, 40];
// const arr3 = [500, 600];

// const arr4 = [...arr2, ...arr3, ...arr1];
// console.log(arr4);

// let a = 10;
// let b = 20;
// let c = 50;
// let c = a;
// console.log(c);
// a = b;
// console.log(a);
// b = c;
// console.log(b);
// [a, b, c] = [c, b, a];
// console.log(a, b, c);

// function getDetail() {
//   return [1, 2];
// }
// console.log(getDetail());

// const arr = [1, 2, 3, [10, [20, 40], 20], 4, 5];
// const [one, , , [ten, [, fourty]], , five] = arr;
// console.log(one, ten, fourty, five);
// const [, , three, [, [, fourty], tweenty], , five] = arr;
// console.log(three, fourty, tweenty, five);

// let obj = {
//   name,
//   address: {
//     city: "jaipur",
//     country: "india",
//     pincode: "302012",
//   },
//   class: 10,
//   mobile: 823873298375,
// };
// let {
//   name = "shaad",
//   mobile,
//   address: { pincode },
// } = obj;
// console.log(name, mobile, pincode); //  ye const mein hi chl rhe hai sahi se ???????????????????????????????

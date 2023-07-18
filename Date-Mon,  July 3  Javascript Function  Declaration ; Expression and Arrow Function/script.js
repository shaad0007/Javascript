// MAX OF 2

// Function declaration

// function max(num1 , num2) {
//     if(num1 > num2){
//         return "Num1 is Greater"
//     }
//     else if(num2 > num1){
//         return "Num2 is Greater"
//     }

//     else {
//         return "Both are Equal"
//     }

// }

// let a = max( 12,11)
// console.log(a)

// Function expresion

// const max = function (num1 , num2) {
//     if(num1 > num2){
//         return "Num1 is Greater"
//     }
//     else if(num2 > num1){
//         return "Num2 is Greater"
//     }

//     else {
//         return "Both are Equal"
//     }

// }

// let a = max( 12,11)
// console.log(a)

// Arrow Function

// const max = (num1 , num2) => {
//     if(num1 > num2){
//         return "Num1 is Greater"
//     }
//     else if(num2 > num1){
//         return "Num2 is Greater"
//     }

//     else {
//         return "Both are Equal"
//     }

// }

// let a = max( 12,12)
// console.log(a)

// SUM OF 2

// FUNCTION DECLARATION

// function sum(a,b){

//     return a + b
// }

// let a = sum(10,10)
// console.log(a)

// FUNCTION EXPRESSION

// let sum = function (a,b){

//     return a + b
// }

// let a = sum(10,10)
// console.log(a)

// ARROW FUNCTION

// let sum = (a,b) => {

//     return a + b
// }

// let a = sum(10,10)
// console.log(a)

// ODD EVEN

// FUNCTION DECLARATION

// function oddEven(a){
//     if(a % 2 === 0){
//         return  " a is Even"
//     }
//     else{
//         return "a is Odd"
//     }
// }

// let i = oddEven(11)
// console.log(i)

// FUNCTION EXPRESSION

// const oddEven =function (a){
//     if(a % 2 === 0){
//         return  " a is Even"
//     }
//     else{
//         return "a is Odd"
//     }
// }

// let i = oddEven(11)
// console.log(i)

// ARROW FUNCTION

// const oddEven = (a) =>{
//     if(a % 2 === 0){
//         return  " a is Even"
//     }
//     else{
//         return "a is Odd"
//     }
// }

// let i = oddEven(11)
// console.log(i)

// TABLE OF 5

//FUNCTION DECLARATION

// function table(a){
//     for(let a = 1; a<=50; a++){
//         if(a%5===0){

//             console.log(a)
//         }
//     }
//    }

// table(5)

//FUNCTION EXPRESSION

// let table = function (a){
//     for(let a = 1; a<=50; a++){
//         if(a%5===0){

//             console.log(a)
//         }
//     }
//    }

// table(5)

// ARROW FUNCTION

// let table = (a) =>{
//     for(let a = 1; a<=50; a++){
//         if(a%5===0){

//             console.log(a)
//         }
//     }
//    }

// table(5)

// isOdd

// FUNCTION DECLARATION

// function isOdd(a){
// if(a % 2 === 1){

//     return "Function is odd"
// } else{
//     return "error"
// }
// }

// const i = isOdd(3)
// console.log(i)

// FUNCTION EXPRESSION

// const isOdd = function (a){
// if(a % 2 === 1){

//     return "Function is odd"
// } else{
//     return "error"
// }
// }

// const i = isOdd(3)
// console.log(i)

// Arrow FUNCTION

// const isOdd =  (a) =>{
// if(a % 2 === 1){

//     return "Function is odd"
// } else{
//     return "error"
// }
// }

// const i = isOdd(3)
// console.log(i)

// isEven

// FUNCTION DECLARATION

// function isEven(a){
// if(a % 2 === 0){

//     return "Function is Even"
// } else{
//     return "error"
// }
// }

// const i = isEven(10)
// console.log(i)

// FUNCTION EXPRESSION

// const isEven = function (a){
// if(a % 2 === 0){

//     return "Function is Even"
// } else{
//     return "error"
// }
// }

// const i = isEven(4)
// console.log(i)

// Arrow FUNCTION

// const isEven =  (a) =>{
// if(a % 2 === 0){

//     return "Function is Even"
// } else{
//     return "error"
// }
// }

// const i = isEven(1000)
// console.log(i)

// function add(a,b,cb){
//     cb(a,b)
// }

//  add(12,11,sum)
//  add(12,11,sub)
//  add(12,11,mul)
//  add(12,11,divide)

// function sum(a,b){
//   console.log(a+b)

// }
// function sub(a,b){
//   console.log(a-b)

// }
// function mul(a,b){
//   console.log(a*b)

// }

// function divide(a,b){
//   console.log(a/b)

// }

// function calculate(num1,num2,cb){
//   console.log(num1,num2)
//   cb(10,10,  )

// }

// calculate()

// function sum(num1,num2){
//   console.log(num1 + num2)
// }

// sum(10,20)

// function mul(num1,num2){
//   console.log(num1 * num2)
// }

// mul(10,20)

// function divide(num1,num2){
//   console.log(num1 / num2)
// }

// divide(10,20)

// function max(num1,num2){
//   if(num1 > num2){
//     console.log(num1)
//   }else{
//     console.log(num2)
//   }
// }

// max(10,20)

// function sub(num1,num2){
//   console.log(num1 - num2)
// }

// sub(10,20)

// function oddEven(num1,num2){
//  if(num1 % 2=== 0 && num2 % 2 === 0){
//   console.log("even")
//  }else{
//   console.log("odd")
//  }
// }

// oddEven(10,10)

// function oddEven(num1){

//     if(num1 % 2 === 1 ){
//       return function odd(){
//         console.log("Odd")
//       }
// }
//       else{
//         return function even(){
//         console.log("Even")

//     }
//   }

// }

// let i = oddEven(1)
// console.log(i)

// function string(a){
// if(a === "Hello"){
//   return function print(){
//     console.log("Hello")
//   }
// }
//   else{
//     return function print1(){
//     console.log("Hello World")
//   }
// }
// }

// const i = string("nice")
// console.log(i)

// let a = 10;
// let b = 20;
// let c = 30;

// if (!(a > b )){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// for(let i =1; i<=10; i++){
//     if(i === 3){
//         console.log("nhi")
//        continue;
//     }
//     console.log(i)

// }

// let i = 1;
// do{
//     console.log("hello")
//     i++
// }while(i<=5)

// let i = 1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// function pass(num1, callBack){

// }

// let a = 10;
// let b = 20;
// let c = 10;

// if(a > b ){
//     if(c > b){

//         console.log("yes")
//     }

// else{
//     console.log("no")
// }
// }
// else{
//     console.log("fuck")
// }

// function table(a){
//     for(let i = 1;i<=10; i++ ){
//       let h = a*i
//       console.log(a*i)

//     }

// }
// table(5)
// table(13)
// table(10)

// function jerry(num1,cb){
// cb(num1)
// }

// jerry(1,oddEven)

// function oddEven(num1){
//   if(num1 % 2 === 0){

//     console.log("Even")
//   }
// else{
// console.log("odd")
// }
// }

// function print(num1,cb){
//   cb(num1)
// }

// print(10,zomt)

// function zomt(a){
//   console.log(a)
// }

// function hello(cb){
// cb()
// }

// hello(one)

// function one(){
//   console.log("Hello")
// }

// function print(num,cb){
//   cb(num)
// }

// print(10,one)

// function one(num){
//   console.log(num)
// }

// function print(num1, num2, cb){
//   cb(num1,num2)
// }

// print(20,20,one)

// function one(a,b){
//   console.log(a,b)
// }

// function print(a,b,c,d,cb){
//   cb(a,b,c,d)
// }

// print(10,20,30,40,one)

// function one(a,b,c,d){
//   console.log(a,b,c,d)
// }

// function print(num1, cb){
//   cb(num1)
// }

// print(1,oddEven)

// function oddEven(num1){
// if(num1%2=== 0){
//   console.log("even")
// }else{
//   console.log("odd")
// }
// }

// function done(num1,num2,cb){
//   cb(num1,num2)
// }

// done(10,10,sum)
// done(10,10,mul)
// done(10,10,divide)
// done(10,10,sub)

// function sum(num1,num2){
//   console.log(num1+num2)
// }
// function mul(num1,num2){
//   console.log(num1*num2)
// }
// function divide(num1,num2){
//   console.log(num1/num2)
// }
// function sub(num1,num2){
//   console.log(num1-num2)
// }

// function calculate(num1,num2,cb){

//   cb(num1, num2)
// }

// calculate(10,10,sum)
// calculate(10,10,sub)
// calculate(10,10,mul)
// calculate(10,10,divide)
// calculate(11,10,max)
// calculate(1,10,oddEven)

// function sum(num1,num2){
//   console.log(num1 + num2)
// }
// function sub(num1,num2){
//   console.log(num1 - num2)
// }
// function mul(num1,num2){
//   console.log(num1* num2)
// }
// function divide(num1,num2){
//   console.log(num1 / num2)
// }
// function max(num1,num2){
//   if(num1>num2){
//     console.log("num1 is greater ")
//   }
//   else{
//      console.log("num2 is greater ")
//   }

// }
// function oddEven(num1,num2){
//   if(num1%2 === 0 && num2%2===0){
//     console.log("Even")
//   }else{
//      console.log("Odd")
//   }

// }

// function test(operator){
//   if(operator === "+"){
//     return function sum(a,b){
//       console.log(a+b)
//     }
//   }else if(operator === "-"){
//     return function sub(a,b){
//       console.log(a-b)
//     }
//   }else if(operator === "/"){
//     return function divide(a,b){
//       console.log(a/b)
//     }
//   }else if(operator === "*"){
//     return function mul(a,b){
//       console.log(a*b)
//     }
//   }
// }

// let i = test("-")
// i(10,10)

// function test(operator){
//   if(operator === "+"){
//     return function sum(a,b){
//       console.log(a+b)
//     }
//   }else if(operator === "-"){
//     return function sum(a,b){
//       console.log(a-b)}

//   }else if(operator === "*"){
//     return function sum(a,b){
//       console.log(a*b)}

//   }else if(operator === "/"){
//     return function sum(a,b){
//       console.log(a /b)}
//   }
// }

// let i = test("/")
// i(10,10)

// function sum(a,b){
//   console.log(a+b)
// }

// sum(10,20)

// const sum = function(a,b){
//   console.log(a+b)
// }

// sum(10,10)

// const sum = (a,b) => {
//   console.log(a+b)
// }
// sum(10,11)

// function sum(a,b){
//   return function sum(a,b){
//     console.log(a+b)
//   }

// }

// let i = sum()
// i(10,10)

// Ye questions kro. Class 8am start hogi. You have 30 minutes

// 1. Create a function and pass one number in arugment. Agar number odd hai to ek function return kro jo Odd print krta ho. Agar number even ho to ek function return kro jo Even Print krta ho

// 2. Create a function and pass a string. Agar string hello hai to ek function return kro jo Hello print krta ho otherwise else me dusra function return kro jo Hello World print krta ho

// 3. Create a function and pass one number and one callback function. Callback function me 1st time ek function pass krna hai jo diye gye number ki table print krta hu ascending order me like 5 10 15 20
// next time ek dusra function pass kro jo table print krta ho descending order me like 50 45 40

// 4. Create a function and pass one string and one callback function. Callback function ko vo string pass krni hai and jo b string hai usme World + krke print krvana hai

// function pass(string,cb){
//   cb(string)
// }

// pass("hello",con)

// function con(string){
//   console.log(string + " " + "World")
// }

// let hour = 0
// let min = 0
// let sec = 0
// setInterval(function(){
//   ++sec
//   if(sec === 60){
//     ++min
//     sec = 1
//   }if(min === 60){
//     ++hour
//     min = 1
//   }
//   document.write(`${hour}:${min}:${sec} <br>`)

// },1000)

// let hour = 0
// let min = 0
// let sec = 0
// let id = setInterval(function(){
//   ++sec
//   if(sec === 60){
//     ++min
//     sec = 1

//   }if(min === 60){
//       ++hour
//       min = 1
//     }
//     console.log(`${hour}:${min}:${sec}`)
//   }, 1000);

//   // clearInterval(id)

//   setTimeout(function(){
//     clearInterval(id)
//   },7000)

// function test(num){
//   if(num % 2 === 0){
//     return function even(){
//       console.log("Even")
//     }
//   }else if(num%2 === 1){
//     return function odd(){
//       console.log("odd")
//     }
//   }
// }

// let i = test(1)
// i()

// function test(string){
//   if(string === "hello"){
//     return function print(){
//       console.log("hello")
//     }
//   }else{
//     return function not(){
//       console.log("hello world")
//   }
// }
// }

// let i = test("hel")
// i()

// function test(num1,cb){
//   cb(num1)
// }
// test(5,table)
// test(7,table)
// test(15,table)

// function table(num1){
// for(let i = 1; i <= 10; i++){
//   console.log(i*num1)
// }
// }

// function test(num1,cb){
//   cb(num1)
// }
// test(5,table1)
// test(5,table2)

// function table2(num1){
// for(let i = 1; i <= 10; i++){
//   console.log(i*num1)
// }
// }

// function table1(num1){
// for(let i = 10; i >= 1; i--){
//   console.log(i*num1)
// }
// }

let a = 1;

// for loop


// Question 1
// Print 1 to 100

// ANS 1.
// for(let i =1; i<=100;i++ ){
// console.log(i)
// }


// Question 2
// Print all Odd numbers from 1 to 100

// ANS 2.
// for(let i=1; i<=100; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }


// Question 3
// Print all Even numbers from 1 to 100

// ANS 3.
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


// Question 4.
// Print all numbers which are divisible of 5 and 15 in 1 to 100

// ANS 4.
// for(let i = 1; i<= 100; i++){
//     if(i % 5 === 0 && i % 15 === 0){
//         console.log(i)
//     }
// }


// Question 5.
// Print all numbers which are divisible of 5 in 1 to 100

// ANS 5.
// for(let i = 1; i<= 100; i++){
//     if(i % 5 === 0 ){
//         console.log(i)
//     }
// }


// Question 6.
//Print 2's table

// ANS 6.
// for(let i = 1; i <= 20; i++ ){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


// Question 7.
//Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// ANS 7.
// let user = Number(prompt("How many times do you want to print Hello World?"))

// for(let i = 1; i<=user; i++){
//     console.log(i + " hello world")
// }


// Question 8.
// Calculate sum of all numbers from 1 to 100

// ANS 8.
// Calculate sum of all numbers from 1 to 100
// let sum = 0;
// for(let i = 1; i<= 100; i++){
//     console.log(i)
//     sum= sum + i;
// }
// console.log("TOTAL =", sum)




// Question 9.
// Calculate sum of all odd numbers from 1 to 100

// ANS 9. 
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
//     sum = sum + i
// }
// console.log(sum)



// Question 10.
// Calculate sum of all odd numbers from 1 to 100

// ANS 10. 
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     if(i%2===0){
//         console.log(i)
//     }
//     sum = sum + i
// }
// console.log(sum)



// Question 11.
// Print 1,2,4,8,16,32,64.......upto 2048

// ANS 11. 
//  for(let i = 1; i<=2048; i=i*2){

//     console.log(i)
//  }



// Question 12.
// Print

// ```
// 1,2,3,4,5,6,7,8,9,10
// 11,12,13,14,15,16,17,18,19,20
// .
// .
// ......................99,100
// ```

// ANS 12. 
// for(let i = 1; i<=100; i++){
//     console.log(i)
// }



// Question 13.
// Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

// ANS 13.
// for(let i = 1; i<=100; i++){
//     if(i%3===0 && i%5===0)
//     console.log("fizzbuzz", i)
// }



// Question 14.
// print 10 table like this

// ```

// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// .
// .
// .
// 2*10=20

// ```

// ANS 14.

// let x = 10;
// for(let i = 1; i<=10; i++){
//     console.log(x * i)
// console.log(x +"*"+ i+"="+ x * i);
// }





// Question 15.
// Run a loop from 1 to 50

// ```
// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"
// ```

// ANS 15.
//  for(let i = 1; i<=50; i++){
//     if(i<=10){
//         console.log(i +"A") 
// }
//     else if(i > 10 && i<=20){
// console.log(i +"B") 
// }
//     else if(i > 20 && i<=30){
// console.log(i +"C") 
// }
//     else if(i > 30 && i<=40){
// console.log(i +"D") 
// }
//     else if(i > 40 && i<=50){
// console.log(i +"E") 
// }
   
// }



// Question 16.
// Run a loop from 50 to 1

// ```
// From 50 to 41 print "A"
// From 40 to 31 print "B"
// From 30 to 21 print "C"
// From 20 to 11 print "D"
// From 10 to 1 print "E"

// ANS 16.
 
// for(let i = 50; i>=0; i--){
//     if(i>40 && i<=50){
//     console.log(i+"A")
//     }
// else if(i> 30 && i<=40){
//     console.log(i+"B")
// }
// else if(i> 20 && i<=30){
//     console.log(i+"C")
// }
// else if(i> 10 && i<=20){
//     console.log(i+"D")
// }
// else if(i> 0 && i<=10){
//     console.log(i+"E")
// }
    
// }



// Question 17.
// Print below series
// 5 25 125.. till number is less than equal to 10000

// ANS 17.
// for(let i = 5; i<= 10000; i++){
//     if(i%5===0)[
//         console.log(i)
//     ]
// }



// Question 18.
// Print below series
// 3,6,9,12... till number is less than equal to 500

// ANS 18.
// for(let i = 3; i<= 500; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }



// Question 19.
// print below series

// ```

// 120
// 221
// 322
// 423
// 524
// 625
// 726
// 827
// 928
// 1029

// ```

// ANS 19.
// for(let i = 120; i<= 1029; i=i+101){
//     console.log(i)
// }



// Question 20.
// print below series
// 100 95 90 85 80 ... till 0

// ANS 20.
// for(let i = 100; i>=0; i=i-5){
//     console.log(i)
// }



// Question 21.
// Number 70 is divisible by which numbers till 70? Find out and print those numbers

// ANS 21.
// for(let i = 1; i<=70; i++){
//     if(i%70===0){
//         console.log(i)
//     }
// }










// # while loop Exercise









// Question 22.
// Write a while loop that logs the numbers 1 to 10 in the console.

// ANS 22.
// let i = 1;
// while(i<=10){
//     console.log(i)
//     i++
// }



// Question 23.
// Calculate sum of all numbers from 1 to 10

// ANS 23.
// let sum = 0
// let i =1
// while(i<=10){
//     console.log(i)
//     i++
//     sum = sum + i
// }
// console.log(sum)



// Question 24.
// Counting down from 10 to 1

// ANS 24.
// let i = 10;
// while(i>=1){
//     console.log(i)
//     i--
// }



// Question 25.
// Print 2's table

// ANS 25.
// let i = 2;
// while(i<=20){
// if(i%2===0){
// console.log(i)
// }

// i++
// }



// Question 26.
// Calculate sum of all odd numbers from 1 to 100

// ANS 26.
// let sum = 0;
// let i = 1;
// while(i<=100){
//     if(i % 2 !== 0){
//       console.log(i)
//     }i++
//     sum = sum+ i
// }
// console.log(sum)



// Question 27.
// Write a do...while loop that logs the numbers 1 to 5 in the console

// ANS 27.
// let i = 1
// do{
//     console.log(i)
//     i++
// }
// while(i<=5)



// Question 28.
// Counting down from 10 to 1

// ANS 28.
// let i = 10
// do{
//     console.log(i)
//     i--
// }
// while(i>=1)



// Question 29.
// Calculate sum of all numbers from 1 to 10

// ANS 29.
// let sum = 0
// let i = 1
// do{
//     console.log(i)
//     i++
//     sum = sum + i
// }
// while(i<=10)
// console.log(sum)


// Question 30.
// Print 2's table

// ANS 30.
// let i = 2
// do{if(i%2===0){
//     console.log(i)
// }
    
//     i++
// }
// while(i<=20)



// Question 31.

// Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// ANS 31.
// let user = Number(prompt("How many times do you want to print Hello World?"))
// let i = 1
// do{
//     console.log(i +") Hello World")
//     i++
// }
// while(i<=user) bnbvbbvb -+



// Question 32.
// Calculate sum of all even numbers from 1 to 100

// ANS 32.
// let sum = 0
// let i = 1
// do{
//     if(i%2===0){
//         console.log(i)
//     }
//    i++
//    sum+=i
// }
// while(i<=100)
// console.log(sum)








// # Pattern questions








// Question 33.
// Print pattern

// ```

// 1
// 11
// 111
// 1111
// 11111


// ANS 33.

// for(let i = 1; i <=5; i++){
//     for(let j = 1; j<=i; j++){
//         document.write(1)
//     }
//     document.write("<br>")
// }



// Question 34.
// Print Pattern
// ---

// ---

// ---


// ANS 34.
// for(let i = 1; i<=3;i++){
//   for(let j =1; j<=3;j++ ){
//     document.write("-")
//   }
//   document.write("<br>")
// }



// Question 35.
// Print pattern

// ***
// ***
// ***
// ***


// ANS 35.
// for(let i = 1; i<=4;i++){
//   for(let j =1; j<=3;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }



// Question 36.
// Print Pattern

// 12345
// 1234
// 123
// 12
// 1


// ANS 36.
// for(let i = 1; i<=5; i++){
//   for(let j = 1; j<=6-i; j++){
//     document.write(j)
//   }
//   document.write("<br>")
// }



// Question 37.
// Print pattern

// 54321
// 5432
// 543
// 54
// 5


// ANS 37.
// for(let i = 1; i<= 5; i++){
//   for(let j = 5; j>= i; j--){
//     document.write(j)
//   }
//   document.write("<br>")
// }



// Question 38.
// Print pattern

// 54321
// 4321
// 321
// 21
// 1


// ANS 38.
// for(let i = 1; i<=5; i++){
//    for(let j = i; j<=5; j){
//      document.write(j)
//    }
//    document.write("<br>")
// }??




// Question 39.
// Print pattern

// $$
// $$

// $$
// $$

// $$
// $$


// ANS 39.

// for(let i = 1; i<=1; i++){
//     for(let j = 1; j<=2; j++){
//       document.write("$$")
//       document.write("<br>")
//     }
//     document.write("<br>")
// for(let j = 1; j<=2; j++){
//       document.write("$$")
//       document.write("<br>")
//     }
//     document.write("<br>")
// for(let j = 1; j<=2; j++){
//       document.write("$$")
//       document.write("<br>")
//     }
//     document.write("<br>")
// }



// Question 40.
// Print pattern

// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****


// ANS 40.

// for(let i = 1; i<=5; i++){
//    for(let j = 5; j>=i; j--){
//       document.write("*  ")
//    }
//    document.write("<br>")
// }
// for(let i = 1; i<=5; i++){
//    for(let j = 1; j<=i; j++){
//       document.write("*  ")
//    }
//    document.write("<br>")
// }



// Question 41.
// Print pattern

// 10987654321
// 987654321
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1


// ANS 41.

// for(let i = 1; i<=10; i++){
//    for(let j = 10; j>=i; j--){
//     document.write(j)
//    }
//    document.write("<br>")
// }




// Question 42.
// Print pattern

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *


// ANS 42.
// for(let i = 1; i<=5; i++){
//     for(let j = 1; j<=i; j++){
//       document.write("*")
//     }
//     document.write("<br>")
// }
// for(let i = 1; i<=5; i++){
//     for(let j = 5; j>i; j--){
//       document.write("*")
//     }
//     document.write("<br>")
// }



// Question 43.
// Print pattern

// *********
//  *******
//   *****
//    ***
//     *


// ANS 43.

// for(let i = 1; i<=5; i++){
//   for(let j = 1; j<=i; j++){
//     document.write("&nbsp;&nbsp")
//   }
//   for(let j = 5; j>i; j--){
//     document.write("*")
//   }
//   for(let j = 5; j>=i; j--){
//     document.write("*")
//   }
//     document.write("<br>")
// }



// Question 44.
// Print Pattern

//      *
//     ***
//    *****
//   *******
//  *********
// ***********


// ANS 44.

// for(let i = 1; i<=6; i++){
//   for(let j = 6; j>=i; j--){
//     document.write("&nbsp ")
//   }
//   for(let j = 1; j<i; j++){
//     document.write("*")
//   }
//   for(let j = 1; j<=i; j++){
//     document.write("*")
//   }
//    document.write("<br>")
// }










































































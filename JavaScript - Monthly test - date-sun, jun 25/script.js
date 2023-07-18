// Question 1.

// Print below pattern
// 1
// 23
// 456
// 78910
// 1112131415

// Ans 1.
// for(let i =1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         document.write(j)
//     }
//     document.write("<br>")
// }



// Question 2.
// Create a JavaScript program that prompts the user to enter their age. If the age entered is less than 18, display an alert box with the message "Sorry, you must be at least 18 years old to access this website." If the age entered is between 18 and 30, display a confirm box with the message "Are you sure you want to proceed?" If the user clicks "Cancel" in the confirm box, display an alert box with the message "Action canceled." If the user clicks "OK" in the confirm box, display a prompt box asking for their name and display an alert box with the message "Welcome, [Name]!" (replace [Name] with the name entered).


// Ans 2.
// let user = Number(prompt("Enter your age"));
// if(user<18){
//     alert("Sorry, you must be at least 18 years old to access this website.")
// } 
// else if(user>18 && user <30){
//     confirm("Are you sure you want to proceed?")
//     if(user === "cancel"){
//         alert("Action canceled.")
//     }else if(user === "ok"){
//     let g = prompt("what is your name")
//         alert("Welcome, [Name]!")

    
//     }
    
    

// }




// Question 3.
// Create a JavaScript program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average using an alert box.


// Ans 3.
// let user= Number(prompt("enter first number"))
// let user1= Number(prompt("enter second number"))
// let user2= Number(prompt("enter third number"))
// alert((user + user1 + user2) /3)   // jitne number hote hai unse divide krte hai average nikalne ke liye



// Question 4.
// Solve below expressions

// Ans 4.

// 5 + 2 * 3 - 4 / 2          // 9
// 10 % 3 + 4 * 2 / 5         // 2.6
// 15 % (7 + 3) - 4 * 2       // -3
// (2 + 3) * (4 - 1) + 6 / 2  // 18
// 12 / 3 + 4 - 2 * 5         // -2



// Question 5.
// Explain the difference between the == and === operators in JavaScript, and provide an example where their behavior differs.

// Ans 5.
// == (equal to) operator ka use hota hai koi 2 value check krne ke liye ki vo equal hai ya nhi .  
// === (strict equal to) operator ka use hota hai koi 2 value check krne ke liye aur isme datatype bhi check hota hai .

// for example
 
// console.log(11 == "11")  // isme sirf value check hoti hai 

// console.log(11 === "11")  // isme value ke sath data type bhi check hoti hai



// Question 7.
// Write a JavaScript program that prompts the user to enter their age and their country of residence. Based on the age and country, display a message using if-else if-else statements and logical operators. Consider the following conditions:

// If the age is less than 18, display "Sorry, you must be at least 18 years old."
// If the age is 18 or older and the country is "USA", display "Welcome! Enjoy your stay in the USA."
// If the age is 18 or older and the country is "UK", display "Welcome! Enjoy your stay in the UK."
// If the age is 18 or older and the country is neither "USA" nor "UK", display "Welcome! Enjoy your stay."


// Ans 7.
// let age = Number(prompt("Enter Your Age"))
// let residence = prompt("Enter Your Country of Residence ?")
// if(age < 18 ){
//     console.log("Sorry, you must be at least 18 years old.");
// }

// else if(age >= 18 && residence == "USA"){
//     console.log("Welcome! Enjoy your stay in the USA.");
// }
// else if(age >= 18 && residence == "UK"){
//     console.log("Welcome! Enjoy your stay in the UK.");
// }
// else{
//     console.log("Welcome! Enjoy your stay.")
// }




// Question 8.
// Question: Write a JavaScript program that prompts the user to enter a sentence. The program should perform the following operations:
// Use the toLowerCase function to convert the sentence to lowercase.
// Use the replace function to replace all spaces with dashes ("-") in the modified sentence.
// Use the slice function to extract a substring from the 2nd to the 6th character (inclusive) of the modified and replaced sentence.
// Use the startsWith function to check if the extracted substring starts with the letter "a".
// Display the result of the check using an alert box.


// Ans 8.
// user = prompt("Enter a sentence")


//     let a=user.toLowerCase()
//     console.log(a)
//     let b =a.replace(" ", "-")
//     console.log(b)
//     let c = b.slice(2, 7)
//     console.log(c);
//     let d = c.startsWith("a")
//     alert(d)





// Question 9.
// Question: Write a JavaScript function called calculateArea that takes the length and width of a rectangle as parameters and returns the area of the rectangle. The formula for calculating the area is length * width.

// Ans 9.
// function calculateArea(length,width) {
//     console.log(length*width)
//     return (50*50)
// }

// let area = calculateArea(20,50)
// console.log(area)





// Question 10.
// Write a JavaScript function which calculate sum of 4 numbers. If sum of 4 numbers is greater than 100 then return 1 else return 2

// Ans 10.
// function sum(a,b,c,d){    

//     console.log(a + b + c + d)    
// {
//     if(sum>100){    
       
//         return 1 
 
//     }else{         
        
//           return 2
   
//     }  
    
//   }
// }
// let i = (sum(10,10,10,10))
// console.log(i)







let sum = 0;
for(let i = 3; i<=1000; i++){
    if(i%3===0 || i% 5===0){
        sum+=i
        console.log(i)
    }
    
}
console.log(sum)










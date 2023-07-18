// let loggedIn = false;
// if (!loggedIn) {
//   console.log("Please login first.");
// }


// let i = "9581894461";
// let a = (i.slice( 0,5))
// console.log(a.padEnd(10, "*"))

// let b = i.slice(5)
// console.log(b.padStart(10, "*"))



// let i = "9581894461";
// let start = i.slice(0,3)
// console.log(start)
// let end = i.slice(7,10)
// console.log(end)
// console.log(start.padEnd(7,("*")) +end)


// let user = prompt("what is your name ")
// let str = (user.repeat(5))
// console.log(str)




// let str1 = ""
// for(let i = 1; i<= 5; i++){
//     str1+=user
//     console.log(str1)
// }
// console.log(str1)




// let user = prompt("what is the institute name?")
// let i = user.includes("academy")
// console.log(i)
// if(i){
//     console.log(user.indexOf(" academy"))
// }
// else{
//     console.log(user.concat(" academy"))
// }



// let user = prompt("what is the institute name?")
// console.log(user)
// let i = user.includes("academy")
// console.log(i)
// if(user.startsWith("academy") && (user.indexOf("academy") %2 == 1))){
//     console.log("yes")
// }
// else if(user.startsWith("academy") && (user.indexOf("academy")%2 == 0))){
//     console.log("yes even")
// }
// else if(user.endsWith("academy") && (user.indexOf("academy"%2 == 1))){
//     console.log("no")
// }
// else if(user.endsWith("academy") && (user.indexOf("academy"%2 == 0))) {
//     console.log("no even")
// } 
// else{
//     console.log("ERROR")
// }




// var str = "Hello World";
// var index = str.lastIndexOf("l", 5);
// console.log(index);



// let i = 10;
// if(i>20){
//     console.log("yes")
// }else{
//     console.log("no")
// }



// let i = 100;

//  let a = i>10 ? console.log("yes"): console.log("no");




function sum(math , eng ,sc){
    let i = math + eng + sc ;

    return i;
}


function percentage(tt){
    let per = tt/300 * 100
    document.write(per)
}


let total = sum(50 , 50 ,50)
percentage(total)



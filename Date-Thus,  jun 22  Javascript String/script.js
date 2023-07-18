// STRING


// What is a String
// let i = "Wecode";
// let n = 'Academy'
// console.log(i,n)



// Uses of single quote and double quotes in string
// let i = "Lord"
// let p = 'Puneet'
// console.log(i,p)


// Escape characters

// let i = "I\"m a String"
// console.log(i)



//TEMPLATE LITRAL
// let i = "Shaad"
// console.log(`hey my name is ${i}`)


// String length property
// let i = "shaad1234567890"
// console.log(i.length)






// ### String functions
//toUpperCase

// let i = "shaad1234567890"
// console.log(i.toUpperCase())



//toLowerCase

// let i = "HELLO WORLD"
// console.log(i.toLowerCase())



//indexOf

// let i = "HELLO WORLD"
// console.log(i.indexOf("l"))  // 0 se count krke position btata hai




// slice()

// let i = "HELLO WORLD"
// console.log(i.slice(1, 10)) 



//replace()

// let i = "HELLO WORLD"
// console.log(i.replace("WORLD","shaad"))  



//trim()

// let i = " HELLO WORLD     "
// console.log(i.trim())  



//concat()
// let i = "HELLO "
// let b="Wecode "
// let c = "nancy "
// let d="sadaf "
// let e = "cute "
// let n="dog "
// console.log(i.concat(b,c,d,e,n)) 



//repeat()

// let i ="shaad "
// console.log(i.repeat(7))



//trimStart()

// let i ="      shaad     "
// console.log(i.trimStart())
//trimStart


//trimEnd()

// let i ="      shaad     "
// console.log(i.trimEnd())



//startsWith()

// let i ="shaad"
// console.log(i.startsWith("s"))



//endsWith()

// let i ="shaad"
// console.log(i.endsWith(""))



//

// split
// let i ="Wecode academy"
// console.log(i.split("a"))



//lastIndexOf()

// let i ="Shaad Ali Ali Madani"
// console.log(i.lastIndexOf("Ali"))  // diffrence ye hai ki ye bad wale ko calculate krega
// console.log(i.indexOf("Ali"))



//padStart()

// let i = "99775"
// console.log(i.padStart(10,"*"))



//padEnd()

// let a = "99775"
// console.log(a.padEnd(100,"*"))



//includes()

// let i = "shaad"
// console.log(i.includes("shaad"))



//valueOf()

// let i = "shaad"
// let a = new String("shaad")
// console.log(typeof i, typeof a);
// console.log(typeof i ,typeof a.valueOf())


//substr()

// let i = "shaad"
// console.log(i.substr(2))  



//substr()

// let i = "shaad"
// console.log(i.substr(2))  


//substring

// let i = "shaad123456"
// console.log(i.substring(2, 6)) 




// let a = "9581894461";
// console.log(a.slice(0,5))

// let b = (a.slice(0,5))
// console.log(pads)


// let i = "9581894461";
// console.log(i.substring(5))



// let i = "9589584461"
// let end = i.slice(0,3)
// console.log(end.padEnd(7,"*"))




//question 

// let i =prompt("what is your name")
// console.log(i.repeat(5))
// for(let a =1;a<=5; a++){
//     console.log("hello")
// }



// let ask= prompt("what is the institute name ?")
// if(ask === "Wecode Academy"){
//     console.log(ask.indexOf("Wecode Academy"))
// }
// else(ask === "Wecode")
//     console.log(ask.includes(" Academy"))





// let i = prompt("what is the word")
// console.log(i)
// if(i === i.endsWith("Wecode") && i=== i.)




// let i= "shaad ali";
// console.log(i.valueOf())
// console.log(valueOf("shaad"))


// var str = "javascript is a great language";
// var result = str.slice(3,10);
// console.log(result)

// let str = new String("javascript")
// let r= str.slice(3,10)
// console.log(r)
// console.log(typeof str.valueOf())




// let i = "WECODE academy";
// let leftpart=i.slice(0,1)
// let rightpart =i.slice(1)
// console.log(leftpart.toUpperCase() + rightpart.toLowerCase()) 


for(let i=5; i>=1;i--){
  
    console.log("1".repeat(i))
   
}
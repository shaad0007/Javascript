// console.log(document);
// let pTag = document.getElementById("hello");
// document.getElementsByClassName("test");
// pTag.style.backgroundColor = "purple";
// pTag.style.color = "green";
// pTag.style.fontSize = "50px";
// pTag.innerHTML = "<i>Hello yarr bhai</i>";
// document.getElementsByClassName("test").textContent = "python";
// document.getElementById("test")[1].style.backgroundColor = "red";
// document.getElementsByTagName("span").;

console.log(document);
let pTag = document.getElementById("hello");
pTag.style.color = "red";
pTag.style.backgroundColor = "cyan";
pTag.style.fontSize = "50px";
pTag.innerHTML = "<i>Mein to papa hu</i>";
document.getElementById("text").innerText = "what the hell";
document.getElementsByClassName("test")[0].style.backgroundColor = "green";
document.getElementsByTagName("span")[1].style.fontSize = "100px";
document.querySelector(".wecode").style.color = "cyan";
// document.querySelectorAll(".wecode")[0].style.color = "green";
// document.querySelectorAll(".wecode")[1].style.color = "green";
for (let value of document.querySelectorAll(".wecode")) {
  value.style.color = "red";
}
console.log(document.baseURI);
// setInterval(() => {
//   pTag.hidden = !pTag.hidden;
// }, 1000);

// console.log(document.getElementsByClassName("test"));

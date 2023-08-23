document.getElementById("one").addEventListener("click", () => {
  let element = document.getElementById("first");
  element.hidden = !element.hidden;
});
document.getElementById("two").addEventListener("click", () => {
  let element = document.getElementById("second");
  element.hidden = !element.hidden;
});
document.getElementById("three").addEventListener("click", () => {
  let element = document.getElementById("third");
  element.hidden = !element.hidden;
});

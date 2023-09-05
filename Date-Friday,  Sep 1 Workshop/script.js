let a = 0;
setInterval((shift) => {
  a += 10;
  let target = document.getElementById("div");
  target.style.marginLeft = a + "px";
}, 1000);

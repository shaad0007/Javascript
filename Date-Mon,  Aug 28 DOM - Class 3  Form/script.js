function validate() {
  let myName = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let bonus = document.getElementById("bonus").value;
  let checkbox = document.getElementById("checkbox").value;
  let textarea = document.getElementById("textarea").value;
  let myState = document.getElementById("myState").value;
  let btn = document.getElementById("btn").value;
  let radio = document.getElementsByName("Gender").value;
  console.log(myName, role, email, date, bonus, textarea, myState);

  if (!myName) {
    alert("Enter your name");
    return false;
  }
  if (!email) {
    alert("fill the page properly");
    return false;
  }
  if (!role) {
    alert("Enter your name");
    return false;
  }
  if (!date) {
    alert("fill the page properly");
    return false;
  }
  if (!textarea) {
    alert("Enter your name");
    return false;
  }
}

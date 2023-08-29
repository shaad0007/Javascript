function validate() {
  let text = document.getElementById("text").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;
  // document.getElementById("fieldset").innerHTML("<b>Wecode Academy</b>");

  if (!text) {
    alert("Type your Full Name");
    return false;
  }
  if (!email) {
    alert("Enter Your Email ");
    return false;
  }
  if (!password) {
    alert("Enter your password");
    return false;
  }
  if (!(cpassword === password)) {
    alert("Confirm Your Password");
    return false;
  }
}
